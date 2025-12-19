import * as React from 'react'
import cx from 'classnames'
import Link from 'next/link'
import { Nav } from './Nav'
import { Logo } from './Logo'
import styles from './index.module.css'
import { navLinkClasses } from './styles.common'

export const SiteHeaderPlaceholder: React.FC<{ className?: string }> = ({
  className,
  children,
}) => <div className={cx('h-site-header-height', className)}>{children}</div>

export const SiteHeaderBackground: React.FC = ({ children }) => {
  return (
    <div className={cx(styles.background)}>
      <div className={cx(styles.BackgroundImage)} />
      {children}
    </div>
  )
}

export const SiteHeader: React.FC<{
  className?: string
  isAbsolute?: boolean
}> = ({ isAbsolute, className }) => {
  return (
    <div
      className={cx(
        className,
        'flex items-start justify-between w-full z-header',
        {
          'absolute top-0 left-0': isAbsolute,
          relative: !isAbsolute,
        },
      )}
      role="banner"
    >
      <div className="Logo">
        <Link
          href="/"
          className={cx('block', navLinkClasses.default, navLinkClasses.hover)}
        >
          <Logo />
        </Link>
      </div>

      <Nav className="z-site-nav" />
    </div>
  )
}
