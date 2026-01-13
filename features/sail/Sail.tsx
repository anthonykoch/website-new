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
              delay: 0.1,
              duration: 0.3,
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
        // #4f4550

        className="bg-black w-screen h-screen fixed top-0 left-0 origin-top z-4000 will-change-transform pointer-events-none"
        // className="bg-[#0D0D0D] w-screen h-screen fixed top-0 left-0 origin-top z-4000 will-change-transform pointer-events-none"
        // className="bg-[#0e1a1a] w-screen h-screen fixed top-0 left-0 origin-top z-4000 will-change-transform pointer-events-none"
      >
        {/* <img
          src="/actual/splash-og.jpg"
          className="absolute size-full top-0 left-0 object-cover"
        /> */}
      </div>
      {/* <div
        id="splash"
        ref={ref}
        style={{
          opacity: 1,
          // transform: 'scaleY(0)',
        }}
        className="bg-white w-screen h-screen fixed top-0 left-0 origin-top z-4000 will-change-transform pointer-events-none"
        // className="bg-black w-screen h-screen fixed top-0 left-0 origin-top z-4000 will-change-transform"
      >
        <img
          // src="/actual/plant.jpg"
          src="/actual/splash-og.jpg"
          // src="/actual/splash.jpg"
          className="absolute size-full top-0 left-0 object-cover"
          // className="size-[105%] absolute -translate-1/2 top-1/2 left-1/2 object-cover"
        />
      </div> */}
      <div
        data-c-sail
        ref={sail}
        className="selector-sail-top bg-white h-screen origin-top size-full fixed top-0 left-0 z-3000 pointer-events-none"
        // className="selector-sail-top bg-black h-screen origin-top size-full fixed top-0 left-0 z-3000 pointer-events-none"
        style={{ clipPath: 'inset(0 0 100% 0)' }}
      >
        <div
          className="absolute left-0 top-0 size-[100%] 
        "
        >
          {/* #a7b1a6 */}
          {/* #bec9bb */}

          {/* blur-[20px] */}
          {/* <BlogImages
          // src="/actual/pawl.jpg"
          // className="size-full absolute top-0 left-0 object-cover opacity-50 blur-[10px]"
          // src="/actual/desk.jpg"
          // className="size-[105%] absolute -translate-1/2 top-1/2 left-1/2 object-cover opacity-50 blur-[10px]"
          // src="/blog-hero-d.jpg"
          // className="size-[105%] absolute -translate-1/2 top-1/2 left-1/2 object-cover opacity-50 blur-[10px]"
          /> */}
          <img
            // src="/actual/plant.jpg"
            src="/actual/splash-og.jpg"
            // src="/actual/splash.jpg"
            className="absolute size-full object-cover"
            // className="size-[105%] absolute -translate-1/2 top-1/2 left-1/2 object-cover"
          />
          {/* <div className="size-full absolute left-0 top-0 flex items-center justify-center">
            <img
              src="/actual/phone-opal-tadpole-shop.png"
              className="max-w-[300px] md:max-w-[330px] w-full mx-auto"
              // className="max-w-[300px] md:max-w-[360px] w-full mx-auto"
            />
          </div> */}
          {/* <div className="backdrop-blur-[10px] size-full absolute top-0 left-0 z-10" /> */}

          {/* <div className="size-full absolute flex justify-center items-center z-20">
            <img src="/actual/favicon.svg" className='w-[100px]' />
          </div> */}
        </div>
        {/* <span className=" bg-white size-full block"></span> */}
      </div>
    </>
  )
}
