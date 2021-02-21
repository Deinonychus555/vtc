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
          <meta charset="utf-8" />
          <link rel="icon" href="/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
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