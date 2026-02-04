import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Impressum() {
  return (
    <div className="min-h-screen bg-warm-beige">
      <Navbar />

      {/* Content */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-8">Impressum</h1>

          <div className="bg-white rounded-2xl p-8 shadow-lg space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Angaben zum Anbieter</h2>
              <p className="text-foreground/70">
                Nicole Hinrich<br />
                Seniorenbetreuung Alltagshelfer<br />
                Martin-Luther-King-Allee 13<br />
                18147 Rostock<br />
                Deutschland
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Kontakt</h2>
              <p className="text-foreground/70">
                Telefon: 0152 / 59229075<br />
                E-Mail: Seniorenbetreuung.alltagshelfer@gmail.com
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Verantwortlich für den Inhalt
              </h2>
              <p className="text-foreground/70">
                Nicole Hinrich<br />
                Martin-Luther-King-Allee 13<br />
                18147 Rostock
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Verbraucherstreitbeilegung/Universalschlichtungsstelle
              </h2>
              <p className="text-foreground/70">
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Haftung für Inhalte</h2>
              <p className="text-foreground/70 mb-4">
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 DDG für eigene Inhalte auf diesen Seiten nach den
                allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter jedoch nicht
                verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen
                zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
              </p>
              <p className="text-foreground/70">
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen
                Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
                Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
                Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Haftung für Links</h2>
              <p className="text-foreground/70 mb-4">
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
                Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
                verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
              </p>
              <p className="text-foreground/70">
                Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
                Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche
                Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht
                zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Urheberrecht</h2>
              <p className="text-foreground/70">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
                Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
                Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
                Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte
                Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem
                auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei
                Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/"
              className="inline-block bg-primary-blue hover:bg-primary-blue/90 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              Zurück zur Startseite
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
