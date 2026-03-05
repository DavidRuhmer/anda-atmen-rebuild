import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Die fünf Erfahrungsebenen beim Holotropen Atmen",
  description:
    "Beim Holotropen Atmen können verschiedene Erfahrungsebenen zugänglich werden: biografisch, perinatal, pränatal, transpersonal und spirituell.",
  openGraph: {
    title: "Erfahrungsebenen beim Holotropen Atmen | Anda-Atmen",
    description: "Von biografischen bis zu transpersonalen Erfahrungen.",
  },
};

export default function ErfahrungsebenenPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Die fünf Erfahrungsebenen beim Holotropen Atmen",
    description: "Welche Erfahrungsebenen beim Holotropen Atmen zugänglich werden können.",
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
              <li className="text-foreground">Erfahrungsebenen</li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <header className="mb-12">
              <h1 className="heading-1 text-foreground mb-6">
                Die fünf Erfahrungsebenen
              </h1>
              <p className="text-xl text-foreground/80 leading-relaxed">
                Beim Holotropen Atmen können verschiedene Ebenen der Psyche
                zugänglich werden – von biografischen Erinnerungen bis hin
                zu transpersonalen Erfahrungen.
              </p>
            </header>

            <div className="prose prose-lg prose-stone max-w-none">
              <p className="body-text text-foreground/90 mb-6">
                Stanislav Grof erkannte durch seine Forschung, dass das menschliche
                Bewusstsein weit mehr umfasst als die klassische Psychologie annahm.
                Beim Holotropen Atmen können fünf verschiedene Erfahrungsebenen
                zugänglich werden, die alle ihr eigenes Heilungspotenzial bergen.
              </p>

              {/* Level 1 */}
              <div className="bg-card rounded-xl p-6 border border-border my-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 rounded-full bg-primary text-white font-jost font-bold flex items-center justify-center text-sm">1</span>
                  <h2 className="heading-3 text-foreground">Psychodynamisch-Biografische Ebene</h2>
                </div>
                <p className="text-foreground/80 mb-4">
                  Diese Dimension umfasst lebensgeschichtliche Erfahrungen, wie man sie
                  auch aus der traditionellen Psychotherapie kennt – Kindheitserinnerungen,
                  unverarbeitete Erlebnisse, verdrängte Emotionen.
                </p>
                <p className="text-foreground/80">
                  <strong>Besonderheit:</strong> Im Unterschied zu gesprächsorientierten
                  Verfahren werden diese Erfahrungen beim Holotropen Atmen viel intensiver
                  und körperlich erlebt. Gefühle können sich vollständig entfalten und
                  dadurch integriert werden.
                </p>
              </div>

              {/* Level 2 */}
              <div className="bg-card rounded-xl p-6 border border-border my-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 rounded-full bg-primary text-white font-jost font-bold flex items-center justify-center text-sm">2</span>
                  <h2 className="heading-3 text-foreground">Perinatale Ebene (Geburt)</h2>
                </div>
                <p className="text-foreground/80 mb-4">
                  Die Geburtsphase stellt einen einschneidenden Übergang in der
                  Entwicklung des Menschen dar. Teilnehmer können unverarbeitete
                  Geburtserlebnisse neu durchleben.
                </p>
                <p className="text-foreground/80 mb-4">
                  <strong>Typische Erfahrungen:</strong> Erstickungsgefühle, Todesängste,
                  Visionen von Dunkelheit und Enge, gefolgt von Lichtvisionen und
                  Befreiungsgefühlen beim Durchbruch.
                </p>
                <Link href="/ratgeber/perinatale-matrizen" className="text-primary hover:underline font-medium">
                  Mehr über die vier perinatalen Matrizen →
                </Link>
              </div>

              {/* Level 3 */}
              <div className="bg-card rounded-xl p-6 border border-border my-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 rounded-full bg-primary text-white font-jost font-bold flex items-center justify-center text-sm">3</span>
                  <h2 className="heading-3 text-foreground">Pränatale Ebene (Vor der Geburt)</h2>
                </div>
                <p className="text-foreground/80 mb-4">
                  Diese Dimension reicht bis zur Zeugung zurück und umfasst die gesamte
                  Entwicklung im Mutterleib. Sowohl positive als auch belastende
                  Erfahrungen dieser Zeit können erinnert werden.
                </p>
                <p className="text-foreground/80">
                  <strong>Beispiele:</strong> Empfindungen von Geborgenheit oder Bedrohung,
                  Wahrnehmung der emotionalen Zustände der Mutter, oder sogar Erlebnisse
                  wie die Entwicklung des Herzschlags.
                </p>
              </div>

              {/* Level 4 */}
              <div className="bg-card rounded-xl p-6 border border-border my-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 rounded-full bg-primary text-white font-jost font-bold flex items-center justify-center text-sm">4</span>
                  <h2 className="heading-3 text-foreground">Kollektive und Transpersonale Ebene</h2>
                </div>
                <p className="text-foreground/80 mb-4">
                  Hier wird die personale Identität erweitert. Das individuelle Selbst
                  kann überschritten werden, und Erfahrungen jenseits der gewöhnlichen
                  Grenzen von Raum und Zeit werden möglich.
                </p>
                <p className="text-foreground/80">
                  <strong>Typische Erfahrungen:</strong>
                </p>
                <ul className="list-disc list-inside space-y-2 text-foreground/80 mt-2">
                  <li>Außerkörperliche Erlebnisse</li>
                  <li>Begegnungen mit Verstorbenen</li>
                  <li>Eintauchen in fremde Zeit- und Kulturräume</li>
                  <li>Identifikation mit anderen Lebewesen</li>
                  <li>Schamanische Reisen</li>
                  <li>Zugang zu kollektiven Mythen und Archetypen</li>
                </ul>
              </div>

              {/* Level 5 */}
              <div className="bg-card rounded-xl p-6 border border-border my-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 rounded-full bg-primary text-white font-jost font-bold flex items-center justify-center text-sm">5</span>
                  <h2 className="heading-3 text-foreground">Spirituelle Ebene</h2>
                </div>
                <p className="text-foreground/80 mb-4">
                  Das &quot;kosmische Bewusstsein&quot; kann den Menschen durchströmen mit
                  intensiven Gefühlen von Liebe, Glück und Demut. Existenzielle Fragen
                  können Antworten finden.
                </p>
                <p className="text-foreground/80">
                  <strong>Typische Erfahrungen:</strong> Einheitserfahrungen, mystische
                  Zustände, Begegnung mit dem Göttlichen, Gefühl der Verbundenheit
                  mit allem, tiefe Einsichten über die Natur der Existenz.
                </p>
              </div>

              <h2 className="heading-2 text-foreground mt-12 mb-6">Was bestimmt die Erfahrung?</h2>
              <p className="body-text text-foreground/90 mb-6">
                Es ist nicht vorhersagbar, welche Erfahrungsebene bei einer Session
                zugänglich wird. Das Holotrope Atmen folgt dem Prinzip des &quot;inneren
                Heilers&quot; – die Psyche selbst wählt, was gerade verarbeitet werden
                soll und kann.
              </p>
              <p className="body-text text-foreground/90 mb-6">
                Grof betont, dass der Therapeut nicht der aktiv Handelnde ist,
                &quot;sondern jemand, der intelligent mit den inneren Heilungskräften
                kooperiert.&quot;
              </p>

              <blockquote className="border-l-4 border-primary pl-6 italic text-foreground/80 my-8">
                &quot;Im veränderten Bewusstseinszustand kann man sich plötzlich nicht
                mehr als vereinzelt und abgegrenzt, sondern vielmehr durchlässig
                und transparent, verbunden mit allem erleben.&quot;
              </blockquote>

              <div className="bg-primary/10 border border-primary/30 rounded-2xl p-8 mt-12">
                <h3 className="heading-3 text-foreground mb-4">
                  Die Ebenen selbst erfahren
                </h3>
                <p className="body-text text-foreground/90 mb-6">
                  Jede Erfahrung beim Holotropen Atmen ist einzigartig. Unsere
                  erfahrenen Therapeuten begleiten Sie sicher, egal welche
                  Erfahrungsebene zugänglich wird.
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
                  href="/ratgeber/spirituelle-krisen"
                  className="group block bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all"
                >
                  <h4 className="font-jost font-semibold text-foreground group-hover:text-primary transition-colors">
                    Spirituelle Krisen
                  </h4>
                  <p className="text-foreground/70 text-sm mt-2">
                    Wenn sich das Bewusstsein öffnet
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
