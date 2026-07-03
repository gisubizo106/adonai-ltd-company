import type { Metadata } from "next";
import "./globals.css";
import TopBar from "@/components/TopBar"; // 1. Import your new component
import Header from "@/components/header";
import Footer from "@/components/footer";
import FloatingWhatsApp from "@/components/floatingwhatsapp";

export const metadata: Metadata = {
  title: "Adonai Ltd company",
  description: "Comprehensive logistics, freight forwarding, and trade clearance models.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        <TopBar /> {/* 2. Place it here, above the Header */}
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}