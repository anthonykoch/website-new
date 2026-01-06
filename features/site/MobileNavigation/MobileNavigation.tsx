import { RemoveScroll } from 'react-remove-scroll'
import FocusLock from 'react-focus-lock'
import { Portal } from '@radix-ui/react-portal'
import { useAtom } from 'jotai'
import { isMobileNavigationOpen } from '@/store'

export const MobileNavigation = () => {
  const [isOpen, setOpen] = useAtom(isMobileNavigationOpen)

  return (
    <Portal>
      <RemoveScroll>
        <FocusLock>
          <div className="fixed left-0 top-0 bg-overlay-bg size-full">
            <div className="text-white text-[300px] font-heading leading-none">
              memes
            </div>
            <button onClick={() => setOpen(false)}>Close</button>
          </div>
        </FocusLock>
      </RemoveScroll>
    </Portal>
  )
}
