'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import React from 'react'

function Providers({ children }: React.PropsWithChildren) {
  // Because of  the data from dummyjson.com is static and doesn't change, we can set the staleTime to a high value
  // This will prevent the data from being refetched on every page change

  const [client] = React.useState(new QueryClient({ defaultOptions: { queries: { staleTime: 1000 * 60 * 60 * 24 } } }))

  return (
    <QueryClientProvider client={client}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default Providers
