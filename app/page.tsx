"use client";

// import components  
import HeaderSection from "./components/header";
import HeroSection from "./components/herosection";
import FooterSection from "./components/footer";

//  export default home page 
export default function HomePage() {
  return (
    <div className=" bg-gradient-to-r from-green-300 to-slate-300 min-h-screen">
      
      <HeaderSection />
      <HeroSection />
      <FooterSection />
    </div>
  );
}
