import { TrendingUp, MapPin, Users, Heart } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const impactStats = [
  { icon: Users, number: "50,000+", label: "Women Empowered" },
  { icon: MapPin, number: "200+", label: "Villages Reached" },
  { icon: TrendingUp, number: "1,000+", label: "Women Trained in Stitching" },
  { icon: Heart, number: "10,000+", label: "Children Supported" },
];

const stories = [
  { title: "Stitching Training Programme", location: "Jhotwara Block, Jaipur", desc: "Started in 2023, this flagship programme supported by HG Infra Engineering Ltd. targets training 1,000 rural women in stitching and tailoring for economic independence.", year: "2023–Present" },
  { title: "Self Help Groups", location: "Ajmer District", desc: "Over 500 SHGs formed across villages, enabling women to save, access credit and start micro-enterprises — transforming household economies.", year: "Ongoing" },
  { title: "Health & Nutrition Camps", location: "Multiple Districts", desc: "Regular community health camps providing maternal care, nutrition counselling and basic health services to underserved rural populations.", year: "Ongoing" },
];

const Impact = () => (
  <div className="pt-20">
    <section className="section-padding gradient-nature text-secondary-foreground">
      <div className="container-narrow text-center">
        <AnimatedSection>
          <p className="font-semibold uppercase tracking-widest text-sm mb-2 opacity-80">Our Impact</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Creating Lasting Change</h1>
          <p className="max-w-2xl mx-auto opacity-85">
            Every number represents a real person, a real family, a real community transformed.
          </p>
        </AnimatedSection>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-narrow">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {impactStats.map((s, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="bg-card rounded-xl p-6 text-center shadow-soft hover-lift">
                <div className="w-12 h-12 rounded-lg gradient-warm flex items-center justify-center mx-auto mb-3">
                  <s.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="text-2xl md:text-3xl font-heading font-bold text-foreground">{s.number}</div>
                <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding bg-muted">
      <div className="container-narrow">
        <AnimatedSection className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Impact Stories</h2>
        </AnimatedSection>
        <div className="grid md:grid-cols-3 gap-6">
          {stories.map((s, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="bg-card rounded-xl p-6 shadow-soft hover-lift h-full flex flex-col">
                <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full self-start mb-4">{s.year}</span>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-1">{s.title}</h3>
                <p className="text-xs text-muted-foreground mb-3 flex items-center gap-1">
                  <MapPin className="w-3 h-3" /> {s.location}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">{s.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
        <AnimatedSection className="text-center mt-10">
          <Button size="lg" className="gradient-warm border-0 text-primary-foreground shadow-warm hover:opacity-90 gap-2 px-8" asChild>
            <Link to="/contact"><Heart className="w-5 h-5" /> Support Our Work</Link>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  </div>
);

export default Impact;
