import React from 'react';

export default function CompanyOverview() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Text Content */}
        <div className="space-y-8">
          <div>
            <h2 className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-2">Who We Are</h2>
            <h3 className="text-4xl font-bold text-slate-900 leading-tight">Empowering Global Trade, Simplified for You.</h3>
          </div>

          <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
            <p>
              Based in the heart of Kigali, <strong>Adonai Ltd</strong> is a premier logistics and customs clearance firm. We understand that in the fast-paced world of international trade, efficiency is the difference between success and delay.
            </p>
            <p>
              Our team of experts navigates the complexities of regional regulations and global supply chain challenges so you don't have to. We are committed to transparency, speed, and precision in every shipment we handle.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8 pt-4">
            <div className="border-l-4 border-emerald-500 pl-4">
              <h4 className="font-bold text-slate-900 mb-1">Our Mission</h4>
              <p className="text-sm text-slate-600">To provide unparalleled freight forwarding and customs solutions that empower businesses to scale across borders with confidence.</p>
            </div>
            <div className="border-l-4 border-emerald-500 pl-4">
              <h4 className="font-bold text-slate-900 mb-1">Our Vision</h4>
              <p className="text-sm text-slate-600">To be the most trusted logistics partner in East Africa, known for reliability, digital integration, and customer-first service.</p>
            </div>
          </div>
        </div>

        {/* Visual Element using an Online Source */}
        <div className="relative">
          <div className="aspect-[4/3] bg-slate-100 rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2000&auto=format&fit=crop" 
              alt="Professional Logistics and Customs Service" 
              className="w-full h-full object-cover"
            />
          </div>
          {/* Decorative floating card */}
          <div className="absolute -bottom-10 -left-10 bg-emerald-600 text-white p-8 rounded-2xl shadow-xl hidden md:block">
            <div className="text-5xl font-black mb-1">100%</div>
            <div className="font-bold">Dedication to Cargo Integrity</div>
          </div>
        </div>
      </div>
    </section>
  );
}