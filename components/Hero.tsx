import {
  easeInOutCubic,
  easeInQuart,
  easeOutCubic,
  easeOutExpo,
} from '@/utils/animation'
import { getOffset, getScrollDuration } from '@/utils/dom'
import { animate } from 'motion/react'

export const Hero = () => {
  const scroll = () => {
    const el = document.getElementById('work')!

    const offset = getOffset(el)
    const distance = offset.top - window.scrollY
    const duration = getScrollDuration(distance)

    animate(scrollY, offset.top, {
      ease: easeInOutCubic,
      // duration,
      duration: 1,
      onUpdate(progress) {
        window.scrollTo(0, progress)
      },
    })
  }

  return (
    <div>
      
      <div className="relative">
        {/* <div className="h-screen bg-[#e6ddc3] relative"> */}

        {/* <div className="bg-linear-to-r from-black/70 to-transparent size-1/2 absolute top-0 left-0 z-20" /> */}
        {/* <div className="bg-linear-to-t from-black to-transparent w-full h-1/2 absolute bottom-[29vh] left-0" /> */}

        {/* <div
      className="absolute inset-0 h-full w-full bg-white bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]"
    ></div>  */}
        {/* 
                <div className="absolute z-10 top-0 left-0 h-full w-full bg-neutral-200">
                  <div className="absolute inset-0 bg-primary-500 bg-size-[20px_20px] opacity-20 blur-[100px]"></div>
                </div> */}

        <p className="fixed mix-blend-difference top-[20vh] z-40 left-1/2 -translate-x-1/2 w-full text-[clamp(36px,6vw,74px)] text-white font-600 leading-[1.15] lg:leading-none tracking-[-0.25px] font-heading lg:text-center max-w-[1200px] mx-auto">
          I help companies and startups ship pixel-perfect, responsive websites.
        </p>

        <div className="z-20 w-full pb-[10vh] pt-[10vh]">
          <div className="max-w-site mx-auto relative z-20 px-4">
            {/* <div className="pb-10 lg:pb-20" /> */}
            <div className="text-center relative top-[20vh]">
              <img
                src="/actual/hero-bg.png"
                className="min-w-[1200px] absolute top-0 left-1/2 -translate-x-1/2"
              />
              {/* <div className="max-w-[1200px] size-full absolute top-0 left-1/2 -translate-x-1/2 bg-size-[1200px_auto] bg-no-repeat bg-top-left bg-[url(/actual/hero-bg.png)] bg-contain " /> */}
              {/* <div className="max-w-[1200px] h-[1200px] w-full absolute top-0 left-1/2 -translate-x-1/2 bg-size-[1200px_auto] bg-no-repeat bg-top-left bg-[url(/actual/hero-bg.png)] bg-contain " /> */}
              <div className="z-10 relative ">
                <img
                  // 1269/2574
                  src="/actual/opal-tadpole-shop-mobile.png"
                  className="max-w-[300px] md:max-w-[360px] w-full mx-auto"
                  // className="max-w-[423px] w-full mx-auto"
                />
                <div className="pb-10" />
                <button
                  onClick={scroll}
                  type="button"
                  className="cursor-pointer shadow-button-2 shadow-black/40 bg-black py-3.5 px-8 inline-block hover:bg-primary-500 transition-colors duration-100 hover:text-black text-[#eee]"
                >
                  <span className="font-600 text-[14px] uppercase font-display tracking-widest">
                    View my latest work
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
