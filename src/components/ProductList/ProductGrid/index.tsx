import React from 'react'

import type { Product } from '@/types'

import styles from './ProductGrid.module.css'
import ProductGridItem from './ProductGridItem'

type ProductGridProps = {
  products?: Product[]
}

const ProductGrid = ({ products }: ProductGridProps) => {
  if (!products) {
    return null
  }

  if (products.length === 0) {
    return <p className={styles.noProducts}>No products found</p>
  }

  return (
    <div className={styles.container}>
      {products.map((product, index) => (
        <ProductGridItem product={product} animationDelay={index} key={product.id} />
      ))}
    </div>
  )
}

export default ProductGrid
