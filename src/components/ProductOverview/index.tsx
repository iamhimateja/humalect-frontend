'use client'

import type { AxiosError } from 'axios'
import React from 'react'

import { discountedPrice, formatPrice } from '@/helpers'
import { useProducts } from '@/hooks'
import type { Product } from '@/types'

import Breadcrumbs from '../Breadcrumbs'
import Loading from '../Loading'
import NotFoundMessage from '../NotFoundMessage'
import ProductImageGallery from './ProductImageGallery'
import ProductInfo from './ProductInfo'
import styles from './ProductOverview.module.css'

type ProductOverviewProps = {
  productId: string
}

const ProductOverview = ({ productId }: ProductOverviewProps) => {
  const {
    data: _data,
    isLoading,
    isFetching,
    error,
  } = useProducts(
    {
      id: Number(productId),
    },
    {
      select: (data) => {
        const _data = data as Product
        return {
          ..._data,
          price: formatPrice(_data.price),
          discountedPrice: formatPrice(discountedPrice(_data.price, _data.discountPercentage)),
        }
      },
    },
  )

  const product = _data as Product
  const isLoaded = !isLoading && !isFetching
  const _error = error as AxiosError

  if (_error?.response?.status === 404) {
    return <NotFoundMessage />
  }

  return (
    <div className={styles.container}>
      {isLoading && <Loading />}
      {isLoaded && (
        <Breadcrumbs
          pages={[
            {
              name: product.category,
              href: `/category/${product.category}`,
            },
            {
              name: product.title,
              href: `/product/${product.id}`,
              current: true,
            },
          ]}
        />
      )}
      <h2 className={styles.title}>{product?.title}</h2>
      <div className={styles.gridContainer}>
        <ProductImageGallery images={product?.images} itemTitle={product?.title} />
        <ProductInfo product={product} />
      </div>
    </div>
  )
}

export default ProductOverview
