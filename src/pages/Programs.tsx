import { Users, BookOpen, Stethoscope, Sprout, Baby, Briefcase } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import educationImg from "@/assets/education-program.jpg";
import healthImg from "@/assets/health-program.jpg";
import livelihoodImg from "@/assets/livelihood-program.jpg";
import agricultureImg from "@/assets/agriculture-program.jpg";
import galleryImg from "@/assets/gallery-3.jpg";
import galleryImg2 from "@/assets/gallery-1.jpg";

const programs = [
  { icon: Users, title: "Women Empowerment", img: livelihoodImg, desc: "Through Self Help Groups, leadership training and skill development, we empower rural women to become self-reliant. Our stitching training programme has trained over 1,000 women in Jaipur district alone.", highlights: ["Self Help Groups (SHGs)", "Leadership & rights awareness", "Stitching & tailoring training", "Financial literacy"] },
  { icon: BookOpen, title: "Education & Literacy", img: educationImg, desc: "We promote quality education for children and adult literacy for women. Our programs bridge the gap between rural communities and educational opportunities.", highlights: ["Adult literacy programs", "Girl child education", "Bridge schools", "Scholarship support"] },
  { icon: Stethoscope, title: "Health & Nutrition", img: healthImg, desc: "Community health camps, maternal care programs, and nutrition initiatives ensuring every woman and child has access to basic healthcare.", highlights: ["Health camps & clinics", "Maternal & child health", "Nutrition awareness", "Sanitation & hygiene"] },
  { icon: Sprout, title: "Sustainable Agriculture", img: agricultureImg, desc: "Promoting organic farming, water conservation and climate-resilient agricultural practices to improve rural livelihoods and food security.", highlights: ["Organic farming training", "Water harvesting", "Seed banks", "Market linkages"] },
  { icon: Baby, title: "Child Welfare", img: galleryImg, desc: "Ensuring children's rights, nutrition and education through community-based programs and advocacy.", highlights: ["Child rights advocacy", "Nutrition programs", "Early childhood care", "Youth development"] },
  { icon: Briefcase, title: "Livelihood Support", img: galleryImg2, desc: "Creating sustainable employment opportunities through skill development, microenterprise support, and market linkages for rural communities.", highlights: ["Skill development", "Microenterprise support", "Vocational training", "Employment generation"] },
];

const Programs = () => (
  <div className="pt-20">
    <section className="section-padding bg-muted">
      <div className="container-narrow text-center">
        <AnimatedSection>
          <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-2">Our Programs</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">What We Do</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            GMVS runs comprehensive programs across education, health, women's empowerment, agriculture, and child welfare to uplift rural communities.
          </p>
        </AnimatedSection>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-narrow space-y-16">
        {programs.map((p, i) => (
          <AnimatedSection key={i}>
            <div className={`grid md:grid-cols-2 gap-8 items-center ${i % 2 === 1 ? "md:[direction:rtl] md:*:[direction:ltr]" : ""}`}>
              <div className="rounded-xl overflow-hidden shadow-soft">
                <img src={p.img} alt={p.title} className="w-full h-64 md:h-80 object-cover" loading="lazy" width={800} height={600} />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg gradient-warm flex items-center justify-center">
                    <p.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h2 className="font-heading text-2xl font-bold text-foreground">{p.title}</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">{p.desc}</p>
                <ul className="space-y-2">
                  {p.highlights.map((h, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-foreground">
                      <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  </div>
);

export default Programs;
