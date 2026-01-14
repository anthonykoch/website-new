import ImagePhoneOpalTadpoleShop600w from '@/public/actual/phone-opal-tadpole-shop_600w.png'
import ImagePhoneOpalTadpoleShop900w from '@/public/actual/phone-opal-tadpole-shop_900w.png'
import ImagePhoneOpalTadpoleShop1200w from '@/public/actual/phone-opal-tadpole-shop_1200w.png'
import ImagePhoneOpalTadpoleShop1600w from '@/public/actual/phone-opal-tadpole-shop_1600w.png'
import { scrollTo } from '@/utils/dom'
import { useEffect, useRef } from 'react'
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from 'motion/react'
import { easeInOutCubic, easeInQuart, easeOutCubic } from '@/utils/animation'

export const Hero = () => {
  const target = useRef<HTMLDivElement>(null)

  const scroll = useScroll({
    target,
    offset: ['start start', 'end start'],
  })

  useMotionValueEvent(scroll.scrollYProgress, 'change', (t) => {
    console.log(t)
  })

  const easeInTo15 = (t: number): number => {
    const delay = 0.3
    if (t >= delay) return 1
    const scaledT = t / delay
    return 1 - Math.pow(1 - scaledT, 3)
  }

  const opacity = useTransform(scroll.scrollYProgress, [0, 1], [1, 0], {
    ease: (t) => easeInTo15(t),
  })

  const y = useTransform(scroll.scrollYProgress, [0, 1], ['0px', '-80px'], {
    // const y = useTransform(scroll.scrollYProgress, [0, 1], ['0%', '100%'], {
    ease: (t) => {
      const delay = 0.9
      // const delay = 0.3
      if (t >= delay) return 1
      const scaledT = t / delay
      return 1 - Math.pow(1 - scaledT, 2)
    },
  })

  const textY = useTransform(scroll.scrollYProgress, [0, 1], ['0', '130%'], {
    ease: easeOutCubic,
  })

  return (
    <div>
      <div className="overflow-hidden max-w-site mx-auto z-20 px-4 relative" ref={target}>
        <div
          //
          className="
          
          absolute  w-full left-0 pointer-events-none z-999999
            
             top-[6vh]
             "
          // bg-[tomato]/50
        />
        {/* <div className="pb-10 lg:pb-40" /> */}

        {/* <div className="pb-4 lg:pb-8" />
          <div className="max-w-[360px] lg:max-w-full lg:text-center">
            <p className="text-copy-2 text-[clamp(15px,1.5vw,16px)] font-body font-500">
              A UI Developer working with lorem ipsum dolor sit amet consectetur
              adipisicing elit. Ipsa, iste!
            </p>
          </div> */}
        <div className="pt-[14vh] max-w-[1200px] mx-auto lg:text-center w-full relative z-40">
          <motion.div
            className="will-change-[transform,opacity]"
            style={{ opacity, y: textY }}
          >
            <p className="text-copy-secondary text-[clamp(36px,6vw,74px)] font-600 leading-[1.15] lg:leading-none tracking-[-0.25px] font-heading">
              {/* <p className="text-[#4f4550] relative mix-blend-difference pt-[15vh] z-40 w-full text-[clamp(36px,6vw,74px)]  font-600 leading-[1.15] lg:leading-none tracking-[-0.25px] font-heading lg:text-center max-w-[1200px] mx-auto"> */}
              I help companies and startups ship pixel-perfect, responsive
              websites.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="z-10 relative"
          style={{
            y,
          }}
        >
          <div className="pb-20" />
          <img
            src="/actual/hero-bg.svg"
            // src="/actual/hero-bg.png"
            className="will-change-transform min-w-[1200px] absolute top-[-100px] left-1/2 -translate-x-1/2 -z-10"
          />
          <img
            src={ImagePhoneOpalTadpoleShop1200w.src}
            srcSet={`${ImagePhoneOpalTadpoleShop600w.src} 600w, ${ImagePhoneOpalTadpoleShop900w.src} 900w, ${ImagePhoneOpalTadpoleShop1200w.src} 1200w, ${ImagePhoneOpalTadpoleShop1600w.src} 1600w`}
            sizes="(max-width: 768px) 300px, 330px"
            className="z-50 relative will-change-transform max-w-[300px] md:max-w-[330px] w-full mx-auto"
            // className="max-w-[300px] md:max-w-[360px] w-full mx-auto"
          />
          <div className="pb-10" />
          <div className="text-center">
            <button
              onClick={() => scrollTo('#work')}
              type="button"
              className="cursor-pointer shadow-button-2 shadow-black/30 bg-black py-3.5 px-8 inline-block hover:bg-primary-500 transition-colors duration-100 hover:text-black text-[#eee]"
            >
              <span className="font-600 text-[14px] uppercase font-display tracking-widest">
                View my latest work
              </span>
            </button>
            {/* <div className="pb-20 lg:pb-40 " /> */}
            <div className="pb-10 lg:pb-20 " />
          </div>
        </motion.div>
      </div>
    </div>
  )
}
