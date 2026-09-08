import React from 'react';
import { Briefcase, CalendarDays } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-6 section-divider">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-accent mb-3">
            03 — Experience
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Work Experience
          </h2>
        </div>

        <div className="relative">
          {/* Vertical timeline connector */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-10">
            {experienceData.map((item, index) => (
              <div key={index} className="relative md:pl-16">
                {/* Timeline node */}
                <div className="absolute left-3 top-6 w-4 h-4 rounded-full border-2 border-accent bg-background hidden md:block" />

                <div className="bg-card border border-border rounded-xl p-6 md:p-8 shadow-xs hover:shadow-md transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-5">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Briefcase className="w-4 h-4 text-accent shrink-0" />
                        <h3 className="font-serif font-bold text-lg text-foreground">
                          {item.role}
                        </h3>
                      </div>
                      <p className="text-accent font-semibold text-sm ml-6">{item.company}</p>
                      <p className="text-muted-foreground text-sm ml-6">{item.location}</p>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground whitespace-nowrap bg-muted px-3 py-1.5 rounded-full self-start shrink-0">
                      <CalendarDays className="w-3.5 h-3.5 shrink-0" />
                      {item.period}
                    </div>
                  </div>

                  <ul className="space-y-2.5 mb-5">
                    {item.bullets.map((bullet, bIndex) => (
                      <li key={bIndex} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-md bg-accent/10 text-accent border border-accent/20 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
