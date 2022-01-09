import * as React from 'react'
import { useState, useMemo } from 'react'
import { RemoveScroll } from 'react-remove-scroll'
import FocusLock from 'react-focus-lock'
import { motion, AnimatePresence } from 'framer-motion'
import { Portal } from '@radix-ui/react-portal'
import cx from 'classnames'

import { easing } from '@/styles/index'

interface NavPopupProps {
  isOpen: boolean
}

interface NavigationModalContextValue {
  isOpen: boolean
  setClosed: () => void
  setOpen: () => void
}

const NavigationModalContext = React.createContext<NavigationModalContextValue>(
  {} as any,
)

export const NavigationModalRoot: React.FC<NavPopupProps> = ({
  isOpen,
  children,
}) => {
  const [isVisible, setVisibility] = useState(isOpen)

  React.useEffect(() => {
    setVisibility(isOpen)
  }, [isOpen])

  const value: NavigationModalContextValue = useMemo(
    () => ({
      isOpen: isVisible,
      setOpen: () => setVisibility(true),
      setClosed: () => setVisibility(false),
    }),
    [isVisible],
  )

  return (
    <NavigationModalContext.Provider value={value}>
      <div>{children}</div>
    </NavigationModalContext.Provider>
  )
}

export const NavigationModalOverlay: React.FC<{ className?: string }> = ({
  className,
}) => {
  const { isOpen } = React.useContext(NavigationModalContext)

  const animation = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { ease: easing, duration: 0.7 },
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={cx(
            className,
            'z-modal-overlay bg-overlay-bg/90 w-full h-full top-0 left-0 fixed',
          )}
          {...animation}
        />
      )}
    </AnimatePresence>
  )
}

export const NavigationModalContent: React.FC = ({ children }) => {
  const { isOpen } = React.useContext(NavigationModalContext)

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="z-modal-content fixed top-0 left-0 w-full h-full">
          <RemoveScroll className="w-full">
            <FocusLock className="w-full">{children}</FocusLock>
          </RemoveScroll>
        </div>
      )}
    </AnimatePresence>
  )
}

export const NavigationModalPortal: React.FC = ({ children }) => {
  return <Portal>{children}</Portal>
}
