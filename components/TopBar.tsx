import { MapPin, Phone } from 'lucide-react';
import Link from 'next/link';

export default function TopBar() {
  return (
    <div className="bg-green-50 border-b border-slate-200 py-2 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-slate-600">
        
        {/* Logo - Now on the LEFT */}
        <Link href="/" className="flex items-center gap-3 group focus:outline-none">
          <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center bg-slate-50 border border-slate-100 shadow-sm">
            <img src="/assets/LOGO.PNG" alt="Adonai Ltd Logo" className="w-full h-full object-contain" />
          </div>
          <span className="font-bold text-xl tracking-tight text-slate-900 group-hover:text-emerald-600 transition-colors">
            Adonai<span className="text-emerald-600 group-hover:text-emerald-700"> Ltd</span>
          </span>
        </Link>

        {/* Information Items - Now on the RIGHT */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-[10px] md:text-xs text-center md:text-right">
          <div className="flex items-center gap-2">
            <MapPin className="text-green-600 shrink-0" size={16} />
            <div>
              <p className="font-bold text-slate-800 uppercase">Location</p>
              <p>Kigali - Gikondo - Magerwa</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Phone className="text-green-600 shrink-0" size={16} />
            <div>
              <p className="font-bold text-slate-800 uppercase">Call Us</p>
              <p>+250 788 302 147</p>
              <p>+250 788 312 156</p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}