import { useState } from 'react';
import {
  CalendarCheck, MapPin, Car, ShieldCheck, CreditCard, Wallet, Banknote,
  Building2, Apple, Check, Lock,
} from 'lucide-react';
import { cars, paymentMethods } from '../data/carsData';

// Resolution cle -> icone pour les moyens de paiement.
const payIcons = {
  card: CreditCard,
  paypal: Wallet,
  apple: Apple,
  wallet: Wallet,
  bank: Building2,
  cash: Banknote,
};

export default function Booking() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    carId: cars[0]?.id ?? '',
    pickup: '',
    dropoff: '',
    location: '',
    payment: 'card',
    days: 3,
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

  // Estimation du total : tarif journalier x nombre de jours + frais fixes.
  const days = Math.max(1, Number(form.days) || 1);
  const subtotal = (selected?.price ?? 0) * days;
  const insurance = 25 * days;
  const total = subtotal + insurance;

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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* ================= FORMULAIRE ================= */}
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-2 p-6 sm:p-8 rounded-2xl border-slate-200"
          >
            <h2 className="text-lg font-black text-[#0f1419]">Your details</h2>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
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
              <div>
                <label className={labelClass} htmlFor="days">Rental days</label>
                <input
                  id="days"
                  name="days"
                  type="number"
                  min="1"
                  max="60"
                  value={form.days}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
            </div>

            {/* ================= MOYENS DE PAIEMENT ================= */}
            <div className="mt-8 pt-6 border-t border-slate-200">
              <div className="flex items-center gap-2 mb-4">
                <CreditCard className="w-4 h-4 text-[#f0a500]" />
                <h2 className="text-lg font-black text-[#0f1419]">Payment method</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {paymentMethods.map((m) => {
                  const Icon = payIcons[m.icon] || CreditCard;
                  const active = form.payment === m.id;
                  return (
                    <label
                      key={m.id}
                      className={`flex items-start gap-3 p-4 rounded-xl border cursor-pointer transition ${
                        active
                          ? 'border-[#f0a500] bg-[#f0a500]/5 shadow-sm'
                          : 'border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <input
                        type="radio"
                        name="payment"
                        value={m.id}
                        checked={active}
                        onChange={handleChange}
                        className="sr-only"
                      />
                      <span
                        className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition ${
                          active ? 'bg-[#f0a500] text-white' : 'bg-slate-100 text-slate-500'
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                      </span>
                      <span className="flex-1">
                        <span className="flex items-center gap-1.5 text-sm font-bold text-[#0f1419]">
                          {m.label}
                          {active && <Check className="w-3.5 h-3.5 text-[#f0a500]" />}
                        </span>
                        <span className="block mt-0.5 text-[11px] text-slate-500">{m.hint}</span>
                      </span>
                    </label>
                  );
                })}
              </div>

              {/* Champs carte : affiches uniquement si paiement par carte */}
              {form.payment === 'card' && (
                <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="sm:col-span-2">
                    <label className={labelClass} htmlFor="cardNumber">Card number</label>
                    <input
                      id="cardNumber"
                      name="cardNumber"
                      inputMode="numeric"
                      placeholder="4242 4242 4242 4242"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="expiry">Expiry</label>
                    <input id="expiry" name="expiry" placeholder="MM / YY" className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="cvc">CVC</label>
                    <input id="cvc" name="cvc" inputMode="numeric" placeholder="123" className={inputClass} />
                  </div>
                </div>
              )}

              <p className="mt-4 flex items-center gap-2 text-[11px] text-slate-500">
                <Lock className="w-3.5 h-3.5 text-emerald-500" />
                Your payment details are encrypted and never stored on our servers.
              </p>
            </div>

            <button
              type="submit"
              className="mt-7 w-full py-3.5 rounded-lg bg-[#f0a500] hover:bg-[#d99200] text-white font-bold text-[12px] tracking-wide transition shadow-lg shadow-amber-500/25"
            >
              CONFIRM RESERVATION — ${total}
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

                {/* Detail du prix */}
                <div className="mt-5 pt-5 border-t border-slate-200 space-y-3 text-sm">
                  <div className="flex items-center justify-between text-slate-600">
                    <span>${selected.price} × {days} day{days > 1 ? 's' : ''}</span>
                    <span className="font-bold text-[#0f1419]">${subtotal}</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-600">
                    <span>Insurance (${25}/day)</span>
                    <span className="font-bold text-[#0f1419]">${insurance}</span>
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t border-slate-200">
                    <span className="font-bold text-[#0f1419]">Total</span>
                    <span className="text-xl font-black text-[#f0a500]">${total}</span>
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
