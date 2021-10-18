import Link from 'next/link'
import css from './index.module.scss'
import {Header} from '../../../component/header'
import {createRef, useEffect} from "react";

export default function About() {

  const fond = createRef();

  useEffect(() => {
      fond.current.classList.add(css.fond);
    }, []);

  return (
    <>
    <div className={css.about}>
      <div ref={fond}>
        <span>Alexis Flacher</span>
      </div>
      <Header title="About" subtitle="" lienAbout="/posts/about" lienContact="/posts/contact" />

      <div className={css.AboutContent}>
        <div className={css.content}>
          <div>
            <img src="../img/AlexisFlacher.jpg"/>
            <ul>
              <li><i class="fas fa-angle-right"></i> 20 ans</li>
              <li><i class="fas fa-angle-right"></i> Mordu d'échecs</li>
              <li><i class="fas fa-angle-right"></i> Grand fan de café</li>
            </ul>
          </div>
          <p>Actuellement en troisième année du Bachelor Développeur Web de <a href="https://www.hetic.net/" target="_blank"><span></span>HETIC</a>  à Paris, je suis en alternance dans l'agence <a href="https://www.tbwa-paris.com/en" target="_blank"><span></span>TBWA\Paris</a> en tant que développeur front-end.</p>
          <i class="fab fa-github"></i> <a className={css.gitHub} href="https://github.com/AlexisF9" target="_blank">Mon GitHub</a>
          <p>Je sort d'un <a href="https://iut1.univ-grenoble-alpes.fr/iut1/mmi-formation-200348.kjsp" target="_blank"><span></span>DUT MMI</a> à Grenoble qui m'a permis d’acquérir une expertise globale sur les métiers du multimédia et de l’internet et de maîtriser des compétences techniques polyvalentes. Cette formation couvre tous les champs du digital. De la réalisation de sites internet à l’animation de communautés, de la création vidéo à la conception de contenus.</p>
          <p>Je maîtrise différents langages informatiques tels que le HTML, CSS/SASS, JavaScript et PHP. J'ai également des connaissances dans l'outil GIT et GitHub, mais également dans la gestion de projet.</p>
          <i class="fas fa-download"></i> <a className={css.monCV} href="/AlexisFlacher CV.pdf" target="_blank">Telecharger mon CV</a>
        </div>
      </div>
      
    </div>
      
    </>
  )
}

 