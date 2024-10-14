"use client";
// 

import DocumentPage from "./components/document/page";
import FooterSection from "./components/footer";
import HeaderSection from "./components/header";
import HeroSection from "./components/herosection";

// home page 
export default function HomePage() {
  return (
    <div className=" bg-gradient-to-br from-green-400 to-slate-300 min-h-screen">
      
      <HeaderSection />

      <HeroSection />

      <DocumentPage />

      <FooterSection />
    </div>
  );
}
