import React from 'react'

import ProductRatingScale from '@/components/ProductRatingScale'
import type { Product } from '@/types'

import styles from './ProductInfo.module.css'

type ProductInfoProps = {
  product?: Product
}

const ProductInfo = ({ product }: ProductInfoProps) => {
  if (!product) {
    return null
  }

  return (
    <div className={styles.container}>
      <del className={styles.price}>{product.price}</del>
      <div className={styles.discountedPrice}>{product.discountedPrice}</div>
      <div className={styles.discount}>(-{product.discountPercentage}%)</div>
      <div className="mt-6">
        <div className={styles.description}>
          <p>{product.description}</p>
        </div>
      </div>
      <div className="mt-6">
        <div className={styles.ratingHeading}>Rating</div>
        <ProductRatingScale rating={product.rating} />
      </div>
    </div>
  )
}

export default ProductInfo
