import { useRouter } from 'next/navigation'

export function useActiveLink(classes: string): boolean
export function useActiveLink(
  classes: Record<string, string>,
): Record<string, boolean>
export function useActiveLink(classes: any): any {
  const router = useRouter()

  if (typeof classes === 'string') {
    return router.pathname === classes
  }

  const result: Record<string, boolean> = {}

  Object.keys(classes).forEach((className) => {
    result[className] = router.pathname === classes[className]
  })

  return result
}
