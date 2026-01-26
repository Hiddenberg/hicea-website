"use client";

import { useState } from "react";

export default function ContactSection() {
   const [formData, setFormData] = useState({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
   });

   const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      // Handle form submission here
      console.log("Form submitted:", formData);
   };

   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData({
         ...formData,
         [e.target.name]: e.target.value
      });
   };

   return (
      <div className="relative flex w-full">
         {/* Main content area */}
         <div className="flex flex-col flex-1 justify-center items-center bg-hicea-purple px-6 md:px-10 py-12">
            {/* Contact Form Card */}
            <div className="bg-white shadow-2xl mb-12 p-8 w-full max-w-4xl">
               <h2 className="mb-6 font-semibold text-hicea-purple text-2xl text-center">
                  Ponte en contacto con nosotros
               </h2>

               <form onSubmit={handleSubmit} className="gap-4 grid grid-cols-10">
                  {/* First row - Name and Email (equal width: 5 cols each) */}
                  <input
                     type="text"
                     name="name"
                     placeholder="Nombre"
                     value={formData.name}
                     onChange={handleChange}
                     className="col-span-5 bg-gray-200 px-4 py-3 border-none rounded outline-none"
                  />
                  <input
                     type="email"
                     name="email"
                     placeholder="Email"
                     value={formData.email}
                     onChange={handleChange}
                     className="col-span-5 bg-gray-200 px-4 py-3 border-none rounded outline-none"
                  />

                  {/* Second row onwards - Left column (6 cols ~60%) and Right column (4 cols ~40%, message spans 2 rows) */}
                  <div className="flex flex-col gap-4 col-span-6 row-span-2">
                     <input
                        type="tel"
                        name="phone"
                        placeholder="Teléfono"
                        value={formData.phone}
                        onChange={handleChange}
                        className="bg-gray-200 px-4 py-3 border-none rounded outline-none"
                     />
                     <input
                        type="text"
                        name="subject"
                        placeholder="Asunto"
                        value={formData.subject}
                        onChange={handleChange}
                        className="bg-gray-200 px-4 py-3 border-none rounded outline-none"
                     />
                  </div>
                  <textarea
                     name="message"
                     placeholder="Mensaje"
                     value={formData.message}
                     onChange={handleChange}
                     rows={4}
                     className="col-span-4 row-span-2 bg-gray-200 px-4 py-3 border-none rounded outline-none resize-none"
                  />

                  {/* Submit button */}
                  <div className="flex justify-end col-span-10 mt-4">
                     <button
                        type="submit"
                        className="bg-contact-button-purple px-8 py-3 rounded-lg font-semibold text-white"
                     >
                        Enviar
                     </button>
                  </div>
               </form>
            </div>

            {/* Company Information */}
            <div className="lg:flex lg:gap-8 w-full max-w-4xl text-white">
               {/* Company Name */}
               <h2 className="mb-8 text-4xl lg:text-6xl">Hicea</h2>

               {/* Branches */}
               <div className="lg:flex lg:gap-8 space-y-6 lg:space-y-0 mb-8">
                  {/* Sucursal Tonalá */}
                  <div>
                     <div className="flex items-center gap-3 mb-2">
                        <img
                           src="/assets/LOGO UBICACION.svg"
                           alt="Ubicación"
                           className="size-7 object-contain"
                        />
                        <h3 className="font-bold text-xl">Sucursal Tonalá</h3>
                     </div>
                     <div className="space-y-1 text-sm">
                        <p>33 2220 5701 / 33 4681 5173</p>
                        <p>hicea.ginecologia@gmail.com</p>
                        <p>Prolongación González Ortega 107-A, C.P. 45409 Zalatitán, Tonalá, Jal.</p>
                     </div>
                  </div>

                  {/* Sucursal Santa Tere */}
                  <div>
                     <div className="flex items-center gap-3 mb-2">
                        <img
                           src="/assets/LOGO UBICACION.svg"
                           alt="Ubicación"
                           className="size-7 object-contain"
                        />
                        <h3 className="font-bold text-xl">Sucursal Santa Tere</h3>
                     </div>
                     <div className="space-y-1 text-sm">
                        <p>33 2809 9990 / 33 1045 3921</p>
                        <p>hicea.stateresita@gmail.com</p>
                        <p>C. Jesús García 1456 Local 28, Col. Villaseñor, C.P. 44600 GDL, Jal.</p>
                     </div>
                  </div>
               </div>

            </div>
            {/* WhatsApp Contact */}
            <div className="flex items-center gap-4">
               <div className="flex justify-center items-center bg-hicea-pink rounded-full size-16">
                  <svg
                     width="32"
                     height="32"
                     viewBox="0 0 24 24"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                     className="text-hicea-purple"
                  >
                     <title>WhatsApp</title>
                     <path
                        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
                        fill="currentColor"
                     />
                  </svg>
               </div>
               <p className="font-semibold text-white">Escribenos en Whatsapp</p>
            </div>
         </div>
      </div >
   );
}
