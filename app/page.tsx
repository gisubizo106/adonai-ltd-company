"use client"; // <--- ADD THIS LINE AT THE TOP

import React from "react";
import WelcomeHome from "@/components/Welcome-home";
import Services from "@/components/services";
import WhyUs from "@/components/whyus";
import Network from "@/components/network";
import About from "@/components/about";
import Contact from "@/components/contact";
import Hero from "@/components/hero";
import CompanyOverview from '@/components/companyOverview';
import Testimonials from '@/components/Testimonials';
export default function HomePage() {
  const handleViewChange = (viewName: string) => {
    const element = document.getElementById(viewName);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen bg-[#fdfdfd]">
      <Hero />
      <WelcomeHome onViewChange={handleViewChange} />
      <CompanyOverview />
      {/* <div id="services">
        <Services />
      </div> */}
      <div id="whyus">
        <WhyUs />
      </div>
      <div id="network">
        <Network />
      </div>
      {/* <div id="about">
        <About />
      </div> */}
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </main>
  );
}