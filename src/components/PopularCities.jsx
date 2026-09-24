// ------------------------------------------------------------------
// PopularCities — grille de villes ou louer une voiture.
//
// Chaque carte est un visuel (image Unsplash) avec un degrade pour
// garder le texte lisible, un badge "from $X/day" et le nombre de
// vehicules disponibles. Au survol : zoom doux de l'image + apparition
// d'une fleche. Le composant est purement presentatif (donnees en props).
// ------------------------------------------------------------------

import { Link } from 'react-router-dom';
import { MapPin, Car, ArrowRight } from 'lucide-react';

export default function PopularCities({ cities }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {cities.map((city, i) => (
        <Link
          key={city.id}
          to="/locations"
          // On decale legerement l'apparition de chaque carte pour un
          // effet "cascade" agreable au premier rendu.
          style={{ animationDelay: `${i * 70}ms` }}
          className="dl-city-card dl-reveal group relative h-64 rounded-2xl overflow-hidden border-slate-200 hover:shadow-xl transition"
        >
          <img
            src={city.image}
            alt={city.name}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Degrade pour la lisibilite du texte */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f1419] via-[#0f1419]/40 to-transparent" />

          {/* Badge prix */}
          <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#f0a500] text-white text-[11px] font-bold shadow-lg">
            from ${city.from}/day
          </span>

          <div className="absolute inset-x-0 bottom-0 p-5">
            <span className="flex items-center gap-1.5 text-[11px] font-semibold text-[#f0a500] uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5" />
              {city.country}
            </span>
            <h3 className="mt-1.5 text-xl font-black text-white">{city.name}</h3>
            <div className="mt-2 flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-[12px] text-slate-300">
                <Car className="w-3.5 h-3.5" />
                {city.cars} cars available
              </span>
              <span className="w-8 h-8 rounded-full bg-white/15 backdrop-blur flex items-center justify-center text-white group-hover:bg-[#f0a500] transition">
                <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}