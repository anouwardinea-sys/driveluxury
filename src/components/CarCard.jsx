import { Star, Users, Gauge, Fuel, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CarCard({ car }) {
  return (
    <article className="group relative rounded-2xl overflow-hidden bg-white border-slate-200 hover:border-[#f0a500]/50 hover:shadow-xl transition flex duration-300 flex-col">
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={car.image}
          alt={car.name}
          loading="lazy"
          className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />

        {/* Category badge */}
        <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-white/90 backdrop-blur text-[#f0a500]">
          {car.category}
        </span>

        {/* Availability badge */}
        <span
          className={`absolute top-4 right-4 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase backdrop-blur ${
            car.available
              ? 'bg-emerald-500/90 text-white'
              : 'bg-red-500/90 text-white'
          }`}
        >
          {car.available ? 'Available' : 'Booked'}
        </span>
      </div>

      {/* Body */}
      <div className="p-5 flex-col flex-1">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-base font-bold text-[#0f1419] leading-tight">{car.name}</h3>
          <div className="flex items-center gap-1 text-[#f0a500] shrink-0">
            <Star className="w-3.5 h-3.5 fill-[#f0a500]" />
            <span className="text-xs font-semibold">{car.rating}</span>
          </div>
        </div>

        {/* Specs */}
        <div className="mt-4 grid grid-cols-3 gap-2 text-[11px] text-slate-400">
          <div className="flex items-center gap-1.5">
            <Users className="w-3.5 h-3.5 text-slate-500" />
            {car.seats} seats
          </div>
          <div className="flex items-center gap-1.5">
            <Gauge className="w-3.5 h-3.5 text-slate-500" />
            {car.speed}
          </div>
          <div className="flex items-center gap-1.5">
            <Fuel className="w-3.5 h-3.5 text-slate-500" />
            {car.fuel}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
          <div>
            <span className="text-lg font-black text-[#0f1419]">${car.price}</span>
            <span className="text-xs text-slate-500"> /day</span>
          </div>
          <Link
            to={`/cars/${car.id}`}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold tracking-wide bg-[#f0a500] hover:bg-[#d99200] text-white transition"
          >
            DETAILS <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
