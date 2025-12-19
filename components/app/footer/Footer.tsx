import React from 'react'
// import { ReactComponent as LogoCodepen } from '@/images/logo-codepen.svg'
// import { ReactComponent as LogoGithub } from '@/images/logo-github.svg'
// import { ReactComponent as LogoLinkedIn } from '@/images/logo-linkedin.svg'


const LogoCodepen = () => <></>

const LogoGithub = () => <></>

const LogoLinkedIn = () => <></>

import { ExternalLink } from '@/components/action/Link'
import styles from './Footer.module.css'

const expand =
  "relative before:block before:absolute before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:transform before:-translate-x-1/2 before:-translate-y-1/2 before:w-[150%] before:h-[150%]"

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-gray-100">
      <div className="py-6 xl:py-8 flex flex-col xl:flex-row items-center justify-between max-w-screen-macbook16 mx-auto px-gutter-lg">
        <div>
          <div>
            <div className="py-2 xl:py-0 mb-2 xl:mb-0">
              <nav>
                <div className="flex w-full">
                  <div className="pr-5">
                    <ExternalLink
                      href="https://codepen.io/anthonykoch/"
                      className={expand}
                    >
                      <LogoCodepen className={styles.Logo} />
                    </ExternalLink>
                  </div>
                  <div className="px-5">
                    <ExternalLink
                      href="https://github.com/anthonykoch?tab=repositories"
                      className={expand}
                    >
                      <LogoGithub className={styles.Logo} />
                    </ExternalLink>
                  </div>
                  <div className="px-5">
                    <ExternalLink
                      href="https://www.linkedin.com/in/anthony-koch-794a3b15b/"
                      className={expand}
                    >
                      <LogoLinkedIn className={styles.Logo} />
                    </ExternalLink>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
        <div className="text-sm lg:text-[14px]">
          <p>Designed and developed by me © {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  )
}
