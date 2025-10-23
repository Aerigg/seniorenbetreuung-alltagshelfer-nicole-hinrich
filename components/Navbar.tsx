import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50">
      <nav className="container mx-auto max-w-7xl px-4 pt-4">
        <div className="relative rounded-2xl px-4 sm:px-6 lg:px-8 py-4 shadow-2xl" style={{background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(168, 85, 247, 0.1), rgba(236, 72, 153, 0.1), rgba(251, 146, 60, 0.1))', backdropFilter: 'blur(20px)'}}>
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
              <Link href="/" className="text-white/90 hover:text-white transition-colors font-medium drop-shadow">
                Startseite
              </Link>
              <Link href="/leistungen" className="text-white/90 hover:text-white transition-colors font-medium drop-shadow">
                Leistungen
              </Link>
              <Link href="/ueber-mich" className="text-white/90 hover:text-white transition-colors font-medium drop-shadow">
                Über mich
              </Link>
              <Link href="/kontakt" className="text-white/90 hover:text-white transition-colors font-medium drop-shadow">
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
        </div>
      </nav>
    </header>
  );
}
