import React from 'react'

const BaseHeader = () => {
  return (
    <>
      <div className="flex flex-col items-start gap-4 px-4 sm:px-6 md:flex-row md:justify-between lg:px-8">
        <div className="flex-1 space-y-4">
          <h1 className="font-heading inline-block text-2xl font-bold tracking-tight lg:text-5xl">Products</h1>
          <p className="text-muted-foreground text-xl">
            Products list is fetched from{' '}
            <a target="_blank" className="text-indigo-700 hover:text-indigo-500" href="https://dummyjson.com/">
              Dummy JSON
            </a>
          </p>
        </div>
      </div>

      <hr className="my-8" />
    </>
  )
}

export default BaseHeader
