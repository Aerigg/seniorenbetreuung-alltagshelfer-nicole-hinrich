import Image from "next/image";
import Link from "next/link";
import { Heart, Home as HomeIcon, Baby, ShieldCheck } from "lucide-react";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-warm-beige">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-screen flex items-center">
        {/* Header/Navigation - Positioned absolutely over hero */}
        <header className="absolute top-0 left-0 right-0 z-50 pt-4 px-4">
          <nav className="container mx-auto max-w-7xl rounded-2xl p-[3px] bg-gradient-to-r from-primary-blue via-purple-500 via-pink-500 via-red-500 to-warm-orange shadow-2xl">
            <div className="backdrop-blur-3xl rounded-2xl px-4 sm:px-6 lg:px-8 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Image
                    src="/logo.png"
                    alt="Seniorenbetreuung Alltagshelfer Nicole Hinrich Logo"
                    width={60}
                    height={60}
                    className="w-12 h-12 sm:w-14 sm:h-14"
                  />
                  <div className="hidden sm:block">
                    <h2 className="text-white font-semibold text-lg drop-shadow">Seniorenbetreuung</h2>
                    <p className="text-warm-orange text-sm drop-shadow">Alltagshelfer Nicole Hinrich</p>
                  </div>
                </div>
                <div className="hidden md:flex space-x-6 lg:space-x-8">
                  <Link href="#leistungen" className="text-white/90 hover:text-white transition-colors font-medium drop-shadow">
                    Leistungen
                  </Link>
                  <Link href="#ueber-mich" className="text-white/90 hover:text-white transition-colors font-medium drop-shadow">
                    Über mich
                  </Link>
                  <Link href="#kontakt" className="text-white/90 hover:text-white transition-colors font-medium drop-shadow">
                    Kontakt
                  </Link>
                </div>
                <Link
                  href="#kontakt"
                  className="bg-warm-orange hover:bg-warm-orange/90 text-white px-4 sm:px-6 py-2 rounded-full font-medium transition-all shadow-md hover:shadow-lg"
                >
                  Jetzt anfragen
                </Link>
              </div>
            </div>
          </nav>
        </header>
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/services/seniorenbetreuung.jpg"
            alt="Seniorenbetreuung"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content with Frosted Glass Effect */}
            <div className="relative rounded-3xl p-[3px] bg-gradient-to-r from-primary-blue via-purple-500 via-pink-500 via-red-500 to-warm-orange shadow-2xl">
              <div className="backdrop-blur-3xl rounded-3xl p-8 sm:p-10 lg:p-12">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
                  Mit Herz und Zeit für{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-orange-200">
                    Menschen
                  </span>
                </h1>
                <p className="text-lg sm:text-xl text-white/95 mb-8 leading-relaxed drop-shadow">
                  Ihre Alltagshelferin in Rostock – Professionelle Seniorenbetreuung,
                  Hauswirtschaftliche Hilfe und Kinderbetreuung mit Anerkennung vom LAGuS
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="#leistungen"
                    className="bg-primary-blue hover:bg-primary-blue/90 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all text-center"
                  >
                    Meine Leistungen
                  </Link>
                  <Link
                    href="tel:015259229075"
                    className="bg-warm-orange hover:bg-warm-orange/90 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all text-center"
                  >
                    0152 / 59229075
                  </Link>
                </div>

                {/* Trust Indicators */}
                <div className="mt-8 flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-2 bg-white/15 backdrop-blur-sm px-3 py-2 rounded-full">
                    <div className="w-3 h-3 bg-warm-orange rounded-full shadow-lg"></div>
                    <span className="text-white font-medium drop-shadow">LAGuS anerkannt</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/15 backdrop-blur-sm px-3 py-2 rounded-full">
                    <div className="w-3 h-3 bg-blue-300 rounded-full shadow-lg"></div>
                    <span className="text-white font-medium drop-shadow">Pflegekassen</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/15 backdrop-blur-sm px-3 py-2 rounded-full">
                    <div className="w-3 h-3 bg-yellow-300 rounded-full shadow-lg"></div>
                    <span className="text-white font-medium drop-shadow">Persönlich & Herzlich</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Logo with Frosted Glass Effect */}
            <div className="relative hidden lg:block">
              <div className="relative w-full aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-blue/20 to-warm-orange/20 rounded-3xl transform rotate-6 blur-sm"></div>
                <div className="relative rounded-3xl p-[3px] bg-gradient-to-r from-primary-blue via-purple-500 via-pink-500 via-red-500 to-warm-orange shadow-2xl">
                  <div className="backdrop-blur-3xl rounded-3xl p-8 flex items-center justify-center">
                    <Image
                      src="/logo.png"
                      alt="Nicole Hinrich"
                      width={400}
                      height={400}
                      className="w-full h-auto drop-shadow-2xl"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Services Section */}
      <section id="leistungen" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Meine Leistungen im Detail
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Von der liebevollen Seniorenbetreuung bis zur zuverlässigen Kinderbetreuung –
              ich bin für Sie da
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-soft-gray rounded-2xl overflow-hidden shadow-lg border-2 border-primary-blue/20 hover:border-primary-blue/30 transition-all">
              <div className="relative w-full h-48">
                <Image
                  src="/services/seniorenbetreuung.jpg"
                  alt="Seniorenbetreuung"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Heart className="w-8 h-8 text-warm-orange" strokeWidth={1.5} />
                  <h3 className="text-2xl font-semibold text-foreground">Seniorenbetreuung</h3>
                </div>
                <p className="text-foreground/70 mb-4">
                  Individuelle Betreuung und Begleitung im Alltag. Ich unterstütze bei alltäglichen
                  Aufgaben und schaffe Momente der Freude.
                </p>
                <Link
                  href="/leistungen#seniorenbetreuung"
                  className="text-primary-blue hover:text-primary-blue/80 font-medium inline-flex items-center gap-2"
                >
                  Mehr erfahren →
                </Link>
              </div>
            </div>

            <div className="bg-soft-gray rounded-2xl overflow-hidden shadow-lg border-2 border-primary-blue/20 hover:border-primary-blue/30 transition-all">
              <div className="relative w-full h-48">
                <Image
                  src="/services/hauswirtschaft.jpg"
                  alt="Hauswirtschaft"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <HomeIcon className="w-8 h-8 text-warm-orange" strokeWidth={1.5} />
                  <h3 className="text-2xl font-semibold text-foreground">Hauswirtschaft</h3>
                </div>
                <p className="text-foreground/70 mb-4">
                  Professionelle Unterstützung im Haushalt – von der Reinigung bis zur
                  Wäschepflege. Damit Sie sich auf das Wesentliche konzentrieren können.
                </p>
                <Link
                  href="/leistungen#hauswirtschaft"
                  className="text-primary-blue hover:text-primary-blue/80 font-medium inline-flex items-center gap-2"
                >
                  Mehr erfahren →
                </Link>
              </div>
            </div>

            <div className="bg-soft-gray rounded-2xl overflow-hidden shadow-lg border-2 border-primary-blue/20 hover:border-primary-blue/30 transition-all">
              <div className="relative w-full h-48">
                <Image
                  src="/services/kinderbetreuung.jpg"
                  alt="Kinderbetreuung"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Baby className="w-8 h-8 text-warm-orange" strokeWidth={1.5} />
                  <h3 className="text-2xl font-semibold text-foreground">Kinderbetreuung</h3>
                </div>
                <p className="text-foreground/70 mb-4">
                  Liebevolle und qualifizierte Betreuung für Kinder und Jugendliche.
                  Mit pädagogischem Ansatz und viel Herz.
                </p>
                <Link
                  href="/leistungen#kinderbetreuung"
                  className="text-primary-blue hover:text-primary-blue/80 font-medium inline-flex items-center gap-2"
                >
                  Mehr erfahren →
                </Link>
              </div>
            </div>

            <div className="bg-soft-gray rounded-2xl overflow-hidden shadow-lg border-2 border-primary-blue/20 hover:border-primary-blue/30 transition-all">
              <div className="relative w-full h-48">
                <Image
                  src="/services/pflegekasse.jpg"
                  alt="Abrechnung über Pflegekasse"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <ShieldCheck className="w-8 h-8 text-warm-orange" strokeWidth={1.5} />
                  <h3 className="text-2xl font-semibold text-foreground">Abrechnung über Pflegekasse</h3>
                </div>
                <p className="text-foreground/70 mb-4">
                  Als LAGuS-anerkannter Anbieter kann ich direkt mit den Pflegekassen abrechnen.
                  Keine komplizierte Bürokratie für Sie.
                </p>
                <Link
                  href="/leistungen#pflegekasse"
                  className="text-primary-blue hover:text-primary-blue/80 font-medium inline-flex items-center gap-2"
                >
                  Mehr erfahren →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="ueber-mich" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="order-2 lg:order-1">
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
              <Link
                href="/ueber-mich"
                className="bg-primary-blue hover:bg-primary-blue/90 text-white px-6 py-3 rounded-full font-semibold inline-flex items-center gap-2 shadow-lg hover:shadow-xl transition-all"
              >
                Mehr über mich erfahren →
              </Link>
            </div>
            <div className="order-1 lg:order-2">
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
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontakt" className="py-20 bg-gradient-to-b from-warm-beige to-light-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Kontaktieren Sie mich
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Haben Sie Fragen oder möchten Sie ein unverbindliches Erstgespräch vereinbaren?
              Ich freue mich auf Ihre Nachricht!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Kontaktdaten</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-foreground/70 text-sm mb-1">Telefon</p>
                  <a
                    href="tel:015259229075"
                    className="text-lg font-medium text-primary-blue hover:text-primary-blue/80"
                  >
                    0152 / 59229075
                  </a>
                </div>
                <div>
                  <p className="text-foreground/70 text-sm mb-1">E-Mail</p>
                  <a
                    href="mailto:info@seniorenbetreuung-hinrich.de"
                    className="text-lg font-medium text-primary-blue hover:text-primary-blue/80"
                  >
                    info@seniorenbetreuung-hinrich.de
                  </a>
                </div>
                <div>
                  <p className="text-foreground/70 text-sm mb-1">Standort</p>
                  <p className="text-lg font-medium text-foreground">Rostock, Deutschland</p>
                </div>
              </div>
              <Link
                href="/kontakt"
                className="mt-6 inline-block bg-warm-orange hover:bg-warm-orange/90 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:shadow-lg transition-all"
              >
                Zum Kontaktformular →
              </Link>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Öffnungszeiten</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-foreground/70">Montag - Freitag</span>
                  <span className="font-medium text-foreground">8:00 - 18:00 Uhr</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground/70">Samstag</span>
                  <span className="font-medium text-foreground">Nach Vereinbarung</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground/70">Sonntag</span>
                  <span className="font-medium text-foreground">Nach Vereinbarung</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-light-blue rounded-xl">
                <p className="text-sm text-foreground/70">
                  Termine außerhalb der Öffnungszeiten sind nach Absprache möglich.
                  Rufen Sie mich gerne an!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
