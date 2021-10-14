import css from './index.module.scss'
import Link from 'next/link'
import {Header} from '../component/header'

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
        </main>
        
    )
}