import css from './footer.module.scss'
import Link from 'next/link'

export function Footer(props) {
    return (
        <main className={css.footer}>
            <p>Alexis Flacher © 2022</p>
        </main>
    )
}