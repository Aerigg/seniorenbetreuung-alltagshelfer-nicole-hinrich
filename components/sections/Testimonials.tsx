"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import Stagger from "@/components/animations/Stagger";
import StaggerItem from "@/components/animations/StaggerItem";
import FadeIn from "@/components/animations/FadeIn";

const testimonials = [
  {
    name: "Familie M.",
    service: "Seniorenbetreuung",
    text: "Nicole kümmert sich seit einem Jahr um meine Mutter. Sie ist herzlich, zuverlässig und hat immer ein offenes Ohr. Wir sind sehr dankbar für ihre Unterstützung!",
    rating: 5
  },
  {
    name: "Herr K.",
    service: "Hauswirtschaft",
    text: "Endlich habe ich wieder Zeit für die wichtigen Dinge. Nicole erledigt die Hausarbeit professionell und gewissenhaft. Absolute Empfehlung!",
    rating: 5
  },
  {
    name: "Familie B.",
    service: "Kinderbetreuung",
    text: "Unsere Kinder lieben Nicole! Sie ist geduldig, kreativ und die Betreuung klappt reibungslos. Wir fühlen uns rundum gut aufgehoben.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-soft-gray">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <FadeIn direction="up" className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Das sagen meine Kunden
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Vertrauen und Zufriedenheit meiner Kunden sind mir das Wichtigste
          </p>
        </FadeIn>

        <Stagger staggerDelay={0.15} className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <StaggerItem key={idx}>
              <motion.div
                className="bg-white rounded-2xl p-6 shadow-lg border-2 border-primary-blue/20 h-full flex flex-col"
                whileHover={{
                  scale: 1.03,
                  borderColor: "rgba(59, 130, 246, 0.4)",
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
                  transition: { duration: 0.3 },
                }}
              >
                <div className="flex items-center justify-between mb-4">
                  <Quote className="w-10 h-10 text-warm-orange/30" />
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-warm-orange text-warm-orange"
                      />
                    ))}
                  </div>
                </div>
                <p className="text-foreground/70 mb-6 flex-grow italic">
                  "{testimonial.text}"
                </p>
                <div className="border-t border-primary-blue/10 pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-foreground/60">{testimonial.service}</p>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
