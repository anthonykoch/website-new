import * as React from 'react'
import type { NextPage } from 'next'
import { Footer } from '@/components/app/footer/Footer'
import { Container, OuterContainer } from '@/components/container'

import {
  SiteHeader,
  SiteHeaderBackground,
  SiteHeaderPlaceholder,
} from '@/components/app/Header'

import {
  F,
  ModernFertilityMacbookSection,
  ModernFertilityMobileSection,
  OpalMacbookSection,
  OpalMobileSection,
  PlaidSection,
  Ribbon,
  RibbonContainer,
  Services,
  ServicesItem,
} from '@/fragments/home'

import { SiteNavigation } from '@/features/navigation/SiteNavigation'

const Home: NextPage = () => {
  return (
    <div>
      {/* <SiteHeader isAbsolute />

      <SiteHeaderPlaceholder className="relative">
        <SiteHeaderBackground>
          <Hero />
        </SiteHeaderBackground>
      </SiteHeaderPlaceholder> */}
      <div className="absolute top-0 left-0 w-full">
        <SiteNavigation />
      </div>

      {/* https://dribbble.com/shots/16146436-Modern-Fertility-marketing-site */}

      <div className="bg-[#f0f0f0]">
 <section className="max-w-[1450px] mx-auto">
          <div className="max-w-[1120px] mx-auto pb-[200px] pt-[200px]">
            <p className="text-[76px] font-500 text-black font-heading leading-none">
              I’m a frontend developer helping brands build their online
              presence.
            </p>
          </div>
        </section> 

        <div className="max-w-[1240px] mx-auto spacer grid grid-cols-3 gap-x-4">
          <div
            data-one
            className="h-[600px] border-b border-gray-300/0 border-r"
          >
            {/* <img
              src="/opal-black.png"
              className="w-full h-full object-contain relative z-10"
            />
             */}

            {/* <div data-one className="h-[400px] border-gray-300/0 border-r"> */}
              <video
                autoPlay
                muted
                playsInline
                loop
                className="w-full h-full object-cover rounded-2xl"
              >
                <source src="/lens-front-blinking-light.mp4" type="video/mp4" />
              </video>
            {/* </div> */}
          </div>
          <div
            data-two
            className="h-[600px] border-b border-gray-300/0 border-r relative"
          >
            <div className="rounded-2xl  size-full absolute top-0 left-0"></div>
              <img
              src="/mf-hand-box.jpg"
              // src="/mf-page.png"
              className="w-full h-full object-cover relative z-10 rounded-2xl"
            />
            {/* 
            <img
              src="/prenatal_multivitamin_pdp.webp"
              className="w-full h-full object-contain relative z-10"
            />  */}
          </div>
       
        </div>
{/* 
        <section className="max-w-[1450px] mx-auto">
          <div className="max-w-[1120px] mx-auto pb-[200px] pt-[50px]">
            <p className="text-[76px] font-500 text-black font-heading leading-none">
              I’m a frontend developer helping brands build their online
              presence.
            </p>
          </div>
        </section> */}

        <section>
          <div id="portfolio"></div>
          <div className="max-w-[1120px] mx-auto pb-[200px] pt-[200px]">
            <div className="text-[42px] font-500 text-black font-heading leading-none">
              Where have I worked?
            </div>
          </div>

          <OuterContainer className="text-center xl:text-left"></OuterContainer>

          <section>
            <OpalMacbookSection />
          </section>

          <section>
            <OpalMobileSection />
          </section>

          <div className="border-t border-t-black/20"></div>
          <div className="border-t border-t-black/11"></div>

          <div>
            <section>
              <ModernFertilityMacbookSection />
            </section>

            <section>
              <ModernFertilityMobileSection />
            </section>
          </div>
        </section>

        <section>
          <PlaidSection />
        </section>
        <section>
          <div className="pb-16 xl:pb-32">
            {/* <OuterContainer>
              <h2 className="px-gutter">
                <F.Title className="pb-14 xl:pb-20 pt-10 xl:pt-20 text-center xl:text-left">
                  Hire me
                </F.Title>
              </h2>
            </OuterContainer> */}
            {/* 
            <Container>
              <div className=" max-w-md mx-auto xl:max-w-full px-gutter">
                <div>
                  <Services>
                    <ServicesItem
                      term={
                        <RibbonContainer>
                          Web Development <Ribbon />
                        </RibbonContainer>
                      }
                      def={
                        <p>
                          I create responsive websites that work on all devices.
                          I have experience in several frontend frameworks and
                          am always willing to take on new challenges!
                        </p>
                      }
                    />
                    <ServicesItem
                      term={
                        <RibbonContainer>
                          Tooling Development
                          <Ribbon />
                        </RibbonContainer>
                      }
                      def={
                        <p>
                          Having trouble figuring out complex front-end tooling?
                          Need a feature developed in your Webpack or Node
                          tooling chain? I’m your guy.
                        </p>
                      }
                    />
                    <ServicesItem
                      term={
                        <RibbonContainer>
                          Paid Mentoring
                          <Ribbon width="min-w-[186px]" />
                        </RibbonContainer>
                      }
                      def={
                        <>
                          <p className="xl:min-h-[108px]">
                            Looking to learn web development? I can provide
                            assistance in helping learn the fundamentals, review
                            your portfolio, and more!
                          </p>
                        </>
                      }
                    />
                  </Services>
                </div>
              </div>
            </Container> */}

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
