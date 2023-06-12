import React from 'react'

import styles from './ProductRatingScale.module.css'

type ProductRatingScaleProps = {
  rating: number
}

const ProductRatingScale = ({ rating }: ProductRatingScaleProps) => {
  // Normalize the rating to be within 0 and 100 for the bar width
  const normalizedRating = (rating / 5) * 100

  return (
    <div className={styles.container}>
      <div className={styles.scaleContainer}>
        <div
          className={styles.scaleIndicator}
          style={{
            width: `${normalizedRating}%`,
          }}
        />
      </div>
      <div className="ml-2 text-sm font-semibold tracking-wide text-gray-700">{rating}</div>
    </div>
  )
}

export default ProductRatingScale
