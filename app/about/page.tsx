import React from 'react';
import Header from '@/components/about';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      <article className="py-24 max-w-5xl mx-auto px-6 space-y-24">
        
        {/* Company Profile & Our Story */}
        <section>
          <h1 className="text-5xl font-black text-slate-900 mb-8">About Adonai Ltd</h1>
          <div className="prose prose-slate prose-lg max-w-none">
            <p className="text-xl text-slate-600 mb-6">
              Adonai Ltd is a leading global logistics and customs clearance company based in Kigali, Rwanda. We specialize in bridging the gap between local commerce and international trade markets.
            </p>
            <h2 className="text-2xl font-bold text-slate-900 mt-10">Our Story</h2>
            <p className="text-slate-600">
              Established to address the complexities of freight forwarding in the region, our journey began with a simple commitment: to ensure that businesses in Rwanda can trade seamlessly with the rest of the world. From our base in Magerwa, we have grown into a trusted partner for companies needing reliable, end-to-end logistics solutions.
            </p>
          </div>
        </section>

        {/* Mission, Vision & Core Values */}
        <section className="grid md:grid-cols-3 gap-8">
          <div className="bg-emerald-50 p-8 rounded-2xl">
            <h3 className="font-bold text-emerald-800 mb-4">Mission</h3>
            <p className="text-emerald-900 text-sm">To deliver reliable, efficient, and customer-focused logistics, freight forwarding, transport, and customs clearance solutions that simplify trade, ensure timely delivery, and create value for our clients through professionalism, integrity, and innovation.</p>
          </div>
          <div className="bg-emerald-50 p-8 rounded-2xl">
            <h3 className="font-bold text-emerald-800 mb-4">Vision</h3>
            <p className="text-emerald-900 text-sm">To become the leading and most trusted logistics and customs clearing company in Rwanda and the East African region, recognized for excellence, reliability, and world-class service.</p>
          </div>
          <div className="bg-emerald-50 p-8 rounded-2xl">
            <h3 className="font-bold text-emerald-800 mb-4">Core Values</h3>
            <ul className="text-emerald-900 text-sm space-y-2">
              <li>• Integrity</li>
              <li>• Excellence</li>
              <li>• Customer Satisfaction</li>
              <li>• Professionalism</li>
              <li>• Accountability</li>
              <li>• Teamwork</li>
              <li>• Innovation</li>
              <li>• Reliability</li>
            </ul>
          </div>
        </section>

        

        {/* Team & Certifications */}
        <section className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Team</h2>
            <p className="text-slate-600 mb-4">Our team consists of logistics professionals and customs clearance experts committed to your success.</p>
            <a href="/teamdepartment" className="text-emerald-600 font-bold hover:text-emerald-700">Meet our team members →</a>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Certifications</h2>
            <p className="text-slate-600">Adonai Ltd operates with full compliance in customs clearance and logistics management, ensuring all standard regulatory requirements are met for our clients.</p>
          </div>
        </section>

        </article>
    </main>
  );
}