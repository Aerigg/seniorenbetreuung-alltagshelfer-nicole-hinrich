"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, Home as HomeIcon, Baby, ShieldCheck } from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import FadeIn from "@/components/animations/FadeIn";
import ScaleIn from "@/components/animations/ScaleIn";
import Stagger from "@/components/animations/Stagger";
import StaggerItem from "@/components/animations/StaggerItem";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-start md:items-center -mt-24 pt-24 md:pt-24">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/general/wheelchair.jpg"
            alt="Seniorenbetreuung"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 md:py-24 lg:py-32 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content with Frosted Glass Effect */}
            <FadeIn direction="right" duration={0.8}>
              <div className="relative rounded-3xl p-8 sm:p-10 lg:p-12 shadow-2xl" style={{background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(168, 85, 247, 0.1), rgba(236, 72, 153, 0.1), rgba(251, 146, 60, 0.1))', backdropFilter: 'blur(20px)'}}>
                  <motion.h1
                    className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    Mit Herz und Zeit für{" "}
                    <motion.span
                      className="text-transparent bg-clip-text bg-gradient-to-r from-primary-blue via-purple-500 via-pink-500 via-red-500 to-warm-orange"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1, delay: 0.5 }}
                    >
                      Menschen
                    </motion.span>
                  </motion.h1>
                  <motion.p
                    className="text-lg sm:text-xl text-white/95 mb-8 leading-relaxed drop-shadow"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    Ihre Alltagshelferin in Rostock – Professionelle Seniorenbetreuung,
                    Hauswirtschaftliche Hilfe und Kinderbetreuung mit Anerkennung vom LAGuS
                  </motion.p>
                  <motion.div
                    className="flex flex-col sm:flex-row gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Link
                        href="#leistungen"
                        className="block bg-primary-blue hover:bg-primary-blue/90 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all text-center"
                      >
                        Meine Leistungen
                      </Link>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Link
                        href="tel:015259229075"
                        className="block bg-warm-orange hover:bg-warm-orange/90 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all text-center"
                      >
                        0152 / 59229075
                      </Link>
                    </motion.div>
                  </motion.div>

                  {/* Trust Indicators */}
                  <Stagger staggerDelay={0.15} className="mt-8 flex flex-wrap gap-4 text-sm">
                    <StaggerItem>
                      <motion.div
                        className="flex items-center gap-2 bg-white/15 backdrop-blur-sm px-3 py-2 rounded-full"
                        whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.25)" }}
                      >
                        <motion.div
                          className="w-3 h-3 bg-warm-orange rounded-full shadow-lg"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                        <span className="text-white font-medium drop-shadow">LAGuS anerkannt</span>
                      </motion.div>
                    </StaggerItem>
                    <StaggerItem>
                      <motion.div
                        className="flex items-center gap-2 bg-white/15 backdrop-blur-sm px-3 py-2 rounded-full"
                        whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.25)" }}
                      >
                        <motion.div
                          className="w-3 h-3 bg-blue-300 rounded-full shadow-lg"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                        />
                        <span className="text-white font-medium drop-shadow">Pflegekassen</span>
                      </motion.div>
                    </StaggerItem>
                    <StaggerItem>
                      <motion.div
                        className="flex items-center gap-2 bg-white/15 backdrop-blur-sm px-3 py-2 rounded-full"
                        whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.25)" }}
                      >
                        <motion.div
                          className="w-3 h-3 bg-yellow-300 rounded-full shadow-lg"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                        />
                        <span className="text-white font-medium drop-shadow">Persönlich & Herzlich</span>
                      </motion.div>
                    </StaggerItem>
                  </Stagger>
              </div>
            </FadeIn>

            {/* Logo with Frosted Glass Effect */}
            <ScaleIn delay={0.3} duration={0.8} className="relative hidden lg:block">
              <div className="relative w-full aspect-square max-w-md mx-auto">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary-blue/20 to-warm-orange/20 rounded-3xl blur-sm"
                  animate={{ rotate: [6, 8, 6] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                  className="relative rounded-3xl p-8 shadow-2xl flex items-center justify-center"
                  style={{background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(168, 85, 247, 0.1), rgba(236, 72, 153, 0.1), rgba(251, 146, 60, 0.1))', backdropFilter: 'blur(20px)'}}
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="/logo.png"
                    alt="Nicole Hinrich"
                    width={400}
                    height={400}
                    className="w-full h-auto drop-shadow-2xl"
                    priority
                  />
                </motion.div>
              </div>
            </ScaleIn>
          </div>
        </div>
      </section>

      {/* Detailed Services Section */}
      <section id="leistungen" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up" className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Meine Leistungen im Detail
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Von der liebevollen Seniorenbetreuung bis zur zuverlässigen Kinderbetreuung –
              ich bin für Sie da
            </p>
          </FadeIn>

          <Stagger staggerDelay={0.2} className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <StaggerItem>
              <motion.div
                className="bg-soft-gray rounded-2xl overflow-hidden shadow-lg border-2 border-primary-blue/20 h-full"
                whileHover={{
                  scale: 1.03,
                  borderColor: "rgba(59, 130, 246, 0.5)",
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  transition: { duration: 0.3 },
                }}
              >
                <div className="relative w-full h-48 overflow-hidden">
                  <Image
                    src="/services/seniorenbetreuung.jpg"
                    alt="Seniorenbetreuung"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <motion.div
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                    >
                      <Heart className="w-8 h-8 text-warm-orange" strokeWidth={1.5} />
                    </motion.div>
                    <h3 className="text-2xl font-semibold text-foreground">Seniorenbetreuung</h3>
                  </div>
                  <p className="text-foreground/70 mb-4">
                    Individuelle Betreuung und Begleitung im Alltag. Ich unterstütze bei alltäglichen
                    Aufgaben und schaffe Momente der Freude.
                  </p>
                  <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                    <Link
                      href="/leistungen#seniorenbetreuung"
                      className="text-primary-blue hover:text-primary-blue/80 font-medium inline-flex items-center gap-2"
                    >
                      Mehr erfahren →
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </StaggerItem>

            <StaggerItem>
              <motion.div
                className="bg-soft-gray rounded-2xl overflow-hidden shadow-lg border-2 border-primary-blue/20 h-full"
                whileHover={{
                  scale: 1.03,
                  borderColor: "rgba(59, 130, 246, 0.5)",
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  transition: { duration: 0.3 },
                }}
              >
                <div className="relative w-full h-48 overflow-hidden">
                  <Image
                    src="/services/hauswirtschaft.jpg"
                    alt="Hauswirtschaft"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <motion.div
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 3, delay: 0.3 }}
                    >
                      <HomeIcon className="w-8 h-8 text-warm-orange" strokeWidth={1.5} />
                    </motion.div>
                    <h3 className="text-2xl font-semibold text-foreground">Hauswirtschaft</h3>
                  </div>
                  <p className="text-foreground/70 mb-4">
                    Professionelle Unterstützung im Haushalt – von der Reinigung bis zur
                    Wäschepflege. Damit Sie sich auf das Wesentliche konzentrieren können.
                  </p>
                  <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                    <Link
                      href="/leistungen#hauswirtschaft"
                      className="text-primary-blue hover:text-primary-blue/80 font-medium inline-flex items-center gap-2"
                    >
                      Mehr erfahren →
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </StaggerItem>

            <StaggerItem>
              <motion.div
                className="bg-soft-gray rounded-2xl overflow-hidden shadow-lg border-2 border-primary-blue/20 h-full"
                whileHover={{
                  scale: 1.03,
                  borderColor: "rgba(59, 130, 246, 0.5)",
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  transition: { duration: 0.3 },
                }}
              >
                <div className="relative w-full h-48 overflow-hidden">
                  <Image
                    src="/services/kinderbetreuung.jpg"
                    alt="Kinderbetreuung"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <motion.div
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 3, delay: 0.6 }}
                    >
                      <Baby className="w-8 h-8 text-warm-orange" strokeWidth={1.5} />
                    </motion.div>
                    <h3 className="text-2xl font-semibold text-foreground">Kinderbetreuung</h3>
                  </div>
                  <p className="text-foreground/70 mb-4">
                    Liebevolle und qualifizierte Betreuung für Kinder und Jugendliche.
                    Mit pädagogischem Ansatz und viel Herz.
                  </p>
                  <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                    <Link
                      href="/leistungen#kinderbetreuung"
                      className="text-primary-blue hover:text-primary-blue/80 font-medium inline-flex items-center gap-2"
                    >
                      Mehr erfahren →
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </StaggerItem>

            <StaggerItem>
              <motion.div
                className="bg-soft-gray rounded-2xl overflow-hidden shadow-lg border-2 border-primary-blue/20 h-full"
                whileHover={{
                  scale: 1.03,
                  borderColor: "rgba(59, 130, 246, 0.5)",
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  transition: { duration: 0.3 },
                }}
              >
                <div className="relative w-full h-48 overflow-hidden">
                  <Image
                    src="/services/pflegekasse.jpg"
                    alt="Abrechnung über Pflegekasse"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <motion.div
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 3, delay: 0.9 }}
                    >
                      <ShieldCheck className="w-8 h-8 text-warm-orange" strokeWidth={1.5} />
                    </motion.div>
                    <h3 className="text-2xl font-semibold text-foreground">Abrechnung über Pflegekasse</h3>
                  </div>
                  <p className="text-foreground/70 mb-4">
                    Als LAGuS-anerkannter Anbieter kann ich direkt mit den Pflegekassen abrechnen.
                    Keine komplizierte Bürokratie für Sie.
                  </p>
                  <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                    <Link
                      href="/leistungen#pflegekasse"
                      className="text-primary-blue hover:text-primary-blue/80 font-medium inline-flex items-center gap-2"
                    >
                      Mehr erfahren →
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </StaggerItem>
          </Stagger>
        </div>
      </section>

      {/* About Section */}
      <section id="ueber-mich" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <FadeIn direction="right" delay={0.2} className="order-2 lg:order-1">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Über mich – Nicole Hinrich
              </h2>
              <p className="text-lg text-foreground/70 mb-4">
                Mein Name ist Nicole Hinrich und ich bin Ihre Alltagshelferin in Rostock.
                Mit Herz, Erfahrung und LAGuS-Anerkennung biete ich professionelle Betreuung
                und Unterstützung für die ganze Familie.
              </p>
              <p className="text-lg text-foreground/70 mb-6">
                Ob Seniorenbetreuung, Hilfe im Haushalt oder Kinderbetreuung – ich bin mit
                Leidenschaft und Engagement für Sie da. Persönlich, zuverlässig und mit viel
                Zeit für das Wichtigste: den Menschen.
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/ueber-mich"
                  className="bg-primary-blue hover:bg-primary-blue/90 text-white px-6 py-3 rounded-full font-semibold inline-flex items-center gap-2 shadow-lg hover:shadow-xl transition-all"
                >
                  Mehr über mich erfahren →
                </Link>
              </motion.div>
            </FadeIn>
            <FadeIn direction="left" delay={0.2} className="order-1 lg:order-2">
              <div className="relative w-full aspect-square max-w-md mx-auto">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-warm-orange/20 to-primary-blue/20 rounded-3xl"
                  animate={{ rotate: [-6, -8, -6] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                  className="relative bg-white rounded-3xl shadow-xl overflow-hidden"
                  whileHover={{ scale: 1.05, rotate: -2 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="/logo.png"
                    alt="Nicole Hinrich"
                    width={500}
                    height={500}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontakt" className="py-20 bg-gradient-to-b from-warm-beige to-light-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up" className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Kontaktieren Sie mich
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Haben Sie Fragen oder möchten Sie ein unverbindliches Erstgespräch vereinbaren?
              Ich freue mich auf Ihre Nachricht!
            </p>
          </FadeIn>

          <Stagger staggerDelay={0.2} className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <StaggerItem>
              <motion.div
                className="bg-white rounded-2xl p-8 shadow-lg h-full"
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  transition: { duration: 0.3 },
                }}
              >
                <h3 className="text-2xl font-semibold text-foreground mb-6">Kontaktdaten</h3>
                <div className="space-y-4">
                  <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                    <p className="text-foreground/70 text-sm mb-1">Telefon</p>
                    <a
                      href="tel:015259229075"
                      className="text-lg font-medium text-primary-blue hover:text-primary-blue/80 transition-colors"
                    >
                      0152 / 59229075
                    </a>
                  </motion.div>
                  <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                    <p className="text-foreground/70 text-sm mb-1">E-Mail</p>
                    <a
                      href="mailto:Seniorenbetreuung.alltagshelfer@gmail.com"
                      className="text-lg font-medium text-primary-blue hover:text-primary-blue/80 transition-colors break-all"
                    >
                      Seniorenbetreuung.alltagshelfer@gmail.com
                    </a>
                  </motion.div>
                  <div>
                    <p className="text-foreground/70 text-sm mb-1">Standort</p>
                    <p className="text-lg font-medium text-foreground">Rostock, Deutschland</p>
                  </div>
                </div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/kontakt"
                    className="mt-6 inline-block bg-warm-orange hover:bg-warm-orange/90 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:shadow-lg transition-all"
                  >
                    Zum Kontaktformular →
                  </Link>
                </motion.div>
              </motion.div>
            </StaggerItem>

            <StaggerItem>
              <motion.div
                className="bg-white rounded-2xl p-8 shadow-lg h-full"
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  transition: { duration: 0.3 },
                }}
              >
                <h3 className="text-2xl font-semibold text-foreground mb-6">Erreichbarkeit</h3>
                <div className="space-y-3">
                  <motion.div
                    className="flex justify-between"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <span className="text-foreground/70">Montag - Freitag</span>
                    <span className="font-medium text-foreground">8:00 - 18:00 Uhr</span>
                  </motion.div>
                  <motion.div
                    className="flex justify-between"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <span className="text-foreground/70">Samstag</span>
                    <span className="font-medium text-foreground">Nach Vereinbarung</span>
                  </motion.div>
                  <motion.div
                    className="flex justify-between"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <span className="text-foreground/70">Sonntag</span>
                    <span className="font-medium text-foreground">Nach Vereinbarung</span>
                  </motion.div>
                </div>
                <motion.div
                  className="mt-6 p-4 bg-light-blue rounded-xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <p className="text-sm text-foreground/70">
                    Termine außerhalb dieser Zeiten sind nach Absprache möglich.
                    Rufen Sie mich gerne an!
                  </p>
                </motion.div>
              </motion.div>
            </StaggerItem>
          </Stagger>
        </div>
      </section>

      <Footer />
    </div>
  );
}
