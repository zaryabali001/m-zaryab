import { Code2, Briefcase, Award, Users, TrendingUp } from "lucide-react";
import { Card } from "./ui/card";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const contentLeftRef = useRef<HTMLDivElement>(null);
  const contentRightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.from(headerRef.current?.children || [], {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 80%",
        },
      });

      // Stats animation with counter
      const statCards = statsRef.current?.querySelectorAll(".stat-card") || [];
      statCards.forEach((card, index) => {
        // Card entrance
        gsap.from(card, {
          opacity: 0,
          scale: 0.8,
          y: 50,
          duration: 0.8,
          delay: index * 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 75%",
          },
        });

        // Counter animation
        const valueElement = card.querySelector(".stat-value");
        if (valueElement) {
          const targetText = valueElement.textContent || "0";
          const numericValue = parseInt(targetText.replace(/\D/g, "")) || 0;
          const suffix = targetText.replace(/[0-9]/g, "");

          gsap.from(valueElement, {
            textContent: 0,
            duration: 2,
            delay: index * 0.1 + 0.3,
            snap: { textContent: 1 },
            onUpdate: function () {
              const current = Math.floor(
                parseFloat(this.targets()[0].textContent)
              );
              valueElement.textContent = current + suffix;
            },
            scrollTrigger: {
              trigger: statsRef.current,
              start: "top 75%",
            },
          });
        }

        // Hover animation
        card.addEventListener("mouseenter", () => {
          gsap.to(card, {
            y: -10,
            scale: 1.05,
            duration: 0.3,
            ease: "power2.out",
          });
        });

        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            y: 0,
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
          });
        });
      });

      // Content animations
      gsap.from(contentLeftRef.current?.children || [], {
        opacity: 0,
        x: -50,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: contentLeftRef.current,
          start: "top 75%",
        },
      });

      gsap.from(contentRightRef.current?.children || [], {
        opacity: 0,
        x: 50,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: contentRightRef.current,
          start: "top 75%",
        },
      });

      // Service cards hover
      const serviceCards =
        contentRightRef.current?.querySelectorAll(".service-card") || [];
      serviceCards.forEach((card) => {
        card.addEventListener("mouseenter", () => {
          gsap.to(card, {
            x: 10,
            duration: 0.3,
            ease: "power2.out",
          });
        });

        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            x: 0,
            duration: 0.3,
            ease: "power2.out",
          });
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // const stats = [
  //   { icon: Code2, label: "Years of Experience", value: "1+" },
  //   { icon: Briefcase, label: "Projects Completed", value: "50+" },
  //   { icon: Award, label: "Awards Won", value: "12" },
  //   { icon: Users, label: "Happy Clients", value: "30+" },
  // ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-20 md:py-32 relative bg-secondary/20"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div ref={headerRef} className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 rounded-full mb-4 backdrop-blur-sm">
              <TrendingUp className="w-4 h-4 text-primary" />
              <span className="text-sm">About Me</span>
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Turning Ideas Into Reality
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              A passionate software engineer dedicated to building exceptional
              digital experiences
            </p>
          </div>

          {/* Stats Grid */}
          {/* <div
            ref={statsRef}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card
                  key={index}
                  className="stat-card p-6 text-center bg-gradient-to-br from-card to-card/50 border-border hover:border-primary/50 transition-all group backdrop-blur-sm cursor-pointer"
                >
                  <div className="flex justify-center mb-4">
                    <div className="relative">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="w-7 h-7 text-primary" />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-md opacity-0 group-hover:opacity-50 transition-opacity"></div>
                    </div>
                  </div>
                  <div className="stat-value text-3xl md:text-4xl mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </Card>
              );
            })}
          </div> */}

          {/* About Content */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div ref={contentLeftRef}>
              <h3 className="text-2xl md:text-3xl mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Who I Am
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                I’m a passionate full-stack developer with strong experience in
                React, Next.js, Node.js, and WordPress. I enjoy turning complex
                ideas into clean, functional, and visually appealing digital
                products.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                I’ve worked on real-world projects ranging from business
                websites and plugins to full-scale web applications. I value
                clean code, performance, and user experience, and I continuously
                push myself to learn new technologies and improve my craft.
              </p>
              <div className="flex items-center gap-4">
                <div className="h-1 flex-1 bg-gradient-to-r from-primary via-accent to-transparent rounded-full"></div>
              </div>
            </div>
            <div ref={contentRightRef}>
              <h3 className="text-2xl md:text-3xl mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                What I Do
              </h3>
              <div className="space-y-4">
                <div className="service-card p-5 bg-gradient-to-br from-secondary to-secondary/50 rounded-xl border border-border hover:border-primary/50 transition-all backdrop-blur-sm">
                  <h4 className="mb-2 text-primary flex items-center gap-2">
                    <Code2 className="w-5 h-5" />
                    Full-Stack Development
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    I build complete web applications from frontend to backend
                    using modern technologies like React, Next.js, Node.js,
                    MongoDB, and TypeScript.
                  </p>
                </div>
                <div className="service-card p-5 bg-gradient-to-br from-secondary to-secondary/50 rounded-xl border border-border hover:border-primary/50 transition-all backdrop-blur-sm">
                  <h4 className="mb-2 text-primary flex items-center gap-2">
                    <TrendingUp className="w-5 h-5" />
                    UI/UX & Web Design
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    I design clean, responsive, and user-friendly interfaces
                    using Figma, Tailwind CSS, and modern design principles.
                  </p>
                </div>
                <div className="service-card p-5 bg-gradient-to-br from-secondary to-secondary/50 rounded-xl border border-border hover:border-primary/50 transition-all backdrop-blur-sm">
                  <h4 className="mb-2 text-primary flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    WordPress & Custom Solutions
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    I develop custom WordPress websites, plugins, and business
                    solutions tailored to real client needs, with a focus on
                    performance and scalability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div
          className="absolute top-1/2 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/10 to-transparent rounded-full blur-3xl"
          data-speed="0.3"
        ></div>
        <div
          className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-l from-accent/10 to-transparent rounded-full blur-3xl"
          data-speed="0.2"
        ></div>
      </div>
    </section>
  );
}
