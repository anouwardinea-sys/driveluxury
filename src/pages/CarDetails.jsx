import { Link, useParams } from 'react-router-dom';
import {
  Star, Users, Gauge, Fuel, Cog, ArrowLeft, ShieldCheck, Check, ArrowRight,
} from 'lucide-react';
import { cars } from '../data/carsData';

export default function CarDetails() {
  const { id } = useParams();
  const car = cars.find((c) => String(c.id) === id);

  // Véhicule introuvable → message clair plutôt qu'un écran vide
  if (!car) {
    return (
      <div className="bg-white min-h-[60vh] flex flex-col items-center justify-center px-6 text-center">
        <h1 className="text-3xl font-black text-[#0f1419]">Car not found</h1>
        <p className="mt-3 text-slate-500">
          This vehicle is no longer available in our fleet.
        </p>
        <Link
          to="/fleet"
          className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#f0a500] hover:bg-[#d99200] text-white font-bold text-[12px] tracking-wide transition"
        >
          <ArrowLeft className="w-4 h-4" /> BACK TO FLEET
        </Link>
      </div>
    );
  }

  const specs = [
    { icon: Users, label: 'Seats', value: `${car.seats} seats` },
    { icon: Cog, label: 'Transmission', value: car.transmission },
    { icon: Fuel, label: 'Fuel', value: car.fuel },
    { icon: Gauge, label: 'Top Speed', value: car.speed },
  ];

  const included = [
    'Third-party insurance',
    'Unlimited mileage',
    '24/7 roadside assistance',
    'Free cancellation up to 24h',
    'Airport pickup available',
    'Sanitised before every rental',
  ];

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <Link
          to="/fleet"
          className="inline-flex items-center gap-2 text-[12px] font-bold text-slate-500 hover:text-[#f0a500] transition"
        >
          <ArrowLeft className="w-4 h-4" /> BACK TO FLEET
        </Link>

        <div className="mt-8 grid-cols-1 lg:grid-cols-2 gap-10">
          {/* ================= IMAGE ================= */}
          <div className="relative rounded-2xl overflow-hidden border-slate-200 h-[340px] lg:h-[440px]">
            <img
              src={car.image}
              alt={car.name}
              className="w-full h-full object-cover"
            />
            <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-white/90 backdrop-blur text-[#f0a500]">
              {car.category}
            </span>
          </div>

          {/* ================= INFOS ================= */}
          <div>
            <div className="flex items-start justify-between gap-4">
              <h1 className="text-3xl sm:text-4xl font-black text-[#0f1419] tracking-tight leading-tight">
                {car.name}
              </h1>
              <div className="flex items-center gap-1 text-[#f0a500] shrink-0">
                <Star className="w-4 h-4 fill-[#f0a500]" />
                <span className="text-sm font-bold">{car.rating}</span>
              </div>
            </div>

            <p className="mt-4 text-slate-500 leading-relaxed">
              A premium {car.category.toLowerCase()} vehicle from our
              hand-picked fleet. Delivered to your door, fully insured and ready
              for the road.
            </p>

            {/* Spécifications */}
            <div className="mt-8 grid-cols-2 gap-4">
              {specs.map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 p-4 rounded-xl bg-slate-50"
                >
                  <Icon className="w-5 h-5 text-[#f0a500]" />
                  <div>
                    <span className="block text-[10px] uppercase tracking-wider text-slate-400 font-semibold">
                      {label}
                    </span>
                    <span className="text-sm font-bold text-[#0f1419]">{value}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Prix + CTA */}
            <div className="mt-8 p-6 rounded-2xl border-slate-200 bg-slate-50">
              <div className="flex items-end justify-between">
                <div>
                  <span className="text-3xl font-black text-[#0f1419]">${car.price}</span>
                  <span className="text-sm text-slate-500"> /day</span>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase ${
                    car.available
                      ? 'bg-emerald-500/15 text-emerald-600'
                      : 'bg-red-500/15 text-red-500'
                  }`}
                >
                  {car.available ? 'Available' : 'Booked'}
                </span>
              </div>

              <Link
                to="/booking"
                className={`mt-5 w-full py-3.5 rounded-lg font-bold text-[12px] tracking-wide inline-flex items-center justify-center gap-2 transition ${
                  car.available
                    ? 'bg-[#f0a500] hover:bg-[#d99200] text-white shadow-lg shadow-amber-500/25'
                    : 'bg-slate-200 text-slate-400 pointer-events-none'
                }`}
              >
                {car.available ? 'BOOK THIS CAR' : 'TEMPORARILY BOOKED'}
                {car.available && <ArrowRight className="w-4 h-4" />}
              </Link>
            </div>

            {/* Inclus */}
            <ul className="mt-8 grid-cols-1 sm:grid-cols-2 gap-3">
              {included.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <p className="mt-6 flex items-center gap-2 text-[12px] text-slate-400">
              <ShieldCheck className="w-4 h-4" />
              Fully insured · Free cancellation · No hidden fees
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
