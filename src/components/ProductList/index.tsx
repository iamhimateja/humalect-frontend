'use client'
import { useState } from 'react'
import { useDebounce } from 'react-use'

import { discountedPrice, formatPrice } from '@/helpers'
import { DEFAULT_PRODUCTS_LIMIT } from '@/helpers/constants'
import { usePagination, useProducts } from '@/hooks'
import type { ProductsResponse } from '@/types'

const ProductList = () => {
  const [total, setTotal] = useState(0)

  const [searchTerm, setSearchTerm] = useState('')
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm)

  const [limit, setLimit] = useState(DEFAULT_PRODUCTS_LIMIT)
  const [debouncedLimit, setDebouncedLimit] = useState(limit)

  useDebounce(() => setDebouncedLimit(limit), 500, [limit])
  useDebounce(() => setDebouncedSearchTerm(searchTerm), 500, [searchTerm])

  const { prevPage, nextPage, maxPage, currentPage, resetPage } = usePagination({
    limit: limit,
    total: total,
  })

  const {
    data: _data,
    isLoading,
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

  if (isLoading) return <div>Loading...</div>

  if (error) return <div>An error has occurred {JSON.stringify(error)}</div>

  return (
    <div>
      <div>
        <button onClick={prevPage} disabled={currentPage === 0}>
          Previous
        </button>
        <button onClick={nextPage} disabled={currentPage === maxPage}>
          Next
        </button>
        <div>Page: {currentPage + 1}</div>
        <div>
          <label>
            Products per page:
            <input type="number" min="1" value={limit} onChange={handleLimitChange} />
          </label>
        </div>
        <div>
          <label>
            Search:
            <input type="text" value={searchTerm} onChange={handleSearchChange} />
          </label>
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Category</th>
            <th>Price</th>
            <th>Discounted price</th>
          </tr>
        </thead>
        <tbody>
          {data.products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>{product.category}</td>
              <td>{product.price}</td>
              <td>{product.discountedPrice}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ProductList
