"use client";
import { useParams } from 'next/navigation';
import { PARTNERS_CLIENTS } from '@/data/services';
import { ArrowLeft, CheckCircle, ShieldCheck, MapPin, Quote } from 'lucide-react';
import Link from 'next/link';

export default function ClientDetailPage() {
  const { id } = useParams();
  const client = PARTNERS_CLIENTS.find((c) => c.id === id);

  if (!client) return <div className="p-20 text-center text-stone-600">Client Profile Not Found.</div>;

  return (
    <main className="min-h-screen bg-stone-50 pt-20 pb-20">
      <div className="max-w-5xl mx-auto px-6">
        
        <Link href="/" className="inline-flex items-center text-stone-500 hover:text-emerald-700 transition-colors mb-8 font-medium text-sm">
          <ArrowLeft size={16} className="mr-2" /> Back to Dashboard
        </Link>

        {/* Enhanced Hero Section */}
        <section className="bg-white rounded-3xl border border-stone-200 p-12 shadow-sm mb-8">
          <div className="flex items-center gap-6">
            <div className="bg-stone-900 p-5 rounded-2xl">
              <ShieldCheck size={40} className="text-emerald-500" />
            </div>
            <div>
              <div className="text-emerald-700 text-xs font-bold uppercase tracking-widest mb-1">Corporate Partnership</div>
              <h1 className="text-4xl md:text-5xl font-serif text-stone-900">{client.name}</h1>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main Description & Testimonials */}
          <div className="md:col-span-2 space-y-8">
            <div className="bg-white p-8 rounded-3xl border border-stone-200">
              <h3 className="text-2xl font-serif mb-6 text-stone-900">About {client.name}</h3>
              <p className="text-stone-600 leading-relaxed text-lg mb-6">
                {/* Ensure your data object has a 'description' property */}
                {client.description || "A valued partner of Adonai Ltd, we provide tailored logistics, customs brokerage, and supply chain solutions to ensure their operations remain efficient and compliant."}
              </p>
            </div>

            {/* Testimonial Integration */}
            <div className="bg-emerald-700 p-8 rounded-3xl text-white">
              <Quote className="text-emerald-400 mb-4" size={32} />
              <p className="text-xl font-serif italic mb-6">
                {"Adonai Ltd has been instrumental in streamlining our logistics. Their expertise in customs clearance is unmatched in the region."}
              </p>
              <div className="font-bold border-t border-emerald-600 pt-4">
                Operations Manager, {client.name}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-stone-900 text-white p-8 rounded-3xl">
              <h4 className="text-stone-400 text-xs font-bold uppercase tracking-widest mb-4">Core Hub</h4>
              <div className="flex items-start gap-3">
                <MapPin className="text-emerald-500 mt-1" />
                <p className="text-sm leading-relaxed">Magerwa Customs Facilities, Gikondo, Kigali City, Rwanda</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-stone-200">
              <h4 className="text-stone-900 font-bold mb-4 flex items-center gap-2">
                <CheckCircle size={18} className="text-emerald-600" /> Compliance Verified
              </h4>
              <ul className="text-stone-600 text-sm space-y-3">
                <li>✓ Multi-border Authorization</li>
                <li>✓ Trade Clearance Verified</li>
                <li>✓ 24/7 Priority Support</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}