import ImagePhoneOpalTadpoleShop1200w from '@/public/actual/phone-opal-tadpole-shop_1200w.png'
import ImagePhoneOpalTadpoleShop1600w from '@/public/actual/phone-opal-tadpole-shop_1600w.png'
import ImagePhoneOpalTadpoleShop600w from '@/public/actual/phone-opal-tadpole-shop_600w.png'
import ImagePhoneOpalTadpoleShop900w from '@/public/actual/phone-opal-tadpole-shop_900w.png'
import { easeOutCubic } from '@/utils/animation'
import { scrollTo } from '@/utils/dom'
import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'

export const Hero = () => {
  const target = useRef<HTMLDivElement>(null)

  const scroll = useScroll({
    target,
    offset: ['start start', 'end start'],
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
    ease: (t) => {
      const delay = 0.9
      if (t >= delay) return 1
      const scaledT = t / delay
      return 1 - Math.pow(1 - scaledT, 2)
    },
  })

  const textY = useTransform(scroll.scrollYProgress, [0, 1], ['0', '130%'], {
    ease: easeOutCubic,
  })

  return (
    <>
      <div
        className="overflow-hidden max-w-site mx-auto z-20 px-4 relative"
        ref={target}
      >
        {/* <div className="pb-4 lg:pb-8" /> */}
        {/* <div className="max-w-[360px] lg:max-w-full"> */}
        {/* <div className="max-w-[360px] lg:max-w-full lg:text-center">
          <p className="pt-[19px] text-copy-2 brightness-75 text-[clamp(14px,1.5vw,15px)] font-body font-500">
            A UI Developer working with companies remote.
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
          <div
            // ref={containerRef}
            className="mt-2 px-5 py-3 max-[380px]:flex inline-flex items-center relative"
          >
            <p className="relative z-20 flex flex-nowrap items-center">
              {/*                
               <span className="top-[-0.03em] relative text-primary-500 text-[18px] inline-block align-middle mr-0.5 font-500 leading-[0.8]">
                  {'>'}
                </span> */}

              <span className="hidden lg:block bg-primary-500 size-1 rounded-full leading-0 mr-2" />
              {/* <span className="inline-block align-middle font-heading text-[26px] font-600 text-copy-2 brightness-75"> */}
              <span className="inline-block align-middle font-body text-[15px] font-500 text-copy-2 brightness-75">
              {/* <span className="inline-block align-middle font-body text-[14px] font-500 text-copy-2 brightness-75"> */}
                Actively looking for new opportunities{' '}
                <span className="max-[380px]:block">- Jan 2026</span>
              </span>
            </p>
          </div>
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
            className="will-change-transform min-w-[1200px] absolute top-[-100px] left-1/2 -translate-x-1/2 -z-10"
          />
          <img
            src={ImagePhoneOpalTadpoleShop1200w.src}
            srcSet={`${ImagePhoneOpalTadpoleShop600w.src} 600w, ${ImagePhoneOpalTadpoleShop900w.src} 900w, ${ImagePhoneOpalTadpoleShop1200w.src} 1200w, ${ImagePhoneOpalTadpoleShop1600w.src} 1600w`}
            sizes="(max-width: 768px) 300px, 330px"
            className="z-50 relative will-change-transform max-w-[300px] md:max-w-[330px] w-full mx-auto"
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
            <div className="pb-10 lg:pb-20 " />
          </div>
        </motion.div>
      </div>
    </>
  )
}
