import ProductList from '@/components/ProductList'

type ProductListProps = {
  params: {
    category: string
  }
}

export default function ProductsCategorized({ params: { category } }: ProductListProps) {
  return <ProductList category={category} />
}
