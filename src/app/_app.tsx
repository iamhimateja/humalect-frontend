import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { AppProps } from 'next/app'
import React from 'react'

const queryClient = new QueryClient()

export default function MyApp({ Component, pageProps }: AppProps<any>) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  )
}
