import { easeOutCubic, easeOutExpo } from '@/utils/animation'
import { useAnimator } from '@/utils/animator'
import { useAnimate } from 'motion/react'
import { useRouterListener } from '../router/context/RouterComposerContext'
import { useHandleLinkClicks } from './hooks'

export const Sail = () => {
  const [scope, animate] = useAnimate()
  const animator = useAnimator<'sail'>()

  useHandleLinkClicks()

  useRouterListener('before', async () => {
    // return Promise.resolve()
    return animator
      .overwrite({
        sail: [
          await animate(
            '.selector-sail',
            { opacity: [0, 1] },
            {
              duration: 0.2,
              ease: 'linear',
            },
          ),
        ],
      })
      .wait()
  })

  useRouterListener('done', async () => {
    // return Promise.resolve()
    return animator
      .overwrite({
        sail: [
          animate(
            '.selector-sail',
            { opacity: [1, 0] },
            {
              duration: 0.2,
              ease: 'linear',
              // duration: 0.3,
              // ease: 'linear',
            },
          ),
        ],
      })
      .wait()
  })

  return (
    <div data-c-sail ref={scope}>
      <div
        // className="selector-sail bg-black origin-top size-full fixed top-0 left-0 z-3000 pointer-events-none"
        className="selector-sail bg-[#222224] origin-top size-full fixed top-0 left-0 z-3000 pointer-events-none"
        // className="selector-sail bg-white size-full fixed top-0 left-0 z-3000 pointer-events-none"
        // className="selector-sail bg-[#eaeaea] size-full fixed top-0 left-0 z-3000 pointer-events-none"
        style={{ opacity: 0 }}
      />
    </div>
  )
}
