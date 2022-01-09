import * as React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import cx from 'classnames'
import { IoLogoGithub } from 'react-icons/io5'
import { MenuIcon, XIcon } from '@heroicons/react/solid'
import { motion } from 'framer-motion'
import { easing } from '@/styles/index'
import { useActiveLink } from '@/hooks/use-active-link'

import {
  NavigationModalContent,
  NavigationModalOverlay,
  NavigationModalPortal,
  NavigationModalRoot,
} from '../NavigationModal'

import styles from './Nav.module.css'

export const NavText: React.FC = ({ children }) => (
  <div className={styles.NavText}>{children}</div>
)

export const Nav = () => {
  // const [refesetReferenceElement
  const awd = useActiveLink({})

  console.log(awd)
  const [isNavigationModalOpen, setOpen] = useState(false)
  const hasLightLinks = true

  return (
    <div className={cx(styles.Nav)} role="navigation">
      <div className={styles.NavList}>
        <li className="hidden lg:block">
          <div>
            <Link href="/#work" passHref>
              <a
                className={cx(
                  styles.NavLink,
                  styles.NavLinkShadow,
                  styles['NavLink-is-text'],
                )}
                onClick={(e) => {
                  return
                  if (window.location.pathname === '/') {
                    e.preventDefault()
                    // this.$scrollTo('#work')
                  }
                }}
              >
                <NavText>Work</NavText>
              </a>
            </Link>
          </div>
        </li>
        <li className="hidden lg:block">
          <Link href="/blog" passHref>
            <a
              active-className="/blog"
              className={cx(
                styles.NavLink,
                styles.NavLinkShadow,
                styles['NavLink-is-text'],
              )}
            >
              <NavText>Blog</NavText>
            </a>
          </Link>
        </li>
        <li className="hidden lg:block">
          <Link active-className="/contact" href="/contact" passHref>
            <a
              className={cx(
                styles.NavLink,
                styles['NavLink-is-text'],
                styles.NavLinkShadow,
              )}
            >
              <NavText>Contact</NavText>
            </a>
          </Link>
        </li>
        <li>
          <IconTrigger
            href="https://github.com/anthonykoch?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className={cx(
              ' leading-none',
              styles['NavIconTrigger-is-github'],
              styles.NavLinkShadow,
            )}
          >
            <IoLogoGithub
              className={cx(styles.NavMenuIcon, 'absolute-center')}
              size="22px"
            />
          </IconTrigger>
        </li>
        <li className={cx('lg:hidden')}>
          <div className={cx(styles.Menu)}>
            <div>
              <NavigationModalRoot isOpen={isNavigationModalOpen}>
                <NavigationModalPortal>
                  <div
                    className={cx({
                      'pointer-events-none': !isNavigationModalOpen,
                    })}
                  >
                    <NavigationModalOverlay />
                    <NavigationModalContent>
                      {isNavigationModalOpen && (
                        <MenuButton
                          className="absolute top-0 right-0"
                          isOpen={isNavigationModalOpen}
                          onClick={() => setOpen(false)}
                        />
                      )}
                      <motion.div
                        initial={{ opacity: 0, y: -40 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -40 }}
                        transition={{ ease: easing, duration: 0.6 }}
                      >
                        <MobileNavLinks />
                      </motion.div>
                    </NavigationModalContent>
                  </div>
                </NavigationModalPortal>
              </NavigationModalRoot>

              <div>
                <MenuButton
                  isOpen={isNavigationModalOpen}
                  onClick={() => setOpen(true)}
                />
              </div>
            </div>
          </div>
        </li>
      </div>
    </div>
  )
}

function IconTrigger<
  HTMLProps extends JSX.IntrinsicElements[As],
  // HTMLProps extends JSX.IntrinsicElements[As],
  T extends { children: React.ReactNode },
  As extends keyof JSX.IntrinsicElements,
>({
  children,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  as: Tag = 'a' as keyof JSX.IntrinsicElements,
  ...props
}: T & HTMLProps & { as?: As }) {
  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <Tag
      {...props}
      className={cx('block w-nav-icon-width h-nav-height', props.className)}
    >
      {children}
    </Tag>
  )
}

const MobileNavLinks: React.FC<{ className?: string }> = ({ className }) => (
  <div
    className={cx(
      styles.MobileNavLinks,
      className,
      'mx-auto divide-y divide-gray-200/10',
    )}
  >
    {links.map(({ href, children }) => (
      <Link key={href} href={href} passHref>
        <a className="hover:bg-gray-400/20 hover:text-gray-200 px-7 py-5 block text-white/90 text-center text-xl">
          {children}
        </a>
      </Link>
    ))}
  </div>
)

const MenuButton: React.FC<
  { isOpen: boolean } & React.HTMLAttributes<HTMLButtonElement>
> = ({ isOpen, ...props }) => (
  <IconTrigger
    as="button"
    type="button"
    className={cx(props.className)}
    {...props}
  >
    {!isOpen ? (
      <MenuIcon
        className={cx(styles.NavMenuIcon, 'absolute-center')}
        width={24}
      />
    ) : (
      <XIcon className={cx(styles.NavMenuIcon, 'absolute-center')} width={20} />
    )}
  </IconTrigger>
)

const links = [
  {
    href: '/blog',
    children: 'Blog',
  },
  {
    href: '/#work',
    children: 'Work',
  },
  {
    href: '/contact',
    children: 'Contact',
  },
  {
    href: '/mentoring',
    children: 'Mentoring',
  },
]
