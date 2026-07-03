
import React from 'react';
import { Ship, FileText, Clock, Truck, Warehouse, Briefcase, HelpCircle, Globe, ShieldCheck } from 'lucide-react';

export const SERVICES_DATA = {
  "freight-forwarding": {
    title: " Freight Forwarding",
    icon: <Ship size={40} />,
    image: "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=800&q=80",
    summary: "Air Freight, Sea Freight (FCL & LCL), Road Freight & Multimodal Transport",
    description: "Our comprehensive freight forwarding solutions bridge continental gaps to seamlessly transport your goods across major international trade networks..."
  },
  "customs-clearance": {
    title: " Customs Clearance",
    icon: <FileText size={40} />,
    image: "/assets/clearance.PNG", // Pointing directly to public/assets/
    summary: "Import & Export Customs Clearance, Transit Cargo Clearance, Complete Docs & Compliance",
    description: "Navigating local customs structures requires local expertise and meticulous accuracy..."
  },
  "door-to-door": {
    title: " Door-to-Door Delivery",
    icon: <Clock size={40} />,
    image: "/assets/door-to-door.PNG",
    summary: "Direct Collection, Last-Mile Distribution, Swift Express Delivery",
    description: "From the moment cargo leaves your overseas supplier's assembly line or warehouse..."
  },
  "cargo-handling": {
    title: " Cargo Handling & Transport",
    icon: <Truck size={40} />,
    image: "/assets/cargo.PNG",
    summary: "Consolidation & Deconsolidation, Reliable Infrastructure, Complex Project Cargo",
    description: "We provide high-integrity ground management for heavy-duty, delicate, or mixed freight..."
  },
  "warehousing": {
    title: " Warehousing & Distribution",
    icon: <Warehouse size={40} />,
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
    summary: "Secure Storage, Advanced Inventory Layouts, Optimized Distribution",
    description: "Keep your supply streams moving efficiently with our clean, secure, and strategically situated warehousing options..."
  },
  "procurement": {
    title: " Procurement & Sourcing",
    icon: <Briefcase size={40} />,
    image: "/assets/procurement.PNG",
    summary: "Product Sourcing, Purchase Orders Management, Quality Inspection Coordination",
    description: "Simplify complex cross-border procurement workflows..."
  },
  "trade-consultancy": {
    title: " Trade Consultancy",
    icon: <HelpCircle size={40} />,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    summary: "Expert Advisory, Shipping Documentation Support, Customs Guidance",
    description: "Avoid expensive log jams and compliance regulatory slip-ups through expert pre-shipment advisory..."
  },
  "cross-border-logistics": {
    title: " Cross-Border Logistics",
    icon: <Globe size={40} />,
    image: "/assets/crossing.PNG",
    summary: "East African Regional Transport Routes, Cross-Border Cargo, Transit Docs",
    description: "Specialized overland tracking designed around East African regional commercial infrastructure..."
  },
  "compliance-special-ops": {
    title: " Compliance & Special Ops",
    icon: <ShieldCheck size={40} />,
    image: "/assets/comp.PNG",
    summary: "Accurate EBM Support, Import Permit Assistance, Commercial & Project Logistics",
    description: "Tailor-made assistance protecting critical commercial shipments from unexpected delays..."
  }
};

export const GOOGLE_MAPS_URL = "https://www.google.com/maps/search/?api=1&query=Magerwa+Gikondo+Kigali+Rwanda";

// Add this at the very bottom of data/services.ts

export const TEAM_DATA = [
  {
    name: "Management Team",
    role: "Logistics Operations & Coordination",
    bio: "Overseeing seamless regional clearance protocols and heavy ground freight forwarding routes.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Compliance Specialists",
    role: "Customs Brokerage & EBM Validation",
    bio: "Dedicated experts ensuring flawless documentation audits and local regulatory alignment.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80"
  }
];

// Replace the old PARTNERS_CLIENTS array at the bottom of data/services.tsx with this:

export const PARTNERS_CLIENTS = [
  {
    id: "hass",
    name: "Hass",
    image: "/assets/CLIENTS/Hass-Website-Logo-01.png",
    description: "Adonai Ltd provides specialized customs brokerage and freight forwarding for Hass, ensuring seamless supply chain integration.",
    solutions: ["Priority Customs Clearance", "Dedicated Freight Lanes"],
    // ... rest of your data
  },
  {
    id: "bsc",
    name: "BSC",
    image: "/assets/CLIENTS/logo_588999810.jpg",
    description: "Adonai Ltd provides specialized customs brokerage and freight forwarding for AOS, ensuring seamless supply chain integration.",
    solutions: ["Priority Customs Clearance", "Dedicated Freight Lanes"],
    // ...
  },
  {
    id: "aos",
    name: "AOS",
    image: "/assets/CLIENTS/images (1).png",
    description: "Adonai Ltd provides specialized customs brokerage and freight forwarding for Jibu Gas One, ensuring seamless supply chain integration.",
    solutions: ["Priority Customs Clearance", "Dedicated Freight Lanes"],
    // ...
  },
  {
    id: "jibu",
    name: "jibu",
    image: "/assets/CLIENTS/images (2).png",
    description: "Adonai Ltd provides specialized customs brokerage and freight forwarding for Agri Gear, ensuring seamless supply chain integration.",
    solutions: ["Priority Customs Clearance", "Dedicated Freight Lanes"],
    // ...
  },
  {
    id: "glm",
    name: "GLM",
    image: "/assets/CLIENTS/images (4).jfif",
    description: "Adonai Ltd provides specialized customs brokerage and freight forwarding for Rubis, ensuring seamless supply chain integration.",
    solutions: ["Priority Customs Clearance", "Dedicated Freight Lanes"],
    // ...
  },
  {
    id: "rubis",
    name: "Rubis",
    image: "/assets/CLIENTS/images (5).jfif",
    description: "Adonai Ltd provides specialized customs brokerage and freight forwarding for Oryx Energies, ensuring seamless supply chain integration.",
    solutions: ["Priority Customs Clearance", "Dedicated Freight Lanes"],
    // ...
  },
  {
    id: "orxy",
    name: "orxy",
    image: "/assets/CLIENTS/images.jfif",
    description: "Adonai Ltd provides specialized customs brokerage and freight forwarding for Broadband Systems Corporation, ensuring seamless supply chain integration.",
    solutions: ["Priority Customs Clearance", "Dedicated Freight Lanes"],
    // ...
  },
  {
    id: "mnr",
    name: "MNR",
    image: "/assets/CLIENTS/MNRLOGO.jpg",
    description: "Adonai Ltd provides specialized customs brokerage and freight forwarding for MNR East Africa Ltd, ensuring seamless supply chain integration.",
    solutions: ["Priority Customs Clearance", "Dedicated Freight Lanes"],
    // ...
  }
];