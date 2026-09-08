import React, { useState } from 'react';
import { skillsData } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredCategories = selectedCategory
    ? skillsData.filter((item) => item.category === selectedCategory)
    : skillsData;

  return (
    <section id="skills" className="py-24 px-6 section-divider bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-accent mb-3">
            02 — Skills
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Technical Expertise
          </h2>
        </div>

        {/* Category filter pills */}
        <div className="flex flex-wrap gap-2 mb-10">
          <button
            id="skills-filter-all"
            onClick={() => setSelectedCategory(null)}
            className={`text-xs font-semibold tracking-wide uppercase px-4 py-2 rounded-full border transition-all duration-200 cursor-pointer ${
              selectedCategory === null
                ? 'bg-primary text-primary-foreground border-primary'
                : 'bg-background text-muted-foreground border-border hover:border-foreground hover:text-foreground'
            }`}
          >
            All
          </button>
          {skillsData.map((item) => {
            const isSelected = selectedCategory === item.category;
            return (
              <button
                key={item.category}
                id={`skills-filter-${item.category.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                onClick={() =>
                  setSelectedCategory((prev) => (prev === item.category ? null : item.category))
                }
                className={`text-xs font-semibold tracking-wide uppercase px-4 py-2 rounded-full border transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-primary text-primary-foreground border-primary'
                    : 'bg-background text-muted-foreground border-border hover:border-foreground hover:text-foreground'
                }`}
              >
                {item.category}
              </button>
            );
          })}
        </div>

        {/* Skills Category Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((item) => (
            <div
              key={item.category}
              id={`skills-card-${item.category.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
              className="bg-card border border-border rounded-xl p-6 shadow-xs hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className={`w-2 h-2 rounded-full ${item.dot}`} />
                <h3 className="text-sm font-bold uppercase tracking-wider text-foreground">
                  {item.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {item.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`text-xs px-2.5 py-1 rounded-md border font-medium transition-colors duration-200 ${item.color}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
