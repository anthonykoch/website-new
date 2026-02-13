import Document, { Html, Head, Main, NextScript } from 'next/document'

class AppDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" type="image/x-icon" href="/images/favicon.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default AppDocument
