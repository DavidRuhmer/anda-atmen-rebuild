import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Anleitung und Ablauf einer Holotropen Atemsession",
  description:
    "Wie läuft eine Holotrope Atemsession ab? Vorbereitung, Atmung, Musik, Körperarbeit und Integration. Alles was Sie wissen müssen.",
  openGraph: {
    title: "Ablauf einer Holotropen Atemsession | Anda-Atmen",
    description: "Schritt für Schritt durch die Holotrope Atemerfahrung.",
  },
};

export default function AnleitungAblaufPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Anleitung und Ablauf einer Holotropen Atemsession",
    description: "Der vollständige Ablauf einer Holotropen Atemsession erklärt.",
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
              <li className="text-foreground">Anleitung und Ablauf</li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <header className="mb-12">
              <h1 className="heading-1 text-foreground mb-6">
                Anleitung und Ablauf
              </h1>
              <p className="text-xl text-foreground/80 leading-relaxed">
                Was passiert bei einer Holotropen Atemsession? Eine detaillierte
                Beschreibung des Ablaufs von der Vorbereitung bis zur Integration.
              </p>
            </header>

            <div className="prose prose-lg prose-stone max-w-none">
              <h2 className="heading-2 text-foreground mt-12 mb-6">Die Grundelemente</h2>
              <p className="body-text text-foreground/90 mb-6">
                Das Holotrope Atmen kombiniert drei wesentliche Elemente, um
                veränderte Bewusstseinszustände hervorzurufen:
              </p>
              <ul className="list-disc list-inside space-y-3 text-foreground/90 mb-6">
                <li><strong>Beschleunigte Atmung:</strong> Tieferes und schnelleres Atmen als gewöhnlich</li>
                <li><strong>Evokative Musik:</strong> Speziell ausgewählte Musik, die den Prozess unterstützt</li>
                <li><strong>Körperarbeit:</strong> Bei Bedarf gezielte körperliche Interventionen</li>
              </ul>

              <h2 className="heading-2 text-foreground mt-12 mb-6">Der Raum und das Setting</h2>
              <p className="body-text text-foreground/90 mb-6">
                Die Session findet in einem abgedunkelten Raum statt. Arbeitsinseln
                mit Matten und Kissen werden eingerichtet. Typischerweise nehmen
                16-30 Personen teil, die in Paaren arbeiten.
              </p>
              <p className="body-text text-foreground/90 mb-6">
                Jedes Paar besteht aus einem &quot;Atmer&quot; (der die Erfahrung macht) und
                einem &quot;Sitter&quot; (der begleitet). Nach einer Session werden die
                Rollen getauscht.
              </p>

              <h2 className="heading-2 text-foreground mt-12 mb-6">Der Ablauf im Detail</h2>

              {/* Phase 1 */}
              <div className="bg-card rounded-xl p-6 border border-border my-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 rounded-full bg-primary text-white font-jost font-bold flex items-center justify-center text-sm">1</span>
                  <h3 className="heading-3 text-foreground">Vorbereitung und Entspannung</h3>
                </div>
                <p className="text-foreground/80">
                  Die Session beginnt mit einer Entspannungsübung. Der Atmer liegt auf
                  der Matte, der Sitter sitzt daneben. Es wird eine Atmosphäre von
                  Sicherheit und Vertrauen geschaffen.
                </p>
              </div>

              {/* Phase 2 */}
              <div className="bg-card rounded-xl p-6 border border-border my-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 rounded-full bg-primary text-white font-jost font-bold flex items-center justify-center text-sm">2</span>
                  <h3 className="heading-3 text-foreground">Beginn der Atmung</h3>
                </div>
                <p className="text-foreground/80 mb-4">
                  Die Teilnehmenden werden aufgefordert, &quot;schneller und dynamischer
                  zu atmen und alles zuzulassen, was sich an Körpergefühlen, Bildern,
                  Tönen und Bewegungen einstellt.&quot;
                </p>
                <p className="text-foreground/80">
                  Die Musik setzt ein und unterstützt den Atemprozess. Es gibt keine
                  &quot;richtige&quot; Art zu atmen – jeder findet seinen eigenen Rhythmus.
                </p>
              </div>

              {/* Phase 3 */}
              <div className="bg-card rounded-xl p-6 border border-border my-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 rounded-full bg-primary text-white font-jost font-bold flex items-center justify-center text-sm">3</span>
                  <h3 className="heading-3 text-foreground">Die Hauptphase</h3>
                </div>
                <p className="text-foreground/80 mb-4">
                  Die Atemsession dauert typischerweise 2-4 Stunden. Während dieser
                  Zeit kann eine Vielzahl von Erfahrungen auftreten: Körperempfindungen,
                  Emotionen, Bilder, Erinnerungen oder transpersonale Erlebnisse.
                </p>
                <p className="text-foreground/80">
                  Der Sitter achtet darauf, dass der Atmer sich sicher fühlt, besonders
                  bei intensiven emotionalen Regungen oder starkem körperbetontem Ausdruck.
                </p>
              </div>

              {/* Phase 4 */}
              <div className="bg-card rounded-xl p-6 border border-border my-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 rounded-full bg-primary text-white font-jost font-bold flex items-center justify-center text-sm">4</span>
                  <h3 className="heading-3 text-foreground">Körperarbeit (bei Bedarf)</h3>
                </div>
                <p className="text-foreground/80">
                  Manchmal bleiben nach der Atemsession körperliche Spannungen zurück.
                  Der Therapeut kann dann gezielte Körperarbeit anbieten – sanfte
                  Berührungen oder Widerstand gegen bestimmte Bewegungen – um diese
                  Spannungen zu lösen.
                </p>
              </div>

              {/* Phase 5 */}
              <div className="bg-card rounded-xl p-6 border border-border my-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 rounded-full bg-primary text-white font-jost font-bold flex items-center justify-center text-sm">5</span>
                  <h3 className="heading-3 text-foreground">Integration durch Malen</h3>
                </div>
                <p className="text-foreground/80">
                  Nach der Atemsession verarbeiten die Erfahrenden ihre Erlebnisse
                  durch intuitives Malen – oft in Form von Mandalas. Dies hilft,
                  innere Bilder festzuhalten und symbolisch zur Integration beizutragen.
                </p>
              </div>

              {/* Phase 6 */}
              <div className="bg-card rounded-xl p-6 border border-border my-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 rounded-full bg-primary text-white font-jost font-bold flex items-center justify-center text-sm">6</span>
                  <h3 className="heading-3 text-foreground">Gruppenaustausch</h3>
                </div>
                <p className="text-foreground/80">
                  Die Erfahrungen werden in der Gruppe besprochen. Die Betonung liegt
                  auf intuitivem Sinnverstehen, weniger auf Erklären oder Interpretieren.
                  Der volle Sinn einer Erfahrung kann sich auch erst später durch
                  Träume, äußere Ereignisse oder Gespräche erschließen.
                </p>
              </div>

              <h2 className="heading-2 text-foreground mt-12 mb-6">Die Rolle der Musik</h2>
              <p className="body-text text-foreground/90 mb-6">
                Die Musikauswahl folgt einem strukturierten Verlauf:
              </p>
              <ul className="list-disc list-inside space-y-3 text-foreground/90 mb-6">
                <li><strong>Anfangsphase:</strong> Schnellere Rhythmen (oft Trommelmusik), die das beschleunigte Atmen unterstützen</li>
                <li><strong>Mittelteil:</strong> Dramatische ethnische, klassische oder Filmmusik, die emotionale Durchbrüche fördern kann</li>
                <li><strong>Endphase:</strong> Integrierende, langsame oder spirituelle Musik für den Ausklang</li>
              </ul>
              <p className="body-text text-foreground/90 mb-6">
                Die Musik &quot;überwindet Widerstände und verstärkt relevantes psychisches
                Material.&quot;
              </p>

              <h2 className="heading-2 text-foreground mt-12 mb-6">Was das EEG zeigt</h2>
              <p className="body-text text-foreground/90 mb-6">
                Wissenschaftliche Messungen zeigen, dass während der Hyperventilation
                im EEG vorwiegend Theta- und Deltawellen auftreten. Diese Wellenmuster
                werden mit der Aktivierung von Selbstheilungskräften und visionären
                Fähigkeiten in Verbindung gebracht.
              </p>

              <blockquote className="border-l-4 border-primary pl-6 italic text-foreground/80 my-8">
                &quot;Der Therapeut ist nicht der aktiv Handelnde, der Veränderungen
                verursacht, sondern jemand, der intelligent mit den inneren
                Heilungskräften kooperiert.&quot;
                <footer className="text-sm mt-2 not-italic">— Stanislav Grof</footer>
              </blockquote>

              <div className="bg-primary/10 border border-primary/30 rounded-2xl p-8 mt-12">
                <h3 className="heading-3 text-foreground mb-4">
                  Selbst erleben
                </h3>
                <p className="body-text text-foreground/90 mb-6">
                  Erleben Sie den Ablauf einer Holotropen Atemsession selbst.
                  Unsere erfahrenen Seminarleiter begleiten Sie sicher durch
                  den gesamten Prozess.
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
                  href="/ratgeber/was-ist-holotropes-atmen"
                  className="group block bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all"
                >
                  <h4 className="font-jost font-semibold text-foreground group-hover:text-primary transition-colors">
                    Was ist Holotropes Atmen?
                  </h4>
                  <p className="text-foreground/70 text-sm mt-2">
                    Eine Einführung in die Methode
                  </p>
                </Link>
                <Link
                  href="/ratgeber/musik-holotropes-atmen"
                  className="group block bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all"
                >
                  <h4 className="font-jost font-semibold text-foreground group-hover:text-primary transition-colors">
                    Die Rolle der Musik
                  </h4>
                  <p className="text-foreground/70 text-sm mt-2">
                    Wie Musik den Atemprozess unterstützt
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
