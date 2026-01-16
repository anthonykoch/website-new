import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useRouterComposer } from '../router/context/RouterComposerContext'
// import { EventEmitter } from 'eventemitter3'

const isInternalLink = (href: string) => {
  try {
    const url = new URL(href)
    return url.hostname === window.location.hostname
  } catch (err) {
    return false
  }
}

const isCurrentLink = (href: string) => {
  try {
    const url = new URL(href)
    return url.pathname === window.location.pathname
  } catch (err) {
    return false
  }
}

export const useHandleLinkClicks = () => {
  const router = useRouter()
  const composer = useRouterComposer()

  useEffect(() => {
    const handleClick = async (e: MouseEvent) => {
      if (e.button !== 0) {
        return
      }

      const target = (e.target as HTMLElement).closest('a')

      if (target == null) return

      if (isInternalLink(target.href) && !isCurrentLink(target.href)) {
        console.log('handling')
        e.preventDefault()

        console.log('before notify')
        await composer.notify('before')
        console.log('after notify')

        console.log('before push')
        await router.push(target.href)
        console.log('after push')

        console.log('before done')
        await composer.notify('done')
        console.log('after done')
      }
    }

    window.addEventListener('click', handleClick, { capture: true })

    return () => {
      window.removeEventListener('click', handleClick, { capture: true })
    }
  }, [])
}
