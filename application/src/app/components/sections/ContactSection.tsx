"use client";

import Link from "next/link";
import CalendlyWidget from "../CalendlyWidget";

export default function ContactSection() {
   return (
      <div className="relative flex w-full">
         {/* Main content area */}
         <div className="flex flex-col flex-1 justify-center items-center bg-hicea-purple px-6 md:px-10 py-12">
            {/* Contact Form Card */}
            {/* <div className="bg-white shadow-2xl mb-8 p-2 lg:p-8 w-full max-w-4xl">
               <h2 className="font-semibold text-hicea-purple text-2xl text-center">
                  Agenda tu cita
               </h2>

               <CalendlyWidget />
            </div> */}

            {/* Company Information */}
            <div className="lg:flex lg:gap-8 w-full max-w-4xl text-white">
               {/* Company Name */}
               <h2 className="mb-8 text-4xl lg:text-6xl">Hicea</h2>

               {/* Branches */}
               <div className="lg:flex lg:gap-8 space-y-6 lg:space-y-0 mb-8">
                  {/* Sucursal Tonalá */}
                  <div>
                     <Link href="https://maps.app.goo.gl/AGPnPV9YYQP1uACP9" target="_blank" className="flex items-center gap-3 mb-2 hover:text-hicea-pink transition-colors">
                        <img
                           src="/assets/LOGO UBICACION.svg"
                           alt="Ubicación"
                           className="size-7 object-contain"
                        />
                        <h3 className="font-bold text-xl">Sucursal Tonalá</h3>
                     </Link>
                     <div className="space-y-1 text-sm">
                        <p>33 2220 5701 / 33 4681 5173</p>
                        <p>hicea.ginecologia@gmail.com</p>
                        <p>Prolongación González Ortega 107-A, C.P. 45409 Zalatitán, Tonalá, Jal.</p>
                     </div>
                  </div>

                  {/* Sucursal Santa Tere */}
                  <div>
                     <Link href="https://maps.app.goo.gl/vDGXyEG1ckVZvC9t8" target="_blank" className="flex items-center gap-3 mb-2 hover:text-hicea-pink transition-colors">
                        <img
                           src="/assets/LOGO UBICACION.svg"
                           alt="Ubicación"
                           className="size-7 object-contain"
                        />
                        <h3 className="font-bold text-xl">Sucursal Santa Tere</h3>
                     </Link>
                     <div className="space-y-1 text-sm">
                        <p>33 2809 9990 / 33 1045 3921</p>
                        <p>hicea.stateresita@gmail.com</p>
                        <p>C. Jesús García 1456 Local 28, Col. Villaseñor, C.P. 44600 GDL, Jal.</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div >
   );
}
