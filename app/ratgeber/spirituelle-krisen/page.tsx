import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Spirituelle Krisen - Wenn sich das Bewusstsein öffnet",
  description:
    "Spirituelle Krisen sind intensive Transformationsprozesse. Erfahren Sie, was sie auslöst, wie man sie erkennt und warum sie Chancen für Wachstum bieten.",
  openGraph: {
    title: "Spirituelle Krisen | Anda-Atmen",
    description: "Intensive Transformationsprozesse verstehen und begleiten.",
  },
};

export default function SpirituellKrisenPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Spirituelle Krisen - Wenn sich das Bewusstsein öffnet",
    description: "Spirituelle Krisen sind intensive Transformationsprozesse mit großem Wachstumspotenzial.",
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
              <li className="text-foreground">Spirituelle Krisen</li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <header className="mb-12">
              <div className="flex items-center gap-4 text-foreground/60 text-sm mb-4">
                <span>9 Min. Lesezeit</span>
              </div>
              <h1 className="heading-1 text-foreground mb-6">
                Spirituelle Krisen
              </h1>
              <p className="text-xl text-foreground/80 leading-relaxed">
                Wenn sich das Alltagsbewusstsein für ungewöhnliche Erfahrungen öffnet,
                kann dies herausfordernd sein – aber auch eine Chance für tiefgreifende
                Transformation.
              </p>
            </header>

            <div className="prose prose-lg prose-stone max-w-none">
              <h2 className="heading-2 text-foreground mt-12 mb-6">Was sind Spirituelle Krisen?</h2>
              <p className="body-text text-foreground/90 mb-6">
                Der Begriff &quot;Spirituelle Krise&quot; wurde von Stanislav und Christina Grof
                in die transpersonale Psychologie eingeführt. Sie beschreiben damit
                ungewöhnliche Erlebnissequenzen, die ohne Vorwarnung die Grundfesten
                der Persönlichkeit erschüttern können.
              </p>
              <p className="body-text text-foreground/90 mb-6">
                In spirituellen Krisen öffnet sich das Alltagsbewusstsein für
                ungewöhnliche Erfahrungen. Es ist das Einbrechen einer größeren
                Dimension in unser Leben – eine totale Involvierung in einen
                Prozess der Öffnung, Reinigung und Transformation.
              </p>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
                <h4 className="font-jost font-semibold text-amber-800 mb-2">
                  Wichtiger Unterschied
                </h4>
                <p className="text-amber-700 text-sm">
                  Spirituelle Krisen können leicht missverstanden werden, denn sie
                  weisen auch Phänomene auf, die spirituell unerfahrene Fachleute
                  psychopathologisch deuten könnten. Eine fehlerhafte Diagnose kann
                  zu ungünstigen Behandlungsansätzen führen.
                </p>
              </div>

              <h2 className="heading-2 text-foreground mt-12 mb-6">Charakteristische Merkmale</h2>
              <p className="body-text text-foreground/90 mb-6">
                Spirituelle Krisen sind Durchbrüche, die mit spirituellen Impulsen
                verbunden sind. Sie haben die Qualität von Aufrufen zu:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/90 mb-6">
                <li>Mehr Tiefe im Leben</li>
                <li>Weniger Ego und mehr Authentizität</li>
                <li>Einbezug des Göttlichen oder Transzendenten</li>
                <li>Überwindung alter, überholter Lebensmuster</li>
              </ul>

              <h2 className="heading-2 text-foreground mt-12 mb-6">Mögliche Auslöser</h2>
              <p className="body-text text-foreground/90 mb-6">
                Spirituelle Krisen können durch verschiedene Ereignisse ausgelöst werden:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/90 mb-6">
                <li>Intensive Meditationspraktiken</li>
                <li>Holotropes Atmen oder andere Atemtechniken</li>
                <li>Extreme Lebensereignisse (Verlust, Krankheit, Nahtod)</li>
                <li>Spontane mystische Erfahrungen</li>
                <li>Intensive körperliche Praktiken (Yoga, Kampfkunst)</li>
                <li>Manchmal auch ohne erkennbaren äußeren Anlass</li>
              </ul>

              <h2 className="heading-2 text-foreground mt-12 mb-6">Typische Erfahrungen</h2>
              <p className="body-text text-foreground/90 mb-6">
                Während spiritueller Krisen können verschiedene Phänomene auftreten:
              </p>
              <div className="bg-card rounded-xl p-6 border border-border my-8">
                <ul className="space-y-3 text-foreground/80">
                  <li>Sich außerhalb des Körpers erleben</li>
                  <li>Zukünftige Ereignisse vorhersehen</li>
                  <li>Begegnungen mit verstorbenen Angehörigen</li>
                  <li>Bewegung in fremden Zeit- und Kulturräumen</li>
                  <li>Identifikation mit anderen Lebewesen</li>
                  <li>Gefühl, nicht mehr vereinzelt, sondern verbunden mit allem zu sein</li>
                  <li>Intensive Licht- oder Energieerfahrungen</li>
                  <li>Tiefe existenzielle Einsichten</li>
                </ul>
              </div>

              <h2 className="heading-2 text-foreground mt-12 mb-6">Warum alte Strategien nicht funktionieren</h2>
              <p className="body-text text-foreground/90 mb-6">
                Ein wichtiges Merkmal spiritueller Krisen ist, dass alte Bewältigungsmechanismen
                nicht mehr funktionieren. Das ist kein Zufall – diese Strategien sind
                überholt und stehen der Entwicklung im Weg.
              </p>
              <p className="body-text text-foreground/90 mb-6">
                Der Versuch, die Erfahrungen zu unterdrücken oder zu &quot;kontrollieren&quot;,
                verlängert oft nur die Krise. Stattdessen ist ein bewusstes Hingeben
                an den Prozess hilfreich.
              </p>

              <blockquote className="border-l-4 border-primary pl-6 italic text-foreground/80 my-8">
                &quot;Bei angemessener Unterstützung führen spirituelle Krisen zu einem
                erweiterten Lebenshorizont und tieferen Daseinsgefühl.&quot;
              </blockquote>

              <h2 className="heading-2 text-foreground mt-12 mb-6">Das transformative Potenzial</h2>
              <p className="body-text text-foreground/90 mb-6">
                Spirituelle Krisen sind wichtige Reifungsprozesse. Bei richtiger
                Begleitung können sie führen zu:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/90 mb-6">
                <li>Erweitertem Lebenshorizont</li>
                <li>Tieferem Gefühl für das eigene Dasein</li>
                <li>Größerer Authentizität</li>
                <li>Vertiefter spiritueller Verbindung</li>
                <li>Abbau tiefer Ängste</li>
                <li>Mehr Mitgefühl und Verbundenheit</li>
              </ul>

              <h2 className="heading-2 text-foreground mt-12 mb-6">Richtige Begleitung</h2>
              <p className="body-text text-foreground/90 mb-6">
                Zur Praxis transpersonaler Therapie gehört auch die Begleitung von
                Menschen mit außergewöhnlichen Seinserfahrungen und spirituellen Krisen.
                Es braucht Therapeuten, die diese Zustände nicht pathologisieren,
                sondern als Teil eines natürlichen Entwicklungsprozesses verstehen.
              </p>
              <p className="body-text text-foreground/90 mb-6">
                Medikamentöse Behandlung von spirituellen Krisen dämpft zwar
                vorübergehend die Symptome, behindert aber das bewusste Wachstum
                und die Integration der Erfahrungen.
              </p>

              <div className="bg-primary/10 border border-primary/30 rounded-2xl p-8 mt-12">
                <h3 className="heading-3 text-foreground mb-4">
                  Professionelle Begleitung
                </h3>
                <p className="body-text text-foreground/90 mb-6">
                  Unsere Therapeuten sind in der transpersonalen Tradition ausgebildet
                  und können auch intensive Erfahrungen kompetent begleiten.
                </p>
                <a href="mailto:anda.atmen@gmail.com" className="btn-primary inline-block">
                  Kontakt aufnehmen
                </a>
              </div>
            </div>

            <div className="mt-16 pt-12 border-t border-border">
              <h3 className="heading-3 text-foreground mb-6">Weiterführende Artikel</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                <Link
                  href="/ratgeber/erfahrungsebenen"
                  className="group block bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all"
                >
                  <h4 className="font-jost font-semibold text-foreground group-hover:text-primary transition-colors">
                    Die fünf Erfahrungsebenen
                  </h4>
                  <p className="text-foreground/70 text-sm mt-2">
                    Welche Ebenen beim Holotropen Atmen zugänglich werden
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
