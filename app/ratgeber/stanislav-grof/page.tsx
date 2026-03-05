import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Stanislav Grof - Begründer des Holotropen Atmens",
  description:
    "Dr. Stanislav Grof ist der Begründer des Holotropen Atmens und Pionier der transpersonalen Psychologie. Erfahren Sie mehr über sein Lebenswerk und seine Forschung.",
  openGraph: {
    title: "Stanislav Grof | Anda-Atmen",
    description: "Der Begründer des Holotropen Atmens und sein Lebenswerk.",
  },
};

export default function StanislavGrofPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Stanislav Grof - Begründer des Holotropen Atmens",
    description: "Dr. Stanislav Grof ist der Begründer des Holotropen Atmens und Pionier der transpersonalen Psychologie.",
    author: { "@type": "Organization", name: "Anda-Atmen" },
    publisher: { "@type": "Organization", name: "Anda-Atmen" },
    datePublished: "2026-01-01",
    dateModified: new Date().toISOString(),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <article className="pt-24 pb-16">
        <div className="section-container">
          <nav className="mb-8 text-sm">
            <ol className="flex items-center gap-2 text-foreground/60">
              <li><Link href="/" className="hover:text-primary">Home</Link></li>
              <li>/</li>
              <li><Link href="/ratgeber" className="hover:text-primary">Ratgeber</Link></li>
              <li>/</li>
              <li className="text-foreground">Stanislav Grof</li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <header className="mb-12">
              <h1 className="heading-1 text-foreground mb-6">
                Dr. Stanislav Grof
              </h1>
              <p className="text-xl text-foreground/80 leading-relaxed">
                Der Begründer des Holotropen Atmens und einer der bedeutendsten
                Pioniere der Bewusstseinsforschung des 20. Jahrhunderts.
              </p>
            </header>

            <div className="prose prose-lg prose-stone max-w-none">
              <h2 className="heading-2 text-foreground mt-12 mb-6">Wer ist Stanislav Grof?</h2>
              <p className="body-text text-foreground/90 mb-6">
                Dr. Stanislav Grof (*1931 in Prag) ist ein tschechisch-amerikanischer
                Psychiater und gilt als einer der wichtigsten Pioniere der wissenschaftlichen
                Bewusstseinsforschung. Gemeinsam mit seiner Frau Christina Grof entwickelte
                er in den 1970er Jahren die Methode des Holotropen Atmens.
              </p>
              <p className="body-text text-foreground/90 mb-6">
                Grof ist Mitbegründer der International Transpersonal Association (ITA)
                und hat durch seine jahrzehntelange Forschung das Verständnis von
                Bewusstsein, Psychotherapie und menschlicher Entwicklung grundlegend
                erweitert.
              </p>

              <h2 className="heading-2 text-foreground mt-12 mb-6">Von der LSD-Forschung zum Holotropen Atmen</h2>
              <p className="body-text text-foreground/90 mb-6">
                In den 1950er und 1960er Jahren führte Grof bahnbrechende Forschungen
                mit LSD in der Psychotherapie durch. Er dokumentierte über 4.000
                therapeutische Sitzungen und entdeckte dabei das enorme Potenzial
                veränderter Bewusstseinszustände für Heilung und persönliche Entwicklung.
              </p>
              <p className="body-text text-foreground/90 mb-6">
                Als LSD 1968 verboten wurde, suchte Grof nach einer legalen Alternative,
                um ähnliche Bewusstseinszustände zu erreichen. Dabei entdeckte er, dass
                beschleunigtes Atmen in Kombination mit Musik und Körperarbeit vergleichbare
                Erfahrungen ermöglichen kann – das Holotrope Atmen war geboren.
              </p>

              <h2 className="heading-2 text-foreground mt-12 mb-6">Die erweiterte Kartografie der Psyche</h2>
              <p className="body-text text-foreground/90 mb-6">
                Eine von Grofs bedeutendsten Entdeckungen ist die &quot;erweiterte Kartografie
                der Psyche&quot;. Während die klassische Psychoanalyse sich auf biografische
                Erfahrungen konzentriert, erkannte Grof drei weitere Erfahrungsebenen:
              </p>
              <ul className="list-disc list-inside space-y-3 mb-6 text-foreground/90">
                <li>
                  <strong>Perinatale Ebene:</strong> Erfahrungen rund um die Geburt
                  (die vier perinatalen Matrizen)
                </li>
                <li>
                  <strong>Pränatale Ebene:</strong> Erfahrungen aus der Zeit im Mutterleib
                </li>
                <li>
                  <strong>Transpersonale Ebene:</strong> Erfahrungen, die über das
                  individuelle Selbst hinausgehen
                </li>
              </ul>

              <div className="bg-card rounded-xl p-6 border border-border my-8">
                <h4 className="font-jost font-semibold text-foreground mb-3">
                  Grofs wichtigste Bücher
                </h4>
                <ul className="space-y-2 text-foreground/80">
                  <li>&quot;Topographie des Unbewussten&quot; (1975)</li>
                  <li>&quot;Geburt, Tod und Transzendenz&quot; (1985)</li>
                  <li>&quot;Holotropes Atmen: Eine neue Methode der Selbsterforschung
                      und Therapie&quot; (mit Christina Grof)</li>
                  <li>&quot;Die Psychologie der Zukunft&quot; (2000)</li>
                </ul>
              </div>

              <h2 className="heading-2 text-foreground mt-12 mb-6">Die transpersonale Psychologie</h2>
              <p className="body-text text-foreground/90 mb-6">
                Grof ist einer der Begründer der transpersonalen Psychologie, die er
                als &quot;vierte Kraft&quot; der Psychologie bezeichnet (nach Psychoanalyse,
                Behaviorismus und humanistischer Psychologie). Diese Richtung integriert
                spirituelle Erfahrungen und Bewusstseinszustände in das Verständnis
                der menschlichen Psyche.
              </p>

              <blockquote className="border-l-4 border-primary pl-6 italic text-foreground/80 my-8">
                &quot;Der Therapeut ist kein aktiv Handelnder, der Veränderungen verursacht,
                sondern jemand, der intelligent mit den inneren Heilungskräften kooperiert.&quot;
                <footer className="text-sm mt-2 not-italic">— Stanislav Grof</footer>
              </blockquote>

              <h2 className="heading-2 text-foreground mt-12 mb-6">Das Vermächtnis</h2>
              <p className="body-text text-foreground/90 mb-6">
                Grofs Arbeit hat weltweit Tausende von Therapeuten beeinflusst und
                inspiriert. Das Grof® Legacy Training setzt seine Lehren fort und
                bildet qualifizierte Facilitatoren für Holotropes Atmen aus.
              </p>
              <p className="body-text text-foreground/90 mb-6">
                Im deutschsprachigen Raum hat Dr. Sylvester Walch als Schüler von
                Grof die Methode weiterentwickelt und verbreitet. Das IHTP (Institut
                für Holotropes Atmen und Transpersonale Psychotherapie) führt diese
                Tradition fort.
              </p>

              <div className="bg-primary/10 border border-primary/30 rounded-2xl p-8 mt-12">
                <h3 className="heading-3 text-foreground mb-4">
                  Holotropes Atmen selbst erleben
                </h3>
                <p className="body-text text-foreground/90 mb-6">
                  Unsere Seminarleiter sind in der Tradition von Stanislav Grof
                  ausgebildet. Erleben Sie diese transformative Methode selbst.
                </p>
                <Link href="/#termine" className="btn-primary inline-block">
                  Termine ansehen
                </Link>
              </div>
            </div>

            <div className="mt-16 pt-12 border-t border-border">
              <h3 className="heading-3 text-foreground mb-6">Weiterführende Artikel</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                <Link
                  href="/ratgeber/perinatale-matrizen"
                  className="group block bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all"
                >
                  <h4 className="font-jost font-semibold text-foreground group-hover:text-primary transition-colors">
                    Die Perinatalen Matrizen
                  </h4>
                  <p className="text-foreground/70 text-sm mt-2">
                    Grofs Theorie der vier Geburtsphasen
                  </p>
                </Link>
                <Link
                  href="/ratgeber/transpersonale-psychologie"
                  className="group block bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all"
                >
                  <h4 className="font-jost font-semibold text-foreground group-hover:text-primary transition-colors">
                    Transpersonale Psychologie
                  </h4>
                  <p className="text-foreground/70 text-sm mt-2">
                    Die vierte Kraft der Psychologie
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
