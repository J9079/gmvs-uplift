import { MapPin, Calendar } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import stories from "@/data/stories.json";

const Stories = () => (
  <div className="pt-20">
    <section className="section-padding bg-muted">
      <div className="container-narrow">
        <AnimatedSection className="text-center mb-12">
          <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-2">Stories from the Field</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground">Voices of Change</h1>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Real stories of transformation from the communities we serve.
          </p>
        </AnimatedSection>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-narrow">
        <div className="space-y-8">
          {stories.map((story, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="bg-card rounded-xl p-6 md:p-8 shadow-soft hover-lift">
                <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-primary" />
                    {story.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-primary" />
                    {story.year}
                  </span>
                </div>
                <h2 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-3">{story.title}</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">{story.description}</p>
                <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
                  "{story.quote}"
                </blockquote>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Stories;
