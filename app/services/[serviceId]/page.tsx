// app/services/[serviceId]/page.tsx
import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { SERVICES_DATA } from '@/data/services';

interface Props {
  params: Promise<{
    serviceId: string;
  }>;
}

// 1. Notice the 'async' keyword added here
export default async function ServiceDetailPage({ params }: Props) {
  
  // 2. Notice the 'await' added here to handle the modern Next.js async params
  const { serviceId } = await params;
  
  const service = SERVICES_DATA[serviceId as keyof typeof SERVICES_DATA];

  if (!service) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-6 text-center">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">Service Not Found</h2>
        <Link href="/" className="text-emerald-600 font-semibold flex items-center gap-2">
          <ArrowLeft size={16}/> Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-emerald-600 mb-8 transition-colors">
          <ArrowLeft size={16} /> Back to Overview
        </Link>

        <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200/60">
          <div className="h-80 w-full overflow-hidden relative">
            <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white flex items-center gap-4">
              <div className="w-14 h-14 bg-emerald-600 rounded-2xl flex items-center justify-center text-white shadow-md">
                {service.icon}
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">{service.title}</h1>
            </div>
          </div>

          <div className="p-8 sm:p-10">
            <h3 className="text-emerald-600 font-bold text-xs uppercase tracking-widest mb-2">Service Core</h3>
            <p className="text-xl font-medium text-slate-800 border-l-4 border-emerald-600 pl-4 my-4 italic">
              "{service.summary}"
            </p>
            
            <hr className="my-6 border-slate-100" />
            
            <h4 className="text-lg font-bold text-slate-900 mb-3">Operation Details</h4>
            <p className="text-slate-600 leading-relaxed text-base">
              {service.description}
            </p>

            <div className="mt-10 p-6 bg-slate-50 rounded-xl border border-slate-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h5 className="font-bold text-slate-900">Need direct clearance layouts or volume quoting?</h5>
                <p className="text-sm text-slate-500">Submit cargo dimensions and path parameters right below.</p>
              </div>
              <Link href="/#contact" className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-5 py-3 rounded-lg text-sm whitespace-nowrap transition-colors text-center">
                Request Service Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}