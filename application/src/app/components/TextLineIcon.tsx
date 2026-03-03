export default function TextLineIcon({ className, purple = false }: { className?: string, purple?: boolean }) {
   const source = purple
      ? "/assets/text-line-purple.svg"
      : "/assets/text-line.svg";
   return (
      <img
         src={source}
         alt="Text Line Icon"
         className={`mb-2 w-7 h-auto object-contain ${className}`}
      />
   );
}
