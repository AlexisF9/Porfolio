import './_app.scss'
import Head from 'next/head'
import { Footer } from 'component/footer'

function ProjectApp({ Component, pageProps }) {
    return (
        <>
        <Head>
            <title>Alexis Flacher</title>
            <meta name="description" content="Je suis développeur front-end et webdesigner et bienvenue sur mon portfolio !" />
            <meta name="robots" content="index, follow"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta charset="UTF-8"/>
            <meta name="google-site-verification" content="LQbWiek7FeGID3McWK0S2aTRawSMYcpkkUPGWAz3lXE" />
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossorigin="anonymous"></link>
            <link rel="icon" type="image/png" href="../../../img/favicon.png" />
        </Head>
        <Component {...pageProps} />
        <Footer/>
        </>
    )
    
}

export default ProjectApp