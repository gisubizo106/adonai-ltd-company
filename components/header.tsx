"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, Search } from 'lucide-react';
import { SERVICES_DATA } from '@/data/services';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [mobileCompanyOpen, setMobileCompanyOpen] = useState(false);
  
  const [desktopSearchOpen, setDesktopSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    const q = searchQuery.toLowerCase();
    const routeMap: { [key: string]: string } = {
      'home': '/',
      'about': '/about',
      'team': '/teamdepartment',
      'contact': '/#contact',
      'process': '/process',
    };

    const matchedKey = Object.keys(routeMap).find(key => q.includes(key));
    window.location.href = matchedKey ? routeMap[matchedKey] : `/search?q=${encodeURIComponent(searchQuery)}`;
    
    setDesktopSearchOpen(false);
    setMobileMenuOpen(false);
    setSearchQuery('');
  };

  return (
    <header className="sticky top-0 z-50 bg-green-100 backdrop-blur-sm border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between relative">
        <div className="flex-1"></div>

        {/* DESKTOP NAV */}
        {!desktopSearchOpen ? (
          <nav className="hidden md:flex items-center justify-center gap-8 h-full flex-1">
            <Link href="/" className="text-sm font-bold text-slate-900 hover:text-emerald-700">Home</Link>
            
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
            
            <Link href="/process" className="text-sm font-bold text-slate-900 hover:text-emerald-700">Process</Link>
            <Link href="/#contact" className="text-sm font-bold text-slate-900 hover:text-emerald-700">Contact</Link>
            
            <button onClick={() => setDesktopSearchOpen(true)} className="text-slate-600 hover:text-emerald-700 transition-colors focus:outline-none">
              <Search size={18} />
            </button>
          </nav>
        ) : (
          <form onSubmit={handleSearchSubmit} className="hidden md:flex items-center justify-center flex-1 max-w-md mx-auto relative z-[101]">
            <input 
              type="text" 
              placeholder="Looking for..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-4 pr-10 py-2 text-sm border border-slate-200 rounded-full bg-slate-50 text-slate-900 focus:outline-none focus:border-emerald-500 shadow-sm"
              autoFocus
            />
            <button type="button" onClick={() => setDesktopSearchOpen(false)} className="absolute right-4 text-slate-400 hover:text-slate-600">
              <X size={16} />
            </button>
          </form>
        )}

        {/* GET A QUOTE (KEPT AS IS) */}
        <div className="hidden md:flex flex-1 justify-end">
          <Link href="/#contact" className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-5 py-2.5 rounded text-sm transition-all duration-200">
            Get a Quote
          </Link>
        </div>

        <button className="md:hidden p-2 text-slate-600" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
{/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white px-6 py-6 flex flex-col gap-6 shadow-lg absolute w-full left-0 z-50 min-h-screen">
          <Link href="/" onClick={() => setMobileMenuOpen(false)} className="text-slate-900 font-bold text-center">Home</Link>
          
          {/* Mobile Solutions */}
          <div className="flex flex-col items-center gap-2">
            <button onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)} className="font-bold text-slate-900 flex items-center gap-1">
              Solutions <ChevronDown size={18} />
            </button>
            {mobileSolutionsOpen && (
              <div className="flex flex-col gap-2 bg-slate-50 w-full p-4 rounded-lg">
                {Object.entries(SERVICES_DATA).map(([id, service]) => (
                  <Link key={id} href={`/services/${id}`} onClick={() => setMobileMenuOpen(false)} className="text-sm text-center text-slate-700 font-bold py-1">
                    {service.title.replace(/^\d+\.\s+/, '')}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Company */}
          <div className="flex flex-col items-center gap-2">
            <button onClick={() => setMobileCompanyOpen(!mobileCompanyOpen)} className="font-bold text-slate-900 flex items-center gap-1">
              Company <ChevronDown size={18} />
            </button>
            {mobileCompanyOpen && (
              <div className="flex flex-col gap-2 bg-slate-50 w-full p-4 rounded-lg text-center">
                <Link href="/#why-us" onClick={() => setMobileMenuOpen(false)} className="text-sm text-slate-700 font-bold py-1">Why Us</Link>
                <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="text-sm text-slate-700 font-bold py-1">About</Link>
                <Link href="/teamdepartment" onClick={() => setMobileMenuOpen(false)} className="text-sm text-slate-700 font-bold py-1">Team</Link>
                <Link href="/#network" onClick={() => setMobileMenuOpen(false)} className="text-sm text-slate-700 font-bold py-1">Clients</Link>
              </div>
            )}
          </div>

          <Link href="/process" onClick={() => setMobileMenuOpen(false)} className="text-slate-900 font-bold text-center">Process</Link>
          <Link href="/#contact" onClick={() => setMobileMenuOpen(false)} className="text-slate-900 font-bold text-center">Contact</Link>
          
          <Link href="/#contact" onClick={() => setMobileMenuOpen(false)} className="bg-emerald-600 text-center text-white font-bold py-3 px-8 rounded w-full max-w-[200px] mx-auto mt-4">
            Get a Quote
          </Link>
        </div>
      )}
    </header>
  );
}