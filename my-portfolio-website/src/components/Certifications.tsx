import React from 'react';
import { Award, CalendarDays } from 'lucide-react';
import { certificationsData } from '../data/portfolioData';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-24 px-6 section-divider">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-accent mb-3">
            05 — Certifications
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Continuous Learning
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl text-base">
            Certifications and training that complement my academic journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {certificationsData.map((item) => (
            <div
              key={item.title}
              id={`cert-${item.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
              className={`bg-card border border-border border-l-4 ${item.color} rounded-xl p-5 flex gap-4 items-start shadow-xs hover:shadow-md transition-all duration-300`}
            >
              <div className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center shrink-0">
                <Award className="w-4 h-4 text-muted-foreground" />
              </div>

              <div className="min-w-0 flex-1">
                <h3 className="font-semibold text-sm text-foreground leading-snug mb-1">
                  {item.title}
                </h3>
                <p
                  className={`text-xs font-semibold px-2 py-0.5 rounded-full inline-block mb-2 ${item.badgeColor}`}
                >
                  {item.issuer}
                </p>
                {item.detail && (
                  <p className="text-xs text-muted-foreground mb-1.5">{item.detail}</p>
                )}
                {item.date && (
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <CalendarDays className="w-3 h-3 shrink-0" />
                    <span>{item.date}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
