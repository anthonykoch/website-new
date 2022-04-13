import React from 'react'
import MFMobileImage from '@/images/mf-mobile.png'
import MFMacbook from '@/images/mf-macbook.png'
import MFMacbookMobile from '@/images/mf-macbook-m.png'
import { ExternalLink } from '@/components/action/Link'
import { ViewWebsiteButton } from '@/components/button'
import { Container } from '@/components/container'
import { SectionTitle } from './common'

export const ModernFertilityMacbookSection = () => {
  return (
    <Container className="pt-28 xl:pt-36">
      <div className="bg-seafoam lg:bg-transparent py-6 md:py-8 lg:py-0 relative">
        <div className="xl:left-1/2 transform xl:-translate-x-1/2 xl:top-16 xl:absolute text-center">
          <SectionTitle>Modern Fertility</SectionTitle>
        </div>
        <picture>
          <source media="(min-width: 1025px)" srcSet={MFMacbook.src} />
          <img
            src={MFMacbookMobile.src}
            className="w-[853px] block mx-auto"
            // className="w-[753px] block mx-auto"
            alt="modern fertility website"
          />
        </picture>
      </div>

      <div className="px-gutter max-w-[640px] mx-auto">
        <p className="text-[17px] pt-6 lg:ml-12 leading-relaxed">
          Modern Fertility approached me to assist them in developing their
          website. At the time, I was the sole front-end developer, working
          alongside Tom Chokel to help Carly and Afton to help give women the
          tools to better understand their fertility.
        </p>
        <div className="mt-6  lg:mt-10 mb-10 lg:text-center">
          <ExternalLink href="https://modernfertility.com">
            <ViewWebsiteButton>View the website</ViewWebsiteButton>
          </ExternalLink>
        </div>
      </div>
    </Container>
  )
}

export const ModernFertilityMobileSection = () => {
  return (
    <Container className="py-32 xl:py-44 px-gutter">
      <h2 className="font-heading font-bold max-w-[400px] xl:max-w-[450px] text-[34px] xl:text-[40px] mb-5 leading-[1.2] mx-auto text-center pb-6 xl:hidden">
        A responsive website, built from scratch.
      </h2>
      <div className="xl:flex justify-center xl:space-x-20 xl:px-gutter">
        <div>
          <img
            src={MFMobileImage.src}
            alt="modern fertility mobile websites"
            className="w-[370px] block mx-auto xl:mx-0"
          />
        </div>
        <div className="pt-28">
          <div className="max-w-[577px] mx-auto">
            <h2 className="font-heading font-bold max-w-[400px] xl:max-w-[450px] text-[34px] xl:text-[40px] mb-5 leading-[1.2] hidden xl:block">
              A responsive website, built from scratch.
            </h2>
            <div className="max-w-[577px] mx-auto xl:mx-0 space-y-5 xl:text-[17px] leading-relaxed">
              <p>
                Using simple tools of HTML and CSS, I worked closely with
                designers to build out the first iteration of Modern Fertility’s
                website. Over time, the tech stack has evolved from vanilla
                JavaScript and CSS to React and styled-components.
              </p>
              <p>
                Shoot forward several years, and not only has the website in
                scale, but Modern Fertility has grown as a wildly successful
                company, being aquired by Ro for $225 million.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
