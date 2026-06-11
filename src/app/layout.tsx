import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://devpilots.mx"),
  title: "DevPilots | Desarrollo web, marketing y automatización en Tapachula",
  description:
    "DevPilots crea páginas web, sistemas, automatizaciones y estrategias digitales para negocios locales, gimnasios, consultorios, marcas personales y emprendedores en Tapachula y remoto.",
  openGraph: {
    title: "DevPilots | Desarrollo web, marketing y automatización en Tapachula",
    description:
      "DevPilots crea páginas web, sistemas, automatizaciones y estrategias digitales para negocios locales, gimnasios, consultorios, marcas personales y emprendedores en Tapachula y remoto.",
    images: ["/og-devpilots.png"],
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${sora.variable} ${inter.variable}`}>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
