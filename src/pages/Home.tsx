import { Link } from "react-router-dom";
import { Heart, Users, BookOpen, Stethoscope, Sprout, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import heroImg from "@/assets/hero-women.jpg";
import educationImg from "@/assets/education-program.jpg";
import healthImg from "@/assets/health-program.jpg";
import livelihoodImg from "@/assets/livelihood-program.jpg";

const stats = [
  { number: "50,000+", label: "Lives Impacted" },
  { number: "200+", label: "Villages Reached" },
  { number: "15+", label: "Years of Service" },
  { number: "30+", label: "Active Programs" },
];

const programs = [
  { icon: Users, title: "Women Empowerment", desc: "Building leadership, self-reliance and economic independence for rural women through SHGs and training.", img: livelihoodImg },
  { icon: BookOpen, title: "Education", desc: "Promoting literacy, adult education and quality learning for children in underserved communities.", img: educationImg },
  { icon: Stethoscope, title: "Health & Nutrition", desc: "Community health camps, maternal care and nutrition programs for women and children.", img: healthImg },
  { icon: Sprout, title: "Sustainable Agriculture", desc: "Organic farming, water conservation and climate-resilient practices for rural livelihoods.", img: livelihoodImg },
];

const Home = () => (
  <div>
    {/* Hero */}
    <section className="relative min-h-[90vh] flex items-center">
      <div className="absolute inset-0">
        <img src={heroImg} alt="GMVS rural women empowerment" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-foreground/60" />
      </div>
      <div className="relative container-narrow section-padding !pt-32 text-background">
        <AnimatedSection>
          <p className="text-sm md:text-base uppercase tracking-widest mb-4 opacity-80">Gramin Mahila Vikas Sansthan, Ajmer</p>
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold leading-tight max-w-3xl mb-6">
            Empowering Rural Women, Transforming Communities
          </h1>
          <p className="text-lg md:text-xl max-w-xl opacity-85 mb-8 leading-relaxed">
            A grassroots NGO dedicated to social empowerment and livelihood support with special emphasis on women and children in Rajasthan.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="gradient-warm border-0 text-primary-foreground shadow-warm hover:opacity-90 gap-2 text-base px-8">
              <Heart className="w-5 h-5" /> Donate Now
            </Button>
            <Button size="lg" variant="outline" className="border-background/40 text-background hover:bg-background/10 gap-2 text-base px-8" asChild>
              <Link to="/programs">Our Programs <ArrowRight className="w-4 h-4" /></Link>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* Stats */}
    <section className="gradient-warm text-primary-foreground">
      <div className="container-narrow section-padding !py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="text-3xl md:text-4xl font-heading font-bold">{s.number}</div>
              <div className="text-sm mt-1 opacity-85">{s.label}</div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Programs Preview */}
    <section className="section-padding">
      <div className="container-narrow">
        <AnimatedSection className="text-center mb-12">
          <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-2">What We Do</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Our Focus Areas</h2>
        </AnimatedSection>
        <div className="grid md:grid-cols-2 gap-6">
          {programs.map((p, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="group bg-card rounded-xl overflow-hidden shadow-soft hover-lift">
                <div className="h-48 overflow-hidden">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" width={800} height={600} />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg gradient-warm flex items-center justify-center">
                      <p.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <h3 className="font-heading font-semibold text-lg text-foreground">{p.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
        <AnimatedSection className="text-center mt-10">
          <Button variant="outline" size="lg" className="gap-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground" asChild>
            <Link to="/programs">View All Programs <ArrowRight className="w-4 h-4" /></Link>
          </Button>
        </AnimatedSection>
      </div>
    </section>

    {/* CTA */}
    <section className="gradient-nature text-secondary-foreground">
      <div className="container-narrow section-padding text-center">
        <AnimatedSection>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Join Us in Making a Difference</h2>
          <p className="max-w-lg mx-auto opacity-90 mb-8">
            Your support can transform the lives of rural women and children. Every contribution counts.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="gradient-warm border-0 text-primary-foreground shadow-warm hover:opacity-90 gap-2 px-8">
              <Heart className="w-5 h-5" /> Donate Now
            </Button>
            <Button size="lg" variant="outline" className="border-secondary-foreground/40 text-secondary-foreground hover:bg-secondary-foreground/10" asChild>
              <Link to="/contact">Get Involved</Link>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </div>
);

export default Home;
