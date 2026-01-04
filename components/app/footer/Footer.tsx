import React from 'react'

import { ExternalLink } from '@/components/action/Link'

export const Footer: React.FC = () => {
  return (
    <footer className="max-w-[1728px] mx-auto pt-40">
      <div className="border-b border-black/10 w-[calc(100wh-16px)]"></div>

      <div>
        <div className="pb-10 lg:pb-10" />
     
        <div className="max-w-[1600px] mx-auto">
          <div className="px-4">
            <div>
              <div id="contact"></div>

              <a href="mailto:hello@anthonykoch.com" className="text-inherit mb-4 block">
                <span className="block font-500 xl:text-left text-[26px] md:text-[40px] lg:text-6xl xl:text-7xl 2xl:text-8xl xl:pb-4 xl:pt-10">
                  <span className="text-lg xl:text-[22px] font-400 mb-5 block">
                    Let’s collaborate, or just chat.
                  </span>
                  <span className=" text-black block lg:block  py-3 md:py-5 lg:py-9 px-6 font-500 -tracking-wide font-heading hover:bg-black hover:text-white  bg-primary-500  hover:active:text-black transition-all duration-200 shadow-button">
                    hello@anthonykoch.com
                  </span>
                </span>
              </a>

              <div className="md:flex justify-between lg:pl-6 pb-5 lg:pb-10">
                <div>
                  <nav>
                    <ul className="flex flex-wrap items-baseline w-full justify-between md:justify-start md:gap-y-3 gap-x-8 *:mr-4 *:text-black/80">
                      {/* <li>
                        <p className="text-inherit font-body font-600 text-[13px]">
                          <span className="text-lg xl:text-[22px] font-400 mb-5 block">
                            Connect with me{' '}
                          </span>
                        </p>
                      </li> */}
                      <li>
                        <ExternalLink
                          href="https://x.com/anthkoch"
                          className="block text-inherit font-body font-600 text-[13px] py-2 px-4 tracking-wide"
                        >
                          Twitter
                        </ExternalLink>
                      </li>
                      <li>
                        <ExternalLink
                          href="https://codepen.io/anthonykoch/"
                          className="block text-inherit font-body font-600 text-[13px] py-2 px-4 tracking-wide"
                        >
                          Codepen
                        </ExternalLink>
                      </li>
                      <li>
                        <ExternalLink
                          href="https://github.com/anthonykoch?tab=repositories"
                          className="block text-inherit font-body font-600 text-[13px] py-2 px-4 tracking-wide"
                        >
                          Github
                        </ExternalLink>
                      </li>
                      <li>
                        <ExternalLink
                          href="https://www.linkedin.com/in/anthony-koch-794a3b15b/"
                          className="block text-inherit font-body font-600 text-[13px] py-2 px-4 tracking-wide"
                        >
                          LinkedIn
                        </ExternalLink>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="text-sm lg:text-[14px] font-500">
                  <p className="text-center md:text-left text-black/40 py-5">
                    © {new Date().getFullYear()}
                    {/* <br /> */}
                    {/* Designed in Figma. */}
                  </p>
                  <div className="hidden">
                    <div className="pt-5 **:[a]:text-black/50">
                      <p>
                        Fonts:{' '}
                        <ExternalLink href="https://fortfoundry.com/fonts/rift">
                          Rift Soft
                        </ExternalLink>
                        ,{' '}
                        <ExternalLink href="https://connary.com/fonts/visby/">
                          Visby CF
                        </ExternalLink>
                        ,{' '}
                        <ExternalLink href="https://fonts.google.com/specimen/DM+Sans">
                          DM Sans
                        </ExternalLink>
                      </p>
                    </div>
                    <div className="**:[span]:text-black/50">
                      <p>
                        Stack: <span>Next.js</span>, <span>Tailwind</span>,
                        motion.dev
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
