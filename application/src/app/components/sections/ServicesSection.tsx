import CalendlyButton from "../CalendlyButton";
import TextLineIcon from "../TextLineIcon";

interface ServiceCardProps {
   subtitle: string;
   includesText: string;
   iconURL: string;
   titleComponent: React.ReactNode;
}

function ServiceCard({
   subtitle,
   includesText,
   iconURL,
   titleComponent,
}: ServiceCardProps) {
   return (
      <div className="group lg:flex lg:flex-col shadow-2xl hover:shadow-[0_20px_40px_-12px_rgba(168,85,247,0.2)] transition-all hover:-translate-y-1 duration-300 ease-out">
         <div className="flex items-center gap-4 bg-hicea-purple p-4 h-22 transition-colors duration-300">
            <img
               src={iconURL}
               alt={subtitle}
               className="size-12 object-contain group-hover:scale-105 transition-transform duration-300"
            />
            <h3 className="font-semibold text-white text-2xl">{subtitle}</h3>
         </div>
         <div className="flex flex-col justify-between bg-white p-8 lg:grow">
            <div>
               {titleComponent}

               <div className="my-6">
                  <p className="font-semibold text-hicea-pink">Incluye:</p>
                  <p className="text-hicea-purple text-sm leading-tight">
                     {includesText}
                  </p>
               </div>
            </div>

            <CalendlyButton />
         </div>
      </div>
   );
}

function LabStudiesCard() {
   return (
      <div className="group lg:flex lg:flex-col shadow-2xl hover:shadow-[0_20px_40px_-12px_rgba(168,85,247,0.2)] transition-all hover:-translate-y-1 duration-300 ease-out">
         <div className="flex items-center gap-4 bg-hicea-purple p-4 h-22 transition-colors duration-300">
            <img
               src={"/assets/estudios.svg"}
               alt={"Estudios de laboratorio"}
               className="size-12 object-contain group-hover:scale-105 transition-transform duration-300"
            />
            <h3 className="font-semibold text-white text-2xl">Estudios de laboratorio</h3>
         </div>
         <div className="flex flex-col justify-between bg-white p-8 lg:grow">
            <div>
               <div className="font-bold">
                  <p className="text-hicea-purple text-4xl leading-8">
                     REALIZATE TUS
                  </p>
                  <p className="text-hicea-pink text-4xl leading-8">
                     ESTUDIOS MÉDICOS
                  </p>
               </div>

               <div className="my-6">
                  <span className="text-hicea-pink text-xk">Estudios de laboratorio</span>
                  <ul className="text-hicea-purple text-sm leading-tight list-disc list-inside">
                     <li>Biométrica hematica</li>
                     <li>Química Sanguínea</li>
                     <li>Perfil de lípidos,</li>
                     <li>Perfil ovario</li>
                     <li>Examen general de orina</li>
                     <li>y mas.</li>
                  </ul>
               </div>
            </div>

            <CalendlyButton />
         </div>
      </div>
   )
}

const serviceCards: ServiceCardProps[] = [
   {
      subtitle: "Chequeos ginecologicos",
      includesText:
         "Exploración mamaria, papanicolaou, colposcopia, revisión de métodos anticonceptivos y detección de cáncer cervicouterino",
      iconURL: "/assets/chequeos-ginecologicos.svg",
      titleComponent: (
         <div className="font-bold">
            <p className="text-hicea-purple text-4xl leading-8">CHECK-UP</p>
            <p className="text-hicea-pink text-3xl leading-8">
               GINECOLOGICO COMPLETO
            </p>
            <p className="text-hicea-pink text-7xl">$499</p>
         </div>
      ),
   },
   {
      subtitle: "Control prenatal",
      includesText:
         "Consulta especializada y ultrasonido obstretico",
      iconURL: "/assets/control-prenatal.svg",
      titleComponent: (
         <div className="font-bold">
            <p className="text-hicea-purple text-4xl leading-8">
               CUIDA A TU BEBE
            </p>
            <p className="text-hicea-pink text-4xl leading-8">
               DESDE EL EMBARAZO
            </p>
            <p className="text-hicea-pink text-7xl">$650</p>
         </div>
      ),
   },
];

export default function ServicesSection() {
   return (
      <div className="bg-linear-to-br from-hicea-pink to-hicea-purple p-6 md:px-10 lg:px-16 w-full">
         <TextLineIcon purple />
         <h2 className="font-semibold text-white text-3xl">
            Conoce los servicios que tenemos para ti
         </h2>

         <div className="lg:gap-8 space-y-8 lg:space-y-0 lg:grid lg:grid-cols-3 p-4">
            {serviceCards.map((service) => (
               <ServiceCard key={service.subtitle} {...service} />
            ))}
            <LabStudiesCard />
         </div>
      </div>
   );
}
