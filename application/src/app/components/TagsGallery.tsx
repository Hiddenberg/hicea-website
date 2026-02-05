"use client";

import { useEffect, useState } from "react";
import TextLineIcon from "./TextLineIcon";

const tagImageLinks = [
   "/assets/tags/checkupusg_vaginal.png",
   "/assets/tags/implante.png",
   "/assets/tags/diu_mirena.png",
   "/assets/tags/consulta_prenatal.png",
   "/assets/tags/biopsia.png",
   "/assets/tags/ecotransconsulta.png",
   "/assets/tags/checkup__cultivo.png",
   "/assets/tags/diu_de_cobre.png",
   "/assets/tags/diu_de_plata.png",
   "/assets/tags/checkup_masculino.png",
   "/assets/tags/etscultivo.png",
   "/assets/tags/ets_y_its.png",
];

interface GalleryImageProps {
   src: string;
   index: number;
   onClick: () => void;
}

function GalleryImage({ src, index, onClick }: GalleryImageProps) {
   return (
      <button
         type="button"
         className="group relative shadow-lg hover:shadow-[0_20px_40px_-12px_rgba(168,85,247,0.3)] rounded-lg w-full overflow-hidden text-left transition-all hover:-translate-y-1 duration-300 cursor-pointer"
         onClick={onClick}
         aria-label={`View service ${index + 1}`}
      >
         <div className="bg-gray-100 w-full aspect-4/3 overflow-hidden">
            <img
               src={src}
               alt={`Service ${index + 1}`}
               className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
               loading="lazy"
            />
         </div>
         <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </button>
   );
}

interface ImageModalProps {
   src: string;
   isOpen: boolean;
   onClose: () => void;
}

function ImageModal({ src, isOpen, onClose }: ImageModalProps) {
   useEffect(() => {
      const handleEscape = (e: KeyboardEvent) => {
         if (e.key === "Escape") {
            onClose();
         }
      };

      if (isOpen) {
         document.addEventListener("keydown", handleEscape);
         document.body.style.overflow = "hidden";
      }

      return () => {
         document.removeEventListener("keydown", handleEscape);
         document.body.style.overflow = "unset";
      };
   }, [isOpen, onClose]);

   if (!isOpen) return null;

   const handleBackdropKeyDown = (e: React.KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") {
         e.preventDefault();
         onClose();
      }
   };

   return (
      <div
         className="z-50 fixed inset-0 flex justify-center items-center bg-black/80 backdrop-blur-sm p-4 transition-opacity duration-300"
         onClick={onClose}
         onKeyDown={handleBackdropKeyDown}
         role="dialog"
         aria-modal="true"
         aria-label="Image modal"
         tabIndex={-1}
      >
         <div className="relative flex justify-center items-center w-full max-w-7xl h-full max-h-[90vh] pointer-events-none">
            <div className="relative flex justify-center items-center w-full h-full pointer-events-auto">
               <button
                  type="button"
                  onClick={onClose}
                  className="top-4 right-4 z-10 absolute hover:bg-white/10 p-2 rounded-full text-white hover:text-hicea-pink transition-colors duration-200"
                  aria-label="Close modal"
               >
                  <svg
                     className="w-8 h-8"
                     fill="none"
                     stroke="currentColor"
                     viewBox="0 0 24 24"
                     aria-hidden="true"
                  >
                     <title>Close</title>
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                     />
                  </svg>
               </button>
               <img
                  src={src}
                  alt="Enlarged service"
                  className="shadow-2xl rounded-lg max-w-full max-h-full object-contain"
               />
            </div>
         </div>
      </div>
   );
}

export default function TagsGallerySection() {
   const [selectedImage, setSelectedImage] = useState<string | null>(null);

   const handleImageClick = (src: string) => {
      setSelectedImage(src);
   };

   const handleCloseModal = () => {
      setSelectedImage(null);
   };

   return (
      <div className="p-6 md:px-10 lg:px-16 w-full">
         <TextLineIcon purple />
         <h2 className="mb-8 font-semibold text-hicea-purple text-3xl">
            Otros Servicios
         </h2>

         <div className="gap-4 md:gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {tagImageLinks.map((src, index) => (
               <GalleryImage
                  key={src}
                  src={src}
                  index={index}
                  onClick={() => handleImageClick(src)}
               />
            ))}
         </div>

         <ImageModal
            src={selectedImage || ""}
            isOpen={selectedImage !== null}
            onClose={handleCloseModal}
         />
      </div>
   );
}
