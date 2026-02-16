"use client";
import { useInView } from "motion/react";
import { FC, useEffect, useRef } from "react";
import useTextRevealAnimation from "@/hooks/UseTextRevealAnimation";
// Importaciones de idioma
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

const Intro: FC = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scope, entranceAnimation } = useTextRevealAnimation();
  const inView = useInView(scope, {
    once: true
  });

  useEffect(() => {
    if (inView) {
      entranceAnimation();
    }
    // Añadimos 'language' para que si el usuario cambia el idioma 
    // estando la sección a la vista, se re-anime el texto nuevo.
  }, [inView, entranceAnimation, language]);

  return (
    <section className="section mt-12 md:mt-16" id="intro" ref={sectionRef}>
      <div className="container">
        <h2
          className="text-4xl md:text-7xl lg:text-8xl lg:w-[80%]"
          ref={scope}
        >
          {t.intro.text}
        </h2>
      </div>
    </section>
  );
};

export default Intro;