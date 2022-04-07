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
  <a className="text-[13px] font-600">{children}</a>
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
        <IntroSection />
        <WorkSection />
      </div>
      <Footer />
    </div>
  )
}

const WorkSection: React.FC = () => {
  return (
    <div className="pt-6 lg:pt-10">
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

      <section>
        <PlaidSection />
      </section>
      <section>
        <Container>
          <h2>
            <F.Title className="pb-8 xl:pb-20 pt-20 xl:pt-36 xl:text-left">
              Hire me
            </F.Title>
          </h2>

          <div className="pb-10 xl:pb-32 max-w-md mx-auto xl:max-w-full px-gutter">
            <ThreePiece>
              <ThreePieceItem
                term="Web Development"
                def={
                  <>
                    I create responsive websites that work on all devices. I
                    have experience in React, Vue, Sass, styled-components,
                    NextJS ad so much more!
                  </>
                }
              />
              <ThreePieceItem
                term="Tooling Development"
                def={
                  <>
                    Having trouble figuring out complex front-end tooling? Need
                    a feature developed in your tooling chain such as Webpack or
                    Node? I’m your guy.
                  </>
                }
              />
              <ThreePieceItem
                term="Mentoring"
                def={
                  <>
                    <p>
                      Looking to learn web development? I can provide assistance
                      in helping learn the fundamentals, review your portfolio,
                      and more!
                    </p>
                    <Link href="/mentoring" passHref>
                      <a className="pt-1.5 block">
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
                  <span className="text-lg font-400">Email me at</span>
                  <br />
                  hello@anthonykoch.com
                </div>
              </a>
            </p>
          </div>
        </Container>
      </section>
    </div>
  )
}

const Heading2: React.FC<{ className?: string }> = ({
  children,
  className,
}) => {
  return (
    <span className={cx('block text-6xl font-heading', className)}>
      {children}
    </span>
  )
}

const ThreePieceItem: React.FC<{
  term: React.ReactNode
  def: React.ReactNode
}> = ({ term, def }) => (
  <div className="pb-20 xl:w-1/3">
    <dt className="pb-3 font-display font-semibold tracking-widest text-[22px]">
      {term}
    </dt>
    <dd className="leading-8 text-[15px]">{def}</dd>
  </div>
)

const ThreePiece: React.FC = ({ children }) => (
  <dl className="xl:flex space-x-8 px-gutter">{children}</dl>
)

const IntroSection: React.FC = () => {
  return (
    <div className="bg-[#f0f0f0] px-gutter ">
      <div className="max-w-[1000px] mx-auto w-full">
        {/* <h2 className={styles.IntroTitle}>Portfolio</h2> */}
        {/* <p className={styles.IntroLead}>I’ve worked with memers and dreamers</p> */}
      </div>
    </div>
  )
}

export default Home
