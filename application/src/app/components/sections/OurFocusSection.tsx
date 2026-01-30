import TextLineIcon from "../TextLineIcon";

interface FocusItemProps {
   title: string;
   description: string;
}

function FocusItem({ title, description }: FocusItemProps) {
   return (
      <div>
         <h3 className="font-semibold text-hicea-purple text-2xl">{title}</h3>
         <p className="text-hicea-purple text-lg leading-tight">
            {description}
         </p>
      </div>
   );
}

const focusItems: FocusItemProps[] = [
   {
      title: "Enfoque en la Salud Preventiva",
      description:
         "En Hicea Núcleo Ginecológico creemos que la prevención es la base de una vida saludable. Por ello, nos enfocamos en educar y acompañar a las mujeres en el cuidado proactivo de su salud mediante chequeos regulares, diagnósticos oportunos y orientación personalizada. Este enfoque permite detectar posibles afecciones a tiempo y, al mismo tiempo, fomentar hábitos conscientes que fortalecen el bienestar y la calidad de vida a largo plazo",
   },
   {
      title: "Atención Integral y Personalizada",
      description:
         "En Hicea Núcleo Ginecológico creemos que la prevención es clave para una vida saludable. Por ello, nos enfocamos en educar y acompañar a las mujeres en el cuidado proactivo de su salud mediante chequeos regulares, diagnósticos tempranos y orientación personalizada. Este enfoque no solo permite detectar oportunamente posibles problemas de salud, sino que también fomenta hábitos conscientes que promueven el bienestar a largo plazo.",
   },
];

export default function OurFocusSection() {
   return (
      <div className="p-6 md:px-10 lg:px-16 pb-0 w-full">
         <TextLineIcon />
         <h2 className="mb-4 font-semibold text-hicea-purple text-3xl">
            Un enfoque dedicado al cuidado integral de la mujer
         </h2>

         <div className="lg:flex lg:items-center lg:gap-8">
            <div className="space-y-4 mb-4">
               {focusItems.map((item) => (
                  <FocusItem key={item.title} {...item} />
               ))}
            </div>

            <img
               src="/assets/DOCTORA.png"
               alt="Doctora"
               className="mx-auto w-auto h-96 lg:h-130 object-contain"
            />
         </div>
      </div>
   );
}
