import { Link } from 'react-router-dom';
// NOTE: dans cette version de lucide-react, les icônes Twitter/Linkedin ne sont
// plus exportées. On utilise des icônes disponibles pour ne pas casser le build.
import { Globe, AtSign, Share2, Send, MapPin, Mail, Phone, ArrowRight } from 'lucide-react';
import { asset } from '../utils/asset';

const columns = [
  {
    title: 'Company',
    links: [
      { name: 'About Us', to: '/about' },
      { name: 'Our Fleet', to: '/fleet' },
      { name: 'Services', to: '/services' },
      { name: 'Contact', to: '/contact' },
    ],
  },
  {
    title: 'Support',
    links: [
      { name: 'Help Center', to: '/contact' },
      { name: 'Booking', to: '/booking' },
      { name: 'Terms & Conditions', to: '/contact' },
      { name: 'Privacy Policy', to: '/contact' },
    ],
  },
  {
    title: 'Top Cities',
    links: [
      { name: 'New York', to: '/locations' },
      { name: 'Los Angeles', to: '/locations' },
      { name: 'Miami', to: '/locations' },
      { name: 'Dubai', to: '/locations' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#080b0d] border-t border-slate-800/70 mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Grille equil libre : la marque occupe 2 colonnes, puis chaque
            rubrique de liens 1 colonne. Total 6 en desktop. */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img
                src={asset('/brand/logo-mark.png')}
                alt="DriveX"
                width="40"
                height="40"
                className="w-10 h-10 rounded-xl shadow-md shadow-amber-500/30"
              />
              <div>
                <span className="text-xl font-black tracking-tight text-white block leading-none">
                  Drive<span className="text-[#f0a500]">X</span>
                </span>
                <span className="text-[9px] tracking-[0.3em] text-slate-400 font-semibold uppercase">Car Rental</span>
              </div>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              Premium car rental made effortless. Drive the car you deserve, wherever the road takes you.
            </p>
            <div className="flex gap-3 mt-6">
              {[Globe, AtSign, Share2, Send].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-slate-800/60 flex items-center justify-center text-slate-400 hover:bg-[#f0a500] hover:text-white transition"
                  aria-label="social link"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-bold tracking-widest uppercase text-white mb-4">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.name}>
                    <Link to={link.to} className="text-sm text-slate-400 hover:text-[#f0a500] transition">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter + contact */}
          <div className="sm:col-span-2 lg:col-span-2 lg:pl-8 lg:border-l lg:border-slate-800/70">
            <h4 className="text-xs font-bold tracking-widest uppercase text-white mb-4">Stay in the loop</h4>
            <p className="text-sm text-slate-400 mb-4">Get exclusive offers and new arrivals.</p>
            <form className="flex gap-2 mb-6" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 min-w-0 px-3 py-2.5 rounded-lg bg-slate-800/60 border border-slate-700/70 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#f0a500] transition"
              />
              <button
                className="px-4 py-2.5 rounded-lg bg-[#f0a500] hover:bg-[#d99200] text-white transition shadow-lg shadow-amber-500/20"
                aria-label="Subscribe"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#f0a500] shrink-0" /> 24 Park Avenue, New York
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#f0a500] shrink-0" />
                <a href="mailto:hello@drivex.com" className="hover:text-[#f0a500] transition">hello@drivex.com</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#f0a500] shrink-0" />
                <a href="tel:+18001234567" className="hover:text-[#f0a500] transition">+1 (800) 123-4567</a>
              </li>
            </ul>
          </div>
        </div>

        {/* ============ BARRE DE COPYRIGHT ============ */}
        <div className="mt-12 pt-8 border-t border-slate-800/70">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Copyright + mentions legales */}
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-5 text-xs text-slate-500 text-center sm:text-left">
              <p>
                &copy; {new Date().getFullYear()}{' '}
                <span className="font-semibold text-slate-300">DriveX Car Rental</span>. All rights reserved.
              </p>
              <span className="hidden sm:block w-px h-3 bg-slate-700" aria-hidden="true" />
              <nav className="flex items-center gap-4">
                <Link to="/contact" className="hover:text-[#f0a500] transition">Terms</Link>
                <Link to="/contact" className="hover:text-[#f0a500] transition">Privacy</Link>
                <Link to="/contact" className="hover:text-[#f0a500] transition">Cookies</Link>
              </nav>
            </div>

            {/* Moyens de paiement acceptes */}
            <div className="flex items-center gap-4">
              <span className="text-[11px] text-slate-500 hidden sm:inline">Secure payments</span>
              <div className="flex items-center gap-2">
                {['VISA', 'MC', 'AMEX', 'PayPal', 'G Pay'].map((p) => (
                  <span
                    key={p}
                    className="px-2.5 py-1 rounded-md bg-slate-800/70 border border-slate-700/70 text-[10px] font-bold text-slate-300 tracking-wide"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Ligne du bas */}
          <div className="mt-6 pt-5 border-t border-slate-800/50 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-600">
            <p className="flex items-center gap-1.5">
              Designed with
              <span className="text-[#f0a500]">&#10084;</span>
              for the road.
            </p>
            <p>Prices in USD &middot; Taxes may apply at checkout</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
