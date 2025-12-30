import type { AppProps } from 'next/app'

import '../styles/main.css'

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

    </Head>
  )
}

function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <HeadMeta />
      <Component {...pageProps} />
    </div>
  )
}

export default App
