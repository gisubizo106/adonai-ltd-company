"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Search, ShieldCheck, Globe, Anchor } from 'lucide-react';

export default function Hero() {
  const heroSlides = [ "/assets/slide-3.PNG"];
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [simulatedTrackingId, setSimulatedTrackingId] = useState("");

  // useEffect(() => {
  //   const slideTimer = setInterval(() => {
  //     setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % heroSlides.length);
  //   }, 6000); 
  //   return () => clearInterval(slideTimer);
  // }, [heroSlides.length]);

  return (
    <section className="relative min-h-[90vh] flex items-center bg-slate-950 text-white overflow-hidden">
      
      {/* Dynamic Ambient Background Slider */}
      <div className="absolute inset-0 z-0">
        {heroSlides.map((slide, index) => (
          <img 
            key={index} 
            src={slide} 
            alt="Adonai Operations" 
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              index === currentSlideIndex ? 'opacity-30 scale-100' : 'opacity-0 scale-105'
            }`} 
          />
        ))}
        {/* Professional Dark Vignette Mask */}
        <div className="absolute inset-0   via-slate-950/80 to-slate-900/40"></div>
      </div>

      {/* Main Layout Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Bold Value Proposition */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold rounded-full uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            East African Regional Hub & Global Logistics Partner
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.05]">
            Committed to Serve,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">
              Dedicated to Deliver.
            </span>
          </h1>
          
          <p className="text-slate-300 text-base sm:text-lg max-w-xl leading-relaxed">
            ADONAI Ltd delivers comprehensive freight forwarding, customs brokerage, and supply chain vectors tailored to navigate regional clearance structures smoothly and predictably.
          </p>

          {/* Quick Stats Grid to establish immediate size/scope */}
          <div className="grid grid-cols-3 gap-4 pt-4 max-w-md border-t border-white/10">
            <div>
              <div className="text-xl font-black text-emerald-400">100%</div>
              <div className="text-[11px] font-medium uppercase tracking-wider text-slate-400">EBM Compliant</div>
            </div>
            <div>
              <div className="text-xl font-black text-emerald-400">Regional</div>
              <div className="text-[11px] font-medium uppercase tracking-wider text-slate-400">Network Scope</div>
            </div>
            <div>
              <div className="text-xl font-black text-emerald-400">24/7</div>
              <div className="text-[11px] font-medium uppercase tracking-wider text-slate-400">Accountability</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <Link href="/#contact" className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-7 py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-600/20 group cursor-pointer border-none">
              Request Cargo Quote <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            {/* <Link href="/#services" className="border border-slate-700 hover:border-slate-500 bg-slate-900/40 backdrop-blur-md text-white font-semibold px-7 py-4 rounded-xl text-center transition-all cursor-pointer">
              Explore Our Services
            </Link> */}
          </div>
        </div>

        {/* Right Column: High-Conversion Tool (Simulated Tracking Terminal) */}
        <div className="lg:col-span-5 bg-slate-900/80 backdrop-blur-md border border-white/10 p-8 rounded-3xl shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl"></div>
          
          <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
            <Globe className="text-emerald-400" size={20} /> Track Your Shipment
          </h3>
          <p className="text-slate-400 text-xs mb-6 leading-relaxed">
            Enter your Waybill or Cargo Tracking Reference number below for immediate routing updates across regional hubs.
          </p>

          <div className="space-y-4">
            <div className="relative">
              <input 
                type="text" 
                placeholder="e.g., ADL-7982-KGL" 
                value={simulatedTrackingId}
                onChange={(e) => setSimulatedTrackingId(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3.5 pl-11 text-sm focus:outline-none focus:border-emerald-500 text-white placeholder-slate-600 transition-colors"
              />
              <Search className="absolute left-4 top-4 text-slate-600" size={16} />
            </div>
            
            <button 
              onClick={() => alert(`Simulated tracking update for "${simulatedTrackingId || 'ADL-7982-KGL'}": Shipment is currently clearing customs at Magerwa Hub, Gikondo.`)}
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold py-3.5 rounded-xl transition-all shadow-md cursor-pointer border-none flex items-center justify-center gap-2"
            >
              Trace Cargo Status
            </button>
          </div>

          {/* Value Highlights under the tool */}
          <div className="mt-8 pt-6 border-t border-slate-800 space-y-3">
            <div className="flex items-center gap-3 text-xs text-slate-300">
              <ShieldCheck size={16} className="text-emerald-400 shrink-0" />
              <span>Secure Transit Validation & Asset Guarding</span>
            </div>
            <div className="flex items-center gap-3 text-xs text-slate-300">
              <Anchor size={16} className="text-emerald-400 shrink-0" />
              <span>Direct Linkages: Mombasa / Dar es Salaam Port Nodes</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}