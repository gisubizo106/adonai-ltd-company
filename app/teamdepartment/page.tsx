import React from 'react';
import { TEAM_DEPARTMENTS } from '@/data/Team'; 

export default function TeamGrid() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-slate-900 mb-16 text-center">Our Departments</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM_DEPARTMENTS.map((dept) => (
            <div key={dept.id} className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
              {/* Online Profile Photo */}
              <div className="aspect-square w-full overflow-hidden">
                <img 
                  src={dept.imageUrl} 
                  alt={dept.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <h3 className="font-bold text-slate-900 text-lg mb-2">{dept.name}</h3>
                <p className="text-slate-600 text-sm mb-6 leading-relaxed">{dept.role}</p>
                
                {/* Integrated Testimonial Snippet */}
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <p className="text-xs text-emerald-800 italic">
                    "Exceptional support from the {dept.name}."
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}