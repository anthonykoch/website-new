import { Footer } from '@/components/app/footer/Footer'
import { Container } from '@/components/container'
import type { NextPage } from 'next'
import ImageExhibitDownloadsPage from '@/public/final/exhibit-downloads-page.png'
import ImageExhibitTadpoleShopPage from '@/public/final/exhibit-tadpole-shop.png'
import ImageMFMacbook from '@/public/final/mf-macbook.png'
import ImageMScribble from '@/public/final/m-scribble.svg'
// import ImageExhibitDoctorPage from '@/public/final/exhibit-doctor.png'
// import ImageExhibitMediaPage from '@/public/final/exhibit-media.png'

console.log(ImageMScribble)

import { SiteNavigation } from '@/features/navigation/SiteNavigation'
import {
  useMotionTemplate,
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
  animate,
  stagger,
} from 'motion/react'

import { useEffect, useRef } from 'react'
import { easeOutExpo, fixFontSpacing, staggeredEase } from '@/utils/animation'

import { splitText } from 'motion-plus'

const Home: NextPage = () => {
  const opalLogoRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: opalLogoRef,
    offset: ['start end', 'end start'],
  })

  const clipPath1 = useTransform(scrollYProgress, [0, 1], [100, 0])
  const clipPathTransform = useMotionTemplate`inset(0% 0px ${clipPath1}% 0px)`

  const introTitleRef = useRef<HTMLSpanElement>(null)
  const introRef = useRef<HTMLDivElement>(null)
  const opalCameraDescriptionRef = useRef<HTMLDivElement>(null)
  const opalViewSiteRef = useRef<HTMLDivElement>(null)
  const timeout = useRef<any>(null)

  useEffect(() => {
    if (!introTitleRef.current || !opalCameraDescriptionRef.current) return

    const { lines } = splitText(introTitleRef.current, {
      lineClass: 'split-line setup-overflow',
      wordClass: 'split-word setup-line-down',
    })

    fixFontSpacing(lines)

    const opalCameraSplitText = splitText(opalCameraDescriptionRef.current, {
      lineClass: 'split-line setup-overflow',
      wordClass: 'split-word setup-line-down',
    })

    timeout.current = setTimeout(() => {
      if (introTitleRef.current) {
        introTitleRef.current.style.visibility = 'visible'
      }

      if (opalCameraDescriptionRef.current) {
        opalCameraDescriptionRef.current.style.visibility = 'visible'
      }

      let delay = 1.1
      // const imageStaggerDelay = 0.16

      // animate(
      //   '.selector-opal-camera-image',
      //   { y: [20, 0], opacity: [0, 1] },
      //   {
      //     delay: stagger(imageStaggerDelay, { startDelay: delay }),
      //     // duration: 1,
      //     duration: 1.8,
      //     ease: easeOutExpo,
      //     // ease: [0.33, 1, 0.68, 1],
      //     // y: {
      //     //   ease: easeOutExpo,
      //     //   duration: 1.5,
      //     // },
      //     // ease: easeOutExpo,
      //     // opacity: { delay: 0.6 },
      //     // opacity: { delay: 0.3, duration: 1 }, // opacity starts 0.3s after y
      //   },
      // )

      const imageStaggerDelay = 0.8

      animate(
        '.selector-opal-camera-image',
        { opacity: [0, 1] },
        {
          delay: stagger(imageStaggerDelay, { startDelay: delay }),
          duration: 1,
          // duration: 1.8,
          // ease: easeOutExpo,
          ease: [0.33, 1, 0.68, 1],
          // y: {
          //   ease: easeOutExpo,
          //   duration: 1.5,
          // },
          // ease: easeOutExpo,
          // opacity: { delay: 0.6 },
          // opacity: { delay: 0.3, duration: 1 }, // opacity starts 0.3s after y
        },
      )

      delay += imageStaggerDelay * 3

      animate(
        '.selector-opal-camera-title',
        { y: ['110%', '0%'] },
        {
          delay: delay,
          // delay: 1.9,
          duration: 1.9,
          ease: easeOutExpo,
          // opacity: { delay: 0.3, duration: 1 }, // opacity starts 0.3s after y
        },
      )

      // animate(
      //   '.selector-opal-camera-text',
      //   { y: ['110%', '0%'] },
      //   {
      //     delay: (delay += 0.06),
      //     duration: 1.9,
      //     ease: easeOutExpo,
      //     // opacity: { delay: 0.3, duration: 1 }, // opacity starts 0.3s after y
      //   },
      // )

      Array.from(opalCameraSplitText.lines).forEach((line, i) => {
        animate(
          line.querySelectorAll('.split-word'),
          // { opacity: [0, 1] },
          { y: ['110%', '0%'], opacity: [0, 1] },
          {
            delay: (delay += 0.07) + 0.07 * i,
            duration: 1.9,
            ease: easeOutExpo,
            opacity: { delay: 0.03 * i + 0.1, duration: 1 }, // opacity starts 0.3s after y
          },
        )
      })

      if (opalViewSiteRef.current) {
        animate(
          opalViewSiteRef.current,
          { opacity: [0, 1], x: [-18, 0] },
          {
            delay: (delay += 0.2),
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

      Array.from(lines).forEach((line, i) => {
        animate(
          line.querySelectorAll('.split-word'),
          // { opacity: [0, 1] },
          { y: ['110%', '0%'] },
          {
            delay: delay + 0.07 * i,
            duration: 1.9,
            // duration: 1.9,
            ease: easeOutExpo,
            // opacity: { delay: 0.07 * i + 0.3, duration: 1 }, // opacity starts 0.3s after y
          },
        )
      })
    }, 400)

    return () => {
      clearTimeout(timeout.current)
    }
  }, [])

  return (
    <div>
      <div className="absolute top-0 left-0 w-full">
        <div className="max-w-[1600px] mx-auto grid grid-cols-12">
          <div className="col-span-10 col-start-2">
            <SiteNavigation />
          </div>
        </div>
      </div>

      <div className="bg-[#EAEAEA]">
        <section>
          <div className="pt-[40px] xl:pt-[100px]" />
          {/* <div className="pt-[80px] xl:pt-[180px]" /> */}
          <div
            className="max-w-[1600px] mx-auto grid grid-cols-12 overflow-hidden"
            style={{ height: 0 }}
            ref={introRef}
          >
            <div className="col-span-12 col-start-2">
          <div className="pt-[40px] xl:pt-[50px]" />
              <p
                className="text-[40px] xl:text-[68px] font-500 text-black font-heading px-[16px] leading-[1.3] xl:leading-[1.3] max-w-[1000px] [.split-word]:will-change-[transform,opacity]"
                style={{ visibility: 'hidden' }}
                ref={introTitleRef}
              >
                I help companies and startups ship pixel- perfect, responsive
                websites.
              </p>
            </div>
          </div>
          <div className="pb-18 xl:pb-18 " />
        </section>

        <section>
          {/* Desktop version */}
          <div className="xl:max-w-[max(1200px,80%)] px-[16px] 5xl:max-w-[1600px] mx-auto hidden xl:flex gap-x-4   relative">
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
                className="xl:text-[24px] leading-[30px] font-heading font-500 pb-[26px] max-w-[364px] selector-opal-camera-text"
                style={{ visibility: 'hidden' }}
                ref={opalCameraDescriptionRef}
              >
                A slick e-commerce site created in conjuction with the ingamana
                team and Aristide Benoist.
              </p>
              <img
                src="/final/opal-tadpole.png"
                className="selector-opal-camera-image setup-fade-in"
              />
            </div>
            <div className="w-[20.503262%]">
              <div className="h-full flex flex-col items-start justify-between">
                <img
                  src="/final/person.png"
                  className="selector-opal-camera-image setup-fade-in"
                />
                <a
                  href="https://opalcamera.com/"
                  className="flex justify-end items-center gap-x-5 w-full font-body uppercase text-[12px] text-black font-500 tracking-wide  setup-fade-in"
                  ref={opalViewSiteRef}
                >
                  View site
                  <img src="/final/arrow-right.svg" className="w-[28px]" />
                </a>
              </div>
            </div>
          </div>

          <div className="grid xl:grid-cols-12 gap-x-4 gap-y-4 px-4 mt-[130px] mx-auto max-w-[1600px]">
            <div className="col-span-4 xl:col-start-2">
              <h2 className="copy-heading-2 max-w-[412px]">
                Opal Camera is elevating video calls with premium webcams.
              </h2>
            </div>
            <div className="col-span-6">
              <p className="copy-body-4 text-[#888787] max-w-[654px]">
                Opal Camera creates premium webcams designed to help people look
                and sound great during video calls. Their main products are the
                Opal C1, a high-quality camera ideal for desktop or home office
                setups, and the Tadpole, a tiny portable camera made
                specifically for laptops. The website was created to create to
                market and display the capabilities of the C1, Tadpole, and the
                accompanying app.
              </p>
            </div>
          </div>

          <div className="grid xl:grid-cols-12 gap-x-4 gap-y-4 mt-[130px] px-4 xl:px-0">
            <div className="col-span-6 xl:h-[825px]">
              <img
                className="size-full xl:object-cover object-right"
                src={ImageExhibitTadpoleShopPage.src}
              />
            </div>
            <div className="col-span-6 xl:h-[825px]">
              <img
                className="size-full xl:object-cover object-left"
                src={ImageExhibitDownloadsPage.src}
              />
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

          <div className="pt-10 relative">
            <div
              className=" absolute top-0 left-0 h-full w-full"
              // className="bg-[tomato] absolute top-0 left-0 h-full w-full"
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
          <div className="relative">
            <img
              src="/final/opal-macbook.png"
              className="w-full max-w-[1000px] mx-auto -mt-40 relative z-10"
            />
            <div className="h-[50%] w-full absolute left-0 top-1/2 bg-white" />
          </div>
        </section>

        <div className="bg-white pt-[100px]">
          <section className="lg:grid grid-cols-12 pb-8 gap-x-4  px-4">
            <div className="lg:col-span-6 xl:col-span-4 xl:col-start-1 2xl:col-start-2">
              <h2 className="copy-heading-2 pb-6 max-w-[288px] xl:ml-auto">
                An evolving stack, an expanding role
              </h2>
            </div>
            <div className="lg:col-start-6 xl:col-start-7 2xl:col-start-7 lg:col-span-6 xl:col-span-6 2xl:col-span-5 *:pb-6 copy-body-4 text-[#888787] ">
              <p>
                The Opal Camera website is a simple Shopify app utilizing the
                Storefront API through graphQL running inside an AdonisJS
                application. In the beginning stages, we were using Docker
                deployed through Digital Ocean but have since transferred the
                site to a much simpler stack of NextJS using Vercel. The
                frontend is written using tools like Tailwind and React.
              </p>
              <p>
                At the start of my time at Opal, I was purely creating the
                front-end. I’ve since dabbled in many different aspects of the
                site, ranging from building out administrative tools to manage
                email signups, and even gotten my hands dirty with custom email
                development.
              </p>
            </div>
          </section>

          <section className="lg:grid grid-cols-12 pb-8 gap-x-4 px-4">
            <div className="lg:col-span-6 xl:col-span-4 xl:col-start-1 2xl:col-start-2">
              <h2 className="copy-heading-2 pb-6 max-w-[288px] xl:ml-auto">
                A growing startup
              </h2>
            </div>
            <div className="lg:col-start-6 xl:col-start-7 2xl:col-start-7 lg:col-span-6 xl:col-span-6 2xl:col-span-5 *:pb-6 copy-body-4 text-[#888787] ">
              <p>
                Opal Camera has had great success and continues to grow, having
                gotten several rounds of funding, even by the AI giant OpenAI.{' '}
              </p>
            </div>
          </section>

          <div className="grid grid-cols-12 gap-x-4 px-4 pb-4 pt-[300px]">
            <div className="col-span-4 ">
              <p className="font-bold text-[14px] uppercase tracking-[1.4px] text-right mb-[15px]">
                Modern Fertility
              </p>
              <img src="/final/mf-first.svg" />
            </div>
            <div className="col-span-5">
              <div className="h-full flex flex-col justify-end">
                <p className="xl:text-[24px] leading-[30px] font-heading font-500 pb-[26px] max-w-[380px]">
                  A website dedicated to supporting and informing women about
                  their fertility options.
                </p>
                <img src="/final/mf-homepage.png" />
              </div>
            </div>
            <div className="col-span-3">
              <div className="h-full flex flex-col justify-end">
                <img src="/final/mf-recommended.png" />
              </div>
            </div>
          </div>

          <section>
            {/*
            <div className="bg-[#99B3F1] h-[360px] flex flex-col items-center justify-end relative">
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
            </div> 
            */}

            <div className="pt-[120px]" />

            <div className="lg:grid grid-cols-12 pb-[100px] gap-x-4  px-4">
              <div className="lg:col-span-6 xl:col-span-4 xl:col-start-1 2xl:col-start-2">
                <h2 className="copy-heading-2 pb-6 max-w-[300px] xl:ml-auto lg:text-right">
                  The early days of Modern Fertility
                </h2>
              </div>
              <div className="lg:col-start-6 xl:col-start-7 2xl:col-start-7 lg:col-span-6 xl:col-span-6 2xl:col-span-5 *:pb-6 copy-body-4 text-[#888787] ">
                <p>
                  Modern Fertility approached me to assist them in developing
                  their website. At the time, I was the sole front-end
                  developer, working alongside Tom Chokel to help Carly and
                  Afton to help give women the tools to better understand their
                  fertility.
                </p>
                <p>
                  Shoot forward several years, and not only has the website
                  grown in scale, but Modern Fertility has grown as a wildly
                  successful company, being acquired by Ro for 225 million.
                </p>
              </div>
            </div>

            {/* <div className="lg:grid grid-cols-12 pb-8 gap-x-4  px-4">
              <div className="lg:col-span-6 xl:col-span-4 xl:col-start-1 2xl:col-start-2">
                <h2 className="copy-heading-2 pb-6 max-w-[421px] xl:ml-auto lg:text-right">
                  A responsive website, built from the ground up.{' '}
                </h2>
              </div>
              <div className="lg:col-start-6 xl:col-start-7 2xl:col-start-7 lg:col-span-6 xl:col-span-6 2xl:col-span-5 *:pb-6 copy-body-4 text-[#888787] ">
                <p>
                  I worked closely with designers to build out the first
                  iteration of Modern Fertility’s website using just simple HTML
                  and CSS. Over time, the tech stack has evolved from the basics
                  to React and styled-components running inside of a Django
                  application.
                </p>
              </div>
            </div> */}
          </section>

          <section>
            <div className="bg-[#99B3F1] h-[360px] flex flex-col items-center justify-end relative">
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
            </div>

            <section>
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
            </section>
          </section>
        </div>

        <section>
          <div className="bg-white pb-16 xl:pb-32 pt-[200px]">
            <Container>
              <div id="contact"></div>
              <p>
                <a href="mailto:hello@anthonykoch.com" className="text-black">
                  <span className="block text-center font-500 2xl:text-left text-2xl md:text-4xl lg:text-5xl xl:text-7xl 2xl:text-8xl xl:py-10">
                    <span className="text-lg xl:text-xl font-400 mb-5 block">
                      Email me at
                    </span>
                    hello@anthonykoch.com
                  </span>
                </a>
              </p>
            </Container>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default Home
