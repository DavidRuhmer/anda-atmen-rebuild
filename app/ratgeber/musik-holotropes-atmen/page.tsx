import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Die Rolle der Musik beim Holotropen Atmen",
  description:
    "Musik ist ein zentrales Element beim Holotropen Atmen. Erfahren Sie, wie speziell ausgewählte Musik den Atemprozess unterstützt und vertiefte Erfahrungen ermöglicht.",
  openGraph: {
    title: "Musik beim Holotropen Atmen | Anda-Atmen",
    description: "Wie Musik den Atemprozess unterstützt und transformative Erfahrungen ermöglicht.",
  },
};

export default function MusikHolotropesAtmenPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Die Rolle der Musik beim Holotropen Atmen",
    description: "Musik ist ein zentrales Element beim Holotropen Atmen und unterstützt den Transformationsprozess.",
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
              <li className="text-foreground">Musik beim Holotropen Atmen</li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <header className="mb-12">
              <div className="flex items-center gap-4 text-foreground/60 text-sm mb-4">
                <span>7 Min. Lesezeit</span>
              </div>
              <h1 className="heading-1 text-foreground mb-6">
                Die Rolle der Musik
              </h1>
              <p className="text-xl text-foreground/80 leading-relaxed">
                Musik ist neben der beschleunigten Atmung das wichtigste Element
                beim Holotropen Atmen. Sie trägt entscheidend zur Vertiefung der
                Erfahrung bei.
              </p>
            </header>

            <div className="prose prose-lg prose-stone max-w-none">
              <h2 className="heading-2 text-foreground mt-12 mb-6">Warum Musik so wichtig ist</h2>
              <p className="body-text text-foreground/90 mb-6">
                Stanislav Grof erkannte früh, dass Musik ein mächtiges Werkzeug ist,
                um veränderte Bewusstseinszustände zu induzieren und zu vertiefen.
                Bei der Entwicklung des Holotropen Atmens wurde die Musik zu einem
                der drei Grundpfeiler der Methode – neben der beschleunigten Atmung
                und der Körperarbeit.
              </p>
              <p className="body-text text-foreground/90 mb-6">
                Die Musik dient mehreren Zwecken: Sie mobilisiert blockierte Emotionen,
                hilft beim Ausdruck schwieriger Erfahrungen und trägt zur Integration
                und zum Abschluss bei. Sie &quot;überwindet Widerstände und verstärkt
                relevantes psychisches Material&quot;.
              </p>

              <h2 className="heading-2 text-foreground mt-12 mb-6">Der musikalische Verlauf einer Session</h2>
              <p className="body-text text-foreground/90 mb-6">
                Die Musikauswahl folgt einem sorgfältig strukturierten Verlauf,
                der die verschiedenen Phasen des Atemprozesses unterstützt:
              </p>

              {/* Phase 1 */}
              <div className="bg-card rounded-xl p-6 border border-border my-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 rounded-full bg-primary text-white font-jost font-bold flex items-center justify-center text-sm">1</span>
                  <h3 className="heading-3 text-foreground">Eröffnungsphase</h3>
                </div>
                <p className="text-foreground/80 mb-4">
                  Die Session beginnt mit aktivierender, rhythmischer Musik –
                  oft Trommelmusik aus verschiedenen Kulturen. Diese unterstützt
                  den Einstieg in die beschleunigte Atmung und hilft, den Körper
                  zu mobilisieren.
                </p>
                <p className="text-foreground/70 text-sm">
                  <strong>Typische Musikstile:</strong> Afrikanische Trommeln,
                  schamanische Rhythmen, kraftvolle ethnische Musik
                </p>
              </div>

              {/* Phase 2 */}
              <div className="bg-card rounded-xl p-6 border border-border my-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 rounded-full bg-primary text-white font-jost font-bold flex items-center justify-center text-sm">2</span>
                  <h3 className="heading-3 text-foreground">Aufbauphase</h3>
                </div>
                <p className="text-foreground/80 mb-4">
                  Nach etwa 30-45 Minuten wird die Musik intensiver und
                  emotional aufgeladener. Dies ist die Phase, in der tiefere
                  emotionale Durchbrüche möglich werden.
                </p>
                <p className="text-foreground/70 text-sm">
                  <strong>Typische Musikstile:</strong> Dramatische Filmmusik,
                  orchestrale Werke, kraftvolle klassische Stücke
                </p>
              </div>

              {/* Phase 3 */}
              <div className="bg-card rounded-xl p-6 border border-border my-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 rounded-full bg-primary text-white font-jost font-bold flex items-center justify-center text-sm">3</span>
                  <h3 className="heading-3 text-foreground">Höhepunkt (Breakthrough)</h3>
                </div>
                <p className="text-foreground/80 mb-4">
                  In der Mitte der Session erreicht die Musik ihren emotionalen
                  Höhepunkt. Hier werden die intensivsten Stücke gespielt, die
                  tiefe kathartische Erfahrungen ermöglichen können.
                </p>
                <p className="text-foreground/70 text-sm">
                  <strong>Typische Musikstile:</strong> Sakrale Musik, epische
                  Filmmusik, emotionale Chorwerke, Musik mit transzendenter Qualität
                </p>
              </div>

              {/* Phase 4 */}
              <div className="bg-card rounded-xl p-6 border border-border my-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 rounded-full bg-primary text-white font-jost font-bold flex items-center justify-center text-sm">4</span>
                  <h3 className="heading-3 text-foreground">Übergangsphase</h3>
                </div>
                <p className="text-foreground/80 mb-4">
                  Nach dem emotionalen Höhepunkt wird die Musik allmählich
                  sanfter und unterstützt den Übergang zu innerem Frieden
                  und Integration.
                </p>
                <p className="text-foreground/70 text-sm">
                  <strong>Typische Musikstile:</strong> Meditative Musik,
                  sanfte Weltmusik, beruhigende instrumentale Stücke
                </p>
              </div>

              {/* Phase 5 */}
              <div className="bg-card rounded-xl p-6 border border-border my-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 rounded-full bg-primary text-white font-jost font-bold flex items-center justify-center text-sm">5</span>
                  <h3 className="heading-3 text-foreground">Integrationsphase</h3>
                </div>
                <p className="text-foreground/80 mb-4">
                  Die Session endet mit ruhiger, integrierender Musik. Diese
                  unterstützt das sanfte Zurückkehren ins Alltagsbewusstsein
                  und die Integration der gemachten Erfahrungen.
                </p>
                <p className="text-foreground/70 text-sm">
                  <strong>Typische Musikstile:</strong> Spirituelle Musik,
                  Naturklänge, herzöffnende meditative Kompositionen
                </p>
              </div>

              <h2 className="heading-2 text-foreground mt-12 mb-6">Prinzipien der Musikauswahl</h2>
              <p className="body-text text-foreground/90 mb-6">
                Die Musik beim Holotropen Atmen folgt bestimmten Grundsätzen:
              </p>
              <ul className="list-disc list-inside space-y-3 text-foreground/90 mb-6">
                <li><strong>Keine bekannten Texte:</strong> Liedtexte können ablenkend wirken und den inneren Prozess stören. Bevorzugt wird instrumentale Musik oder Gesang in unbekannten Sprachen.</li>
                <li><strong>Hohe technische Qualität:</strong> Die Musik sollte klar und rauschfrei sein, um eine optimale Wirkung zu erzielen.</li>
                <li><strong>Kulturelle Vielfalt:</strong> Musik aus verschiedenen Kulturen und Epochen wird eingesetzt, um unterschiedliche archetypische Ebenen anzusprechen.</li>
                <li><strong>Emotionale Echtheit:</strong> Authentische, emotional tiefe Musik wird gegenüber kommerzieller Produktion bevorzugt.</li>
              </ul>

              <h2 className="heading-2 text-foreground mt-12 mb-6">Die Wirkung auf das Bewusstsein</h2>
              <p className="body-text text-foreground/90 mb-6">
                Musik hat die Fähigkeit, tiefe Schichten des Unbewussten zu
                erreichen. In Kombination mit der beschleunigten Atmung wird
                dieser Effekt verstärkt. Die Musik kann:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/90 mb-6">
                <li>Verdrängte Emotionen an die Oberfläche bringen</li>
                <li>Körperliche Empfindungen verstärken</li>
                <li>Innere Bilder und Visionen auslösen</li>
                <li>Den Zugang zu transpersonalen Erfahrungen erleichtern</li>
                <li>Heilungsprozesse unterstützen und vertiefen</li>
              </ul>

              <blockquote className="border-l-4 border-primary pl-6 italic text-foreground/80 my-8">
                &quot;Die Musik mobilisiert emotionale Energie, verstärkt relevantes
                psychisches Material und bringt unbewusste Inhalte an die Oberfläche.&quot;
                <footer className="text-sm mt-2 not-italic">— Stanislav Grof</footer>
              </blockquote>

              <h2 className="heading-2 text-foreground mt-12 mb-6">Die Kunst des &quot;Music Facilitating&quot;</h2>
              <p className="body-text text-foreground/90 mb-6">
                Die Auswahl und das Timing der Musik erfordert Erfahrung und
                Einfühlungsvermögen. Der Musikfacilitator beobachtet die Gruppe
                und passt die Musik an den kollektiven Prozess an. Manchmal
                erfordert eine Gruppe mehr aktivierende Energie, manchmal mehr
                Unterstützung für sanfte Integration.
              </p>
              <p className="body-text text-foreground/90 mb-6">
                Die Musikauswahl ist dabei nicht starr festgelegt, sondern
                wird flexibel an die Bedürfnisse der Gruppe angepasst. Ein
                erfahrener Facilitator &quot;liest&quot; die Energie im Raum und wählt
                die Musik entsprechend aus.
              </p>

              <div className="bg-primary/10 border border-primary/30 rounded-2xl p-8 mt-12">
                <h3 className="heading-3 text-foreground mb-4">
                  Die Kraft der Musik erleben
                </h3>
                <p className="body-text text-foreground/90 mb-6">
                  In unseren Seminaren erleben Sie, wie sorgfältig ausgewählte
                  Musik Ihren Atemprozess unterstützt und vertieft.
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
                  href="/ratgeber/anleitung-und-ablauf"
                  className="group block bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all"
                >
                  <h4 className="font-jost font-semibold text-foreground group-hover:text-primary transition-colors">
                    Anleitung und Ablauf
                  </h4>
                  <p className="text-foreground/70 text-sm mt-2">
                    Der vollständige Ablauf einer Atemsession
                  </p>
                </Link>
                <Link
                  href="/ratgeber/wirkung-und-erfahrungen"
                  className="group block bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all"
                >
                  <h4 className="font-jost font-semibold text-foreground group-hover:text-primary transition-colors">
                    Wirkung und Erfahrungen
                  </h4>
                  <p className="text-foreground/70 text-sm mt-2">
                    Was während einer Session passiert
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
