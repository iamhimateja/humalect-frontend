import clsx from 'clsx'
import React from 'react'

import type { Product } from '@/types'

import ProductItem from './ProductItem'
import styles from './ProductTable.module.css'

type ProductTableProps = {
  products?: Product[]
}

const ProductTable = ({ products }: ProductTableProps) => {
  if (!products) {
    return null
  }

  if (products.length === 0) {
    return <p className={styles.noProducts}>No products found</p>
  }

  return (
    <table className={styles.table}>
      <thead className="hidden sm:table-header-group">
        <tr>
          <th scope="col" className={clsx(styles.tableHeader, 'hidden md:table-cell')}>
            ID
          </th>
          <th scope="col" className={styles.tableHeader}>
            Title
          </th>
          <th scope="col" className={clsx(styles.tableHeader, 'hidden lg:table-cell')}>
            Category
          </th>
          <th scope="col" className={clsx(styles.tableHeader, 'hidden md:table-cell')}>
            Price
          </th>
          <th scope="col" className={clsx(styles.tableHeader, 'hidden sm:table-cell')}>
            Discounted price
          </th>
        </tr>
      </thead>
      <tbody className={styles.tableBody}>
        {products.map((product, index) => (
          <ProductItem product={product} animationDelay={index} key={product.id} />
        ))}
      </tbody>
    </table>
  )
}

export default ProductTable
