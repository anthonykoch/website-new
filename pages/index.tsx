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
} from 'motion/react'

import { useRef } from 'react'

const Home: NextPage = () => {
  const opalLogoRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: opalLogoRef,
    offset: ['start end', 'end start'],
  })

  const clipPath1 = useTransform(scrollYProgress, [0, 1], [100, 0])
  const clipPathTransform = useMotionTemplate`inset(0% 0px ${clipPath1}% 0px)`

  // useMotionValueEvent(clipPathTransform, 'change', (t) => {
  //   console.log(t)
  // })

  return (
    <div>
      {/* <SiteHeader isAbsolute />

      <SiteHeaderPlaceholder className="relative">
        <SiteHeaderBackground>
          <Hero />
        </SiteHeaderBackground>
      </SiteHeaderPlaceholder> */}

      <div className="absolute top-0 left-0 w-full">
        <div className="max-w-[1160px] mx-auto">
          <SiteNavigation />
        </div>
      </div>

      {/* https://dribbble.com/shots/16146436-Modern-Fertility-marketing-site */}

      <div className="bg-[#EAEAEA]">
        <section>
          <div className="max-w-[1120px] mx-auto">
            {/* I help companies and startups ship pixel-perfect, responsive websites. */}
            {/* <p className="text-[76px] font-500 text-black font-heading leading-none px-gutter">
              I’m a frontend developer helping brands build their online
              presence.
            </p> */}
            <div className="pt-[100px] xl:pt-[200px]" />
            <p className="text-[40px] xl:text-[68px] font-500 text-black font-heading  px-[16px] leading-[1.3] xl:leading-none max-w-[1000px]">
              I help companies and startups ship <span>pixel-</span>
              <span>perfect</span>, responsive websites.
              {/* I help companies and startups ship pixel-perfect, responsive websites. */}
            </p>
            <div className="pb-[80px] xl:pb-[80px] " />
          </div>
        </section>

        <section>
          {/* Desktop version */}
          <div className="xl:max-w-[max(1200px,80%)] px-[16px] 5xl:max-w-[1600px] mx-auto hidden xl:flex gap-x-4   relative">
            <div className="w-[36.533085%]">
              <img src="/final/girl.png" />
            </div>
            <div className="w-[42.870457%] self-end">
              <p className="xl:text-[24px] leading-[30px] font-heading font-500 pb-[26px] max-w-[364px]">
                A slick e-commerce site created in conjuction with the ingamana
                team and Aristide Benoist
              </p>
              <img src="/final/opal-tadpole.png" />
            </div>
            <div className="w-[20.503262%]">
              <div className="h-full flex flex-col items-start justify-between">
                <img src="/final/person.png" />
                <a
                  href="https://opalcamera.com/"
                  className="flex justify-end items-center gap-x-5 w-full font-body uppercase text-[12px] text-black font-500 tracking-wide"
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
                    A responsive website, built from the ground up.{' '}
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
