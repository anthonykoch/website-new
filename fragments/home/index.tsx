import cx from 'classnames'

import { Container, OuterContainer } from '@/components/container'
import { Title } from './common'
import IconPlaid from './plaid.svg'
import { ViewWebsiteButton } from '@/components/button'

export * as F from './common'
export * from './modern-fertility'
export * from './opal-camera'

export const RibbonContainer: React.FC = ({ children }) => (
  <div className="relative z-20 inline-block">{children}</div>
)

export const Ribbon: React.FC<{ width?: string }> = ({ width }) => (
  <span
    className={`h-2 bg-[#19EAA4] -left-3 absolute bottom-[6px] ${
      width ?? 'w-[112%]'
    } -z-10`}
  />
)

// export const More: React.FC = ({ children }) => (
//   <a className="text-[14px] font-600">{children}</a>
// )

export const ServicesItem: React.FC<{
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

export const Services: React.FC = ({ children }) => (
  <dl className="xl:flex xl:space-x-10">{children}</dl>
)

export const Hero = () => {
  return (
    <div>
      <div className="px-gutter-lg pt-48 xl:pt-52 4xl:pt-72 max-w-[420px] leading-tight xl:max-w-common mx-auto">
        <Title className="text-[#04D357]">Hi, I’m Anthony</Title>
        <div className="text-lg xl:text-[22px] pt-2 xl:pt-5 text-white font-heading font-500 ">
          <p>
            I’m a frontend developer helping companies and startups create a web
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
        'rounded-sm h-[38px] absolute -translate-y-1/2 top-1/2 -z-10',
        className,
      )}
    >
      {children}
    </span>
  )
}

export const PlaidSection = () => {
  return (
    <div className="bg-white xl:min-h-[825px] py-24 xl:py-20">
      <div className="px-gutter">
        <OuterContainer>
          <h2 className="mb-20 xl:mb-20 text-center">
            <Title>I’ve also worked with...</Title>
          </h2>
          <button
            type="button"
            onClick={() => {
              throw new Error('Sentry Frontend Error')
            }}
          >
            Throw error
          </button>
        </OuterContainer>
        <Container>
          <div className="xl:flex items-center max-w-xl xl:max-w-full mx-auto">
            <div className="flex-1 xl:flex items-center xl:h-[430px] relative">
              <img
                src={IconPlaid.src}
                alt="camera made by opal camera"
                className="mb-12 xl:mb-0 xl:mx-auto block w-[250px] xl:w-[320px]"
              />
            </div>
            <div className="flex-1 flex items-center justify-center  xl:pl-gutter">
              <div>
                <div className="w-full">
                  <div className="relative z-10 mb-6 xl:b-6">
                    <BackgroundRibbon
                      className={cx(
                        'bg-[#5BEEBD] w-[280px] lg:w-[325px] left-[-10px] lg:left-[-33px]',
                      )}
                    />
                    <h3 className="font-display tracking-[4px] text-[28px] font-semibold relative inline-block">
                      Plaid Technologies
                    </h3>
                  </div>
                </div>
                <div className="leading-7 max-w-[734px] pb-6 space-y-6 xl:space-y-8 mb-3 xl:text-[17px]">
                  <p>
                    This is where my development journey began. I had the
                    opportunity to work with the lovely people at Plaid
                    Technologies, where I maintained their marketing site,
                    improved site performance, and adding new features to their
                    documentation.
                  </p>
                  <p>
                    Plaid’s website has changed drastically since I’ve worked
                    there (it’s been a while). Feel free to check it out anyway
                    if you’re curious.
                  </p>
                </div>
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
    </div>
  )
}
