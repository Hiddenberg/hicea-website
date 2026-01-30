"use client";

import { MenuIcon, X } from "lucide-react";
import { useEffect, useState } from "react";

interface MenuItemProps {
   label: string;
   sectionId: string;
   onClick: (sectionId: string) => void;
   isVisible: boolean;
   delay: number;
}

function MenuItem({
   label,
   sectionId,
   onClick,
   isVisible,
   delay,
}: MenuItemProps) {
   return (
      <button
         type="button"
         onClick={() => onClick(sectionId)}
         className="group relative flex justify-center items-center bg-white/10 hover:bg-white/20 backdrop-blur-sm px-6 py-4 border-2 border-white/20 hover:border-white/40 rounded-lg w-full hover:scale-105 active:scale-100 transition-all duration-300"
         style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: `all 0.4s ease-out ${delay}ms`,
         }}
      >
         <span className="z-10 relative font-bold text-white text-2xl">
            {label}
         </span>
         <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300" />
      </button>
   );
}

const menuItems = [
   { label: "Inicio", sectionId: "inicio" },
   { label: "Sobre nosotros", sectionId: "sobre-nosotros" },
   { label: "Servicios", sectionId: "servicios" },
   { label: "Contacto", sectionId: "contacto" },
];

function HeaderLink({
   label,
   sectionId,
}: {
   label: string;
   sectionId: string;
}) {
   return (
      <a href={`#${sectionId}`} className="text-white hover:text-hicea-pink transition-colors duration-300">
         {label}
      </a>
   );
}

export default function Header() {
   const [isScrolled, setIsScrolled] = useState(false);
   const [isMenuOpen, setIsMenuOpen] = useState(false);

   useEffect(() => {
      const handleScroll = () => {
         setIsScrolled(window.scrollY > 0);
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
   }, []);

   useEffect(() => {
      if (isMenuOpen) {
         document.body.style.overflow = "hidden";
      } else {
         document.body.style.overflow = "unset";
      }

      return () => {
         document.body.style.overflow = "unset";
      };
   }, [isMenuOpen]);

   const handleNavClick = (sectionId: string) => {
      setIsMenuOpen(false);
      const element = document.getElementById(sectionId);
      if (element) {
         const headerOffset = 80;
         const elementPosition = element.getBoundingClientRect().top;
         const offsetPosition = elementPosition + window.scrollY - headerOffset;

         window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
         });
      }
   };

   return (
      <div>
         <div
            className={`top-0 z-50 max-w-360 fixed flex justify-between items-center md:px-8 px-6 py-4 w-full h-20 transition-colors duration-300 ${isScrolled ? "bg-hicea-purple backdrop-blur-sm" : ""}`}
         >
            <img
               src="/assets/hicea-logo.svg"
               alt="Hicea Logo"
               className="w-auto h-full"
            />

            <button
               type="button"
               onClick={() => setIsMenuOpen(!isMenuOpen)}
               className="md:hidden z-50"
               aria-label="Toggle menu"
            >
               {isMenuOpen ? (
                  <X
                     strokeWidth={3}
                     className="size-8 text-white transition-colors duration-300"
                  />
               ) : (
                  <MenuIcon
                     strokeWidth={3}
                     className="size-8 text-white transition-colors duration-300"
                  />
               )}
            </button>

            <div className="hidden md:block space-x-4">
               {menuItems.map((item) => (
                  <HeaderLink
                     key={item.sectionId}
                     label={item.label}
                     sectionId={item.sectionId}
                  />
               ))}
               <div className="inline space-x-2">
                  <a
                     href="instagram.com"
                     target="_blank"
                     className="text-white"
                     rel="noopener"
                  >
                     <img
                        src="/assets/IG-LOGO.svg"
                        alt="Instagram Logo"
                        className="inline size-5 hover:scale-110 transition-transform duration-300"
                     />
                  </a>
                  <a
                     href="facebook.com"
                     target="_blank"
                     className="text-white"
                     rel="noopener"
                  >
                     <img
                        src="/assets/FB-LOGO.svg"
                        alt="Facebook Logo"
                        className="inline size-5 hover:scale-110 transition-transform duration-300"
                     />
                  </a>
               </div>
            </div>
         </div>

         {/* Menu Overlay */}
         <div
            className={`top-0 left-0 z-40 fixed w-full h-screen bg-linear-to-br from-hicea-purple via-25% via-hicea-purple to-hicea-pink transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"
               }`}
         >
            <div className="flex flex-col justify-center items-center gap-6 px-6 pt-20 h-full">
               {/* Logo in menu */}
               <div
                  className="mb-8 transition-all duration-500"
                  style={{
                     opacity: isMenuOpen ? 1 : 0,
                     transform: isMenuOpen
                        ? "translateY(0) scale(1)"
                        : "translateY(-20px) scale(0.9)",
                  }}
               >
                  <img
                     src="/assets/hicea-logo.svg"
                     alt="Hicea Logo"
                     className="drop-shadow-lg w-auto h-16 object-contain"
                  />
               </div>

               {/* Menu Items */}
               <div className="flex flex-col gap-4 w-full max-w-md">
                  {menuItems.map((item, index) => (
                     <MenuItem
                        key={item.sectionId}
                        label={item.label}
                        sectionId={item.sectionId}
                        onClick={handleNavClick}
                        isVisible={isMenuOpen}
                        delay={index * 80}
                     />
                  ))}
               </div>

               {/* Social Media Links */}
               <div
                  className="flex gap-6 mt-8 transition-all duration-500"
                  style={{
                     opacity: isMenuOpen ? 1 : 0,
                     transform: isMenuOpen
                        ? "translateY(0)"
                        : "translateY(20px)",
                     transition: `all 0.4s ease-out ${menuItems.length * 80}ms`,
                  }}
               >
                  <a
                     href="instagram.com"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="flex justify-center items-center bg-white/10 hover:bg-white/20 backdrop-blur-sm p-4 border-2 border-white/20 hover:border-white/40 rounded-lg hover:scale-105 active:scale-100 transition-all duration-300"
                  >
                     <img
                        src="/assets/IG-LOGO.svg"
                        alt="Instagram Logo"
                        className="size-6"
                     />
                  </a>
                  <a
                     href="facebook.com"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="flex justify-center items-center bg-white/10 hover:bg-white/20 backdrop-blur-sm p-4 border-2 border-white/20 hover:border-white/40 rounded-lg hover:scale-105 active:scale-100 transition-all duration-300"
                  >
                     <img
                        src="/assets/FB-LOGO.svg"
                        alt="Facebook Logo"
                        className="size-6"
                     />
                  </a>
               </div>
            </div>
         </div>
      </div>
   );
}
