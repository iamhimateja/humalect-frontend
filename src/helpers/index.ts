export const discountedPrice = (price: number, discountPercentage: number): number => {
  return Number((price - price * (discountPercentage / 100)).toFixed(2))
}

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price)
}
