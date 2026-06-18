import { Users, Heart, Award, Send } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const Volunteer = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    city: "",
    interest: "",
    message: "",
  });

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="section-padding bg-muted">
        <div className="container-narrow text-center">
          <AnimatedSection>
            <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-2">
              Join Our Mission
            </p>

            <h1 className="font-heading text-4xl md:text-5xl font-bold">
              Volunteer With Us
            </h1>

            <p className="text-muted-foreground mt-4 max-w-3xl mx-auto">
              Your time, skills and dedication can help transform lives and
              strengthen communities.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Create Impact",
                desc: "Support meaningful community initiatives.",
              },
              {
                icon: Users,
                title: "Build Connections",
                desc: "Work with passionate changemakers.",
              },
              {
                icon: Award,
                title: "Gain Experience",
                desc: "Develop leadership and social skills.",
              },
            ].map((item, index) => (
              <AnimatedSection key={index}>
                <div className="bg-card rounded-xl p-6 shadow-soft text-center">
                  <div className="w-14 h-14 rounded-full gradient-warm flex items-center justify-center mx-auto mb-4">
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

      {/* Volunteer Form */}
      <section className="section-padding bg-muted">
        <div className="container-narrow">
          <AnimatedSection>
            <div className="bg-card rounded-xl p-8 shadow-soft">
              <h2 className="font-heading text-3xl font-bold mb-6 text-center">
                Volunteer Registration
              </h2>

              <form className="space-y-5">
                <Input
                  placeholder="Full Name"
                  value={form.name}
                  onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                  }
                />

                <Input
                  type="email"
                  placeholder="Email Address"
                  value={form.email}
                  onChange={(e) =>
                    setForm({ ...form, email: e.target.value })
                  }
                />

                <Input
                  placeholder="City"
                  value={form.city}
                  onChange={(e) =>
                    setForm({ ...form, city: e.target.value })
                  }
                />

                <Input
                  placeholder="Area of Interest"
                  value={form.interest}
                  onChange={(e) =>
                    setForm({ ...form, interest: e.target.value })
                  }
                />

                <Textarea
                  rows={5}
                  placeholder="Why do you want to volunteer?"
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                />

                <Button
                  size="lg"
                  className="gradient-warm border-0 text-white gap-2"
                >
                  <Send className="w-4 h-4" />
                  Submit Application
                </Button>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Volunteer;