import { Footer } from '@/features/site/footer/Footer'
import type { GetStaticProps, NextPage } from 'next'
import superjson from 'superjson'

import { Billboard, BillboardGrid } from '@/components/Billboard'
import { OpalIntroSection } from '@/components/OpalIntroSection'
import { TripleChevron } from '@/features/embellishments/TripleChevron'

import { animate, motion, useScroll, useTransform } from 'motion/react'

import { easeOutExpo } from '@/utils/animation'
import { FC, RefObject, useEffect, useRef } from 'react'

import { ExhibitPages } from '@/components/ExhibitPages'
import { Grid } from '@/components/Grid'
import { LaptopScroller } from '@/components/LaptopScroller'
import { ModernFertilityAbout } from '@/components/ModernFertilityAbout'
import { ModernFertilityBrand } from '@/components/ModernFertilityBrand'
import { ModernFertilityHero } from '@/components/ModernFertilityHero'
import { ModernFertilityShowcase } from '@/components/ModernFertilityShowcase'
import { Post } from '@/components/PostList'
import { Description4x8Grid } from '@/features/grid/Description4x8Grid'
import { getAllPostMeta } from '@/utils/post'
import { OpalFirst } from '@/components/OpalFirst'
import { OpalShowcase } from '@/components/OpalShowcase'
import { Hero } from '@/components/Hero'
import { ModernFertilityTriplePhone } from '@/components/ModernFertilityTriplePhone'
import { ModernFertilityTriplePhonev2 } from '@/components/ModernFertilityTriplePhonev2'

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
    offset: ['-30vw start', '0px start'],
  })

  const opacity = useTransform(coverScroll.scrollYProgress, [0, 1], [0, 1])

  useEffect(() => {}, [])

  return (
    <div>
      {/* <div className=" px-2 pt-3 fixed z-1000 bottom-10 rigzt-10 ">
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
      </div> */}
      {/* <div className="bg-black opacity-10 w-full h-[60px] absolute top-0 left-0 z-100 " /> */}
      {/* <div className="bg-white opacity-10 w-full h-[60px] absolute top-0 left-0 z-100 " /> */}
      {/* <div className="bg-linear-to-b from-black/70 to-transparent w-full h-[60px] absolute top-0 left-0 z-100 " /> */}

      <section>
        <Hero />
      </section>

      <div className="w-full relative z-500">
        <div className="bg-[#EAEAEA]">
          <section id="work">
            <div className="bg-black text-white" ref={firstBlockRef}>
              <div className="max-w-site mx-auto">
                <Billboard>
                  <p>
                    <span className="block setup-fade-in" ref={lookRef}>
                      Brand: Opal Camera
                      {/* Here's companies I've worked with */}
                      {/* Take a look at my work below.{' '} */}
                    </span>
                    <span className="setup-fade-in" ref={arrowsRef}>
                      <TripleChevron />
                    </span>
                  </p>
                </Billboard>
              </div>
            </div>
          </section>

          <section className="relative">
            <OpalIntroSection />
          </section>

          <section className="relative z-40">
            <OpalFirst />
          </section>

          {/* <div class="absolute -z-10 top-0 left-0 h-full inset-0 w-full bg-[radial-gradient(rgba(0,0,0,0.13)_1px,transparent_1px)] bg-size-[16px_16px]"></div> */}
          <section>
            <div className="relative"></div>
            <div className="relative z-50">
              <OpalShowcase />
              <LaptopScroller />
            </div>
          </section>
        </div>

        <div className="bg-white z-60 relative">
          <div ref={cover} />
          <motion.div
            style={{
              opacity,
            }}
            className="bg-black absolute top-[-100vh] left-0 h-screen w-full z-10 pointer-events-none"
          />
          <div className="text-black">
            <div className="max-w-site mx-auto">
              <Billboard>
                <p>
                  What started as a landing page grew into architecting an
                  entire <span className="whitespace-nowrap">e-commerce</span>{' '}
                  experience.
                </p>
              </Billboard>
            </div>
          </div>

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
                      At the start of my time at Opal, I was purely creating the
                      front-end. I’ve since worked in many different aspects of
                      development, ranging from building out administrative
                      tools that manage email signups to custom email
                      development and Shopify management.
                    </p>

                    <p>
                      The Opal Camera website is a simple <span>Shopify</span>{' '}
                      app utilizing the Storefront API through{' '}
                      <span>graphQL</span> running inside an{' '}
                      <span>AdonisJS</span> application. In the beginning
                      stages, we were using <span>Docker</span> deployed through
                      Digital Ocean but have since transferred the site to a
                      much simpler stack of <span>NextJS</span> using Vercel.
                      The frontend is written using tools like{' '}
                      <span>Tailwind</span>, <span>motion.dev</span> and{' '}
                      <span>React</span>.
                    </p>
                  </div>
                }
              />
              <div className="pb-8 xl:pb-20" />

              <Grid
                left={
                  <h2 className="copy-heading-2-sm lg:copy-heading-2 pb-6 max-w-[288px] xl:text-right xl:ml-auto">
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

          <section>
            <div className="bg-white">
              <ModernFertilityBrand />

              <ModernFertilityHero />

              <div className="pb-30 lg:pb-50" />

              <section>
                <ModernFertilityTriplePhone />
                <div className="pb-20 lg:pb-50" />
                {/* <div className="pb-30 lg:pb-60" /> */}
              </section>

              <section className="z-10 relative">
                <div className="mx-auto max-w-site">
                  <Description4x8Grid>
                    <h2 className="copy-heading-2-sm lg:copy-heading-2 max-w-[412px] pb-4">
                      What is Modern Fertility?
                    </h2>
                    <p className="copy-body-4-sm lg:copy-body-4 text-[#888787] max-w-[654px]">
                      Modern Fertility is a women's health brand offering
                      at-home reproductive testing, including hormone tests that
                      assess key fertility markers like ovarian reserve and egg
                      count. Founded in 2017, it makes fertility information
                      more accessible and affordable by enabling convenient home
                      testing at a lower cost than traditional clinics.
                    </p>
                  </Description4x8Grid>
                </div>
              </section>

              <div className="pb-20 lg:pb-40" />

              <section>
                <ModernFertilityShowcase />
              </section>

              <section>
                <ModernFertilityAbout />
              </section>
            </div>
          </section>

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

        <div className="bg-white z-10 relative">
          {/* <div className="pb-40" /> */}
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
                  {/* <div className="inline-flex flex-col items-center justify-center"> */}
                  <span className="font-heading font-500 text-[58px] xl:text-[72px] leading-[1] z-10 relative size-30 bg-black text-white flex justify-center items-center logo-blink-rect">
                    <span className="block logo-blink">Fin</span>
                  </span>
                  {/* <div className='pb-20' />
                    <img src="/actual/arrow-down.svg" className="h-[70px]" /> */}
                  {/* </div> */}
                </p>
              </div>
            </div>
            <div className="pb-60" />
            {/* <div className="pb-40" /> */}
          </section>

          <Footer />
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
