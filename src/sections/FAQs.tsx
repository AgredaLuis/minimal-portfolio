"use client";
import { FC, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { twMerge } from "tailwind-merge";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

const FAQs: FC = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <section className="section" id="faqs">
      <div className="container">
        <h2 className="text-4xl md:text-7xl lg:text-8xl">{t.faqs.title}</h2>
        <div className="mt-10 md:mt-16 lg:mt-20">
          {t.faqs.items.map(({ question, answer }, faqIndex) => (
            <div
              key={question}
              className="border-t border-stone-400 border-dotted py-6 md:py-8 lg:pt-10 last:border-b relative isolate group/faq cursor-pointer"
              onClick={() => {
                setSelectedIndex(faqIndex === selectedIndex ? null : faqIndex);
              }}
            >
              <div className={twMerge(
                "absolute h-0 w-full bottom-0 left-0 bg-stone-300 -z-10 group-hover/faq:h-full transition-all duration-700",
                faqIndex === selectedIndex && "h-full"
              )}></div>

              <div className={twMerge(
                "flex items-center justify-between gap-4 transition-all duration-700 group-hover/faq:lg:px-8",
                faqIndex === selectedIndex && "lg:px-8"
              )}>
                <div className="text-2xl md:text-3xl lg:text-4xl">
                  {question}
                </div>
                <div className={twMerge(
                  "inline-flex items-center justify-center size-11 border border-stone-400 rounded-full shrink-0 transition-all duration-300 bg-stone-200 text-stone-900",
                  faqIndex === selectedIndex && "rotate-45"
                )}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </div>
              </div>

              <AnimatePresence>
                {faqIndex === selectedIndex && (
                  <motion.div
                    className="overflow-hidden lg:px-8"
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    transition={{ duration: .6, ease: "easeOut" }}
                  >
                    <p className="text-xl mt-4 text-stone-800">{answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;