import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import AnimatedSection from "@/components/AnimatedSection";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message Sent!", description: "Thank you for reaching out. We'll get back to you soon." });
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="pt-20">
      <section className="section-padding bg-muted">
        <div className="container-narrow text-center">
          <AnimatedSection>
            <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-2">Get In Touch</p>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground">Contact Us</h1>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow">
          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedSection className="md:col-span-1 space-y-6">
              <div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-4">Reach Out</h3>
                <div className="space-y-4">
                  {[
                    { icon: MapPin, label: "Address", value: "Ajmer, Rajasthan, India" },
                    { icon: Mail, label: "Email", value: "info@gmvs.org.in" },
                    { icon: Phone, label: "Phone", value: "+91 XXXXX XXXXX" },
                  ].map((c, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg gradient-warm flex items-center justify-center shrink-0">
                        <c.icon className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">{c.label}</p>
                        <p className="text-sm text-foreground font-medium">{c.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2} className="md:col-span-2">
              <form onSubmit={handleSubmit} className="bg-card rounded-xl p-6 md:p-8 shadow-soft space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Name</label>
                    <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required placeholder="Your name" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Email</label>
                    <Input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required placeholder="your@email.com" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Subject</label>
                  <Input value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} required placeholder="How can we help?" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Message</label>
                  <Textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required placeholder="Your message..." rows={5} />
                </div>
                <Button type="submit" size="lg" className="gradient-warm border-0 text-primary-foreground shadow-warm hover:opacity-90 gap-2">
                  <Send className="w-4 h-4" /> Send Message
                </Button>
              </form>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
