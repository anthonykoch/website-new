import { Description4x8Grid } from '@/features/grid/Description4x8Grid'
import { MobileImageScroller } from './MobileImageScroller'
import { useRef } from 'react'
import { useScroll, useTransform, motion } from 'motion/react'
import { useScrollX } from '@/hooks/use-scroll-x'

export const ModernFertilityIntroSection = () => {
  const mfIntroRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress: mfIntroScrollYProgress } = useScroll({
    target: mfIntroRef,
    offset: ['75vh end', '120vh end'],

    // offset: ['1.5 end', '2 end'],
    // offset: ['0.9 end', '1.8 end'],
    // offset: ['160vh end', '246vh end'],
    // offset: ['160vh end', '240vh end'],
    // offset: ['100vh end', '150vh end'],
  })

  const mfIntroY = useTransform(mfIntroScrollYProgress, [0, 1], [0, 300])
  // const mfIntroY = useTransform(mfIntroScrollYProgress, [0, 1], [0, 450])
  const mfIntroScale = useTransform(mfIntroScrollYProgress, [0, 1], [1, 1])
  // const mfIntroScale = useTransform(mfIntroScrollYProgress, [0, 1], [1, 0.97])
  // const mfIntroScale = useTransform(mfIntroScrollYProgress, [0, 1], [1, 0.96])

  const mfMobileContainer = useRef<HTMLDivElement>(null)

  const mfmobilescroll = useScroll({
    target: mfMobileContainer,
    // offset: ['0vh end', '160vh end'],
    offset: ['0 end', '240vh end'],
  })

  useScrollX({
    container: mfMobileContainer,
    scrollYProgress: mfmobilescroll.scrollYProgress,
  })

  return (
    <div
    // ref={mfIntroRef}
    >
      <motion.div
        style={{ y: mfIntroY, scale: mfIntroScale }}
        className="will-change-transform"
      >
        <div className="mx-auto max-w-site">
          <div className="pb-20 lg:pb-40" />

          <div className="xl:hidden">
            <MobileImageScroller
              containerRef={mfMobileContainer}
              title="Modern Fertility"
              description={
                <span className="max-w-[380px] block">
                  A business dedicated to supporting and informing women about
                  their fertility options.
                </span>
              }
              images={[
                <img
                  src="/final-compressed/mf-first-mobile.svg"
                  className="h-[350px] md:h-[440px]  w-auto"
                />,
                <img
                  src="/final-compressed/mf-homepage-mobile.png"
                  className="h-[350px] md:h-[440px]  w-auto"
                />,
                <img
                  src="/final-compressed/mf-recommended-mobile.png"
                  className="h-[350px] w-auto lg:hidden"
                />,
              ]}
            />
          </div>

          <div className="hidden xl:grid grid-cols-12 gap-x-4 px-4  ">
            <div className="col-span-12 lg:col-span-5 xl:col-span-4 2xl:col-start-2 self-end">
              <p className="font-bold text-[14px] uppercase tracking-[1.4px] text-right mb-[15px]">
                Modern Fertility
              </p>

              <div className="max-lg:pb-4">
                <img
                  src="/final-compressed/mf-first.svg"
                  className="max-lg:max-w-[400px]"
                />
              </div>
            </div>
            <div className="col-span-12 xl:col-span-6 2xl:col-span-5">
              <div className="h-full flex flex-col justify-end">
                <p className="hidden lg:block xl:text-[22px] leading-[30px] font-heading font-500 pb-[22px] max-w-[380px]">
                  A business dedicated to supporting and informing women about
                  their fertility options.
                </p>
                <img src="/final-compressed/mf-homepage.png" />
              </div>
            </div>
            <div className="col-span-12 xl:col-span-2 2xl:col-span-2">
              <div className="h-full flex flex-col justify-end max-lg:pt-4 max-lg:max-w-[320px]">
                <p className="text-[13px] text-black/50 font-500 max-w-[200px]">
                  modernfertility.com is now a part of{' '}
                  <a
                    href="https://ro.co/modern-fertility/"
                    className="text-black/70 underline"
                  >
                    ro.co
                  </a>{' '}
                  and no longer able to be viewed.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="pb-20 lg:pb-40" />

        <div className="mx-auto max-w-site">
          <Description4x8Grid>
            <h2 className="copy-heading-2-sm lg:copy-heading-2 max-w-[412px] pb-4">
              What is Modern Fertility?
            </h2>
            <p className="copy-body-4-sm lg:copy-body-4 text-[#888787] max-w-[654px]">
              Modern Fertility is a women's health brand offering at-home
              reproductive testing, including hormone tests that assess key
              fertility markers like ovarian reserve and egg count. Founded in
              2017, it makes fertility information more accessible and
              affordable by enabling convenient home testing at a lower cost
              than traditional clinics.
            </p>
          </Description4x8Grid>
        </div>
      </motion.div>
      <div ref={mfIntroRef} />
    </div>
  )
}
