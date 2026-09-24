import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const contactCards = [
  { icon: Phone, label: 'Call us', value: '+1 (800) 123-4567', href: 'tel:+18001234567' },
  { icon: Mail, label: 'Email us', value: 'hello@drivex.com', href: 'mailto:hello@drivex.com' },
  { icon: MapPin, label: 'Visit us', value: '24 Park Avenue, New York', href: null },
  { icon: Clock, label: 'Open hours', value: 'Mon–Sun · 8am – 9pm', href: null },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Pas de backend : confirmation locale uniquement.
    setSent(true);
    setForm({ name: '', email: '', message: '' });
  };

  const inputClass =
    'w-full px-4 py-3 rounded-lg border-slate-200 text-sm text-[#0f1419] ' +
    'placeholder:text-slate-400 focus:outline-none focus:border-[#f0a500] focus:ring-2 ' +
    'focus:ring-[#f0a500]/20 transition';

  return (
    <div className="bg-white">
      <section className="bg-[#0f1419] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-[11px] font-bold tracking-[0.3em] text-[#f0a500] uppercase">
            Contact Us
          </span>
          <h1 className="mt-3 text-4xl sm:text-5xl font-black text-white tracking-tight">
            We are here to help
          </h1>
          <p className="mt-4 text-slate-400 max-w-xl">
            A question about a car, a booking or a special request? Send us a
            message and a real person will get back to you.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {contactCards.map(({ icon: Icon, label, value, href }) => {
            const Wrapper = href ? 'a' : 'div';
            return (
              <Wrapper
                key={label}
                {...(href ? { href } : {})}
                className="block p-6 rounded-2xl border-slate-200 hover:border-[#f0a500]/50 hover:shadow-lg transition duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-[#f0a500]/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-[#f0a500]" />
                </div>
                <span className="mt-4 block text-[10px] uppercase tracking-wider text-slate-400 font-semibold">
                  {label}
                </span>
                <span className="mt-1 block text-sm font-bold text-[#0f1419]">{value}</span>
              </Wrapper>
            );
          })}
        </div>

        <form
          onSubmit={handleSubmit}
          className="max-w-2xl p-6 sm:p-8 rounded-2xl border-slate-200"
        >
          <h2 className="text-lg font-black text-[#0f1419]">Send a message</h2>

          <div className="mt-6 grid-cols-1 sm:grid-cols-2 gap-5">
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Your name"
              className={inputClass}
            />
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="you@email.com"
              className={inputClass}
            />
          </div>

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            rows={5}
            placeholder="How can we help?"
            className={`${inputClass} mt-5 resize-none`}
          />

          <button
            type="submit"
            className="mt-6 inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-[#f0a500] hover:bg-[#d99200] text-white font-bold text-[12px] tracking-wide transition shadow-lg shadow-amber-500/25"
          >
            SEND MESSAGE <Send className="w-4 h-4" />
          </button>

          {sent && (
            <div className="mt-5 p-4 rounded-xl bg-emerald-500/10 border-emerald-500/30 text-emerald-600 text-sm font-semibold">
              Message received — thank you. Our team will reply shortly.
            </div>
          )}
        </form>
      </section>
    </div>
  );
}
