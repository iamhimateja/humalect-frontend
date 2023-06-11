import React from 'react'

import type { Product } from '@/types'

import ProductGridItem from './ProductGridItem'
type ProductGridProps = {
  products?: Product[]
}

const ProductGrid = ({ products }: ProductGridProps) => {
  if (!products) {
    return null
  }

  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 xl:gap-x-8">
      {products.map((product, index) => (
        <ProductGridItem product={product} animationDelay={index} key={product.id} />
      ))}
    </div>
  )
}

export default ProductGrid
