"use client";

import { Button } from "./Buttons";

interface CalendlyWindow extends Window {
   Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
   };
}

export default function CalendlyButton({
   children = "Agenda tu cita",
}: {
   children?: React.ReactNode;
}) {
   const handleClick = () => {
      const calendlyWindow = window as CalendlyWindow;
      if (calendlyWindow.Calendly) {
         gtag('event', 'ads_conversion_Reserva_de_cita_1', {
            // <event_parameters>
         });

         calendlyWindow.Calendly.initPopupWidget({
            url: "https://calendly.com/hicea-ginecologia?hide_landing_page_details=1&hide_gdpr_banner=1&text_color=7d68b2&primary_color=ff99cc",
         });
      }
   };

   return (
      <Button
         onClick={() => handleClick()}
         className="hover:scale-110 transition-transform duration-300"
      >
         {children}
      </Button>
   );
}
