"use client";
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { ArrowRight, MessageSquare, Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ fullName: '', company: '', email: '', phone: '', details: '' });
  const [statusMessage, setStatusMessage] = useState({ type: '', text: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const SERVICE_ID = "service_z6z1pcq"; 
  const TEMPLATE_ID = "template_7wu64l9"; 
  const PUBLIC_KEY = "tx-4kTiFSbNGXFekP";   

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage({ type: '', text: '' });

    const templateParams = {
      from_name: formData.fullName,
      company_name: formData.company,
      reply_to: formData.email,
      phone_number: formData.phone,
      message: formData.details
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then(() => {
        setStatusMessage({ type: 'success', text: 'Thank you! Your inquiry was sent successfully.' });
        setFormData({ fullName: '', company: '', email: '', phone: '', details: '' }); 
      })
      .catch(() => {
        setStatusMessage({ type: 'error', text: 'Oops! Failed to send message. Please try again or message via WhatsApp.' });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const whatsappNumber = "250788302147";
  const message = encodeURIComponent("Hello Adonai Ltd, I am looking for an immediate logistics quote.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <section id="contact" className="py-24 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 block mb-2">Get In Touch</span>
            <h2 className="text-4xl font-bold text-slate-900 tracking-tight mb-6">Let's move your cargo.</h2>
            <p className="text-lg text-slate-600 mb-10">Tell us what you're shipping and where. We'll come back with a quote within 24 hours.</p>
          </div>
          
          <div className="space-y-4">
            {/* WhatsApp */}
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-white rounded-xl border border-[#25D366]/20 shadow-sm hover:border-[#25D366]/60 transition-colors group">
              <div className="w-10 h-10 rounded-full bg-[#25D366]/10 flex items-center justify-center text-[#25D366]">
                <MessageSquare size={18} className="fill-[#25D366] stroke-none" />
              </div>
              <div>
                <div className="text-xs text-[#25D366] font-bold uppercase tracking-wide">Instant Support</div>
                <div className="font-bold text-slate-900 group-hover:text-[#20ba5a] flex items-center gap-1.5 transition-colors">
                  Chat Directly via WhatsApp <ArrowRight size={14} />
                </div>
              </div>
            </a>

            {/* CALL US (From lstt.PNG) */}
            <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-emerald-600">
                <Phone size={18} />
              </div>
              <div className="font-bold text-slate-900">
                <span className="block text-[10px] text-slate-500 uppercase tracking-wider">Call Us</span>
                +250 788 302 147 <br /> +250 788 312 156
              </div>
            </div>

            {/* EMAIL US (From lstt.PNG) */}
            <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-emerald-600">
                <Mail size={18} />
              </div>
              <div className="font-bold text-slate-900">
                <span className="block text-[10px] text-slate-500 uppercase tracking-wider">Email Us</span>
                info@adonairwanda.com
              </div>
            </div>

            {/* OFFICE LOCATION (From lstt.PNG) */}
            <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-emerald-100 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
                <MapPin size={18} />
              </div>
              <div className="font-bold text-slate-900">
                <span className="block text-[10px] text-slate-500 uppercase tracking-wider">Office Location</span>
                Kigali - Gikondo - Magerwa
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-2xl shadow-sm border border-slate-200/60">
          <form onSubmit={handleSubmit} className="space-y-6">
            {statusMessage.text && (
              <div className={`p-4 rounded-lg text-sm font-semibold ${statusMessage.type === 'success' ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' : 'bg-rose-50 text-rose-800 border border-rose-200'}`}>
                {statusMessage.text}
              </div>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-2">Full Name *</label>
                <input type="text" required value={formData.fullName} onChange={e => setFormData({...formData, fullName: e.target.value})} className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:border-emerald-500 text-sm transition-colors text-slate-900" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-2">Company Name</label>
                <input type="text" value={formData.company} onChange={e => setFormData({...formData, company: e.target.value})} className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:border-emerald-500 text-sm transition-colors text-slate-900" placeholder="Enterprise Ltd" />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-2">Email Address *</label>
                <input type="email" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:border-emerald-500 text-sm transition-colors text-slate-900" placeholder="john@company.com" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-2">Phone Number *</label>
                <input type="tel" required value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:border-emerald-500 text-sm transition-colors text-slate-900" placeholder="+250 788 000 000" />
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold uppercase text-slate-700 mb-2">Cargo & Route Details *</label>
              <textarea required rows={4} value={formData.details} onChange={e => setFormData({...formData, details: e.target.value})} className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:border-emerald-500 text-sm transition-colors text-slate-900 resize-none" placeholder="Please describe cargo dimensions, weight, origin, and final destination parameters..."></textarea>
            </div>
            <button type="submit" disabled={isSubmitting} className="w-full bg-slate-900 hover:bg-slate-800 disabled:bg-slate-400 text-white font-bold py-4 rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer border-none">
              {isSubmitting ? 'Sending Request...' : 'Submit Quote Request'} <ArrowRight size={16} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}