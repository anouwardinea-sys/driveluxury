import { Link } from 'react-router-dom';
import { Tag, Clock, Percent, ArrowRight, Star } from 'lucide-react';
import { cars } from '../data/carsData';

const deals = [
  {
    icon: Percent,
    badge: 'WEEKEND',
    title: 'Weekend Escape — 20% off',
    text: 'Book any car for Friday to Monday and get 20% off the daily rate. Perfect for a short getaway.',
    code: 'WEEKEND20',
    expires: 'Valid until end of month',
  },
  {
    icon: Clock,
    badge: 'LONG TERM',
    title: 'Weekly Rental — 30% off',
    text: 'Keep the car for seven days or more and pay only 70% of the normal daily price. Insurance included.',
    code: 'WEEK30',
    expires: 'Ongoing offer',
  },
  {
    icon: Tag,
    badge: 'FIRST RIDE',
    title: 'New Customer — $50 off',
    text: 'Your first booking with DriveX comes with a $50 discount applied automatically at checkout.',
    code: 'WELCOME50',
    expires: 'One per customer',
  },
];

export default function Deals() {
  // Trois voitures mises en avant comme offres du moment
  const featured = cars.filter((c) => c.available).slice(0, 3);

  return (
    <div className="bg-white">
      <section className="bg-[#0f1419] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-[11px] font-bold tracking-[0.3em] text-[#f0a500] uppercase">
            Deals
          </span>
          <h1 className="mt-3 text-4xl sm:text-5xl font-black text-white tracking-tight">
            Offers on the road
          </h1>
          <p className="mt-4 text-slate-400 max-w-xl">
            Real discounts, no fine print. Apply a promo code at checkout and
            the price drops immediately.
          </p>
        </div>
      </section>

      {/* ================= OFFRES ================= */}
      <section className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {deals.map(({ icon: Icon, badge, title, text, code, expires }) => (
            <div
              key={code}
              className="relative p-6 rounded-2xl bg-slate-50 border-slate-200 hover:border-[#f0a500]/50 hover:shadow-lg transition duration-300"
            >
              <span className="absolute top-6 right-6 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider bg-[#f0a500] text-white">
                {badge}
              </span>

              <div className="w-11 h-11 rounded-xl bg-[#f0a500]/10 flex items-center justify-center">
                <Icon className="w-5 h-5 text-[#f0a500]" />
              </div>

              <h3 className="mt-4 font-black text-[#0f1419] leading-tight">{title}</h3>
              <p className="mt-2 text-sm text-slate-500 leading-relaxed">{text}</p>

              <div className="mt-5 pt-4 border-t border-slate-200 flex items-center justify-between gap-3">
                <span className="px-3 py-1.5 rounded-lg border-dashed border-[#f0a500] text-[12px] font-black tracking-wider text-[#f0a500]">
                  {code}
                </span>
                <span className="text-[11px] text-slate-400">{expires}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= VOITURES EN PROMO ================= */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <h2 className="text-2xl font-black text-[#0f1419] tracking-tight mb-8">
          Cars included in these deals
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((car) => (
            <Link
              key={car.id}
              to={`/cars/${car.id}`}
              className="group rounded-2xl overflow-hidden border-slate-200 hover:border-[#f0a500]/50 hover:shadow-lg transition duration-300"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={car.image}
                  alt={car.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-white/90 backdrop-blur text-[#f0a500]">
                  {car.category}
                </span>
              </div>

              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-bold text-[#0f1419] leading-tight">{car.name}</h3>
                  <span className="flex items-center gap-1 text-[#f0a500] shrink-0">
                    <Star className="w-3.5 h-3.5 fill-[#f0a500]" />
                    <span className="text-xs font-semibold">{car.rating}</span>
                  </span>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <span className="text-lg font-black text-[#0f1419]">${car.price}</span>
                    <span className="text-xs text-slate-500"> /day</span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-[12px] font-bold text-slate-600 group-hover:text-[#f0a500] transition">
                    VIEW <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
