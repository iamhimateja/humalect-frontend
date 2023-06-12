import ProductOverview from '@/components/ProductOverview'

type ProductPageProps = {
  params: {
    productID: string
  }
}

export default function ProductPage({ params: { productID } }: ProductPageProps) {
  return <ProductOverview productId={productID} />
}
