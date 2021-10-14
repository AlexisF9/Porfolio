import css from './footer.module.scss'
import Link from 'next/link'

export function Footer(props) {
    return (
        <main className={css.footer}>
            <a href="https://www.linkedin.com/in/alexis-flacher-772ba7197/" target="_blank"><i class="fab fa-linkedin"></i></a>
            <a href="https://github.com/AlexisF9" target="_blank"><i class="fab fa-github-square"></i></a>
            <p>Alexis Flacher - 2021</p>
        </main>
    )
}