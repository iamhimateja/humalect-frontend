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
      <thead>
        <tr>
          <th scope="col" className={styles.tableHeader}>
            ID
          </th>
          <th scope="col" className={styles.tableHeader}>
            Title
          </th>
          <th scope="col" className={styles.tableHeader}>
            Category
          </th>
          <th scope="col" className={styles.tableHeader}>
            Price
          </th>
          <th scope="col" className={styles.tableHeader}>
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
