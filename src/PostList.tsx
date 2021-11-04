import React from 'react'
import { useStrategy } from './strategy/StrategyProvider'

export const PostList = () => {
  const { hook: useGetData } = useStrategy()
  const { data, isLoading } = useGetData()

  if (isLoading) {
    return <div>loading</div>
  }

  return (
    <ul>
      {(data || []).map((x) => (
        <li key={x.id}>
          {x.id}: {x.title}
        </li>
      ))}
    </ul>
  )
}
