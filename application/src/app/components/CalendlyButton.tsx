"use client";

import { Button } from "./Buttons";

interface CalendlyWindow extends Window {
   Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
   };
}

export default function CalendlyButton() {
   const handleClick = () => {
      const calendlyWindow = window as CalendlyWindow;
      if (calendlyWindow.Calendly) {
         calendlyWindow.Calendly.initPopupWidget({
            url: "https://calendly.com/vpazaran25?hide_landing_page_details=1&hide_gdpr_banner=1&text_color=7d68b2&primary_color=ff99cc",
         });
      }
   };

   return <Button onClick={() => handleClick()}>Agenda tu cita</Button>;
}
