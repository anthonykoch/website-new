import * as React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import cx from 'classnames'
import { IoLogoGithub } from 'react-icons/io5'
import { MenuIcon, XIcon } from '@heroicons/react/solid'

import { scrollTo } from '@/hooks/use-scroll-into-view'
import { NextRouter, useRouter } from 'next/router'
import classNames from 'classnames'

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
    href: '/#work',
    children: 'Work',
    props: {
      onClick: (e) => {
        if (router.pathname === '/') {
          e.preventDefault()
          scrollTo('#work')
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
]

export const Navigation: React.FC<{
  isBlendModeDifference?: boolean
  colorVariant?: 'white' | 'black'
}> = ({ colorVariant, isBlendModeDifference = false }) => {
  const router = useRouter()
  const links = createLinks(router)

  return (
    <nav>
      <div className="inline-flex list-none *:relative">
        {links.map(({ href, children, props }) => (
          <li className="hidden xl:block" key={href}>
            <Link
              href={href}
              className={classNames(
                `h-[60px] px-12 flex items-center justify-center hover:shadow-box
                tracking-widest text-[15px] font-600 uppercase font-display
              `,
                {
                  'hover:bg-primary-500 hover:text-black hover:shadow-button hover:shadow-black/10':
                    !isBlendModeDifference,
                  'hover:bg-primary-invert hover:shadow-white/20':
                    isBlendModeDifference,
                  'text-black/80': colorVariant === 'black',
                  'text-white/80': colorVariant === 'white',
                },
              )}
              // text-[#ddd]
            >
              {children}
            </Link>
          </li>
        ))}

        <li>
          <a
            href="https://github.com/anthonykoch?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className={cx(
              'leading-none block w-[54px] h-[60px]',
              // styles['NavIconTrigger-is-github'],
              // styles.NavLinkShadow,
            )}
          >
            <IoLogoGithub
              className="absolute-center leading-0 w-[26px] fill-[#ddd]"
              size="22px"
            />
          </a>
        </li>
        {/* <li className="xl:hidden">
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
        </li> */}
      </div>
    </nav>
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
        <Link
          key={href}
          href={href}
          className="hover:bg-gray-400/20 hover:text-gray-200 px-7 py-5 block text-white/90 text-center text-xl"
          onClick={(e) => {
            setOpen(false)
            props?.onClick?.(e)
          }}
        >
          {children}
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
