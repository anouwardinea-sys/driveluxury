import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { asset } from '../utils/asset';
import {
  Menu, X, ArrowRight, Phone, ShieldCheck, ChevronDown, Headset, Car,
} from 'lucide-react';

export default function Navbar() {
    // État pour ouvrir/fermer le menu mobile sur les petits écrans
    const [isOpen, setIsOpen] = useState(false);

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

    // Infos de la barre supérieure (comme sur la maquette)
    const topInfos = [
        { icon: Headset, text: '24/7 Customer Support' },
        { icon: Car, text: 'Free Cancellation' },
        { icon: ShieldCheck, text: 'Best Price Guarantee' },
      ];

      return (
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">

          {/* ============ BARRE SUPÉRIEURE (TOP BAR) ============ */}
          <div className="hidden md:block bg-[#0f1419] text-slate-300">
            <div className="max-w-7xl mx-auto px-6 h-9 flex items-center justify-between text-[11px] font-medium">
              <div className="flex items-center gap-7">
                {topInfos.map(({ icon: Icon, text }) => (
                  <span key={text} className="flex items-center gap-2 hover:text-white transition">
                    <Icon className="w-3.5 h-3.5 text-slate-400" />
                    {text}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-6">
                <a href="tel:+18001234567" className="flex items-center gap-2 hover:text-white transition">
                  <Phone className="w-3.5 h-3.5 text-slate-400" />
                  +1 (800) 123-4567
                </a>
                <span className="flex items-center gap-1.5 cursor-pointer hover:text-white transition">
                  USD <ChevronDown className="w-3 h-3" />
                </span>
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

