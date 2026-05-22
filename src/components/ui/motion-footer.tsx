"use client";

import * as React from "react";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowUp, Mail, Sparkles } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type MagneticButtonProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  asButton?: boolean;
  onButtonClick?: () => void;
};

const MagneticButton = React.forwardRef<HTMLAnchorElement, MagneticButtonProps>(
  ({ className, children, asButton = false, onButtonClick, ...props }, forwardedRef) => {
    const localRef = useRef<HTMLAnchorElement>(null);

    useEffect(() => {
      const element = localRef.current;
      if (!element) return;

      const handleMouseMove = (event: MouseEvent) => {
        const rect = element.getBoundingClientRect();
        const x = event.clientX - rect.left - rect.width / 2;
        const y = event.clientY - rect.top - rect.height / 2;

        gsap.to(element, {
          x: x * 0.25,
          y: y * 0.25,
          scale: 1.04,
          ease: "power2.out",
          duration: 0.35,
        });
      };

      const handleMouseLeave = () => {
        gsap.to(element, {
          x: 0,
          y: 0,
          scale: 1,
          ease: "elastic.out(1, 0.35)",
          duration: 1,
        });
      };

      element.addEventListener("mousemove", handleMouseMove);
      element.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        element.removeEventListener("mousemove", handleMouseMove);
        element.removeEventListener("mouseleave", handleMouseLeave);
      };
    }, []);

    return (
      <a
        ref={(node) => {
          localRef.current = node;
          if (typeof forwardedRef === "function") forwardedRef(node);
          else if (forwardedRef) forwardedRef.current = node;
        }}
        className={cn("cursor-pointer", className)}
        role={asButton ? "button" : undefined}
        onClick={(event) => {
          if (asButton) {
            event.preventDefault();
            onButtonClick?.();
          }
        }}
        {...props}
      >
        {children}
      </a>
    );
  },
);

MagneticButton.displayName = "MagneticButton";

const MarqueeItem = () => (
  <div className="flex items-center space-x-10 px-6">
    <span>AI Acquisition Infrastructure</span>
    <span className="text-primary">✦</span>
    <span>Performance Marketing</span>
    <span className="text-primary">✦</span>
    <span>Automated Meetings</span>
    <span className="text-primary">✦</span>
    <span>CRM Intelligence</span>
    <span className="text-primary">✦</span>
  </div>
);

export function CinematicFooter() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const giantTextRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!wrapperRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        giantTextRef.current,
        { y: "10vh", scale: 0.9, opacity: 0 },
        {
          y: "0vh",
          scale: 1,
          opacity: 1,
          ease: "power1.out",
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: "top 80%",
            end: "bottom bottom",
            scrub: 1,
          },
        },
      );

      gsap.fromTo(
        [headingRef.current, linksRef.current],
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: "top 45%",
            end: "bottom bottom",
            scrub: 1,
          },
        },
      );
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      ref={wrapperRef}
      className="relative h-screen w-full"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <footer className="fixed bottom-0 left-0 flex h-screen w-full flex-col justify-between overflow-hidden bg-[#08050f] text-white">
        <div className="footer-aurora absolute left-1/2 top-1/2 z-0 h-[60vh] w-[80vw] -translate-x-1/2 -translate-y-1/2 rounded-[50%] blur-[80px]" />
        <div className="footer-bg-grid absolute inset-0 z-0 pointer-events-none" />

        <div
          ref={giantTextRef}
          className="footer-giant-bg-text absolute -bottom-[5vh] left-1/2 z-0 -translate-x-1/2 select-none whitespace-nowrap"
        >
          DIGIMORIA
        </div>

        <div className="absolute left-0 top-12 z-10 w-full -rotate-2 scale-110 overflow-hidden border-y border-white/10 bg-black/40 py-4 shadow-2xl backdrop-blur-md">
          <div className="animate-footer-scroll-marquee flex w-max text-xs font-bold uppercase tracking-[0.3em] text-white/55 md:text-sm">
            <MarqueeItem />
            <MarqueeItem />
          </div>
        </div>

        <div className="relative z-10 mx-auto mt-20 flex w-full max-w-5xl flex-1 flex-col items-center justify-center px-6">
          <h2 ref={headingRef} className="mb-10 text-center font-display text-5xl font-black tracking-tight md:text-8xl">
            Build your system.
          </h2>

          <div ref={linksRef} className="flex w-full flex-col items-center gap-5">
            <div className="flex w-full flex-wrap justify-center gap-4">
              <MagneticButton
                href="/contact"
                className="footer-glass-pill flex items-center gap-3 rounded-full px-10 py-5 text-sm font-bold text-white md:text-base"
              >
                <Mail className="size-5" aria-hidden="true" />
                Contact DigiMoria
              </MagneticButton>
              <MagneticButton
                href="#services"
                className="footer-glass-pill flex items-center gap-3 rounded-full px-10 py-5 text-sm font-bold text-white md:text-base"
              >
                <Sparkles className="size-5" aria-hidden="true" />
                Explore Services
              </MagneticButton>
            </div>

            <div className="mt-2 flex w-full flex-wrap justify-center gap-3 md:gap-6">
              <Link to="/about" className="footer-glass-pill rounded-full px-6 py-3 text-xs font-medium text-white/70 hover:text-white md:text-sm">
                About
              </Link>
              <a href="#ai-meeting-engine" className="footer-glass-pill rounded-full px-6 py-3 text-xs font-medium text-white/70 hover:text-white md:text-sm">
                AI Meeting Engine
              </a>
            </div>
          </div>
        </div>

        <div className="relative z-20 flex w-full flex-col items-center justify-between gap-4 px-6 pb-8 md:flex-row md:px-12">
          <div className="text-[10px] font-semibold uppercase tracking-widest text-white/45 md:text-xs">
            © {new Date().getFullYear()} DigiMoria. All rights reserved.
          </div>

          <MagneticButton
            href="#top"
            asButton
            onButtonClick={scrollToTop}
            className="footer-glass-pill flex size-12 items-center justify-center rounded-full text-white/60 hover:text-white"
            aria-label="Back to top"
          >
            <ArrowUp className="size-5" aria-hidden="true" />
          </MagneticButton>
        </div>
      </footer>
    </div>
  );
}
