import MobileHeader from "./components/MobileHeader";
import AboutUsSection from "./components/sections/AboutUsSection";
import ContactSection from "./components/sections/ContactSection";
import HeroSection from "./components/sections/HeroSection";
import OtherServicesSection from "./components/sections/OtherServicesSection";
import OurFocusSection from "./components/sections/OurFocusSection";
import OurTeamSection from "./components/sections/OurTeamSection";
import ServicesSection from "./components/sections/ServicesSection";

export default function Home() {
   return (
      <main className="relative">
         <MobileHeader />
         <HeroSection />
         <AboutUsSection />
         <OurTeamSection />
         <OurFocusSection />
         <ServicesSection />
         <OtherServicesSection />
         <ContactSection />
      </main>
   );
}
