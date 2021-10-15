import Link from 'next/link'
import {Header} from '../../../component/header'
import css from './index.module.scss'

export default function Contact() {
  return (
      <div className={css.contentContact}>
        <Header title="Contact" subtitle="" lienAbout="/posts/about" lienContact="/posts/contact" />
        <div className={css.lienContact}>
          <p>Pour me contacter, vous pouvez m'envoyer un mail à <a href="mailto:alexis.flacher38@gmail.com"><span></span>alexis.flacher38@gmail.com</a>.</p>
          <p>Vous pouvez aussi me contacter sur mon <a href="https://www.linkedin.com/in/alexis-flacher-772ba7197/"><span></span>LinkedIn</a>.</p>
          <p>Ou encore par <a href="tel:+33643194093"><span></span>téléphone</a>.</p>
        </div>
      </div>
  )
}