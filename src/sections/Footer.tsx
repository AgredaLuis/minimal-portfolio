"use client";
import Button from "@/components/Button";
import useTextRevealAnimation from "@/hooks/UseTextRevealAnimation";
import { useInView } from "motion/react";
import { FC, useEffect, MouseEvent } from "react";
// 1. Importa el contexto e idiomas
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

const Footer: FC = () => {
  // 2. Extrae las traducciones
  const { language } = useLanguage();
  const t = translations[language];

  const { scope, entranceAnimation } = useTextRevealAnimation();
  const inView = useInView(scope);

  // 3. Sincroniza la animación con el idioma
  useEffect(() => {
    if (inView) {
      entranceAnimation();
    }
  }, [inView, entranceAnimation, language]);

  const handleClickNavItem = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const hash = new URL(e.currentTarget.href).hash;
    const target = document.querySelector(hash);

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  // Usamos los labels de 'nav' que ya teníamos en translations.ts
  const navItems = [
    { href: '#intro', label: t.nav.about },
    { href: '#projects', label: t.nav.work },
    { href: '#testimonials', label: t.nav.testimonials },
    { href: '#faqs', label: t.nav.faqs },
    { href: '#contact', label: t.nav.contact }
  ];

  return (
    <footer className="bg-stone-900 text-white" id="contact">
      <div className="container">
        <div className="section">
          <div className="flex items-center gap-3">
            <div className="size-3 rounded-full bg-green-400 animate-pulse"></div>
            {/* 4. Estado disponible traducido */}
            <span className="uppercase text-sm tracking-widest">{t.footer.status}</span>
          </div>

          <div className="grid md:grid-cols-3 md:items-center">
            <div className="md:col-span-2">
              {/* 5. Título principal traducido */}
              <h2 className="text-4xl md:text-7xl lg:text-8xl mt-8 font-extralight" ref={scope}>
                {t.footer.title}
              </h2>

              <a href="mailto:Luis.agreda98@gmail.com" className="inline-block mt-8">
                <Button variant="secondary" iconAfter={
                  <div className="size-6 overflow-hidden">
                    <div className="w-12 h-5 flex transition-transform duration-300 group-hover/button:-translate-x-1/2">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                      </svg>
                    </div>
                  </div>
                }>
                  Luis.agreda98@gmail.com
                </Button>
              </a>
            </div>

            <div>
              <nav className="flex flex-col md:items-end gap-8 mt-16 md:mt-0">
                {navItems.map(({ href, label }) => (
                  <a href={href} key={href} onClick={handleClickNavItem}>
                    <Button variant="text" className="text-lg">{label}</Button>
                  </a>
                ))}
              </nav>

              {/* Aquí van tus socialLinks (puedes dejarlos como están ya que son nombres de red social) */}
              <div className="flex items-center md:justify-end gap-4 mt-8">
                {/* ... mapeo de socialLinks ... */}
              </div>
            </div>
          </div>

          {/* 6. Créditos finales traducidos */}
          <p className="py-16 text-white/30 text-sm">{t.footer.madeBy}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;