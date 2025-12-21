import Link from 'next/link'
import { Logo } from './Logo'
import { Navigation } from './Navigation'

export const SiteNavigation = () => {
  return (
    <div
      className="flex items-start justify-between w-full z-900"
      role="banner"
    >
      <Link
        href="/"
        // text-gray-200
        className="text-zinc-700 h-[60px] flex items-center transition-colors hover:text-gray-700 hover:bg-primary-500"
      >
        <Logo />
      </Link>

      <Navigation />
    </div>
  )
}
