import * as React from 'react'
import Link from 'next/link'
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
  Hero,
  ModernFertilityMacbookSection,
  ModernFertilityMobileSection,
  OpalMacbookSection,
  OpalMobileSection,
  PlaidSection,
} from '@/fragments/home'

const More: React.FC = ({ children }) => (
  <a className="text-[14px] font-600">{children}</a>
)

const Home: NextPage = () => {
  return (
    <div>
      <SiteHeader isAbsolute />

      <SiteHeaderPlaceholder className="relative">
        <SiteHeaderBackground>
          <Hero />
        </SiteHeaderBackground>
      </SiteHeaderPlaceholder>
      
      <div className="bg-[#f0f0f0]">
        <section>
          <div id="portfolio"></div>

          <OuterContainer className="text-center xl:text-left">
            <div className="px-gutter pb-10 xl:pb-24 pt-10 xl:pt-16">
              <F.Title>Portfolio</F.Title>
            </div>
          </OuterContainer>

          <section>
            <OpalMacbookSection />
          </section>

          <section>
            <OpalMobileSection />
          </section>

          <div className="border-t border-t-black/[0.2]"></div>
          <div className="border-t border-t-black/[0.11]"></div>

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
            <OuterContainer>
              <h2 className="px-gutter">
                <F.Title className="pb-14 xl:pb-20 pt-10 xl:pt-20 text-center xl:text-left">
                  Hire me
                </F.Title>
              </h2>
            </OuterContainer>

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
                          {/* <Link href="/mentoring" passHref>
                            <a className="pt-4 block underline underline-offset-3">
                              <More>Learn more</More>
                            </a>
                          </Link> */}
                        </>
                      }
                    />
                  </Services>
                </div>

                <div id="contact"></div>
                <p>
                  <a href="mailto:hello@anthonykoch.com">
                    <div className="text-center font-500 2xl:text-left text-2xl xl:text-7xl 2xl:text-8xl xl:py-10">
                      <span className="text-lg xl:text-xl font-400 mb-5 block">
                        Email me at
                      </span>
                      hello@anthonykoch.com
                    </div>
                  </a>
                </p>
              </div>
            </Container>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}

const RibbonContainer: React.FC = ({ children }) => (
  <div className="relative z-20 inline-block">{children}</div>
)

const Ribbon: React.FC<{ width?: string }> = ({ width }) => (
  <span
    className={`h-2 bg-[#19EAA4] -left-3 absolute bottom-[6px] ${
      width ?? 'w-[112%]'
    } -z-10`}
  />
)

const ServicesItem: React.FC<{
  term: React.ReactNode
  def: React.ReactNode
}> = ({ term, def }) => (
  <div className="pb-20 w-full ml-0 pl-0 xl:w-1/2">
    <dt className="pb-3 font-display font-600 tracking-widest text-[24px]">
      {term}
    </dt>
    <dd className="leading-7 text-[16px] xl:text-[17px]">{def}</dd>
  </div>
)

const Services: React.FC = ({ children }) => (
  <dl className="xl:flex xl:space-x-10">{children}</dl>
)

export default Home
