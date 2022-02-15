import * as React from 'react'

import { screens } from '../theme/tailwind'

export interface Theme {
  screens: typeof screens
}

export interface ThemeContextValue {
  screens: typeof screens
}

export const ThemeContext = React.createContext<ThemeContextValue>({} as any)

const value = {
  screens,
}

export const ThemeProvider: React.FC = ({ children }) => {
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export const useTheme = (): ThemeContextValue => {
  return React.useContext(ThemeContext)
}
