"use client";
import React from 'react';
import Link from 'next/link';
import { GOOGLE_MAPS_URL } from '@/data/services';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white pt-16 pb-8 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            
        <div className="md:col-span-2">
          <Link href="/" className="flex items-center gap-3 group focus:outline-none">
          <span className="font-bold text-xl tracking-tight text-white block mb-4">
            Adonai<span className="text-emerald-600"> Ltd</span>
          </span>
          </Link>
          <p className="text-sm text-slate-400 max-w-sm leading-relaxed mb-4">
            Comprehensive logistics, freight forwarding, and trade clearance models customized to keep global routes highly predictable.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-bold tracking-wider uppercase text-emerald-600 mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-slate-400 flex flex-col items-start">
            <li><Link href="/#services" className="hover:text-white text-sm text-slate-400 text-left">Services</Link></li>
            <li><Link href="/#why-us" className="hover:text-white text-sm text-slate-400 text-left">Why Choose Us</Link></li>
            <li><Link href="/#about" className="hover:text-white text-sm text-slate-400 text-left">About Corporate</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-bold tracking-wider uppercase text-emerald-600 mb-4">Core Hub</h4>
          <a href={GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer" className="text-sm text-slate-400 leading-relaxed hover:text-emerald-400 transition-colors block group">
            Magerwa Customs Facilities<br />
            Gikondo, Kigali City<br />
            Rwanda
            <span className="block text-xs text-emerald-500 font-medium mt-1 group-hover:underline">View on Google Maps ↗</span>
          </a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-slate-900 text-center text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>&copy; {new Date().getFullYear()} Adonai Ltd. All rights reserved.</div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-slate-400">Terms of Service</a>
          <a href="#" className="hover:text-slate-400">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}