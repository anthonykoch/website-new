import React from 'react'
import { ExternalLink } from '@/components/action/Link'
import { ViewWebsiteButton } from '@/components/button'
import { Container } from '@/components/container'
import { SectionTitle, Title } from './common'

import OpalMacbook from '@/images/opal-macbook.png'
import OpalMacbookMobile from '@/images/opal-macbook-m.png'
import OpalMobileImage from '@/images/opal-mobile-image.png'

export const OpalMacbookSection: React.FC = () => {
  return (
    <section>
      <Container>
        <div className="px-gutter pb-10 xl:pb-24">
          <Title>Work</Title>
        </div>

        <div className="pb-16 xl:pb-32">
          <div className="bg-[#14E595] lg:bg-transparent py-6  md:py-8 lg:py-0 relative">
            <div className="xl:left-1/2 transform xl:-translate-x-1/2 xl:top-16 xl:absolute text-center">
              <SectionTitle>Opal Camera</SectionTitle>
            </div>
            <picture>
              <source media="(min-width: 1025px)" srcSet={OpalMacbook.src} />
              <img
                src={OpalMacbookMobile.src}
                className="w-[853px] block mx-auto"
                // className="w-[753px] block mx-auto"
                alt="opal website"
              />
            </picture>
          </div>
          <div className="px-gutter max-w-[680px] mx-auto">
            <p className="text-[17px] pt-6 lg:pl-14 leading-relaxed">
              Opal Camera is the first of its kind, offering a professional
              quality webcam at the fraction of the price of a DSLR.
            </p>
            <div className="mt-6  lg:mt-10 mb-10 lg:text-center">
              <ExternalLink href="https://opalcamera.com">
                <ViewWebsiteButton>View the website</ViewWebsiteButton>
              </ExternalLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export const OpalMobileSection = () => {
  return (
    <section>
      <Container className="px-gutter">
        <div className="xl:flex  justify-center pb-32 xl:pb-48 xl:pt-10 xl:space-x-10 flex-row-reverse xl:space-x-reverse">
          <div className="pb-20 xl:pt-20">
            <h2 className="font-heading font-bold text-[34px] xl:text-[40px] mb-4 max-w-[545px] mx-auto xl:mx-0 leading-tight">
              From front-end to full-stack
            </h2>
            <div className="max-w-[545px] mx-auto xl:mx-0 space-y-5 xl:text-[17px] leading-relaxed">
              <p>
                Opal Camera had contacted me to help develop the first iteration
                of their landing page. The project has since turned into
                full-stack development, where I’ve assisted in building out
                helpful administrative tools to manage email invites and
                signups.
              </p>
              <p>
                The tech stack involves React through NextJS and Tailwind CSS.
              </p>
            </div>
          </div>
          <div>
            <img
              src={OpalMobileImage.src}
              alt="opal camera mobile websites"
              className="w-[370px] block mx-auto xl:mx-0"
            />
          </div>
        </div>
      </Container>
    </section>
  )
}
