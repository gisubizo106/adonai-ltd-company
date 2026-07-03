"use client";
import React from 'react';
import Link from 'next/link';
import { ArrowRight, Globe, Clock, ShieldCheck, PhoneCall } from 'lucide-react';

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-slate-950 text-white py-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-5">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-500 block mb-3">Why Choose Us</span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6 leading-tight">A trusted logistics network that prioritizes you.</h2>
          <p className="text-slate-400 leading-relaxed mb-8">We focus heavily on structural integrity, professional communication, and direct compliance benchmarks.</p>
          <Link href="/teamdepartment" className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-3.5 rounded transition-colors cursor-pointer">Talk to our team <ArrowRight size={16} /></Link>
        </div>
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-slate-900 p-8 rounded-xl border border-slate-800">
            <div className="text-emerald-500 mb-4"><Globe size={28} /></div>
            <h4 className="text-lg font-bold mb-2">East African Mastery</h4>
            <p className="text-slate-400 text-sm">Deep-rooted experience managing logistical border setups across regional trade corridors effortlessly.</p>
          </div>
          <div className="bg-slate-900 p-8 rounded-xl border border-slate-800">
            <div className="text-emerald-500 mb-4"><Clock size={28} /></div>
            <h4 className="text-lg font-bold mb-2">Seamless Execution</h4>
            <p className="text-slate-400 text-sm">Timely cargo pick up, streamlined documentation reviews, and efficient last-mile transfers.</p>
          </div>
          <div className="bg-slate-900 p-8 rounded-xl border border-slate-800">
            <div className="text-emerald-500 mb-4"><ShieldCheck size={28} /></div>
            <h4 className="text-lg font-bold mb-2">EBM & Trade Compliance</h4>
            <p className="text-slate-400 text-sm">Total structural validation protecting your shipments against compliance discrepancies.</p>
          </div>
          <div className="bg-slate-900 p-8 rounded-xl border border-slate-800">
            <div className="text-emerald-500 mb-4"><PhoneCall size={28} /></div>
            <h4 className="text-lg font-bold mb-2">Constant Accountability</h4>
            <p className="text-slate-400 text-sm">Accessible human coordinators handling communication and document workflows with utmost care.</p>
          </div>
        </div>
      </div>
    </section>
  );
}