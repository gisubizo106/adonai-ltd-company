"use client";
import React from 'react';
import { FileText, Package, Receipt, CheckCircle, Truck, ShieldCheck, MapPin } from 'lucide-react';

const steps = [
  { 
    step: "01", 
    title: "Detailing", 
    icon: FileText, 
    desc: "Provide shipment details (weight, dimensions, product info), pick-up, and delivery points via our quotation form or email." 
  },
  { 
    step: "02", 
    title: "Packaging", 
    icon: Package, 
    desc: "We assess and confirm if your goods require professional packing or repacking for safe transport." 
  },
  { 
    step: "03", 
    title: "Quotation", 
    icon: Receipt, 
    desc: "We provide a competitive quote and initiate the account creation process for your company." 
  },
  { 
    step: "04", 
    title: "Confirmation", 
    icon: CheckCircle, 
    desc: "Finalize your booking by providing confirmation and completing the payment." 
  },
  { 
    step: "05", 
    title: "Pick up the goods", 
    icon: Truck, 
    desc: "We collect your goods and provide you with all shipping documents and tracking details." 
  },
  { 
    step: "06", 
    title: "Customs Clearing", 
    icon: ShieldCheck, 
    desc: "We handle all necessary customs clearance documentation to ensure a smooth transition across borders." 
  },
  { 
    step: "07", 
    title: "Delivery", 
    icon: MapPin, 
    desc: "Your shipment is safely delivered to the final destination as specified." 
  },
];

export default function ProcessPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Header Section from head.jpg */}
      <section className="relative w-full h-[300px] flex items-center bg-slate-900 overflow-hidden">
        <img 
          src="assets/PLANE.png" 
          alt="Our Process" 
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-white">
          <h1 className="text-5xl font-bold mb-4">Our Process</h1>
          <div className="w-20 h-1 bg-green-600 mb-6"></div>
          <p className="text-lg max-w-xl">
            Understanding the world that surrounds our clients and the things that influence in worlds trade.
          </p>
        </div>
      </section>

      {/* Process Content Section from process.PNG */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-16">
          
          {/* International Shipments */}
          <div>
            <h2 className="text-2xl font-bold mb-10 border-b-2 border-emerald-500 pb-2 text-slate-900">
              International Shipments
            </h2>
            {steps.map((item, i) => (
              <div key={i} className="flex items-start gap-4 mb-8">
                <div className="p-2 text-emerald-600 mt-1">
                  <item.icon size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">{item.step} / {item.title}</h3>
                  <p className="text-slate-600 text-sm mt-1 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Local Delivery */}
          <div>
            <h2 className="text-2xl font-bold mb-10 border-b-2 border-emerald-500 pb-2 text-slate-900">
              Local Delivery
            </h2>
            {steps.map((item, i) => (
              <div key={i} className="flex items-start gap-4 mb-8">
                <div className="p-2 text-emerald-600 mt-1">
                  <item.icon size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">{item.step} / {item.title}</h3>
                  <p className="text-slate-600 text-sm mt-1 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}