import React from 'react';
import { BookOpen, Database, Github, Network, Smartphone } from 'lucide-react';
import { projectsData } from '../data/portfolioData';

export const Projects: React.FC = () => {
  const getIcon = (type: string, colorClass: string) => {
    const className = `w-5 h-5 ${colorClass}`;
    switch (type) {
      case 'database':
        return <Database className={className} />;
      case 'book-open':
        return <BookOpen className={className} />;
      case 'smartphone':
        return <Smartphone className={className} />;
      case 'network':
        return <Network className={className} />;
      default:
        return <Database className={className} />;
    }
  };

  return (
    <section id="projects" className="py-24 px-6 section-divider bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-accent mb-3">
            04 — Projects
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Selected Projects
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl text-base">
            A collection of academic and personal projects that demonstrate my technical range and
            problem-solving approach.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projectsData.map((project, index) => (
            <div
              key={project.title}
              id={`project-${project.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
              className={`bg-card border border-border rounded-xl p-6 md:p-8 flex flex-col shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 ${
                index === 2 ? 'md:col-span-2' : ''
              }`}
            >
              <div className="flex items-start gap-4 mb-4">
                <div
                  className={`w-10 h-10 rounded-lg ${project.iconBg} flex items-center justify-center shrink-0`}
                >
                  {getIcon(project.iconType, project.iconColor)}
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-serif font-bold text-foreground text-base leading-snug">
                    {project.title}
                  </h3>
                  {project.subtitle && (
                    <p className="text-xs text-accent font-semibold mt-0.5">{project.subtitle}</p>
                  )}
                </div>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-5">
                {project.description}
              </p>

              <div className="flex items-center justify-between gap-3 pt-4 border-t border-border mt-auto">
                <div className="flex flex-wrap gap-2 flex-1 min-w-0">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-md bg-muted text-muted-foreground border border-border font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors duration-200 whitespace-nowrap"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <Github className="w-4 h-4" />
                  <span className="hidden md:inline">GitHub</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
