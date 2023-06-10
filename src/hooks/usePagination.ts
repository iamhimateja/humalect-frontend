'use client'
import { useState } from 'react'

import type { Pagination } from '../types'

interface PaginationProps {
  total: number
  limit: number
}

export const usePagination = ({ total, limit }: PaginationProps): Pagination => {
  const [currentPage, setCurrentPage] = useState<number>(0)
  const maxPage = Math.ceil(total / limit) - 1

  const resetPage = (): void => {
    setCurrentPage(0)
  }

  const nextPage = (): void => {
    setCurrentPage((old) => Math.min(old + 1, maxPage))
  }

  const prevPage = (): void => {
    setCurrentPage((old) => Math.max(old - 1, 0))
  }

  return { resetPage, nextPage, prevPage, currentPage, maxPage }
}
