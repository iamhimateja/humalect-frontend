import Breadcrumbs from '@/components/Breadcrumbs'
import ProductList from '@/components/ProductList'

type ProductListProps = {
  params: {
    category: string
  }
}

export default function ProductsCategorized({ params: { category } }: ProductListProps) {
  return (
    <>
      <Breadcrumbs
        pages={[
          {
            name: category,
            href: `/category/${category}`,
            current: true,
          },
        ]}
      />
      <ProductList category={category} />
    </>
  )
}
