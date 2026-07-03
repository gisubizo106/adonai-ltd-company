"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import { SERVICES_DATA } from '@/data/services';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [mobileCompanyOpen, setMobileCompanyOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3 group focus:outline-none">
          <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center bg-slate-50 border border-slate-100 shadow-sm">
            <img src="/assets/LOGO.PNG" alt="Adonai Ltd Logo" className="w-full h-full object-contain" />
          </div>
          <span className="font-bold text-xl tracking-tight text-slate-900 group-hover:text-emerald-600 transition-colors">
            Adonai<span className="text-emerald-600 group-hover:text-emerald-700"> Ltd</span>
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8 h-full">
          {/* SOLUTIONS */}
          <div className="group h-full flex items-center relative">
            <button className="flex items-center gap-1 text-sm font-bold text-slate-900 hover:text-emerald-700 transition-colors h-full">
              Solutions <ChevronDown size={14} />
            </button>
            <div className="absolute top-20 left-0 w-[600px] bg-white border border-slate-200 shadow-2xl rounded-b-lg p-8 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[100] grid grid-cols-2 gap-x-8">
              {Object.entries(SERVICES_DATA).map(([id, service]) => (
                <Link key={id} href={`/services/${id}`} className="block py-2 text-sm text-slate-700 hover:text-emerald-700 font-bold">
                  {service.title.replace(/^\d+\.\s+/, '')}
                </Link>
              ))}
            </div>
          </div>

          {/* COMPANY DROPDOWN */}
          <div className="group h-full flex items-center relative">
            <button className="flex items-center gap-1 text-sm font-bold text-slate-900 hover:text-emerald-700 transition-colors h-full">
              Company <ChevronDown size={14} />
            </button>
            <div className="absolute top-20 left-0 w-48 bg-white border border-slate-200 shadow-2xl rounded-b-lg p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[100] flex flex-col gap-2">
              <Link href="/#why-us" className="text-sm text-slate-700 hover:text-emerald-700 font-bold py-1">Why Us</Link>
              <Link href="/about" className="text-sm text-slate-700 hover:text-emerald-700 font-bold py-1">About</Link>
              <Link href="/teamdepartment" className="text-sm text-slate-700 hover:text-emerald-700 font-bold py-1">Team</Link>
              <Link href="/#network" className="text-sm text-slate-700 hover:text-emerald-700 font-bold py-1">Clients</Link>
            </div>
          </div>

          <Link href="/#contact" className="text-sm font-bold text-slate-900 hover:text-emerald-700">Contact</Link>
        </nav>

        {/* QUOTE BUTTON */}
        <div className="hidden md:block">
          <Link href="/#contact" className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-5 py-2.5 rounded text-sm transition-all duration-200 cursor-pointer">
            Get a Quote
          </Link>
        </div>

        <button className="md:hidden p-2 text-slate-600" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white px-6 py-6 flex flex-col gap-4 shadow-lg absolute w-full left-0 z-50">
          <button onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)} className="flex items-center justify-between font-bold text-slate-900 w-full">
            Solutions <ChevronDown size={18} className={mobileSolutionsOpen ? 'rotate-180' : ''} />
          </button>
          {mobileSolutionsOpen && (
            <div className="flex flex-col gap-2 pl-4 border-l-2 border-emerald-100">
              {Object.entries(SERVICES_DATA).map(([id, service]) => (
                <Link key={id} href={`/services/${id}`} onClick={() => setMobileMenuOpen(false)} className="text-slate-700 text-sm py-1 font-bold">{service.title.replace(/^\d+\.\s+/, '')}</Link>
              ))}
            </div>
          )}

          <button onClick={() => setMobileCompanyOpen(!mobileCompanyOpen)} className="flex items-center justify-between font-bold text-slate-900 w-full">
            Company <ChevronDown size={18} className={mobileCompanyOpen ? 'rotate-180' : ''} />
          </button>
          {mobileCompanyOpen && (
            <div className="flex flex-col gap-2 pl-4 border-l-2 border-emerald-100">
              <Link href="/#why-us" onClick={() => setMobileMenuOpen(false)} className="text-slate-700 text-sm py-1 font-bold">Why Us</Link>
              <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="text-slate-700 text-sm py-1 font-bold">About</Link>
              <Link href="/teamdepartment" onClick={() => setMobileMenuOpen(false)} className="text-slate-700 text-sm py-1 font-bold">Team</Link>
              <Link href="/#network" onClick={() => setMobileMenuOpen(false)} className="text-slate-700 text-sm py-1 font-bold">Clients</Link>
            </div>
          )}

          <Link href="/#contact" onClick={() => setMobileMenuOpen(false)} className="text-slate-900 font-bold">Contact</Link>
          <Link href="/#contact" onClick={() => setMobileMenuOpen(false)} className="bg-emerald-600 text-center text-white font-bold py-3 rounded">Get a Quote</Link>
        </div>
      )}
    </header>
  );
}