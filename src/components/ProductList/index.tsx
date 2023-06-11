'use client'
import { useState } from 'react'
import { useDebounce } from 'react-use'

import { discountedPrice, formatPrice } from '@/helpers'
import { DEFAULT_PRODUCTS_LIMIT } from '@/helpers/constants'
import { usePagination, useProducts } from '@/hooks'
import type { ProductsResponse } from '@/types'

import DisplaySwitcher from './DisplaySwitcher'
import Loading from './Loading'
import Pagination from './Pagination'
import ProductGrid from './ProductGrid'
import ProductsPerPage from './ProductsPerPage'
import ProductTable from './ProductTable'
import Search from './Search'

const ProductList = () => {
  const [total, setTotal] = useState(0)

  const [searchTerm, setSearchTerm] = useState('')
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm)

  const [limit, setLimit] = useState(DEFAULT_PRODUCTS_LIMIT)
  const [debouncedLimit, setDebouncedLimit] = useState(limit)

  const [display, setDisplay] = useState<'table' | 'grid'>('table')

  useDebounce(() => setDebouncedLimit(limit), 500, [limit])
  useDebounce(() => setDebouncedSearchTerm(searchTerm), 500, [searchTerm])

  const { prevPage, nextPage, maxPage, currentPage, resetPage } = usePagination({
    limit: limit,
    total: total,
  })

  const {
    data: _data,
    isLoading,
    isFetching,
    error,
  } = useProducts(
    {
      limit: debouncedLimit,
      skip: currentPage * debouncedLimit,
      q: debouncedSearchTerm,
    },
    {
      select: (data) => {
        const _data = data as ProductsResponse
        return {
          ..._data,
          products: _data.products.map((product) => {
            const _product = product
            return {
              ..._product,
              price: formatPrice(_product.price),
              discountedPrice: formatPrice(discountedPrice(_product.price, product.discountPercentage)),
            }
          }),
        }
      },
      onSuccess: (data) => {
        const _data = data as ProductsResponse
        setTotal(_data.total)
      },
    },
  )

  const data = _data as ProductsResponse

  const handleLimitChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLimit(Number(event.target.value))
    resetPage() // Reset current page after changing limit
  }

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
    resetPage() // Reset current page after changing search term
  }

  const handleDisplayChange = (display: 'table' | 'grid') => {
    setDisplay(display)
  }

  if (error) return <div>An error has occurred {JSON.stringify(error)}</div>

  return (
    <div className="flex flex-col">
      <div className="-mx-4 mt-2 flex items-center justify-between sm:-mx-0">
        <Search searchTerm={searchTerm} handleSearchChange={handleSearchChange} />
        <ProductsPerPage limit={limit} handleLimitChange={handleLimitChange} />
      </div>
      <div className="-mx-4 mt-8 flex items-center justify-between sm:-mx-0">
        <DisplaySwitcher display={display} handleDisplayChange={handleDisplayChange} />
        <span className="inline-flex items-center rounded-full bg-blue-100 px-1.5 py-0.5 text-xs font-medium text-blue-700">
          Page: {currentPage + 1}
        </span>
        <Pagination currentPage={currentPage} maxPage={maxPage} prevPage={prevPage} nextPage={nextPage} />
      </div>
      <div className="relative -mx-4 mt-4 sm:-mx-0">
        {(isLoading || isFetching) && <Loading />}
        {display === 'table' ? <ProductTable products={data?.products} /> : <ProductGrid products={data?.products} />}
      </div>
    </div>
  )
}

export default ProductList
