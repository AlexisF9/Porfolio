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
  const imageModal2 = createRef();
  const imageModal3 = createRef();

  const title = createRef();
  const text = createRef();
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
      <Header
        title="Alexis Flacher"
        subtitle="Développeur Frontend chez TBWA\Paris"
        urlLogo="/img/tbwa-logo.jpg"
        lienAbout="/about"
      />
      <div className={css.content}>
        <div className={css.projects}>
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
                        imageModal2.current.src = rea.img2;
                        imageModal3.current.src = rea.img3;

                        text.current.innerHTML = rea.text;
                        title.current.innerHTML = rea.titre;
                      }}
                      onClick={() => {
                        modal.current.classList.add(css.open);
                        overlay.current.classList.add(css.overlayOpen);
                      }}
                    >
                      <i class="fas fa-angle-right"></i> {rea.titre}
                    </a>
                  </Link>
                  {rea.url_repo != null && (
                    <Link href={rea.url_repo}>
                      <a className={css.lienRepo}>
                        <i class="fas fa-link"></i>
                      </a>
                    </Link>
                  )}
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
            {image2 != null && (
              <img alt="" className={css.image2} ref={image2} />
            )}
            <img alt="" className={css.image} ref={image} />
            {image3 != null && (
              <img alt="" className={css.image3} ref={image3} />
            )}
          </div>
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
          <img alt="" className={css.imageModal} ref={imageModal} />
          <img alt="" className={css.imageModal2} ref={imageModal2} />
          <img alt="" className={css.imageModal3} ref={imageModal3} />
        </div>
      </div>
    </div>
  );
}
