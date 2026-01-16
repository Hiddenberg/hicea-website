import { MenuIcon } from "lucide-react";

export default function MobileHeader() {
   return (
      <div className="top-0 z-50 fixed flex justify-between items-center px-4 py-4 w-full h-20">
         <img src="/assets/hicea-logo.svg" alt="Hicea Logo" className="w-auto h-full" />

         <button>
            <MenuIcon strokeWidth={3} className="size-8 text-white" />
         </button>
      </div>
   );
}
