"use client";
import { FC, useEffect, useState } from "react";
import Button from "@/components/Button";
import { motion, useAnimate } from "motion/react"
import { MouseEvent } from "react";

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
const navItems = [
  {
    label: "About",
    href: "#intro",
  },
  {
    label: "Selected Works",
    href: "#projects",
  },
  {
    label: "Testimonials",
    href: "#testimonials",
  },
  {
    label: "FAQs",
    href: "#faqs",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

const socialLinks = [
  {
    label: "Github",
    href: "https://github.com/luisagreda",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
      </svg>
    )
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/luis-agreda/",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
        <path fillRule="evenodd" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" clipRule="evenodd" />
      </svg>
    )
  },
  {
    label: "Email",
    href: "mailto:Luis.agreda98@gmail.com",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
        <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
        <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
      </svg>
    )
  }
];

const Header: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [topLineScope, topLineAnimate] = useAnimate();
  const [bottomLineScope, bottomLineAnimate] = useAnimate();
  const [navScope, navAnimate] = useAnimate();

  useEffect(() => {
    if (isOpen) {
      topLineAnimate([
        [
          topLineScope.current,
          {
            translateY: 4,
          }
        ],
        [
          topLineScope.current,
          {
            rotate: 45,
          }
        ],
      ]);

      bottomLineAnimate([
        [
          bottomLineScope.current,
          {
            translateY: -4,
          }
        ],
        [
          bottomLineScope.current,
          {
            rotate: -45,
          }
        ],
      ]);

      navAnimate(navScope.current, {
        height: "100%",
      }, {
        duration: 0.7
      },)
    } else {
      topLineAnimate([
        [
          topLineScope.current,
          {
            rotate: 0,
          }
        ],
        [topLineScope.current,
        {
          translateY: 0,
        }]
      ]);
      bottomLineAnimate([
        [
          bottomLineScope.current,
          {
            rotate: 0,
          }
        ],
        [
          bottomLineScope.current,
          {
            translateY: 0,
          }
        ],
      ]);

      navAnimate(navScope.current, {
        height: 0,
      })
    }
  }, [isOpen, topLineAnimate, bottomLineAnimate, topLineScope, bottomLineScope, navAnimate, navScope]);


  const handleClickMobilNavItem = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsOpen(false);

    const url = new URL(e.currentTarget.href);
    const hash = url.hash;

    const target = document.querySelector(hash);

    if (!target) {
      return;
    }

    target.scrollIntoView({
      behavior: "smooth",
    });
  }
  return (
    <header className="">

      <div className="fixed toop-0 left-0 w-full h-0 overflow-hidden bg-stone-900 z-10" ref={navScope}>
        <nav className="mt-20 flex flex-col">
          {navItems.map(({ href, label }) => (
            <a href={href} key={label} className="text-stone-200 border-t last-border-b border-stone-800 border-dotted py-8 group/nav-item relative isolaate"

              onClick={handleClickMobilNavItem}>
              <div className="container !max-w-full flex items-center justify-between">
                <span className="test-3xl group-hover/nav-item:pl-4 transition-all durtion-500">{label}</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                </svg>

              </div>
              <div className="absolute w-full h-0 bg-stone-800 group-hover/nav-item:h-full transition-all duration-500 bottom-0 -z-10"></div>
            </a>
          ))}
          <div className="flex gap-4 p-6 ">
            {socialLinks.map(({ href, label, icon }) => (
              <a href={href} key={label} target="_blank" rel="noopener noreferrer" className="text-stone-200 hover:text-white transition-colors duration-300">
                {icon}
              </a>
            ))}
          </div>
        </nav>
      </div>
      <div className="fixed top-0 left-0 w-full mix-blend-difference backdrop-blur-md z-10">

        <div className="container !max-w-full">
          <div className="flex justify-between h-20 items-center">
            <div>
              <a href=""> <span className="text-xl font-bold uppercase text-white">Luis&nbsp; Agreda</span></a>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed top-0 left-0 w-full z-10">
        <div className="container !max-w-full">
          <div className="flex justify-end h-20 items-center">
            <div className="flex items-center gap-4">
              <div
                onClick={() => setIsOpen(!isOpen)}
                className="size-11 border border-stone-400 rounded-full inline-flex items-center justify-center bg-stone-200 cursor-pointer">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <motion.rect x="3" y="7" width="18" height="2" fill="currentColor"
                    ref={topLineScope}
                    style={{
                      transformOrigin: '12px 8px',
                    }} />
                  <motion.rect x="3" y="15" width="18" height="2" fill="currentColor"
                    ref={bottomLineScope}
                    style={{
                      transformOrigin: '12px 16px',
                    }} />
                </svg>
              </div>
              <Button variant="primary" className="hidden md:inline-flex items-center">Contact Me</Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
