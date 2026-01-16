export default function Button({ children, className }: { children: React.ReactNode, className?: string }) {
   return (
      <button className={`bg-hicea-purple text-white px-2 py-2 ${className}`}>
         {children}
      </button>
   );
}