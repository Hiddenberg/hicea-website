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
      <div className="lg:flex lg:flex-col shadow-2xl">
         <div className="flex items-center gap-4 bg-hicea-purple p-4 h-22">
            <img src={iconURL} alt={subtitle} className="size-12 object-contain" />
            <h3 className="font-semibold text-white text-2xl">{subtitle}</h3>
         </div>
         <div className="flex flex-col justify-between bg-white p-8 lg:grow">
            <div>
               {titleComponent}

               <div className="my-6">
                  <p className="font-semibold text-hicea-pink">Incluye:</p>
                  <p className="text-hicea-purple text-sm leading-tight">{includesText}</p>
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
      includesText: "Exploración mamaria, papanicolaou, colposcopia, revisión de métodos anticonceptivos y detección de cáncer cervicouterino",
      iconURL: "/assets/chequeos-ginecologicos.svg",
      titleComponent: (
         <div className="font-bold">
            <p className="text-hicea-purple text-4xl leading-8">CHECK-UP</p>
            <p className="text-hicea-pink text-3xl leading-8">GINECOLOGICO COMPLETO</p>
            <p className="text-hicea-pink text-7xl">$499</p>
         </div>
      ),
   },
   {
      subtitle: "Control prenatal",
      includesText: "Exploración mamaria, papanicolaou, colposcopia, revisión de métodos anticonceptivos y detección de cáncer cervicouterino",
      iconURL: "/assets/control-prenatal.svg",
      titleComponent: (
         <div className="font-bold">
            <p className="text-hicea-purple text-4xl leading-8">CUIDA A TU BEBE</p>
            <p className="text-hicea-pink text-4xl leading-8">DESDE EL EMBARAZO</p>
         </div>
      ),
   },
   {
      subtitle: "Estudios de laboratorio",
      includesText: "Exploración mamaria, papanicolaou, colposcopia, revisión de métodos anticonceptivos y detección de cáncer cervicouterino",
      iconURL: "/assets/estudios.svg",
      titleComponent: (
         <div className="font-bold">
            <p className="text-hicea-purple text-4xl leading-8">REALIZATE TUS</p>
            <p className="text-hicea-pink text-4xl leading-8">ESTUDIOS MÉDICOS</p>
         </div>
      )
   },
]

export default function ServicesSection() {
   return (
      <div className="bg-linear-to-br from-hicea-pink to-hicea-purple p-6 md:px-10 lg:px-16 w-full">
         <TextLineIcon purple />
         <h2 className="font-semibold text-white text-3xl">Conoce los servicios que tenemos para ti</h2>

         <div className="lg:gap-8 space-y-8 lg:space-y-0 lg:grid lg:grid-cols-3 p-4">
            {serviceCards.map((service) => (
               <ServiceCard key={service.subtitle} {...service} />
            ))}
         </div>
      </div>
   )
}