import './_app.scss'
import Head from 'next/head'

function ProjectApp({ Component, pageProps }) {
    return (
        <>
        <Head>
            <title>Alexis Flacher</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossorigin="anonymous"></link>
            <link rel="icon" type="image/png" href="../../../img/favicon.png" />
            <meta name="google-site-verification" content="LQbWiek7FeGID3McWK0S2aTRawSMYcpkkUPGWAz3lXE" />
        </Head>
        <Component {...pageProps} />
        </>
    )
    
}

export default ProjectApp