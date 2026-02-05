import TextLineIcon from "../TextLineIcon";

interface AboutUsItemProps {
   title: string;
   description: string;
   iconURL: string;
}
function AboutUsItem({ title, description, iconURL }: AboutUsItemProps) {
   return (
      <div className="md:flex md:gap-4 lg:gap-8 text-hicea-purple">
         <div className="flex items-center gap-4 mb-2 lg:w-52 grow-0">
            {iconURL && (
               <img
                  src={iconURL}
                  alt={title}
                  className="w-12 h-auto object-contain"
               />
            )}
            <h3 className="font-semibold md:text-xl text-3xl">{title}</h3>
         </div>
         <p className="md:w-full leading-tight">{description}</p>
      </div>
   );
}

const aboutUsItems: AboutUsItemProps[] = [
   {
      title: "Nuestra misión",
      description:
         "Cuidar y promover la salud femenina con empatía, respeto y profesionalismo,brindando una atención médica accesible, segura y de calidad. Nos comprometemos a crear un espacio de confianza donde cada mujer se sienta escuchada, comprendida y acompañada en cada etapa de su vida, ofreciendo orientación oportuna, trato humano y soluciones responsables que contribuyan a su bienestar integral.",
      iconURL: "/assets/MISION.svg",
   },
   {
      title: "Nuestra visión",
      description:
         "Ser el referente nacional en salud ginecológica, reconocido por un modelo de atención humano, cercano e innovador que prioriza la confianza y el bienestar de cada mujer. Buscamos expandir nuestro alcance para brindar acompañamiento integral y soluciones accesibles, eliminando barreras geográficas y sociales, y asegurando que toda mujer, sin importar dónde se encuentre, tenga acceso a atención digna, profesional y de calidad.",
      iconURL: "/assets/VISION.svg",
   },
   {
      title: "Nuestros valores",
      description:
         "Nuestros valores se basan en la accesibilidad, la calidad, la empatía, la confidencialidad,  el compromiso, el respeto y la prevención, pilares que guían nuestra atención hacia cada paciente",
      iconURL: "/assets/VALORES.svg",
   },
];

export default function AboutUsSection() {
   return (
      <div className="p-6 md:px-10 lg:px-16 w-full">
         <TextLineIcon />
         <div className="space-y-10">
            <div className="text-hicea-purple">
               <div className="flex items-center gap-4 mb-2">
                  <h3 className="font-semibold text-3xl">
                     Nuestra prioridad es tu salud femenina
                  </h3>
               </div>
               <p className="leading-tight">
                  Somos un centro médico con responsabilidad y ética enfocado en
                  el bienestar de la mujer, con una amplia gama de servicios
                  disponibles para tu bienestar ginecológico. En Hicea Núcleo
                  Ginecológico, nos dedicamos a proporcionar una atención
                  integral y personalizada que se adapta a las necesidades de
                  cada mujer. Nuestro equipo de especialistas trabaja con
                  profesionalismo y sensibilidad para garantizar que cada
                  consulta sea una experiencia de confianza y tranquilidad.
                  Ofrecemos servicios que abarcan desde revisiones ginecológicas
                  de rutina hasta tratamientos especializados, todo en un
                  entorno cálido y seguro. Nuestro compromiso es acompañarte en
                  cada etapa de tu vida, promoviendo siempre tu salud y
                  bienestar.
               </p>
            </div>
            {aboutUsItems.map((item) => (
               <AboutUsItem
                  key={item.title}
                  title={item.title}
                  description={item.description}
                  iconURL={item.iconURL}
               />
            ))}
         </div>
      </div>
   );
}
