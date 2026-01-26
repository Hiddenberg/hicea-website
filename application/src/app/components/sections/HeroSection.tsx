"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { Button } from "../Buttons";

function HeroMobileSection({ girlImage }: { girlImage: string }) {
   return (
      <div className="md:hidden bg-linear-to-br from-hicea-purple via-25% via-hicea-purple to-hicea-pink pt-24">
         <div className="font-bold">
            <h1 className="text-white text-3xl text-center leading-7">
               <p>INICIA EL 2026</p>
               <p>CUIDANDOTE</p>
            </h1>
            <p className="text-hicea-pink text-6xl text-center">CHEK-UP</p>
            <p className="text-white text-8xl text-center leading-20">$499</p>
         </div>
         <div className="flex items-center -mt-10 px-2 w-full">
            <div className="flex flex-col items-end gap-2">
               <p className="text-[10px] text-white text-right leading-3">
                  Exploración mamaria, papanicolaou, colposcopia, revisión de
                  métodos anticonceptivos, consulta especializada y detección de
                  cáncer cervicouterino
               </p>
               <Button className="font-semibold text-sm">
                  Haz tu cita aquí
               </Button>
            </div>
            <img src={girlImage} alt="Girl" className="h-64 object-contain" />
         </div>
      </div>
   );
}

interface CarouselItemProps {
   girlImage: string;
}

function CarouselItem1({ girlImage }: CarouselItemProps) {
   return (
      <div className="flex justify-center items-end min-w-full">
         <div className="flex flex-col items-end pb-10 font-bold">
            <h1 className="text-white text-3xl text-right leading-7">
               <p>INICIA EL 2026</p>
               <p>CUIDANDOTE</p>
            </h1>
            <p className="text-hicea-pink text-6xl text-center">CHEK-UP</p>
            <p className="text-white text-8xl text-center leading-20">$499</p>
            <div className="flex items-center px-2 w-full">
               <div className="flex flex-col items-end gap-2">
                  <p className="font-semibold text-hicea-pink text-sm">
                     Incluye:
                  </p>
                  <p className="w-72 font-medium text-white text-sm text-right leading-3">
                     Exploración mamaria, papanicolaou, colposcopia, revisión de
                     métodos anticonceptivos, consulta especializada y detección
                     de cáncer cervicouterino
                  </p>
                  <Button className="font-semibold text-sm">
                     Haz tu cita aquí
                  </Button>
               </div>
            </div>
         </div>

         <img
            src={girlImage}
            alt="Girl"
            className="-ml-5 h-94 object-contain"
         />
      </div>
   );
}

interface HeroCarouselSectionProps {
   items: React.ReactNode[];
}

function HeroCarouselSection({ items }: HeroCarouselSectionProps) {
   const [currentIndex, setCurrentIndex] = useState(0);
   const [isTransitioning, setIsTransitioning] = useState(false);

   const CHANGE_INTERVAL = 30000;

   const goToSlide = useCallback(
      (index: number) => {
         if (isTransitioning) return;
         setIsTransitioning(true);
         setCurrentIndex(index);
         setTimeout(() => setIsTransitioning(false), 300);
      },
      [isTransitioning],
   );

   const goToPrevious = useCallback(() => {
      if (isTransitioning) return;
      const newIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
      goToSlide(newIndex);
   }, [currentIndex, items.length, isTransitioning, goToSlide]);

   const goToNext = useCallback(() => {
      if (isTransitioning) return;
      const newIndex = currentIndex === items.length - 1 ? 0 : currentIndex + 1;
      goToSlide(newIndex);
   }, [currentIndex, items.length, isTransitioning, goToSlide]);

   useEffect(() => {
      const interval = setInterval(() => {
         if (isTransitioning) return;
         const newIndex =
            currentIndex === items.length - 1 ? 0 : currentIndex + 1;
         goToSlide(newIndex);
      }, CHANGE_INTERVAL);

      return () => clearInterval(interval);
   }, [currentIndex, items.length, isTransitioning, goToSlide]);

   return (
      <div className="hidden md:block relative bg-linear-to-br from-hicea-purple via-25% via-hicea-purple to-hicea-pink pt-24 overflow-hidden">
         {/* Left Arrow */}
         <button
            type="button"
            onClick={goToPrevious}
            className="top-1/2 left-4 z-10 absolute flex justify-center items-center hover:opacity-80 w-10 h-10 text-white transition-opacity -translate-y-1/2"
            aria-label="Previous slide"
         >
            <ChevronLeft className="size-8" strokeWidth={3} />
         </button>

         {/* Carousel Container */}
         <div className="relative overflow-hidden">
            <div
               className="flex items-end transition-transform duration-300 ease-in-out"
               style={{
                  transform: `translateX(-${currentIndex * 100}%)`,
               }}
            >
               {items.map((item, index) => {
                  const key =
                     typeof item === "object" &&
                        item !== null &&
                        "key" in item &&
                        item.key !== null
                        ? String(item.key)
                        : `carousel-item-${index}`;
                  return (
                     <div key={key} className="min-w-full shrink-0">
                        {item}
                     </div>
                  );
               })}
            </div>
         </div>

         {/* Right Arrow */}
         <button
            type="button"
            onClick={goToNext}
            className="top-1/2 right-4 z-10 absolute flex justify-center items-center hover:opacity-80 w-10 h-10 text-white transition-opacity -translate-y-1/2"
            aria-label="Next slide"
         >
            <ChevronRight className="size-8" strokeWidth={3} />
         </button>

         {/* Dot Indicators */}
         <div className="bottom-0 left-0 absolute flex justify-center items-center gap-2 mt-6 pb-4 w-full">
            {items.map((item, index) => {
               const key =
                  typeof item === "object" &&
                     item !== null &&
                     "key" in item &&
                     item.key !== null
                     ? String(item.key)
                     : `carousel-dot-${index}`;
               return (
                  <button
                     key={key}
                     type="button"
                     onClick={() => goToSlide(index)}
                     className={`transition-all duration-300 rounded-full ${index === currentIndex
                        ? "w-3 h-3 bg-white"
                        : "w-2 h-2 bg-white/60 hover:bg-white/80"
                        }`}
                     aria-label={`Go to slide ${index + 1}`}
                  />
               );
            })}
         </div>
      </div>
   );
}

export default function HeroSection() {
   const carouselItems: React.ReactNode[] = [
      <CarouselItem1 key="slide-1" girlImage="/assets/girl-2.png" />,
      <CarouselItem1 key="slide-2" girlImage="/assets/girl-1.png" />,
      <CarouselItem1 key="slide-3" girlImage="/assets/girl-3.png" />,
   ];

   return (
      <div>
         <HeroMobileSection girlImage="/assets/girl-2.png" />
         <HeroCarouselSection items={carouselItems} />
      </div>
   );
}
