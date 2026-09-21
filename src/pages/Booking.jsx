import { useState } from 'react';
import { CalendarCheck, MapPin, Car, ShieldCheck } from 'lucide-react';
import { cars } from '../data/carsData';

export default function Booking() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    carId: cars[0]?.id ?? '',
    pickup: '',
    dropoff: '',
    location: '',
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Pas de backend : on confirme simplement la prise en compte côté client.
    setSent(true);
  };

  const selected = cars.find((c) => String(c.id) === String(form.carId));

  const inputClass =
    'w-full px-4 py-3 rounded-lg border-slate-200 text-sm text-[#0f1419] ' +
    'placeholder:text-slate-400 focus:outline-none focus:border-[#f0a500] focus:ring-2 ' +
    'focus:ring-[#f0a500]/20 transition';

  const labelClass =
    'block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2';

  return (
    <div className="bg-white">
      <section className="bg-[#0f1419] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-[11px] font-bold tracking-[0.3em] text-[#f0a500] uppercase">
            Booking
          </span>
          <h1 className="mt-3 text-4xl sm:text-5xl font-black text-white tracking-tight">
            Reserve your car
          </h1>
          <p className="mt-4 text-slate-400 max-w-xl">
            Fill in the details below and we will confirm your reservation
            within minutes. Free cancellation up to 24 hours before pickup.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid-cols-1 lg:grid-cols-3 gap-8">
          {/* ================= FORMULAIRE ================= */}
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-2 p-6 sm:p-8 rounded-2xl border-slate-200"
          >
            <h2 className="text-lg font-black text-[#0f1419]">Your details</h2>

            <div className="mt-6 grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className={labelClass} htmlFor="name">Full name</label>
                <input
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="John Carter"
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass} htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="you@email.com"
                  className={inputClass}
                />
              </div>
              <div className="sm:col-span-2">
                <label className={labelClass} htmlFor="carId">Vehicle</label>
                <select
                  id="carId"
                  name="carId"
                  value={form.carId}
                  onChange={handleChange}
                  className={inputClass}
                >
                  {cars.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.name} — ${c.price}/day
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className={labelClass} htmlFor="pickup">Pick-up date</label>
                <input
                  id="pickup"
                  name="pickup"
                  type="date"
                  value={form.pickup}
                  onChange={handleChange}
                  required
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass} htmlFor="dropoff">Return date</label>
                <input
                  id="dropoff"
                  name="dropoff"
                  type="date"
                  value={form.dropoff}
                  onChange={handleChange}
                  required
                  className={inputClass}
                />
              </div>
              <div className="sm:col-span-2">
                <label className={labelClass} htmlFor="location">Pick-up location</label>
                <input
                  id="location"
                  name="location"
                  value={form.location}
                  onChange={handleChange}
                  required
                  placeholder="Address, airport or city"
                  className={inputClass}
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-7 w-full py-3.5 rounded-lg bg-[#f0a500] hover:bg-[#d99200] text-white font-bold text-[12px] tracking-wide transition shadow-lg shadow-amber-500/25"
            >
              CONFIRM RESERVATION
            </button>

            {sent && (
              <div className="mt-5 p-4 rounded-xl bg-emerald-500/10 border-emerald-500/30 text-emerald-600 text-sm font-semibold">
                Thank you {form.name || 'driver'} — your request for the{' '}
                {selected?.name} has been received. We will email you shortly.
              </div>
            )}
          </form>

          {/* ================= RÉCAPITULATIF ================= */}
          <aside className="p-6 rounded-2xl bg-slate-50 h-fit">
            <h2 className="text-lg font-black text-[#0f1419]">Summary</h2>

            {selected ? (
              <>
                <div className="mt-5 rounded-xl overflow-hidden">
                  <img
                    src={selected.image}
                    alt={selected.name}
                    className="w-full h-40 object-cover"
                  />
                </div>
                <h3 className="mt-4 font-bold text-[#0f1419]">{selected.name}</h3>
                <p className="text-[12px] text-slate-500 uppercase tracking-wider mt-1">
                  {selected.category}
                </p>

                <div className="mt-5 pt-5 border-t border-slate-200 space-y-3 text-sm">
                  <div className="flex items-center justify-between text-slate-600">
                    <span className="flex items-center gap-2">
                      <CalendarCheck className="w-4 h-4" /> Daily rate
                    </span>
                    <span className="font-bold text-[#0f1419]">${selected.price}</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-600">
                    <span className="flex items-center gap-2">
                      <Car className="w-4 h-4" /> Seats
                    </span>
                    <span className="font-bold text-[#0f1419]">{selected.seats}</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-600">
                    <span className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" /> Location
                    </span>
                    <span className="font-bold text-[#0f1419]">
                      {form.location || '—'}
                    </span>
                  </div>
                </div>
              </>
            ) : (
              <p className="mt-4 text-sm text-slate-500">Select a vehicle to begin.</p>
            )}

            <p className="mt-5 pt-5 border-t border-slate-200 flex items-start gap-2 text-[12px] text-slate-500">
              <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              Insurance and unlimited mileage included in every booking.
            </p>
          </aside>
        </div>
      </section>
    </div>
  );
}
