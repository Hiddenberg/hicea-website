import TextLineIcon from "../TextLineIcon";

interface OtherServiceCardProps {
   title: string;
   description: string;
   iconURL: string;
}

function OtherServiceCard({ title, description, iconURL }: OtherServiceCardProps) {
   return (
      <div>
         <img src={iconURL} alt={title} className="mb-2 w-18 h-auto object-contain" />
         <h3 className="text-hicea-pink text-3xl">{title}</h3>
         <p className="text-hicea-purple text-lg leading-tight">{description}</p>
      </div>
   )
}

const otherServices: OtherServiceCardProps[] = [
   {
      title: "Métodos de planificación familiar",
      description: "La planificación familiar es clave para la salud reproductiva y el bienestar de las personas y sus familias. Ofrecemos métodos seguros y efectivos, Para que puedas decidir el número de hijos y el momento adecuado para tenerlos. Consulta con nosotros y encuentra la opción que mejor se adapte a tus necesidades.",
      iconURL: "/assets/PLANIFICACION-FAMILIAR.svg"
   },
   {
      title: "Métodos de planificación familiar",
      description: "La planificación familiar es clave para la salud reproductiva y el bienestar de las personas y sus familias. Ofrecemos métodos seguros y efectivos, Para que puedas decidir el número de hijos y el momento adecuado para tenerlos. Consulta con nosotros y encuentra la opción que mejor se adapte a tus necesidades.",
      iconURL: "/assets/VACUNAS-VPH.svg"
   },
   {
      title: "Métodos de planificación familiar",
      description: "La planificación familiar es clave para la salud reproductiva y el bienestar de las personas y sus familias. Ofrecemos métodos seguros y efectivos, Para que puedas decidir el número de hijos y el momento adecuado para tenerlos. Consulta con nosotros y encuentra la opción que mejor se adapte a tus necesidades.",
      iconURL: "/assets/PLANIFICACION-FAMILIAR.svg"
   },
   {
      title: "Métodos de planificación familiar",
      description: "La planificación familiar es clave para la salud reproductiva y el bienestar de las personas y sus familias. Ofrecemos métodos seguros y efectivos, Para que puedas decidir el número de hijos y el momento adecuado para tenerlos. Consulta con nosotros y encuentra la opción que mejor se adapte a tus necesidades.",
      iconURL: "/assets/PLANIFICACION-FAMILIAR.svg"
   },
]

export default function OtherServicesSection() {
   return (
      <div className="p-6 w-full">
         <TextLineIcon />
         <h2 className="mb-4 font-semibold text-hicea-purple text-3xl">Otros servicios</h2>

         <div className="space-y-6">
            {otherServices.map((service) => (
               <OtherServiceCard key={service.title} {...service} />
            ))}
         </div>
      </div>
   )
}