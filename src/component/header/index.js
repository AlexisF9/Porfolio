import css from './header.module.scss'
import Link from 'next/link'

export function Header(props) {
    return (
        <main className={css.header}>
            <div className={css.headerContent}>

            <div>
                <Link href="/">
                    <a>
                        <h1>{props.title}</h1>
                        <p>{props.subtitle}</p>
                    </a>
                </Link>
            </div>
            
            <ul>
                <li>
                    <Link href={props.lienAbout}>
                        <a className={css.lienHeader}><span></span>
                            About
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="https://github.com/AlexisF9">
                        <a className={css.lienGitHub} target="_blank">
                            <i class="fab fa-github"></i>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="mailto:alexis.flacher38@gmail.com">
                        <a className={css.lienEmail}>
                            <i class="far fa-envelope"></i>
                            <i class="far fa-envelope-open"></i>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="https://www.linkedin.com/in/alexis-flacher-772ba7197/">
                        <a className={css.lienLinkedin} target="_blank">
                            <i class="fab fa-linkedin-in"></i>
                        </a>
                    </Link>
                </li>
            </ul>


            </div>
        </main>
        
        
    )
}