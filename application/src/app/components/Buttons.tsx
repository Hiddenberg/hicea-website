const buttonClass = "bg-hicea-purple text-white px-4 py-2 w-fit";

export function Button({
   children,
   className,
   onClick,
}: {
   children: React.ReactNode;
   className?: string;
   onClick?: () => void;
}) {
   return (
      <button
         type="button"
         className={`${buttonClass} ${className}`}
         onClick={onClick}
      >
         {children}
      </button>
   );
}

export function LinkButton({
   children,
   className,
   href,
}: {
   children: React.ReactNode;
   className?: string;
   href: string;
}) {
   return (
      <a href={href} className={`${buttonClass} block ${className}`}>
         {children}
      </a>
   );
}
