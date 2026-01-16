import Button from "../Buttons";

export default function HeroSection() {
   const girlImage = "/assets/girl-2.png"
   return (
      <div className="bg-linear-to-br from-hicea-purple via-25% via-hicea-purple to-hicea-pink pt-24">
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
                  Exploración mamaria, papanicolaou,
                  colposcopia, revisión de métodos
                  anticonceptivos, consulta especializada
                  y detección de cáncer cervicouterino
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
