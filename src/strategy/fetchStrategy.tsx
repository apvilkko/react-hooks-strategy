import React from 'react'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import { HookReturnType, Post } from '../types'

const useFetchStrategy = (): HookReturnType => {
  const { data, isLoading } = useQuery<Post[]>('posts', async () => {
    const resp = await fetch('https://jsonplaceholder.typicode.com/posts')
    return resp.json()
  })

  return { data, isLoading }
}

const queryClient = new QueryClient()

const ProviderComponent: React.FC<{}> = ({ children }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
)

export const fetchStrategy = {
  hook: useFetchStrategy,
  ProviderComponent,
}
