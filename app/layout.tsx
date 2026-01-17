import type { Metadata } from 'next'
import { ReactNode } from 'react'
import { Analytics } from '@vercel/analytics/next'
import { Provider } from 'jotai'

import '../styles/main.css'

import { RouterComposerProvider } from '@/features/router/context/RouterComposerContext'
import { Sail } from '@/features/sail/Sail'
import { Animations } from '@/features/site/Animations'
import { MobileNavigation } from '@/features/site/MobileNavigation/MobileNavigation'
import { MobileNavTrigger } from '@/features/site/MobileNavTrigger'
import { NavigationScrollReveal } from '@/features/site/Navigation/NavigationScrollReveal'
import { SiteNavigation } from '@/features/site/SiteNavigation'

export const metadata: Metadata = {
  title: 'Anthony Koch',
  description:
    'Freelance front-end web developer producing high quality work with an exceptional eye for detail. Mentor. Lover of JavaScript.',
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index,follow',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <RouterComposerProvider>
          <Analytics />
          <Provider>
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
            {children}
          </Provider>
        </RouterComposerProvider>
      </body>
    </html>
  )
}
