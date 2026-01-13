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
import { BlogImages } from '../blog/Hero'
import { theme } from '@/utils/theme'

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
          // await animate(sail.current, { opacity: 1 }, { duration: 0 }),
          animate(
            '.selector-sail-top',
            // { clipPath: [`inset(100% 0 0 0)`, `inset(0 0 0 0)`] },
            { clipPath: [`inset(0 0 100% 0)`, `inset(0 0 0% 0)`] },

            // { opacity: [1, 0] },
            // { scaleY: [0, 1] },
            {
              // duration: 0.5,
              duration: 0.3,
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

            // { clipPath: [`inset(0 0 0 0)`, `inset(100% 0 0 0)`] },
            { clipPath: [`inset(0 0 0% 0)`, `inset(100% 0 0 0)`] },

            // { scaleY: [1, 0] },
            // { opacity: [1, 0] },
            {
              // duration: 0.3,
              // ease: 'linear',
              // Delay because
              delay:
                innerWidth < parseInt(theme('--breakpoint-lg')) ? 0.6 : 0.1,
              duration: 0.44,
              // duration: 0.5,
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
        opacity: [1, 0],
        // scaleY: [1, 0],
      },
      {
        // duration: 0.9,
        // ease: easeOutCubic,
        delay: 0.6,
        duration: 0.6,
        ease: 'linear',
        // ease: easeInOutCubic,
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
          opacity: 1,
        }}
        className="bg-black w-screen h-screen fixed top-0 left-0 origin-top z-4000 will-change-transform pointer-events-none"
      ></div>

      <div
        data-c-sail
        ref={sail}
        className="selector-sail-top bg-white h-screen origin-top size-full fixed top-0 left-0 z-3000 pointer-events-none"
        x
        style={{ clipPath: 'inset(0 0 100% 0)' }}
      >
        <div
          className="absolute left-0 top-0 size-full 
        "
        >
          {/* // #4f4550 */}
          {/* #a7b1a6 */}
          {/* #bec9bb */}

          <img
            src="/actual/splash.jpg"
            className="absolute size-full object-cover"
          />
        </div>
      </div>
    </>
  )
}
