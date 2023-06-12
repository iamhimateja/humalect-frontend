import React from 'react'

import { SettingsIcon } from '@/components/Icons'

import styles from './ProductsPerPage.module.css'

type ProductsPerPageProps = {
  limit: number
  maxLimit: number
  handleLimitChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const ProductsPerPage = ({ limit, maxLimit, handleLimitChange }: ProductsPerPageProps) => {
  return (
    <div>
      <label htmlFor="products-per-page" className={styles.label}>
        Products per page
      </label>
      <div className={styles.inputWrap}>
        <input
          type="number"
          className={styles.input}
          id="products-per-page"
          placeholder="Products per Page"
          min={1}
          max={maxLimit}
          value={limit}
          onChange={handleLimitChange}
        />
        <div className={styles.inputIcon}>
          <SettingsIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </div>
      </div>
    </div>
  )
}

export default ProductsPerPage
