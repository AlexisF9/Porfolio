import css from './index.module.scss'
import Link from 'next/link'
import {Header} from '../component/header'
import {Footer} from '../component/footer'
import Head from 'next/head'

export async function getServerSideProps() { // appel du json pour rendre le contenu dynamique
    const res = await fetch(`http://localhost:3000/data/realisations.json`)
    const realisations = await res.json()

    return {
        props: { 
            realisations
        }
    }
}

export default function Home({realisations}) {
    return (
        <main className={css.contentAccueil}>
            <Head>
                <title>Alexis Flacher</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossorigin="anonymous"></link>
            </Head>
            <Header title="Alexis Flacher" subtitle="Développeur Front & Webdesigner" lienAbout="/posts/about" lienContact="/posts/contact" />
            <div className={css.content}>
                <div>
                    <h2>Mes réalisations :</h2>
                    
                        {realisations.map(rea => {
                            return (
                                <div className={css.listeLien}>
                                    <Link href="/">
                                        <a className={css.lienRea}>
                                            <i class="fas fa-angle-right"></i> {rea.titre}
                                        </a>
                                    </Link>
                                    <ul>
                                        {rea.tags.map(tag => {
                                            return (
                                                <li>{tag.name}</li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            )
                        })}
                    
                </div>
            </div>
            <Footer/>
        </main>
        
    )
}