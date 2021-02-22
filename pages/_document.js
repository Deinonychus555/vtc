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