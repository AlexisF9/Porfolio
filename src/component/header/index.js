import css from './header.module.scss'
import Link from 'next/link'

export function Header(props) {
    return (
        <main className={css.header}>


            <Link href="/">
            
                <a>
                    <h1>{props.title}</h1>
                </a>
        
            </Link>

            <ul>
                <li>
                    <Link href={props.lienAbout}>
                        <a>
                            About
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href={props.lienContact}>
                        <a>
                            Contact
                        </a>
                    </Link>
                </li>
            </ul>

            
        </main>
    )
}