import { Footer } from '@/components/app/footer/Footer'
import ImageExhibitDownloadsPage from '@/public/final/exhibit-downloads-page.png'
import ImageExhibitTadpoleShopPage from '@/public/final/exhibit-tadpole-shop.png'
import ImageMScribble from '@/public/final/m-scribble.svg'
import ImageMFMacbook from '@/public/final/mf-macbook.png'
import type { NextPage } from 'next'
// import ImageExhibitDoctorPage from '@/public/final/exhibit-doctor.png'
// import ImageExhibitMediaPage from '@/public/final/exhibit-media.png'

console.log(ImageMScribble)

import { SiteNavigation } from '@/features/navigation/SiteNavigation'
import {
  animate,
  motion,
  resize,
  stagger,
  useMotionTemplate,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from 'motion/react'

import { easeOutExpo, fixFontSpacing } from '@/utils/animation'
import { useEffect, useRef } from 'react'

import { splitText } from 'motion-plus'
import { debounce } from 'lodash'
import { Grid } from '@/components/Grid'

const Home: NextPage = () => {
  const opalLogoRef = useRef(null)

  const opalcameraHomeImageRef = useRef<HTMLImageElement>(null)
  const opalcameraHomeImageScrollable = useRef<HTMLDivElement>(null)

  const meme = useScroll({
    target: opalcameraHomeImageScrollable,
    offset: ['100vh end', 'end start'],
  })

  const homeImageYRemap = useTransform(meme.scrollYProgress, [0, 1], [0, -64])
  const homeImageY = useMotionTemplate`${homeImageYRemap}%`

  // useMotionValueEvent(meme.scrollYProgress, 'change', (progress) => {
  //   console.log(progress)
  // })

  useEffect(() => {
    if (!opalcameraHomeImageRef.current) return

    opalcameraHomeImageRef.current
  }, [])

  // const { scrollYProgress } = useScroll({
  //   target: opalLogoRef,
  //   offset: ['start end', 'end start'],
  // })

  // const clipPath1 = useTransform(scrollYProgress, [0, 1], [100, 0])
  // const clipPathTransform = useMotionTemplate`inset(0% 0px ${clipPath1}% 0px)`

  const introTitleRef = useRef<HTMLSpanElement>(null)
  const introRef = useRef<HTMLDivElement>(null)
  const opalCameraDescriptionRef = useRef<HTMLDivElement>(null)
  const opalViewSiteRef = useRef<HTMLAnchorElement>(null)
  const timeout = useRef<any>(null)
  const isIntroAnimationFinished = useRef(false)

  useEffect(() => {
    if (!introTitleRef.current) return

    // if (!introTitleRef.current) return
    const splitLines = (
      el: HTMLElement,
      {
        fixFont,
        classes,
      }: { fixFont?: boolean; classes?: { line?: string; word?: string } } = {
        classes: {},
      },
    ): ReturnType<typeof splitText> => {
      const text = splitText(el, {
        lineClass: `split-line ${classes?.line ?? ''}`,
        wordClass: `split-word ${classes?.word ?? ''}`,
      })

      if (fixFont) fixFontSpacing(text.lines)

      return text
    }

    const stopResize1 = resize(
      debounce(() => {
        if (introTitleRef.current) {
          console.log(isIntroAnimationFinished.current)
          splitLines(introTitleRef.current, {
            fixFont: true,
            classes: isIntroAnimationFinished.current
              ? {}
              : { line: 'setup-overflow', word: 'setup-line-down' },
          })
        }
      }, 100),
    )

    const { lines } = splitLines(introTitleRef.current, { fixFont: true })

    // const opalCameraSplitText = splitText(opalCameraDescriptionRef.current, {
    //   lineClass: 'split-line setup-overflow',
    //   wordClass: 'split-word setup-line-down',
    // })

    timeout.current = setTimeout(() => {
      if (introTitleRef.current) {
        introTitleRef.current.style.visibility = 'visible'
      }

      // if (opalCameraDescriptionRef.current) {
      //   opalCameraDescriptionRef.current.style.visibility = 'visible'
      // }

      let delay = 1.1

      const imageStaggerDelay = 0.8

      animate(
        '.selector-opal-camera-image',
        { opacity: [0, 1] },
        {
          delay: stagger(imageStaggerDelay, { startDelay: delay }),
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
        console.log(line)
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

      if (introRef.current) {
        animate(
          introRef.current,
          { height: [0, 'auto'] },
          { duration: 1.3, ease: easeOutExpo, delay: (delay += 1) },
        )
      }

      Promise.all(
        Array.from(lines).map((line, i) => {
          return animate(
            line.querySelectorAll('.split-word'),
            { y: ['110%', '0%'] },
            {
              // delay: 0 + 0.07 * i,
              delay: delay + 0.07 * i,
              duration: 1.9,
              ease: easeOutExpo,
            },
          )
        }),
      ).then(() => {
        isIntroAnimationFinished.current = true
      })
    }, 400)

    return () => {
      clearTimeout(timeout.current)
      stopResize1()
    }
  }, [])

  return (
    <div>
      <div className="absolute top-0 left-0 w-full">
        <div className="max-w-[1600px] mx-auto grid grid-cols-12 gap-x-4">
          <div className="col-span-10 col-start-2">
            <SiteNavigation />
          </div>
        </div>
      </div>

      <div className="bg-[#EAEAEA]">
        <section>
          <div className="pt-10 xl:pt-[100px]" />
          {/* <div className="pt-[80px] xl:pt-[180px]" /> */}
          <div
            className="max-w-[1600px] mx-auto grid grid-cols-12 gap-x-4 px-4 overflow-hidden"
            style={{ height: 0 }}
            ref={introRef}
          >
            <div className="col-span-12 xl:col-span-11 xl:col-start-2">
              <div className="pt-10 xl:pt-[50px]" />
              <div className="inline-block">
                <span
                  // className="text-[clamp(34px,5vw+1rem,64px)] font-500 text-black font-heading leading-[1.3] xl:leading-[1.3] max-w-[1200px] [.split-word]:will-change-[transform,opacity]"
                  className="text-[clamp(34px,5vw+1rem,74px)] font-500 text-black font-heading leading-[1.3] xl:leading-[1.3] max-w-[1200px] [.split-word]:will-change-[transform,opacity]"
                  style={{ visibility: 'hidden' }}
                  ref={introTitleRef}
                >
                  Anthony Koch is a front-end developer helping companies and
                  startups ship pixel-perfect, responsive websites.
                  {/* Anthony Koch helps companies and startups ship pixel-perfect,{' '}
                  responsive */}
                  {/* I help companies and startups ship pixel-perfect, responsive */}
                </span>
                {/* <div className="mt-4 bg-[#c8c8c8] h-px w-full" /> */}
              </div>
            </div>
          </div>
          <div className="pb-18 xl:pb-16 " />
        </section>

        <section>
          {/* Desktop version */}
          <div className="xl:max-w-[max(1200px,80%)] px-[16px] 5xl:max-w-[1600px] mx-auto hidden lg:flex gap-x-4 relative">
            <div className="w-[36.533085%]">
              <h3 className="font-bold text-[14px] uppercase tracking-[1.4px] text-right mb-[10px]">
                <span className="setup-overflow">
                  <span className="setup-line-down selector-opal-camera-title">
                    Opal Camera
                  </span>
                </span>
              </h3>
              <img
                src="/final/girl.png"
                className="selector-opal-camera-image setup-fade-in"
              />
            </div>
            <div className="w-[42.870457%] self-end">
              <p
                // className="text-[clamp(18px,0.6vw,24px)] leading-[1.2] font-heading font-500 pb-[26px] max-w-[364px] selector-opal-camera-text"
                className="text-[18px] xl:text-[24px] leading-[30px] font-heading font-500 pb-[26px] max-w-[384px] selector-opal-camera-text"
              >
                {/* Opal Camera is a website made to market the capabilities of the C1 Camera, Tadpole Camera, and the accompanying Composer app. */}

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
              <img
                src="/final/opal-tadpole.png"
                className="selector-opal-camera-image setup-fade-in"
              />
            </div>
            <div className="w-[20.503262%]">
              <div className="h-full flex flex-col items-start justify-end">
                <a
                  href="https://opalcamera.com/"
                  className="flex items-center gap-x-5 w-full font-body uppercase text-[12px] text-black font-500 tracking-wide  setup-fade-in"
                  ref={opalViewSiteRef}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View site
                  <img src="/final/arrow-right.svg" className="w-[28px]" />
                </a>

                {/* <img
                  src="/final/person.png"
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
                  <img src="/final/arrow-right.svg" className="w-[28px]" />
                </a> */}
              </div>
            </div>
          </div>

          <div className="pb-[130px]" />
          <div className=" mx-auto max-w-[1600px]">
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

          {/*
          <div className="pt-2 relative">
            <div
              className=" absolute top-0 left-0 h-full w-full"
              ref={opalLogoRef}
            />
            <div className="aspect-1609/804 relative">
              <img
                src="/final/logo-opal-wordmark.svg"
                className="max-w-[1650px] mx-auto w-full absolute object-cover left-0 top-0 z-10"
              />

              <motion.img
                src="/final/logo-opal-wordmark-black.svg"
                className="max-w-[1650px] mx-auto w-full absolute object-cover left-0 top-0 z-20"
                style={{ clipPath: clipPathTransform }}
              />
            </div>
          </div>
           */}
        </section>

        <div className="pt-30" />

        <section>
          <div className="max-w-[1600px] mx-auto">
            <div className="grid grid-cols-12 gap-x-4 px-4">
              <p className="col-span-12 xl:col-span-10 md:col-start-1 2xl:col-start-2 pt-18   font-heading font-500 text-[46px] md:text-[58px] xl:text-[72px] leading-[1.1] xl:leading-none z-10 max-w-[800px]">
                The following is some of the work I did at Opal:
              </p>
            </div>
          </div>

          <div className="pb-20 xl:pb-30" />

          <div className="max-w-[1600px] mx-auto px-4">
            <div className="grid grid-cols-12 gap-x-4">
              <div className="max-xl:order-2 col-span-12 xl:col-span-3 xl:col-start-2">
                <div className="max-xl:max-w-[350px] lg:mx-0 w-full">
                  <p className="text-[14px] uppercase leading-[1.2] font-heading font-700 tracking-wide">
                    MOBILE NAVIGATION
                  </p>
                  <div className="pb-4" />
                  <video autoPlay muted loop className="object-cover size-full">
                    <source src="/final/mobile-nav.mov" type="video/mp4" />
                  </video>
                </div>
              </div>
              <div className="col-span-12 lg:col-span-7">
                {/* <div className="col-span-12 lg:col-span-9 lg:col-start-2"> */}
                <p className="text-[14px] uppercase leading-[1.2] font-heading font-700 tracking-wide">
                  DOCTOR OPAL FIRMWARE UPDATER
                </p>
                <div className="pb-4" />

                <img src="/final/exhibit-doctor.png" />
                <div className="pb-4" />

                <p className="font-body font-500 text-[16px] leading-[26px] -tracking-[0.4px] text-[#999999] max-w-[500px]">
                  Dr. Opal is a web based tool to help users update their
                  Tadpole firmware. I built out the UI and collaborated with
                  device engineers to interface it with the Tadpole.
                </p>
                <div className="pb-10" />
              </div>
            </div>
          </div>
        </section>

        <div className="pb-10 xl:pb-30" />

        <div className="grid xl:grid-cols-12 gap-x-4 gap-y-4 px-4 xl:px-0 ">
          <div className="col-span-6 xl:h-[825px]">
            <div className="pb-4  text-center">
              <p className="text-[14px] uppercase leading-[1.2] font-heading font-700 tracking-wide">
                Tadpole Shop Page
              </p>
            </div>
            <img
              className="size-full xl:object-cover object-right"
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
              className="size-full xl:object-cover object-left"
              src={ImageExhibitDownloadsPage.src}
            />
          </div>
        </div>

        {/* <div className="pb-4" /> */}

        <div className="pt-30" />

        <div
          className="relative h-[1400px] lg:h-[2400px] bg-[#EAEAEA] pb-4"
          // className="relative h-[1400px] lg:h-[170vh] bg-[#EAEAEA] pb-4"
          ref={opalcameraHomeImageScrollable}
        >
          {/* <img
              src="/final/opal-macbook.png"
              className="w-full max-w-[1000px] mx-auto -mt-40 relative z-10"
            /> */}
          <div className="sticky top-[10vh] left-0">
            <div className="relative z-10 ">
              <div className="max-w-[760px] mx-auto px-4 pt-10 top-4 relative">
                <p className="text-[14px] uppercase text-center leading-[1.2] font-heading font-700 tracking-wide">
                  Opal Camera Landing Page
                </p>
                <div className="max-xl:pb-4" />
                {/* <p className="text-[36px] leading-[1.2] font-heading font-500 -tracking-wide">
                    Opal Camera had contacted me to help develop the first
                    iteration of their landing page.
                  </p> */}
              </div>
              <img
                src="/final/empty-macbook.png"
                className="w-full max-w-[1300px] mx-auto absolute z-20 left-1/2 -translate-x-1/2"
              />
              <div className="max-w-[1300px] w-full mx-auto">
                <div className="aspect-1000/570">
                  <div className="overflow-hidden max-w-[71.5%]   aspect-640/400 relative left-[14%] top-[10%] z-40 ">
                    <motion.img
                      src="/final/opalcamera-home-full.png"
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
            </div>
            {/* <div className="h-[50%] w-full absolute left-0 top-0 bg-[#EAEAEA]" /> */}
          </div>
        </div>

        <div className="bg-white">
          <div className="max-w-[1600px] mx-auto">
            <div className="grid grid-cols-12 gap-x-4 px-4">
              <p className="col-span-12 xl:col-span-10 md:col-start-1 2xl:col-start-2 pt-18 xl:pt-36 pb-20 xl:pb-40 font-heading font-500 text-[46px] md:text-[58px] xl:text-[72px] leading-[1.1] xl:leading-none z-10">
                What started as a landing page grew into architecting an entire
                e-commerce experience.
                {/* Working at Opal Camera was a huge learning experience. */}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white ">
          <div className="max-w-[1600px] mx-auto">
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
                    development, ranging from building out administrative tools that
                    manage email signups to custom email development and Shopify management.
                  </p>
                </div>
              }
            />

            <div className="pb-8" />

            <Grid
              left={
                <h2 className="copy-heading-2 pb-6 max-w-[288px] xl:ml-auto">
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

            <div className="pb-8" />

            <div className="grid grid-cols-12 gap-x-4 px-4 pt-[200px] ">
              <div className="col-span-4 col-start-2">
                <p className="font-bold text-[14px] uppercase tracking-[1.4px] text-right mb-[15px]">
                  Modern Fertility
                </p>
                <img src="/final/mf-first.svg" />
              </div>
              <div className="col-span-4">
                <div className="h-full flex flex-col justify-end">
                  <p className="xl:text-[24px] leading-[30px] font-heading font-500 pb-[26px] max-w-[380px]">
                    A website dedicated to supporting and informing women about
                    their fertility options.
                  </p>
                  <img src="/final/mf-homepage.png" />
                </div>
              </div>
              <div className="col-span-2">
                <div className="h-full flex flex-col justify-end">
                  <img src="/final/mf-recommended.png" />
                </div>
              </div>
            </div>

            {/* <p className="col-span-10 lg:col-start-2 pt-36 pb-20 font-heading font-500 text-[40px] xl:text-[72px] leading-none z-10 relative"> */}
            {/* <div className="grid grid-cols-12 gap-x-4 px-4">
              <p className="col-span-10 lg:col-start-2 pt-20 pb-60 font-heading font-500 text-[40px] xl:text-[72px] leading-[1] z-10 relative max-w-[1200px]">
                A marketing site featuring a user dashboard allowing women to
                view their fertility results.
              </p>
            </div> */}
          </div>

          <div className="pb-[160px]" />

          <div className=" pb-[180px] mx-auto max-w-[1600px]">
            <div className="grid grid-cols-12 gap-x-4 px-4">
              <div className="col-span-12 lg:col-span-6 xl:col-span-4 xl:col-start-2 2xl:col-start-2">
                <h2 className="copy-heading-2-sm lg:copy-heading-2 max-w-[412px] pb-4">
                  What is Modern Fertility?
                </h2>
              </div>

              <div className="xl:col-start-6 2xl:col-start-6 md:col-span-8 col-span-12 lg:col-span-6 xl:col-span-6 2xl:col-span-5">
                <p className="copy-body-4-sm lg:copy-body-4 text-[#888787] max-w-[654px]">
                  Modern Fertility is a women's health brand offering at-home
                  reproductive testing, including hormone tests that assess key
                  fertility markers like ovarian reserve and egg count. Founded
                  in 2017, it makes fertility information more accessible and
                  affordable by enabling convenient home testing at a lower cost
                  than traditional clinics.
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="grid grid-cols-12 gap-x-4 px-4 ">
              <p className="col-span-12 xl:col-span-10 xl:col-start-2 font-heading font-500 text-[58px] xl:text-[72px] leading-[1] z-10 relative max-w-[1200px]">
                I developed nearly the entire frontend for both the marketing
                website and the dashboard.
                {/* My role at Modern Fertility was in developing nearly the entire
                front-end of both the marketing site and the dashboard. */}
              </p>
            </div>
          </div>

          {/* <div className="pb-50" /> */}
          <div className="pb-40" />

          <div className="flex gap-x-4 px-4 max-w-[1400px] mx-auto">
            <div>
              <div className="lg:sticky top-[100px]">
                <div className="flex justify-end pb-10 pt-4">
                  <p className="font-heading font-500 text-[18px] xl:text-[22px] leading-[1.2] z-10 relative max-w-[320px] xl:max-w-[400px]">
                    The dashboard allowed women to track shipments, view their
                    fertility results, and manage their user account.
                    {/* A marketing site featuring a user dashboard allowing women
                    to view their fertility results. */}
                  </p>
                </div>

                <img src="/final/exhibit-mf-plan.png" />
              </div>
            </div>
            <div>
              <img src="/final/exhibit-mf-dash-home.png" />
            </div>
          </div>

          <div className="pt-40" />

          <section>
            {/* <div className="bg-[#99B3F1] h-[360px] flex flex-col items-center justify-end relative">
              <div>
                <img
                  src={ImageMScribble.src}
                  className="absolute top-0 right-0 w-2/3"
                />

                <img
                  src="/final/mf-logo.svg"
                  className="max-w-[250px] w-full mx-auto"
                />
              </div>
            </div>

            <div className="relative bg-[#99B3F1]">
              <img
                src={ImageMFMacbook.src}
                className="w-full max-w-[1000px] mx-auto  relative z-10 "
              />
              <div className="h-[52%] w-full absolute left-0 top-1/2 bg-white" />
            </div>

            <div className="pt-[120px]" /> */}

            <Grid
              left={
                <div className="lg:col-span-6 xl:col-span-4 xl:col-start-1 2xl:col-start-1">
                  <h2 className="copy-heading-2-sm lg:copy-heading-2 pb-6 max-w-[300px] xl:ml-auto lg:text-right">
                    The early days of Modern Fertility
                  </h2>
                </div>
              }
              right={
                <div className="gap-y-6 flex flex-col copy-body-4-sm lg:copy-body-4 text-[#888787]">
                  <p>
                    Modern Fertility approached me to assist them in developing
                    their website. At the time, I was the sole front-end
                    developer, working alongside Tom Chokel to help Carly and
                    Afton give women the tools to better understand
                    their fertility.
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
                <div className="*:pb-6 copy-body-4-sm lg:copy-body-4 text-[#888787]">
                  <p>
                    I worked closely with designers to build out the first
                    iteration of Modern Fertility’s website using just simple
                    HTML and CSS. Over time, the tech stack has evolved from the
                    basics to React and styled-components running inside of a
                    Django application.
                  </p>

                  <div className="pb-4" />

                  {/* <img src="/final/exhibit-mf-homepage.png" className="w-full max-w-[300px]" /> */}
                </div>
              }
            />
          </section>

          <section>
            {/* <div className="bg-[#99B3F1] h-[360px] flex flex-col items-center justify-end relative">
              <div>
                <img
                  src={ImageMScribble.src}
                  className="absolute top-0 right-0 w-2/3"
                />

                <img
                  src="/final/mf-logo.svg"
                  className="max-w-[250px] w-full mx-auto"
                />
              </div>
            </div>

            <div className="relative bg-[#99B3F1]">
              <img
                src={ImageMFMacbook.src}
                className="w-full max-w-[1000px] mx-auto  relative z-10 "
              />
              <div className="h-[50%] w-full absolute left-0 top-1/2 bg-white" />
            </div> */}

            {/* <section>
              <div className="lg:grid grid-cols-12 pb-8 gap-x-4 pt-[100px] px-4">
                <div className="lg:col-span-6 xl:col-span-4 xl:col-start-1 2xl:col-start-2">
                  <h2 className="copy-heading-2 pb-6 max-w-[421px] xl:ml-auto lg:text-right">
                    A responsive website, built from the ground up.
                  </h2>
                </div>
                <div className="lg:col-start-6 xl:col-start-7 2xl:col-start-7 lg:col-span-6 xl:col-span-6 2xl:col-span-5 *:pb-6 copy-body-4 text-[#888787] ">
                  <p>
                    I worked closely with designers to build out the first
                    iteration of Modern Fertility’s website using just simple
                    HTML and CSS. Over time, the tech stack has evolved from the
                    basics to React and styled-components running inside of a
                    Django application.
                  </p>
                </div>
              </div>
            </section> */}
          </section>
        </div>

        <section>
          <div className="bg-white pb-16 xl:pb-32 pt-[200px]">
            <div className="grid grid-cols-12 gap-x-4 px-4">
              <span className="lg:col-start-2 col-span-12 lg:col-span-10">
                <div id="contact"></div>
                <p>
                  <a href="mailto:hello@anthonykoch.com" className="text-black">
                    <span className="block  font-500 2xl:text-left text-2xl md:text-4xl lg:text-5xl xl:text-7xl 2xl:text-8xl xl:py-10">
                      <span className="text-lg xl:text-[22px] font-400 mb-5 block">
                        Let’s collaborate, or just chat.
                      </span>
                      <span className="font-500 -tracking-wide font-heading">
                        hello@anthonykoch.com
                      </span>
                    </span>
                  </a>
                </p>
              </span>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default Home
