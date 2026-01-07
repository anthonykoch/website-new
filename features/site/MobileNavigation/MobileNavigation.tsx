import { ExternalLink } from '@/components/action/Link'
import { isMobileMenuVisible } from '@/store'
import { easeOutExpo } from '@/utils/animation'
import { Portal } from '@radix-ui/react-portal'
import classNames from 'classnames'
import { useAtom } from 'jotai'
import { AnimatePresence, motion, useAnimate, usePresence } from 'motion/react'
import Link from 'next/link'
import { FC, ReactNode, useEffect, useRef } from 'react'
import FocusLock from 'react-focus-lock'

export const MobileNavigation = () => {
  const [isVisible, setVisible] = useAtom(isMobileMenuVisible)

  return (
    <Portal>
      <AnimatePresence>
        {isVisible && (
          // <RemoveScroll>
          <FocusLock>
            <div
              key="mobile-nav"
              id="mobile-navigation"
              className="xl:hidden fixed flex justify-end z-2000 left-0 top-0 size-full"
            >
              <div className="w-[40vw] relative">
                <MobileNavOverlay />
                <div className="w-[calc(100%-60px)] pt-[30px] mx-auto relative text-center">
                  <div className="relative">
                    <motion.button
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: [0, 1],
                        transition: {
                          opacity: {
                            ease: easeOutExpo,
                            duration: 1,
                            delay: 0.2,
                          },
                        },
                      }}
                      exit={{
                        opacity: [1, 0],
                        transition: {
                          opacity: {
                            ease: easeOutExpo,
                          },
                          duration: 1,
                        },
                      }}
                      type="button"
                      onClick={() => setVisible((bool) => !bool)}
                      aria-label="Open navigation menu"
                      aria-expanded="false"
                      aria-controls="mobile-navigation"
                      className={classNames(
                        'w-full',
                        // 'w-[120px]',
                        `ml-auto appearance-none cursor-pointer h-[60px] 
                      flex items-center justify-center xl:hidden
                      tracking-widest text-[15px] font-600 uppercase font-display
            
                      hover:shadow-button`,
                        {
                          'bg-black text-white hover:bg-primary-500 hover:text-black':
                            isVisible,
                          'text-white hover:bg-primary-500': !isVisible,
                        },
                      )}
                    >
                      Close
                    </motion.button>
                    <Links />
                  </div>
                </div>
              </div>
            </div>
          </FocusLock>
        )}
        {/* </RemoveScroll> */}
      </AnimatePresence>
    </Portal>
  )
}

const Text: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="selector-text tracking-widest text-[15px] font-600 uppercase font-display leading-none overflow-clip">
      <span className="block will-change-transform">{children}</span>
    </div>
  )
}

const Button: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <span className="text-black relative block py-5 px-3 active:bg-primary-500 hover:bg-primary-500 hover:shadow-box transition-colors duration-100 hover:text-black">
      {children}
    </span>
  )
}

const MobileNavOverlay = () => {
  const [isPresent, safeToRemove] = usePresence()
  const [scope, animate] = useAnimate()
  const hasAnimatedIn = useRef(false)
  const hasAnimatedOut = useRef(false)

  useEffect(() => {
    ;(async () => {
      if (isPresent) {
        if (!hasAnimatedIn.current) {
          hasAnimatedIn.current = true
          animate(
            'div',
            {
              scaleY: [0.9, 1],
              scaleX: [0.9, 1],
            },
            {
              delay: 0,
              // delay: 0.2 + i * 0.06,
              ease: easeOutExpo,
              duration: 0.5,
              // duration: 1,
            },
          )
        }
      } else {
        hasAnimatedOut.current = true
        if (hasAnimatedOut) {
          await animate(
            'div',
            { opacity: [1, 0], scaleY: [1, 0.9], scaleX: [1, 0.9] },
            {
              delay: 0.06,
              ease: easeOutExpo,
              duration: 0.3,
              //     delay: (list.length - i) * 0.05,
              //     duration: 0.3,
              //     ease: easeOutExpo,
            },
          )
          safeToRemove()
        }
      }
    })()
  }, [isPresent])

  return (
    <div ref={scope}>
      <div
        style={{ boxShadow: '-20px 0 40px -3px rgba(0,0,0,0.1)' }}
        className="h-full w-full origin-center bg-white absolute top-0 right-0"
      />
    </div>
  )
}

const Links = () => {
  const [isPresent, safeToRemove] = usePresence()
  const [scope, animate] = useAnimate()
  const hasAnimatedIn = useRef(false)
  const hasAnimatedOut = useRef(false)

  useEffect(() => {
    ;(async () => {
      if (isPresent) {
        if (!hasAnimatedIn.current) {
          hasAnimatedIn.current = true
          animate(
            '.selector-text',
            { opacity: [0, 1] },
            {
              delay: 0.2,
              // delay: stagger(0.06, { startDelay: 0.2 }),
              // delay: 0.2 + i * 0.06,
              ease: easeOutExpo,
              duration: 1,
            },
          )
        }
      } else {
        hasAnimatedOut.current = true
        if (hasAnimatedOut) {
          await animate(
            '.selector-text',
            { opacity: [1, 0] },
            {
              delay: 0,
              ease: easeOutExpo,
              duration: 0.3,
              //     delay: (list.length - i) * 0.05,
              //     duration: 0.3,
              //     ease: easeOutExpo,
            },
          )
          safeToRemove()
        }
      }
    })()
  }, [isPresent])

  return (
    <div className="z-10" ref={scope}>
      <Link href="/blog">
        <Button>
          <Text>Blog</Text>
        </Button>
      </Link>
      <Link href="/#work">
        <Button>
          <Text>Work</Text>
        </Button>
      </Link>
      <Link href="/#contact">
        <Button>
          <Text>Contact</Text>
        </Button>
      </Link>

      <div className="h-px w-full bg-white/50" />

      <ExternalLink href="https://github.com/anthonykoch?tab=repositories">
        <Button>
          <Text>Github</Text>
        </Button>
      </ExternalLink>
      <ExternalLink href="https://x.com/">
        <Button>
          <Text>@anthkoch</Text>
        </Button>
      </ExternalLink>
    </div>
  )
}

{
  /* <span
                className="block will-change-transform"
                // initial={{ y: ['110%', '0%'] }}
                // initial={{ opacity: 0 }}
                // animate={{
                //   // y: ['110%', '0%'],
                //   opacity: [0, 1],
                //   transition: {
                //     delay: 0.2 + i * 0.06,
                //     duration: 1,
                //     ease: easeOutExpo,
                //   },
                // }}
                // exit={{
                //   opacity: [1, 0],
                //   // y: ['0%', '-110%'],
                //   transition: {
                //     delay: (list.length - i) * 0.05,
                //     duration: 0.3,
                //     ease: easeOutExpo,
                //   },
                // }}
                // transition={{
                //   duration: 1,
                //   ease: easeOutExpo,
                //   // delay: 0.3 + i * 0.06,
                // }}
              >
                {text}
              </span> */
}
