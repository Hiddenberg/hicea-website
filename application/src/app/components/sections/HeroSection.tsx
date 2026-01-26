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
   )
}

function CarouselItem1({ girlImage }: { girlImage: string }) {
   return (
      <div className="flex justify-center items-end">
         <div className="flex flex-col items-end pb-10 font-bold">
            <h1 className="text-white text-3xl text-right leading-7">
               <p>INICIA EL 2026</p>
               <p>CUIDANDOTE</p>
            </h1>
            <p className="text-hicea-pink text-6xl text-center">CHEK-UP</p>
            <p className="text-white text-8xl text-center leading-20">$499</p>
            <div className="flex items-center px-2 w-full">
               <div className="flex flex-col items-end gap-2">
                  <p className="text-hicea-pink text-sm">Incluye:</p>
                  <p className="w-72 font-medium text-white text-sm text-right leading-3">
                     Exploración mamaria, papanicolaou,
                     colposcopia, revisión de métodos
                     anticonceptivos, consulta especializada
                     y detección de cáncer cervicouterino
                  </p>
                  <Button className="font-semibold text-sm">
                     Haz tu cita aquí
                  </Button>
               </div>
            </div>
         </div>

         <img src={girlImage} alt="Girl" className="-ml-7 w-72 object-contain" />
      </div>
   )
}

function HeroCarouselSection({ carouselItems }: { carouselItems: React.ReactNode[] }) {
   return (
      <div className="hidden md:block bg-linear-to-br from-hicea-purple via-25% via-hicea-purple to-hicea-pink pt-24">
         {
            carouselItems.map((item, index) => (
               <div key={index}>
                  {item}
               </div>
            ))
         }
      </div>
   )
}

export default function HeroSection() {
   const girlImage = "/assets/girl-2.png"
   return (
      <div>
         <HeroMobileSection girlImage={girlImage} />
         <HeroCarouselSection carouselItems={[
            <CarouselItem1 girlImage={girlImage} key={0} />,
            <CarouselItem1 girlImage={girlImage} key={1} />,
            <CarouselItem1 girlImage={girlImage} key={2} />,
         ]} />
      </div>
   );
}
