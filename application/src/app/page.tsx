import FloatingWhatsappButton from "./components/FloatingWhatsappButton";
import Header from "./components/Header";
import AboutUsSection from "./components/sections/AboutUsSection";
import ContactSection from "./components/sections/ContactSection";
import FooterSection from "./components/sections/FooterSection";
import HeroSection from "./components/sections/HeroSection";
import OurFocusSection from "./components/sections/OurFocusSection";
import OurTeamSection from "./components/sections/OurTeamSection";
import ServicesSection from "./components/sections/ServicesSection";
import TagsGallerySection from "./components/TagsGallery";

export default function Home() {
   return (
      <main className="relative mx-auto max-w-360">
         <Header />
         <section id="inicio">
            <HeroSection />
         </section>
         <section id="sobre-nosotros">
            <AboutUsSection />
         </section>
         <OurTeamSection />
         <OurFocusSection />
         <section id="servicios">
            <ServicesSection />
         </section>
         <TagsGallerySection />
         <section id="contacto">
            <ContactSection />
         </section>
         <FooterSection />
         <FloatingWhatsappButton />
      </main>
   );
}
