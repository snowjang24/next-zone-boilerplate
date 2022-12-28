import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RecoilRoot } from 'recoil'
import { cache } from '@emotion/css'
import { CacheProvider } from '@emotion/react'
import { globalStyles } from 'theme/global'

const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <CacheProvider value={cache}>
          {globalStyles}
          <Component {...pageProps} />
        </CacheProvider>
      </QueryClientProvider>
    </RecoilRoot>
  )
}
