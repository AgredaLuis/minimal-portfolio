import { StaticImport } from "next/dist/shared/lib/get-img-props"
import Image from "next/image"
import { HTMLAttributes, useEffect } from "react"
import { twMerge } from "tailwind-merge"
import { motion, usePresence } from "motion/react"
import useTextRevealAnimation from "@/hooks/UseTextRevealAnimation"
const Testimonial = (props: { name: string, company: string, role: string, quote: string, link: string, image: string | StaticImport, imagePositionY: number, className?: string } & HTMLAttributes<HTMLDivElement>) => {

    const { name, company, role, quote, image, imagePositionY, link, className, ...rest } = props

    const { scope: qouteScope, entranceAnimation: quoteEntranceAnimatioon, exitAnimation: qouteExitAnimation } = useTextRevealAnimation();

    const { scope: citeScope, entranceAnimation: citeEntranceAnimatioon, exitAnimation: citeExitAnimation } = useTextRevealAnimation();

    const { scope: linkScope, entranceAnimation: linkEntranceAnimation, exitAnimation: linkExitAnimation } = useTextRevealAnimation();

    const [isPresent, safeToRemove] = usePresence();

    useEffect(() => {
        let shouldAnimate = true;

        if (isPresent) {
            // Ejecutamos la cadena asegurándonos de que existan
            const startAnim = async () => {
                await quoteEntranceAnimatioon();
                if (shouldAnimate) await citeEntranceAnimatioon();
                if (shouldAnimate) await linkEntranceAnimation();
            };
            startAnim();
        } else {
            // En el exitAnimation es vital que devuelvan promesas para que Promise.all no falle
            Promise.all([
                citeExitAnimation() || Promise.resolve(),
                qouteExitAnimation() || Promise.resolve(),
                linkExitAnimation() || Promise.resolve()
            ]).then(() => {
                if (shouldAnimate) safeToRemove();
            });
        }

        return () => {
            shouldAnimate = false;
        }
    }, [isPresent, quoteEntranceAnimatioon, citeEntranceAnimatioon, linkEntranceAnimation, qouteExitAnimation, citeExitAnimation, linkExitAnimation, safeToRemove]);

    return (<div className={twMerge("grid md:grid-cols-5 md:gap-8 lg:gap-16 md:items-center", className)} {...rest}>
        <div className="aspect-square md:aspect-[9/16] md:col-span-2 relative">
            <motion.div className="absolute h-full bg-stone-900"
                initial={{
                    width: '100%',
                }}
                animate={{ width: '0' }}
                exit={{ width: '100%' }}
                transition={{ duration: .5 }}>

            </motion.div>
            <Image src={image} alt={`${name} image`} className="size-full object-cover"
                style={{
                    objectPosition: `50% ${imagePositionY * 100}%`,
                }} />
        </div>
        <blockquote className="md:col-span-3">
            <div className="text-3xl md:text-5xl lg:text-6xl mt-8 md:mt-0" ref={qouteScope}>
                <span>&ldquo;</span>
                {quote}
                <span>&rdquo;</span>
            </div>
            <div className="mt-4 md:mt-8 not-italic md:text-lg lg:text-xl flex items-center gap-2">
                <cite className="not-italic" ref={citeScope}>{name}, {role} at {company}</cite>
                <a href={link} target="_blank" rel="noopener noreferrer" ref={linkScope} aria-label={`Visit ${name}'s profile`}>
                    <span className="word">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>
                    </span>
                </a>
            </div>
        </blockquote>

    </div>
    )
}

export default Testimonial