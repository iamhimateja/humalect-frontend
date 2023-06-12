import Tippy from '@tippyjs/react'
import clsx from 'clsx'
import Link from 'next/link'
import React from 'react'

import type { Product } from '@/types'

import styles from './ProductItem.module.css'

type ProductItemProps = {
  product: Product
  animationDelay: number
}

const ProductItem = ({ product, animationDelay }: ProductItemProps) => {
  return (
    <tr className={styles.tableRow} style={{ '--delay': animationDelay } as React.CSSProperties}>
      <td className={clsx(styles.tableData, 'lg:table-cell')}>{product.id}</td>
      <td className={styles.tableRowStacked}>
        <Link href={`/product/${product.id}`} className={styles.link}>
          {product.title}
        </Link>
        <dl className="font-normal lg:hidden">
          <dt className="mt-1 text-gray-700">Category</dt>
          <dd className="mt-1 truncate text-gray-700">{product.category}</dd>
          <dt className="text-gray-700 sm:hidden">Price</dt>
          <dd className="mt-1 truncate text-gray-500 sm:hidden">{product.price}</dd>
          <dt className="text-gray-700 sm:hidden">Discounted Price</dt>
          <dd className="mt-1 truncate text-gray-500 sm:hidden">{product.discountedPrice}</dd>
        </dl>
      </td>
      <td className={clsx(styles.tableData, 'lg:table-cell')}>
        <Tippy content="Click to see all products in this category">
          <Link href={`/category/${product.category}`} className={styles.categoryPill}>
            {product.category}
          </Link>
        </Tippy>
      </td>
      <td className={clsx(styles.tableData, 'lg:table-cell')}>{product.price}</td>
      <td className={clsx(styles.tableData, 'lg:table-cell')}>
        {product.discountedPrice} <span className="font-medium text-green-600">(-{product.discountPercentage}%)</span>
      </td>
    </tr>
  )
}

export default ProductItem
