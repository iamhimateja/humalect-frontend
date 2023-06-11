export default function ProductPage({ params }: { params: { productID: string } }) {
  console.log(params.productID)

  return (
    <div className="flex-1">
      <div className="container mx-auto w-full max-w-4xl py-6 lg:py-10">
        <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
          <div className="flex-1 space-y-4">
            <h1 className="font-heading inline-block text-4xl font-bold tracking-tight lg:text-5xl	">Products</h1>
            <p className="text-muted-foreground text-xl">
              Products list is fetched from <a href="https://dummyjson.com/">Dummy JSON</a>
            </p>
          </div>
        </div>

        <hr className="my-8" />
      </div>
    </div>
  )
}
