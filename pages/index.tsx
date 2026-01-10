import { Footer } from '@/features/site/footer/Footer'
import type { GetStaticProps, NextPage } from 'next'
import superjson from 'superjson'

import { Billboard, BillboardGrid } from '@/components/Billboard'
import { ModernFertilityIntroSection } from '@/components/ModernFertilityIntroSection'
import { OpalIntroSection } from '@/components/OpalIntroSection'
import { TripleChevron } from '@/features/embellishments/TripleChevron'

import {
  animate,
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from 'motion/react'

import { easeOutExpo } from '@/utils/animation'
import { FC, RefObject, useEffect, useRef } from 'react'

import { ExhibitPages } from '@/components/ExhibitPages'
import { Grid } from '@/components/Grid'
import { Post, PostList } from '@/components/PostList'
import { usePointerProgress } from '@/hooks/use-pointer-progress'
import { getAllPostMeta } from '@/utils/post'
import { LaptopScroller } from '@/components/LaptopScroller'

const Looking: FC<{ containerRef: RefObject<HTMLDivElement | null> }> = ({
  containerRef,
}) => (
  <div
    ref={containerRef}
    className="mt-2 setup-fade-in px-5 py-3 text-white text-[13px] lg:text-[15px] max-[380px]:flex inline-flex items-center relative"
  >
    <div className="size-full absolute bg-black z-10 top-0 left-0" />
    {/* <div className="absolute top-0 left-0 size-full translate-[20px]">
                          <motion.div
                            className="striped bg-primary-500 size-full"
                            style={{ y, x }}
                            transition={{ type: 'spring', bounce: 0 }}
                          />
                        </div> */}
    <p className="relative z-20 flex flex-nowrap items-center">
      {/* <span className="top-[0.03em] relative text-primary-500 text-[19px] inline-block align-middle mr-0.5 font-500 leading-[0.8]">
        {'>'}
      </span> */}
      <span className="hidden lg:block bg-primary-500 size-[4px] rounded-full leading-0 mr-1" />
      <span className="inline-block align-middle font-body text-[13px] font-500">
        Actively looking for new opportunities{' '}
        <span className="max-[380px]:block">- Jan 2026</span>
      </span>
    </p>
  </div>
)

const Home: NextPage = ({ posts }: { posts: Post[] }) => {
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

  const hash = typeof window === 'undefined' ? '' : window.location.hash

  useEffect(() => {
    timeout.current = setTimeout(() => {
      if (
        // !introTitleRef.current ||
        // !newJobRef.current ||
        !lookRef.current ||
        !arrowsRef.current
        // || !introBlockRef.current
      )
        return

      let delay = 0.4
      // let delay = 3.1

      // if (introTitleRef.current) {
      //   introTitleRef.current.style.visibility = 'visible'
      // }

      // animate(
      //   introBlockRef.current,
      //   {
      //     scaleY: [1, 0],
      //   },
      //   {
      //     duration: 2.2,
      //     ease: easeOutExpo,
      //     delay: delay,
      //   },
      // )

      // delay += 0.3

      // Promise.all(
      //   Array.from(
      //     introTitleRef.current!.querySelectorAll('.selector-line'),
      //   ).map((line, i) => {
      //     return animate(
      //       line,
      //       { y: ['110%', '0%'] },
      //       {
      //         delay: delay + 0.16 * i,
      //         duration: 1.1,
      //         ease: easeOutExpo,
      //       },
      //     )
      //   }),
      // )

      // animate(
      //   newJobRef.current,
      //   { opacity: [0, 1], y: [10, 0] },
      //   { duration: 1.5, delay: (delay += 0.7), ease: easeOutExpo },
      // )

      animate(
        lookRef.current,
        { opacity: [0, 1] },
        {
          duration: 1.5,
          delay: hash.length ? 0.5 : (delay += 0.5),
          ease: easeOutExpo,
        },
      )

      animate(
        arrowsRef.current,
        { opacity: [0, 1] },
        {
          duration: 1.2,
          delay: hash.length ? 0.5 + 0.06 : (delay += 0.07),
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

  // const testRef = useRef(null)

  // useEffect(() => {
  //   if (!testRef.current) return

  //   // splitText(testRef.current)
  // }, [])

  // const { x: mouseX, y: mouseY } = usePointerProgress()

  // const y = useTransform(mouseY, [0, 1], [-20, 20], {})
  // const x = useTransform(mouseX, [0, 1], [-20, 20], {})

  const cover = useRef<HTMLDivElement>(null)

  const coverScroll = useScroll({
    target: cover,
    offset: ['-40vw start', '0px start'],
  })

  const opacity = useTransform(coverScroll.scrollYProgress, [0, 1], [0, 1])

  return (
    <div>
      <div className=" px-2 pt-3 fixed z-1000 bottom-10 right-10 ">
        <div className="pb-4 font-heading font-600 text-[14px] text-black/70 text-center ">
          Jump to 
        </div>
        <div className="flex flex-col flex-wrap items-center justify-start gap-x-2 gap-y-2 pb-4">
          <div className="hover:shadow-button-2 rounded-[4px] bg-white hover:bg-primary-500 w-full  cursor-pointer h-[50px] flex items-center py-2 min-w-[90px] justify-center">
            <img
              src="/final/logo-opal-wordmark-b.svg"
              className="w-[calc(55px-20px)]"
            />
          </div>
          <div className="hover:shadow-button-2 rounded-[4px] bg-white hover:bg-primary-500 w-full  cursor-pointer h-[50px] flex items-center py-2 min-w-[90px] justify-center">
            <img src="/final/logo-mf.svg" className="w-[calc(70px-20px)]" />
          </div>
        </div>
      </div>
      <div>
        <section>
          <div
            ref={introBlockRef}
            className="bg-black h-[69vh] w-full z-10 absolute origin-bottom"
          />
          <div className="h-screen bg-[#e6ddc3] relative">
            {/* <BlogBackground> */}
            {/* <BlogImages /> */}
            {/* </BlogBackground> */}
            <div className="bg-linear-to-r from-white/70 to-transparent size-full absolute top-0 left-0 z-20"></div>
            {/* <div className="bg-linear-to-t from-black to-transparent w-full h-1/2 absolute bottom-[29vh] left-0" /> */}

            {/* <div
  class="absolute inset-0 h-full w-full bg-white bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]"
></div> */}

            <div className="absolute z-10 top-0 left-0 h-full w-full bg-neutral-200">
              <div className="absolute inset-0 bg-primary-500 bg-size-[20px_20px] opacity-20 blur-[100px]"></div>
            </div>
            {/* 
            <div className="p-20 bg-black z-20 relative">
              <img
                src="/final/exhibit-tadpole-shop.png"
                className="max-w-full w-full  object-contain top-0 left-0 z-20"
              />
            </div> */}

            {/* <div className="text-black fixed z-20 w-full top-[20vh]"> */}
            {/* #3f4450 */}
            {/* <div className="text-black  fixed z-20 w-full top-[20vh]"> */}
            <div className="text-black mix-blend-difference fixed z-20 w-full top-[20vh]">
              <div className="max-w-site mx-auto relative z-20">
                <div className="grid grid-cols-12 gap-x-4 px-4">
                  <div className="col-span-12 xl:col-span-10 xl:col-start-2 flex flex-col gap-x-4 items-start justify-between">
                    <div>
                      <p className="text-[80px] text-white  font-500 leading-none  font-heading">
                        {/* <p className="text-[80px] text-[#3f4450]  font-500 leading-none  font-heading"> */}
                        I help companies and startups ship pixel-perfect,
                        responsive websites.
                      </p>
                      <div className="pb-10" />
                      <button
                        type="button"
                        className="cursor-pointer shadow-button-2 shadow-black/40 bg-black py-3.5 px-8 inline-block hover:bg-primary-500 transition-colors duration-100 hover:text-black text-[#eee]"
                      >
                        <span className="font-600 text-[14px] uppercase font-display tracking-widest">
                          View my latest work
                        </span>
                      </button>
                      {/* <button
                        type="button"
                        className="cursor-pointer   shadow-button-2  shadow-black/40 bg-black py-3.5 px-8 inline-block hover:bg-primary-invert transition-colors duration-100 hover:text-white text-[#111]"
                      >
                        <span className="font-600 text-[14px] uppercase font-display tracking-widest">
                          View my latest work
                        </span>
                      </button> */}
                    </div>
                  </div>
                </div>
                {/* <img
                  src="/final/logo-opal-wordmark-b.svg"
                  className="w-[800px] max-w-full"
                /> */}
              </div>
            </div>
          </div>
        </section>
        {/* <div className="w-full relative top-[100vh] z-500"> */}
        {/* <div className="w-full top-[88vh] z-500"> */}
        {/* <div className="w-full top-[68vh] z-500"> */}
        <div className="absolute w-full top-[100vh] z-500">
          {/* <div className="absolute w-full top-[68vh] z-500"> */}
          <div className="bg-[#EAEAEA]">
            <div id="work">
              <div
                // className="bg-black text-white relative z-1000 "
                className="bg-black text-white "
                ref={firstBlockRef}
              >
                <div className="max-w-site mx-auto">
                  <Billboard>
                    <p>
                      <span className="block setup-fade-in" ref={lookRef}>
                        Here's companies I've worked with
                        {/* Take a look at my work below.{' '} */}
                      </span>
                      <span className="setup-fade-in" ref={arrowsRef}>
                        <TripleChevron />
                      </span>
                    </p>
                  </Billboard>
                </div>
              </div>
            </div>

            <div>
              <section className="relative">
                <OpalIntroSection />
              </section>

              <section className="bg-[#eaeaea] z-10 relative">
                {/* <div className="bg-black text-white">
                  <div className="max-w-site mx-auto">
                    <Billboard>
                      <p>A selection of my work at Opal</p>
                    </Billboard>
                  </div>
                </div> */}
                <div className="pb-20 lg:pb-40" />

                <BillboardGrid className="max-w-[860px] mx-auto px-4 ">
                  <p className="text-[100px] leading-[1] font-heading font-500 -tracking-wide">
                    My journey at Opal started <br />
                    with a simple landing page
                    {/* My journey started with <br />
                    Opal's first landing page */}
                    {/* I developed Opal's <br />
                    first landing page. */}
                  </p>
                  <div className="pb-10"></div>
                  <p className="text-black/60 text-[18px] font-body font-500 tracking-tight">
                    The page was a simple teaser, letting everyone know what's
                    coming.
                  </p>
                  <div className="pb-10 lg:pb-20" />
                  <img src="/final/test.png" />
                  {/* <div className="pb-20 lg:pb-40" /> */}
                </BillboardGrid>
              </section>
              {/* <div class="absolute -z-10 top-0 left-0 h-full inset-0 w-full bg-[radial-gradient(rgba(0,0,0,0.13)_1px,transparent_1px)] bg-size-[16px_16px]"></div> */}

              <div className="bg-[#eaeaea] z-10 relative">
                <div className="max-w-site mx-auto  z-10 relative">
                  {/* <div className="px-4"> */}
                  <Billboard textSize="lg">
                    <p>
                      I've since worked on <br />
                      many parts of Opal.
                    </p>
                  </Billboard>
                  {/* </div> */}

                  {/* <div class="absolute -z-10 top-0 left-0 h-full w-full bg-neutral-200"><div class="absolute inset-0 bg-primary-500 bg-[size:20px_20px] opacity-20 blur-[100px]"></div></div>  */}

                  <ExhibitPages />

                  <div className="pt-10 lg:pt-40" />

                  {/* <div className="pb-20 lg:pb-30" /> */}
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

                      <p className="font-body font-500 text-[16px] leading-[26px] -tracking-[0.4px] text-[#757575] max-w-[500px] pb-4">
                        Dr. Opal is a web based tool created to help users
                        update their Tadpole firmware. I built out the UI and
                        collaborated with device engineers to interface it with
                        the Tadpole.
                      </p>
                      <div className="pb-10" />
                    </div>
                  </div>
                </div>
                <div className="pb-20 xl:pb-40" />

                <LaptopScroller />
              </div>
            </div>
            {/* <div className="pb-4" /> */}
          </div>

          <div className="bg-white z-10 relative">
            <div ref={cover} />
            <motion.div
              style={{
                opacity,
              }}
              className="bg-black absolute top-[-100vh] left-0 h-screen w-full z-10 pointer-events-none"
            />
            <div className="text-black">
              {/* <div className="bg-black text-white z-10 relative"> */}
              <div className="max-w-site mx-auto">
                <Billboard>
                  <p>
                    {/* Turned into architecting an e-commerce experience */}
                    What started as a landing page grew into architecting an
                    entire <span className="whitespace-nowrap">
                      e-commerce
                    </span>{' '}
                    experience.
                  </p>
                </Billboard>
              </div>
            </div>
            {/* <div className="pb-30 xl:pb-40" /> */}
            {/* <div className="pb-20 xl:pb-30" /> */}
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
                    <h2 className="copy-heading-2-sm lg:copy-heading-2 pb-6 max-w-[240px] xl:ml-auto">
                      An expanding role in an evolving stack
                    </h2>
                  }
                  right={
                    <div className="flex flex-col gap-y-6 copy-body-4-sm lg:copy-body-4 text-[#888787] **:[span]:text-black/70 **:[span]:underline">
                      <p>
                        The Opal Camera website is a simple <span>Shopify</span>{' '}
                        app utilizing the Storefront API through{' '}
                        <span>graphQL</span> running inside an{' '}
                        <span>AdonisJS</span> application. In the beginning
                        stages, we were using <span>Docker</span> deployed
                        through Digital Ocean but have since transferred the
                        site to a much simpler stack of <span>NextJS</span>{' '}
                        using Vercel. The frontend is written using tools like{' '}
                        <span>Tailwind</span>, <span>motion.dev</span> and{' '}
                        <span>React</span>.
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
                <div className="pb-8 xl:pb-20" />

                <Grid
                  left={
                    <h2 className="copy-heading-2-sm lg:copy-heading-2 pb-6 max-w-[288px] text-right xl:ml-auto">
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
              <div className="pb-20 xl:pb-50" />
              {/* <div className="pb-10 lg:pb-30" /> */}

              <div ref={aboutOpalRef} />
            </div>

            <div className="bg-black text-white z-10 relative">
              <div className="max-w-site mx-auto">
                <Billboard>
                  <p>
                    <span className="block">Up Next: Modern Fertility</span>
                    <TripleChevron />
                  </p>

                  {/* <img src="/final/card-mf.png" className='ml-auto w-[300px]'/> */}
                  {/* <svg
                    className="w-auto "
                    viewBox="0 0 353 387"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M299.904 0C299.904 0 294.302 47.335 280.483 85.782C270.772 112.753 250.169 175.446 197.321 201.565C186.677 206.844 159.818 219.682 128.85 210.317C109.888 204.584 93.1499 192.247 81.1695 175.174C53.1585 133.049 52.5672 43.7934 52.5672 7.90052V0H0V386.24H50.4197V164.447C62.5372 184.502 78.1728 201.725 96.4198 215.119C112.839 227.897 131.45 236.909 151.135 241.613C167.277 245.442 183.903 246.191 200.278 243.826C230.689 238.811 258.807 223.189 280.452 199.284C288.939 190.09 296.37 179.798 302.58 168.635V386.581H353V0H299.904Z"
                      fill="white"
                    />
                  </svg> */}
                </Billboard>
              </div>
            </div>

            <section>
              <div className="bg-white">
                <ModernFertilityIntroSection />
              </div>
            </section>

            {/* <div className="pb-20 lg:pb-40" /> */}

            <section className="relative z-10">
              <div>
                <div className="z-10 relative">
                  <div className="max-w-site mx-auto">
                    <Billboard>
                      <p className="max-w-[1200px]">
                        I led front-end development for the marketing website
                        and user dashboard.
                      </p>
                    </Billboard>
                  </div>
                </div>
              </div>

              <div className="overflow-hidden">
                <div className="px-4 max-w-[1200px] mx-auto">
                  {/* <BillboardGrid> */}
                  <div className="flex-col 2xl:flex-row flex gap-x-4 gap-y-4">
                    <div className="flex flex-col gap-y-4">
                      <img
                        className="max-w-[800px] mx-auto 2xl:max-w-full w-full border border-black/10"
                        src="/final/exhibit-mf-dash-plan-plain.png"
                        // src="/final/exhibit-mf-dash.png"
                      />
                      <img
                        className="max-w-[800px] mx-auto 2xl:max-w-full w-full border border-black/10"
                        src="/final/exhibit-mf-dash-home-plain.png"
                        // src="/final/exhibit-mf-home-plain.png"
                      />
                    </div>

                    <div>
                      <img
                        className="max-w-[800px] mx-auto 2xl:max-w-full w-full border border-black/10"
                        src="/final/exhibit-mf-home-plain.png"
                        // className="mx-auto max-w-[700px]"
                      />
                    </div>
                  </div>
                </div>
                {/* </BillboardGrid> */}
              </div>

              <div className="pb-20 lg:pb-40" />
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
                  <h2 className="copy-heading-2-sm lg:copy-heading-2 pb-6 max-w-[310px] xl:ml-auto lg:text-right">
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
              <div className="pb-40" />
            </section>
            <BillboardGrid>
              <p className="text-[100px] leading-[1] font-heading font-500 -tracking-wide">
                Honorable mentions
                {/* I've also had the pleasure <br/>of working with */}
              </p>
            </BillboardGrid>
            <div className="pb-30"></div>
            <div className="max-w-site px-4">
              <div className="grid grid-cols-12 items-start gap-x-10 r-full">
                <div className="col-span-12 lg:col-span-4 lg:col-start-2">
                  <div className="">
                    <div className="flex items-center min-h-[90px]">
                      <img
                        src="/final/logo-thinkful.png"
                        className="w-[190px]"
                      />
                    </div>
                    <p className="text-black/60 text-[16px] font-body font-500 tracking-tight max-w-[390px]">
                      Mentored students 1-on-1 on all aspects of front-end and
                      backend development. Languages were taught in JavaScript
                      and Ruby.
                    </p>
                  </div>
                </div>
                <div className="col-span-12 lg:col-span-5">
                  <div className="">
                    <div className="flex items-center min-h-[90px]">
                      <img src="/final/logo-plaid.svg" className="w-[150px]" />
                    </div>
                    <p className="text-black/60 text-[16px] font-body font-500 tracking-tight max-w-[390px]">
                      Worked on the marketing site of plaid.com, increasing
                      performance, building pipeline tools, and making updates
                      to their documentation.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pb-10 lg:pb-20" />
            {/* <div className="pb-20 lg:pb-40" /> */}
          </div>
          {/* 
          <div className="bg-black text-white z-10 relative">
            <div className="max-w-site mx-auto">
              <Billboard>
                <p>
                  I've also worked with
                </p>
              </Billboard>
            </div>
          </div> */}

          <div className="bg-white">
            <div className="pb-40" />
            {/* 
            <img
              className="max-w-[1200px] mx-auto"
              src="/final/companies.png"
            />
            <div className="pb-40" />
            <div className="pb-40" /> */}

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
              <div className="pb-40" />
              <div className="pb-40" />
            </section>

            <Footer />
          </div>
        </div>
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps<any> = async () => {
  const posts = await getAllPostMeta()

  return {
    props: {
      posts: superjson.serialize(posts).json as any,
    },
  }
}

export default Home
