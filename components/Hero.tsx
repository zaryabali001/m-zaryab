/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

import {
  Github,
  Linkedin,
  Mail,
  Download,
  ChevronDown,
  Terminal,
  Code2,
} from "lucide-react";
import { Button } from "./ui/button";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const codeBlockRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      gsap.set(
        [
          profileRef.current,
          titleRef.current,
          subtitleRef.current,
          descRef.current,
          socialRef.current,
          ctaRef.current,
          codeBlockRef.current,
        ],
        {
          opacity: 0,
          y: 30,
        }
      );

      tl.to(profileRef.current, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "back.out(1.7)",
        delay: 0.3,
      })
        .to(titleRef.current, { opacity: 1, y: 0, duration: 0.8 }, "-=0.5")
        .to(subtitleRef.current, { opacity: 1, y: 0, duration: 0.8 }, "-=0.5")
        .to(descRef.current, { opacity: 1, y: 0, duration: 0.8 }, "-=0.5")
        .to(codeBlockRef.current, { opacity: 1, y: 0, duration: 0.8 }, "-=0.4")
        .to(
          socialRef.current?.children || [],
          { opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.1 },
          "-=0.3"
        )
        .to(
          ctaRef.current?.children || [],
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.15 },
          "-=0.2"
        );

      gsap.to(profileRef.current, {
        y: -15,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Typing animation for code block
      const codeLines = codeBlockRef.current?.querySelectorAll(".code-line");
      if (codeLines) {
        codeLines.forEach((line, i) => {
          gsap.from(line, {
            width: 0,
            duration: 1,
            delay: 1.5 + i * 0.3,
            ease: "power2.inOut",
          });
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={heroRef}
      id="home"
      className="min-h-screen flex items-center justify-center relative pt-16 md:pt-20 pb-20 md:pb-0 overflow-hidden"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Column - Main Content */}
            <div className="text-center md:text-left order-2 md:order-1">
              {/* Mobile: Profile Image */}
              <div className="md:hidden mb-8 flex justify-center">
                <div ref={profileRef} className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary via-accent to-primary rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity animate-gradient"></div>

                  <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center border-2 border-primary/50 overflow-hidden backdrop-blur-sm">
                    <img
                      src="/hexagen-image.png"
                      alt="Profile"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>

                  <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center border-2 border-background shadow-lg">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 rounded-full mb-4 md:mb-6 backdrop-blur-sm text-xs md:text-sm">
                <Terminal className="w-3 h-3 md:w-4 md:h-4 text-primary" />
                <span>Available for new projects</span>
              </div>

              <h1
                ref={titleRef}
                className="text-4xl md:text-6xl lg:text-7xl mb-4 md:mb-6"
              >
                <span className="block text-foreground/60 text-xl md:text-2xl mb-2">
                  Hi, I'm
                </span>
                <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
                  M Zaryab
                </span>
              </h1>

              <p
                ref={subtitleRef}
                className="text-xl md:text-2xl lg:text-3xl text-primary mb-4 md:mb-6"
              >
                Junior Software Engineer
              </p>

              <p
                ref={descRef}
                className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto md:mx-0 mb-6 md:mb-8 leading-relaxed"
              >
                Building scalable web applications with modern technologies.
                Specialized in React, TypeScript, and figma.
              </p>

              {/* Social Links */}
              <div
                ref={socialRef}
                className="flex items-center justify-center md:justify-start gap-3 mb-6 md:mb-8"
              >
                {[
                  { icon: Github, href: "https://github.com/zaryabali001", label: "GitHub" },
                  {
                    icon: Linkedin,
                    href: "https://www.linkedin.com/in/mzaryabali/",
                    label: "LinkedIn",
                  },
                  {
                    icon: Mail,
                    href: "azaryab820@gmail.com",
                    label: "Email",
                  },
                ].map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-xl md:rounded-full bg-secondary hover:bg-primary/20 border border-border hover:border-primary transition-all group"
                      aria-label={social.label}
                    >
                      <Icon className="w-4 h-4 md:w-5 md:h-5 relative z-10 group-hover:scale-110 transition-transform" />
                      <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-xl md:rounded-full opacity-0 group-hover:opacity-100 blur-lg transition-opacity"></div>
                    </a>
                  );
                })}
              </div>

              {/* CTA Buttons */}
              <div
                ref={ctaRef}
                className="flex flex-col md:flex-row items-stretch md:items-center justify-center md:justify-start gap-3 md:gap-4"
              >
                <Button
                  onClick={() => scrollToSection("contact")}
                  className="w-full md:w-auto bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-primary-foreground px-6 md:px-8 py-5 md:py-6 rounded-xl md:rounded-lg shadow-2xl shadow-primary/25 hover:shadow-primary/50 transition-all group overflow-hidden text-sm md:text-base"
                >
                  <span className="relative z-10">Get in Touch</span>
                </Button>
                <Button
                  variant="outline"
                  className="w-full md:w-auto border-2 border-primary/50 hover:bg-primary/10 hover:border-primary px-6 md:px-8 py-5 md:py-6 rounded-xl md:rounded-lg group overflow-hidden transition-all text-sm md:text-base"
                >
                  <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                  <span>Download CV</span>
                </Button>
              </div>
            </div>

            {/* Right Column - Code Block / Visual */}
            <div className="order-1 md:order-2">
              {/* Desktop: Profile Image */}
                      <div className="hidden md:block mb-8">
              <div ref={profileRef} className="relative group mx-auto w-fit">
                <div className="absolute -inset-6 bg-gradient-to-r from-primary via-accent to-primary rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition-opacity animate-gradient"></div>

                <div className="relative w-48 h-48 lg:w-56 lg:h-56 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center border-2 border-primary/50 overflow-hidden backdrop-blur-sm">
                  <img
                    src="/hexagen-image.png"
                    alt="Profile"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>

                <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center border-4 border-background shadow-lg">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>


              {/* Code Block */}
              <div
                ref={codeBlockRef}
                className="hidden md:block bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 p-6 shadow-2xl"
              >
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border/50">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  </div>
                  <div className="text-xs text-muted-foreground ml-2">
                    portfolio.tsx
                  </div>
                </div>
                <div className="font-mono text-xs md:text-sm space-y-2">
                  <div className="code-line overflow-hidden whitespace-nowrap">
                    <span className="text-purple-400">const</span>{" "}
                    <span className="text-blue-400">developer</span>{" "}
                    <span className="text-foreground/60">=</span>{" "}
                    <span className="text-foreground">{"{"}</span>
                  </div>
                  <div className="code-line overflow-hidden whitespace-nowrap pl-4">
                    <span className="text-blue-300">name</span>
                    <span className="text-foreground/60">:</span>{" "}
                    <span className="text-green-400">'M Zaryab'</span>
                    <span className="text-foreground/60">,</span>
                  </div>
                  <div className="code-line overflow-hidden whitespace-nowrap pl-4">
                    <span className="text-blue-300">role</span>
                    <span className="text-foreground/60">:</span>{" "}
                    <span className="text-green-400">'Web Developer'</span>
                    <span className="text-foreground/60">,</span>
                  </div>
                  <div className="code-line overflow-hidden whitespace-nowrap pl-4">
                    <span className="text-blue-300">skills</span>
                    <span className="text-foreground/60">:</span>{" "}
                    <span className="text-foreground/60">{"["}</span>
                    <span className="text-green-400">'React'</span>
                    <span className="text-foreground/60">,</span>{" "}
                    <span className="text-green-400">'TypeScript&#39;</span>
                    <span className="text-foreground/60">{"]"}</span>
                  </div>
                  <div className="code-line overflow-hidden whitespace-nowrap">
                    <span className="text-foreground">{"}"}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Desktop Only */}
      <div className="hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <button
          onClick={() => scrollToSection("about")}
          className="flex flex-col items-center gap-2 text-primary hover:text-accent transition-colors group"
        >
          <ChevronDown className="w-6 h-6 group-hover:scale-110 transition-transform" />
        </button>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-72 md:w-96 h-72 md:h-96 bg-linear-to-r from-primary/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-20 w-72 md:w-96 h-72 md:h-96 bg-linear-to-l from-accent/20 to-transparent rounded-full blur-3xl"></div>
        <div className="hidden md:block absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.05)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_80%)]"></div>
      </div>
    </section>
  );
}
