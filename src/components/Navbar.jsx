import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { asset } from '../utils/asset';
import AnnouncementBar from './AnnouncementBar';
import {
  Menu, X, ArrowRight, Phone, ChevronDown,
  Globe, Check, MapPin,
} from 'lucide-react';

// Pays + devise proposes dans le selecteur de la barre superieure.
// Le choix est purement cote client (site de demo sans backend).
const regions = [
  { code: 'US', label: 'United States', currency: 'USD', symbol: '$', lang: 'English' },
  { code: 'MA', label: 'Maroc', currency: 'MAD', symbol: 'DH', lang: 'Français' },
  { code: 'AE', label: 'United Arab Emirates', currency: 'AED', symbol: 'د.إ', lang: 'English' },
  { code: 'FR', label: 'France', currency: 'EUR', symbol: '€', lang: 'Français' },
  { code: 'GB', label: 'United Kingdom', currency: 'GBP', symbol: '£', lang: 'English' },
  { code: 'ES', label: 'España', currency: 'EUR', symbol: '€', lang: 'Español' },
];

export default function Navbar() {
    // État pour ouvrir/fermer le menu mobile sur les petits écrans
    const [isOpen, setIsOpen] = useState(false);

    // Selecteur de pays / devise (ouvre un petit menu deroulant).
    const [regionOpen, setRegionOpen] = useState(false);
    const [region, setRegion] = useState(regions[0]);
    const regionRef = useRef(null);

    // Ferme le menu pays si on clique en dehors.
    useEffect(() => {
      const onClick = (e) => {
        if (regionRef.current && !regionRef.current.contains(e.target)) {
          setRegionOpen(false);
        }
      };
      document.addEventListener('mousedown', onClick);
      return () => document.removeEventListener('mousedown', onClick);
    }, []);

    // Permet de savoir sur quelle page l'utilisateur se trouve pour mettre en surbrillance le lien actif
    const location = useLocation();

    const navLinks = [
        { name: 'HOME', path: '/' },
        { name: 'VEHICLES', path: '/fleet' },
        { name: 'LOCATIONS', path: '/locations' },
        { name: 'DEALS', path: '/deals' },
        { name: 'SERVICES', path: '/services' },
        { name: 'ABOUT US', path: '/about' },
        { name: 'CONTACT US', path: '/contact' },
      ];

      return (
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">

          {/* ============ BARRE SUPERIEURE (TOP BAR) ============ */}
          {/* Banniere d'annonces qui defile, surmontee du selecteur
              pays / devise a droite. */}
          <div className="hidden md:block bg-[#0f1419] text-slate-300 border-b border-white/5">
            {/* Ruban anime des annonces */}
            <AnnouncementBar />

            {/* Ligne utilitaire : telephone + selection pays/devise */}
            <div className="max-w-7xl mx-auto px-6 h-10 flex items-center justify-between text-[11px] font-medium border-t border-white/5">
              <div className="flex items-center gap-6">
                <a href="tel:+18001234567" className="flex items-center gap-2 hover:text-white transition">
                  <Phone className="w-3.5 h-3.5 text-[#f0a500]" />
                  +1 (800) 123-4567
                </a>
                <span className="hidden lg:flex items-center gap-2 text-slate-400">
                  <MapPin className="w-3.5 h-3.5 text-slate-500" />
                  120+ pickup points worldwide
                </span>
              </div>

              {/* Selecteur pays + devise (avec options) */}
              <div className="relative" ref={regionRef}>
                <button
                  type="button"
                  onClick={() => setRegionOpen((v) => !v)}
                  className="flex items-center gap-2 hover:text-white transition"
                  aria-haspopup="listbox"
                  aria-expanded={regionOpen}
                >
                  <Globe className="w-3.5 h-3.5 text-[#f0a500]" />
                  <span>{region.label}</span>
                  <span className="text-slate-500">| {region.currency} {region.symbol}</span>
                  <ChevronDown className={`w-3 h-3 transition ${regionOpen ? 'rotate-180' : ''}`} />
                </button>

                {regionOpen && (
                  <div className="absolute right-0 top-full mt-2 w-64 rounded-xl bg-white shadow-2xl border border-slate-200 py-2 z-50">
                    <p className="px-4 pb-2 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Country &amp; currency
                    </p>
                    {regions.map((r) => (
                      <button
                        key={r.code}
                        type="button"
                        onClick={() => { setRegion(r); setRegionOpen(false); }}
                        className="w-full flex items-center gap-3 px-4 py-2.5 text-left text-[12px] text-[#0f1419] hover:bg-slate-50 transition"
                      >
                        <span className="w-6 text-[10px] font-bold text-slate-400">{r.code}</span>
                        <span className="flex-1 font-semibold">{r.label}</span>
                        <span className="text-[11px] text-slate-500">{r.currency} {r.symbol}</span>
                        {region.code === r.code && (
                          <Check className="w-3.5 h-3.5 text-[#f0a500]" />
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* ============ NAVBAR PRINCIPAL ============ */}
          <div className="max-w-7xl mx-auto px-6 h-[72px] flex items-center justify-between">

            {/* 1. LOGO DE LA MARQUE */}
            <Link to="/" className="flex items-center gap-2.5 group" aria-label="DriveX Car Rental">
              <img
                src={asset('/brand/logo-mark.png')}
                alt="DriveX"
                width="40"
                height="40"
                className="w-10 h-10 rounded-xl shadow-md shadow-amber-500/30 group-hover:scale-105 transition duration-300"
              />
              <div className="leading-none">
                <span className="text-xl font-black tracking-tight text-[#0f1419] block">
                  Drive<span className="text-[#f0a500]">X</span>
                </span>
                <span className="text-[9px] tracking-[0.3em] text-slate-500 font-semibold uppercase">
                  Car Rental
                </span>
              </div>
            </Link>
    
            {/* 2. LIENS DE NAVIGATION (Desktop) */}
            <nav className="hidden lg:flex items-center gap-7 text-[12px] font-semibold tracking-wide text-slate-600">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`transition duration-200 hover:text-[#f0a500] ${
                      isActive ? 'text-[#f0a500] font-bold' : ''
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* 3. BOUTON D'ACTION RAPIDE (CTA) */}
            <div className="hidden lg:block">
              <Link
                to="/booking"
                className="px-6 py-3 rounded-lg bg-[#f0a500] hover:bg-[#d99200] text-white font-bold text-[12px] tracking-wide transition shadow-lg shadow-amber-500/25 flex items-center gap-2"
              >
                BOOK NOW <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* 4. BOUTON MENU MOBILE (Burger pour tablettes et téléphones) */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-slate-700 hover:text-[#f0a500] p-2 focus:outline-none transition"
                aria-label="Menu"
                aria-expanded={isOpen}
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
    
          </div>
    
          {/* MENU Déroulant MOBILE (S'affiche si isOpen est true) */}
          {isOpen && (
            <div className="lg:hidden bg-white border-t border-slate-200 px-6 py-5 space-y-4 shadow-xl">
              <nav className="flex flex-col space-y-1 text-[13px] font-semibold tracking-wide">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsOpen(false)} // Ferme le menu au clic
                    className={`py-3 border-b border-slate-100 transition ${
                      location.pathname === link.path ? 'text-[#f0a500] font-bold' : 'text-slate-600 hover:text-[#f0a500]'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
              <div className="pt-2">
                <Link
                  to="/booking"
                  onClick={() => setIsOpen(false)}
                  className="w-full py-3.5 rounded-lg bg-[#f0a500] hover:bg-[#d99200] text-white font-bold text-[12px] tracking-wide flex items-center justify-center gap-2 shadow-md transition"
                >
                  BOOK NOW <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <a
                href="tel:+18001234567"
                className="flex items-center justify-center gap-2 pt-2 text-[12px] text-slate-500"
              >
                <Phone className="w-3.5 h-3.5" /> +1 (800) 123-4567
              </a>
            </div>
          )}
        </header>
      );
    }

