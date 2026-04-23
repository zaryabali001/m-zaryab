import { Mail, MapPin, Phone, Send, Github, Linkedin, Loader2 } from "lucide-react";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { useState } from "react";
import { toast } from "sonner";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        toast.success("Message sent successfully! I'll get back to you soon.");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error("Failed to send");
      }
    } catch (error) {
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "azaryab820@gmail.com",
      link: "mailto:azaryab820@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+92 309 0270809",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Rawalpindi, Pakistan",
    },
  ];

  const socialLinks = [
    { icon: Github, label: "GitHub", link: "https://github.com/zaryabali001" },
    { icon: Linkedin, label: "LinkedIn", link: "https://www.linkedin.com/in/mzaryabali/" },
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-4">
              Let&lsquo;s Connect
            </span>
            <h2 className="text-4xl md:text-5xl mb-4 font-bold">Get In Touch</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I&#39;m always open to discussing new projects, creative ideas, or opportunities to be
              part of an ambitious vision. Feel free to get in touch!
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            <div className="md:col-span-2 space-y-6">
              <div>
                <h3 className="text-2xl mb-6 font-semibold">Contact Information</h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <Card
                        key={index}
                        className="p-4 bg-card border-border hover:border-primary/50 transition-all"
                      >
                        {info.link ? (
                          <a href={info.link} className="flex items-start gap-4 group">
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                              <Icon className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                              <p className="group-hover:text-primary transition-colors">{info.value}</p>
                            </div>
                          </a>
                        ) : (
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                              <Icon className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                              <p>{info.value}</p>
                            </div>
                          </div>
                        )}
                      </Card>
                    );
                  })}
                </div>
              </div>

              <div>
                <h3 className="text-xl mb-4 font-semibold">Follow Me</h3>
                <div className="flex items-center gap-3">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-lg bg-secondary border border-border hover:border-primary hover:bg-primary/10 flex items-center justify-center transition-all group"
                        aria-label={social.label}
                      >
                        <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="md:col-span-3">
              <Card className="p-6 bg-card border-border">
                <h3 className="text-2xl mb-6 font-semibold">Send Me a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block mb-2 text-sm font-medium">Your Name</label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-input-background border-border focus:border-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium">Your Email</label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-input-background border-border focus:border-primary"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block mb-2 text-sm font-medium">Subject</label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="Project Collaboration"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="bg-input-background border-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block mb-2 text-sm font-medium">Message</label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="bg-input-background border-border focus:border-primary resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                  >
                    {isSubmitting ? (
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    ) : (
                      <Send className="w-4 h-4 mr-2" />
                    )}
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
}