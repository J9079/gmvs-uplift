import { Building2, Handshake, HeartHandshake, Send } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";

const PartnerCSR = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-muted">
        <div className="container-narrow text-center">
          <AnimatedSection>
            <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-2">
              Collaborate With GMVS
            </p>

            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
              Partner / CSR
            </h1>

            <p className="text-muted-foreground max-w-3xl mx-auto">
              Partner with GMVS to create sustainable social impact through
              education, women empowerment, health initiatives, livelihood
              development and rural transformation.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Partner */}
      <section className="section-padding">
        <div className="container-narrow">
          <AnimatedSection>
            <h2 className="font-heading text-3xl font-bold text-center mb-12">
              Why Partner With Us?
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: HeartHandshake,
                title: "Women Empowerment",
                desc: "Supporting women through skill development, education and self-reliance programs.",
              },
              {
                icon: Building2,
                title: "Community Development",
                desc: "Creating sustainable impact through education, health and livelihood projects.",
              },
              {
                icon: Handshake,
                title: "CSR Implementation",
                desc: "Helping corporates execute CSR initiatives with transparency and measurable impact.",
              },
            ].map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.2}>
                <div className="bg-card p-6 rounded-xl shadow-soft text-center">
                  <div className="w-14 h-14 mx-auto rounded-full gradient-warm flex items-center justify-center mb-4">
                    <item.icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="font-semibold text-xl mb-3">
                    {item.title}
                  </h3>

                  <p className="text-muted-foreground">
                    {item.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CSR Areas */}
      <section className="section-padding bg-muted">
        <div className="container-narrow">
          <AnimatedSection>
            <h2 className="font-heading text-3xl font-bold text-center mb-10">
              CSR Collaboration Areas
            </h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Corporate Social Responsibility",
              "Women Empowerment Programs",
              "Health & Nutrition",
              "Skill Development",
              "Rural Livelihood Projects",
              "Education Initiatives",
            ].map((item, index) => (
              <AnimatedSection key={index}>
                <div className="bg-background rounded-xl p-5 shadow-soft">
                  ✓ {item}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-narrow text-center">
          <AnimatedSection>
            <h2 className="font-heading text-3xl font-bold mb-4">
              Let's Build Impact Together
            </h2>

            <p className="text-muted-foreground mb-8">
              Interested in partnering with GMVS?
            </p>

            <Button
              size="lg"
              className="gradient-warm border-0 text-white gap-2"
            >
              <Send className="w-4 h-4" />
              Become a Partner
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default PartnerCSR;