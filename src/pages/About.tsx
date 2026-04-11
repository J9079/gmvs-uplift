import { Target, Eye, Award, Users } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import aboutImg from "@/assets/about-team.jpg";

const values = [
  { icon: Target, title: "Mission", desc: "To empower rural communities, especially women and children, through education, health, livelihood and sustainable development." },
  { icon: Eye, title: "Vision", desc: "A just and equitable society where every woman and child has access to opportunities for a dignified life." },
  { icon: Award, title: "Values", desc: "Transparency, community participation, gender equity, sustainability and grassroots empowerment." },
  { icon: Users, title: "Approach", desc: "Community-driven, participatory and rights-based approach with focus on local ownership and capacity building." },
];

const About = () => (
  <div className="pt-20">
    <section className="section-padding bg-muted">
      <div className="container-narrow">
        <AnimatedSection className="text-center mb-12">
          <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-2">About Us</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground">Who We Are</h1>
        </AnimatedSection>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <AnimatedSection>
            <img src={aboutImg} alt="GMVS Team" className="rounded-xl shadow-soft w-full" loading="lazy" width={800} height={600} />
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Gramin Mahila Vikas Sansthan</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              GMVS is a grassroots non-governmental organisation based in Ajmer district of Rajasthan, India. Its work focuses on social empowerment and livelihood support with a special emphasis on women and children.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              GMVS promotes education, health, women's development, child welfare, sustainable agriculture and employment generation. It advocates for local community participation and rights-based approaches.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Over the years, GMVS has worked with thousands of rural women through Self Help Groups, skill training programs like stitching, and community health initiatives across multiple districts of Rajasthan.
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-narrow">
        <AnimatedSection className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Our Foundation</h2>
        </AnimatedSection>
        <div className="grid sm:grid-cols-2 gap-6">
          {values.map((v, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="bg-card rounded-xl p-6 shadow-soft hover-lift h-full">
                <div className="w-12 h-12 rounded-lg gradient-warm flex items-center justify-center mb-4">
                  <v.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{v.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default About;
