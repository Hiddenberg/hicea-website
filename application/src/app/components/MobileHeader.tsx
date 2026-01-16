"use client";

import { MenuIcon } from "lucide-react";
import { useEffect, useState } from "react";

export default function MobileHeader() {
   const [isScrolled, setIsScrolled] = useState(false);

   useEffect(() => {
      const handleScroll = () => {
         setIsScrolled(window.scrollY > 0);
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
   }, []);

   return (
      <div className={`top-0 z-50 fixed flex justify-between items-center px-4 py-4 w-full h-20 transition-colors duration-300 ${isScrolled ? "bg-black/20 backdrop-blur-sm" : ""}`}>
         <img src="/assets/hicea-logo.svg" alt="Hicea Logo" className="w-auto h-full" />

         <button>
            <MenuIcon strokeWidth={3} className={`size-8 transition-colors duration-300 text-white`} />
         </button>
      </div>
   );
}
