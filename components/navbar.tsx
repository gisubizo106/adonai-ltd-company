// 1. THIS CRITICAL LINE MUST BE AT THE VERY TOP OF THE FILE
"use client";

import React from 'react';
import { ChevronDown, ArrowRight, Building2, Award, Users } from 'lucide-react';
import { SERVICES_DATA } from '@/data/services';

export default function Navbar() {
  // --- SERVICES MENU DATA ---
  const servicesArray = Object.entries(SERVICES_DATA).map(([id, service]) => ({
    id,
    title: service.title,
    icon: service.icon,
  }));

  const halfLength = Math.ceil(servicesArray.length / 2);
  const servicesColumnOne = servicesArray.slice(0, halfLength);
  const servicesColumnTwo = servicesArray.slice(halfLength);

  return (
    <nav className="fixed top-0 left-0 right-0 h-20 bg-white border-b border-stone-200 z-[9999] px-6">
      <div className="max-w-6xl mx-auto h-full flex items-center justify-between relative">
        
        {/* Brand Logo */}
        <a href="#welcome" className="font-serif text-xl font-bold tracking-tight text-stone-900 no-underline">
          Adonai <span className="text-emerald-700 font-sans font-light">Ltd</span>
        </a>

        {/* Header Links */}
        <div className="flex items-center gap-8 h-full">
          <a href="#welcome" className="text-stone-600 hover:text-emerald-700 font-medium text-sm transition-colors no-underline">Home</a>
          
          {/* ================= SERVICES MEGA MENU ================= */}
          <div className="group h-full flex items-center">
            <a href="#services" className="text-stone-600 group-hover:text-emerald-700 font-medium text-sm transition-colors flex items-center gap-1 no-underline relative py-2 h-full">
              Services 
              <ChevronDown size={14} className="text-stone-400 group-hover:text-emerald-700 group-hover:rotate-180 transition-transform duration-300" />
              <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-emerald-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></span>
            </a>

            {/* Dropdown Box */}
            <div className="absolute top-20 left-0 w-full bg-white border border-stone-200 rounded-2xl shadow-2xl p-10 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-in-out z-[10000]">
              <div className="space-y-1">
                {servicesColumnOne.map((item) => (
                  <a key={item.id} href="#services" className="flex items-center justify-between px-3 py-2.5 rounded-xl text-[14px] text-stone-700 hover:text-emerald-700 hover:bg-stone-50 font-medium no-underline transition-all group/item">
                    <div className="flex items-center gap-3">
                      <div className="text-emerald-600 bg-emerald-50 p-1.5 rounded-lg">{React.cloneElement(item.icon, { size: 16 })}</div>
                      {item.title}
                    </div>
                    <ArrowRight size={14} className="opacity-0 group-hover/item:opacity-100 transition-all text-emerald-600 transform -translate-x-1 group-hover/item:translate-x-0" />
                  </a>
                ))}
              </div>
              <div className="space-y-1 border-t md:border-t-0 md:border-l border-stone-200 pt-4 md:pt-0 md:pl-12">
                {servicesColumnTwo.map((item) => (
                  <a key={item.id} href="#services" className="flex items-center justify-between px-3 py-2.5 rounded-xl text-[14px] text-stone-700 hover:text-emerald-700 hover:bg-stone-50 font-medium no-underline transition-all group/item">
                    <div className="flex items-center gap-3">
                      <div className="text-emerald-600 bg-emerald-50 p-1.5 rounded-lg">{React.cloneElement(item.icon, { size: 16 })}</div>
                      {item.title}
                    </div>
                    <ArrowRight size={14} className="opacity-0 group-hover/item:opacity-100 transition-all text-emerald-600 transform -translate-x-1 group-hover/item:translate-x-0" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ================= COMPANY MEGA MENU ================= */}
          <div className="group h-full flex items-center">
            <a href="#about" className="text-stone-600 group-hover:text-emerald-700 font-medium text-sm transition-colors flex items-center gap-1 no-underline relative py-2 h-full">
              Company
              <ChevronDown size={14} className="text-stone-400 group-hover:text-emerald-700 group-hover:rotate-180 transition-transform duration-300" />
              <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-emerald-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></span>
            </a>

            {/* Split Panel Area */}
            <div className="absolute top-20 left-0 w-full bg-white border border-stone-200 rounded-2xl shadow-2xl p-10 grid grid-cols-1 md:grid-cols-2 gap-12 opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-in-out z-[10000]">
              
              {/* Left Column Profile Subsections */}
              <div className="space-y-4">
                <span className="text-[11px] font-bold tracking-widest text-emerald-600 uppercase block mb-1">Corporate Identity</span>
                
                <a href="#about" className="flex gap-4 p-3 rounded-xl hover:bg-stone-50 group/co no-underline transition-all">
                  <div className="text-emerald-600 bg-emerald-50 p-2 h-9 w-9 rounded-lg flex items-center justify-center shrink-0">
                    <Building2 size={16} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-stone-800 group-hover/co:text-emerald-700 transition-colors m-0">About Us</h4>
                    <p className="text-stone-500 text-xs mt-1 leading-relaxed">Our logistical mission profile and corporate history vector.</p>
                  </div>
                </a>

                <a href="#whyus" className="flex gap-4 p-3 rounded-xl hover:bg-stone-50 group/co no-underline transition-all">
                  <div className="text-emerald-600 bg-emerald-50 p-2 h-9 w-9 rounded-lg flex items-center justify-center shrink-0">
                    <Award size={16} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-stone-800 group-hover/co:text-emerald-700 transition-colors m-0">Why Choose Us</h4>
                    <p className="text-stone-500 text-xs mt-1 leading-relaxed">Explore our cross-border multi-clearance tracking systems.</p>
                  </div>
                </a>
              </div>

              {/* Right Column: Teams Subsections */}
              <div className="space-y-4 border-t md:border-t-0 md:border-l border-stone-200 pt-6 md:pt-0 md:pl-12">
                <span className="text-[11px] font-bold tracking-widest text-emerald-600 uppercase block mb-1">Organization Structure</span>
                
                <a href="#about" className="flex gap-4 p-3 rounded-xl hover:bg-stone-50 group/co no-underline transition-all">
                  <div className="text-emerald-600 bg-emerald-50 p-2 h-9 w-9 rounded-lg flex items-center justify-center shrink-0">
                    <Users size={16} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-stone-800 group-hover/co:text-emerald-700 transition-colors m-0">Our Team</h4>
                    <p className="text-stone-500 text-xs mt-1 leading-relaxed">Meet our 8 specialized teams directing operational lines.</p>
                  </div>
                </a>
              </div>

            </div>
          </div>

          <a href="#network" className="text-stone-600 hover:text-emerald-700 font-medium text-sm transition-colors no-underline">Network</a>
          <a href="#contact" className="text-stone-600 hover:text-emerald-700 font-medium text-sm transition-colors no-underline">Contact</a>
        </div>

      </div>
    </nav>
  );
}