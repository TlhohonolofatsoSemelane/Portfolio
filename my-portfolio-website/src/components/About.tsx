import React from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 section-divider">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-accent mb-3">
            01 — About
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Who I Am
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <div
              id="about-status-badge"
              className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-semibold px-3 py-1.5 rounded-full mb-5"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              {personalInfo.status}
            </div>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
              Software Engineering student at AUCA with hands-on experience in mobile development,
              databases, and networking. Skilled in various programming languages with a growing
              interest in AI and cloud computing.
            </p>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
              A collaborative team player eager to apply strong technical foundations and
              problem-solving skills to real-world challenges.
            </p>

            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-accent shrink-0" />
                <span>{personalInfo.statusDescription}</span>
              </div>
            </div>
          </div>

          <div>
            <div
              id="about-education-card"
              className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <GraduationCap className="w-5 h-5 text-accent" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-serif font-bold text-foreground text-base leading-snug">
                    {personalInfo.education.degree}
                  </h3>
                  <p className="text-sm text-accent font-medium">
                    {personalInfo.education.major}
                  </p>
                </div>
              </div>

              <div className="space-y-1 text-sm text-muted-foreground">
                <p className="font-medium text-foreground">
                  {personalInfo.education.school}
                </p>
                <p>{personalInfo.education.period}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
