import { Clock, MapPin, Phone } from 'lucide-react';

export default function TopBar() {
  return (
    // Removed 'hidden md:block' to make it visible on mobile
    <div className="bg-slate-50 border-b border-slate-200 py-2 px-4">
      {/* Changed flex-col to flex-row for layout; added text-center/gap adjustments */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-slate-600">
        
        {/* Logo */}
        

        {/* Info Items - Now responsive */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-[10px] md:text-xs text-center md:text-left">
          {/* <div className="flex items-center gap-2">
            <Clock className="text-red-600 shrink-0" size={16} />
            <div>
              <p className="font-bold text-slate-800 uppercase">Working hours</p>
              <p>Mon-Sat 7AM-10PM</p>
            </div>
          </div> */}

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