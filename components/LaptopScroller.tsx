import {
  useMotionTemplate,
  useScroll,
  useTransform,
  motion,
} from 'motion/react'
import { useEffect, useRef } from 'react'
import { BillboardGrid } from './Billboard'

export const LaptopScroller = () => {
  const opalcameraHomeImageRef = useRef<HTMLImageElement>(null)
  const opalcameraHomeImageScrollable = useRef<HTMLDivElement>(null)

  const opalCameraMacbookScroll = useScroll({
    target: opalcameraHomeImageScrollable,
    // offset: ['60vh end', 'end 120vh'],
    offset: ['140vh end', 'end 130vh'],
  })

  const homeImageYRemap = useTransform(
    opalCameraMacbookScroll.scrollYProgress,
    [0, 1],
    [0, -64],
  )

  const homeImageY = useMotionTemplate`${homeImageYRemap}%`

  useEffect(() => {
    if (!opalcameraHomeImageRef.current) return

    opalcameraHomeImageRef.current
  }, [])

  return (
    <div
      className="relative h-[calc(1700px+100vh)] lg:h-[calc(2200px+100vh)] -mb-[65vh]"
      // className="relative h-[calc(1700px+100vh)] lg:h-[calc(2200px+100vh)] -mb-[100vh]"
      ref={opalcameraHomeImageScrollable}
    >
      {/* <div className=" mx-auto px-4 "> */}

      {/* <BillboardGrid className="max-w-[860px] mx-auto px-4 text-center">
        <p className="text-[100px] leading-[1] font-heading font-500 -tracking-wide">
          The most recent landing page I worked on is more complex.
        </p>
      </BillboardGrid> */}

      <div className="sticky top-[30vh] lg:top-[10vh] left-0 ">
        <div>
          <p className="text-[14px] uppercase leading-[1.2] font-heading font-700 tracking-wide text-center">
            Latest LANDING PAGE
          </p>
        </div>
        <div>
          <motion.div className="relative z-10 will-change-transform">
            <img
              src="/final-compressed/empty-macbook.png"
              className="w-full max-w-[800px] xl:max-w-[1200px] mx-auto absolute z-20 top-0 left-1/2 -translate-x-1/2"
            />

            <div className="max-w-[800px] xl:max-w-[1200px] w-full mx-auto">
              <div className="aspect-1000/570 relative  pt-[6%]">
                <div className="overflow-hidden w-full max-w-[71.5%] aspect-640/400 z-40 relative left-[14%] ">
                  <div className="striped z-10 absolute size-full">
                    <span className="absolute top-1/2 left-1/2 -translate-1/2 text-[14px] text-white/90 bg-black py-2 px-4 font-display tracking-wider uppercase font-600">
                      Loading...
                    </span>
                  </div>
                  <motion.img
                    src="/final-compressed/opalcamera-home-full.png"
                    className="absolute top-0 left-0 w-full h-auto will-change-transform object-top z-20"
                    loading="lazy"
                    ref={opalcameraHomeImageRef}
                    style={{ y: homeImageY }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
