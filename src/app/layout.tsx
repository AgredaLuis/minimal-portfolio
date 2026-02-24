import type { Metadata } from "next";
import { Archivo } from 'next/font/google'
import "./globals.css";
import { LanguageProvider } from '@/context/LanguageContext';


const archivo = Archivo({
  display: 'swap',
  weight: "variable",
  subsets: ['latin'],
  variable: "--font-archivo",
});


const BASE_URL = "https://luisagreda.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: "Luis Agreda | Frontend Developer & Creative Designer",
  description:
    "Crafting digital experiences through code and creative design. Building beautiful websites with clean code and thoughtful design.",

  openGraph: {
    title: "Luis Agreda | Frontend Developer & Creative Designer",
    description:
      "Crafting digital experiences through code and creative design. Building beautiful websites with clean code and thoughtful design.",
    url: BASE_URL,
    siteName: "Luis Agreda Portfolio",
    images: [
      {
        url: "/images/hero-image.jpg",
        width: 1200,
        height: 630,
        alt: "Luis Agreda - Frontend Developer & Creative Designer",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Luis Agreda | Frontend Developer & Creative Designer",
    description:
      "Crafting digital experiences through code and creative design.",
    images: ["/images/hero-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${archivo.variable} font-sans antialiased bg-stone-200 text-stone-900`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
