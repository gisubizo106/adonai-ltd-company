import React from 'react';
import { Building2 } from 'lucide-react'; // Remove Users since it's no longer used

export default function About() {
  return (
    <section id="about" className="py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- PART 1: CORPORATE PROFILE (Kept) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-100">
              <img 
                src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1000&q=80" 
                alt="Shipping Terminal" 
                className="w-full object-cover h-[450px]" 
              />
            </div>
            <div className="absolute -bottom-6 -right-4 bg-emerald-600 text-white p-6 rounded-xl shadow-xl max-w-xs">
              <div className="text-sm font-bold uppercase tracking-wider text-emerald-100">Mission Driven</div>
              <div className="text-xs leading-relaxed mt-2 font-medium">To provide reliable, efficient, and cost-effective logistics solutions that connect businesses worldwide.</div>
            </div>
          </div>
          
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 block mb-2">Corporate Profile</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-6">ADONAI Ltd — Connecting Markets through Seamless Logistics</h2>
            <p className="text-slate-600 mb-4">ADONAI Ltd is a trusted logistics, freight forwarding, customs clearance, and supply chain solutions company dedicated to providing reliable, efficient, and cost-effective services.</p>
            <p className="text-slate-600">We specialize in international and domestic transportation, cargo handling, customs brokerage, warehousing, and door-to-door delivery. With a commitment to integrity, professionalism, and customer satisfaction, we connect businesses and individuals to global markets through seamless logistics solutions.</p>
          </div>
        </div>

      </div>
    </section>
  );
}