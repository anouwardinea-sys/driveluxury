// ------------------------------------------------------------------
// HeroDrivingCar — la voiture du hero qui roule.
//
// Le PNG (benzclass.png) est detache sur fond blanc : on peut donc le
// deplacer librement sur la scene. L'animation combine :
//   1. un trajet de gauche a droite (drift) repete en boucle,
//   2. un leger tangage vertical (suspension sur une route irreguliere),
//   3. une route + des marquages qui defilent sous les roues.
// Tout est en CSS (keyframes dans index.css) pour rester fluide et
// n'utiliser aucune librairie d'animation supplementaire.
// ------------------------------------------------------------------

import { asset } from '../utils/asset';

export default function HeroDrivingCar() {
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 hidden lg:block">
      {/* ---------- ROUTE ---------- */}
      <div className="relative h-36">
        {/* lueur des phares projetee sur l'asphalte */}
        <div className="pointer-events-none absolute inset-x-0 bottom-16 h-10 bg-gradient-to-t from-[#f0a500]/10 to-transparent" />

        {/* asphalte */}
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-b from-[#232d37] via-[#161d24] to-[#0b1015]" />

        {/* bande de rive superieure */}
        <div className="absolute inset-x-0 bottom-20 h-[3px] bg-[#37454f]" />

        {/* marquages qui defilent */}
        <div className="absolute inset-x-0 bottom-9 h-[5px] overflow-hidden">
          <div className="dl-road-marks h-full" />
        </div>

        {/* la voiture — posee sur l'asphalte (h-20 = 80px), d'ou bottom-20 */}
        <div className="dl-car absolute bottom-20 left-0">
          <img
            src={asset('/images/benzclass.png')}
            alt="Mercedes-Benz G-Class driving"
            className="dl-car-body w-[380px] xl:w-[460px] drop-shadow-2xl"
          />

          {/* ombre portee au sol, qui pulse avec le tangage */}
          <div className="dl-car-shadow absolute -bottom-1 left-[10%] w-[80%] h-4 rounded-[50%] bg-black/50 blur-md" />
        </div>
      </div>
    </div>
  );
}
