import ImagePhoneBg from '@/public/actual/showcase-mf-home-bg.png'
import { easeInOutCubic } from '@/utils/animation'
import { themeValue } from '@/utils/theme'
import {
  motion,
  useTransform,
  useScroll,
  useMotionValueEvent,
} from 'motion/react'
import { useEffect, useRef, useState } from 'react'

export const ModernFertilityTriplePhone = () => {
  const target = useRef<HTMLDivElement>(null)
  const scroll = useScroll({ target, offset: ['0.4 end', '0.46 start'] })
  // const [desktopTranslate, setDesktopTranslate] = useState('-50%')
  const [x, setX] = useState(50)

  console.log(x, `${x}%`, `-${x}%`)

  useEffect(() => {
    const update = () => {
      setX(themeValue('--mf-phone-translate-right'))
    }

    update()

    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  const transformLeft = useTransform(
    scroll.scrollYProgress,
    [0, 1],
    ['0%', `-${x}%`],

    { ease: easeInOutCubic },
  )
  const transformRight = useTransform(
    scroll.scrollYProgress,
    [0, 1],
    ['0%', `${x}%`],

    { ease: easeInOutCubic },
  )

  const scale = useTransform(scroll.scrollYProgress, [0, 1], [0.7, 0.75], {
    ease: easeInOutCubic,
  })

  const scaleImg = useTransform(scroll.scrollYProgress, [0, 1], [1, 1.3], {
  // const scaleImg = useTransform(scroll.scrollYProgress, [0, 1], [1, 1.6], {
    ease: easeInOutCubic,
  })

  useMotionValueEvent(transformRight, 'change', (progress) => {
    console.log(progress)
  })

  return (
    <div className="mx-auto max-w-site relative">
      <div className="absolute top-0 left-0 h-[1150px] w-full pointer-events-none overflow-hidden">
        {/* <motion.div
          className="absolute h-full bg-center bg-contain bg-no-repeat top-0 left-1/2 -translate-x-1/2 z-10 w-[500px] lg:w-[1158px] mx-auto "
          // className="w-full h-full bg-center bg-contain bg-no-repeat top-0 left-0 z-10 max-w-[1158px] mx-auto"
          style={{ backgroundImage: `url(${ImagePhoneBg.src})`, scale: scaleImg }}
        /> */}
      </div>
      <div className="z-20 relative">
        <h2 className="px-4 lg:text-center max-w-[1150px] mx-auto copy-largest font-heading z-20 relative">
          A responsive website, <br />
          built from the ground up.
        </h2>

        <div className="pb-10 lg:pb-20" />

        <div className="overflow-hidden">
          <motion.div
            className="absolute h-[150vh] w-full bg-no-repeat top-[60%] left-1/2 -translate-1/2 z-10 mx-auto bg-size-[auto_500px] lg:bg-size-[auto_800px] bg-center"
            // className="w-full h-full bg-center bg-contain bg-no-repeat top-0 left-0 z-10 max-w-[1158px] mx-auto"
            style={{
              backgroundImage: `url(${ImagePhoneBg.src})`,
              scale: scaleImg,
            }}
          />
          <div className="w-[200px] lg:w-[298px] mx-auto relative z-10">
            <div
              className="h-[200vh] -top-[100vh] lg:-top-[84vh] absolute w-full pointer-events-none"
              ref={target}
            />
            <img
              src="/actual/phone-mf-home-v2.png"
              className="mx-auto w-full relative z-20"
            />
            <motion.img
              src="/actual/phone-mf-dashboard-plan.png"
              className="absolute top-0 left-0 w-full h-auto will-change-transform"
              style={{ x: transformLeft, scale }}
            />
            <motion.img
              src="/actual/phone-mf-prenatal-pdp.png"
              className="absolute top-0 left-0 w-full h-auto will-change-transform"
              style={{ x: transformRight, scale }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
