import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum und rechtliche Informationen zu Anda-Atmen.",
  robots: { index: false, follow: true },
};

export default function ImpressumPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="section-container">
        <nav className="mb-8 text-sm">
          <ol className="flex items-center gap-2 text-foreground/60">
            <li><Link href="/" className="hover:text-primary">Home</Link></li>
            <li>/</li>
            <li className="text-foreground">Impressum</li>
          </ol>
        </nav>

        <div className="max-w-3xl">
          <h1 className="heading-1 text-foreground mb-8">Impressum</h1>

          <div className="prose prose-lg prose-invert max-w-none space-y-8">
            <section>
              <h2 className="heading-2 text-foreground mb-4">Angaben gemäß § 5 ECG</h2>
              <p className="body-text text-foreground/90">
                <strong>Anda-Atmen</strong><br />
                Mag. Andreas Schuster<br />
                Hallerschloßstraße 1<br />
                8010 Graz<br />
                Österreich
              </p>
            </section>

            <section>
              <h2 className="heading-2 text-foreground mb-4">Kontakt</h2>
              <p className="body-text text-foreground/90">
                E-Mail: <a href="mailto:anda.atmen@gmail.com" className="text-primary hover:underline">anda.atmen@gmail.com</a><br />
                Website: <a href="https://anda-atmen.at" className="text-primary hover:underline">www.anda-atmen.at</a>
              </p>
            </section>

            <section>
              <h2 className="heading-2 text-foreground mb-4">Berufsbezeichnung</h2>
              <p className="body-text text-foreground/90">
                Seminarleiter für Holotropes Atmen<br />
                Ausbildung zum Holotropen Atmen bei Dr. Sylvester Walch (IHTP)<br />
                Coach & Supervisor
              </p>
            </section>

            <section>
              <h2 className="heading-2 text-foreground mb-4">Verantwortlich für den Inhalt</h2>
              <p className="body-text text-foreground/90">
                Mag. Andreas Schuster<br />
                Hallerschloßstraße 1<br />
                8010 Graz
              </p>
            </section>

            <section>
              <h2 className="heading-2 text-foreground mb-4">Haftungsausschluss</h2>
              <h3 className="heading-3 text-foreground mb-2">Haftung für Inhalte</h3>
              <p className="body-text text-foreground/90 mb-4">
                Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die
                Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch
                keine Gewähr übernehmen.
              </p>

              <h3 className="heading-3 text-foreground mb-2">Haftung für Links</h3>
              <p className="body-text text-foreground/90 mb-4">
                Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte
                wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch
                keine Gewähr übernehmen.
              </p>

              <h3 className="heading-3 text-foreground mb-2">Urheberrecht</h3>
              <p className="body-text text-foreground/90">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
                unterliegen dem österreichischen Urheberrecht. Die Vervielfältigung, Bearbeitung,
                Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes
                bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              </p>
            </section>

            <section>
              <h2 className="heading-2 text-foreground mb-4">EU-Streitschlichtung</h2>
              <p className="body-text text-foreground/90">
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
                <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1">
                  https://ec.europa.eu/consumers/odr
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
