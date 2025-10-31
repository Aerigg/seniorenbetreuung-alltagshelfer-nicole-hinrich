import Link from 'next/link'
import { HomeIcon } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-warm-beige flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center px-4">
        <div className="text-center max-w-2xl mx-auto py-20">
          <h1 className="text-6xl sm:text-8xl font-bold text-primary-blue mb-4">404</h1>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Seite nicht gefunden
          </h2>
          <p className="text-lg text-foreground/70 mb-8">
            Die von Ihnen gesuchte Seite existiert leider nicht.
            Vielleicht wurde sie verschoben oder gelöscht.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-primary-blue hover:bg-primary-blue/90 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
            >
              <HomeIcon className="w-5 h-5" />
              Zurück zur Startseite
            </Link>
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 bg-warm-orange hover:bg-warm-orange/90 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
            >
              Kontakt aufnehmen
            </Link>
          </div>

          <div className="mt-12 pt-12 border-t border-foreground/10">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Hilfreiche Links
            </h3>
            <ul className="space-y-2 text-left max-w-md mx-auto">
              <li>
                <Link href="/leistungen" className="text-primary-blue hover:text-primary-blue/80 transition-colors">
                  → Unsere Leistungen
                </Link>
              </li>
              <li>
                <Link href="/ueber-mich" className="text-primary-blue hover:text-primary-blue/80 transition-colors">
                  → Über mich
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="text-primary-blue hover:text-primary-blue/80 transition-colors">
                  → Kontakt
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
