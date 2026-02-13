import { usePathname } from 'next/navigation'
import { useRouter } from 'next/router'
import { useCallback, useEffect } from 'react'

export const useScrollIntoViewOnMount = () => {
  const router = useRouter()
  const { scrollToHref } = useScrollIntoView()

  useEffect(() => {
    setTimeout(() => {
      scrollToHref(router.asPath)
    }, 200)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}

export const scrollTo = (
  selector: string | HTMLElement,
  options: {
    scrollIntoViewOptions?: ScrollIntoViewOptions
  } = {},
): void => {
  const {
    scrollIntoViewOptions = {
      behavior: 'smooth',
    },
  } = options

  const el =
    typeof selector === 'string' ? document.querySelector(selector) : selector

  if (el) {
    el.scrollIntoView(scrollIntoViewOptions)
  }
}

export const useScrollIntoView = () => {
  const pathname = usePathname()

  const scrollToHref = useCallback(
    (pathname: string): void => {
      if (!pathname.includes('#')) return

      const [path, id] = pathname.split('#')

      if (pathname === path) {
        const el = document.getElementById(id)

        if (el) {
          scrollTo(el)
        }
      }
    },
    [router],
  )

  return {
    scrollTo,
    scrollToHref,
  }
}
