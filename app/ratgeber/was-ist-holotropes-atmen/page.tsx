import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Was ist Holotropes Atmen? - Methode, Geschichte & Ablauf",
  description:
    "Erfahren Sie alles über Holotropes Atmen: Die Geschichte von Stanislav Grof, wie die Methode funktioniert und was Sie in einer Session erwartet.",
  openGraph: {
    title: "Was ist Holotropes Atmen? | Anda-Atmen",
    description:
      "Erfahren Sie alles über Holotropes Atmen: Geschichte, Methode und Ablauf einer Session.",
  },
};

export default function WasIstHolotropesAtmenPage() {
  // Schema.org Article
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Was ist Holotropes Atmen? - Methode, Geschichte & Ablauf",
    description:
      "Erfahren Sie alles über Holotropes Atmen: Die Geschichte von Stanislav Grof, wie die Methode funktioniert und was Sie in einer Session erwartet.",
    author: {
      "@type": "Organization",
      name: "Anda-Atmen",
    },
    publisher: {
      "@type": "Organization",
      name: "Anda-Atmen",
      logo: {
        "@type": "ImageObject",
        url: "https://anda-atmen.at/images/logo.png",
      },
    },
    datePublished: "2025-01-01",
    dateModified: new Date().toISOString(),
    image: "https://anda-atmen.at/images/hero.jpg",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <article className="pt-24 pb-16">
        <div className="section-container">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm">
            <ol className="flex items-center gap-2 text-foreground/60">
              <li>
                <Link href="/" className="hover:text-primary">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/ratgeber" className="hover:text-primary">
                  Ratgeber
                </Link>
              </li>
              <li>/</li>
              <li className="text-foreground">Was ist Holotropes Atmen?</li>
            </ol>
          </nav>

          <header className="max-w-3xl mb-12">
            <h1 className="heading-1 text-foreground mb-6">
              Was ist Holotropes Atmen?
            </h1>
            <p className="text-xl text-foreground/80 leading-relaxed">
              Eine umfassende Einführung in die transformative Atemtechnik, die von
              Dr. Stanislav Grof entwickelt wurde und heute weltweit praktiziert wird.
            </p>
          </header>

          <div className="max-w-3xl">
            <Image
              src="/images/hero.jpg"
              alt="Holotropes Atmen Session - Teilnehmer in tiefer Atemarbeit"
              width={800}
              height={450}
              className="rounded-2xl mb-12"
            />

            <div className="prose prose-lg prose-stone max-w-none">
              <h2 className="heading-2 text-foreground mt-12 mb-6">
                Die Geschichte des Holotropen Atmens
              </h2>
              <p className="body-text text-foreground/90 mb-6">
                Holotropes Atmen wurde in den 1970er Jahren von dem tschechischen
                Psychiater Dr. Stanislav Grof und seiner Frau Christina Grof entwickelt.
                Der Begriff &quot;holotrop&quot; stammt aus dem Griechischen und bedeutet
                &quot;sich auf das Ganze zubewegend&quot; (holos = ganz, trepein = sich bewegen).
              </p>
              <p className="body-text text-foreground/90 mb-6">
                Dr. Grof hatte zuvor jahrzehntelang mit LSD in der Psychotherapie
                gearbeitet, bevor diese Substanz verboten wurde. Auf der Suche nach
                einer legalen Alternative entdeckte er, dass durch beschleunigtes
                Atmen ähnliche Bewusstseinszustände erreicht werden können.
              </p>

              <h2 className="heading-2 text-foreground mt-12 mb-6">
                Wie funktioniert Holotropes Atmen?
              </h2>
              <p className="body-text text-foreground/90 mb-6">
                Die Methode kombiniert drei wesentliche Elemente:
              </p>
              <ul className="list-disc list-inside space-y-3 mb-6 text-foreground/90">
                <li>
                  <strong>Beschleunigte Atmung:</strong> Durch ein schnelleres und
                  tieferes Atmen als gewöhnlich wird ein veränderter Bewusstseinszustand
                  induziert.
                </li>
                <li>
                  <strong>Evokative Musik:</strong> Speziell ausgewählte Musik
                  unterstützt den Prozess und hilft, emotionale Blockaden zu lösen.
                </li>
                <li>
                  <strong>Prozessorientierte Körperarbeit:</strong> Bei Bedarf wird
                  durch sanfte Berührung oder Druck die Freisetzung körperlicher
                  Spannungen unterstützt.
                </li>
              </ul>

              <h2 className="heading-2 text-foreground mt-12 mb-6">
                Ablauf einer Holotropen Atemsession
              </h2>
              <p className="body-text text-foreground/90 mb-6">
                Eine typische Session dauert etwa 2-3 Stunden und findet in einer
                Gruppe statt. Die Teilnehmer arbeiten in Paaren: Einer atmet (der
                &quot;Atmer&quot;), während der andere als &quot;Sitter&quot; für Sicherheit und
                Unterstützung sorgt. Nach einer Pause werden die Rollen getauscht.
              </p>

              <h3 className="heading-3 text-foreground mt-8 mb-4">
                Typischer Seminarablauf bei Anda-Atmen
              </h3>
              <ol className="list-decimal list-inside space-y-3 mb-6 text-foreground/90">
                <li>Einführung und Kennenlernen der Gruppe</li>
                <li>Theoretische Grundlagen und Sicherheitshinweise</li>
                <li>Erste Atemsession (ca. 2-3 Stunden)</li>
                <li>Pause mit vegetarischer/veganer Verpflegung</li>
                <li>Zweite Atemsession (Rollentausch)</li>
                <li>Integration durch Malen (Mandalas)</li>
                <li>Gruppengespräch und Erfahrungsaustausch</li>
                <li>Am nächsten Tag: Meditation und finale Integration</li>
              </ol>

              <h2 className="heading-2 text-foreground mt-12 mb-6">
                Für wen ist Holotropes Atmen geeignet?
              </h2>
              <p className="body-text text-foreground/90 mb-6">
                Holotropes Atmen eignet sich für Menschen, die:
              </p>
              <ul className="list-disc list-inside space-y-3 mb-6 text-foreground/90">
                <li>Persönliche Entwicklung und Selbsterkenntnis suchen</li>
                <li>Traumata oder emotionale Blockaden bearbeiten möchten</li>
                <li>Spirituelle Erfahrungen machen wollen</li>
                <li>Ihre Kreativität und Intuition stärken möchten</li>
                <li>Alternative Therapieformen erkunden</li>
              </ul>
              <p className="body-text text-foreground/90 mb-6">
                Voraussetzung ist eine normale psychische und körperliche Belastbarkeit.
                Für bestimmte Personengruppen ist die Methode nicht geeignet –
                mehr dazu in unserem Artikel zu{" "}
                <Link href="/ratgeber/risiken-und-nebenwirkungen" className="text-primary hover:underline">
                  Risiken und Nebenwirkungen
                </Link>.
              </p>

              <div className="bg-primary/10 border border-primary/30 rounded-2xl p-8 mt-12">
                <h3 className="heading-3 text-foreground mb-4">
                  Bereit für Ihre erste Erfahrung?
                </h3>
                <p className="body-text text-foreground/90 mb-6">
                  Erleben Sie Holotropes Atmen in einem sicheren Rahmen mit
                  erfahrenen Therapeuten. Unsere nächsten Seminare finden in
                  Kitzbühel und Baden statt.
                </p>
                <Link href="/#termine" className="btn-primary inline-block">
                  Termine ansehen
                </Link>
              </div>
            </div>

            {/* Related Articles */}
            <div className="mt-16 pt-12 border-t border-border">
              <h3 className="heading-3 text-foreground mb-6">Weitere Artikel</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                <Link
                  href="/ratgeber/wirkung-und-erfahrungen"
                  className="group block bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all"
                >
                  <h4 className="font-jost font-semibold text-foreground group-hover:text-primary transition-colors">
                    Wirkung und Erfahrungen
                  </h4>
                  <p className="text-foreground/70 text-sm mt-2">
                    Was passiert während einer Session?
                  </p>
                </Link>
                <Link
                  href="/ratgeber/risiken-und-nebenwirkungen"
                  className="group block bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all"
                >
                  <h4 className="font-jost font-semibold text-foreground group-hover:text-primary transition-colors">
                    Risiken und Nebenwirkungen
                  </h4>
                  <p className="text-foreground/70 text-sm mt-2">
                    Wichtige Sicherheitshinweise
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
