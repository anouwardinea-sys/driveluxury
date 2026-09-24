// ------------------------------------------------------------------
// HeroVideo — video de fond du hero (voiture qui roule sur une route).
//
// Pourquoi un composant dedie plutot qu'une simple balise <video> ?
//   1. Fiabilite mobile : beaucoup de navigateurs mobiles (iOS Safari,
//      Chrome Android en mode economie de donnees) ignorent l'attribut
//      `autoPlay` et laissent la video figee sur le poster. On force donc
//      la lecture via ref.play() des que la video est prete, et on
//      reessaie au premier geste de l'utilisateur (touch/scroll/click)
//      car certains navigateurs n'autorisent la lecture qu'apres une
//      interaction.
//   2. Poids : une seule source 720p (~2.8 Mo) est servie a tous, ce qui
//      se charge vite meme en 4G et evite l'echec du chargement.
//   3. Robustesse : si la video ne peut vraiment pas etre lue, on retombe
//      proprement sur l'image poster — la page reste belle.
// ------------------------------------------------------------------

import { useEffect, useRef } from 'react';
import { asset } from '../utils/asset';

export default function HeroVideo() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Tentative de lecture immediate (attributs autoPlay/muted/playsInline
    // suffisent souvent, mais pas toujours sur mobile).
    const tryPlay = () => {
      const p = video.play();
      if (p && typeof p.catch === 'function') {
        // Rejet normal quand le navigateur exige une interaction : on
        // l'ignore, le geste utilisateur ci-dessous relancera la lecture.
        p.catch(() => {});
      }
    };

    tryPlay();

    // Certains navigateurs ne lancent la lecture qu'apres une interaction.
    // On ecoute les gestes les plus courants une seule fois chacun.
    const onFirstGesture = () => tryPlay();
    const events = ['touchstart', 'pointerdown', 'click', 'scroll', 'keydown'];events.forEach((ev) => window.addEventListener(ev, onFirstGesture, { once: true, passive: true }));

    // Relance si l'onglet revient au premier plan (mobile met en pause le
    // fond quand on change d'app).
    const onVisible = () => {
      if (document.visibilityState === 'visible') tryPlay();
    };
    document.addEventListener('visibilitychange', onVisible);

    return () => {
      events.forEach((ev) => window.removeEventListener(ev, onFirstGesture));
      document.removeEventListener('visibilitychange', onVisible);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      className="dl-hero-video absolute inset-0 w-full h-full object-cover"
      autoPlay
      loop
      muted
      playsInline
      // Safari iOS : sans ceci la video peut ne pas se lancer inline.
      webkit-playsinline="true"
      // Charge des le depart : la video demarre pendant que la page s'affiche.
      preload="auto"
      aria-hidden="true"
      poster={asset('/videos/hero-car-poster.jpg')}
    >
      {/* 720p unique : ~2.8 Mo, se charge vite meme en mobilite. */}
      <source src={asset('/videos/hero-car-720.mp4')} type="video/mp4" />
    </video>
  );
}