import {
  easeInExpo,
  easeInOutCubic,
  easeOutCubic,
  easeOutExpo,
} from '@/utils/animation'
import { useAnimator } from '@/utils/animator'
import { animate, useAnimate } from 'motion/react'
import { useRouterListener } from '../router/context/RouterComposerContext'
import { useHandleLinkClicks } from './hooks'
import { useEffect, useRef } from 'react'

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
              ease: easeInOutCubic,
              // ease: easeOutExpo,
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
            { scale: [1, 0] },
            // { opacity: [1, 0] },
            {
              // duration: 0.3,
              // ease: 'linear',
              duration: 0.7,
              ease: easeInOutCubic,
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

  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    animate(
      '#splash',
      {
        scaleY: [1, 0],
      },
      {
        // duration: 0.9,
        // ease: easeOutCubic,
        delay: 0.2,
        duration: 1.4,
        ease: easeInOutCubic,
        // duration: 12.1,
        // ease: (t) => easeInOutCubic(easeOutExpo(easeOutCubic(t))),
      },
    )
  }, [])

  return (
    <>
      <div
        id="splash"
        ref={ref}
        style={{
          transform: 'scaleY(0)',
        }}
        className="bg-black w-screen h-screen fixed top-0 left-0 origin-bottom z-4000 will-change-transform"
      />
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
    </>
  )
}
