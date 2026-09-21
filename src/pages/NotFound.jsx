import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="bg-white min-h-[60vh] flex flex-col items-center justify-center px-6 text-center">
      <span className="text-[11px] font-bold tracking-[0.3em] text-[#f0a500] uppercase">
        Error 404
      </span>
      <h1 className="mt-3 text-5xl font-black text-[#0f1419] tracking-tight">
        Page not found
      </h1>
      <p className="mt-4 text-slate-500 max-w-md">
        The page you are looking for does not exist or has been moved. Let us
        get you back on the road.
      </p>
      <Link
        to="/"
        className="mt-7 inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-[#f0a500] hover:bg-[#d99200] text-white font-bold text-[12px] tracking-wide transition shadow-lg shadow-amber-500/25"
      >
        <ArrowLeft className="w-4 h-4" /> BACK TO HOME
      </Link>
    </div>
  );
}
