"use client";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "motion/react";

const LanguageSwitcher = () => {
    const { language, setLanguage } = useLanguage();

    return (
        <div className="flex backdrop-blur border border-stone-400 rounded-full h-11 p-1 gap-1 relative min-w-[7rem]">
            <button
                onClick={() => setLanguage('en')}
                className={`flex-1 relative z-10 px-4 flex items-center justify-center text-sm font-bold rounded-full transition-colors duration-300 ${language === 'en' ? 'text-white' : 'text-stone-400 hover:text-stone-200'
                    }`}
            >
                EN
            </button>
            <button
                onClick={() => setLanguage('es')}
                className={`flex-1 relative z-10 px-4 flex items-center justify-center text-sm font-bold rounded-full transition-colors duration-300 ${language === 'es' ? 'text-white' : 'text-stone-400 hover:text-stone-200'
                    }`}
            >
                ES
            </button>

            {/* Fondo animado */}
            <div className="absolute inset-0 p-1 pointer-events-none">
                <motion.div
                    // Quitamos 'layout' para evitar conflictos de cálculo
                    initial={false}
                    animate={{
                        // Usamos un desplazamiento simple
                        x: language === 'en' ? '0%' : '100%',
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30
                    }}
                    className="w-1/2 h-full bg-red-orange-500 rounded-full"
                />
            </div>
        </div>
    );
};

export default LanguageSwitcher;