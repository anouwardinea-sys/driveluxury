import { Link } from 'react-router-dom';
import { Car, CalendarCheck, KeyRound, Route, ArrowRight } from 'lucide-react';
import { steps } from '../data/carsData';

const iconMap = { car: Car, calendar: CalendarCheck, key: KeyRound, road: Route };

const services = [
  {
    title: 'Self-Drive Rental',
    text: 'Pick up the keys and go. Flexible daily, weekly and monthly plans on every car in the fleet.',
    price: 'from $120 / day',
  },
  {
    title: 'Chauffeur Service',
    text: 'A professional driver for airport transfers, business meetings or a night out in the city.',
    price: 'from $180 / day',
  },
  {
    title: 'Airport Transfer',
    text: 'Meet-and-greet at arrivals with a sign, luggage help and a car waiting at the kerb.',
    price: 'from $90 / trip',
  },
  {
    title: 'Weddings & Events',
    text: 'Make the day memorable with a decorated flagship car and a dedicated driver.',
    price: 'from $400 / day',
  },
  {
    title: 'Long-Term Lease',
    text: 'Keep a car for a month or more at a reduced rate, with servicing and insurance included.',
    price: 'custom quote',
  },
  {
    title: 'Door Delivery',
    text: 'We bring the car to your home, office or hotel — and collect it when you are done.',
    price: 'free in city',
  },
];

export default function Services() {
  return (
    <div className="bg-white">
      <section className="bg-[#0f1419] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-[11px] font-bold tracking-[0.3em] text-[#f0a500] uppercase">
            Services
          </span>
          <h1 className="mt-3 text-4xl sm:text-5xl font-black text-white tracking-tight">
            More than just a rental
          </h1>
          <p className="mt-4 text-slate-400 max-w-xl">
            Whatever the occasion, we have a service that fits — and a car that
            makes it memorable.
          </p>
        </div>
      </section>

      {/* ================= COMMENT ÇA MARCHE ================= */}
      <section className="max-w-7xl mx-auto px-6 py-16 border-b border-slate-200">
        <h2 className="text-2xl font-black text-[#0f1419] tracking-tight mb-10">
          How it works
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => {
            const Icon = iconMap[step.icon] || Car;
            return (
              <div key={step.id} className="relative p-6 rounded-2xl bg-slate-50">
                <span className="absolute top-6 right-6 text-3xl font-black text-slate-200">
                  0{i + 1}
                </span>
                <div className="w-11 h-11 rounded-xl bg-[#f0a500] flex items-center justify-center">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="mt-4 font-bold text-[#0f1419]">{step.title}</h3>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed">{step.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ================= NOS SERVICES ================= */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-black text-[#0f1419] tracking-tight mb-10">
          Our services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="p-6 rounded-2xl border-slate-200 hover:border-[#f0a500]/50 hover:shadow-lg transition flex duration-300 flex-col"
            >
              <h3 className="font-bold text-[#0f1419]">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-500 leading-relaxed flex-1">{s.text}</p>
              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-sm font-bold text-[#f0a500]">{s.price}</span>
                <Link
                  to="/booking"
                  className="inline-flex items-center gap-1.5 text-[12px] font-bold text-slate-600 hover:text-[#f0a500] transition"
                >
                  BOOK <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
