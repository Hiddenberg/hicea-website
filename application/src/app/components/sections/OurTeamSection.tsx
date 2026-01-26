import { ArrowRightIcon } from "lucide-react";
import TextLineIcon from "../TextLineIcon";

interface TeamMemberCardProps {
   name: string;
   role: string;
   imageURL: string;
   curriculumURL: string;
}

function TeamMemberCard({ name, role, imageURL, curriculumURL }: TeamMemberCardProps) {
   return (
      <div className="flex flex-col items-center gap-2 p-4 rounded-lg w-[85dvw] snap-center shrink-0">
         <img src={imageURL} alt={name} className="rounded-full size-48 object-cover" />
         <div className="mb-2">
            <h3 className="font-semibold text-hicea-purple text-xl text-center">{name}</h3>
            <p className="font-semibold text-hicea-pink text-xl text-center">{role}</p>
         </div>
         <a href={curriculumURL} className="flex items-center gap-2 bg-hicea-pink p-2 px-4 w-fit text-white">
            Curriculum <ArrowRightIcon className="size-4" />
         </a>
      </div>
   );
}

const teamMembers: TeamMemberCardProps[] = [
   {
      name: "DRA. KARLA MARIANA MARTÍNEZ GODOY",
      role: "Colposcopista",
      imageURL: "https://placehold.co/600x600",
      curriculumURL: "https://www.google.com"
   },
   {
      name: "DRA. KARLA MARIANA MARTÍNEZ GODOY",
      role: "Colposcopista",
      imageURL: "https://placehold.co/600x600",
      curriculumURL: "https://www.google.com"
   },
   {
      name: "DRA. KARLA MARIANA MARTÍNEZ GODOY",
      role: "Colposcopista",
      imageURL: "https://placehold.co/600x600",
      curriculumURL: "https://www.google.com"
   }
]
export default function OurTeamSection() {
   return (
      <div className="p-6 md:px-10 w-full">
         <TextLineIcon />
         <h2 className="font-semibold text-hicea-purple text-3xl">Nuestro equipo de profesionales</h2>
         <div className="flex gap-4 md:gap-4 md:grid md:grid-cols-3 w-full md:*:w-full overflow-x-auto snap-mandatory snap-x">
            {teamMembers.map((member) => (
               <TeamMemberCard key={member.name} {...member} />
            ))}
         </div>
      </div>
   );
}