import { isMobileNavigationAnimationOpen, isMobileMenuVisible } from '@/store'
import classNames from 'classnames'
import { useAtom, useAtomValue, useSetAtom } from 'jotai'
import { NavigationScrollReveal } from './Navigation/NavigationScrollReveal'
import { AnimatePresence } from 'motion/react'

export const MobileNavTrigger = () => {
  const [isOpen, setOpen] = useAtom(isMobileMenuVisible)
  // const isRangeOpen = useAtomValue(isMobileNavigationAnimationOpen)

  return (
    <div>
      <AnimatePresence>
        {!isOpen && (
          <div className="fixed z-2000 top-0 right-0 mix-blend-difference hover:mix-blend-normal group">
            <NavigationScrollReveal>
              <button
                type="button"
                onClick={() => setOpen((bool) => !bool)}
                aria-label="Open navigation menu"
                aria-expanded="false"
                aria-controls="mobile-navigation"
                className={classNames(
                  `appearance-none cursor-pointer h-[60px] w-[120px]
          flex items-center justify-center xl:hidden
          tracking-widest text-[15px] font-600 uppercase font-display
group-hover:text-black text-white hover:bg-primary-500
          hover:shadow-button`,
                )}
              >
                Menu
              </button>
            </NavigationScrollReveal>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}
