import { useState } from "react";
import { X } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { motion, AnimatePresence } from "framer-motion";

import heroImg from "@/assets/hero-women.jpg";
import educationImg from "@/assets/education-program.jpg";
import healthImg from "@/assets/health-program.jpg";
import livelihoodImg from "@/assets/livelihood-program.jpg";
import agricultureImg from "@/assets/agriculture-program.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import aboutImg from "@/assets/about-team.jpg";

const images = [
  { src: heroImg, alt: "Women empowerment program", category: "Empowerment" },
  { src: educationImg, alt: "Education initiative", category: "Education" },
  { src: livelihoodImg, alt: "Stitching training", category: "Livelihood" },
  { src: healthImg, alt: "Health camp", category: "Health" },
  { src: agricultureImg, alt: "Sustainable agriculture", category: "Agriculture" },
  { src: gallery1, alt: "Community life", category: "Community" },
  { src: gallery2, alt: "Self help group meeting", category: "Empowerment" },
  { src: gallery3, alt: "Children in school", category: "Education" },
  { src: aboutImg, alt: "GMVS team", category: "Team" },
];

const Gallery = () => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="pt-20">
      <section className="section-padding bg-muted">
        <div className="container-narrow text-center">
          <AnimatedSection>
            <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-2">Gallery</p>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground">Our Work in Pictures</h1>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {images.map((img, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <div
                  className="break-inside-avoid cursor-pointer group rounded-xl overflow-hidden shadow-soft hover-lift"
                  onClick={() => setSelected(img.src)}
                >
                  <div className="relative">
                    <img src={img.src} alt={img.alt} className="w-full transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                    <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-colors flex items-end">
                      <div className="p-4 text-background opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="text-xs bg-primary/80 px-2 py-1 rounded-full">{img.category}</span>
                        <p className="text-sm mt-1">{img.alt}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <button className="absolute top-6 right-6 text-background" onClick={() => setSelected(null)}>
              <X className="w-8 h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={selected}
              alt="Gallery preview"
              className="max-w-full max-h-[85vh] rounded-lg object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
