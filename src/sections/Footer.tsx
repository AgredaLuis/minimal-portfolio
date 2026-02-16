"use client"
import Button from "@/components/Button";
import useTextRevealAnimation from "@/hooks/UseTextRevealAnimation";
import { useInView } from "motion/react";
import { FC, useEffect, MouseEvent } from "react";


const navItems = [
  {
    href: '#about',
    label: 'About'
  },
  {
    href: '#projects',
    label: 'Projects'
  },
  {
    href: '#testimonials',
    label: 'Testimonials'
  },
  {
    href: '#faqs',
    label: 'FAQs'
  },
  {
    href: '#contact',
    label: 'Contact'
  }
]
const socialLinks = [
  {
    label: "Github",
    href: "https://github.com/luisagreda",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 md:size-8 lg:size-10">
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
      </svg>
    )
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/luis-agreda/",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 md:size-8 lg:size-10">
        <path fillRule="evenodd" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" clipRule="evenodd" />
      </svg>
    )
  },
  {
    label: "Email",
    href: "mailto:Luis.agreda98@gmail.com",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 md:size-8 lg:size-10">
        <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
        <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
      </svg>
    )
  }
];

const Footer: FC = () => {
  const { scope, entranceAnimation } = useTextRevealAnimation();
  const inView = useInView(scope)

  useEffect(() => {
    if (inView) {
      entranceAnimation();
    }
  }, [inView, entranceAnimation]);

  const handleClickNavItem = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
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

  return <footer className="bg-stone-900 text-white" id="contact">
    <div className="container">
      <div className="section">
        <div className="flex items-center gap-3">
          <div className="size-3 rounded-full bg-green-400 animate-pulse"></div>
          <span className="uppercase">One spot availablee for next month</span>
        </div>
        <div className="grid md:grid-cols-3 md:items-center">
          <div className="md:col-span-2">
            <h2 className="text-4xl md:text-7xl lg:text-8xl mt-8 font-extralight" ref={scope}>Enoough talk. Let&apos;s make something great together</h2>
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

              }>Luis.agreda98@gmail.com</Button>
            </a>
          </div>
          <div>
            <nav className="flex flex-col md:items-end gap-8 mt-16 md:mt-0">
              {navItems.map(({ href, label }) => (
                <a href={href} key={label} onClick={handleClickNavItem}><Button variant="text" className="text-lg">{label}</Button></a>
              ))}
            </nav>
            <div className="flex items-center md:justify-end gap-4 mt-8">
              {socialLinks.map(({ href, label, icon }) => (
                <a href={href} key={label} target="_blank" rel="noopener noreferrer" className="text-stone-300 hover:text-white hover:scale-110 transition-all duration-300">
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        <p className="py-16 text-white/30 text-sm">Made with ❤️ by Luis Agreda</p>
      </div>
    </div>
  </footer>;
};

export default Footer;
