"use client";
import { FC, useEffect, useRef, MouseEvent } from "react";
import Image from "next/image";
import Button from "@/components/Button";
import heroImage1 from "@/assets/images/hero-image.jpg";
import { motion, useScroll, useTransform } from "motion/react";
import useTextRevealAnimation from "@/hooks/UseTextRevealAnimation";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

const MotionImage = motion(Image);

const Hero: FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const scrollingDiv = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollingDiv,
    offset: ["start end", "end end"]
  });

  const portraitWidth = useTransform(scrollYProgress, [0, 1], ['100%', '240%']);
  const imgObjectPosition = useTransform(scrollYProgress, [0, 1], ['50% 50%', '50% 20%']);
  const imgGrayscale = useTransform(scrollYProgress, [0, 1], ['grayscale(0%)', 'grayscale(100%)']);

  const { scope, entranceAnimation } = useTextRevealAnimation();

  useEffect(() => {
    entranceAnimation();
  }, [entranceAnimation, language]);

  // FUNCIÓN DE SMOOTH SCROLL (Igual a la de tu Header)
  const handleScrollTo = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const hash = new URL(e.currentTarget.href).hash;
    const target = document.querySelector(hash);

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="home">
      <div className="grid md:grid-cols-12 md:h-screen items-stretch sticky top-0">
        <div className="md:col-span-7 flex flex-col justify-center">
          <div className="container !max-w-full">
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl mt-40 md:mt-0"
              ref={scope}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {t.hero.title}
            </motion.h1>

            <div className="flex flex-col md:flex-row md:items-center mt-10 items-start gap-6">
              <motion.div
                initial={{ opacity: 0, y: '100%' }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.75 }}
              >
                {/* BOTÓN PRINCIPAL: Ahora es un anchor que envuelve el estilo del botón */}
                <a href="#projects" onClick={handleScrollTo}>
                  <Button
                    variant="secondary"// Si tu componente Button lo permite, cámbialo a div para evitar nesting de <button> y <a>
                    iconAfter={
                      <div className="overflow-hidden size-5">
                        <div className="h-5 w-10 flex group-hover/button:-translate-x-1/2 transition-transform duration-500">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
                          </svg>
                        </div>
                      </div>
                    }
                  >
                    <span>{t.hero.buttonPrimary}</span>
                  </Button>
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: '100%' }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 2.1 }}
              >
                {/* BOTÓN SECUNDARIO: Con scroll suave al contacto/footer */}
                <a href="#contact" onClick={handleScrollTo}>
                  <Button variant="text" >
                    {t.hero.buttonSecondary}
                  </Button>
                </a>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="md:col-span-5 relative">
          <motion.div
            className="mt-20 md:mt-0 md:h-full md:absolute md:right-0 max-md:!w-full max-md:!filter-none"
            style={{ width: portraitWidth, filter: imgGrayscale }}
          >
            <MotionImage priority placeholder="blur" style={{ objectPosition: imgObjectPosition }} src={heroImage1} alt="My portrait" className="size-full object-cover" />
          </motion.div>
        </div>
      </div>

      <div className="md:h-[100vh]" ref={scrollingDiv}></div>
    </section>
  );
};

export default Hero;