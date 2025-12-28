import { Briefcase, Calendar, GraduationCap } from "lucide-react";
import { Card } from "./ui/card";

export function Experience() {
  const experiences = [
    {
      title: "Website Developer",
      company: " EMRCains",
      period: "sep 2025 - Present",
      description:
        "Worked across design and development to build modern, scalable web solutions using Figma, Next.js, and WordPress, transforming concepts into high-performance, user-focused digital experiences.",
      highlights: [
        "Implemented CI/CD pipeline that reduced deployment times by 50%",
        "Designed intuitive UI/UX in Figma, creating wireframes, design systems, and high-fidelity prototypes",

        "Developed fast, SEO-optimized applications with Next.js using reusable, scalable components",

        "Built and customized WordPress websites with custom themes, plugins, and CMS integrations",

        "Improved performance, responsiveness, and user experience across all platforms",

        "Ensured smooth collaboration between design and development through clean handoffs and best practices",
      ],
    },
    // {
    //   title: "Software Engineer",
    //   company: "Innovate Corp.",
    //   period: "Jul 2019 - Dec 2020",
    //   description:
    //     "Developed and maintained key features for a SaaS product used by over 100,000 clients.",
    //   highlights: [
    //     "Developed and maintained key features for a SaaS product",
    //     "Collaborated with cross-functional teams to define, design, and ship new features",
    //   ],
    // },
    // {
    //   title: "Junior Developer",
    //   company: "WebCrafters LLC",
    //   period: "May 2017 - Jun 2019",
    //   description:
    //     "Assisted in building and maintaining client websites using modern web technologies.",
    //   highlights: [
    //     "Assisted in building and maintaining client websites",
    //     "Learned and applied best practices in web development",
    //   ],
    // },
  ];

  const education = [
    {
      degree: "Bachelor of Software Engineering",
      institution: "Islamic University of Technology",
      year: "Graduated: May 2025",
    },
  ];

  return (
    <section id="experience" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-4">
              Professional Journey
            </span>
            <h2 className="text-4xl md:text-5xl mb-4">
              Experience & Education
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A timeline of my professional growth and academic achievements
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="mb-16">
            <div className="flex items-center gap-2 mb-8">
              <Briefcase className="w-6 h-6 text-primary" />
              <h3 className="text-2xl">Professional Experience</h3>
            </div>
            <div className="relative space-y-8">
              {/* Timeline Line */}
              <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border hidden md:block"></div>

              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  {/* Timeline Dot */}
                  <div className="hidden md:flex absolute left-8 top-6 w-4 h-4 -ml-2 bg-primary rounded-full border-4 border-background z-10"></div>

                  <Card className="md:ml-20 p-6 bg-card border-border hover:border-primary/50 transition-all">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <div>
                        <h4 className="text-xl text-primary mb-1">
                          {exp.title}
                        </h4>
                        <p className="text-muted-foreground">{exp.company}</p>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2 md:mt-0">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      {exp.description}
                    </p>
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <span className="text-primary mt-1">•</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-2 mb-8">
              <GraduationCap className="w-6 h-6 text-primary" />
              <h3 className="text-2xl">Education</h3>
            </div>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <Card
                  key={index}
                  className="p-6 bg-card border-border hover:border-primary/50 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl mb-1">{edu.degree}</h4>
                      <p className="text-muted-foreground mb-1">
                        {edu.institution}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {edu.year}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
