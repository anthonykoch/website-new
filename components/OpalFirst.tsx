import { useCallback, useEffect, useRef, useState } from 'react'
import { BillboardGrid } from './Billboard'
import {
  frame,
  motion,
  useMotionTemplate,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from 'motion/react'
import { easeInQuart, easeOutExpo } from '@/utils/animation'
import { useWindowEvent } from '@/hooks/use-window-event'
import { debounce } from 'lodash'

export const OpalFirst = () => {
  const target = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target,
    offset: ['start end', 'end end'],
    // offset: ['0vh end', '110vh end'],
    // offset: ['50vh end', '110vh end'],
  })

  const clipPathTransform = useTransform(scrollYProgress, [0, 1], [100, 0], {
    ease: easeInQuart,
  })
  const clipPath = useMotionTemplate`inset(0 0 0 ${clipPathTransform}%)`

  // // useMotionValueEvent(clipPath, 'change', (progress) => {
  // //   console.log(progress)
  // // })

  const scaleRef = useRef<HTMLDivElement>(null)

  const scaleScroll = useScroll({
    target: scaleRef,
    offset: ['start end', 'end end'],
  })

  const [outer, setOuter] = useState(1)

  const container = useRef<HTMLDivElement>(null)

  const scale = useTransform(scaleScroll.scrollYProgress, [0, 1], [outer, 1])

  // useMotionValueEvent(beforeScroll.scrollYProgress, 'change', (progress) => {
  //   console.log(progress)
  // })

  const updateScale = useCallback(() => {
    if (!container.current) return

    const width = container.current.offsetWidth

    const scale = innerWidth / width

    setOuter(scale + 0.007)
  }, [])

  const img = useRef<HTMLImageElement>(null)

  const [top, setTop] = useState(0)

  const updateTop = useCallback(() => {
    if (!img.current) return

    const calc =
      innerHeight / 2 -
      img.current.offsetHeight / 2 -
      (innerWidth < 700 ? innerHeight * 0.05 : 0)

    setTop(calc)
  }, [])

  const update = useCallback(() => {
    updateScale()
    updateTop()
  }, [updateScale, updateTop])

  useEffect(() => {
    update()
  }, [update])

  useWindowEvent(
    'resize',
    debounce(
      () => {
        update()
      },
      100,
      { maxWait: 100 },
    ),
  )

  return (
    <div>
      {/* <div className="bg-[#eaeaea] z-10 relative"> */}
      <div className="pb-40 lg:pb-40" />
      <BillboardGrid>
        <p className="copy-largest">
          My journey at Opal started <br />
          with a simple landing page
        </p>
        <div className="pb-10"></div>
        <p className="text-black/60 text-[18px] font-body font-500 tracking-tight">
          The page was a simple teaser, letting everyone know what's coming.
        </p>
      </BillboardGrid>
      <div className="pb-10 lg:pb-30"></div>

      <div className="relative">
        <div className="h-[170vw] lg:h-[290vh] absolute top-0 left-0 w-full">
          <div className=" sticky top-0 w-full">
            <div className="">
              <img
                src="/actual/first-bg.png"
                className="w-full max-w-[90%] z-10 translate-y-[20vh]"
              />
            </div>
          </div>
        </div>
        <div className="h-[150vh] lg:h-[270vh] relative z-20">
          <div
            ref={target}
            className="h-[90%] absolute top-[10%] z-1000 w-full pointer-events-none"
          />
          <div
            ref={scaleRef}
            className="h-[44%] absolute top-[23%] z-1000 w-full pointer-events-none"
          />
          <div className="sticky top-0" style={{ top }}>
            <div className="grid grid-cols-12 gap-x-4 px-4">
              <div className="col-span-12 lg:col-span-10 md:col-start-1 lg:col-start-2">
                <div
                  className="relative aspect-1648/949 w-full"
                  ref={container}
                >
                  <motion.div
                    style={{ scale }}
                    className="will-change-transform size-full"
                  >
                    <motion.img
                      src="/actual/opal-first-2.png"
                      className="absolute left-0 size-full z-20 will-change-[clip-path]"
                      style={{ clipPath }}
                    />
                    <motion.img
                      src="/actual/opal-first-1.png"
                      className="absolute left-0 size-full z-10"
                      ref={img}
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
