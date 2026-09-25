// ------------------------------------------------------------------
// PaymentLogos — logos officiels des moyens de paiement.
//
// Les SVG sont dans src/assets/payments et importes en texte brut via
// `?raw` (support natif de Vite), puis injectes en inline : aucune
// requete reseau, et le logo occupe toute la place de sa pastille.
//
// Les logos "carte" (Visa, Mastercard, Amex) sont les visuels officiels
// avec leur propre fond colore : on les affiche tels quels, arrondis.
// PayPal / Google Pay / Apple Pay sont monochromes : ils sont poses sur
// une pastille blanche et teintes a la couleur de la marque.
// ------------------------------------------------------------------

import visaSvg from '../assets/payments/visa.svg?raw';
import mastercardSvg from '../assets/payments/mastercard.svg?raw';
import amexSvg from '../assets/payments/amex.svg?raw';
import paypalSvg from '../assets/payments/paypal.svg?raw';
import googlepaySvg from '../assets/payments/googlepay.svg?raw';
import applepaySvg from '../assets/payments/applepay.svg?raw';

const methods = [
  { name: 'Visa', svg: visaSvg, card: true },
  { name: 'Mastercard', svg: mastercardSvg, card: true },
  { name: 'American Express', svg: amexSvg, card: true },
  { name: 'PayPal', svg: paypalSvg, card: false, brand: 'paypal' },
  { name: 'Google Pay', svg: googlepaySvg, card: false, brand: 'googlepay' },
  { name: 'Apple Pay', svg: applepaySvg, card: false, brand: 'applepay' },
];

export default function PaymentLogos({ className = '', size = 'md' }) {
  // Hauteur de la pastille ; la largeur suit l'echelle du logo.
  const heights = { sm: 'h-6', md: 'h-8', lg: 'h-10' };

  return (
    <ul className={`flex flex-wrap items-center gap-2 ${className}`}>
      {methods.map((m) => (
        <li
          key={m.name}
          title={m.name}
          aria-label={m.name}
          className={`${heights[size]} dl-pay-item ${
            m.card ? 'dl-pay-card' : `dl-pay-plain dl-pay-brand-${m.brand}`
          } rounded-md overflow-hidden flex items-center justify-center transition hover:-translate-y-0.5`}
        >
          <span
            className="dl-pay-logo block h-full"
            // Le markup provient de nos propres fichiers du depot : aucun
            // contenu utilisateur, donc pas de risque d'injection.
            dangerouslySetInnerHTML={{ __html: m.svg }}
          />
        </li>
      ))}
    </ul>
  );
}
