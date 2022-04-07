import cx from 'classnames'

import { Container } from '@/components/container'
import { SectionTitle, Title } from './common'
import styles from './index.module.css'
import IconPlaid from './plaid.svg'
import { ViewWebsiteButton } from '@/components/button'

export * as F from './common'
export * from './modern-fertility'
export * from './opal-camera'

export const Hero = () => {
  return (
    <div>
      <div className="px-gutter pt-40 max-w-common mx-auto">
        <Title className="text-[#04D357]">Hi, I’m Anthony</Title>
        <div className="text-lg xl:text-[22px] text-white font-heading font-500 xl:font-600 ">
          <p>
            I’m a frontend engineer helping companies and startups create a web
            presence.
          </p>
        </div>
      </div>
    </div>
  )
}

const BackgroundRibbon: React.FC<{ className?: string }> = ({
  className,
  children,
}) => {
  return (
    <span
      className={cx(
        'rounded-sm h-[38px] absolute -translate-y-1/2 top-1/2 -z-10 w-[325px]',
        className,
      )}
    >
      {children}
    </span>
  )
}

export const PlaidSection = () => {
  return (
    <div className="bg-white xl:min-h-[825px] py-20">
      <Container className="px-gutter">
        <h2 className="mb-10 xl:mb-20">
          <Title>I’ve also worked with...</Title>
        </h2>
        <div className="xl:flex items-center max-w-xl xl:max-w-full mx-auto">
          <div className="flex-1 xl:flex items-center xl:h-[430px] relative">
            <img
              src={IconPlaid.src}
              alt="camera made by opal camera"
              className="mb-8 xl:mb-0 xl:pl-8 xl:mx-auto block w-[280px] xl:w-[366px]"
            />
          </div>
          <div className="flex-1 flex items-center justify-center pt-10 xl:pt-0 xl:pl-gutter">
            <div>
              <div className="w-full">
                <div className="relative z-10 mb-4">
                  <BackgroundRibbon className={cx('bg-[#5BEEBD] left-[-33px]')} />
                  <h3 className="font-display tracking-[4px] text-[28px] font-semibold relative inline-block">
                    Plaid Technologies
                  </h3>
                </div>
              </div>
              <p className="leading-7 max-w-[734px] pb-6 space-y-5 mb-2">
                <p>
                  This is where my development journey began. I had the lovely
                  opportunity to work with the lovely people at Plaid
                  Technologies, where I maintained their marketing site,
                  improved site performance, and adding new features to their
                  documentation.
                </p>
                <p>
                  Plaid’s website has changed drastically since I’ve worked
                  there (it’s been a while). Feel free to check it out anyway if
                  you’re curious.
                </p>
              </p>
              <a
                className="inline-block"
                href="https://plaid.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <ViewWebsiteButton>View the website</ViewWebsiteButton>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
