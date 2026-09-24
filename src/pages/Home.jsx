import { Link } from 'react-router-dom';
import {
  ArrowRight, Star, ShieldCheck, Headset, RefreshCw, Tag, MapPin, Gauge,
  Car, CalendarCheck, KeyRound, Route, Search, ChevronDown, Quote, PlayCircle,
  Caravan, CarFront, Flame, Zap, Crown,
} from 'lucide-react';
import { cars, categories, features, steps, testimonials, stats, faqs } from '../data/carsData';
import CarCard from '../components/CarCard';
import HeroVideo from '../components/HeroVideo';

const iconMap = {
  shield: ShieldCheck,
  tag: Tag,
  headset: Headset,
  refresh: RefreshCw,
  map: MapPin,
  gauge: Gauge,
  car: Car,
  calendar: CalendarCheck,
  key: KeyRound,
  road: Route,
  // Icones des categories de vehicules
  caravan: Caravan,
  carFront: CarFront,
  flame: Flame,
  zap: Zap,
  crown: Crown,
};

export default function Home() {
  const featured = cars.filter((c) => c.featured).slice(0, 6);

  return (
    <div className="bg-white">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          {/* Video de fond : une voiture qui roule sur une route. */}
          <HeroVideo />

          {/* Voiles de contraste pour garder le texte lisible sur la video */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f1419]/95 via-[#0f1419]/80 to-[#0f1419]/30" />
          <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[#0f1419] via-[#0f1419]/70 to-transparent" />
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#0f1419]/80 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 pt-24 lg:pt-36 pb-52 lg:pb-64">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f0a500]/15 border-[#f0a500]/40 text-[#f0a500] text-xs font-semibold tracking-wider uppercase mb-6">
              <Star className="w-3.5 h-3.5 fill-[#f0a500]" /> Rated 4.9 by 15,000+ drivers
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight">
              Drive the car
              <span className="block text-[#f0a500]">you were born</span>
              to drive.
            </h1>
            <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed">
              Premium rental, zero hassle. Choose from our hand-picked fleet of luxury, sports and
              electric vehicles — delivered where you are, when you need it.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <Link
                to="/fleet"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#f0a500] hover:bg-[#d99200] text-white font-bold text-sm tracking-wide transition shadow-lg shadow-amber-500/25"
              >
                EXPLORE THE FLEET <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-slate-600 text-white font-bold text-sm tracking-wide hover:bg-white/10 transition"
              >
                <PlayCircle className="w-5 h-5 text-[#f0a500]" /> HOW IT WORKS
              </a>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="relative z-20 max-w-7xl mx-auto px-6 pb-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 rounded-2xl bg-[#12181d]/80 backdrop-blur border-slate-800/70 p-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-2xl sm:text-3xl font-black text-[#f0a500]">{s.value}</div>
                <div className="text-xs text-slate-400 tracking-wider uppercase mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SEARCH BAR ================= */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 -mt-8">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="grid grid-cols-1 md:grid-cols-4 gap-3 rounded-2xl bg-white border-slate-200 p-4 shadow-2xl shadow-slate-900/10"
        >
          <label className="flex flex-col gap-1 px-3 py-1">
            <span className="text-[10px] font-bold tracking-widest uppercase text-slate-500">Location</span>
            <input
              type="text"
              placeholder="City or airport"
              className="bg-transparent text-sm text-[#0f1419] placeholder-slate-400 focus:outline-none"
            />
          </label>
          <label className="flex flex-col gap-1 px-3 py-1 md:border-l border-slate-200">
            <span className="text-[10px] font-bold tracking-widest uppercase text-slate-500">Pick-up</span>
            <input type="date" className="bg-transparent text-sm text-[#0f1419] focus:outline-none" />
          </label>
          <label className="flex flex-col gap-1 px-3 py-1 md:border-l border-slate-200">
            <span className="text-[10px] font-bold tracking-widest uppercase text-slate-500">Return</span>
            <input type="date" className="bg-transparent text-sm text-[#0f1419] focus:outline-none" />
          </label>
          <button className="flex items-center justify-center gap-2 rounded-xl bg-[#f0a500] hover:bg-[#d99200] text-white font-bold text-sm tracking-wide transition py-3">
            <Search className="w-4 h-4" /> SEARCH
          </button>
        </form>
      </section>

      {/* ================= CATEGORIES ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <SectionHeading eyebrow="Browse by type" title="Car Categories" />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat) => {
            const Icon = iconMap[cat.icon] || Car;
            return (
              <Link
                to="/fleet"
                key={cat.id}
                className="group flex flex-col items-center gap-3 py-7 rounded-2xl bg-slate-50 border-slate-200 hover:border-[#f0a500]/50 hover:bg-white hover:shadow-lg transition"
              >
                <span className="w-14 h-14 rounded-full bg-[#f0a500]/10 text-[#f0a500] flex items-center justify-center group-hover:bg-[#f0a500] group-hover:text-white group-hover:scale-110 transition duration-300">
                  <Icon className="w-7 h-7" strokeWidth={1.75} />
                </span>
                <span className="text-sm font-bold text-[#0f1419]">{cat.name}</span>
                <span className="text-xs text-slate-500">{cat.count} cars</span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ================= FEATURED CARS ================= */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="flex items-end justify-between mb-10">
          <SectionHeading eyebrow="Handpicked for you" title="Choose Your Perfect Car" align="left" />
          <Link to="/fleet" className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-amber-400 hover:text-amber-300 transition">
            View all <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="bg-slate-50 border-y border-slate-200 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading eyebrow="The DriveLuxury difference" title="Why Choose Us" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => {
              const Icon = iconMap[f.icon] || ShieldCheck;
              return (
                <div
                  key={f.title}
                  className="group flex-col rounded-2xl bg-white border-slate-200 hover:border-[#f0a500]/50 hover:shadow-lg p-7 transition"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#f0a500]/10 flex items-center justify-center text-[#f0a500] mb-5 group-hover:bg-[#f0a500] group-hover:text-white transition">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-[#0f1419] mb-2">{f.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{f.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section id="how-it-works" className="max-w-7xl mx-auto px-6 py-20">
        <SectionHeading eyebrow="Simple as 1-2-3-4" title="How It Works" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => {
            const Icon = iconMap[step.icon] || Car;
            return (
              <div key={step.id} className="relative rounded-2xl bg-slate-50 border-slate-200 p-7">
                <span className="absolute top-5 right-6 text-4xl font-black text-slate-200 select-none">
                  0{i + 1}
                </span>
                <div className="w-12 h-12 rounded-xl bg-[#f0a500] flex items-center justify-center text-white mb-5">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#0f1419] mb-2">{step.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{step.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="bg-slate-50 border-y border-slate-200 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading eyebrow="Loved by drivers" title="What Our Clients Say" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <figure key={t.id} className="rounded-2xl bg-white border-slate-200 flex p-7 flex-col">
                <Quote className="w-8 h-8 text-[#f0a500]/40 mb-4" />
                <blockquote className="text-sm text-slate-600 leading-relaxed flex-1">{t.text}</blockquote>
                <div className="flex items-center gap-4 mt-6 pt-5 border-t border-slate-100">
                  <img src={t.avatar} alt={t.name} className="w-11 h-11 rounded-full object-cover" />
                  <div>
                    <figcaption className="text-sm font-bold text-[#0f1419]">{t.name}</figcaption>
                    <span className="text-xs text-slate-500">{t.role}</span>
                  </div>
                  <div className="ml-auto flex gap-0.5">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#f0a500] text-[#f0a500]" />
                    ))}
                  </div>
                </div>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <SectionHeading eyebrow="Good to know" title="Frequently Asked Questions" />
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <details
              key={i}
              className="group rounded-2xl bg-slate-50 border-slate-200 open:border-[#f0a500]/40 px-6 py-4"
            >
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <span className="text-sm font-semibold text-[#0f1419]">{f.q}</span>
                <ChevronDown className="w-4 h-4 text-[#f0a500] transition group-open:rotate-180" />
              </summary>
              <p className="mt-3 text-sm text-slate-500 leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="relative overflow-hidden rounded-3xl border-amber-500/30">
          <img
            src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1600&q=80"
            alt="Road trip"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b0f12] via-[#0b0f12]/85 to-transparent" />
          <div className="relative px-8 sm:px-14 py-16 max-w-xl">
            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
              Ready to hit the road? Let us handle the wheels.
            </h2>
            <p className="mt-4 text-slate-300 text-sm sm:text-base">
              Book in under two minutes. Free cancellation, unlimited mileage and 24/7 support included.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <Link
                to="/booking"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#f0a500] hover:bg-[#d99200] text-white font-bold text-sm tracking-wide transition shadow-lg shadow-amber-500/25"
              >
                BOOK NOW <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-slate-600 text-white font-bold text-sm tracking-wide hover:bg-white/10 transition"
              >
                TALK TO US
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function SectionHeading({ eyebrow, title, align = 'center' }) {
  return (
    <div className={align === 'center' ? 'text-center mb-12' : 'mb-2'}>
      <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#f0a500]">{eyebrow}</span>
      <h2 className="mt-2 text-2xl sm:text-4xl font-black text-[#0f1419] tracking-tight">{title}</h2>
    </div>
  );
}
