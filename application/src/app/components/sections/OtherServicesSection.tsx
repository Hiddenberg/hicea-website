import TextLineIcon from "../TextLineIcon";

interface OtherServiceCardProps {
   title: string;
   description: string;
   iconURL: string;
}

function OtherServiceCard({
   title,
   description,
   iconURL,
}: OtherServiceCardProps) {
   return (
      <div className="md:flex md:items-center md:gap-8">
         <img
            src={iconURL}
            alt={title}
            className="mb-2 w-18 h-auto object-contain"
         />
         <div>
            <h3 className="font-semibold text-hicea-pink text-2xl">{title}</h3>
            <p className="text-hicea-purple text-lg leading-tight">
               {description}
            </p>
         </div>
      </div>
   );
}

const otherServices: OtherServiceCardProps[] = [
   {
      title: "Métodos de planificación familiar",
      description:
         "La planificación familiar es un aspecto esencial de la salud reproductiva y el bienestar general de las personas y las familias. Permite a las parejas decidir el número de hijos que desean tener y el momento adecuado para tenerlos, contribuyendo así a mejorar la calidad de vida y la salud de la madre y el niño. Existen diversos métodos de planificación familiar que se pueden agrupar en métodos naturales, métodos de barrera, métodos hormonales, dispositivos intrauterinos, métodos permanentes y otros métodos modernos.",
      iconURL: "/assets/PLANIFICACION-FAMILIAR.svg",
   },
   {
      title: "Vacunas para VPH",
      description:
         "La vacuna contra el virus del papiloma humano (VPH) es una herramienta crucial en la prevención de varios tipos de cáncer y enfermedades asociadas con este virus. El VPH es una de las infecciones de transmisión sexual más comunes en el mundo, y aunque la mayoría de las infecciones por VPH son inofensivas y desaparecen por sí solas, algunas cepas del virus pueden causar cáncer cervical, anal, de pene, vulvar, vaginal, y orofaríngeo, así como verrugas genitales.",
      iconURL: "/assets/VACUNAS-VPH.svg",
   },
   // {
   //    title: "Control prenatal",
   //    description:
   //       "El control prenatal es una serie de visitas médicas regulares durante el embarazo que permite a las futuras madres recibir cuidados médicos y apoyo necesarios para garantizar un embarazo saludable y seguro. Este seguimiento es crucial para la detección temprana de posibles complicaciones y para promover la salud tanto de la madre como del bebé.",
   //    iconURL: "/assets/CONTROL-PRENATAL-2.svg",
   // },
   {
      title: "Tratamientos ablativos",
      description:
         "Los tratamientos ablativos han revolucionado la ginecología al proporcionar opciones menos invasivas y altamente efectivas para tratar diversas condiciones ginecológicas. Estos procedimientos, que implican la destrucción de tejido anormal mediante calor, frío, láseres u otros métodos, ofrecen alternativas a la cirugía tradicional y mejoran significativamente los resultados y la recuperación de las pacientes.",
      iconURL: "/assets/TRATAMIENTOS-ABLATIVOS.svg",
   },
   {
      title: "Papanicolaou",
      description:
         "El examen de Papanicolaou, también conocido como prueba de Pap, es una herramienta fundamental en la detección temprana del cáncer cervical y de las lesiones precancerosas. Este procedimiento simple y efectivo ha salvado innumerables vidas al permitir la identificación precoz de cambios celulares anormales en el cuello uterino.",
      iconURL: "/assets/PAPANICOLAOU.svg",
   },
   {
      title: "Colposcopia",
      description:
         "La colposcopia es un procedimiento ginecológico especializado utilizado para examinar detenidamente el cuello uterino, la vagina y la vulva en busca de signos de enfermedad. Este procedimiento se realiza típicamente cuando los resultados de una prueba de Papanicolaou son anormales, permitiendo a los médicos obtener una visión más detallada y precisa de las áreas afectadas.",
      iconURL: "/assets/COLPOSCOPIA.svg",
   },
   {
      title: "USG (Ultrasonido ginecológico)",
      description:
         "El ultrasonido ginecológico es una herramienta indispensable en la práctica médica moderna, utilizada para visualizar y evaluar los órganos reproductivos femeninos de manera segura y efectiva. Este procedimiento no invasivo utiliza ondas sonoras de alta frecuencia para crear imágenes detalladas del útero, ovarios, trompas de Falopio y otros tejidos pélvicos, proporcionando información crucial para el diagnóstico y seguimiento de diversas condiciones ginecológicas.",
      iconURL: "/assets/ECOSONOGRAMAS.svg",
   },
   {
      title: "Control especializado en VPH",
      description:
         "El control especializado en VPH es fundamental para la vigilancia y el manejo efectivo de esta infección viral común, responsable de una variedad de enfermedades, incluyendo el cáncer cervical y otras condiciones relacionadas. A través de métodos específicos de detección, seguimiento y tratamiento, los profesionales de la salud pueden ayudar a los pacientes a gestionar adecuadamente el virus y prevenir complicaciones graves.",
      iconURL: "/assets/PROTECCION-VPH.svg",
   },
   // {
   //    title: "Laboratoriales",
   //    description:
   //       "Las pruebas de laboratorio juegan un papel crucial en la práctica médica moderna, proporcionando información objetiva y precisa que guía el diagnóstico, tratamiento y seguimiento de diversas condiciones de salud. Estas pruebas abarcan una amplia gama de análisis bioquímicos, microbiológicos, genéticos e inmunológicos, cada uno diseñado para evaluar diferentes aspectos del funcionamiento del cuerpo humano y detectar posibles anomalías.",
   //    iconURL: "/assets/VACUNAS-VPH.svg",
   // },
   {
      title: "Consulta especializada",
      description:
         "La consulta especializada en ginecología es un pilar fundamental en la atención médica de las mujeres, centrada en la salud reproductiva y el bienestar ginecológico a lo largo de todas las etapas de la vida. Esta especialidad médica abarca desde la prevención y el diagnóstico precoz de enfermedades hasta el tratamiento de condiciones específicas y la orientación sobre salud sexual y reproductiva.",
      iconURL: "/assets/CONSULTA-ESPECILIZADA.svg",
   },
];

export default function OtherServicesSection() {
   return (
      <div className="p-6 md:px-10 lg:px-16 w-full">
         <TextLineIcon />
         <h2 className="mb-4 font-semibold text-hicea-purple text-3xl">
            Otros servicios
         </h2>

         <div className="space-y-10 lg:space-y-16">
            {otherServices.map((service) => (
               <OtherServiceCard key={service.title} {...service} />
            ))}
         </div>
      </div>
   );
}
