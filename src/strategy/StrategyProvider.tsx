import React from 'react'
import { HookReturnType } from '../types'

type ContextValue = {
  hook: () => HookReturnType
}

const StrategyContext = React.createContext<ContextValue>({
  hook: () => {
    return {} as HookReturnType
  },
})

export const StrategyProvider: React.FC<{
  implementation: ContextValue & { ProviderComponent: React.FC }
}> = ({ implementation, children }) => {
  const { ProviderComponent } = implementation

  return (
    <ProviderComponent>
      <StrategyContext.Provider value={implementation}>
        {children}
      </StrategyContext.Provider>
    </ProviderComponent>
  )
}

export const useStrategy = () => {
  return React.useContext(StrategyContext)
}
