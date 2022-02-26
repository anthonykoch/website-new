import * as React from 'react'
import cx from 'classnames'
import Link from 'next/link'
import { Nav } from './Nav'
import { Logo } from './Logo'
import styles from './index.module.css'
import { navLinkClasses } from './styles.common'

export const SiteHeaderPlaceholder: React.FC = ({ children }) => (
  <div className="h-site-header-height">{children}</div>
)

export const SiteHeader: React.FC<{ isAbsolute?: boolean }> = ({
  isAbsolute,
}) => {
  return (
    <div
      className={cx(
        'h-site-header-height flex items-start justify-between w-full ',
        {
          ['absolute top-0 left-0']: isAbsolute,
        },
      )}
      role="banner"
    >
      <div className={cx(styles.background)}>
        <div className={cx(styles.BackgroundImage)} />
      </div>
      <div className="Logo">
        <Link href="/" passHref>
          <a
            className={cx(
              'block',
              navLinkClasses.default,
              navLinkClasses.hover,
            )}
          >
            <Logo />
          </a>
        </Link>
      </div>

      <Nav className="z-site-nav" />
    </div>
  )
}
