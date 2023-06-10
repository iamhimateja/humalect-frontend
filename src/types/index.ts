export interface Product {
  id: number
  title: string
  description: string
  price: number
  discountPercentage: number
  discountedPrice?: string
  rating: number
  stock: number
  brand: string
  category: string
  thumbnail: string
  images: string[]
}

export interface ProductsResponse {
  products: Product[]
  total: number
  skip: number
  limit: number
}

export interface ProductParams {
  id?: number
  q?: string
  limit?: number
  skip?: number
  category?: string
  select?: string
}

export interface Pagination {
  resetPage: () => void
  nextPage: () => void
  prevPage: () => void
  currentPage: number
  maxPage: number
}
