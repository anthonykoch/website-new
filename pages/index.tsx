import { Footer } from '@/components/app/footer/Footer'
import ImageExhibitDownloadsPage from '@/public/final-compressed/exhibit-downloads-page.png'
import ImageExhibitTadpoleShopPage from '@/public/final-compressed/exhibit-tadpole-shop.png'
import type { GetStaticProps, NextPage } from 'next'
// import ImageExhibitDoctorPage from '@/public/final-compressed/exhibit-doctor.png'
// import ImageExhibitMediaPage from '@/public/final-compressed/exhibit-media.png'

import { SiteNavigation } from '@/features/navigation/SiteNavigation'
import {
  animate,
  motion,
  stagger,
  useMotionTemplate,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from 'motion/react'

import { easeOutExpo } from '@/utils/animation'
import { FC, useEffect, useRef } from 'react'

import { Grid } from '@/components/Grid'
import { MobileImageScroller } from '@/components/MobileImageScroller'
import { useScrollX } from '@/hooks/use-scroll-x'
import { Post, PostList } from '@/components/PostList'
import { getAllPostMeta } from '@/utils/post'

const ArrowRightSvg: FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 28 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 18.9998C17.744 18.9998 17.488 18.9018 17.293 18.7068C16.902 18.3158 16.902 17.6838 17.293 17.2928L23.586 10.9998H2C1.448 10.9998 1 10.5518 1 9.99976C1 9.44776 1.448 8.99976 2 8.99976H23.586L17.293 2.70676C16.902 2.31576 16.902 1.68376 17.293 1.29276C17.684 0.901762 18.316 0.901762 18.707 1.29276L26.707 9.29276C26.804 9.38876 26.876 9.50076 26.925 9.61876C26.973 9.73476 27 9.86276 27 9.99676C27 9.99876 27 10.0008 27 10.0028C27 10.1368 26.973 10.2648 26.925 10.3808C26.876 10.4998 26.804 10.6108 26.707 10.7068L18.707 18.7068C18.512 18.9018 18.256 18.9998 18 18.9998Z"
        fill="black"
        className="transition-colors duration-150"
      />
    </svg>
  )
}

const Home: NextPage = ({ posts }: { posts: Post[] }) => {
  const opalcameraHomeImageRef = useRef<HTMLImageElement>(null)
  const opalcameraHomeImageScrollable = useRef<HTMLDivElement>(null)

  const opalCameraMacbookScroll = useScroll({
    target: opalcameraHomeImageScrollable,
    offset: ['60vh end', '220vh start'],
    // offset: ['100vh end', 'end start'],
  })

  const homeImageYRemap = useTransform(
    opalCameraMacbookScroll.scrollYProgress,
    [0, 1],
    [0, -64],
  )

  const homeImageScale = useTransform(
    opalCameraMacbookScroll.scrollYProgress,
    [0.5, 1],
    [1, 1.5],
    // [1, 1.06],

    // [1, 0.97],
  )
  const homeImageY = useMotionTemplate`${homeImageYRemap}%`

  useEffect(() => {
    if (!opalcameraHomeImageRef.current) return

    opalcameraHomeImageRef.current
  }, [])

  // const opalLogoRef = useRef(null)

  // const { scrollYProgress } = useScroll({
  //   target: opalLogoRef,
  //   offset: ['start end', 'end start'],
  // })

  // const clipPath1 = useTransform(scrollYProgress, [0, 1], [100, 0])
  // const clipPathTransform = useMotionTemplate`inset(0% 0px ${clipPath1}% 0px)`

  const introTitleRef = useRef<HTMLSpanElement>(null)

  const introRef = useRef<HTMLDivElement>(null)
  const opalViewSiteRef = useRef<HTMLAnchorElement>(null)
  const timeout = useRef<any>(null)

  const introBlockRef = useRef<HTMLDivElement>(null)

  // const clipPath1 = useTransform(scrollYProgress, [0, 1], [100, 0])
  // const introBlockClipPath = useMotionTemplate`inset(0% 0px ${clipPath1}% 0px)`

  useEffect(() => {
    timeout.current = setTimeout(() => {
      if (
        !introTitleRef.current ||
        !newJobRef.current ||
        !lookRef.current ||
        !arrowsRef.current ||
        !introBlockRef.current
      )
        return

      let delay = 0.9

      if (introTitleRef.current) {
        introTitleRef.current.style.visibility = 'visible'
      }

      animate(
        introBlockRef.current,
        {
          scaleY: [1, 0],
        },
        {
          duration: 2.2,
          ease: easeOutExpo,
          delay: 0.4,
        },
      )

      Promise.all(
        Array.from(
          introTitleRef.current!.querySelectorAll('.selector-line'),
        ).map((line, i) => {
          return animate(
            line,
            { y: ['110%', '0%'] },
            {
              // delay: 0 + 0.07 * i,
              delay: (delay += 0.3) + 0.07 * i,
              duration: 1.9,
              ease: easeOutExpo,
            },
          )
        }),
      )

      animate(
        newJobRef.current,
        { opacity: [0, 1], y: [10, 0] },
        { duration: 1.5, delay: (delay += 0.7), ease: easeOutExpo },
      )

      animate(
        lookRef.current,
        { opacity: [0, 1] },
        {
          duration: 1.5,
          delay: (delay += 0.5),
          ease: easeOutExpo,
        },
      )

      animate(
        arrowsRef.current,
        { opacity: [0, 1] },
        {
          duration: 1.2,
          delay: (delay += 0.07),
          ease: easeOutExpo,
        },
      )

      const imageStaggerDelay = 0.8

      animate(
        '.selector-opal-camera-image',
        { opacity: [0, 1] },
        {
          delay: stagger(imageStaggerDelay, { startDelay: (delay += 1) }),
          duration: 1,
          ease: [0.33, 1, 0.68, 1],
        },
      )

      delay += imageStaggerDelay * 2

      animate(
        '.selector-opal-camera-title',
        { y: ['110%', '0%'] },
        {
          delay: delay,
          duration: 1.9,
          ease: easeOutExpo,
        },
      )

      Array.from(
        document.querySelectorAll('.selector-opal-camera-text .selector-inner'),
      ).forEach((line, i) => {
        animate(
          line,
          { y: ['110%', '0%'], opacity: [0, 1] },
          {
            delay: (delay += 0.07) + 0.07 * i,
            duration: 1.9,
            ease: easeOutExpo,
            opacity: { delay: 0.03 * i + 0.1, duration: 1 },
          },
        )
      })

      if (opalViewSiteRef.current) {
        animate(
          opalViewSiteRef.current,
          { opacity: [0, 1], x: [-18, 0] },
          {
            delay: (delay += 0.14),
            duration: 1.2,
            ease: easeOutExpo,
          },
        )
      }
    }, 400)

    return () => {
      clearTimeout(timeout.current)
    }
  }, [])

  const mfMobileContainer = useRef<HTMLDivElement>(null)

  const mfmobilescroll = useScroll({
    target: mfMobileContainer,
    offset: ['0vh end', '160vh end'],
  })

  useScrollX({
    container: mfMobileContainer,
    scrollYProgress: mfmobilescroll.scrollYProgress,
  })

  const opalCameraImagesRef = useRef<HTMLDivElement>(null)

  const opalCameraScroll = useScroll({
    target: opalCameraImagesRef,
    offset: ['30vh end', '160vh end'],
  })

  useScrollX({
    container: opalCameraImagesRef,
    scrollYProgress: opalCameraScroll.scrollYProgress,
  })

  const newJobRef = useRef<HTMLParagraphElement>(null)

  const lookRef = useRef<HTMLDivElement>(null)
  const arrowsRef = useRef<HTMLDivElement>(null)
  const firstBlockRef = useRef<HTMLDivElement>(null)

  const opalIntroRef = useRef<HTMLElement>(null)

  const { scrollYProgress: opalIntroScrollYProgress } = useScroll({
    target: opalIntroRef,
    offset: ['160vh end', '240vh end'],
  })

  const opalIntroY = useTransform(opalIntroScrollYProgress, [0, 1], [0, 500])
  const opalIntroScale = useTransform(
    opalIntroScrollYProgress,
    [0, 1],
    [1, 0.97],
  )

  const mfIntroRef = useRef<HTMLElement>(null)

  const { scrollYProgress: mfIntroScrollYProgress } = useScroll({
    target: mfIntroRef,
    offset: ['160vh end', '240vh end'],
    // offset: ['100vh end', '150vh end'],
  })

  const mfIntroY = useTransform(mfIntroScrollYProgress, [0, 1], [0, 400])
  const mfIntroScale = useTransform(mfIntroScrollYProgress, [0, 1], [1, 0.96])

  return (
    <div>
      {/* Keep fixed? */}
      <div className="absolute top-0 left-0 w-full z-1000">
        <div className="max-w-[1728px] mx-auto">
          <SiteNavigation />
          {/* <div className="border-b border-black/5 w-[calc(100wh-16px)]"></div> */}
        </div>
      </div>

      <div className="bg-[#EAEAEA]">
        <section>
          {/* <div className="pt-10 xl:pt-[80px]" /> */}

          {/* <div className="h-[500px] bg-black">
            <div className="max-w-[1200px] mx-auto">
              <span className="text-[70px] font-300 text-white font-heading leading-[1.3] xl:leading-[1.1] max-w-[1200px] [.split-word]:will-change-[transform,opacity] relative">
                Anthony Koch is a front-end developer helping companies and
                startups ship pixel-perfect, responsive websites.
              </span>
            </div>
          </div> */}
          {/* <div className="pt-[80px] xl:pt-[180px]" /> */}
          <div className="h-[87vh] -mb-[30vh]" ref={introRef}>
            <motion.div
              ref={introBlockRef}
              // style={{ clipPath: introBlockClipPath }}
              className="bg-black h-[57vh] w-full z-10 absolute origin-bottom"
            />
            <div className="max-w-[1728px] mx-auto grid grid-cols-12 gap-x-4 px-4 h-full">
              <div className="col-span-12 xl:col-span-11 xl:col-start-2 h-full ">
                {/* <div className="pt-20 xl:pt-[70px]" /> */}
                {/* <div className="pt-20 xl:pt-[150px]" /> */}
                {/* <div className="mix-blend-difference relative size-13 bg-white flex items-end justify-center "> */}
                {/* <div className="-mb-20">
                <div className="mix-blend-difference relative size-[300px] bg-white flex items-end justify-center ">
                <span className="size-[80%] absolute left-1/2 top-1/2 -translate-1/2 border border-solid border-[#151515] block"></span>
                  <span className="text-[22px] text-[#EAEAEA] leading-[0.8] font-600 font-heading absolute bottom-[-1px]">Koch</span>
                </div>
                </div> */}
                {/* <img src="/final/favicon.svg" className="w-[60px]" /> */}
                <div className="h-full">
                  <div className="text-black sticky top-[17vh]">
                    <span className="text-[clamp(24px,calc(55vw*(100/1900)),46px)]  font-500  font-heading leading-[1.5] xl:leading-[1.3] max-w-[1200px] [.split-word]:will-change-[transform,opacity] relative">
                      <p className="md:hidden">
                        Anthony Koch is a front-end developer helping companies
                        and startups ship pixel-perfect, responsive websites.
                      </p>
                      <span
                        ref={introTitleRef}
                        style={{ visibility: 'hidden' }}
                        className="hidden md:block max-w-[1000px]"
                      >
                        <span className="setup-overflow">
                          <span className="setup-line-down selector-line">
                            Anthony Koch is a front-end developer helping{' '}
                          </span>
                        </span>
                        <span className="setup-overflow">
                          <span className="setup-line-down selector-line">
                            companies and startups ship pixel-perfect,{' '}
                          </span>
                        </span>
                        <span className="setup-overflow">
                          <span className="setup-line-down selector-line">
                            responsive websites.
                          </span>
                        </span>
                      </span>
                    </span>
                    <p
                      ref={newJobRef}
                      className="mt-2 setup-fade-in bg-black px-5 py-3 inline-block text-white text-[13px] lg:text-[15px]"
                    >
                      Currently looking for new opportunities - Jan 2025
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="pb-18 xl:pb-40 " /> */}
        </section>

        <div className="bg-black  text-white relative z-10" ref={firstBlockRef}>
          {/* <div className="size-fill bg-[#eaeaea]"></div> */}
          <div className="pt-30 lg:pt-52" />
          <div className="max-w-[1728px] mx-auto">
            <div className="grid grid-cols-12 gap-x-4 px-4">
              <div className="col-span-12 xl:col-span-10 md:col-start-1 2xl:col-start-2">
                <p className="font-heading font-500 text-[46px] md:text-[58px] xl:text-[72px] leading-[1.1] xl:leading-none z-10 max-w-[1100px]">
                  <span className="block setup-fade-in" ref={lookRef}>
                    Take a look at my work below.{' '}
                  </span>
                  <span
                    ref={arrowsRef}
                    className="setup-fade-in rotate-180 origin-center inline-block text-primary-500"
                  >
                    ^^^
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="pb-20 lg:pb-30" />
        </div>

        <section ref={opalIntroRef}>
          <motion.div
            style={{ y: opalIntroY, scale: opalIntroScale }}
            transition={{ ease: 'easeIn' }}
          >
            <div className="xl:hidden">
              <div className="pb-20 lg:pb-30" />

              <MobileImageScroller
                containerRef={opalCameraImagesRef}
                title="Opal Camera"
                description={
                  <span className="max-w-[420px] block">
                    A website made to market the capabilities of
                    {/* Opal Camera is a website made to market the capabilities of */}
                    the C1 and Tadpole cameras, and the accompanying Composer
                    app.
                  </span>
                }
                images={[
                  <img
                    src="/final-compressed/girl.png"
                    className="h-[320px] md:h-[420px]"
                  />,
                  <img
                    src="/final-compressed/opal-tadpole.png"
                    className="h-[320px] md:h-[420px]"
                  />,
                  // <img src="/final-compressed/card-opal.png" className="h-[320px]" />,
                ]}
              />
              <div className="pb-4" />

              <div className="px-4 text-center">
                <a
                  href="https://opalcamera.com/"
                  className="w-[200px] flex items-center justify-center gap-x-5 font-body uppercase text-[12px] font-500 tracking-wide text-white hover:text-black bg-black hover:bg-primary-500 hover:**:fill-black transition-all duration-150 px-5 py-2 shadow-none hover:shadow-[0_24px_60px_-9px_rgb(0_0_0/20%)]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View site
                  <ArrowRightSvg className="w-[24px] *:fill-white " />
                </a>
              </div>
            </div>

            <div className="pb-20 lg:pb-30" />
            {/* Desktop version */}
            <div className="xl:max-w-[max(1200px,80%)] px-[16px] 5xl:max-w-[1728px] mx-auto hidden xl:flex gap-x-4 relative">
              <div className="w-[36.533085%]">
                <h3 className="font-bold text-[14px] uppercase tracking-[1.4px] text-right mb-[10px]">
                  <span className="relative">
                    <span className="setup-overflow">
                      <span className="setup-line-down selector-opal-camera-title">
                        Opal Camera
                      </span>
                    </span>
                  </span>
                </h3>
                <div className="aspect-784/1190 relative">
                  {/* <div className="striped rounded-md size-full"></div> */}
                  <img
                    src="/final-compressed/girl.png"
                    className="selector-opal-camera-image setup-fade-in absolute size-full left-0 top-0"
                  />
                </div>
              </div>
              <div className="w-[42.870457%] self-end">
                <p className="text-[18px] xl:text-[24px] leading-[30px] font-heading font-500 pb-[26px] max-w-[384px] selector-opal-camera-text">
                  <span className="setup-overflow selector-line">
                    <span className="setup-line-down selector-inner">
                      Opal Camera is a website made to
                    </span>
                  </span>
                  <span className="setup-overflow selector-line">
                    <span className="setup-line-down selector-inner">
                      market the capabilities of the C1
                    </span>
                  </span>
                  <span className="setup-overflow selector-line">
                    <span className="setup-line-down selector-inner">
                      and Tadpole cameras.
                    </span>
                  </span>
                </p>
                <div className="aspect-920/608 relative">
                  {/* <div className="striped rounded-md size-full" /> */}

                  <img
                    src="/final-compressed/opal-tadpole.png"
                    className="selector-opal-camera-image setup-fade-in absolute size-full top-0 left-0"
                  />
                </div>
              </div>
              <div className="w-[20.503262%]">
                <div className="h-full flex flex-col items-start justify-end">
                  <a
                    href="https://opalcamera.com/"
                    className="inline-flex items-center justify-center gap-x-5 w-full font-body uppercase text-[12px] font-500 tracking-wide  setup-fade-in text-white hover:text-black bg-black hover:bg-primary-500 hover:**:fill-black  transition-all duration-150 px-5 py-2 shadow-none hover:shadow-[0_24px_60px_-9px_rgb(0_0_0/20%)]"
                    ref={opalViewSiteRef}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View site
                    <ArrowRightSvg className="w-[28px] *:fill-white " />
                  </a>

                  {/* <img
                  src="/final-compressed/person.png"
                  className="selector-opal-camera-image setup-fade-in"
                /> */}
                  {/* <a
                  href="https://opalcamera.com/"
                  className="flex justify-end items-center gap-x-5 w-full font-body uppercase text-[12px] text-black font-500 tracking-wide  setup-fade-in"
                  ref={opalViewSiteRef}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View site
                  <img src="/final-compressed/arrow-right.svg" className="w-[28px]" />
                </a> */}
                </div>
              </div>
            </div>

            <div className="pb-20 lg:pb-30" />

            <div className=" mx-auto max-w-[1728px]">
              <div className="grid grid-cols-12 gap-x-4 px-4">
                <div className="col-span-12 lg:col-span-6 xl:col-span-4 xl:col-start-2 2xl:col-start-2">
                  <h2 className="copy-heading-2-sm lg:copy-heading-2 max-w-[412px] pb-4">
                    What is Opal Camera?
                  </h2>
                </div>

                <div className="xl:col-start-6 2xl:col-start-6 md:col-span-8 col-span-12 lg:col-span-6 xl:col-span-6 2xl:col-span-5">
                  <p className="copy-body-4-sm lg:copy-body-4 text-[#888787] max-w-[654px]">
                    Opal Camera creates premium webcams designed to help people
                    look and sound great during video calls. Their main products
                    are the Opal C1, a high-quality camera ideal for desktop or
                    home office setups, and the Tadpole, a tiny portable camera
                    made specifically for laptops.
                  </p>
                </div>
              </div>
            </div>

            {/* 
          <div className="grid xl:grid-cols-12 gap-x-4 gap-y-4 mt-[20px] px-4 xl:px-0">
            <div className="col-span-6 xl:h-[825px]">
              <img
                className="size-full xl:object-cover object-right"
                src={ImageExhibitDoctorPage.src}
              />
            </div>
            <div className="col-span-6 xl:h-[825px]">
               <img
                className="size-full xl:object-cover object-left"
                src={ImageExhibitMediaPage.src}
              />
            </div>
          </div> */}

            <div className="pb-20 lg:pb-30" />

            {/* 
          <div className="bg-black pt-10 relative">
            <div
              className=" absolute top-0 left-0 h-full w-full"
              ref={opalLogoRef}
            />
            <div className="aspect-1609/804 relative">
              <img
                src="/final-compressed/logo-opal-wordmark.svg"
                className="max-w-[1650px] mx-auto w-full absolute object-cover left-0 top-0 z-10"
              />

              <motion.img
                src="/final-compressed/logo-opal-wordmark-orange.svg"
                className="max-w-[1650px] mx-auto w-full absolute object-cover left-0 top-0 z-20"
                style={{ clipPath: clipPathTransform }}
              />
            </div>
          </div> */}

            {/* <div className="bg-black pt-10 relative">
            <div
              className=" absolute top-0 left-0 h-full w-full"
              ref={opalLogoRef}
            />
            <div className="relativ">
              <img
                src="/final-compressed/logo-opal-wordmark-b.svg"
                className="max-w-[850px] mx-auto w-full absolute object-cover right-0 top-0 z-10"
              />

              <motion.img
                src="/final-compressed/logo-opal-wordmark.svg"
                className="max-w-[850px] mx-auto w-full absolute object-cover right-0 top-0 z-20"
                style={{ clipPath: clipPathTransform }}
              />
            </div>
          </div> */}
          </motion.div>
        </section>

        {/* <div className="pt-30" /> */}

        <section>
          <div className="bg-black  text-white z-10 relative">
            <div className="pt-30 lg:pt-40" />

            <div className="max-w-[1728px] mx-auto">
              <div className="grid grid-cols-12 gap-x-4 px-4">
                <div className="col-span-12 xl:col-span-10 md:col-start-1 2xl:col-start-2">
                  <p className="font-heading font-500 text-[46px] md:text-[58px] xl:text-[72px] leading-[1.1] xl:leading-none z-10 max-w-[1100px]">
                    <span className="block">
                      A selection of my work at Opal
                    </span>
                    {/* <span className="rotate-180 origin-center inline-block text-primary-500">
                      ^^^
                    </span> */}
                  </p>
                </div>
              </div>
            </div>
            <div className="pb-20 lg:pb-30" />
          </div>

          <div className="pb-20 lg:pb-30" />

          <div className="max-w-[1728px] mx-auto px-4">
            <div className="grid grid-cols-12 gap-x-4">
              <div className="max-xl:order-2 col-span-12 xl:col-span-3 xl:col-start-2">
                <div className="max-xl:max-w-[350px] lg:mx-0 w-full">
                  <p className="text-[14px] uppercase leading-[1.2] font-heading font-700 tracking-wide">
                    MOBILE NAVIGATION
                  </p>
                  <div className="pb-4" />
                  <video autoPlay muted loop className="object-cover size-full">
                    <source
                      src="/final-compressed/mobile-nav.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
              </div>
              <div className="col-span-12 xl:col-span-7">
                {/* <div className="col-span-12 lg:col-span-9 lg:col-start-2"> */}
                <p className="text-[14px] uppercase leading-[1.2] font-heading font-700 tracking-wide">
                  {/* DOCTOR OPAL  */}
                  FIRMWARE UPDATER
                </p>
                <div className="pb-4" />

                <img src="/final-compressed/exhibit-doctor.png" />
                <div className="pb-4" />

                <p className="font-body font-500 text-[16px] leading-[26px] -tracking-[0.4px] text-[#999999] max-w-[500px] pb-4">
                  Dr. Opal is a web based tool created to help users update
                  their Tadpole firmware. I built out the UI and collaborated
                  with device engineers to interface it with the Tadpole.
                </p>
                <div className="pb-10" />
              </div>
            </div>
          </div>
        </section>

        <div className="pb-10 xl:pb-30" />

        <div className="grid xl:grid-cols-12 gap-x-4 gap-y-4 px-4 xl:px-0 max-w-[2700px] mx-auto">
          <div className="col-span-6 xl:h-[825px]">
            <div className="pb-4  text-center">
              <p className="text-[14px] uppercase leading-[1.2] font-heading font-700 tracking-wide">
                Tadpole Shop Page
              </p>
            </div>
            <img
              className="xl:size-full xl:object-cover object-right"
              src={ImageExhibitTadpoleShopPage.src}
            />
          </div>
          <div className="col-span-6 xl:h-[825px]">
            <div className="pb-4 max-xl:pt-10 text-center">
              <p className="text-[14px] uppercase leading-[1.2] font-heading font-700 tracking-wide">
                Downloads Page
              </p>
            </div>
            <img
              className="xl:size-full xl:object-cover object-left"
              src={ImageExhibitDownloadsPage.src}
            />
          </div>
        </div>

        <div className="pt-30" />

        <div
          className="relative h-[calc(1700px+100vh)] lg:h-[calc(2200px+100vh)] -mb-[100vh] bg-[#EAEAEA]"
          ref={opalcameraHomeImageScrollable}
        >
          <div className="sticky top-[30vh] lg:top-[10vh] left-0">
            <motion.div
              style={{ scale: homeImageScale }}
              className="relative z-10 "
            >
              <img
                src="/final-compressed/empty-macbook.png"
                className="w-full max-w-[800px] xl:max-w-[1200px] mx-auto absolute z-20 top-0 left-1/2 -translate-x-1/2"
              />
              <div className="max-w-[800px] xl:max-w-[1200px] w-full mx-auto">
                <div className="aspect-1000/570 relative  pt-[6%]">
                  <div className="overflow-hidden w-full max-w-[71.5%] aspect-640/400 z-40 relative left-[14%] ">
                    <motion.img
                      src="/final-compressed/opalcamera-home-full.png"
                      className="absolute top-0 left-0 w-full h-auto  object-top z-10"
                      ref={opalcameraHomeImageRef}
                      style={{ y: homeImageY }}
                    />
                  </div>
                </div>
              </div>

              {/* <div className="max-w-[760px] mx-auto px-4 ">
                  <p className="text-[36px] leading-[1.2] font-heading font-500 -tracking-wide">
                    The project expanded into so much more.
                  </p>
                </div> */}
            </motion.div>
            {/* <div className="h-[50%] w-full absolute left-0 top-0 bg-[#EAEAEA]" /> */}
          </div>
        </div>
        <div className="pb-4" />

        {/* <div className="bg-primary-500 text-black"> */}
        <div className="bg-black text-white z-10 relative">
          {/* <div className="bg-[#ffdb01] text-black"> */}
          <div className="max-w-[1728px] mx-auto">
            <div className="grid grid-cols-12 gap-x-4 px-4">
              <div className="col-span-12 xl:col-span-10 md:col-start-1 2xl:col-start-2 pt-18">
                <p className=" xl:pt-36  font-heading font-500 text-[46px] md:text-[58px] xl:text-[72px] leading-[1.1] xl:leading-none z-10">
                  What started as a landing page grew into architecting an
                  entire e-commerce experience.
                  {/* Working at Opal Camera was a huge learning experience. */}
                </p>
              </div>
            </div>
          </div>
          <div className="pb-20 xl:pb-30" />
          {/* <div className="pb-20 xl:pb-40" /> */}
        </div>

        <div className="bg-white z-10 relative">
          <div className="pb-20 xl:pb-30" />
          <div className="max-w-[1728px] mx-auto">
            <Grid
              left={
                <h2 className="copy-heading-2-sm lg:copy-heading-2 pb-6 max-w-[310px] xl:ml-auto">
                  An expanding role in an evolving stack
                </h2>
              }
              right={
                <div className="flex flex-col gap-y-6 copy-body-4-sm lg:copy-body-4 text-[#888787]">
                  <p>
                    The Opal Camera website is a simple Shopify app utilizing
                    the Storefront API through graphQL running inside an
                    AdonisJS application. In the beginning stages, we were using
                    Docker deployed through Digital Ocean but have since
                    transferred the site to a much simpler stack of NextJS using
                    Vercel. The frontend is written using tools like Tailwind,
                    motion.dev and React.
                  </p>
                  <p>
                    At the start of my time at Opal, I was purely creating the
                    front-end. I’ve since worked in many different aspects of
                    development, ranging from building out administrative tools
                    that manage email signups to custom email development and
                    Shopify management.
                  </p>
                </div>
              }
            />

            <div className="pb-8" />

            <Grid
              left={
                <h2 className="copy-heading-2-sm lg:copy-heading-2 pb-6 max-w-[288px] xl:ml-auto">
                  A growing startup
                </h2>
              }
              right={
                <div className="*:pb-6 copy-body-4 text-[#888787] ">
                  <p>
                    Opal Camera has had great success and continues to grow,
                    having gotten several rounds of funding, even by the AI
                    giant OpenAI.
                  </p>
                </div>
              }
            />
          </div>
          <div className="pb-8" />

          <section ref={mfIntroRef}>
            <motion.div style={{ y: mfIntroY, scale: mfIntroScale }}>
              <div className="mx-auto max-w-[1728px]">
                <div className="pb-40 lg:pb-0" />

                <div className="xl:hidden">
                  <MobileImageScroller
                    containerRef={mfMobileContainer}
                    title="Modern Fertility"
                    description={
                      <span className="max-w-[380px] block">
                        A business dedicated to supporting and informing women
                        about their fertility options.
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
                      // <img
                      //   src="/final-compressed/mf-recommended-mobile.png"
                      //   className="h-[350px] w-auto"
                      // />,
                    ]}
                  />
                </div>

                <div className="hidden xl:grid grid-cols-12 gap-x-4 px-4 pt-[200px] ">
                  <div className="col-span-12 lg:col-span-5 xl:col-span-4 2xl:col-start-2">
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
                        A business dedicated to supporting and informing women
                        about their fertility options.
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

              <div className="mx-auto max-w-[1728px]">
                <div className="grid grid-cols-12 gap-x-4 px-4">
                  <div className="col-span-12 lg:col-span-6 xl:col-span-4 xl:col-start-2 2xl:col-start-2">
                    <h2 className="copy-heading-2-sm lg:copy-heading-2 max-w-[412px] pb-4">
                      What is Modern Fertility?
                    </h2>
                  </div>

                  <div className="xl:col-start-6 2xl:col-start-6 md:col-span-8 col-span-12 lg:col-span-6 xl:col-span-6 2xl:col-span-5">
                    <p className="copy-body-4-sm lg:copy-body-4 text-[#888787] max-w-[654px]">
                      Modern Fertility is a women's health brand offering
                      at-home reproductive testing, including hormone tests that
                      assess key fertility markers like ovarian reserve and egg
                      count. Founded in 2017, it makes fertility information
                      more accessible and affordable by enabling convenient home
                      testing at a lower cost than traditional clinics.
                    </p>
                  </div>
                </div>

                {/* <Grid
              left={
                <div className="lg:text-right">
                  <h2 className="copy-heading-2-sm lg:copy-heading-2 max-w-[412px] pb-4 lg:ml-auto">
                    What is Modern Fertility?
                  </h2>
                </div>
              }
              right={
                <p className="copy-body-4-sm lg:copy-body-4 text-[#888787] max-w-[654px]">
                  Modern Fertility is a women's health brand offering at-home
                  reproductive testing, including hormone tests that assess key
                  fertility markers like ovarian reserve and egg count. Founded
                  in 2017, it makes fertility information more accessible and
                  affordable by enabling convenient home testing at a lower cost
                  than traditional clinics.
                </p>
              }
            /> */}
              </div>
            </motion.div>
          </section>

          <div className="pb-40" />

          <section>
            <div>
              <div className="text-white bg-black z-10 relative">
                <div className="pt-40" />

                <div className="max-w-[1728px] mx-auto">
                  <div className="grid grid-cols-12 gap-x-4 px-4 ">
                    <p className="col-span-12 xl:col-span-10 xl:col-start-2 font-heading font-500 text-[58px] xl:text-[72px] leading-[1] z-10 relative max-w-[1200px]">
                      I led frontend development for the marketing website and
                      user dashboard.
                    </p>
                  </div>
                </div>
                <div className="pb-30" />
              </div>
            </div>

            <div className="pb-[120px]" />

            <Grid
              left={
                <h2 className="copy-heading-2-sm lg:copy-heading-2 pb-6 max-w-[300px] xl:ml-auto lg:text-right">
                  The early days of Modern Fertility
                </h2>
              }
              right={
                <div className="gap-y-6 flex flex-col copy-body-4-sm lg:copy-body-4 text-[#888787] max-w-[654px]">
                  <p>
                    Modern Fertility approached me to assist them in developing
                    their website. At the time, I was the sole front-end
                    developer, working alongside Tom Chokel to help Carly and
                    Afton give women the tools to better understand their
                    fertility.
                  </p>
                  <p>
                    Fast forward several years, and not only has the website
                    grown in scale, but Modern Fertility has grown as a wildly
                    successful company, being acquired by Ro for $225 million.
                  </p>
                </div>
              }
            />

            <div className="pb-[100px]" />

            <Grid
              left={
                <h2 className="copy-heading-2-sm lg:copy-heading-2 pb-6 max-w-[409px] xl:ml-auto lg:text-right">
                  A responsive website, built from the ground up.
                </h2>
              }
              right={
                <div className="*:pb-6 copy-body-4-sm lg:copy-body-4 text-[#888787] max-w-[654px]">
                  <p>
                    I worked closely with designers to build out the first
                    iteration of Modern Fertility’s website using just simple
                    HTML and CSS. Over time, the tech stack has evolved from the
                    basics to React and styled-components running inside of a
                    Django application.
                  </p>

                  <div className="pb-4" />
                </div>
              }
            />
            <div className="pt-40" />
          </section>
        </div>
      </div>
      <section>
        <div className="">
          {/* <div className="pt-40" /> */}

          <div className="max-w-[1728px] mx-auto">
            <div className="lg:grid grid-cols-12 gap-x-4 px-4 ">
              <p className="text-center lg:text-left lg:col-span-4 lg:col-start-6 ">
                <span className="font-heading font-500 text-[58px] xl:text-[72px] leading-[1] z-10 relative size-30 bg-black text-white flex justify-center items-center">
                  <span className="block">Fin</span>
                  {/* <span className="rotate-180 origin-center inline-block text-primary-500">
                    ^^^
                  </span> */}
                </span>
              </p>
            </div>
          </div>
          <div className="pb-30" />
        </div>
      </section>

      {/* <section>
        <div className="pb-30" />
        <div className="max-w-[1728px] mx-auto">
          <div className="grid grid-cols-12 gap-x-4 px-4 ">
            <div className="col-span-12 xl:col-span-10 xl:col-start-2 max-w-[800px]">
              <PostList posts={posts.slice(0, 4)} />
            </div>
          </div>
        </div>

        <div className="pb-30" />
      </section> */}

      <Footer />
    </div>
  )
}

import superjson from 'superjson'

export const getStaticProps: GetStaticProps<any> = async () => {
  const posts = await getAllPostMeta()

  return {
    props: {
      posts: superjson.serialize(posts).json as any,
    },
  }
}

export default Home
