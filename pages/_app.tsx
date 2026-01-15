import type { AppProps } from 'next/app'

import '../styles/main.css'

import { RouterComposerProvider } from '@/features/router/context/RouterComposerContext'
import { Sail } from '@/features/sail/Sail'
import { Animations } from '@/features/site/Animations'
import { MobileNavigation } from '@/features/site/MobileNavigation/MobileNavigation'
import { MobileNavTrigger } from '@/features/site/MobileNavTrigger'
import { NavigationScrollReveal } from '@/features/site/Navigation/NavigationScrollReveal'
import { SiteNavigation } from '@/features/site/SiteNavigation'
import { Provider } from 'jotai'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Analytics } from '@vercel/analytics/next'

const HeadMeta = () => {
  return (
    <Head>
      <title>Anthony Koch</title>
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
  const router = useRouter()

  return (
    <RouterComposerProvider>
      <Analytics />
      <Provider>
        <HeadMeta />
        <MobileNavigation />
        <MobileNavTrigger />
        <Sail />
        <Animations />
        <div className="mix-blend-difference fixed top-0 left-0 w-full z-1000">
          <NavigationScrollReveal>
            <div className="max-w-site mx-auto">
              <SiteNavigation colorVariant="white" isBlendModeDifference />
            </div>
          </NavigationScrollReveal>
        </div>
        <Component key={router.route} {...pageProps} />
      </Provider>
    </RouterComposerProvider>
  )
}

export default App
