import type { Metadata } from "next";
import "./globals.css";

import localFont from "next/font/local";
import Script from "next/script";

const sequelFont = localFont({
   src: [
      {
         path: "./fonts/Sequel-Sans-Medium-Body.ttf",
         weight: "500",
         style: "normal",
      },
      {
         path: "./fonts/Sequel-Sans-Heavy-Body.ttf",
         weight: "600",
         style: "normal",
      },
      {
         path: "./fonts/Sequel-Sans-Black-Body.ttf",
         weight: "700",
         style: "normal",
      },
   ],
});

export const metadata: Metadata = {
   title: "Hicea",
   description:
      "Hicea es una clínica ginecológica que ofrece servicios de atención integral a las mujeres",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="es-MX">
         <head>
            <link
               href="https://assets.calendly.com/assets/external/widget.css"
               rel="stylesheet"
            />
         </head>
         <body className={`${sequelFont.className} antialiased`}>
            {children}
            <Script
               src="https://assets.calendly.com/assets/external/widget.js"
               async
            />
         </body>
      </html>
   );
}
