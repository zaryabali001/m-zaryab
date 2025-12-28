import { Code, Database, Cloud, Wrench } from "lucide-react";
import { Card } from "./ui/card";
import { Progress } from "./ui/progress";

export function Skills() {
  const skillCategories = [
    {
      icon: Code,
      title: "Frameworks",
      skills: [
        { name: "  React", level: 85 },
        { name: " Next.js", level: 90 },
        { name: " Tailwind CSS", level: 88 },
        { name: " Node.js", level: 70 },
      ],
    },
    {
      icon: Database,
      title: "Languages & Databases",
      skills: [
        { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 82 },
        { name: "Redis", level: 78 },
        { name: "MySQL", level: 80 },
      ],
    },
    {
      icon: Cloud,
      title: "Design & development Tools",
      skills: [
        { name: "Figma", level: 88 },
        { name: "Wordpress development", level: 95 },
        { name: "Plugin Development", level: 50 },
        { name: "Shopify", level: 75 },
      ],
    },
    {
      icon: Wrench,
      title: "Tools & Platforms",
      skills: [
        { name: "Git / GitHub", level: 95 },
        { name: "VS Code", level: 95 },
        { name: "Figma", level: 85 },
        { name: "GSAP", level: 85 },
      ],
    },
  ];

  const otherSkills = [
    "team collaboration",
    "Problem-solving",
    "Communication",    
    "Time management",
    "Adaptability",
    "Critical thinking",
    "Creativity",
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-4">
              Technical Skills
            </span>
            <h2 className="text-4xl md:text-5xl mb-4">My Tech Stack</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A collection of the languages, frameworks, and technologies I use to build things
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card
                  key={index}
                  className="p-6 bg-card border-border hover:border-primary/50 transition-all"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-xl">{category.title}</h3>
                  </div>
                  <div className="space-y-4">
                    {category.skills.map((skill, i) => (
                      <div key={i}>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm">{skill.name}</span>
                          <span className="text-sm text-primary">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Other Skills */}
          <div>
            <h3 className="text-2xl mb-6 text-center">Other Technologies</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {otherSkills.map((skill, index) => (
                <div
                  key={index}
                  className="px-4 py-2 bg-secondary border border-border rounded-full hover:border-primary/50 hover:bg-primary/10 transition-all"
                >
                  <span className="text-sm">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
}
