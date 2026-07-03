"use client";
import React from 'react';
import { PARTNERS_CLIENTS } from '@/data/services';

export default function Network() {
  return (
    <section id="network" className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* --- HEADER --- */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 block mb-2">
            Our Corporate Ecosystem
          </span>
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
            Trusted Clients , Strategic Alliances & Testimonials
          </h2>
        </div>

        {/* --- PARTNERS & CLIENTS VIEW --- */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {PARTNERS_CLIENTS.map((entity, index) => {
            
            const clientSlug = entity.name
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, '-')
              .replace(/(^-|-$)/g, '');

            const entityType = (entity as { type?: string }).type ?? 'clients';

            return (
              <a 
                key={index} 
                href={`/network/${clientSlug}`}
                className="bg-white border border-slate-200/80 p-6 rounded-2xl flex flex-col items-center justify-center text-center transition-all duration-300 hover:shadow-md hover:border-emerald-500/30 group no-underline"
              >
                {/* Logo Wrapper Box */}
                <div className="w-full h-20 flex items-center justify-center p-2 mb-4 bg-slate-50/50 rounded-xl group-hover:bg-white transition-colors">
                  <img 
                    src={entity.image} 
                    alt={entity.name} 
                    className="max-w-full max-h-full object-contain filter grayscale contrast-125 group-hover:grayscale-0 transition-all duration-300 scale-95 group-hover:scale-100" 
                  />
                </div>
                
                {/* Title & Badge */}
                <div className="font-bold text-slate-800 text-sm group-hover:text-emerald-600 transition-colors line-clamp-1">
                  {entity.name}
                </div>
                <div className="text-[10px] uppercase font-bold tracking-wider text-slate-400 mt-1">
                  {entityType}
                </div>
              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
}