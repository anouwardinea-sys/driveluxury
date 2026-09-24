import { useState } from 'react';
import { SlidersHorizontal, Caravan, CarFront, Flame, Zap, Crown } from 'lucide-react';
import { cars, categories } from '../data/carsData';
import CarCard from '../components/CarCard';

const categoryIcons = {
  caravan: Caravan,
  carFront: CarFront,
  flame: Flame,
  zap: Zap,
  crown: Crown,
};

export default function Fleet() {
  const [active, setActive] = useState('all');

  // Tri : les vraies sportives (sporty) remontent toujours en premier,
  // puis prix décroissant pour un affichage cohérent.
  const sortedCars = [...cars].sort(
    (a, b) => (b.sporty ? 1 : 0) - (a.sporty ? 1 : 0) || b.price - a.price
  );

  const filtered =
    active === 'all'
      ? sortedCars
      : sortedCars.filter((c) => c.category.toLowerCase() === active);

  return (
    <div className="bg-white">
      {/* ================= EN-TÊTE ================= */}
      <section className="bg-[#0f1419] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-[11px] font-bold tracking-[0.3em] text-[#f0a500] uppercase">
            Our Fleet
          </span>
          <h1 className="mt-3 text-4xl sm:text-5xl font-black text-white tracking-tight">
            Choose Your Perfect Car
          </h1>
          <p className="mt-4 text-slate-400 max-w-xl">
            A hand-picked selection of luxury, SUV and family vehicles — all
            maintained to the highest standard and ready to drive today.
          </p>
        </div>
      </section>

      {/* ================= FILTRES + GRILLE ================= */}
      <section className="max-w-7xl mx-auto px-6 py-14">
        <div className="flex items-center justify-between flex-wrap gap-4 mb-10">
          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={() => setActive('all')}
              className={`px-4 py-2 rounded-lg text-[12px] font-bold tracking-wide transition ${
                active === 'all'
                  ? 'bg-[#f0a500] text-white shadow-md shadow-amber-500/25'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              ALL CARS
            </button>
            {categories.map((cat) => {
              const Icon = categoryIcons[cat.icon];
              return (
                <button
                  key={cat.id}
                  onClick={() => setActive(cat.id)}
                  className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-[12px] font-bold tracking-wide transition ${
                    active === cat.id
                      ? 'bg-[#f0a500] text-white shadow-md shadow-amber-500/25'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {Icon && <Icon className="w-3.5 h-3.5" strokeWidth={2} />}
                  {cat.name.toUpperCase()}
                </button>
              );
            })}
          </div>

          <span className="flex items-center gap-2 text-[12px] font-semibold text-slate-500">
            <SlidersHorizontal className="w-4 h-4" />
            {filtered.length} vehicles
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-slate-500 py-20">
            No vehicles in this category yet.
          </p>
        )}
      </section>
    </div>
  );
}
