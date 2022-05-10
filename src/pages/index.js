import css from "./index.module.scss";
import Link from "next/link";
import { Header } from "component/header";
import { createRef, useEffect, useState } from "react";

export async function getServerSideProps() {
  // appel du json pour rendre le contenu dynamique
  const urlServ =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000/"
      : "https://portfolio-tau-tawny.vercel.app/";
  const res = await fetch(`${urlServ}data/realisations.json`);
  const realisations = await res.json();

  return {
    props: {
      realisations,
    },
  };
}

export default function Home({ realisations }) {
  const fond = createRef();
  const image = createRef();
  const image2 = createRef();
  const image3 = createRef();
  const listImg = createRef();
  const imageModal = createRef();
  const title = createRef();
  const text = createRef();
  const lienProjet = createRef();
  const modal = createRef();
  const overlay = createRef();

  const [urlRepo, setUrlRepo] = useState();

  useEffect(() => {
    fond.current.classList.add(css.fond);
  }, []);

  return (
    <div className={css.contentAccueil}>
      <div ref={fond}>
        <span>Alexis Flacher</span>
      </div>
      <Header
        title="Alexis Flacher"
        subtitle="Développeur Front & Webdesigner"
        lienAbout="/about"
      />
      <div className={css.content}>
        <div>
          <h2>Mes réalisations :</h2>

          {realisations.map((rea, index) => {
            return (
              <div className={css.listeLien} key={index}>
                <Link href={`/`}>
                  <a
                    className={css.lienRea}
                    onMouseEnter={() => {
                      image.current.src = rea.img;
                      image2.current.src = rea.img2;
                      image3.current.src = rea.img3;
                      listImg.current.classList.add(css.active);

                      imageModal.current.src = rea.img;
                      text.current.innerHTML = rea.text;
                      title.current.innerHTML = rea.titre;
                      if (rea.url_repo != null) {
                        setUrlRepo(rea.url_repo);
                      }
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
                    return <li key={index}>{tag}</li>;
                  })}
                </ul>
              </div>
            );
          })}
        </div>
        <div
          className={css.listImages}
          ref={listImg}
          onClick={() => {
            modal.current.classList.add(css.open);
            overlay.current.classList.add(css.overlayOpen);
          }}
        >
          {image2 != null && <img alt="" className={css.image2} ref={image2} />}
          <img alt="" className={css.image} ref={image} />
          {image3 != null && <img alt="" className={css.image3} ref={image3} />}
        </div>
      </div>

      <div
        className={css.overlay}
        ref={overlay}
        onClick={() => {
          modal.current.classList.remove(css.open);
          overlay.current.classList.remove(css.overlayOpen);
        }}
      ></div>

      <div id="myModal" className={css.modal} ref={modal}>
        <div className={css.modalContent}>
          <span
            className={css.close}
            onClick={() => {
              modal.current.classList.remove(css.open);
              overlay.current.classList.remove(css.overlayOpen);
            }}
          >
            &times;
          </span>
          <h3 ref={title}></h3>
          <p ref={text}></p>
          {urlRepo && (
            <>
              <i class="fas fa-link"></i>
              <a href={urlRepo}>
                <span></span>Code source du projet
              </a>
            </>
          )}
          <img alt="" className={css.imageModal} ref={imageModal} />
        </div>
      </div>
    </div>
  );
}
