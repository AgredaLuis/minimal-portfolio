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


export const metadata: Metadata = {
  title: "Luis Agreda Portfolio",
  description: "Created with with love by Luis Agreda",
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
