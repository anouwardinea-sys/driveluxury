// ------------------------------------------------------------------
// AnnouncementBar — ruban d'annonces anime sous/au-dessus du header.
//
// Plusieurs messages defilent en continu ("marquee") : support 24/7,
// annulation gratuite, meilleur prix, paiement securise, livraison a
// domicile. La liste est dupliquee une fois pour une boucle sans couture.
// Le defilement se met en pause au survol pour laisser lire.
// ------------------------------------------------------------------

import {
  Headset, ShieldCheck, BadgePercent, CreditCard, Truck, Sparkles,
} from 'lucide-react';

const messages = [
  { icon: Headset, text: '24/7 Customer Support' },
  { icon: Truck, text: 'Free Door Delivery & Pickup' },
  { icon: BadgePercent, text: 'Best Price Guarantee' },
  { icon: ShieldCheck, text: 'Free Cancellation up to 24h' },
  { icon: CreditCard, text: 'Secure Payments — Visa, Mastercard, PayPal' },
  { icon: Sparkles, text: 'New: Electric & Hybrid Fleet Available' },
];

export default function AnnouncementBar() {
  // On repete la liste deux fois : en translatant de -50% la boucle est
  // continue (la seconde moitie prend exactement la place de la premiere).
  const loop = [...messages, ...messages];

  return (
    <div className="hidden md:block bg-[#0f1419] text-slate-300 border-b border-white/5">
      <div className="dl-marquee overflow-hidden max-w-7xl mx-auto px-6 h-9 flex items-center">
        <div className="dl-marquee-track">
          {loop.map(({ icon: Icon, text }, i) => (
            <span
              key={`${text}-${i}`}
              className="flex items-center gap-2 text-[11px] font-medium pr-10 whitespace-nowrap"
            >
              <Icon className="w-3.5 h-3.5 text-[#f0a500] shrink-0" />
              {text}
              <span className="ml-8 text-slate-600" aria-hidden="true">•</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}