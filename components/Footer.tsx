import { Heart, Code2 } from "lucide-react";

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <Code2 className="w-6 h-6 text-primary" />
                <span className="text-xl">John Doe</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Building exceptional digital experiences with modern technologies.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => scrollToSection("home")}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("about")}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("experience")}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Experience
                  </button>
                </li>
              </ul>
            </div>

            {/* More Links */}
            <div>
              <h4 className="mb-4">Explore</h4>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => scrollToSection("skills")}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Skills
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("projects")}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Projects
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="mb-4">Contact</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="mailto:john.doe@example.com"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    john.doe@example.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+15551234567"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    +1 (555) 123-4567
                  </a>
                </li>
                <li className="text-sm text-muted-foreground">San Francisco, CA</li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-border">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm text-muted-foreground text-center md:text-left">
                © {currentYear} John Doe. All rights reserved.
              </p>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-primary fill-primary" />
                <span>and lots of</span>
                <Code2 className="w-4 h-4 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
