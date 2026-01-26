import { Button } from "../Buttons";

export default function CarouselItem2() {
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
            src="/assets/girl-2.png"
            alt="Girl"
            className="-ml-5 h-94 object-contain"
         />
      </div>
   );
}
