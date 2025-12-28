/* eslint-disable react/jsx-no-undef */
import { ExternalLink, Github, Filter } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { useState } from "react";
import Image from "next/image";

export function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "React", "figma", "Next", "wordpress"];

  const projects = [
    {
      title: "Doctor Appointment Booking System",
      description: "",
      image: "/doctor.png",
      tags: ["JavaScript", "React", "Tailwind"],
      category: "React",
      github: "https://github.com/zaryabali001/Doctors-managemant-system-MERN",
      demo: "https://prescripto.vercel.app/"
    },
    {
      title: "Hotel Booking App",
      description: "",
      image: "/hotel.png",
      tags: ["JavaScript", "React", "Tailwind"],
      category: "Machine Learning",
      github: "",
      demo: "https://hb-gs.vercel.app/",
    },
    {
      title: "GSAP Awwwards Website",
      description: "",
      image: "/awwards-CFh_on9N.png",
      tags: ["JavaScript", "React", "Tailwind", "GSAP"],
      category: "React",
      github: "https://awwwards-website-clone.netlify.app/",
      demo: "https://github.com/zaryabali001/GSAP-Awwwards-Website-main",
    },
    {
      title: "Food Delivery App",
      description: "",
      image: "/foodApp-CFmvF5j-.png",
      tags: ["JavaScript", "React", "Tailwind"],
      category: "Cloud",
      github: "https://food-delivery-react-00.netlify.app/",
    },
    {
      title: "Tour Guide (AI Powered)",
      description: "",
      image: "/tour-BmyhTLRr.png",
      tags: ["React", "Next" , "Node", "OpenAi", "Redux", "Google Maps","MongoDB","Clerk" ],
      category: "React",
      github: "https://github.com/zaryabali001/fyp2",
    },
    {
      title: "ai-imaging diagnos",
      description: "",
      image: "/ai-imaging.png ",
      tags: ["TypeScript", "Next", "Tailwind", "APIs"],
      category: "Next",
      github: "https://github.com/zaryabali001/ai-imaging",
      demo: "https://ai-imaging-vt81.vercel.app/"
    },
    {
      title: "video-generation (Veo3 Clone)",
      description: "",
      image: "/ve03.png",
      tags: ["TypeScript", "Next", "Tailwind", "APIs"],
      category: "Next",
      github: "https://github.com/zaryabali001/video-generation",
      demo: "https://video-generation-three.vercel.app/"
    },
    {
      title: "recursive-safeguard-updated",
      description: "",
      image: "/safeguard.png",
      tags: ["TypeScript", "Next", "Tailwind"],
      category: "Next",
      github: "https://github.com/zaryabali001/recursive-safeguard-updated",
      demo: "https://recursive-safeguard-fxlt.vercel.app/"
    },
    {
      title: "Styleframe Awwwards Clone",
      description: "",
      image: "/styleframe.png",
      tags: ["TypeScript", "Next", "Tailwind", "GSAP"],
      category: "Next",
      github: "",
      demo: "https://recursive-safeguard-fxlt.vercel.app/"
    },
    {
      title: "Dr-patient",
      description: "",
      image: "/dr.png",
      tags: ["TypeScript", "Next", "Tailwind", "APIs"],
      category: "Next",
      github: "https://github.com/zaryabali001/updated-code",
      demo: "https://updated-code-6myr.vercel.app/"
    },
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-4">
              Projects
            </span>
            <h2 className="text-4xl md:text-5xl mb-4">Featured Work</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              A selection of my recent work, from full-stack web applications to
              data science models and open-source contributions
            </p>

            {/* Filters */}
            <div className="flex items-center justify-center gap-3 flex-wrap">
              <Filter className="w-5 h-5 text-primary" />
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 rounded-full border transition-all ${
                    activeFilter === filter
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-secondary border-border hover:border-primary/50"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <Card
                key={index}
                className="bg-card border-border hover:border-primary/50 transition-all overflow-hidden group"
              >
                <div className="relative h-48 overflow-hidden">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">
                      No Image
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="bg-primary/10 text-primary border-primary/30"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* View More */}
          <div className="text-center mt-12">
            <Button
              variant="outline"
              className="border-primary/50 hover:bg-primary/10"
            >
              View All Projects on GitHub
              <Github className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
