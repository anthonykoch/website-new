import * as React from 'react'
import cx from 'classnames'
import Link from 'next/link'
import { Nav } from './Nav'
import { Logo } from './Logo'
import { Popup } from './Popup'
// import mobileHeaderImage from 'images/mobile-header.png'
// import backgroundImage from '@/images/background-1+c.jpg'
import styles from './index.module.css'

export const Header: React.FC = () => {
  return (
    <div
      className={cx(styles.root, {
        // 'has-imageBackground': background === 'image',
        // 'is-collapsed': isCollapsed,
        // 'is-fullHeight': isFullHeight,
        // 'is-floating': isFloating,
      })}
      role="banner"
    >
      <div className={cx(styles.background)}>
        <div className={cx(styles.BackgroundImage)} />
      </div>
      <div className="Logo">
        <Link href="/" passHref>
          <a>
            <Logo />
          </a>
        </Link>
      </div>

      <Nav />
    </div>
  )
}
