import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-warm-beige">
      {/* Header/Navigation */}
      <header className="bg-white/90 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
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
                <h2 className="text-primary-blue font-semibold text-lg">Seniorenbetreuung</h2>
                <p className="text-warm-orange text-sm">Alltagshelfer Nicole Hinrich</p>
              </div>
            </div>
            <div className="hidden md:flex space-x-6 lg:space-x-8">
              <Link href="#leistungen" className="text-foreground hover:text-primary-blue transition-colors font-medium">
                Leistungen
              </Link>
              <Link href="#ueber-mich" className="text-foreground hover:text-primary-blue transition-colors font-medium">
                Über mich
              </Link>
              <Link href="#kontakt" className="text-foreground hover:text-primary-blue transition-colors font-medium">
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
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-light-blue via-warm-beige to-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-primary-blue rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-warm-orange rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Mit Herz und Zeit für{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-blue to-warm-orange">
                  Menschen
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-foreground/80 mb-8 leading-relaxed">
                Ihre Alltagshelferin in Rostock – Professionelle Seniorenbetreuung,
                Hauswirtschaftliche Hilfe und Kinderbetreuung mit Anerkennung vom LAGuS
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="#leistungen"
                  className="bg-primary-blue hover:bg-primary-blue/90 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
                >
                  Unsere Leistungen
                </Link>
                <Link
                  href="tel:015259229075"
                  className="bg-white hover:bg-soft-gray text-primary-blue border-2 border-primary-blue px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
                >
                  0152 / 59229075
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="mt-12 flex flex-wrap gap-6 justify-center lg:justify-start text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-warm-orange rounded-full"></div>
                  <span className="text-foreground/70">LAGuS anerkannt</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-primary-blue rounded-full"></div>
                  <span className="text-foreground/70">Kostenübernahme durch Pflegekassen</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-accent-yellow rounded-full"></div>
                  <span className="text-foreground/70">Persönlich & Herzlich</span>
                </div>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-blue/20 to-warm-orange/20 rounded-3xl transform rotate-6"></div>
                <div className="relative bg-white rounded-3xl shadow-2xl p-8 flex items-center justify-center">
                  <Image
                    src="/logo.png"
                    alt="Nicole Hinrich"
                    width={400}
                    height={400}
                    className="w-full h-auto"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "👵", title: "Seniorenbetreuung", desc: "Liebevolle Betreuung im Alltag" },
              { icon: "🏠", title: "Hauswirtschaft", desc: "Unterstützung im Haushalt" },
              { icon: "👶", title: "Kinderbetreuung", desc: "Für Kinder & Jugendliche" },
              { icon: "💚", title: "Pflegekasse", desc: "Direkte Abrechnung möglich" },
            ].map((item, idx) => (
              <div key={idx} className="bg-soft-gray rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-semibold text-lg text-foreground mb-2">{item.title}</h3>
                <p className="text-foreground/70 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
