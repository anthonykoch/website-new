import * as React from 'react'
import type { NextPage } from 'next'
import cx from 'classnames'
import styles from './index.module.css'
import Phone from './phone-hormone-reports.jpg'
import OpalCamera from './opal-camera-black.jpg'
import IconPlaid from './plaid.svg'
import { Exposition } from '@/components/home/Exposition'
import PhoneTablet from './phone-hormone-reports-[t].jpg'
import { Footer } from '@/components/app/footer/Footer'
import { ExternalLink } from '@/components/action/Link'
import { SiteHeader, SiteHeaderPlaceholder } from '@/components/app/Header'

const Home: NextPage = () => {
  return (
    <div>
      <SiteHeader isAbsolute />
      <SiteHeaderPlaceholder>
        <Hero />
      </SiteHeaderPlaceholder>
      <div className=" pt-6 lg:pt-16 bg-[#f0f0f0]">
        <IntroSection />
        <WorkSection />
      </div>
      <Footer />
    </div>
  )
}

const Hero = () => {
  return (
    <div className={styles.Hero}>
      <div className={styles.HeroContainer}>
        <h1 className={styles.HeroTitle}>Need a website?</h1>
        <div className={styles.HeroLead}>
          <p>I create responsive websites for memers and big dreamers</p>
        </div>
      </div>
    </div>
  )
}

const WorkSection: React.FC = () => {
  return (
    <div>
      <section>
        <div className="xl:h-[783px] py-16 xl:pt-0 flex items-center lg:px-6">
          <Container>
            <div className="xl:flex items-center xl:px-gutter">
              <div className="lg:max-w-3xl lg:pt-8 xl:pt-0 mx-auto  xl:w-[468px]">
                <picture>
                  <source media="(min-width: 1024px)" srcSet={Phone.src} />
                  <img
                    src={PhoneTablet.src}
                    alt="modern fertility reports"
                    className="top-0 left-0 object-cover lg:rounded-md xl:rounded-[12px]"
                  />
                </picture>
              </div>
              <div className="flex-1 flex items-center justify-center pt-10 xl:pt-32 xl:pl-gutter">
                <Exposition
                  title={
                    <div className="relative z-10">
                      <ExternalLink href="https://modernfertility.com">
                        <span className="text-black">Modern Fertility</span>
                      </ExternalLink>
                      <span
                        className={cx(styles.MFRibbon, styles.Ribbon)}
                      ></span>
                    </div>
                  }
                  href="https://modernfertility.com/"
                  description={
                    <>
                      Modern Fertility approached me to assist them in
                      developing their website. At the time, I was the sole
                      front-end developer, working alongside Tom Chokel to help
                      Carly and Afton to help get their new business concept out
                      to the world.
                    </>
                  }
                  cta="View the website"
                />
              </div>
            </div>
          </Container>
        </div>
      </section>

      <section>
        <div className="bg-[#010101] text-white xl:h-[685px] xl:flex  items-center py-20 xl:py-0">
          <Container>
            <div className="xl:flex flex-row-reverse items-center">
              <div className="flex-1 xl:h-[430px] relative">
                <img
                  src={OpalCamera.src}
                  alt="camera made by opal camera"
                  className="mb-8 xl:mb-0 w-[300px] xl:w-[520px] object-cover mx-auto xl:mr-auto block"
                />
              </div>
              <div className="flex-1 flex items-center justify-center pt-10 xl:pt-0 xl:pl-gutter">
                <Exposition
                  title={
                    <div className="relative z-10">
                      Opal Camera
                      <span className={cx(styles.OpalRibbon, styles.Ribbon)} />
                    </div>
                  }
                  href="https://opalcamera.com/"
                  description={
                    <>
                      Modern Fertility approached me to assist them in
                      developing their website. At the time, I was the sole
                      front-end developer, working alongside Tom Chokel to help
                      Carly and Afton to help get their new business concept out
                      to the world.
                    </>
                  }
                  cta="View the website"
                />
              </div>
            </div>
          </Container>
        </div>
      </section>

      <section>
        <div className="bg-seafoam xl:h-[625px] xl:flex items-center py-20   xl:py-0">
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
                      Modern Fertility approached me to assist them in
                      developing their website. At the time, I was the sole
                      front-end developer, working alongside Tom Chokel to help
                      Carly and Afton to help get their new business concept out
                      to the world.
                    </>
                  }
                  cta="View the website"
                />
              </div>
            </div>
          </Container>
        </div>
      </section>
      <section>
        <Container>
          <h2>
            <Heading2 className="pb-8 xl:pb-20 pt-20 xl:pt-36 text-center xl:text-left">
              Get in touch with me
            </Heading2>
          </h2>

          <div className="pb-10 xl:pb-32 max-w-md mx-auto xl:max-w-full px-gutter">
            <ThreePiece>
              <ThreePieceItem
                term="Web development"
                def={
                  <>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Accusantium ad pariatur maiores soluta ipsa, nesciunt beatae
                    deleniti saepe dolor. Distinctio.
                  </>
                }
              />
              <ThreePieceItem
                term="Memes"
                def={
                  <>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Hic, non. Lorem ipsum dolor sit amet consectetur.
                  </>
                }
              />
              <ThreePieceItem
                term="Mentoring"
                def={
                  <>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fugit aperiam unde sapiente aspernatur et neque!
                  </>
                }
              />
            </ThreePiece>

            <a href="mailto:hello@anthonykoch.com">
              <div className="text-center xl:text-left  text-4xl xl:text-8xl xl:py-10">
                hello@anthonykoch.com
              </div>
            </a>
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
  <div className="px-8 pb-20 w-1/3">
    <dt className="pb-3 font-display font-semibold tracking-widest  text-[22px]">
      {term}
    </dt>
    <dd className="leading-8 text-[15px]">{def}</dd>
  </div>
)

const ThreePiece: React.FC = ({ children }) => (
  <dl className="xl:flex">{children}</dl>
)

const Container: React.FC<{ className?: string }> = ({
  children,
  className,
}) => {
  return (
    <div className={cx('max-w-common mx-auto w-full', className)}>
      {children}
    </div>
  )
}

const IntroSection: React.FC = () => {
  return (
    <div className="bg-[#f0f0f0] px-gutter ">
      <div className={styles.IntroContainer}>
        <h2 className={styles.IntroTitle}>Some of my work</h2>
        <p className={styles.IntroLead}>I’ve worked with memers and dreamers</p>
      </div>
    </div>
  )
}

export default Home
