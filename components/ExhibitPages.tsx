import ImageExhibitDownloadsPage from '@/public/final-compressed/exhibit-downloads-page.png'
import ImageExhibitTadpoleShopPage from '@/public/final-compressed/exhibit-tadpole-shop.png'
import {
  motion,
  useScroll,
  useTransform
} from 'motion/react'
import { useRef } from 'react'

export const ExhibitPages = () => {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['-50vh end', 'end -20vh'],
  })

  const x = useTransform(scrollYProgress, [0, 1], ['-30vw', '0vw'])

  const ref2 = useRef<HTMLDivElement>(null)

  const scroll2 = useScroll({
    target: ref2,
    offset: ['-50vh end', 'end 20vh'],
  })

  const x2 = useTransform(scroll2.scrollYProgress, [0, 1], ['-20vw', '0vw'])

  const ref3 = useRef<HTMLDivElement>(null)

  const scroll3 = useScroll({
    target: ref3,
    offset: ['-50vh end', 'end 20vh'],
  })

  const x3 = useTransform(scroll3.scrollYProgress, [0, 1], ['0vw', '-20vw'])

  return (
    <div>
      <div className="xl:hidden overflow-hidden">
        <motion.div
          className="w-[120vw] will-change-transform"
          style={{ x: x2 }}
        >
          <div className=" relative" ref={ref2}>
            <div className="pb-4  text-center">
              <p className="text-[14px] uppercase leading-[1.2] font-heading font-700 tracking-wide">
                Tadpole Shop Page
              </p>
            </div>
            <img
              className="size-full object-cover object-right"
              src={ImageExhibitTadpoleShopPage.src}
              loading="lazy"
            />
          </div>
        </motion.div>
        <motion.div
          className="w-[120vw] will-change-transform"
          style={{ x: x3 }}
        >
          <div className="relative" ref={ref3}>
            <div className="pt-10 pb-4 text-center">
              <p className="text-[14px] uppercase leading-[1.2] font-heading font-700 tracking-wide">
                Downloads Page
              </p>
            </div>
            <img
              className="size-full object-cover object-left"
              src={ImageExhibitDownloadsPage.src}
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
      {/* <MobileImageScroller
          containerRef={imageWrapperRef}
          images={[
            <div className=" relative  h-[400px] xl:h-[825px] xl:aspect-auto">
              <div className="pb-4  text-center">
                <p className="text-[14px] uppercase leading-[1.2] font-heading font-700 tracking-wide">
                  Tadpole Shop Page
                </p>
              </div>
              <img
                className="size-full object-cover object-right"
                src={ImageExhibitTadpoleShopPage.src}
                loading="lazy"
              />
            </div>,
            <div className="relative  h-[400px] xl:h-[825px] xl:aspect-auto">
              <div className="pb-4 text-center">
                <p className="text-[14px] uppercase leading-[1.2] font-heading font-700 tracking-wide">
                  Downloads Page
                </p>
              </div>
              <img
                className="size-full object-cover object-left"
                src={ImageExhibitDownloadsPage.src}
                loading="lazy"
              />
            </div>,
            // <img src="/final-compressed/card-opal.png" className="h-[320px]" />,
          ]}
        />
      </div> */}

      <div className="hidden xl:block overflow-hidden">
        <motion.div className="w-[130vw] will-change-transform" style={{ x }}>
          {/* <motion.div className="w-[130vw] will-change-transform" style={{ x }}> */}
          <div
            ref={ref}
            className="flex gap-x-4 gap-y-4 xl:px-0 max-w-[2700px] mx-auto"
          >
            <div className="xl:w-1/2 relative aspect-2485/1736 h-[400px] xl:h-[825px] xl:aspect-auto">
              <div className="pb-4  text-center">
                <p className="text-[14px] uppercase leading-[1.2] font-heading font-700 tracking-wide">
                  Tadpole Shop Page
                </p>
              </div>
              <img
                className="size-full object-cover object-right"
                src={ImageExhibitTadpoleShopPage.src}
                loading="lazy"
              />
            </div>
            <div className="w-1/2 relative aspect-2485/1736 xl:h-[825px] xl:aspect-auto">
              <div className="pb-4 text-center">
                <p className="text-[14px] uppercase leading-[1.2] font-heading font-700 tracking-wide">
                  Downloads Page
                </p>
              </div>
              <img
                className="size-full object-cover object-left"
                src={ImageExhibitDownloadsPage.src}
                loading="lazy"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
