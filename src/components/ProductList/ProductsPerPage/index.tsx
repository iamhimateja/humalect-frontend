import React from 'react'

import { SettingsIcon } from '@/components/Icons'

type ProductsPerPageProps = {
  limit: number
  handleLimitChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const ProductsPerPage = ({ limit, handleLimitChange }: ProductsPerPageProps) => {
  return (
    <div>
      <label htmlFor="products-per-page" className="block text-sm font-medium leading-6 text-gray-900">
        Products per page
      </label>
      <div className="relative mt-2 rounded-md shadow-sm">
        <input
          type="number"
          className="block w-full appearance-none rounded-md border-0 py-1.5 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          id="products-per-page"
          placeholder="Products per Page"
          min="1"
          value={limit}
          onChange={handleLimitChange}
        />
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
          <SettingsIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </div>
      </div>
    </div>
  )
}

export default ProductsPerPage
