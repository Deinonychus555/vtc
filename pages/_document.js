import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    /*
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }
  */
  render() {
    return (
      <Html lang='es'>
        <Head>
          <meta charSet="utf-8" />
          <meta property="og:locale" content="es_ES" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://vtcmadrid.netlify.app/" />
          <meta property="og:site_name" content="VTC Madrid" />
          <meta property="og:image" content="/images/VTC_Madrid.jpg" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="canonical" href="https://vtcmadrid.netlify.app/"></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument