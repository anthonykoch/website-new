import * as React from 'react'
import type { NextPage } from 'next'
import cx from 'classnames'
import { Footer } from '@/components/app/footer/Footer'

import {
  SiteHeader,
  SiteHeaderBackground,
  SiteHeaderPlaceholder,
} from '@/components/app/Header'

import { Container } from '@/components/container'
import {
  F,
  Hero,
  ModernFertilityMacbookSection,
  ModernFertilityMobileSection,
  OpalMacbookSection,
  OpalMobileSection,
  PlaidSection,
} from '@/fragments/home'
import Link from 'next/link'

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
          <Container>
            <div className="px-gutter pb-10 pt-10 xl:pt-12 xl:pb-24">
              <F.Title>Work</F.Title>
            </div>
          </Container>
          <section>
            <OpalMacbookSection />
          </section>
          <section>
            <OpalMobileSection />
          </section>
          <section>
            <ModernFertilityMacbookSection />
          </section>
          <section>
            <ModernFertilityMobileSection />
          </section>
        </section>

        <section>
          <PlaidSection />
        </section>
        <section>
          <Container className="pb-16 xl:pb-32">
            <h2 className="px-gutter">
              <F.Title className="pb-14 xl:pb-20 pt-20 xl:pt-36 xl:text-left">
                Hire me
              </F.Title>
            </h2>
            <div className=" max-w-md mx-auto xl:max-w-full px-gutter">
              <ThreePiece>
                <ThreePieceItem
                  term={
                    <RibbonContainer>
                      Web Development <Ribbon />
                    </RibbonContainer>
                  }
                  def={
                    <p>
                      I create responsive websites that work on all devices. I
                      have experience in React, Vue, Sass, styled-components,
                      NextJS ad so much more!
                    </p>
                  }
                />
                <ThreePieceItem
                  term={
                    <RibbonContainer>
                      Tooling Development
                      <Ribbon />
                    </RibbonContainer>
                  }
                  def={
                    <p>
                      Having trouble figuring out complex front-end tooling?
                      Need a feature developed in your tooling chain such as
                      Webpack or Node? I’m your guy.
                    </p>
                  }
                />
                <ThreePieceItem
                  term={
                    <RibbonContainer>
                      Mentoring
                      <Ribbon width="min-w-[130px]" />
                    </RibbonContainer>
                  }
                  def={
                    <>
                      <p className="xl:min-h-[108px]">
                        Looking to learn web development? I can provide
                        assistance in helping learn the fundamentals, review
                        your portfolio, and more!
                      </p>
                      <Link href="/mentoring" passHref>
                        <a className="pt-1.5 block underline underline-offset-3">
                          <More>Learn more</More>
                        </a>
                      </Link>
                    </>
                  }
                />
              </ThreePiece>

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
    className={`h-2 bg-[#19EAA4] -left-3 absolute bottom-[5px] ${
      width ?? 'w-[112%]'
    } -z-10`}
  />
)

const ThreePieceItem: React.FC<{
  term: React.ReactNode
  def: React.ReactNode
}> = ({ term, def }) => (
  <div className="pb-20 w-full ml-0 pl-0 xl:w-1/3">
    <dt className="pb-3 font-display font-600 tracking-widest text-[22px]">
      {term}
    </dt>
    <dd className="leading-7 text-[15px]">{def}</dd>
  </div>
)

const ThreePiece: React.FC = ({ children }) => (
  <dl className="xl:flex xl:space-x-8">{children}</dl>
)

export default Home
