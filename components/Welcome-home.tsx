"use client";
import React from 'react';
import Image from 'next/image';
import { Shield, Globe, Award, ArrowUpRight } from 'lucide-react';

// Define the interface for props to accept view changes dynamically
interface WelcomeHomeProps {
  onViewChange: (viewName: string) => void;
}

export default function WelcomeHome({ onViewChange }: WelcomeHomeProps) {
  // Your exact partner assets matched systematically
  const partnerLogos = [
    { name: "Africa Global Logistics (AGL)", src: "/assets/PARTERNS/images.png" },
    { name: "EziMovers", src: "/assets/PARTERNS/images (1).jfif" },
    { name: "Rwanda Airports Company", src: "/assets/PARTERNS/images (2).jfif" },
    { name: "Mikumi Freight Forwarders", src: "/assets/PARTERNS/images (3).jfif" },
    { name: "DP World", src: "/assets/PARTERNS/logo_1576363480.png" },
    { name: "Magerwa", src: "/assets/PARTERNS/magerwa_logo.jfif" },
  ];

  // We duplicate the array to ensure an infinite, unbroken visual loop
  const continuousLoopLogos = [...partnerLogos, ...partnerLogos];

  return (
    <section id="welcome" className="relative min-h-[90vh] flex flex-col justify-between bg-[#fdfdfd] overflow-hidden pt-24 border-b border-stone-200">
      
      {/* --- CLASSIC ARCHITECTURAL BACKGROUND --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img 
          src="/assets/slide-1.PNG" 
          alt="Adonai Network Background" 
          className="w-full h-full object-cover opacity-[0.02] filter grayscale"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(66, 180, 180, 0.4),transparent_70%)]"></div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-8 w-full flex-grow">
        
        {/* Executive Header Tag */}
        <div className="flex items-center gap-3 mb-10 animate-fadeIn">
          <div className="h-[1px] w-12 bg-stone-300"></div>
          <div className="flex items-center gap-1.5 text-stone-500 text-xs font-semibold uppercase tracking-[0.2em]">
            <Award size={13} className="text-emerald-700 font-bold" /> Adonai Limited Corporate Portal
          </div>
        </div>

        {/* Master Editorial Headline */}
        <h1 className="text-4xl sm:text-6xl font-serif text-stone-900 tracking-tight leading-[1.15] max-w-4xl mb-8">
          Moving Global Trade. <br />
          <span className="font-sans font-normal italic text-green-700">
            Securing Your Trust.
          </span>
        </h1>

        {/* Refined Executive Summary */}
        <p className="text-stone-600 text-base sm:text-lg font-normal max-w-2xl leading-relaxed mb-16 border-l-2 border-emerald-600 pl-6">
          We engineer highly secure, fully compliant multi-border freight forwarding pathways designed to keep corporate commercial supply streams moving forward across international boundaries with absolute predictability.
        </p>

        {/* THE THREE STRATEGIC GATEWAYS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left border-t border-stone-200 pt-12">
          
          {/* Gateway 1: Services */}
          <button 
            onClick={() => onViewChange("services")} 
            className="group cursor-pointer text-left text-stone-900 bg-transparent border-none p-0 w-full block space-y-4"
          >
            <div className="flex items-center justify-between">
              <div className="text-xs uppercase tracking-[0.15em] font-bold text-stone-400 group-hover:text-emerald-700 transition-colors">01 / Capabilities</div>
              <ArrowUpRight size={16} className="text-stone-300 group-hover:text-emerald-700 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </div>
            <h3 className="font-serif text-xl font-medium tracking-tight group-hover:text-emerald-700 transition-colors">Our Logistics Solutions</h3>
            <p className="text-stone-500 text-xs leading-relaxed">
              Explore our nine core multi-border vectors, custom clearance frameworks, and regional ground infrastructure.
            </p>
          </button>

          {/* Gateway 2: Why Us / Network */}
          <button 
            onClick={() => onViewChange("whyus")} 
            className="group cursor-pointer text-left text-stone-900 bg-transparent border-none p-0 w-full block space-y-4 border-t border-stone-200 md:border-t-0 md:border-x border-stone-200 pt-8 md:pt-0 md:px-8"
          >
            <div className="flex items-center justify-between">
              <div className="text-xs uppercase tracking-[0.15em] font-bold text-stone-400 group-hover:text-emerald-700 transition-colors">02 / Value Proposition</div>
              <ArrowUpRight size={16} className="text-stone-300 group-hover:text-emerald-700 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </div>
            <h3 className="font-serif text-xl font-medium tracking-tight group-hover:text-emerald-700 transition-colors">Why Choose Adonai</h3>
            <p className="text-stone-500 text-xs leading-relaxed">
              Review our compliance standards, performance guarantees, and dedicated operational clearance nodes.
            </p>
          </button>

          {/* Gateway 3: Contact */}
          <button 
            onClick={() => onViewChange("contact")} 
            className="group cursor-pointer text-left text-stone-900 bg-transparent border-none p-0 w-full block space-y-4 border-t border-stone-200 md:border-t-0 pt-8 md:pt-0"
          >
            <div className="flex items-center justify-between">
              <div className="text-xs uppercase tracking-[0.15em] font-bold text-stone-400 group-hover:text-emerald-700 transition-colors">03 / Allocation</div>
              <ArrowUpRight size={16} className="text-stone-300 group-hover:text-emerald-700 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </div>
            <h3 className="font-serif text-xl font-medium tracking-tight group-hover:text-emerald-700 transition-colors">Request Cargo Rates</h3>
            <p className="text-stone-500 text-xs leading-relaxed">
              Connect directly with our central brokerage desk to deploy operational clearance parameters for your line.
            </p>
          </button>

        </div>
      </div>

      {/* --- INFINITE SMOOTH LOGO SLIDER FOOTER --- */}
      <div className="w-full bg-stone-100 border-t border-stone-200 py-10 relative z-10">
        <div className="max-w-6xl mx-auto px-6 mb-5 flex items-center justify-between">
          <span className="text-[11px] uppercase tracking-[0.2em] text-stone-600 font-bold">Trusted Operations Network</span>
          <div className="flex gap-4 text-[11px] uppercase tracking-widest text-stone-500 font-bold">
            <span className="flex items-center gap-1"><Shield size={12} className="text-emerald-700" /> Authorized Clearance</span>
            <span>|</span>
            <span className="flex items-center gap-1"><Globe size={12} className="text-emerald-700" /> Regional Scope</span>
          </div>
        </div>

        {/* Hidden Overflow Scrolling Window */}
        <div className="relative w-full flex overflow-x-hidden">
          {/* Subtle Fading Edge Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-stone-100 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-stone-100 to-transparent z-10 pointer-events-none"></div>

          {/* The Moving Animated Track */}
          <div className="flex gap-8 items-center animate-scroll whitespace-nowrap min-w-full py-3">
            {continuousLoopLogos.map((logo, index) => (
              <div 
                key={index} 
                className="flex items-center justify-center min-w-[160px] h-20 relative bg-white border border-stone-200 rounded-xl p-4 shadow-xs hover:border-emerald-500/50 hover:shadow-md transition-all duration-300 ease-in-out"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  fill
                  sizes="160px"
                  className="object-contain p-2"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}