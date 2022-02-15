import { Theme, useTheme } from '@/contexts/Theme'
import * as React from 'react'
import { useEffect } from 'react'

type Screens = keyof Theme['screens']

export const useScreenQuery = (query: Screens | Screens[]) => {
  const theme = useTheme()

  return useMediaQuery(
    (!Array.isArray(query) ? [query] : query).map(
      (screen) => `(min-width: ${theme.screens[screen]})`,
    ),
  )
}

export function useMediaQuery(query: string | string[]): boolean[] {
  if (typeof window === 'undefined')
    return Array.isArray(query) ? query.map(() => false) : [false]

  const queries = Array.isArray(query) ? query : [query]
  const isSupported = 'matchMedia' in window

  const [matches, setMatches] = React.useState(
    queries.map((query) =>
      isSupported ? !!window.matchMedia(query).matches : false,
    ),
  )

  useEffect(() => {
    if (!isSupported) return undefined

    const mediaQueryList = queries.map((query) => window.matchMedia(query))

    const listenerList = mediaQueryList.map(() => {
      const listener = () => {
        const isEqual = (prev: boolean[], curr: boolean[]) =>
          prev.length === curr.length &&
          prev.every((elem, idx) => elem === curr[idx])

        const currentMatches = mediaQueryList.map(
          (mediaQuery) => mediaQuery.matches,
        )

        if (!isEqual(matches, currentMatches)) {
          setMatches(currentMatches)
        }
      }

      window.addEventListener('resize', listener)

      return listener
    })

    return () => {
      mediaQueryList.forEach((_, index) => {
        window.removeEventListener('resize', listenerList[index])
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query])

  return matches
}
