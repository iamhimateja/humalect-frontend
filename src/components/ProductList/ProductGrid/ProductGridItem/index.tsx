import Tippy from '@tippyjs/react'
import Link from 'next/link'
import React from 'react'

import type { Product } from '@/types'

import styles from './ProductGridItem.module.css'

type ProductGridItemProps = {
  product: Product
  animationDelay: number
}

const ProductGridItem = ({ product, animationDelay }: ProductGridItemProps) => {
  return (
    <Link
      href={`/product/${product.id}`}
      className={styles.container}
      style={{ '--delay': animationDelay } as React.CSSProperties}
    >
      <div className={styles.productThumbnail} style={{ backgroundImage: `url(${product.thumbnail})` }} />
      <div className={styles.productInfoWrap}>
        <Tippy content="Click to see all products in this category">
          <Link href={`/category/${product.category}`} className={styles.categoryLink}>
            {product.category}
          </Link>
        </Tippy>
        <h3 className={styles.title}>{product.title}</h3>
        <p className={styles.priceWrapper}>
          <del className={styles.price}>{product.price}</del>
          <ins className={styles.discountedPrice}>{product.discountedPrice}</ins>
          <span className={styles.discount}>(-{product.discountPercentage}%)</span>
        </p>
      </div>
    </Link>
  )
}

export default ProductGridItem
