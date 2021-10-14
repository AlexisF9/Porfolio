import css from './footer.module.scss'
import Link from 'next/link'

export function Footer(props) {
    return (
        <main className={css.footer}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#0a202b" fill-opacity="1" d="M0,192L1440,64L1440,320L0,320Z"></path>
            </svg>
        </main>
    )
}