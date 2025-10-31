import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Datenschutz() {
  return (
    <div className="min-h-screen bg-warm-beige">
      <Navbar />

      {/* Content */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-8">Datenschutzerklärung</h1>

          <div className="bg-white rounded-2xl p-8 shadow-lg space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Datenschutz auf einen Blick</h2>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Allgemeine Hinweise</h3>
              <p className="text-foreground/70 mb-4">
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten
                passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
                persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen
                Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Datenerfassung auf dieser Website</h3>
              <h4 className="text-lg font-medium text-foreground mb-2 mt-4">
                Wer ist verantwortlich für die Datenerfassung auf dieser Website?
              </h4>
              <p className="text-foreground/70 mb-4">
                Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten
                können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle" in dieser Datenschutzerklärung entnehmen.
              </p>

              <h4 className="text-lg font-medium text-foreground mb-2 mt-4">Wie erfassen wir Ihre Daten?</h4>
              <p className="text-foreground/70 mb-4">
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.B. um
                Daten handeln, die Sie in ein Kontaktformular eingeben.
              </p>
              <p className="text-foreground/70 mb-4">
                Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere
                IT-Systeme erfasst. Das sind vor allem technische Daten (z.B. Internetbrowser, Betriebssystem oder
                Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.
              </p>

              <h4 className="text-lg font-medium text-foreground mb-2 mt-4">Wofür nutzen wir Ihre Daten?</h4>
              <p className="text-foreground/70 mb-4">
                Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten.
                Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
              </p>

              <h4 className="text-lg font-medium text-foreground mb-2 mt-4">
                Welche Rechte haben Sie bezüglich Ihrer Daten?
              </h4>
              <p className="text-foreground/70">
                Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer
                gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder
                Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben,
                können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter
                bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
                Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Hosting und technische Dienstleister</h2>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Vercel Inc.</h3>
              <p className="text-foreground/70 mb-4">
                Diese Website wird auf Servern von Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA gehostet.
                Vercel erfasst automatisch Informationen über die Nutzung der Website in Server-Logs. Dabei können
                folgende Daten gespeichert werden:
              </p>
              <ul className="list-disc list-inside text-foreground/70 space-y-2 mb-4">
                <li>IP-Adresse des anfragenden Rechners</li>
                <li>Datum und Uhrzeit des Zugriffs</li>
                <li>Aufgerufene Seiten und übertragene Datenmenge</li>
                <li>Browser-Typ und Version</li>
                <li>Betriebssystem</li>
                <li>Referrer URL (zuvor besuchte Seite)</li>
              </ul>
              <p className="text-foreground/70 mb-4">
                Diese Daten werden ausschließlich zur Sicherstellung eines stabilen und sicheren Betriebs der Website
                sowie zur Optimierung unseres Internetangebots verwendet. Die Daten werden nicht mit anderen Datenquellen
                zusammengeführt. Die Server-Logs werden nach 30 Tagen automatisch gelöscht.
              </p>
              <p className="text-foreground/70 mb-4">
                Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der sicheren und effizienten
                Bereitstellung unserer Website).
              </p>
              <p className="text-foreground/70 mb-4">
                Vercel ist durch das EU-U.S. Data Privacy Framework zertifiziert, welches die Einhaltung des europäischen
                Datenschutzniveaus sicherstellt.
              </p>
              <p className="text-foreground/70">
                Weitere Informationen finden Sie in der Datenschutzerklärung von Vercel:
                <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer"
                   className="text-primary-blue hover:text-primary-blue/80 underline ml-1">
                  https://vercel.com/legal/privacy-policy
                </a>
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Cookies</h2>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Was sind Cookies?</h3>
              <p className="text-foreground/70 mb-4">
                Cookies sind kleine Textdateien, die beim Besuch einer Website auf Ihrem Computer gespeichert werden.
                Sie dienen dazu, die Funktionalität der Website zu gewährleisten und Ihr Nutzererlebnis zu verbessern.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Welche Cookies verwenden wir?</h3>
              <p className="text-foreground/70 mb-4">
                Diese Website verwendet ausschließlich technisch notwendige Cookies, die für den Betrieb der Website
                erforderlich sind. Diese Cookies erfordern keine Einwilligung nach DSGVO.
              </p>

              <h4 className="text-lg font-medium text-foreground mb-2 mt-4">Technisch notwendige Cookies</h4>
              <p className="text-foreground/70 mb-4">
                Unsere Website nutzt folgende technisch notwendige Cookies:
              </p>
              <ul className="list-disc list-inside text-foreground/70 space-y-2 mb-4">
                <li>
                  <strong>Session-Cookies:</strong> Diese werden von Next.js (unserem Website-Framework) verwendet,
                  um die grundlegende Funktionalität der Website sicherzustellen. Sie werden gelöscht, sobald Sie
                  Ihren Browser schließen.
                </li>
                <li>
                  <strong>Sicherheits-Cookies:</strong> Diese dienen dem Schutz vor Cross-Site-Request-Forgery (CSRF)
                  Angriffen und gewährleisten die sichere Übertragung von Formulardaten.
                </li>
              </ul>
              <p className="text-foreground/70 mb-4">
                Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse am technischen Betrieb der Website).
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Keine Tracking- oder Marketing-Cookies</h3>
              <p className="text-foreground/70 mb-4">
                Wir verwenden <strong>keine</strong> Tracking-, Analyse- oder Marketing-Cookies. Es erfolgt keine
                Weitergabe Ihrer Daten an Dritte zu Werbezwecken. Wir nutzen kein Google Analytics, Facebook Pixel
                oder vergleichbare Tracking-Dienste.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Cookies verwalten</h3>
              <p className="text-foreground/70">
                Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und
                Cookies nur im Einzelfall erlauben oder die Annahme von Cookies generell ausschließen. Bitte beachten
                Sie, dass bei Deaktivierung der technisch notwendigen Cookies die Funktionalität dieser Website
                eingeschränkt sein kann.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                4. Allgemeine Hinweise und Pflichtinformationen
              </h2>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Hinweis zur verantwortlichen Stelle</h3>
              <p className="text-foreground/70 mb-4">
                Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
              </p>
              <p className="text-foreground/70 mb-4">
                Nicole Hinrich<br />
                Seniorenbetreuung Alltagshelfer<br />
                Martin-Luther-King-Allee 13<br />
                18147 Rostock<br />
                <br />
                Telefon: 0152 / 59229075<br />
                E-Mail: Seniorenbetreuung.alltagshelfer@gmail.com
              </p>
              <p className="text-foreground/70 mb-4">
                Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über
                die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z.B. Namen, E-Mail-Adressen o. Ä.) entscheidet.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Datenschutz</h3>
              <p className="text-foreground/70 mb-4">
                Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre
                personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie
                dieser Datenschutzerklärung.
              </p>
              <p className="text-foreground/70">
                Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene
                Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende
                Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch,
                wie und zu welchem Zweck das geschieht.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                5. Datenerfassung auf dieser Website
              </h2>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Kontaktformular</h3>
              <p className="text-foreground/70 mb-4">
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular
                inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall
                von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
              </p>
              <p className="text-foreground/70 mb-4">
                Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage
                mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen
                erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an
                der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer
                Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde.
              </p>
              <p className="text-foreground/70">
                Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung
                auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung
                entfällt (z.B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen –
                insbesondere Aufbewahrungsfristen – bleiben unberührt.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Ihre Rechte</h2>
              <p className="text-foreground/70 mb-4">
                Sie haben jederzeit das Recht:
              </p>
              <ul className="list-disc list-inside text-foreground/70 space-y-2 mb-4">
                <li>Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten zu erhalten</li>
                <li>Berichtigung unrichtiger personenbezogener Daten zu verlangen</li>
                <li>Löschung Ihrer bei uns gespeicherten Daten zu verlangen</li>
                <li>Einschränkung der Datenverarbeitung zu verlangen</li>
                <li>Widerspruch gegen die Verarbeitung Ihrer Daten einzulegen</li>
                <li>Datenübertragbarkeit zu verlangen</li>
              </ul>
              <p className="text-foreground/70">
                Bitte wenden Sie sich hierzu an die im Impressum angegebenen Kontaktdaten.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. SSL- bzw. TLS-Verschlüsselung</h2>
              <p className="text-foreground/70">
                Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum
                Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw.
                TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des
                Browsers von „http://" auf „https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
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
