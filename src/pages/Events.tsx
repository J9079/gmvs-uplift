import { Calendar, MapPin, Users } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const upcomingEvents = [
  {
    title: "International Women's Day Celebration",
    date: "8 March 2026",
    location: "Bubani Community Hall, Ajmer",
    description: "A day-long programme celebrating women achievers from SHGs, featuring cultural performances, skill exhibitions, and guest speakers.",
  },
  {
    title: "Health Camp & Immunisation Drive",
    date: "15 April 2026",
    location: "Khoda Ganesh, Ajmer",
    description: "Free health check-ups, vaccinations for children, and awareness sessions on maternal health in partnership with the District Health Department.",
  },
];

const pastEvents = [
  {
    title: "Annual SHG Federation Meeting",
    date: "December 2025",
    location: "Bubani, Ajmer",
    attendees: 150,
    description: "Representatives from 40+ Self Help Groups gathered to review progress, share best practices, and plan the year ahead.",
  },
  {
    title: "World Environment Day — Plantation Drive",
    date: "5 June 2025",
    location: "Sawar Block, Ajmer",
    attendees: 200,
    description: "Community members and school children planted 500 saplings across three villages as part of GMVS's environment conservation mission.",
  },
  {
    title: "Computer Literacy Workshop for Youth",
    date: "March 2025",
    location: "Bubani, Ajmer",
    attendees: 45,
    description: "A two-week workshop introducing basic computer skills, internet usage, and digital literacy to rural youth.",
  },
  {
    title: "MNREGA Awareness Campaign",
    date: "January 2025",
    location: "Kishangarh Block, Ajmer",
    attendees: 300,
    description: "Village-level meetings to inform communities about their MNREGA entitlements, application process, and grievance redressal.",
  },
  {
    title: "Stitching Training Graduation Ceremony",
    date: "November 2024",
    location: "Bubani, Ajmer",
    attendees: 60,
    description: "Thirty women completed a 6-month stitching and tailoring training programme and received certificates and starter kits.",
  },
];

const Events = () => (
  <div className="pt-20">
    <section className="section-padding bg-muted">
      <div className="container-narrow">
        <AnimatedSection className="text-center mb-12">
          <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-2">Events</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground">What's Happening</h1>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Community gatherings, awareness campaigns, and milestone celebrations.
          </p>
        </AnimatedSection>
      </div>
    </section>

    {/* Upcoming */}
    <section className="section-padding">
      <div className="container-narrow">
        <AnimatedSection className="mb-8">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">Upcoming Events</h2>
        </AnimatedSection>
        <div className="grid md:grid-cols-2 gap-6">
          {upcomingEvents.map((event, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="bg-card rounded-xl p-6 shadow-soft hover-lift h-full border-l-4 border-primary">
                <h3 className="font-heading text-lg font-bold text-foreground mb-3">{event.title}</h3>
                <div className="flex flex-col gap-2 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-primary" /> {event.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-primary" /> {event.location}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{event.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Past */}
    <section className="section-padding bg-muted">
      <div className="container-narrow">
        <AnimatedSection className="mb-8">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">Past Events</h2>
        </AnimatedSection>
        <div className="space-y-6">
          {pastEvents.map((event, i) => (
            <AnimatedSection key={i} delay={i * 0.05}>
              <div className="bg-card rounded-xl p-6 shadow-soft hover-lift">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="font-heading text-lg font-bold text-foreground mb-2">{event.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-3">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4 text-primary" /> {event.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4 text-primary" /> {event.location}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Users className="w-4 h-4 text-primary" /> {event.attendees} attendees
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">{event.description}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Events;
