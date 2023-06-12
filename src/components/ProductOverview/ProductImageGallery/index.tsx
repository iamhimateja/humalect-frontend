import clsx from 'clsx'
import Image from 'next/image'
import React from 'react'
import Slider from 'react-touch-drag-slider'

import type { Product } from '@/types'

import styles from './ProductImageGallery.module.css'

type ProductImageGalleryProps = {
  itemTitle?: Product['title']
  images?: Product['images']
}

const ProductImageGallery = ({ images, itemTitle }: ProductImageGalleryProps) => {
  const [activeIndex, setActiveIndex] = React.useState(0)

  if (!images || images.length === 0 || !itemTitle) {
    return null
  }

  return (
    <div className={styles.container}>
      <div className={styles.sliderContainer}>
        <Slider
          activeIndex={activeIndex}
          threshHold={100}
          transition={0.2}
          scaleOnDrag={false}
          onSlideComplete={(index) => setActiveIndex(index)}
        >
          {images.map((image, index) => (
            <div tabIndex={0} key={index}>
              <Image src={image} className={styles.sliderImage} alt={itemTitle} fill />
            </div>
          ))}
        </Slider>
      </div>
      <div className={styles.thumbnailsContainer}>
        <div className={styles.thumbnailGrid} aria-orientation="horizontal" role="tablist">
          {images.map((image, index) => (
            <button
              key={index}
              className={styles.thumbnailTrigger}
              role="tab"
              type="button"
              tabIndex={0}
              aria-selected="true"
              onClick={() => setActiveIndex(index)}
            >
              <span className={styles.thumbnailImageWrapper}>
                <Image src={image} alt={itemTitle} className={styles.thumbnailImage} fill />
              </span>
              <span
                className={clsx(
                  styles.thumbnailHighlight,
                  activeIndex === index ? 'ring-indigo-500' : 'ring-transparent',
                )}
                aria-hidden="true"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductImageGallery
