import Image from "next/image";
import Link from "next/link";
import { Heart, Award, Users, Clock } from "lucide-react";
import Footer from "@/components/Footer";

export default function UeberMich() {
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
              <Link href="/ueber-mich" className="text-primary-blue transition-colors font-medium">
                Über mich
              </Link>
              <Link href="/kontakt" className="text-foreground hover:text-primary-blue transition-colors font-medium">
                Kontakt
              </Link>
            </div>
            <Link
              href="/kontakt"
              className="bg-warm-orange hover:bg-warm-orange/90 text-white px-4 sm:px-6 py-2 rounded-full font-medium transition-all shadow-md hover:shadow-lg"
            >
              Jetzt anfragen
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-light-blue via-warm-beige to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Über mich – Nicole Hinrich
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed">
              Ihre engagierte Alltagshelferin in Rostock mit Herz, Erfahrung und LAGuS-Anerkennung
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mb-20">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Meine Geschichte
              </h2>
              <div className="space-y-4 text-lg text-foreground/70">
                <p>
                  Mein Name ist Nicole Hinrich und ich bin seit vielen Jahren als Alltagshelferin
                  in Rostock tätig. Was als berufliche Leidenschaft begann, ist heute meine Berufung
                  geworden – Menschen in ihrem Alltag zu unterstützen und ihnen ein Stück Lebensqualität
                  zurückzugeben.
                </p>
                <p>
                  Mit meiner LAGuS-Anerkennung biete ich professionelle Betreuung und Unterstützung
                  für Senioren, Familien und Kinder. Jeder Mensch ist einzigartig, und so ist es auch
                  meine Betreuung – individuell, herzlich und auf Ihre Bedürfnisse zugeschnitten.
                </p>
                <p>
                  Was mich auszeichnet? Ich nehme mir Zeit. Zeit zum Zuhören, Zeit zum Verstehen und
                  Zeit, um wirklich für Sie da zu sein. Denn nur so kann ich Sie bestmöglich
                  unterstützen.
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="bg-soft-gray rounded-2xl p-6 text-center border-2 border-primary-blue/20">
              <Award className="w-12 h-12 text-warm-orange mx-auto mb-4" strokeWidth={1.5} />
              <h3 className="font-semibold text-lg text-foreground mb-2">LAGuS anerkannt</h3>
              <p className="text-foreground/70 text-sm">
                Offizielle Anerkennung als Alltagshelferin
              </p>
            </div>
            <div className="bg-soft-gray rounded-2xl p-6 text-center border-2 border-primary-blue/20">
              <Heart className="w-12 h-12 text-warm-orange mx-auto mb-4" strokeWidth={1.5} />
              <h3 className="font-semibold text-lg text-foreground mb-2">Mit Herz dabei</h3>
              <p className="text-foreground/70 text-sm">
                Empathie und Einfühlungsvermögen stehen an erster Stelle
              </p>
            </div>
            <div className="bg-soft-gray rounded-2xl p-6 text-center border-2 border-primary-blue/20">
              <Users className="w-12 h-12 text-warm-orange mx-auto mb-4" strokeWidth={1.5} />
              <h3 className="font-semibold text-lg text-foreground mb-2">Erfahren</h3>
              <p className="text-foreground/70 text-sm">
                Langjährige Erfahrung in der Betreuung
              </p>
            </div>
            <div className="bg-soft-gray rounded-2xl p-6 text-center border-2 border-primary-blue/20">
              <Clock className="w-12 h-12 text-warm-orange mx-auto mb-4" strokeWidth={1.5} />
              <h3 className="font-semibold text-lg text-foreground mb-2">Zuverlässig</h3>
              <p className="text-foreground/70 text-sm">
                Pünktlich und verlässlich – darauf können Sie zählen
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-b from-warm-beige to-light-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12 text-center">
            Meine Werte
          </h2>
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold text-foreground mb-3">Menschlichkeit</h3>
              <p className="text-foreground/70">
                Jeder Mensch verdient Respekt, Würde und eine individuelle Betreuung.
                Ich begegne jedem mit Wertschätzung und Empathie.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold text-foreground mb-3">Verlässlichkeit</h3>
              <p className="text-foreground/70">
                Sie können sich auf mich verlassen – termingetreu, zuverlässig und mit
                konstanter Qualität in allem, was ich tue.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold text-foreground mb-3">Professionalität</h3>
              <p className="text-foreground/70">
                LAGuS-Anerkennung und kontinuierliche Weiterbildung garantieren Ihnen
                professionelle Betreuung auf höchstem Niveau.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Lernen Sie mich kennen
            </h2>
            <p className="text-xl text-foreground/70 mb-8">
              Vereinbaren Sie ein unverbindliches Erstgespräch und überzeugen Sie sich selbst
              von meiner Arbeit.
            </p>
            <Link
              href="/kontakt"
              className="inline-block bg-warm-orange hover:bg-warm-orange/90 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
            >
              Jetzt Kontakt aufnehmen
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
