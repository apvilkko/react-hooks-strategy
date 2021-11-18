import { useEffect, useState } from 'react'
import { HookReturnType } from '../types'

const useMockStrategy = (): HookReturnType => {
  const [isLoading, setIsLoading] = useState(true)

  // Simulate 1 second loading time
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)
    return () => {
      clearTimeout(timer)
    }
  }, [])

  // Return mock data
  return {
    data: [
      {
        id: 1000,
        title: 'mock title 1',
      },
      {
        id: 2000,
        title: 'mock title 2',
      },
    ],
    isLoading,
  }
}

const ProviderComponent: React.FC<{}> = ({ children }) => <>{children}</>

export const mockStrategy = {
  hook: useMockStrategy,
  ProviderComponent,
}
