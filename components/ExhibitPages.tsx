import ImageExhibitDownloadsPage from '@/public/final-compressed/exhibit-downloads-page.png'
import ImageExhibitTadpoleShopPage from '@/public/final-compressed/exhibit-tadpole-shop.png'
import { theme } from '@/utils/theme'
import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'

export const ExhibitPages = () => {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['-50vh end', 'end 50vh'],
  })

  const gap =
    typeof window === 'undefined'
      ? [0, 0]
      : innerWidth < parseInt(theme('--breakpoint-xl'))
      ? [0, 0]
      : [-60, 60]
  const secondY = useTransform(scrollYProgress, [0, 1], gap)
  const firstY = useTransform(scrollYProgress, [0, 1], gap.slice(0).reverse())

  return (
    <div
      ref={ref}
      className="grid xl:grid-cols-12 gap-x-4 gap-y-4 px-4 xl:px-0 max-w-[2700px] mx-auto"
    >
      <motion.div
        style={{ y: firstY }}
        className="col-span-6 xl:h-[825px] relative"
      >
        <div className="pb-4  text-center">
          <p className="text-[14px] uppercase leading-[1.2] font-heading font-700 tracking-wide">
            Tadpole Shop Page
          </p>
        </div>
        <img
          className="xl:size-full xl:object-cover object-right"
          src={ImageExhibitTadpoleShopPage.src}
          loading="lazy"
        />
      </motion.div>
      <motion.div
        style={{ y: secondY }}
        className="col-span-6 xl:h-[825px] relative"
      >
        <div className="pb-4 max-xl:pt-10 text-center">
          <p className="text-[14px] uppercase leading-[1.2] font-heading font-700 tracking-wide">
            Downloads Page
          </p>
        </div>
        <img
          className="xl:size-full xl:object-cover object-left"
          src={ImageExhibitDownloadsPage.src}
          loading="lazy"
        />
      </motion.div>
    </div>
  )
}
