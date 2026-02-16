import { useEffect } from "react";
import SplitType from "split-type";
import { stagger, useAnimate } from "motion/react";

const useTextRevealAnimation = () => {

    const [scope, animate] = useAnimate();
    useEffect(() => {
        new SplitType(scope.current, {
            types: "lines,words",
            tagName: "span"
        })
    }, [scope]);


    const entranceAnimation = () => {
        const words = scope.current?.querySelectorAll('.word');

        // Si no hay palabras, devolvemos una promesa resuelta inmediatamente
        if (!words || words.length === 0) return Promise.resolve();

        return animate(words, {
            transform: "translateY(0)",
        }, {
            duration: 0.5,
            delay: stagger(0.1),
        });
    };

    const exitAnimation = () => {
        return animate(scope.current.querySelectorAll('.word'), {
            transform: "translateY(100%)",
        },
            {
                duration: 0.3,
                delay: stagger(-.025, { startDelay: scope.current.querySelectorAll('.word').length * 0.025 }),
            })
    }
    return {
        scope,
        entranceAnimation,
        exitAnimation
    };
}

export default useTextRevealAnimation