import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="fr">
        <Head>
            <meta name="description" content="Bienvenue sur mon e-portfolio où je vous présente mes réalisations en développement et webdesign."/>
            <meta name="format-detection" content="telephone=no"/>
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