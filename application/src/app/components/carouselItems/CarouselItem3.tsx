import { Button } from "../Buttons";

export default function CarouselItem3() {
   return (
      <div className="flex justify-center items-center">
         <img src="/assets/girl-3.png" alt="Girl" className="z-10 h-full object-contain" />
         <div className="space-y-14 -ml-10">
            <div className="flex flex-col font-bold text-white text-5xl text-left">
               <span className="text-hicea-pink">CUIDA A</span>
               <span className="text-hicea-pink">TU BEBE</span>
               <span >DESDE EL</span>
               <span>EMBARAZO</span>
            </div>
            <Button className="w-fit font-semibold text-sm">
               Haz tu cita aquí
            </Button>
         </div>
      </div>
   )
}