import { Billboard } from './Billboard'
import { ExhibitPages } from './ExhibitPages'
import ImageShowcaseDoctor800w from '@/public/actual/showcase-doctor_800w.jpg'
import ImageShowcaseDoctor1200w from '@/public/actual/showcase-doctor_1200w.jpg'
import ImageShowcaseDoctor1800w from '@/public/actual/showcase-doctor_1800w.jpg'
import ImageShowcaseDoctor2400w from '@/public/actual/showcase-doctor_2400w.jpg'
import ImageShowcaseDoctor3000w from '@/public/actual/showcase-doctor_3000w.jpg'
import { useInView } from 'motion/react'
import { useEffect, useRef } from 'react'

export const OpalShowcase = () => {
  const video = useRef<HTMLVideoElement>(null)
  const isInView = useInView(video)

  useEffect(() => {
    if (!video.current) return

    if (isInView) {
      video.current.play()
    } else {
      video.current.pause()
    }
  }, [isInView])

  return (
    <div>
      <div className="max-w-site mx-auto z-10 relative xl:-mt-40">
        <Billboard bottomSpacer={null} textSize="lg">
          <p className="copy-largest">
            I've since worked on <br className="hidden lg:block" />
            many parts of Opal.
          </p>
        </Billboard>
      </div>

      <ExhibitPages />

      {/* <div className="max-w-site mx-auto z-10 relative">
        <div className="pt-20 lg:pt-40" />

        <div className="grid grid-cols-12 gap-x-4 px-4">
          <div className="max-xl:order-2 col-span-12 2xl:col-span-3 2xl:col-start-2">
            <div className="max-w-[380px] w-full">
              <p className="text-[14px] uppercase leading-[1.2] font-heading font-700 tracking-wide">
                MOBILE NAVIGATION
              </p>
              <div className="pb-4" />
              <video
                ref={video}
                autoPlay
                muted
                loop
                playsInline
                className="pointer-events-none object-cover size-full"
              >
                <source src="/actual/mobile-nav-final.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
          <div className="col-span-12 2xl:col-span-7">
            <p className="text-[14px] uppercase leading-[1.2] font-heading font-700 tracking-wide">
              FIRMWARE UPDATER
            </p>
            <div className="pb-4" />

            <img
              src={ImageShowcaseDoctor1200w.src}
              srcSet={`${ImageShowcaseDoctor800w.src} 800w, ${ImageShowcaseDoctor1200w.src} 1200w, ${ImageShowcaseDoctor1800w.src} 1800w, ${ImageShowcaseDoctor2400w.src} 2400w, ${ImageShowcaseDoctor3000w.src} 3000w`}
              sizes="(max-width: 1024) 100vw, 1000px"
              loading="lazy"
            />
            <div className="pb-4" />

            <p className="font-body font-500 text-[16px] leading-[26px] -tracking-[0.4px] text-[#757575] max-w-[500px] pb-4">
              Dr. Opal is a web based tool created to help users update their
              Tadpole firmware. I built out the UI and collaborated with device
              engineers to interface it with the Tadpole.
            </p>
            <div className="pb-40" />
          </div>
        </div>
      </div> */}
      {/* <div className="pb-20 xl:pb-40" /> */}
    </div>
  )
}
