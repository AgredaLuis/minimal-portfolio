"use client";
import { FC, useRef, useState } from "react";
import image2 from "@/assets/images/testimonial-2.jpg";
import image3 from "@/assets/images/testimonial-3.jpg";
import image4 from "@/assets/images/testimonial-4.jpg";
import { useScroll, motion, useTransform, AnimatePresence } from "motion/react";
import Testimonial from "@/components/Testimonial";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

// Datos que no cambian (imágenes, nombres, enlaces)
const testimonialData = [
  {
    name: "Daniela Mijares",
    company: "Min Studio",
    role: "Head of Design",
    image: image4,
    link: "https://linktr.ee/mindesignstudi0",
    imagePositionY: 0.1,
  },
  {
    name: "Marcus Rodriguez",
    company: "Craft Coffee Co.",
    role: "Founder",
    image: image2,
    link: "https://google.com",
    imagePositionY: 0.1,
  },
  {
    name: "Emily Watson",
    company: "Studio Minimal",
    role: "Creative Director",
    image: image3,
    link: "https://google.com",
    imagePositionY: 0.55,
  },
];

const Testimonials: FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const titleRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: titleRef,
    offset: ["start end", "end start"]
  });

  const transformTop = useTransform(scrollYProgress, [0, 1], ['0', '-15%']);
  const transformBottom = useTransform(scrollYProgress, [0, 1], ['0', '15%']);

  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const handleClickPrev = () => {
    setTestimonialIndex((curr) => (curr === 0 ? testimonialData.length - 1 : curr - 1));
  };

  const handleClickNext = () => {
    setTestimonialIndex((curr) => (curr === testimonialData.length - 1 ? 0 : curr + 1));
  };

  return (
    <section className="section" id="testimonials">
      <h2 className="text-4xl md:text-7xl lg:text-8xl flex flex-col overflow-hidden tracking-tighter" ref={titleRef}>
        <motion.span className="whitespace-nowrap" style={{ x: transformTop }}>
          {t.testimonials.title}
        </motion.span>
        <motion.span className="whitespace-nowrap self-end text-red-orange-500" style={{ x: transformBottom }}>
          {t.testimonials.title}
        </motion.span>
      </h2>
      <div className="container">
        <div className="mt-20">
          <AnimatePresence mode="wait" initial={false}>
            {testimonialData.map((data, index) =>
              index === testimonialIndex && (
                <Testimonial
                  key={data.name}
                  {...data}
                  // Aquí inyectamos la cita traducida usando el índice
                  quote={t.testimonials.items[index].quote}
                />
              )
            )}
          </AnimatePresence>
        </div>
        {/* ... botones de navegación ... */}
        <div className="flex gap-4 mt-6 lg:mt-10">
          <button
            className="border border-stone-400 size-11 inline-flex items-center justify-center rounded-full hover:bg-red-orange-500 hover:text-white hover:border-red-orange-500 transition-all duration-300"
            onClick={handleClickPrev}
            aria-label="Previous testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
          </button>
          <button
            className="border border-stone-400 size-11 inline-flex items-center justify-center rounded-full hover:bg-red-orange-500 hover:text-white hover:border-red-orange-500 transition-all duration-300"
            onClick={handleClickNext}
            aria-label="Next testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;