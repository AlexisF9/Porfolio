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
                    <Link href={props.lienContact}>
                        <a className={css.lienHeader}><span></span>
                            Contact
                        </a>
                    </Link>
                </li>
            </ul>


            </div>
        </main>
        
    )
}