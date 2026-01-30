import CalendlyButton from "../CalendlyButton";

export default function CarouselItem2() {
   return (
      <div className="flex justify-center items-center min-w-full">
         <div className="flex flex-col items-end pb-10">
            <h1 className="font-bold text-white text-3xl lg:text-5xl text-right leading-7 lg:leading-10">
               <p>INICIA EL 2026</p>
               <p>CUIDANDOTE</p>
            </h1>
            <p className="font-bold text-hicea-pink text-6xl text-center">CHEK-UP</p>
            <p className="font-bold text-white text-8xl text-center leading-20">$499</p>
            <div className="flex lg:justify-end items-center px-2 w-full">
               <div className="flex flex-col items-end gap-2">
                  <p className="font-semibold text-hicea-pink text-sm">
                     Incluye:
                  </p>
                  <p className="w-72 font-medium text-white text-sm text-right leading-3">
                     Exploración mamaria, papanicolaou, colposcopia, revisión de
                     métodos anticonceptivos, consulta especializada y detección
                     de cáncer cervicouterino
                  </p>
                  <CalendlyButton />
               </div>
            </div>
         </div>

         <img
            src="/assets/girl-2.png"
            alt="Girl"
            className="-ml-5 h-full object-contain"
         />
      </div>
   );
}
