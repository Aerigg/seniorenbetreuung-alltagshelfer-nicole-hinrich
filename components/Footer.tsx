import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-foreground text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.png"
                alt="Seniorenbetreuung Logo"
                width={50}
                height={50}
                className="w-12 h-12"
              />
            </Link>
            <h4 className="font-semibold text-lg mb-2">Seniorenbetreuung Hinrich</h4>
            <p className="text-white/70 text-sm">
              Ihre Alltagshelferin in Rostock – Mit Herz und Zeit für Menschen
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-white/70 hover:text-white transition-colors">Startseite</Link></li>
              <li><Link href="/leistungen" className="text-white/70 hover:text-white transition-colors">Leistungen</Link></li>
              <li><Link href="/ueber-mich" className="text-white/70 hover:text-white transition-colors">Über mich</Link></li>
              <li><Link href="/kontakt" className="text-white/70 hover:text-white transition-colors">Kontakt</Link></li>
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
          <div>
            <h4 className="font-semibold text-lg mb-4">Rechtliches</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/impressum" className="text-white/70 hover:text-white transition-colors">Impressum</Link></li>
              <li><Link href="/datenschutz" className="text-white/70 hover:text-white transition-colors">Datenschutz</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 text-center text-sm text-white/50">
          <p>&copy; 2025 Seniorenbetreuung Alltagshelfer Nicole Hinrich. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}
