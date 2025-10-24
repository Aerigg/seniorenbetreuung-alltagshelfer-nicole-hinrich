"use client";

import { motion } from "framer-motion";
import { Shield, FileCheck, Heart, Award } from "lucide-react";
import Stagger from "@/components/animations/Stagger";
import StaggerItem from "@/components/animations/StaggerItem";
import FadeIn from "@/components/animations/FadeIn";

const trustElements = [
  {
    icon: Award,
    title: "LAGuS-Anerkennung",
    description: "Offizielle Anerkennung als Alltagshelferin durch das Landesamt für Gesundheit und Soziales"
  },
  {
    icon: Shield,
    title: "Haftpflichtversichert",
    description: "Vollständig versichert für Ihre Sicherheit und Ihren Schutz"
  },
  {
    icon: FileCheck,
    title: "Polizeiliches Führungszeugnis",
    description: "Aktuelles erweitertes Führungszeugnis liegt vor"
  },
  {
    icon: Heart,
    title: "Verschwiegenheitserklärung",
    description: "Ihre Privatsphäre und Ihre Daten sind bei mir sicher"
  }
];

export default function TrustElements() {
  return (
    <section className="py-16 bg-gradient-to-br from-primary-blue/5 to-warm-orange/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <FadeIn direction="up" className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Vertrauen & Sicherheit
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Ihre Sicherheit hat höchste Priorität – darauf können Sie sich verlassen
          </p>
        </FadeIn>

        <Stagger staggerDelay={0.15} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustElements.map((element, idx) => (
            <StaggerItem key={idx}>
              <motion.div
                className="bg-white rounded-2xl p-6 text-center border-2 border-primary-blue/20 h-full"
                whileHover={{
                  scale: 1.05,
                  borderColor: "rgba(59, 130, 246, 0.5)",
                  boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                  transition: { duration: 0.3 },
                }}
              >
                <motion.div
                  className="bg-primary-blue/10 rounded-full p-4 inline-block mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <element.icon className="w-8 h-8 text-primary-blue" strokeWidth={1.5} />
                </motion.div>
                <h3 className="font-semibold text-lg text-foreground mb-2">
                  {element.title}
                </h3>
                <p className="text-foreground/70 text-sm">
                  {element.description}
                </p>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
