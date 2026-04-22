import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Heart, Users, BookOpen, Stethoscope, Sprout, ArrowRight, ArrowLeft,
  Baby, Briefcase, Leaf, ShieldCheck, HandHeart, Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import { motion, AnimatePresence } from "framer-motion";

import heroStitching from "@/assets/stitching-centre.jpg";
import womenMeetingImg from "@/assets/women-meeting.jpg";
import healthImg from "@/assets/health-checkup.jpg";
import plantImg from "@/assets/plant-nursery.jpg";
import womenTrainingImg from "@/assets/women-training.jpg";
import communityMeetingImg from "@/assets/community-meeting.jpg";
import awardImg from "@/assets/award-ceremony.jpg";
import officeTeamImg from "@/assets/office-team.jpg";

/* ---------- Hero slides (Nasscom-style left image / right tinted panel) ---------- */
const slides = [
  {
    eyebrow: "Empowering Rural Women",
    title: "Transforming Lives Through Skills & Self-Reliance",
    desc: "Through self-help groups, stitching centres and entrepreneurship training, we help rural women in Rajasthan stand on their own feet.",
    cta: { label: "Our Programs", to: "/programs" },
    image: heroStitching,
    panel: "bg-primary",
  },
  {
    eyebrow: "Community Health & Nutrition",
    title: "Better Health for Mothers and Children",
    desc: "Camps, immunisation drives and nutrition awareness reach the most under-served villages of Ajmer district.",
    cta: { label: "See Impact", to: "/impact" },
    image: healthImg,
    panel: "bg-secondary",
  },
  {
    eyebrow: "Education & Literacy",
    title: "Schools, Libraries and Adult Learning",
    desc: "We build access to quality education for children and continuing literacy for women across rural Rajasthan.",
    cta: { label: "Read Stories", to: "/stories" },
    image: womenTrainingImg,
    panel: "bg-accent",
  },
];

/* ---------- Programs / focus areas (Nasscom "What We Do" grid) ---------- */
const programs = [
  { icon: Users, title: "Women Empowerment", desc: "SHGs, leadership and economic independence for rural women.", img: womenMeetingImg },
  { icon: BookOpen, title: "Education & Literacy", desc: "Schools, adult education and learning for under-served children.", img: heroStitching },
  { icon: Stethoscope, title: "Health & Nutrition", desc: "Camps, maternal care and nutrition for women and children.", img: healthImg },
  { icon: Sprout, title: "Sustainable Agriculture", desc: "Organic farming, water conservation and climate resilience.", img: plantImg },
  { icon: Baby, title: "Child Welfare", desc: "Protecting child rights and preventing child labour.", img: communityMeetingImg },
  { icon: Briefcase, title: "Livelihood Support", desc: "Skill training, micro-enterprise and rural employment.", img: womenTrainingImg },
];

/* ---------- Thrust areas (Nasscom-style icon strip) ---------- */
const thrustAreas = [
  { icon: Baby, label: "Child Rights" },
  { icon: Stethoscope, label: "Health Concerns" },
  { icon: Users, label: "Women Empowerment" },
  { icon: HandHeart, label: "Community Development" },
  { icon: Leaf, label: "Natural Resources" },
  { icon: ShieldCheck, label: "Social Awareness" },
];

const stats = [
  { number: "50,000+", label: "Lives Impacted" },
  { number: "200+", label: "Villages Reached" },
  { number: "27+", label: "Years of Service" },
  { number: "30+", label: "Active Programs" },
];

const newsItems = [
  { tag: "Story", title: "From Stitching Centre to Self-Employed Entrepreneur", desc: "How a tailoring training cohort in Bubani gave 40 women a livelihood.", to: "/stories" },
  { tag: "Event", title: "Annual Health Camp – District Ajmer", desc: "Free check-ups, immunisation and nutrition counselling for 800+ villagers.", to: "/events" },
  { tag: "Report", title: "Annual Report 2023 – 24 Released", desc: "Read the year's milestones, financials and field stories.", to: "/annual-reports" },
];

/* ---------- Partner logos (text-based marks; replace with real logos when available) ---------- */
const partners = [
  "NABARD", "CAPART", "Rajasthan Govt.", "District Ajmer", "ICDS", "Khadi Board", "MNREGA Cell", "Local Panchayats",
];

const Home = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive((i) => (i + 1) % slides.length), 6000);
    return () => clearInterval(t);
  }, []);

  const next = () => setActive((i) => (i + 1) % slides.length);
  const prev = () => setActive((i) => (i - 1 + slides.length) % slides.length);

  return (
    <div>
      {/* ============== HERO – split image / coloured panel carousel ============== */}
      <section className="relative pt-16 md:pt-20 bg-background">
        <div className="grid lg:grid-cols-2 min-h-[560px] lg:min-h-[640px]">
          {/* Image side */}
          <div className="relative overflow-hidden order-1 lg:order-1 h-72 lg:h-auto">
            <AnimatePresence mode="wait">
              <motion.img
                key={slides[active].image}
                src={slides[active].image}
                alt={slides[active].title}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7 }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>
            {/* dotted decorative overlay (subtle Nasscom-style mosaic) */}
            <div className="absolute inset-0 pointer-events-none opacity-30 mix-blend-overlay"
              style={{
                backgroundImage: "radial-gradient(hsl(var(--background)/0.6) 1px, transparent 1px)",
                backgroundSize: "14px 14px",
              }}
            />
          </div>

          {/* Coloured panel side */}
          <div className={`relative order-2 lg:order-2 ${slides[active].panel} text-primary-foreground transition-colors duration-700`}>
            <div className="absolute top-6 right-6 hidden lg:block opacity-20">
              <div className="grid grid-cols-6 gap-1.5">
                {Array.from({ length: 36 }).map((_, i) => (
                  <span key={i} className="block w-2 h-2 bg-primary-foreground rounded-sm" />
                ))}
              </div>
            </div>

            <div className="relative h-full flex items-center px-6 sm:px-10 lg:px-14 py-14 lg:py-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={slides[active].title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="max-w-xl"
                >
                  <p className="uppercase tracking-[0.25em] text-xs md:text-sm opacity-85 mb-4">
                    {slides[active].eyebrow}
                  </p>
                  <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-5">
                    {slides[active].title}
                  </h1>
                  <p className="text-base md:text-lg opacity-90 mb-8 leading-relaxed">
                    {slides[active].desc}
                  </p>
                  <div className="flex flex-wrap items-center gap-4">
                    <Button asChild size="lg" variant="outline"
                      className="border-primary-foreground/60 bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-foreground gap-2">
                      <Link to={slides[active].cta.to}>
                        {slides[active].cta.label} <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                    <Button size="lg" className="bg-background text-primary hover:bg-background/90 gap-2 shadow-warm">
                      <Heart className="w-4 h-4" /> Donate Now
                    </Button>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* slide controls */}
              <div className="absolute bottom-6 right-6 flex items-center gap-2">
                <button onClick={prev} aria-label="Previous slide"
                  className="w-10 h-10 rounded-full border border-primary-foreground/40 hover:bg-primary-foreground hover:text-foreground transition-colors flex items-center justify-center">
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <button onClick={next} aria-label="Next slide"
                  className="w-10 h-10 rounded-full border border-primary-foreground/40 hover:bg-primary-foreground hover:text-foreground transition-colors flex items-center justify-center">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="absolute bottom-8 left-6 sm:left-10 lg:left-14 flex gap-1.5">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    aria-label={`Slide ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all ${i === active ? "w-8 bg-primary-foreground" : "w-3 bg-primary-foreground/40"}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* impact ribbon below hero */}
        <div className="bg-muted/60 border-y border-border">
          <div className="container-narrow px-4 py-3 flex flex-wrap items-center justify-center gap-x-6 gap-y-1 text-xs sm:text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">Lives Impacted:</span>
            <span>Women Empowerment 12,000+</span><span className="opacity-40">|</span>
            <span>Health Camps 25,000+</span><span className="opacity-40">|</span>
            <span>Education 8,000+</span><span className="opacity-40">|</span>
            <span>Sustainable Agriculture 5,000+</span>
          </div>
        </div>
      </section>

      {/* ============== VALUE WE BRING ============== */}
      <section className="section-padding bg-background">
        <div className="container-narrow grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-3">The Value We Bring</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-5 leading-tight">
              Accelerating rural transformation through grassroots action
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              For more than two decades, Gramin Mahila Vikas Sansthan has been working alongside rural communities of Rajasthan,
              with a focus on women and children. We believe lasting change comes from local solutions, gender equality
              and the decentralised participation of people in their own development.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Our approach combines education, health, sustainable livelihoods and natural resource management to build
              self-reliant villages that thrive on their own strength.
            </p>
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground gap-2">
              <Link to="/about">Learn more about GMVS <ArrowRight className="w-4 h-4" /></Link>
            </Button>
          </AnimatedSection>

          <AnimatedSection delay={0.15} className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-warm">
              <img src={officeTeamImg} alt="GMVS team at work" className="w-full h-[420px] object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-xl px-5 py-4 shadow-soft hidden md:block">
              <div className="text-3xl font-heading font-bold text-primary">27+</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">Years of Service</div>
            </div>
            <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full gradient-warm opacity-20 blur-2xl" />
          </AnimatedSection>
        </div>
      </section>

      {/* ============== THRUST AREAS strip (SDG-style) ============== */}
      <section className="bg-muted/40 border-y border-border">
        <div className="container-narrow section-padding !py-12">
          <AnimatedSection className="text-center mb-8">
            <p className="text-primary font-semibold uppercase tracking-widest text-xs mb-2">Aligned with our mission</p>
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground">Our Core Thrust Areas</h3>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {thrustAreas.map((t, i) => (
              <AnimatedSection key={t.label} delay={i * 0.05}>
                <div className="bg-background rounded-xl p-5 text-center hover-lift border border-border h-full flex flex-col items-center justify-center">
                  <div className="w-12 h-12 rounded-full gradient-warm flex items-center justify-center mb-3">
                    <t.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="text-sm font-semibold text-foreground">{t.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ============== WHAT WE DO – key areas of intervention ============== */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <AnimatedSection className="max-w-2xl mb-10">
            <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-2">What We Do</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              Our Work & Key Areas of Intervention
            </h2>
            <p className="text-muted-foreground mt-3">
              Six interconnected programs designed for the realities of rural Rajasthan.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((p, i) => (
              <AnimatedSection key={p.title} delay={i * 0.07}>
                <Link to="/programs" className="group block bg-card rounded-2xl overflow-hidden border border-border hover-lift h-full">
                  <div className="relative h-48 overflow-hidden">
                    <img src={p.img} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent" />
                    <div className="absolute bottom-3 left-3 w-10 h-10 rounded-lg gradient-warm flex items-center justify-center shadow-warm">
                      <p.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-heading font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{p.desc}</p>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
                      Learn more <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ============== IMPACT counters ============== */}
      <section className="gradient-warm text-primary-foreground">
        <div className="container-narrow section-padding !py-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((s, i) => (
              <AnimatedSection key={s.label} delay={i * 0.1}>
                <div className="text-4xl md:text-5xl font-heading font-bold">{s.number}</div>
                <div className="text-sm mt-2 opacity-90 uppercase tracking-wider">{s.label}</div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ============== NEWS / STORIES ============== */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <AnimatedSection className="flex flex-wrap items-end justify-between gap-4 mb-10">
            <div>
              <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-2">Latest from the Field</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">News, Stories & Events</h2>
            </div>
            <Button asChild variant="ghost" className="text-primary hover:text-primary gap-1">
              <Link to="/stories">View all <ArrowRight className="w-4 h-4" /></Link>
            </Button>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {newsItems.map((n, i) => (
              <AnimatedSection key={n.title} delay={i * 0.1}>
                <Link to={n.to} className="group block bg-card border border-border rounded-2xl p-6 hover-lift h-full">
                  <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary mb-4">
                    {n.tag}
                  </span>
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                    {n.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{n.desc}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
                    Read more <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ============== AWARDS / RECOGNITION teaser ============== */}
      <section className="bg-muted/40 border-y border-border">
        <div className="container-narrow section-padding !py-14 grid lg:grid-cols-2 gap-10 items-center">
          <AnimatedSection>
            <div className="rounded-2xl overflow-hidden shadow-soft">
              <img src={awardImg} alt="GMVS award ceremony" className="w-full h-72 object-cover" />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-2">Recognition</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">Awards & Honours</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              GMVS has been recognised by government bodies, panchayats and partner institutions for its
              consistent grassroots impact in women empowerment, health and rural development.
            </p>
            <Button asChild className="gradient-warm text-primary-foreground border-0 hover:opacity-90 gap-2">
              <Link to="/awards">See all honours <ArrowRight className="w-4 h-4" /></Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* ============== PARTNERS / SUPPORTERS ============== */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <AnimatedSection className="text-center mb-10">
            <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-2">Our Partners & Supporters</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              Building rural Rajasthan — together
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden border border-border">
            {partners.map((p, i) => (
              <AnimatedSection key={p} delay={i * 0.04}>
                <div className="bg-card h-24 flex items-center justify-center px-4 text-center">
                  <span className="font-heading font-semibold text-foreground/80 text-sm md:text-base">{p}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ============== CSR / PARTNER CTA ============== */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-nature opacity-95" />
        <div className="relative container-narrow section-padding text-secondary-foreground">
          <div className="grid lg:grid-cols-3 gap-10 items-center">
            <AnimatedSection className="lg:col-span-2">
              <p className="uppercase tracking-widest text-xs opacity-85 mb-3">Partner with GMVS</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 leading-tight">
                Bring your CSR mission to the last mile of rural Rajasthan
              </h2>
              <p className="opacity-90 max-w-2xl leading-relaxed">
                Whether through CSR funding, in-kind support, volunteering or policy collaboration —
                we co-design programs that turn your contribution into measurable change for women, children and farmers.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.15} className="flex flex-col gap-3">
              <Button asChild size="lg" className="bg-background text-primary hover:bg-background/90 gap-2 shadow-warm justify-center">
                <Link to="/contact"><HandHeart className="w-5 h-5" /> Partner with us</Link>
              </Button>
              <Button asChild size="lg" variant="outline"
                className="border-secondary-foreground/40 bg-transparent text-secondary-foreground hover:bg-secondary-foreground/10 gap-2 justify-center">
                <Link to="/contact"><Mail className="w-5 h-5" /> Get in touch</Link>
              </Button>
              <Button size="lg" className="gradient-warm text-primary-foreground border-0 hover:opacity-90 gap-2 justify-center">
                <Heart className="w-5 h-5" /> Donate Now
              </Button>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
