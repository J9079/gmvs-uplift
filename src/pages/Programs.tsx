import { Users, BookOpen, Stethoscope, Sprout, Baby, Briefcase } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import womenMeetingImg from "@/assets/women-meeting.jpg";
import healthImg from "@/assets/health-checkup.jpg";
import stitchingImg from "@/assets/stitching-centre.jpg";
import plantImg from "@/assets/plant-nursery.jpg";
import womenTrainingImg from "@/assets/women-training.jpg";
import communityImg from "@/assets/community-meeting.jpg";
import programsData from "@/data/programs.json";

const iconMap = { Users, BookOpen, Stethoscope, Sprout, Baby, Briefcase } as const;
const imgMap: Record<string, string> = {
  "women-meeting": womenMeetingImg,
  "health-checkup": healthImg,
  "stitching-centre": stitchingImg,
  "plant-nursery": plantImg,
  "women-training": womenTrainingImg,
  "community-meeting": communityImg,
};

const programs = programsData.map((p) => ({
  ...p,
  icon: iconMap[p.icon as keyof typeof iconMap],
  img: imgMap[p.img],
}));

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
                <img src={p.img} alt={p.title} className="w-full h-64 md:h-80 object-cover" loading="lazy" />
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
