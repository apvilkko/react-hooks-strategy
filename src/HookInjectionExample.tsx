import React, { useEffect, useState } from 'react'
import { mockStrategy } from './strategy/mockStrategy'
import { HookReturnType, Post } from './types'

/**
 * Common hook factory.
 * Creates a hook which produces output based on the data from the injected hook.
 * The returned hook will simply return the length of data which is received from the provided hook.
 */
const createFormatterHook = (useGetData: () => HookReturnType) => () => {
  const { data, isLoading } = useGetData()
  return isLoading || !data ? 0 : data.length
}

const useIntervalHook = (): HookReturnType => {
  const [data, setData] = useState<Post[]>([])

  // Keeps adding one item to data every second
  useEffect(() => {
    const timer = setInterval(() => {
      setData((existing) => [
        ...existing,
        { id: new Date().getTime(), title: 'foo' },
      ])
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  }, [])

  return { data, isLoading: false }
}

// Hooks are created statically (as opposed to dynamically in a render function).
// Dynamic hooks are possible to use but may lead to trouble in case of weird hook dependencies.
// Be sure to name these according to the hook rules although they are created from a factory.
const useIntervalCount = createFormatterHook(useIntervalHook)
const useMockCount = createFormatterHook(mockStrategy.hook)

export const HookInjectionExample = () => {
  const intervalCount = useIntervalCount()
  const mockCount = useMockCount()

  return (
    <>
      <h2>Hook injection example</h2>
      custom count: {intervalCount}, mock count: {mockCount}
    </>
  )
}
