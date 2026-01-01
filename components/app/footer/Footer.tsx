import React from 'react'
// import { ReactComponent as LogoCodepen } from '@/images/logo-codepen.svg'
// import { ReactComponent as LogoGithub } from '@/images/logo-github.svg'
// import { ReactComponent as LogoLinkedIn } from '@/images/logo-linkedin.svg'

const LogoGithub = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 31 31"
    fill="none"
    {...props}
  >
    <path
      fill="#2F2F2F"
      d="M16.253 2.124c-7.49 0-13.563 6.03-13.563 13.459 0 5.947 3.887 10.986 9.276 12.767.075.016.153.024.23.024.503 0 .696-.358.696-.668 0-.322-.012-1.166-.018-2.291a6.399 6.399 0 0 1-1.368.158c-2.61 0-3.203-1.963-3.203-1.963-.618-1.553-1.508-1.969-1.508-1.969-1.18-.802-.006-.826.085-.826h.006c1.362.117 2.077 1.395 2.077 1.395.678 1.148 1.586 1.47 2.398 1.47a3.921 3.921 0 0 0 1.55-.351c.12-.867.472-1.46.86-1.799-3.01-.34-6.177-1.494-6.177-6.65 0-1.471.527-2.672 1.393-3.61-.14-.34-.605-1.71.133-3.562.1-.023.201-.033.303-.03.49 0 1.598.182 3.427 1.413a13.011 13.011 0 0 1 6.793 0c1.829-1.23 2.937-1.413 3.427-1.413.102-.003.204.007.303.03.739 1.851.272 3.222.133 3.562.866.944 1.393 2.145 1.393 3.61 0 5.168-3.173 6.304-6.194 6.638.484.416.92 1.237.92 2.49 0 1.8-.018 3.253-.018 3.692 0 .316.188.674.69.674.082 0 .163-.008.242-.024 5.395-1.78 9.276-6.826 9.276-12.767 0-7.43-6.073-13.46-13.562-13.46Z"
    />
  </svg>
)

const LogoLinkedIn = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 31 31"
    {...props}
  >
    <path
      fill="#2F2F2F"
      d="M26.778 2.124H4.871c-1.197 0-2.243.861-2.243 2.044v21.956c0 1.19 1.046 2.25 2.243 2.25h21.9c1.204 0 2.107-1.067 2.107-2.25V4.168c.007-1.183-.903-2.044-2.1-2.044Zm-16.013 21.88H7.004V12.312h3.76v11.692Zm-1.75-13.47h-.028c-1.203 0-1.982-.896-1.982-2.017 0-1.142.8-2.017 2.03-2.017 1.23 0 1.983.869 2.01 2.017 0 1.121-.78 2.017-2.03 2.017Zm15.493 13.47h-3.76v-6.393c0-1.531-.547-2.578-1.908-2.578-1.04 0-1.655.703-1.928 1.388-.103.246-.13.582-.13.924v6.66H13.02V12.311h3.76v1.627c.548-.78 1.403-1.9 3.392-1.9 2.469 0 4.336 1.627 4.336 5.135v6.83Z"
    />
  </svg>
)

const LogoCodepen = (props: any) => (
  <svg
    viewBox="0 0 31 31"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    {...props}
  >
    <path
      fill="#2F2F2F"
      d="M14.888 18.058c-.898-.607-1.801-1.206-2.699-1.813-.117-.08-.201-.086-.322 0l-2.278 1.53c1.828 1.218 5.46 3.645 5.46 3.645v-3.152c0-.071-.09-.163-.161-.21Zm-2.704-3.707c.906-.596 1.806-1.199 2.702-1.809a.444.444 0 0 0 .164-.313V9.2s-3.633 2.41-5.465 3.63c.803.536 1.563 1.049 2.331 1.549.06.038.2.016.268-.028Zm4.38-1.836c.926.628 1.856 1.25 2.79 1.865a.253.253 0 0 0 .225 0l2.33-1.551-5.453-3.646v3.126a.281.281 0 0 0 .108.206Zm-.688 1.232a.308.308 0 0 0-.277.01c-.283.176-.555.363-.83.548l-1.486.996 2.276 1.515a.362.362 0 0 0 .367.007l2.285-1.524-2.335-1.552Zm-6.862.396v2.32l1.736-1.162-1.736-1.159Z"
    />
    <path
      fill="#2F2F2F"
      d="M15.753 2.124C8.504 2.124 2.628 8 2.628 15.249c0 7.248 5.876 13.125 13.125 13.125 7.248 0 13.125-5.877 13.125-13.125C28.878 8 23 2.124 15.753 2.124Zm8.144 15.527c0 .339-.155.578-.44.767-2.41 1.602-4.818 3.207-7.224 4.816-.343.23-.654.22-.996-.008-2.39-1.602-4.784-3.197-7.185-4.786-.3-.198-.445-.443-.445-.804v-4.672c0-.36.148-.606.446-.804a1891.95 1891.95 0 0 0 7.192-4.786c.34-.228.65-.235.992-.005 2.404 1.61 4.812 3.215 7.223 4.815.274.183.436.408.436.742l.001 4.725Z"
    />
    <path
      fill="#2F2F2F"
      d="M19.283 16.258c-.882.6-1.769 1.192-2.66 1.778-.14.093-.169.194-.167.363v3.008l5.449-3.633-2.258-1.516c-.134-.095-.227-.092-.364 0Zm3.15.203v-2.322l-1.734 1.164 1.733 1.157Z"
    />
  </svg>
)

import { ExternalLink } from '@/components/action/Link'

const expand =
  "relative before:block before:absolute before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:transform before:-translate-x-1/2 before:-translate-y-1/2 before:w-[150%] before:h-[150%]"

export const Footer: React.FC = () => {
  return (
    <footer className="pt-5 pb-10 max-w-[1600px] mx-auto px-4 text-gray-800 ">
      <div className="border-t border-black/10">
        <div className="xl:py-8 px-4 pb-40 grid grid-cols-12 gap-x-4">
          <div className="col-span-2 col-start-8 flex justify-end">
            <div>
              <div className="xl:py-0 mb-2 xl:mb-0">
                <nav>
                  <div className="flex w-full gap-x-8 pr-6 **:[svg,path]:fill-black/90! **:[svg,path]:duration-200 **:[svg,path]:transition-colors">
                    <div className="hover:**:[svg,path]:fill-primary-500!">
                      <ExternalLink
                        href="https://codepen.io/anthonykoch/"
                        className={expand}
                      >
                        <LogoCodepen className="w-[27px] transition-colors duration-150" />
                      </ExternalLink>
                    </div>
                    <div className="hover:**:[svg,path]:fill-primary-500!">
                      <ExternalLink
                        href="https://github.com/anthonykoch?tab=repositories"
                        className={expand}
                      >
                        <LogoGithub className="w-[27px] transition-colors duration-150" />
                      </ExternalLink>
                    </div>
                    <div className="hover:**:[svg,path]:fill-primary-500!">
                      <ExternalLink
                        href="https://www.linkedin.com/in/anthony-koch-794a3b15b/"
                        className={expand}
                      >
                        <LogoLinkedIn className="w-[27px] transition-colors duration-150" />
                      </ExternalLink>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
          <div className="col-span-3 text-sm lg:text-[14px]">
            <p className="font-500">
              Developed by Ninja Warrior Cats © {new Date().getFullYear()}
              <br />
              Designed in Figma.
            </p>
            <div className="pt-5 font-500 **:[a]:text-black/50">
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
            <div className=" font-500 **:[span]:text-black/50">
              <p>
                Stack: <span>Next.js</span>, <span>Tailwind</span>,{' '}
                <span>Blood, Sweat and Tears</span>
              </p>
            </div>
            {/* <ul className="list-none pt-6 *:pb-4 text-[16px] font-500">
              <li>
                <a href="/" className="text-black/60">
                  Home
                </a>
              </li>
              <li>
                <a href="/#work" className="text-black/60">
                  Work
                </a>
              </li>
              <li>
                <a href="/blog" className="text-black/60">
                  Blog
                </a>
              </li>
              <li>
                <a href="/#contact" className="text-black/60">
                  Contact
                </a>
              </li>
            </ul> */}
          </div>
        </div>
      </div>
    </footer>
  )
}
