import MobileHeader from "./components/MobileHeader";
import AboutUsSection from "./components/sections/AboutUsSection";
import HeroSection from "./components/sections/HeroSection";
import OurTeamSection from "./components/sections/OurTeamSection";

export default function Home() {
   return (
      <main className="relative">
         <MobileHeader />
         <HeroSection />
         <AboutUsSection />
         <OurTeamSection />
      </main>
   );
}
