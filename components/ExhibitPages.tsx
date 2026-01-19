import ImageShowcaseDoctor1200w from '@/public/actual/showcase-doctor-inner_1200w.webp'
import ImageShowcaseDoctor1800w from '@/public/actual/showcase-doctor-inner_1800w.webp'
import ImageShowcaseDoctor2400w from '@/public/actual/showcase-doctor-inner_2400w.webp'
import ImageShowcaseDoctor3000w from '@/public/actual/showcase-doctor-inner_3000w.webp'
import ImageShowcaseDoctor800w from '@/public/actual/showcase-doctor-inner_800w.webp'

import ImageShowcaseDownloads1200w from '@/public/actual/showcase-downloads-inner_1200w.webp'
import ImageShowcaseDownloads1800w from '@/public/actual/showcase-downloads-inner_1800w.webp'
import ImageShowcaseDownloads2400w from '@/public/actual/showcase-downloads-inner_2400w.webp'
import ImageShowcaseDownloads3000w from '@/public/actual/showcase-downloads-inner_3000w.webp'
import ImageShowcaseDownloads800w from '@/public/actual/showcase-downloads-inner_800w.webp'

import ImageShowcaseShopTadpole1200w from '@/public/actual/showcase-tadpole-checkout-inner_1200w.webp'
import ImageShowcaseShopTadpole1800w from '@/public/actual/showcase-tadpole-checkout-inner_1800w.webp'
import ImageShowcaseShopTadpole2400w from '@/public/actual/showcase-tadpole-checkout-inner_2400w.webp'
import ImageShowcaseShopTadpole3000w from '@/public/actual/showcase-tadpole-checkout-inner_3000w.webp'
import ImageShowcaseShopTadpole800w from '@/public/actual/showcase-tadpole-checkout-inner_800w.webp'

import ImageShowcaseHome1200w from '@/public/actual/showcase-home-inner_1200w.webp'
import ImageShowcaseHome1800w from '@/public/actual/showcase-home-inner_1800w.webp'
import ImageShowcaseHome2400w from '@/public/actual/showcase-home-inner_2400w.webp'
import ImageShowcaseHome3000w from '@/public/actual/showcase-home-inner_3000w.webp'
import ImageShowcaseHome800w from '@/public/actual/showcase-home-inner_800w.webp'
import ImagePoster from '@/public/actual/mobile-menu-animation.webp'

import {
  motion,
  resize,
  useInView,
  useMotionTemplate,
  useScroll,
  useSpring,
  useTransform,
} from 'motion/react'
import { useCallback, useEffect, useRef, useState } from 'react'

export const ExhibitPages = () => {
  const ref = useRef<HTMLDivElement>(null)

  const scroll = useScroll({
    target: ref,
    // offset: ['start -50vh', 'end 0vh'],
    offset: ['start end', 'end end'],
    // offset: ['start end', 'end start'],
  })

  const { scrollYProgress } = scroll

  // const x = useTransform(scrollYProgress, [0, 1], ['0vw', '-45vw'])

  // const ref2 = useRef<HTMLDivElement>(null)

  // const scroll2 = useScroll({
  //   target: ref2,
  //   offset: ['-50vh end', 'end 20vh'],
  // })

  // const x2 = useTransform(scroll2.scrollYProgress, [0, 1], ['-20vw', '0vw'])

  // const ref3 = useRef<HTMLDivElement>(null)

  // const scroll3 = useScroll({
  //   target: ref3,
  //   offset: ['-50vh end', 'end 20vh'],
  // })

  // const x3 = useTransform(scroll3.scrollYProgress, [0, 1], ['0vw', '-20vw'])

  const container = useRef<HTMLDivElement>(null)
  const last = useRef<HTMLDivElement>(null)

  const [scrollableWidth, setScrollableWidth] = useState(0)

  const x = useTransform(scrollYProgress, [0, 1], [0, scrollableWidth])
  const scale = useTransform(scrollYProgress, [0, 1], [0.7, 1])

  // const homeY = useTransform(scrollYProgress, [0.2, 0.55], [0, -64])
  // const homeImageY = useMotionTemplate`${
  //   homeY
  //   //   useSpring(homeY, {
  //   //   stiffness: 100,
  //   //   damping: 200,
  //   //   bounce: 0,
  //   // })
  // }%`

  const updateScrollableWidth = useCallback(() => {
    if (!container.current) return
    if (!last.current) return

    const left = container.current.scrollWidth

    let value = left - last.current.offsetWidth

    if (last.current.offsetWidth >= innerWidth) {
      value += Math.abs(last.current.offsetWidth - innerWidth)
    } else {
      value =
        left -
        last.current.offsetWidth -
        (innerWidth - last.current.offsetWidth) +
        16
    }

    setScrollableWidth(-value)
  }, [])

  const timeout = useRef<any>(null)

  useEffect(() => {
    updateScrollableWidth()

    const delay = 1000

    const loop = () => {
      updateScrollableWidth()
      timeout.current = setTimeout(loop, delay)
    }

    timeout.current = setTimeout(loop)

    const stop = resize(() => updateScrollableWidth())

    return () => {
      stop()
      clearTimeout(timeout.current)
    }
  }, [updateScrollableWidth])

  const video = useRef<HTMLVideoElement>(null)
  const initPoint = useRef<HTMLDivElement>(null)
  const isInView = useInView(video)

  const isComingUp = useInView(initPoint, {
    once: true,
  })

  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (isComingUp) {
      setIsVisible(true)
    }
  }, [isComingUp])

  useEffect(() => {
    if (!video.current) return

    if (isInView) {
      video.current.play()
    } else {
      video.current.pause()
    }
  }, [isInView])

  return (
    <>
      <div className="relative -mt-20 lg:mt-0"></div>
      <div className="relative h-[535vh]">
        <div
          ref={ref}
          className="absolute z-9999 left-0 top-[100vh] w-full h-[80%]  pointer-events-none"
        />
        <div
          ref={initPoint}
          className="absolute top-[-200vh] left-0 pointer-events-none w-full"
          // className="absolute top-[-200vh] h-[10px] bg-red-500 left-0 pointer-events-none w-full"
        />
        <div className="overflow-hidden sticky top-12">
          <motion.div
            className="w-full flex flex-nowrap gap-x-4 gap-y-4 mx-auto will-change-transform origin-left"
            ref={container}
            style={{ x, scale }}
          >
            <div className="shrink-0 pl-4">
              <div className="pb-4 text-center">
                <p className="text-[14px] uppercase leading-[1.2] font-heading font-700 tracking-wide">
                  {/* Tadpole Shop Page */}
                </p>
              </div>
              <img
                src={ImageShowcaseShopTadpole1200w.src}
                srcSet={`${ImageShowcaseShopTadpole800w.src} 800w, ${ImageShowcaseShopTadpole1200w.src} 1200w, ${ImageShowcaseShopTadpole1800w.src} 1800w, ${ImageShowcaseShopTadpole2400w.src} 2400w, ${ImageShowcaseShopTadpole3000w.src} 3000w`}
                sizes="(max-width: 1024px) 100vw, 120vw"
                className="h-[60vh] lg:h-[80vh] w-auto"
              />
            </div>

            <div className="shrink-0">
              <div className="pb-4 text-center">
                <p className="text-[14px] uppercase leading-[1.2] font-heading font-700 tracking-wide">
                  {/* Landing page */}
                </p>
              </div>
              <div className="relative">
                <img
                  src={ImageShowcaseHome1200w.src}
                  srcSet={`${ImageShowcaseHome800w.src} 800w, ${ImageShowcaseHome1200w.src} 1200w, ${ImageShowcaseHome1800w.src} 1800w, ${ImageShowcaseHome2400w.src} 2400w, ${ImageShowcaseHome3000w.src} 3000w`}
                  sizes="(max-width: 1024px) 100vw, 120vw"
                  className="h-[60vh] lg:h-[80vh] w-auto"
                />
              </div>
            </div>
            <div className="shrink-0">
              <div className="pb-4 text-center">
                <p className="text-[14px] uppercase leading-[1.2] font-heading font-700 tracking-wide">
                  {/* Downloads Page */}
                </p>
              </div>
              <img
                src={ImageShowcaseDownloads1200w.src}
                srcSet={`${ImageShowcaseDownloads800w.src} 800w, ${ImageShowcaseDownloads1200w.src} 1200w, ${ImageShowcaseDownloads1800w.src} 1800w, ${ImageShowcaseDownloads2400w.src} 2400w, ${ImageShowcaseDownloads3000w.src} 3000w`}
                sizes="(max-width: 1024px) 100vw, 120vw"
                className="h-[60vh] lg:h-[80vh] w-auto"
              />
            </div>

            <div className="w-[300px] lg:w-[360px] shrink-0">
              <p className="text-[14px] uppercase leading-[1.2] font-heading font-700 tracking-wide">
                {/* MOBILE NAVIGATION */}
              </p>
              <div className="pb-4" />

              <video
                ref={video}
                autoPlay
                muted
                loop
                poster={ImagePoster.src}
                playsInline
                className="pointer-events-none w-full"
              >
                {isVisible && (
                  <source src="/actual/mobile-nav-final.mp4" type="video/mp4" />
                )}
              </video>
            </div>
            <div className="shrink-0" ref={last}>
              <p className="text-[14px] uppercase leading-[1.2] font-heading font-700 tracking-wide">
                {/* FIRMWARE UPDATER */}
              </p>
              <div className="pb-4" />

              <img
                src={ImageShowcaseDoctor1200w.src}
                srcSet={`${ImageShowcaseDoctor800w.src} 800w, ${ImageShowcaseDoctor1200w.src} 1200w, ${ImageShowcaseDoctor1800w.src} 1800w, ${ImageShowcaseDoctor2400w.src} 2400w, ${ImageShowcaseDoctor3000w.src} 3000w`}
                sizes="(max-width: 1024) 100vw, 1000px"
                className="h-[60vh] lg:h-[62vh] w-auto"
              />
              <div className="pb-4" />

              <p className="font-body font-500 text-[16px] leading-[26px] -tracking-[0.4px] text-[#757575] max-w-[500px] pb-4">
                Dr. Opal is a web based tool created to help users update their
                Tadpole firmware. I built out the UI and collaborated with
                device engineers to interface it with the Tadpole.
              </p>
              <div className="pb-40" />
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
}
