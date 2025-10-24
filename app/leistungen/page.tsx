"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, Home as HomeIcon, Baby, ShieldCheck, Check } from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import FadeIn from "@/components/animations/FadeIn";
import ScaleIn from "@/components/animations/ScaleIn";
import Stagger from "@/components/animations/Stagger";
import StaggerItem from "@/components/animations/StaggerItem";
import { motion } from "framer-motion";

export default function Leistungen() {
  return (
    <div className="min-h-screen bg-warm-beige">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-32 sm:py-40 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/general/wheelchair.jpg"
            alt="Seniorenbetreuung - Fürsorge und Unterstützung"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn direction="up" duration={0.8} className="text-center max-w-3xl mx-auto">
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Unsere Leistungen
            </motion.h1>
            <motion.p
              className="text-xl text-white/95 leading-relaxed drop-shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Von der liebevollen Seniorenbetreuung bis zur zuverlässigen Kinderbetreuung –
              individuelle Unterstützung für jeden Bedarf
            </motion.p>
          </FadeIn>
        </div>
      </section>

      {/* Seniorenbetreuung */}
      <section id="seniorenbetreuung" className="py-20 bg-white scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn direction="right" delay={0.2}>
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <motion.div
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  >
                    <Heart className="w-10 h-10 text-warm-orange" strokeWidth={1.5} />
                  </motion.div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                    Seniorenbetreuung
                  </h2>
                </div>
                <p className="text-lg text-foreground/70 mb-6">
                  Mit Herz und Einfühlungsvermögen unterstütze ich Senioren in ihrem Alltag.
                  Meine Betreuung ist individuell auf die Bedürfnisse jedes Einzelnen abgestimmt
                  und schafft Lebensqualität und Freude.
                </p>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Meine Leistungen umfassen:
                </h3>
                <Stagger staggerDelay={0.1} className="space-y-3 mb-8">
                  {[
                    "Begleitung bei Spaziergängen und Ausflügen",
                    "Unterstützung bei der Körperpflege",
                    "Hilfe bei der Nahrungsaufnahme",
                    "Gesellschaft und emotionale Unterstützung",
                    "Gedächtnistraining und aktivierende Beschäftigung",
                    "Begleitung zu Arztterminen",
                    "Entlastung pflegender Angehöriger"
                  ].map((item, idx) => (
                    <StaggerItem key={idx}>
                      <motion.li
                        className="flex items-start gap-3"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Check className="w-5 h-5 text-warm-orange flex-shrink-0 mt-1" strokeWidth={2} />
                        <span className="text-foreground/70">{item}</span>
                      </motion.li>
                    </StaggerItem>
                  ))}
                </Stagger>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/kontakt"
                    className="inline-block bg-primary-blue hover:bg-primary-blue/90 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
                  >
                    Jetzt Beratung anfragen
                  </Link>
                </motion.div>
              </div>
            </FadeIn>
            <ScaleIn delay={0.3} className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/services/seniorenbetreuung.jpg"
                alt="Seniorenbetreuung"
                fill
                className="object-cover"
              />
            </ScaleIn>
          </div>
        </div>
      </section>

      {/* Hauswirtschaft */}
      <section id="hauswirtschaft" className="py-20 bg-soft-gray scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/services/hauswirtschaft.jpg"
                alt="Hauswirtschaft"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-6">
                <HomeIcon className="w-10 h-10 text-warm-orange" strokeWidth={1.5} />
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                  Hauswirtschaft
                </h2>
              </div>
              <p className="text-lg text-foreground/70 mb-6">
                Ein gepflegter Haushalt trägt wesentlich zum Wohlbefinden bei. Ich übernehme
                hauswirtschaftliche Tätigkeiten zuverlässig und gründlich, damit Sie sich auf
                das Wesentliche konzentrieren können.
              </p>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Meine Leistungen umfassen:
              </h3>
              <ul className="space-y-3 mb-8">
                {[
                  "Reinigung und Pflege der Wohnräume",
                  "Wäschepflege (waschen, bügeln, zusammenlegen)",
                  "Einkäufe und Besorgungen",
                  "Zubereitung von Mahlzeiten",
                  "Blumenpflege und leichte Gartenarbeiten",
                  "Müllentsorgung",
                  "Allgemeine Haushaltsorganisation"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-warm-orange flex-shrink-0 mt-1" strokeWidth={2} />
                    <span className="text-foreground/70">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/kontakt"
                className="inline-block bg-primary-blue hover:bg-primary-blue/90 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                Jetzt Beratung anfragen
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Kinderbetreuung */}
      <section id="kinderbetreuung" className="py-20 bg-white scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Baby className="w-10 h-10 text-warm-orange" strokeWidth={1.5} />
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                  Kinderbetreuung
                </h2>
              </div>
              <p className="text-lg text-foreground/70 mb-6">
                Liebevolle und qualifizierte Betreuung für Kinder und Jugendliche. Mit
                pädagogischem Ansatz, viel Geduld und Kreativität bin ich für die kleinen
                und großen Bedürfnisse Ihrer Kinder da.
              </p>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Meine Leistungen umfassen:
              </h3>
              <ul className="space-y-3 mb-8">
                {[
                  "Betreuung nach der Schule / Kita",
                  "Hilfe bei Hausaufgaben",
                  "Spielerische Förderung und Beschäftigung",
                  "Kreative Aktivitäten und Basteln",
                  "Zubereitung kindgerechter Mahlzeiten",
                  "Begleitung zu Freizeitaktivitäten",
                  "Flexible Betreuungszeiten nach Absprache"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-warm-orange flex-shrink-0 mt-1" strokeWidth={2} />
                    <span className="text-foreground/70">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/kontakt"
                className="inline-block bg-primary-blue hover:bg-primary-blue/90 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                Jetzt Beratung anfragen
              </Link>
            </div>
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/services/kinderbetreuung.jpg"
                alt="Kinderbetreuung"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pflegekasse */}
      <section id="pflegekasse" className="py-20 bg-gradient-to-b from-warm-beige to-light-blue scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <ShieldCheck className="w-10 h-10 text-warm-orange" strokeWidth={1.5} />
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                Abrechnung über die Pflegekasse
              </h2>
            </div>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Als LAGuS-anerkannter Anbieter können wir direkt mit den Pflegekassen abrechnen
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl mb-8">
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              Ihre Vorteile
            </h3>
            <ul className="space-y-4">
              {[
                {
                  title: "LAGuS-Anerkennung",
                  desc: "Offizielle Anerkennung als Alltagshelferin durch das Landesamt für Gesundheit und Soziales"
                },
                {
                  title: "Direkte Abrechnung",
                  desc: "Keine Vorkasse nötig – ich rechne direkt mit Ihrer Pflegekasse ab"
                },
                {
                  title: "Entlastungsbetrag nutzen",
                  desc: "Bis zu 125€ monatlich für anerkannte Entlastungsleistungen (ab Pflegegrad 1)"
                },
                {
                  title: "Keine Bürokratie für Sie",
                  desc: "Ich übernehme die komplette Abwicklung mit der Pflegekasse"
                }
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <Check className="w-6 h-6 text-warm-orange flex-shrink-0 mt-1" strokeWidth={2} />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                    <p className="text-foreground/70">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-primary-blue/10 rounded-2xl p-6 border-2 border-primary-blue/20">
            <h3 className="text-xl font-semibold text-foreground mb-3">
              Haben Sie Fragen zur Abrechnung?
            </h3>
            <p className="text-foreground/70 mb-4">
              Ich berate Sie gerne zu den Möglichkeiten der Kostenübernahme durch Ihre
              Pflegekasse und unterstütze Sie bei allen Formalitäten.
            </p>
            <Link
              href="/kontakt"
              className="inline-block bg-warm-orange hover:bg-warm-orange/90 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:shadow-lg transition-all"
            >
              Kostenlose Beratung anfragen
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Haben Sie noch Fragen?
            </h2>
            <p className="text-xl text-foreground/70 mb-8">
              Ich berate Sie gerne persönlich und erstelle ein individuelles Angebot
              für Ihre Bedürfnisse.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/kontakt"
                className="bg-warm-orange hover:bg-warm-orange/90 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
              >
                Jetzt Kontakt aufnehmen
              </Link>
              <a
                href="tel:015259229075"
                className="bg-white hover:bg-soft-gray text-primary-blue border-2 border-primary-blue px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
              >
                0152 / 59229075
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
