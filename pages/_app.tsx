import type { AppProps } from 'next/app'
import Script from 'next/script'

import 'normalize.css'
import '../styles/main.css'

import { Header } from '../components/app/Header'
import Head from 'next/head'

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

      <link rel="icon" type="image/x-icon" href="/images/favicon.png" />
      <link rel="stylesheet" href="https://use.typekit.net/nsr0hmh.css" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/github.min.css"
      />
    </Head>
  )
}

function App({ Component, pageProps }: AppProps) {
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

      <Header />
      <Component {...pageProps} />
    </div>
  )
}

export default App
