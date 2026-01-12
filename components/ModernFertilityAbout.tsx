import { useScroll, useTransform, motion } from 'motion/react'
import { Billboard } from './Billboard'
import { Grid } from './Grid'
import { useRef } from 'react'
import { easeOutCubic, easeOutExpo } from '@/utils/animation'

export const ModernFertilityAbout = () => {
  const cover = useRef<HTMLDivElement>(null)

  const coverScroll = useScroll({
    target: cover,
    offset: ['-40vw start', '0px start'],
  })

  const opacity = useTransform(coverScroll.scrollYProgress, [0, 1], [0, 1])

  return (
    <div className="relative z-10 bg-white">
      <div ref={cover} />
      <motion.div
        style={{
          opacity,
        }}
        className="bg-black absolute top-[-100vh] left-0 h-screen w-full z-10 pointer-events-none"
      />
      <div>
        <div className="z-10 relative">
          <div className="max-w-site mx-auto">
            <Billboard>
              <p className="max-w-[1200px]">
                I led front-end development for the marketing website and user
                dashboard.
              </p>
            </Billboard>
          </div>
        </div>
      </div>

      {/* <div className="pb-20 lg:pb-40" /> */}

      <Grid
        left={
          <h2 className="copy-heading-2-sm lg:copy-heading-2 pb-6 max-w-[300px] xl:ml-auto lg:text-right">
            The early days of Modern Fertility
          </h2>
        }
        right={
          <div className="gap-y-6 flex flex-col copy-body-4-sm lg:copy-body-4 text-[#888787] max-w-[654px]">
            <p>
              Modern Fertility approached me to assist them in developing their
              website. At the time, I was the sole front-end developer, working
              alongside Tom Chokel to help Carly and Afton give women the tools
              to better understand their fertility.
            </p>
            <p>
              Fast forward several years, and not only has the website grown in
              scale, but Modern Fertility has grown as a wildly successful
              company, being acquired by Ro for $225 million.
            </p>
          </div>
        }
      />

      {/* <div className="pb-[100px]" /> */}

      {/* <div className="pb-40" /> */}
      <div className="pb-100" />
    </div>
  )
}
