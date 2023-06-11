/* eslint-disable @next/next/no-img-element */
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
      <div
        className="h-80 w-full bg-contain bg-center	bg-no-repeat ring-1 ring-inset ring-gray-500/10"
        style={{ backgroundImage: `url(${product.thumbnail})` }}
      />
      <div className="p-4">
        <span className="text-light inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium tracking-wider text-gray-600 ring-1 ring-inset	ring-gray-500/10">
          {product.category}
        </span>
        <h3 className="text-md mt-1 text-gray-700">{product.title}</h3>
        <p className="mt-1 text-sm font-medium tracking-widest">
          <del className="text-red-400">{product.price}</del>
          <ins className="text-bold ml-2 text-gray-900 no-underline">{product.discountedPrice}</ins>
        </p>
      </div>
    </Link>
  )
}

export default ProductGridItem
