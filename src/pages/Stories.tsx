import { MapPin, Calendar } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const stories = [
  {
    title: "From Silence to Self-Reliance",
    location: "Bubani, Ajmer",
    year: "2023",
    description:
      "Kamla Devi, a mother of three, joined a GMVS Self Help Group in 2021. With stitching training and micro-credit support, she now runs a small tailoring business and has become the primary earner for her family.",
    quote: "GMVS gave me the courage to believe in myself.",
  },
  {
    title: "Clean Water Changes Everything",
    location: "Khoda Ganesh, Ajmer",
    year: "2022",
    description:
      "After years of walking kilometres for water, families in Khoda Ganesh received a community hand-pump through GMVS's drinking water initiative. Waterborne diseases dropped significantly within the first year.",
    quote: "Our children no longer fall sick every monsoon.",
  },
  {
    title: "A School Where There Was None",
    location: "Sawar Block, Ajmer",
    year: "2021",
    description:
      "GMVS established a learning centre in a remote hamlet where the nearest school was 8 km away. Today, 45 children attend daily classes and three have cleared state scholarship exams.",
    quote: "Education is now within walking distance for our kids.",
  },
  {
    title: "Women Farmers Lead the Way",
    location: "Peesangan, Ajmer",
    year: "2020",
    description:
      "Through sustainable agriculture training, a group of 20 women farmers adopted organic composting and water-conservation techniques, improving crop yield by 30% while reducing input costs.",
    quote: "We learned to work with nature, not against it.",
  },
  {
    title: "Breaking the Cycle of Child Labour",
    location: "Kishangarh, Ajmer",
    year: "2019",
    description:
      "GMVS's awareness campaign enrolled 60 children back into school from marble polishing workshops. Families were connected with government welfare schemes to offset income loss.",
    quote: "Every child deserves a childhood, not a workshop.",
  },
];

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
