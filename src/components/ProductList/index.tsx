'use client'
import { useState } from 'react'
import { useDebounce } from 'react-use'

import { discountedPrice, formatPrice } from '@/helpers'
import { DEFAULT_PRODUCTS_LIMIT } from '@/helpers/constants'
import { usePagination, useProducts } from '@/hooks'
import type { ProductsResponse } from '@/types'

import Breadcrumbs from '../Breadcrumbs'
import Loading from '../Loading'
import DisplaySwitcher from './DisplaySwitcher'
import Pagination from './Pagination'
import ProductGrid from './ProductGrid'
import styles from './ProductList.module.css'
import ProductsPerPage from './ProductsPerPage'
import ProductTable from './ProductTable'
import Search from './Search'

type ProductListProps = {
  category?: string
}

const ProductList = ({ category }: ProductListProps) => {
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
      category,
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
    <div className={styles.container}>
      <Breadcrumbs
        {...(category
          ? {
              pages: [
                {
                  name: category,
                  href: `/category/${category}`,
                  current: true,
                },
              ],
            }
          : {})}
      />

      <div className={styles.filtersRow}>
        <Search searchTerm={searchTerm} handleSearchChange={handleSearchChange} />
        <ProductsPerPage limit={limit} handleLimitChange={handleLimitChange} maxLimit={total} />
      </div>
      <div className={styles.paginationRow}>
        <DisplaySwitcher display={display} handleDisplayChange={handleDisplayChange} />
        <span className={styles.currentPage}>Page: {currentPage + 1}</span>
        <Pagination currentPage={currentPage} maxPage={maxPage} prevPage={prevPage} nextPage={nextPage} />
      </div>
      <div className="relative mt-4 sm:mx-0">
        {(isLoading || isFetching) && <Loading />}
        {display === 'table' ? <ProductTable products={data?.products} /> : <ProductGrid products={data?.products} />}
      </div>
    </div>
  )
}

export default ProductList
