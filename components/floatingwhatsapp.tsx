"use client";
import React from 'react';
import { MessageSquare } from 'lucide-react';

export default function FloatingWhatsApp() {
  const whatsappNumber = "250788302147";
  const message = encodeURIComponent("Hello Adonai Ltd, I am interested in your logistics and customs clearance services. I would like to request more information.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-[999] bg-[#25D366] hover:bg-[#20ba5a] text-white p-4 rounded-full shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 group" aria-label="Chat on WhatsApp">
      <MessageSquare size={26} className="fill-white stroke-none" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap font-semibold text-sm transition-all duration-300 group-hover:max-w-xs group-hover:ml-2">
        Chat with Us
      </span>
    </a>
  );
}