import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, ArrowRight, Car } from 'lucide-react';

const locations = [
  {
    city: 'New York',
    address: '24 Park Avenue, Manhattan',
    phone: '+1 (800) 123-4567',
    hours: '8am – 9pm daily',
    cars: 34,
  },
  {
    city: 'Los Angeles',
    address: '1100 Sunset Boulevard',
    phone: '+1 (800) 123-4568',
    hours: '7am – 10pm daily',
    cars: 28,
  },
  {
    city: 'Miami',
    address: '500 Ocean Drive, South Beach',
    phone: '+1 (800) 123-4569',
    hours: '8am – 10pm daily',
    cars: 21,
  },
  {
    city: 'Dubai',
    address: 'Sheikh Zayed Road, Downtown',
    phone: '+971 4 123 4567',
    hours: '24 hours',
    cars: 40,
  },
  {
    city: 'Paris',
    address: '18 Champs-Élysées, 8e',
    phone: '+33 1 23 45 67 89',
    hours: '8am – 8pm daily',
    cars: 19,
  },
  {
    city: 'London',
    address: '42 Oxford Street, Mayfair',
    phone: '+44 20 1234 5678',
    hours: '8am – 8pm daily',
    cars: 23,
  },
];

export default function Locations() {
  const [query, setQuery] = useState('');

  const filtered = locations.filter(
    (l) =>
      l.city.toLowerCase().includes(query.toLowerCase()) ||
      l.address.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="bg-white">
      <section className="bg-[#0f1419] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-[11px] font-bold tracking-[0.3em] text-[#f0a500] uppercase">
            Locations
          </span>
          <h1 className="mt-3 text-4xl sm:text-5xl font-black text-white tracking-tight">
            Pick up anywhere
          </h1>
          <p className="mt-4 text-slate-400 max-w-xl">
            Six cities, dozens of pickup points, and door delivery almost
            everywhere. Find the branch closest to you.
          </p>

          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search a city or address…"
            className="mt-7 w-full max-w-md px-4 py-3 rounded-lg border-slate-200 text-sm text-[#0f1419] placeholder:text-slate-400 focus:outline-none focus:border-[#f0a500] focus:ring-2 focus:ring-[#f0a500]/20 transition"
          />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((l) => (
            <div
              key={l.city}
              className="p-6 rounded-2xl border-slate-200 hover:border-[#f0a500]/50 hover:shadow-lg transition duration-300"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#f0a500]/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#f0a500]" />
                </div>
                <span className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-500">
                  <Car className="w-3.5 h-3.5" />
                  {l.cars} cars
                </span>
              </div>

              <h3 className="mt-4 text-lg font-black text-[#0f1419]">{l.city}</h3>
              <p className="mt-1 text-sm text-slate-500">{l.address}</p>

              <div className="mt-4 pt-4 border-t border-slate-100 space-y-2 text-sm text-slate-600">
                <a href={`tel:${l.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 hover:text-[#f0a500] transition">
                  <Phone className="w-3.5 h-3.5 text-slate-400" />
                  {l.phone}
                </a>
                <span className="flex items-center gap-2 text-slate-500">{l.hours}</span>
              </div>

              <Link
                to="/booking"
                className="mt-5 inline-flex items-center gap-1.5 text-[12px] font-bold text-slate-600 hover:text-[#f0a500] transition"
              >
                BOOK AT THIS BRANCH <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-slate-500 py-20">
            No branch matches “{query}”. Try another city.
          </p>
        )}
      </section>
    </div>
  );
}
