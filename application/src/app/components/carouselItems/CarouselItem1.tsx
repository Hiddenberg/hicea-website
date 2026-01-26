import { Button } from "../Buttons";

export default function CarouselItem1() {
   return (
      <div className="flex justify-center items-center px-16">
         <div className="space-y-4 pb-20 lg:w-72">
            <p className="text-white text-3xl leading-7">Tu núcleo ginecológico que te hace sentir plena y protegida</p>
            <Button className="w-fit font-semibold text-sm">
               Haz tu cita aquí
            </Button>
         </div>
         <img src="/assets/girl-1.png" alt="Girl" className="z-10 -mr-5 -ml-10 h-full object-contain" />
         <div className="pb-20">
            <h2 className="flex flex-col font-bold text-white text-6xl text-left">
               <span className="text-hicea-pink">GINE</span>
               <span>QUE</span>
               <span>CUIDA</span>
               <span>DE TI</span>
            </h2>
         </div>
      </div>
   )
}