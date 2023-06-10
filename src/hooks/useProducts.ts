import type { UseQueryOptions } from '@tanstack/react-query'
import { useQuery } from '@tanstack/react-query'
import type { AxiosResponse } from 'axios'
import axios from 'axios'

import { PRODUCTS_URL } from '@/helpers/constants'

import type { ProductParams, ProductsResponse } from '../types'

const getProducts = async (params: ProductParams = {}): Promise<ProductsResponse> => {
  let url: string

  if (params.id) {
    // Single product fetch
    url = `${PRODUCTS_URL}/${params.id}`
  } else if (params.q && params.q !== '') {
    // Search products
    url = `${PRODUCTS_URL}/search?q=${params.q}`
  } else if (params.category) {
    // Get products of a category
    url = `${PRODUCTS_URL}/category/${params.category}`
  } else {
    // Get all products or with pagination
    const limitParam = params.limit ? `limit=${params.limit}` : ''
    const skipParam = params.skip ? `&skip=${params.skip}` : ''
    const selectParam = params.select ? `&select=${params.select}` : ''
    url = `${PRODUCTS_URL}?${limitParam}${skipParam}${selectParam}`
  }

  const response: AxiosResponse<ProductsResponse> = await axios.get(url)

  if (response.status !== 200) {
    throw new Error('An error occurred while fetching the data.')
  }

  return response.data
}

export const useProducts = (params: ProductParams = {}, options?: UseQueryOptions) => {
  return useQuery({
    queryKey: ['products', params],
    queryFn: () => getProducts(params),
    ...options,
  })
}
