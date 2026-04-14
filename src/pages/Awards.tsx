import { Award, Trophy, Star } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const awards = [
  {
    title: "Best NGO Award — District Level",
    year: "2023",
    org: "District Administration, Ajmer",
    description: "Recognised for outstanding contribution to women empowerment and community development in rural Ajmer.",
  },
  {
    title: "Excellence in Rural Health Initiatives",
    year: "2021",
    org: "Rajasthan State Health Department",
    description: "Awarded for successful immunisation drives and maternal health awareness campaigns across multiple blocks.",
  },
  {
    title: "Women Self-Help Group Champion",
    year: "2019",
    org: "National Rural Livelihoods Mission (NRLM)",
    description: "Recognised for forming and sustaining over 40 Self Help Groups with exemplary savings and credit discipline.",
  },
  {
    title: "Green Village Award",
    year: "2017",
    org: "Department of Environment, Rajasthan",
    description: "Honoured for large-scale plantation drives and environment conservation efforts across Sawar and Kishangarh blocks.",
  },
  {
    title: "Child Rights Advocacy Recognition",
    year: "2015",
    org: "UNICEF India — Rajasthan Chapter",
    description: "Acknowledged for campaigns against child labour and successful re-enrolment of out-of-school children.",
  },
];

const milestones = [
  { year: "1997", text: "GMVS registered and begins operations in Bubani, Ajmer" },
  { year: "2002", text: "First Self Help Groups formed with 200 rural women" },
  { year: "2005", text: "Stitching and tailoring training centre established" },
  { year: "2008", text: "Health awareness programme reaches 10,000 beneficiaries" },
  { year: "2012", text: "Learning centres opened in 5 remote hamlets" },
  { year: "2015", text: "Child labour awareness campaign enrolled 60 children back to school" },
  { year: "2018", text: "Sustainable agriculture training expanded to 3 blocks" },
  { year: "2022", text: "Crossed 500+ active SHG members across 40+ groups" },
  { year: "2024", text: "Digital literacy programme launched for rural youth" },
];

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
