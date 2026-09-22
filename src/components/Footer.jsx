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
];

export default function Footer() {
  return (
    <footer className="bg-[#080b0d] border-t border-slate-800/70 mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
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
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase text-white mb-4">Stay in the loop</h4>
            <p className="text-sm text-slate-400 mb-4">Get exclusive offers and new arrivals.</p>
            <form className="flex gap-2 mb-6" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 min-w-0 px-3 py-2 rounded-lg bg-slate-800/60 border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#f0a500]"
              />
              <button className="px-3 py-2 rounded-lg bg-[#f0a500] hover:bg-[#d99200] text-white transition" aria-label="Subscribe">
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-[#f0a500]" /> 24 Park Avenue, New York</li>
              <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-[#f0a500]" /> hello@drivex.com</li>
              <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-[#f0a500]" /> +1 (800) 123-4567</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-slate-800/70 flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} DriveX Car Rental. All rights reserved.</p>
          <p>Designed with passion for the road.</p>
        </div>
      </div>
    </footer>
  );
}
