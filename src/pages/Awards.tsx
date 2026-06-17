import { Award, Trophy, Star } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import awardsData from "@/data/awards.json";

const { awards, milestones } = awardsData;
const icons = [Trophy, Award, Star];

const Awards = () => (
  <div className="pt-20">
    <section className="section-padding bg-muted">
      <div className="container-narrow">
        <AnimatedSection className="text-center mb-12">
          <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-2">Recognition</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground">Awards & Honours</h1>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Milestones and recognition that reflect our commitment to rural development.
          </p>
        </AnimatedSection>
      </div>
    </section>

    {/* Awards */}
    <section className="section-padding">
      <div className="container-narrow">
        <div className="grid md:grid-cols-2 gap-6">
          {awards.map((award, i) => {
            const Icon = icons[i % icons.length];
            return (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-card rounded-xl p-6 shadow-soft hover-lift h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg gradient-warm flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-primary">{award.year}</span>
                      <h3 className="font-heading text-lg font-bold text-foreground mb-1">{award.title}</h3>
                      <p className="text-sm text-muted-foreground mb-2 italic">{award.org}</p>
                      <p className="text-muted-foreground text-sm leading-relaxed">{award.description}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>

    {/* Timeline */}
    <section className="section-padding bg-muted">
      <div className="container-narrow">
        <AnimatedSection className="text-center mb-10">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Our Journey</h2>
        </AnimatedSection>
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 -translate-x-1/2" />
          <div className="space-y-8">
            {milestones.map((m, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <div className={`relative flex items-start gap-6 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className="hidden md:block md:w-1/2" />
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary -translate-x-1/2 mt-1.5 ring-4 ring-background" />
                  <div className="ml-10 md:ml-0 md:w-1/2 bg-card rounded-xl p-4 shadow-soft">
                    <span className="text-xs font-bold text-primary">{m.year}</span>
                    <p className="text-sm text-foreground mt-1">{m.text}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Awards;
