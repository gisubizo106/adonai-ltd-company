import React from 'react';

const testimonials = [
  {
    name: "John Kalisa",
    company: "Rwanda Exports Ltd",
    quote: "Adonai Ltd made our customs clearance process completely stress-free. Highly recommended for any logistics needs."
  },
  {
    name: "Sarah Mutoni",
    company: "Global Trade Hub",
    quote: "Professional, timely, and very reliable. They are our go-to partner in Kigali for freight forwarding."
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-slate-900 mb-16 text-center">What Our Clients Say</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
              <p className="text-slate-600 mb-6 italic">"{t.quote}"</p>
              <div className="font-bold text-slate-900">{t.name}</div>
              <div className="text-sm text-emerald-600 font-bold">{t.company}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}