"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, Award, Users, Clock } from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import FadeIn from "@/components/animations/FadeIn";
import ScaleIn from "@/components/animations/ScaleIn";
import Stagger from "@/components/animations/Stagger";
import StaggerItem from "@/components/animations/StaggerItem";
import { motion } from "framer-motion";

export default function UeberMich() {
  return (
    <div className="min-h-screen bg-warm-beige">
      <Navbar />

      {/* Hero Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-light-blue via-warm-beige to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up" duration={0.8} className="text-center max-w-3xl mx-auto">
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Über mich – Nicole Hinrich
            </motion.h1>
            <motion.p
              className="text-xl text-foreground/70 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Ihre engagierte Alltagshelferin in Rostock mit Herz, Erfahrung und LAGuS-Anerkennung
            </motion.p>
          </FadeIn>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mb-20">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Über mich
              </h2>
              <div className="space-y-4 text-lg text-foreground/70">
                <p>
                  Ich bin Nicole Hinrich, geboren am 28. März 1992, und lebe an der wunderschönen
                  Ostsee in Rostock. Mit viel Herzblut und Geduld begleite ich Menschen in ihrem
                  Alltag – ob Senior, Kind oder Familie.
                </p>
                <p>
                  Mir ist wichtig, dass jeder Tag ein Stück leichter und schöner wird. Ich nehme mir
                  Zeit für die kleinen Dinge, die oft vergessen werden: ein offenes Ohr, ein herzliches
                  Lächeln und die Gewissheit, dass jemand da ist, wenn man Unterstützung braucht.
                </p>
                <p>
                  Meine Arbeit ist mehr als nur ein Beruf – es ist eine Berufung. Ich liebe es,
                  Menschen zu begleiten, ihnen zur Seite zu stehen und gemeinsam schöne Momente zu
                  schaffen. Ob beim Spaziergang an der Ostsee, beim gemeinsamen Kochen oder einfach
                  nur beim Zuhören.
                </p>
                <p>
                  Mit meiner LAGuS-Anerkennung biete ich professionelle Betreuung und Unterstützung
                  für Senioren, Familien und Kinder. Jeder Mensch ist einzigartig, und so ist es auch
                  meine Betreuung – individuell, herzlich und auf Ihre Bedürfnisse zugeschnitten.
                </p>
              </div>
            </div>
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-warm-orange/20 to-primary-blue/20 rounded-3xl transform -rotate-6"></div>
              <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden">
                <Image
                  src="/logo.png"
                  alt="Nicole Hinrich"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Qualifications */}
          <Stagger staggerDelay={0.15} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Award, title: "LAGuS anerkannt", desc: "Offizielle Anerkennung als Alltagshelferin" },
              { icon: Heart, title: "Mit Herz dabei", desc: "Empathie und Einfühlungsvermögen stehen an erster Stelle" },
              { icon: Users, title: "Erfahren", desc: "Langjährige Erfahrung in der Betreuung" },
              { icon: Clock, title: "Zuverlässig", desc: "Pünktlich und verlässlich – darauf können Sie zählen" }
            ].map((qual, idx) => (
              <StaggerItem key={idx}>
                <motion.div
                  className="bg-soft-gray rounded-2xl p-6 text-center border-2 border-primary-blue/20 h-full"
                  whileHover={{
                    scale: 1.05,
                    borderColor: "rgba(59, 130, 246, 0.5)",
                    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                    transition: { duration: 0.3 },
                  }}
                >
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 1, delay: idx * 0.2 }}
                  >
                    <qual.icon className="w-12 h-12 text-warm-orange mx-auto mb-4" strokeWidth={1.5} />
                  </motion.div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">{qual.title}</h3>
                  <p className="text-foreground/70 text-sm">{qual.desc}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-b from-warm-beige to-light-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <FadeIn direction="up" className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Meine Werte
            </h2>
          </FadeIn>
          <Stagger staggerDelay={0.2} className="space-y-6">
            {[
              { title: "Menschlichkeit", desc: "Jeder Mensch verdient Respekt, Würde und eine individuelle Betreuung. Ich begegne jedem mit Wertschätzung und Empathie." },
              { title: "Verlässlichkeit", desc: "Sie können sich auf mich verlassen – termingetreu, zuverlässig und mit konstanter Qualität in allem, was ich tue." },
              { title: "Professionalität", desc: "LAGuS-Anerkennung und kontinuierliche Weiterbildung garantieren Ihnen professionelle Betreuung auf höchstem Niveau." }
            ].map((value, idx) => (
              <StaggerItem key={idx}>
                <motion.div
                  className="bg-white rounded-2xl p-8 shadow-lg"
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
                    transition: { duration: 0.3 },
                  }}
                >
                  <h3 className="text-2xl font-semibold text-foreground mb-3">{value.title}</h3>
                  <p className="text-foreground/70">{value.desc}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up" delay={0.2} className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Lernen Sie mich kennen
            </h2>
            <p className="text-xl text-foreground/70 mb-8">
              Vereinbaren Sie ein unverbindliches Erstgespräch und überzeugen Sie sich selbst
              von meiner Arbeit.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/kontakt"
                className="inline-block bg-warm-orange hover:bg-warm-orange/90 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
              >
                Jetzt Kontakt aufnehmen
              </Link>
            </motion.div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  );
}
