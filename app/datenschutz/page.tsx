import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: "Datenschutzerklärung und Informationen zum Umgang mit Ihren Daten bei Anda-Atmen.",
  robots: { index: false, follow: true },
};

export default function DatenschutzPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="section-container">
        <nav className="mb-8 text-sm">
          <ol className="flex items-center gap-2 text-foreground/60">
            <li><Link href="/" className="hover:text-primary">Home</Link></li>
            <li>/</li>
            <li className="text-foreground">Datenschutz</li>
          </ol>
        </nav>

        <div className="max-w-3xl">
          <h1 className="heading-1 text-foreground mb-8">Datenschutzerklärung</h1>

          <div className="prose prose-lg prose-invert max-w-none space-y-8">
            <section>
              <h2 className="heading-2 text-foreground mb-4">1. Verantwortlicher</h2>
              <p className="body-text text-foreground/90">
                Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:<br /><br />
                <strong>Anda-Atmen</strong><br />
                Mag. Andreas Schuster<br />
                Hallerschloßstraße 1<br />
                8010 Graz, Österreich<br />
                E-Mail: <a href="mailto:anda.atmen@gmail.com" className="text-primary hover:underline">anda.atmen@gmail.com</a>
              </p>
            </section>

            <section>
              <h2 className="heading-2 text-foreground mb-4">2. Erhebung und Speicherung personenbezogener Daten</h2>
              <h3 className="heading-3 text-foreground mb-2">a) Beim Besuch der Website</h3>
              <p className="body-text text-foreground/90 mb-4">
                Beim Aufrufen unserer Website werden durch den auf Ihrem Endgerät zum Einsatz
                kommenden Browser automatisch Informationen an den Server unserer Website gesendet.
                Diese Informationen werden temporär in einem sog. Logfile gespeichert.
              </p>
              <p className="body-text text-foreground/90 mb-4">
                Folgende Informationen werden dabei ohne Ihr Zutun erfasst und bis zur
                automatisierten Löschung gespeichert:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/90 mb-4">
                <li>IP-Adresse des anfragenden Rechners</li>
                <li>Datum und Uhrzeit des Zugriffs</li>
                <li>Name und URL der abgerufenen Datei</li>
                <li>Website, von der aus der Zugriff erfolgt (Referrer-URL)</li>
                <li>Verwendeter Browser und ggf. das Betriebssystem</li>
              </ul>

              <h3 className="heading-3 text-foreground mb-2">b) Bei Kontaktaufnahme</h3>
              <p className="body-text text-foreground/90">
                Bei Kontaktaufnahme per E-Mail werden die von Ihnen mitgeteilten Daten
                (Name, E-Mail-Adresse, Nachrichteninhalt) zur Bearbeitung Ihrer Anfrage
                gespeichert. Diese Daten werden nach 6 Monaten gelöscht, sofern keine
                weitere Kommunikation stattfindet.
              </p>
            </section>

            <section>
              <h2 className="heading-2 text-foreground mb-4">3. Cookies</h2>
              <p className="body-text text-foreground/90 mb-4">
                Wir setzen auf unserer Website nur technisch notwendige Cookies ein.
                Diese sind erforderlich, um die grundlegende Funktionalität der Website
                zu gewährleisten.
              </p>
              <p className="body-text text-foreground/90">
                Analyse- oder Marketing-Cookies werden erst nach Ihrer ausdrücklichen
                Einwilligung über unser Cookie-Banner gesetzt.
              </p>
            </section>

            <section>
              <h2 className="heading-2 text-foreground mb-4">4. Ihre Rechte</h2>
              <p className="body-text text-foreground/90 mb-4">
                Sie haben gegenüber uns folgende Rechte hinsichtlich der Sie betreffenden
                personenbezogenen Daten:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/90">
                <li><strong>Recht auf Auskunft</strong> (Art. 15 DSGVO)</li>
                <li><strong>Recht auf Berichtigung</strong> (Art. 16 DSGVO)</li>
                <li><strong>Recht auf Löschung</strong> (Art. 17 DSGVO)</li>
                <li><strong>Recht auf Einschränkung der Verarbeitung</strong> (Art. 18 DSGVO)</li>
                <li><strong>Recht auf Datenübertragbarkeit</strong> (Art. 20 DSGVO)</li>
                <li><strong>Recht auf Widerspruch</strong> (Art. 21 DSGVO)</li>
                <li><strong>Recht auf Widerruf</strong> erteilter Einwilligungen (Art. 7 Abs. 3 DSGVO)</li>
              </ul>
            </section>

            <section>
              <h2 className="heading-2 text-foreground mb-4">5. Beschwerderecht</h2>
              <p className="body-text text-foreground/90">
                Unbeschadet eines anderweitigen verwaltungsrechtlichen oder gerichtlichen
                Rechtsbehelfs steht Ihnen das Recht auf Beschwerde bei einer Aufsichtsbehörde zu.
                Die für uns zuständige Aufsichtsbehörde ist:<br /><br />
                <strong>Österreichische Datenschutzbehörde</strong><br />
                Barichgasse 40-42<br />
                1030 Wien<br />
                Website: <a href="https://www.dsb.gv.at" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.dsb.gv.at</a>
              </p>
            </section>

            <section>
              <h2 className="heading-2 text-foreground mb-4">6. Rechtsgrundlagen</h2>
              <p className="body-text text-foreground/90">
                Die Verarbeitung Ihrer Daten erfolgt auf Grundlage von:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/90 mt-4">
                <li><strong>Art. 6 Abs. 1 lit. a DSGVO</strong> – bei erteilter Einwilligung</li>
                <li><strong>Art. 6 Abs. 1 lit. b DSGVO</strong> – zur Vertragserfüllung</li>
                <li><strong>Art. 6 Abs. 1 lit. f DSGVO</strong> – zur Wahrung berechtigter Interessen</li>
              </ul>
            </section>

            <section>
              <h2 className="heading-2 text-foreground mb-4">7. Aktualität dieser Datenschutzerklärung</h2>
              <p className="body-text text-foreground/90">
                Diese Datenschutzerklärung ist aktuell gültig und hat den Stand Februar 2026.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
