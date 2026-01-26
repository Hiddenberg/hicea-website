"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "../Buttons";
import CarouselItem1 from "../carouselItems/CarouselItem1";
import CarouselItem2 from "../carouselItems/CarouselItem2";
import CarouselItem3 from "../carouselItems/CarouselItem3";

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

interface HeroCarouselSectionProps {
   items: React.ReactNode[];
}

function HeroCarouselSection({ items }: HeroCarouselSectionProps) {
   const [currentIndex, setCurrentIndex] = useState(0);
   const carouselRef = useRef<HTMLDivElement>(null);

   const scrollToIndex = (index: number) => {
      if (!carouselRef.current) return;

      const container = carouselRef.current;
      const scrollWidth = container.scrollWidth;
      const itemWidth = scrollWidth / items.length;
      const targetScroll = itemWidth * index;

      container.scrollTo({
         left: targetScroll,
         behavior: "smooth",
      });
   };

   const handlePrevious = () => {
      const newIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
      scrollToIndex(newIndex);
   };

   const handleNext = () => {
      const newIndex = currentIndex === items.length - 1 ? 0 : currentIndex + 1;
      scrollToIndex(newIndex);
   };

   const goToSlide = (index: number) => {
      scrollToIndex(index);
   };

   useEffect(() => {
      const container = carouselRef.current;
      if (!container) return;

      const handleScroll = () => {
         const scrollWidth = container.scrollWidth;
         const itemWidth = scrollWidth / items.length;
         const scrollLeft = container.scrollLeft;
         const newIndex = Math.round(scrollLeft / itemWidth);

         if (
            newIndex !== currentIndex &&
            newIndex >= 0 &&
            newIndex < items.length
         ) {
            setCurrentIndex(newIndex);
         }
      };

      container.addEventListener("scroll", handleScroll);

      return () => {
         container.removeEventListener("scroll", handleScroll);
      };
   }, [items.length, currentIndex]);

   return (
      <div className="hidden md:block relative bg-linear-to-br from-hicea-purple via-25% via-hicea-purple to-hicea-pink pt-24 lg:w-full overflow-hidden">
         {/* Left Arrow */}
         <button
            type="button"
            onClick={handlePrevious}
            className="top-1/2 left-4 z-10 absolute flex justify-center items-center hover:opacity-80 w-10 h-10 text-white transition-opacity -translate-y-1/2"
            aria-label="Previous slide"
         >
            <ChevronLeft className="size-8" strokeWidth={3} />
         </button>

         {/* Carousel Container */}
         <div
            ref={carouselRef}
            className="relative flex items-center w-full *:min-w-full lg:*:h-[70dvh] *:h-96 overflow-hidden snap-mandatory snap-x *:snap-center"
         >
            {items.map((item) => {
               return item;
            })}
         </div>

         {/* Right Arrow */}
         <button
            type="button"
            onClick={handleNext}
            className="top-1/2 right-4 z-10 absolute flex justify-center items-center hover:opacity-80 w-10 h-10 text-white transition-opacity -translate-y-1/2"
            aria-label="Next slide"
         >
            <ChevronRight className="size-8" strokeWidth={3} />
         </button>

         {/* Dot Indicators */}
         <div className="bottom-0 left-0 z-10 absolute flex justify-center items-center gap-2 mt-6 pb-4 w-full">
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
      <CarouselItem1 key="slide-1" />,
      <CarouselItem2 key="slide-2" />,
      <CarouselItem3 key="slide-3" />,
   ];

   return (
      <div>
         <HeroMobileSection girlImage="/assets/girl-2.png" />
         <HeroCarouselSection items={carouselItems} />
      </div>
   );
}
