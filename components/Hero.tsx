import { scrollTo } from '@/utils/dom'
import { useEffect, useRef } from 'react'

export const Hero = () => {
  const ref = useRef<HTMLDivElement>(null)
  const container = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // console.log(ref.current!.offsetHeight)
    // container.current!.style.height = `${ref.current!.offsetHeight}px`
  }, [])

  return (
    <div className="overflow-hidden">
      {/* <div className="absolute left-0 top-0 w-full h-[50vh] ">
        <div className="sticky top-0 left-0 w-full  " ref={container}>
          <div className="absolute debug left-0 top-0 w-full h-[30vh]">
            <p className="sticky top-[15vh]  z-40 w-full text-[clamp(36px,6vw,74px)] text-black font-600 leading-[1.15] lg:leading-none tracking-[-0.25px] font-heading lg:text-center max-w-[1200px] mx-auto">
              I help companies and startups ship pixel-perfect, responsive
              websites.
            </p>
          </div>
        </div>
      </div> */}

      {/* <img
        // src="/actual/plant.jpg"
        src="/actual/splash-og.jpg"
        // src="/actual/splash.jpg"
        className="absolute size-full object-cover"
        // className="size-[105%] absolute -translate-1/2 top-1/2 left-1/2 object-cover"
      /> */}

      {/* <img
        src="/actual/subtle-hero-bg.svg"
        className="absolute top-0 left-0 size-full object-cover"
      /> */}

      <div className="max-w-site mx-auto z-20 px-4">
        {/* <div className="pb-10 lg:pb-40" /> */}

        <p className="text-copy-secondary relative pt-[15vh] z-40 w-full text-[clamp(36px,6vw,74px)]  font-600 leading-[1.15] lg:leading-none tracking-[-0.25px] font-heading lg:text-center max-w-[1200px] mx-auto">
          {/* <p className="text-[#4f4550] relative mix-blend-difference pt-[15vh] z-40 w-full text-[clamp(36px,6vw,74px)]  font-600 leading-[1.15] lg:leading-none tracking-[-0.25px] font-heading lg:text-center max-w-[1200px] mx-auto"> */}
          I help companies and startups ship pixel-perfect, responsive websites.
        </p>

        <div className="z-10 relative">
          <div className="pb-20" />
          <img
            src="/actual/hero-bg.jpg"
            // src="/actual/hero-bg.png"
            className="min-w-[1200px] absolute top-[-100px] left-1/2 -translate-x-1/2 -z-10"
          />
          <img
            src="/actual/phone-opal-tadpole-shop.png"
            className="max-w-[300px] md:max-w-[330px] w-full mx-auto"
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
            <div className="pb-20 lg:pb-40 " />
          </div>
        </div>
      </div>
    </div>
  )
}
