"use client";
import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { SERVICES_DATA } from '@/data/services';

export default function Services() {
  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 block mb-2">Our Capabilities</span>
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-3">Logistics Capabilities</h2>
          <p className="text-slate-600 text-sm">
            Swipe or scroll through our premium logistics vectors and global clearance setups.
          </p>
        </div>

        {/* --- HORIZONTAL SCROLL CAROUSEL CONTAINER --- */}
        <div className="flex gap-6 overflow-x-auto pb-8 pt-2 px-1 scrollbar-hide snap-x snap-mandatory -mx-6 md:mx-0">
          {Object.entries(SERVICES_DATA).map(([id, service]) => (
            <div key={id} className="w-[290px] sm:w-[320px] shrink-0 snap-start first:ml-6 md:first:ml-0 last:mr-6 md:last:mr-0">
              <Link href={`/services/${id}`} className="bg-white rounded-2xl overflow-hidden shadow-xs border border-slate-200/60 hover:shadow-md hover:border-emerald-500/40 transition-all group block h-full">
                <div className="h-40 overflow-hidden relative">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"/>
                </div>
                <div className="p-5">
                  <div className="w-9 h-9 bg-emerald-600/10 text-emerald-600 rounded-xl flex items-center justify-center mb-3">
                    {React.cloneElement(service.icon, { size: 18 })}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-600 transition-colors flex items-center justify-between">
                    {service.title}
                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-all text-emerald-600 transform translate-x-[-4px] group-hover:translate-x-0" />
                  </h3>
                  <p className="text-slate-500 text-xs mt-1.5 line-clamp-2 leading-relaxed">{service.summary}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}