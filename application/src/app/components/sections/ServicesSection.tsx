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

const CHECKUP_INCLUDES_TEXT =
   "Exploración mamaria, papanicolaou, colposcopia, revisión de métodos anticonceptivos y detección de cáncer cervicouterino";

const serviceCards: ServiceCardProps[] = [
   {
      subtitle: "Chequeos ginecologicos",
      includesText: CHECKUP_INCLUDES_TEXT,
      iconURL: "/assets/CHEQUEOS-GINECOLOGICOS.svg",
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
];

function DesktopTabletLayout() {
   return (
      <div className="relative flex justify-center items-center bg-linear-to-br from-hicea-pink to-hicea-purple px-4 pt-8 overflow-hidden">
         {/* Woman image - left side */}
         <img
            src="/assets/CHICA_CHECKUP.png"
            alt="El autocuidado comienza con prevención"
            className="w-full max-w-110 h-full object-bottom object-contain"
         />

         {/* Content - right side */}
         <div className="flex flex-col justify-center px-6 md:px-10 lg:px-16 py-12">
            <TextLineIcon className="mb-4 w-12" purple />
            <h2 className="mb-8 font-bold text-white text-4xl md:text-4xl lg:text-5xl uppercase leading-tight tracking-wide">
               El autocuidado
               <br />
               comienza con
               <br />
               prevención
            </h2>

            {/* White information card */}
            <div className="bg-white shadow-[-14px_15px_48px_-12px_#000000] p-6 md:p-8 max-w-xl">
               <div className="flex items-center gap-6 md:gap-8">
                  <div className="shrink-0">
                     <h3 className="font-bold text-hicea-purple text-3xl uppercase leading-none">
                        <span className="block">CHECK-UP</span>
                        <span className="block">GINECOLOGICO</span>
                        <span className="block">COMPLETO</span>
                     </h3>
                     <p className="mt-2 font-bold text-hicea-pink text-5xl md:text-6xl">
                        $499
                     </p>
                  </div>
                  <div className="flex flex-col">
                     <p className="font-semibold text-hicea-pink">Incluye:</p>
                     <p className="mt-2 font-semibold text-hicea-purple text-sm leading-none">
                        {CHECKUP_INCLUDES_TEXT}
                     </p>
                     <div className="mt-4">
                        <CalendlyButton>Haz tu cita aqui</CalendlyButton>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

function MobileLayout() {
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
         </div>
      </div>
   );
}

export default function ServicesSection() {
   return (
      <div className="w-full">
         {/* Mobile: original design */}
         <div className="md:hidden">
            <MobileLayout />
         </div>

         {/* Desktop and tablet: new promotional layout */}
         <div className="hidden md:block">
            <DesktopTabletLayout />
         </div>
      </div>
   );
}
