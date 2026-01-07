export const theme = (name: string): string => {
  const rootElement = document.documentElement
  const computedStyles = window.getComputedStyle(rootElement)

  return computedStyles.getPropertyValue(name)
}
