"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import FadeIn from "@/components/animations/FadeIn";
import Stagger from "@/components/animations/Stagger";
import StaggerItem from "@/components/animations/StaggerItem";
import { motion } from "framer-motion";

export default function Kontakt() {
  return (
    <div className="min-h-screen bg-warm-beige">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 sm:py-40 overflow-hidden md:pt-32">
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
              Kontakt
            </motion.h1>
            <motion.p
              className="text-xl text-white/95 leading-relaxed drop-shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Haben Sie Fragen oder möchten Sie ein unverbindliches Erstgespräch vereinbaren?
              Ich freue mich auf Ihre Nachricht!
            </motion.p>
          </FadeIn>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <FadeIn direction="up" delay={0.2}>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Kontaktinformationen
              </h2>
              <p className="text-xl text-foreground/70">
                Ich freue mich auf Ihre Nachricht
              </p>
            </div>

            <Stagger staggerDelay={0.15} className="space-y-6 mb-12">
              {[
                { icon: Phone, title: "Telefon", value: "0152 / 59229075", href: "tel:015259229075", subtitle: "Mo-Fr 8:00 - 18:00 Uhr" },
                { icon: Mail, title: "E-Mail", value: "Seniorenbetreuung.alltagshelfer@gmail.com", href: "mailto:Seniorenbetreuung.alltagshelfer@gmail.com", subtitle: "Antwort innerhalb von 24 Stunden" },
                { icon: MapPin, title: "Standort", value: "Rostock, Deutschland", subtitle: "Hausbesuche im gesamten Stadtgebiet" }
              ].map((contact, idx) => (
                <StaggerItem key={idx}>
                  <motion.div
                    className="flex items-start gap-4 bg-soft-gray rounded-2xl p-6 border-2 border-primary-blue/20"
                    whileHover={{
                      x: 5,
                      borderColor: "rgba(59, 130, 246, 0.4)",
                      transition: { duration: 0.2 }
                    }}
                  >
                    <motion.div
                      className="bg-primary-blue/10 rounded-full p-3"
                      whileHover={{ scale: 1.1, backgroundColor: "rgba(59, 130, 246, 0.2)" }}
                      transition={{ duration: 0.2 }}
                    >
                      <contact.icon className="w-6 h-6 text-primary-blue" strokeWidth={1.5} />
                    </motion.div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{contact.title}</h3>
                      {contact.href ? (
                        <a
                          href={contact.href}
                          className="text-lg text-primary-blue hover:text-primary-blue/80 transition-colors break-all"
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <p className="text-lg text-foreground">{contact.value}</p>
                      )}
                      <p className="text-sm text-foreground/60 mt-1">
                        {contact.subtitle}
                      </p>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </Stagger>

            {/* Opening Hours */}
            <motion.div
              className="bg-soft-gray rounded-2xl p-6 border-2 border-primary-blue/20"
              whileHover={{
                scale: 1.02,
                borderColor: "rgba(59, 130, 246, 0.4)",
                transition: { duration: 0.3 },
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-6 h-6 text-warm-orange" strokeWidth={1.5} />
                <h3 className="text-xl font-semibold text-foreground">Erreichbarkeit</h3>
              </div>
              <div className="space-y-2">
                {[
                  { day: "Montag - Freitag", time: "8:00 - 18:00 Uhr" },
                  { day: "Samstag", time: "Nach Vereinbarung" },
                  { day: "Sonntag", time: "Nach Vereinbarung" }
                ].map((hours, idx) => (
                  <motion.div
                    key={idx}
                    className="flex justify-between"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + idx * 0.1 }}
                  >
                    <span className="text-foreground/70">{hours.day}</span>
                    <span className="font-medium text-foreground">{hours.time}</span>
                  </motion.div>
                ))}
              </div>
              <p className="text-sm text-foreground/60 mt-4">
                Termine außerhalb der Öffnungszeiten sind nach Absprache möglich.
              </p>
            </motion.div>
          </FadeIn>
        </div>
      </section>

      {/* Quick Contact CTA */}
      <section className="py-16 bg-gradient-to-br from-primary-blue to-warm-orange text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn direction="up" delay={0.2}>
            <motion.h2
              className="text-3xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Lieber direkt anrufen?
            </motion.h2>
            <motion.p
              className="text-xl mb-8 opacity-90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Ich bin gerne persönlich für Sie da
            </motion.p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <a
                href="tel:015259229075"
                className="inline-block bg-white text-primary-blue px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
              >
                0152 / 59229075
              </a>
            </motion.div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  );
}
