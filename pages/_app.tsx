import type { AppProps } from 'next/app'

import '../styles/main.css'

import Head from 'next/head'
import { ThemeProvider } from '@/contexts/theme'
import { useCallback, useEffect } from 'react'

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
  const onClick = useCallback((e: MouseEvent): void => {
    const el = e.target

    if (el == null) return

    const id = (e.target as HTMLElement).getAttribute('data-siv')

    if (typeof id === 'string') {
      e.preventDefault()

      document.querySelector(id)?.scrollIntoView({
        behavior: 'smooth',
      })
    }
  }, [])

  useEffect(() => {
    window.addEventListener('click', onClick)

    return () => window.removeEventListener('click', onClick)
  }, [onClick])

  return (
    <div>
      <HeadMeta />

      {/* <Head>

      </Head> */}
      {/* <Script
  dangerouslySetInnerHTML={{
    __html: `
// Make sure codepen doesn't load before nuxt does
setTimeout(function () {
  const script = document.createElement('script');

  script.src = 'https://static.codepen.io/assets/embed/ei.js';
  script.async = true;
  script.defer = true;

  document.body.appendChild(script);
}, 1000)
`,
  }}
></Script> */}
      {/* <Script src="https://browser.sentry-cdn.com/4.6.1/bundle.min.js" crossorigin="anonymous"></Script> */}
      {/* <script>
  var isStaging = {{ JSON.stringify(ENV.app.isStaging) }}
  var isEnvProduction = {{ JSON.stringify(ENV.app.isEnvProduction) }}

  if (isEnvProduction && !isStaging) {
    Sentry.init({ dsn: 'https://1049260bcb57442ebafa6890e89d1e5c@sentry.io/1395424' });
  }
</script> */}

      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </div>
  )
}

export default App
