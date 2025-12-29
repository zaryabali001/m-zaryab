import { Code2, Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Button } from "./ui/button";
import gsap from "gsap";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, {
        y: -100,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      });

      gsap.from(logoRef.current?.children || [], {
        opacity: 0,
        x: -20,
        duration: 0.6,
        stagger: 0.1,
        delay: 0.3
      });

      gsap.from(navRef.current?.children || [], {
        opacity: 0,
        y: -20,
        duration: 0.5,
        stagger: 0.05,
        delay: 0.5
      });
    }, headerRef);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Experience", id: "experience" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <>
      {/* Desktop Header - Only visible on desktop */}
      <header
        ref={headerRef}
        className={`hidden md:block fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/95 backdrop-blur-lg border-b border-border shadow-lg shadow-primary/5"
            : "bg-background/80 backdrop-blur-md"
        }`}
      >
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div ref={logoRef} className="flex items-center gap-2 group cursor-pointer">
              <div className="relative">
                <Code2 className="w-6 h-6 text-primary group-hover:rotate-180 transition-transform duration-500" />
                <div className="absolute -inset-1 bg-primary/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <span className="text-xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                M Zaryab
              </span>
            </div>

            <div ref={navRef} className="flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="relative px-4 py-2 text-foreground/70 hover:text-primary transition-colors group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
              <Button
                onClick={() => scrollToSection("contact")}
                className="ml-4 bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all"
              >
                Get in Touch
              </Button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Header - App-like status bar */}
      <header className="md:hidden fixed top-0 left-0 right-0 z-50 bg-background/98 backdrop-blur-xl border-b border-border/50">
        <div className="px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/25">
                <Code2 className="w-4 h-4 text-primary-foreground" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Portfolio</div>
                <div className="text-sm">M Zaryab</div>
              </div>
            </div>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 rounded-xl bg-secondary/50 flex items-center justify-center hover:bg-secondary transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Full-Screen Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-background/98 backdrop-blur-xl">
          <div className="h-full flex flex-col pt-20 pb-24 px-6">
            <div className="flex-1 flex flex-col justify-center space-y-2">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="group relative py-4 text-left"
                  style={{
                    animation: `slideInLeft 0.3s ease-out ${index * 0.05}s backwards`
                  }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-1 h-8 bg-gradient-to-b from-primary to-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div>
                      <div className="text-2xl group-hover:text-primary transition-colors">
                        {item.label}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        View {item.label.toLowerCase()} section
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
            <div className="pt-4">
              <Button
                onClick={() => scrollToSection("contact")}
                className="w-full py-6 bg-gradient-to-r from-primary to-accent text-primary-foreground text-lg rounded-2xl shadow-2xl shadow-primary/25"
              >
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
