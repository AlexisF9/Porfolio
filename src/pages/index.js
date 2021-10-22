import css from './index.module.scss'
import Link from 'next/link'
import {Header} from '../component/header'
import {createRef, useEffect} from "react";

export async function getServerSideProps() { // appel du json pour rendre le contenu dynamique
    const urlServ = process.env.NODE_ENV === "development" ?  "http://localhost:3000/" : "https://portfolio-tau-tawny.vercel.app/";
    const res = await fetch(`${urlServ}data/realisations.json`)
    const realisations = await res.json()

    /*
    const reaPath = path.join(process.cwd(), 'public/data/realisations.json');
    const res = await fs.readFile(reaPath);
    const realisations = JSON.parse(res);
    */

    return {
        props: { 
            realisations
        }
    }
}

export default function Home({realisations}) {

    const fond = createRef();
    const image = createRef();
    const imageModal = createRef();
    const title = createRef();
    const text = createRef();
    const lienProjet = createRef();
    const modal = createRef();
    const overlay = createRef();
    
    useEffect(() => {
        fond.current.classList.add(css.fond);
    }, []);
    
    return (
        <div className={css.contentAccueil}>
            <div ref={fond}>
                <span>Alexis Flacher</span>
            </div>
            <Header title="Alexis Flacher" subtitle="Développeur Front & Webdesigner" lienAbout="/posts/about" lienContact="/posts/contact" />
            <div className={css.content}>
                <div>
                    <h2>Mes réalisations :</h2>
                    
                    {realisations.map(rea => {
                        return (
                            <div className={css.listeLien} key={rea.id}>
                                {/*<Link href={`/posts/realisations/${rea.id}`}>*/}
                                <Link href={`/`}>
                                    <a className={css.lienRea}
                                        onMouseEnter={() => {
                                            image.current.classList.add(css.active);
                                            image.current.src = rea.img;
                                            imageModal.current.src = rea.img;
                                            text.current.innerHTML=rea.text;
                                            title.current.innerHTML=rea.titre;
                                            lienProjet.current.href=rea.url_repo;
                                        }}
                                        onMouseLeave={() => {
                                            //image.current.classList.remove(css.active);
                                        }}
                                        onClick={() => {
                                            
                                            modal.current.classList.add(css.open);
                                            overlay.current.classList.add(css.overlayOpen);
                                        }}
                                    >
                                        <i class="fas fa-angle-right"></i> {rea.titre}
                                    </a>
                                </Link>
                                <ul>
                                    {rea.tags.map((tag, index) => {
                                        return (
                                            <li key={index}>{tag}</li>
                                        )
                                    })}
                                </ul>
                            </div>
                        )
                    })}
                </div>
                <img className={css.image} ref={image}/>
            </div>

            <div className={css.overlay} ref={overlay}
            onClick={() => {                 
                modal.current.classList.remove(css.open);
                overlay.current.classList.remove(css.overlayOpen);
            }}></div>
            <div id="myModal" className={css.modal} ref={modal}>
                <div class="modal-content">
                    <span 
                    className={css.close}
                    onClick={() => {
                        modal.current.classList.remove(css.open);
                        overlay.current.classList.remove(css.overlayOpen);
                    }}
                    >&times;</span>
                    <h3 ref={title}></h3>
                    <p ref={text}></p>
                    <i class="fas fa-link"></i> <a ref={lienProjet} target="_blank"><span></span>Code source du projet</a>
                    <img className={css.imageModal} ref={imageModal}/>
                </div>
            </div>
        </div>
        
    )
}