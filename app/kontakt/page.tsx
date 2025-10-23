import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Kontakt() {
  return (
    <div className="min-h-screen bg-warm-beige">
      {/* Header/Navigation */}
      <header className="bg-white/90 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/logo.png"
                alt="Seniorenbetreuung Alltagshelfer Nicole Hinrich Logo"
                width={60}
                height={60}
                className="w-12 h-12 sm:w-14 sm:h-14"
              />
              <div className="hidden sm:block">
                <h2 className="text-primary-blue font-semibold text-lg">Seniorenbetreuung</h2>
                <p className="text-warm-orange text-sm">Alltagshelfer Nicole Hinrich</p>
              </div>
            </Link>
            <div className="hidden md:flex space-x-6 lg:space-x-8">
              <Link href="/" className="text-foreground hover:text-primary-blue transition-colors font-medium">
                Startseite
              </Link>
              <Link href="/leistungen" className="text-foreground hover:text-primary-blue transition-colors font-medium">
                Leistungen
              </Link>
              <Link href="/ueber-mich" className="text-foreground hover:text-primary-blue transition-colors font-medium">
                Über mich
              </Link>
              <Link href="/kontakt" className="text-primary-blue transition-colors font-medium">
                Kontakt
              </Link>
            </div>
            <Link
              href="tel:015259229075"
              className="bg-warm-orange hover:bg-warm-orange/90 text-white px-4 sm:px-6 py-2 rounded-full font-medium transition-all shadow-md hover:shadow-lg"
            >
              Jetzt anrufen
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-light-blue via-warm-beige to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Kontakt
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed">
              Haben Sie Fragen oder möchten Sie ein unverbindliches Erstgespräch vereinbaren?
              Ich freue mich auf Ihre Nachricht!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">
                Kontaktinformationen
              </h2>

              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="bg-primary-blue/10 rounded-full p-3">
                    <Phone className="w-6 h-6 text-primary-blue" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Telefon</h3>
                    <a
                      href="tel:015259229075"
                      className="text-lg text-primary-blue hover:text-primary-blue/80"
                    >
                      0152 / 59229075
                    </a>
                    <p className="text-sm text-foreground/60 mt-1">
                      Mo-Fr 8:00 - 18:00 Uhr
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary-blue/10 rounded-full p-3">
                    <Mail className="w-6 h-6 text-primary-blue" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">E-Mail</h3>
                    <a
                      href="mailto:info@seniorenbetreuung-hinrich.de"
                      className="text-lg text-primary-blue hover:text-primary-blue/80"
                    >
                      info@seniorenbetreuung-hinrich.de
                    </a>
                    <p className="text-sm text-foreground/60 mt-1">
                      Antwort innerhalb von 24 Stunden
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary-blue/10 rounded-full p-3">
                    <MapPin className="w-6 h-6 text-primary-blue" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Standort</h3>
                    <p className="text-lg text-foreground">Rostock, Deutschland</p>
                    <p className="text-sm text-foreground/60 mt-1">
                      Hausbesuche im gesamten Stadtgebiet
                    </p>
                  </div>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="bg-soft-gray rounded-2xl p-6 border-2 border-primary-blue/20">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-6 h-6 text-warm-orange" strokeWidth={1.5} />
                  <h3 className="text-xl font-semibold text-foreground">Öffnungszeiten</h3>
                </div>
                <div className="space-y-2">
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
                <p className="text-sm text-foreground/60 mt-4">
                  Termine außerhalb der Öffnungszeiten sind nach Absprache möglich.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-gradient-to-br from-light-blue to-warm-beige rounded-2xl p-8 shadow-xl">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Nachricht senden
                </h2>
                <form className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-lg border-2 border-primary-blue/20 focus:border-primary-blue outline-none transition-colors"
                      placeholder="Ihr Name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      E-Mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-lg border-2 border-primary-blue/20 focus:border-primary-blue outline-none transition-colors"
                      placeholder="ihre@email.de"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 rounded-lg border-2 border-primary-blue/20 focus:border-primary-blue outline-none transition-colors"
                      placeholder="Ihre Telefonnummer"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Betreff *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      className="w-full px-4 py-3 rounded-lg border-2 border-primary-blue/20 focus:border-primary-blue outline-none transition-colors"
                    >
                      <option value="">Bitte wählen...</option>
                      <option value="seniorenbetreuung">Seniorenbetreuung</option>
                      <option value="hauswirtschaft">Hauswirtschaft</option>
                      <option value="kinderbetreuung">Kinderbetreuung</option>
                      <option value="allgemein">Allgemeine Anfrage</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Nachricht *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border-2 border-primary-blue/20 focus:border-primary-blue outline-none transition-colors resize-none"
                      placeholder="Ihre Nachricht..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-warm-orange hover:bg-warm-orange/90 text-white px-6 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
                  >
                    Nachricht senden
                  </button>

                  <p className="text-xs text-foreground/60 text-center">
                    * Pflichtfelder - Ihre Daten werden vertraulich behandelt
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact CTA */}
      <section className="py-16 bg-gradient-to-br from-primary-blue to-warm-orange text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Lieber direkt anrufen?</h2>
          <p className="text-xl mb-8 opacity-90">
            Ich bin gerne persönlich für Sie da
          </p>
          <a
            href="tel:015259229075"
            className="inline-block bg-white text-primary-blue px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all"
          >
            0152 / 59229075
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-semibold text-lg mb-4">Seniorenbetreuung Hinrich</h4>
              <p className="text-white/70 text-sm">
                Ihre Alltagshelferin in Rostock – Mit Herz und Zeit für Menschen
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Navigation</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/" className="text-white/70 hover:text-white">Startseite</Link></li>
                <li><Link href="/leistungen" className="text-white/70 hover:text-white">Leistungen</Link></li>
                <li><Link href="/ueber-mich" className="text-white/70 hover:text-white">Über mich</Link></li>
                <li><Link href="/kontakt" className="text-white/70 hover:text-white">Kontakt</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Kontakt</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>Tel: 0152 / 59229075</li>
                <li>info@seniorenbetreuung-hinrich.de</li>
                <li>Rostock, Deutschland</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-sm text-white/50">
            <p>&copy; 2025 Seniorenbetreuung Alltagshelfer Nicole Hinrich. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
