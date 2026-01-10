import { easeOutCubic, easeOutExpo } from '@/utils/animation'
import { useAnimator } from '@/utils/animator'
import { animate, useAnimate } from 'motion/react'
import { useRouterListener } from '../router/context/RouterComposerContext'
import { useHandleLinkClicks } from './hooks'
import { useRef } from 'react'

export const Sail = () => {
  const animator = useAnimator<'sail'>()
  const sail = useRef<HTMLDivElement>(null)

  useHandleLinkClicks()

  useRouterListener('before', async () => {
    // return Promise.resolve()
    if (!sail.current) return

    return animator
      .overwrite({
        sail: [
          await animate(sail.current, { opacity: 1 }, { duration: 0 }),
          animate(
            '.selector-sail-top',
            { scaleY: [0, 1] },
            {
              duration: 1,
              ease: easeOutExpo,
            },
          ),
        ],
      })
      .wait()
    // return animator
    //   .overwrite({
    //     sail: [
    //       await animate(
    //         '.selector-sail',
    //         { opacity: [0, 1] },
    //         {
    //           duration: 0.2,
    //           ease: 'linear',
    //         },
    //       ),
    //     ],
    //   })
    //   .wait()
  })

  useRouterListener('done', async () => {
    // return Promise.resolve()
    if (!sail.current) return

    return animator
      .overwrite({
        sail: [
          animate(
            sail.current,
            { opacity: [1, 0] },
            {
              duration: 0.3,
              ease: 'linear',
            },
          ),
        ],
      })
      .wait()
    // return animator
    //   .overwrite({
    //     sail: [
    //       animate(
    //         '.selector-sail',
    //         { opacity: [1, 0] },
    //         {
    //           duration: 0.2,
    //           ease: 'linear',
    //           // duration: 0.3,
    //           // ease: 'linear',
    //         },
    //       ),
    //     ],
    //   })
    //   .wait()
  })

  {
    /* <div
    // className="selector-sail bg-black origin-top size-full fixed top-0 left-0 z-3000 pointer-events-none"
    className="selector-sail bg-[#222224] origin-top size-full fixed top-0 left-0 z-3000 pointer-events-none"
    // className="selector-sail bg-white size-full fixed top-0 left-0 z-3000 pointer-events-none"
    // className="selector-sail bg-[#eaeaea] size-full fixed top-0 left-0 z-3000 pointer-events-none"
    style={{ opacity: 0 }}
  /> */
  }
  return (
    <div
      data-c-sail
      ref={sail}
      className="selector-sail-top bg-black h-screen origin-top size-full fixed top-0 left-0 z-3000 pointer-events-none"
      // className="selector-sail-top mix-blend-color-burn  bg-black h-screen origin-top size-full fixed top-0 left-0 z-3000 pointer-events-none"
      // className="selector-sail-top bg-[#222224] lg:h-[50vh] xl:h-[60vh] origin-top size-full fixed top-0 left-0 z-3000 pointer-events-none"
      // style={{ opacity: 0 }}
      style={{ transform: 'scaleY(0)' }}
    >
      {/* <span className=" bg-white size-full block"></span> */}
    </div>
  )
}
