import cx from 'classnames'

import { Container } from '@/components/container'
import { Exposition } from '@/components/home/Exposition'
import { Title } from './common'
import styles from './index.module.css'
import IconPlaid from './plaid.svg'

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

export const PlaidSection = () => {
  return (
    <div className="bg-seafoam xl:h-[625px] xl:flex items-center py-20 xl:py-0">
      <Container>
        <div className="xl:flex flex-row-reverse items-center">
          <div className="flex-1 xl:flex items-center xl:h-[430px] relative">
            <img
              src={IconPlaid.src}
              alt="camera made by opal camera"
              className="mb-8 xl:mb-0 xl:pl-8 mx-auto block w-[300px] xl:w-[511px]"
            />
          </div>
          <div className="flex-1 flex items-center justify-center pt-10 xl:pt-0 xl:pl-gutter">
            <Exposition
              title={
                <div className="relative z-10">
                  Plaid Technologies
                  <span className={cx(styles.PlaidRibbon, styles.Ribbon)} />
                </div>
              }
              href="https://plaid.com/"
              description={
                <>
                  Modern Fertility approached me to assist them in developing
                  their website. At the time, I was the sole front-end
                  developer, working alongside Tom Chokel to help Carly and
                  Afton to help get their new business concept out to the world.
                </>
              }
              cta="View the website"
            />
          </div>
        </div>
      </Container>
    </div>
  )
}
