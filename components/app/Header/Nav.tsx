import * as React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import cx from 'classnames'
import { IoLogoGithub } from 'react-icons/io5'
import { MenuIcon, XIcon } from '@heroicons/react/solid'
import { motion } from 'framer-motion'
import { easing } from '@/styles/index'

import {
  NavigationModalContent,
  NavigationModalOverlay,
  NavigationModalPortal,
  NavigationModalRoot,
} from '../NavigationModal'

import styles from './Nav.module.css'
import { navLinkClasses } from './styles.common'
import { scrollTo } from '@/hooks/use-scroll-into-view'
import { NextRouter, useRouter } from 'next/router'

export const NavText: React.FC = ({ children }) => (
  <div className={styles.NavText}>{children}</div>
)

export const NavLink: React.FC<
  { activeClassName?: string } & React.HTMLProps<HTMLAnchorElement>
> = ({ children, ...props }) => {
  return (
    <a
      {...props}
      className={cx(
        'h-nav-height px-px-nav-link flex items-center justify-center ',
        navLinkClasses.text,
        navLinkClasses.hover,
        styles.NavLinkShadow,
      )}
    >
      <span className="">{children}</span>
    </a>
  )
}

export const Nav: React.FC<{ className?: string }> = ({ className }) => {
  const [isNavigationModalOpen, setOpen] = useState(false)
  const router = useRouter()
  const links = createLinks(router)

  return (
    <div className={cx(styles.Nav, className)} role="navigation">
      <div className={styles.NavList}>
        {links.map(({ href, children, props }) => (
          <li className="hidden xl:block" key={href}>
            <Link href={href} passHref>
              <NavLink {...props}>
                <NavText>{children}</NavText>
              </NavLink>
            </Link>
          </li>
        ))}

        <li>
          <IconTrigger
            href="https://github.com/anthonykoch?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className={cx(
              'leading-none',
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
        <li className={cx('xl:hidden')}>
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
                        <MobileNavLinks setOpen={setOpen} />
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

const MobileNavLinks: React.FC<{
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  className?: string
}> = ({ className, setOpen }) => {
  const router = useRouter()
  const links = createLinks(router)

  return (
    <div
      className={cx(
        styles.MobileNavLinks,
        className,
        'mx-auto divide-y divide-gray-200/10',
      )}
    >
      {links.map(({ href, children, props }) => (
        <Link key={href} href={href} passHref>
          <a
            className="hover:bg-gray-400/20 hover:text-gray-200 px-7 py-5 block text-white/90 text-center text-xl"
            onClick={(e) => {
              setOpen(false)
              props?.onClick?.(e)
            }}
          >
            {children}
          </a>
        </Link>
      ))}
    </div>
  )
}

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

const createLinks = (
  router: NextRouter,
): Array<{
  href: string
  children: React.ReactNode
  props?: React.HTMLProps<HTMLAnchorElement>
}> => [
  {
    href: '/blog',
    children: 'Blog',
  },
  {
    href: '/#portfolio',
    children: 'Portfolio',
    props: {
      onClick: (e) => {
        if (router.pathname === '/') {
          e.preventDefault()
          scrollTo('#portfolio')
        }
      },
    },
  },
  {
    href: '/#contact',
    children: 'Contact',
    props: {
      onClick: (e) => {
        if (router.pathname === '/') {
          e.preventDefault()
          scrollTo('#contact')
        }
      },
    },
  },
  // {
  //   href: '/mentoring',
  //   children: 'Mentoring',
  // },
]
