import type { AppProps } from 'next/app'

import '../styles/main.css'

import Head from 'next/head'
import { Provider } from 'jotai'
import { MobileNavigation } from '@/features/site/MobileNavigation/MobileNavigation'
import { MobileNavTrigger } from '@/features/site/MobileNavTrigger'
import { Animations } from '@/features/site/Animations'
import { SiteNavigation } from '@/features/site/SiteNavigation'
import { NavigationScrollReveal } from '@/features/site/Navigation/NavigationScrollReveal'

const HeadMeta = () => {
  return (
    <Head>
      <title>website</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="description"
        content="Freelance front-end web developer producing high quality work with an exceptional eye for detail. Mentor. Lover of JavaScript."
      />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="robots" content="index,follow" />
    </Head>
  )
}

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <HeadMeta />
      <MobileNavigation />
      <MobileNavTrigger />
      <Animations />
      <div className="mix-blend-difference fixed top-0 left-0 w-full z-1000">
        <NavigationScrollReveal>
          <div className="max-w-site mx-auto">
            <SiteNavigation colorVariant="white" isBlendModeDifference />
          </div>
        </NavigationScrollReveal>
      </div>
      <Component {...pageProps} />
    </Provider>
  )
}

export default App
