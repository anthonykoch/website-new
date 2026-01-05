import { Footer } from '@/components/app/footer/Footer'
import ImageExhibitDownloadsPage from '@/public/final-compressed/exhibit-downloads-page.png'
import ImageExhibitTadpoleShopPage from '@/public/final-compressed/exhibit-tadpole-shop.png'
import type { NextPage } from 'next'

import { Billboard } from '@/components/Billboard'
import { ModernFertilityIntroSection } from '@/components/ModernFertilityIntroSection'
import { OpalIntroSection } from '@/components/OpalIntroSection'
import { TripleChevron } from '@/features/embellishments/TripleChevron'

import { SiteNavigation } from '@/features/navigation/SiteNavigation'
import {
  animate,
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from 'motion/react'

import { easeOutExpo } from '@/utils/animation'
import { useEffect, useRef } from 'react'

import { Grid } from '@/components/Grid'
import { Post } from '@/components/PostList'

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

      delay += 0.3

      Promise.all(
        Array.from(
          introTitleRef.current!.querySelectorAll('.selector-line'),
        ).map((line, i) => {
          return animate(
            line,
            { y: ['110%', '0%'] },
            {
              delay: delay + 0.16 * i,
              duration: 1.1,
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

      // const imageStaggerDelay = 0.8

      // animate(
      //   '.selector-opal-camera-image',
      //   { opacity: [0, 1] },
      //   {
      //     delay: stagger(imageStaggerDelay, { startDelay: (delay += 1) }),
      //     duration: 1,
      //     ease: [0.33, 1, 0.68, 1],
      //   },
      // )

      // delay += imageStaggerDelay * 2

      // animate(
      //   '.selector-opal-camera-title',
      //   { y: ['110%', '0%'] },
      //   {
      //     delay: delay,
      //     duration: 1.9,
      //     ease: easeOutExpo,
      //   },
      // )

      // Array.from(
      //   document.querySelectorAll('.selector-opal-camera-text .selector-inner'),
      // ).forEach((line, i) => {
      //   animate(
      //     line,
      //     { y: ['110%', '0%'], opacity: [0, 1] },
      //     {
      //       delay: (delay += 0.07) + 0.07 * i,
      //       duration: 1.9,
      //       ease: easeOutExpo,
      //       opacity: { delay: 0.03 * i + 0.1, duration: 1 },
      //     },
      //   )
      // })

      // animate(
      //   '.selector-view-site',
      //   { opacity: [0, 1], x: [-18, 0] },
      //   {
      //     delay: (delay += 0.14),
      //     duration: 1.2,
      //     ease: easeOutExpo,
      //   },
      // )
    }, 400)

    return () => {
      clearTimeout(timeout.current)
    }
  }, [])

  const newJobRef = useRef<HTMLParagraphElement>(null)

  const lookRef = useRef<HTMLDivElement>(null)
  const arrowsRef = useRef<HTMLDivElement>(null)
  const firstBlockRef = useRef<HTMLDivElement>(null)

  const aboutOpalRef = useRef<HTMLDivElement>(null)

  const opalAboutSectionScroller = useScroll({
    target: aboutOpalRef,
    offset: ['-200px start', '400px start'],
    // offset: ['75vh end', '110vh end'],
  })

  const opalAboutSectionScale = useTransform(
    opalAboutSectionScroller.scrollYProgress,
    [0, 1],
    [1, 0.97],
  )

  const opalAboutSectionY = useTransform(
    opalAboutSectionScroller.scrollYProgress,
    [0, 1],
    [0, 300],
  )

  return (
    <div>
      {/* 
      <div>
        <motion.div
          initial={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' }}
          animate={{ clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)' }}
          // initial={{
          //   scaleY: 1,
          // }}
          // animate={{
          //   scaleY: 0,
          // }}
          transition={{ ease: easeOutExpo, duration: 1, delay: 3.1 }}
          // style={{
          //   scaleY: [100, 0],
          // }}
          className="fixed size-full z-2000  bg-black inline-block logo-blink-rect  left-1/2 top-1/2 -translate-1/2"
        >
          <svg
            className="w-30"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="logo-blink"
              d="M7.27914 11L4.88914 7.55L3.87914 8.62V11H2.82914V4H3.87914V7.22L6.94914 4H8.25914L5.59914 6.8L8.54914 11H7.27914ZM11.2894 11.08C9.77938 11.08 8.68937 9.99 8.68937 8.48C8.68937 6.97 9.77938 5.88 11.2894 5.88C12.7994 5.88 13.8794 6.97 13.8794 8.48C13.8794 9.99 12.7994 11.08 11.2894 11.08ZM11.2894 10.23C12.2394 10.23 12.8894 9.51 12.8894 8.48C12.8894 7.45 12.2394 6.73 11.2894 6.73C10.3294 6.73 9.67937 7.45 9.67937 8.48C9.67937 9.51 10.3294 10.23 11.2894 10.23Z"
              fill="white"
            />
          </svg>
        </motion.div>
       <svg className="w-20 invert-color" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_908_189)">
            <rect width="16" height="16" fill="black" />
            <path
              d="M7.27914 11L4.88914 7.55L3.87914 8.62V11H2.82914V4H3.87914V7.22L6.94914 4H8.25914L5.59914 6.8L8.54914 11H7.27914ZM11.2894 11.08C9.77938 11.08 8.68937 9.99 8.68937 8.48C8.68937 6.97 9.77938 5.88 11.2894 5.88C12.7994 5.88 13.8794 6.97 13.8794 8.48C13.8794 9.99 12.7994 11.08 11.2894 11.08ZM11.2894 10.23C12.2394 10.23 12.8894 9.51 12.8894 8.48C12.8894 7.45 12.2394 6.73 11.2894 6.73C10.3294 6.73 9.67937 7.45 9.67937 8.48C9.67937 9.51 10.3294 10.23 11.2894 10.23Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_908_189">
              <rect width="16" height="16" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div> */}
      {/* Keep fixed? */}
      <div className="mix-blend-difference absolute top-0 left-0 w-full z-1000">
        <div className="max-w-site mx-auto">
          <SiteNavigation colorVariant="white" isBlendModeDifference />
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
          <div
            ref={introBlockRef}
            // style={{ clipPath: introBlockClipPath }}
            className="bg-black h-[57vh] w-full z-10 absolute origin-bottom"
          />
          <div className="h-[100vh]">
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

            <div className="text-black fixed top-[17vh]">
              {/* Safari absolute breaks when using sticky. 1000% a rendering error. ugh... */}
              {/* <div className="text-black sticky top-[17vh]"> */}
              <div className="max-w-site mx-auto grid grid-cols-12 gap-x-4 px-4">
                <div className="col-span-12 xl:col-span-11 xl:col-start-2">
                  <span className="text-[clamp(24px,calc(55vw*(100/1900)),46px)] font-500  font-heading leading-[1.5] xl:leading-[1.3] max-w-[1200px] [.split-word]:will-change-[transform,opacity] relative">
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
        </section>
        <div className="absolute top-[57vh] z-500 bg-[#EAEAEA]">
          <div id="work">
            <div
              className="bg-black text-white relative z-1000 "
              ref={firstBlockRef}
            >
              <div className="max-w-site mx-auto">
                <Billboard>
                  <p>
                    <span className="block setup-fade-in" ref={lookRef}>
                      Take a look at my work below.{' '}
                    </span>
                    <span className="setup-fade-in" ref={arrowsRef}>
                      <TripleChevron />
                    </span>
                  </p>
                </Billboard>
              </div>
            </div>
          </div>

          <section>
            <OpalIntroSection />
          </section>

          <section className="bg-[#eaeaea] z-10 relative">
            <div className="bg-black text-white">
              <div className="max-w-site mx-auto">
                <Billboard>
                  <p>A selection of my work at Opal</p>
                </Billboard>
              </div>
            </div>

            <div className="max-w-site mx-auto px-4">
              <div className="pb-20 lg:pb-30" />
              <div className="grid grid-cols-12 gap-x-4">
                <div className="max-xl:order-2 col-span-12 xl:col-span-3 xl:col-start-2">
                  <div className="max-xl:max-w-[350px] lg:mx-0 w-full">
                    <p className="text-[14px] uppercase leading-[1.2] font-heading font-700 tracking-wide">
                      MOBILE NAVIGATION
                    </p>
                    <div className="pb-4" />
                    <video
                      autoPlay
                      muted
                      loop
                      className="object-cover size-full"
                    >
                      <source
                        src="/final-compressed/mobile-nav.mp4"
                        type="video/mp4"
                      />
                    </video>
                  </div>
                </div>
                <div className="col-span-12 xl:col-span-7">
                  <p className="text-[14px] uppercase leading-[1.2] font-heading font-700 tracking-wide">
                    FIRMWARE UPDATER
                  </p>
                  <div className="pb-4" />

                  <img
                    src="/final-compressed/exhibit-doctor.png"
                    loading="lazy"
                  />
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
                loading="lazy"
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
                loading="lazy"
              />
            </div>
          </div>

          <div className="pt-30" />

          <div
            className="relative h-[calc(1700px+100vh)] lg:h-[calc(2200px+100vh)] -mb-[100vh] bg-[#EAEAEA]"
            ref={opalcameraHomeImageScrollable}
          >
            <div className="sticky top-[30vh] lg:top-[10vh] left-0 ">
              <div className="">
                <motion.div
                  // style={{ scale: homeImageScale }}
                  className="relative z-10 will-change-transform"
                >
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

                  {/* <div className="max-w-[760px] mx-auto px-4 ">
                  <p className="text-[36px] leading-[1.2] font-heading font-500 -tracking-wide">
                    The project expanded into so much more.
                  </p>
                </div> */}
                </motion.div>
              </div>
              {/* <div className="h-[50%] w-full absolute left-0 top-0 bg-[#EAEAEA]" /> */}
            </div>
          </div>
          <div className="pb-4" />

          <div className="bg-black text-white z-10 relative">
            <div className="max-w-site mx-auto">
              <Billboard>
                <p>
                  What started as a landing page grew into architecting an
                  entire e-commerce experience
                </p>
              </Billboard>
            </div>
          </div>

          <div className="bg-white z-10 relative">
            <div className="pb-20 xl:pb-30" />
            <div className="max-w-site mx-auto">
              <motion.div
                style={{
                  scale: opalAboutSectionScale,
                  y: opalAboutSectionY,
                  z: 1,
                }}
                className="will-change-transform"
              >
                <Grid
                  left={
                    <h2 className="copy-heading-2-sm lg:copy-heading-2 pb-6 max-w-[310px] xl:ml-auto">
                      An expanding role in an evolving stack
                    </h2>
                  }
                  right={
                    <div className="flex flex-col gap-y-6 copy-body-4-sm lg:copy-body-4 text-[#888787]">
                      <p>
                        The Opal Camera website is a simple Shopify app
                        utilizing the Storefront API through graphQL running
                        inside an AdonisJS application. In the beginning stages,
                        we were using Docker deployed through Digital Ocean but
                        have since transferred the site to a much simpler stack
                        of NextJS using Vercel. The frontend is written using
                        tools like Tailwind, motion.dev and React.
                      </p>
                      <p>
                        At the start of my time at Opal, I was purely creating
                        the front-end. I’ve since worked in many different
                        aspects of development, ranging from building out
                        administrative tools that manage email signups to custom
                        email development and Shopify management.
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
                    <div className="*:pb-6 copy-body-4-sm lg:copy-body-4 text-[#888787] ">
                      <p>
                        Opal Camera has had great success and continues to grow,
                        having gotten several rounds of funding, even by the AI
                        giant OpenAI.
                      </p>
                    </div>
                  }
                />
              </motion.div>
              <div className="pb-10 lg:pb-30" />

              <div ref={aboutOpalRef} />
            </div>

            <div className="bg-black text-white z-10 relative">
              <div className="max-w-site mx-auto">
                <Billboard>
                  <p>
                    <span className="block">Up Next: Modern Fertility</span>
                    <TripleChevron />
                  </p>
                </Billboard>
              </div>
            </div>

            <section>
              <div className="bg-white">
                <ModernFertilityIntroSection />
              </div>
            </section>

            <div className="pb-20 lg:pb-40" />

            <section>
              <div>
                <div className="text-white bg-black z-10 relative">
                  <div className="max-w-site mx-auto">
                    <Billboard>
                      <p className="max-w-[1200px]">
                        I led frontend development for the marketing website and
                        user dashboard.
                      </p>
                    </Billboard>
                  </div>
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
                      Modern Fertility approached me to assist them in
                      developing their website. At the time, I was the sole
                      front-end developer, working alongside Tom Chokel to help
                      Carly and Afton give women the tools to better understand
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
                  <div className="*:pb-6 copy-body-4-sm lg:copy-body-4 text-[#888787] max-w-[654px]">
                    <p>
                      I worked closely with designers to build out the first
                      iteration of Modern Fertility’s website using just simple
                      HTML and CSS. Over time, the tech stack has evolved from
                      the basics to React and styled-components running inside
                      of a Django application.
                    </p>

                    <div className="pb-4" />
                  </div>
                }
              />
              <div className="pt-40" />
            </section>
          </div>
          <div className="bg-white">
            <section>
              <div className="max-w-site mx-auto">
                <div className="lg:grid grid-cols-12 gap-x-4 px-4 ">
                  <p className="text-center lg:text-left lg:col-span-4 lg:col-start-6 ">
                    <span className="font-heading font-500 text-[58px] xl:text-[72px] leading-[1] z-10 relative size-30 bg-black text-white flex justify-center items-center logo-blink-rect">
                      <span className="block logo-blink">Fin</span>
                    </span>
                  </p>
                </div>
              </div>
              <div className="pb-30" />
            </section>

            <Footer />
          </div>
        </div>
      </div>
    </div>
  )
}

// export const getStaticProps: GetStaticProps<any> = async () => {
//   const posts = await getAllPostMeta()

//   return {
//     props: {
//       // posts: superjson.serialize(posts).json as any,
//     },
//   }
// }

export default Home
