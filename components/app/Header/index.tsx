import * as React from 'react'
import cx from 'classnames'
import Link from 'next/link'
import { Nav } from './Nav'
import { Logo } from './Logo'
import styles from './index.module.css'
import { navLinkClasses } from './styles.common'


export const Header: React.FC = () => {
  return (
    <div className={cx(styles.root)} role="banner">
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

      <Nav />
    </div>
  )
}
