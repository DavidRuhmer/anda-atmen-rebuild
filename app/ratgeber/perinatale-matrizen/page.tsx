import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Perinatale Matrizen nach Grof - Die vier Geburtsphasen",
  description:
    "Die vier perinatalen Matrizen (BPM I-IV) nach Stanislav Grof erklären, wie unsere Geburtserfahrung das spätere Leben beeinflusst. Grundlagen der Holotropen Atemarbeit.",
  openGraph: {
    title: "Perinatale Matrizen | Anda-Atmen",
    description: "Wie die Geburtserfahrung unser Leben prägt - Grofs BPM-Modell.",
  },
};

export default function PerinataleMatrizenPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Perinatale Matrizen nach Grof - Die vier Geburtsphasen",
    description: "Die vier perinatalen Matrizen erklären den Einfluss der Geburt auf unser Leben.",
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
              <li className="text-foreground">Perinatale Matrizen</li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <header className="mb-12">
              <h1 className="heading-1 text-foreground mb-6">
                Die Perinatalen Matrizen
              </h1>
              <p className="text-xl text-foreground/80 leading-relaxed">
                Stanislav Grofs bahnbrechendes Konzept über den Einfluss der
                Geburtserfahrung auf unser psychisches Leben.
              </p>
            </header>

            <div className="prose prose-lg prose-stone max-w-none">
              <h2 className="heading-2 text-foreground mt-12 mb-6">Was sind Perinatale Matrizen?</h2>
              <p className="body-text text-foreground/90 mb-6">
                Der Begriff &quot;perinatal&quot; stammt aus dem Griechischen und bedeutet
                &quot;um die Geburt herum&quot;. Stanislav Grof entdeckte bei seiner Forschung,
                dass die Geburtserfahrung tiefgreifende Muster in unserer Psyche hinterlässt,
                die er als &quot;Perinatale Grundmatrizen&quot; (PGM oder englisch BPM - Basic
                Perinatal Matrices) bezeichnete.
              </p>
              <p className="body-text text-foreground/90 mb-6">
                Diese Matrizen sind keine kausalen Erklärungen (&quot;weil die Geburt so war,
                bin ich so&quot;), sondern archetypische Erlebnismuster, die sich im
                biologischen Geburtsvorgang widerspiegeln und unser späteres emotionales
                und spirituelles Leben prägen können.
              </p>

              <h2 className="heading-2 text-foreground mt-12 mb-6">Die vier Perinatalen Matrizen</h2>

              {/* BPM I */}
              <div className="bg-card rounded-xl p-6 border border-border my-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-10 h-10 rounded-full bg-primary/20 text-primary font-jost font-bold flex items-center justify-center">I</span>
                  <h3 className="heading-3 text-foreground">BPM I: Die ozeanische Einheit</h3>
                </div>
                <p className="text-foreground/80 mb-4">
                  <strong>Phase:</strong> Das Leben im Mutterleib vor Beginn der Wehen
                </p>
                <p className="text-foreground/80 mb-4">
                  Diese Matrix repräsentiert die symbiotische Einheit des Fötus mit dem
                  mütterlichen Organismus. Es ist ein Zustand natürlicher Geborgenheit,
                  ein &quot;ozeanisches&quot; Grundgefühl von Einheit und Versorgtsein.
                </p>
                <p className="text-foreground/80 mb-4">
                  <strong>Positive Erfahrung:</strong> Gefühle von kosmischer Einheit,
                  Urvertrauen, tiefem Frieden und Verbundenheit mit allem.
                </p>
                <p className="text-foreground/80">
                  <strong>Mögliche Störungen:</strong> Bei negativen intrauterinen Erfahrungen
                  (Stress der Mutter, Toxine) kann fehlendes Urvertrauen, diffuse Ängste
                  oder ein Gefühl der Bedrohung entstehen.
                </p>
              </div>

              {/* BPM II */}
              <div className="bg-card rounded-xl p-6 border border-border my-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-10 h-10 rounded-full bg-primary/20 text-primary font-jost font-bold flex items-center justify-center">II</span>
                  <h3 className="heading-3 text-foreground">BPM II: Kosmisches Verschlungenwerden</h3>
                </div>
                <p className="text-foreground/80 mb-4">
                  <strong>Phase:</strong> Beginn der Wehen, Gebärmutterhals noch geschlossen
                </p>
                <p className="text-foreground/80 mb-4">
                  Mit dem Einsetzen der Wehen verändert sich die Welt des Fötus dramatisch.
                  Der Druck nimmt zu, aber es gibt noch keinen Ausweg. Dies ist ein Zustand
                  der scheinbaren Ausweglosigkeit.
                </p>
                <p className="text-foreground/80 mb-4">
                  <strong>Typische Erfahrungen:</strong> Gefühle von Gefangenschaft, Enge,
                  Existenzangst, kosmischer Einsamkeit. Das Paradies ist verloren, aber
                  noch kein neuer Weg sichtbar.
                </p>
                <p className="text-foreground/80">
                  <strong>Mögliche Auswirkungen:</strong> Diese Matrix kann sich später als
                  depressive Grundstimmung, Hoffnungslosigkeit oder das Gefühl manifestieren,
                  in ausweglosen Situationen gefangen zu sein.
                </p>
              </div>

              {/* BPM III */}
              <div className="bg-card rounded-xl p-6 border border-border my-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-10 h-10 rounded-full bg-primary/20 text-primary font-jost font-bold flex items-center justify-center">III</span>
                  <h3 className="heading-3 text-foreground">BPM III: Tod-Wiedergeburt-Kampf</h3>
                </div>
                <p className="text-foreground/80 mb-4">
                  <strong>Phase:</strong> Passage durch den Geburtskanal
                </p>
                <p className="text-foreground/80 mb-4">
                  Nun öffnet sich der Gebärmutterhals und der aktive Kampf durch den
                  Geburtskanal beginnt. Es ist ein intensiver Prozess von Druck, Bewegung
                  und extremer Anstrengung.
                </p>
                <p className="text-foreground/80 mb-4">
                  <strong>Typische Erfahrungen:</strong> Intensive körperliche Empfindungen,
                  Gefühle von Aggression und Sexualität, &quot;vulkanische Ekstase&quot;, der
                  Kampf zwischen Leben und Tod.
                </p>
                <p className="text-foreground/80">
                  <strong>Transformatives Potenzial:</strong> Das bewusste Durchleben dieser
                  Matrix kann tiefe Ängste abbauen und die Fähigkeit stärken, Herausforderungen
                  aktiv anzugehen.
                </p>
              </div>

              {/* BPM IV */}
              <div className="bg-card rounded-xl p-6 border border-border my-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-10 h-10 rounded-full bg-primary/20 text-primary font-jost font-bold flex items-center justify-center">IV</span>
                  <h3 className="heading-3 text-foreground">BPM IV: Tod und Wiedergeburt</h3>
                </div>
                <p className="text-foreground/80 mb-4">
                  <strong>Phase:</strong> Der Moment der Geburt
                </p>
                <p className="text-foreground/80 mb-4">
                  Der Kampf ist beendet, das Kind wird geboren. Nach dem intensiven Druck
                  kommt plötzliche Erleichterung, Licht und Weite. Es ist ein symbolischer
                  Tod des alten Zustands und die Geburt in eine neue Existenz.
                </p>
                <p className="text-foreground/80 mb-4">
                  <strong>Typische Erfahrungen:</strong> Befreiung, Erlösung, Neugeburt,
                  spirituelle Öffnung, Gefühle von Liebe und Dankbarkeit, der symbolische
                  &quot;Ich-Tod&quot; und die Wiedergeburt.
                </p>
                <p className="text-foreground/80">
                  <strong>Bedeutung:</strong> Das vollständige Durchleben dieser Matrix
                  kann zu tiefgreifenden spirituellen Erfahrungen und einem Gefühl der
                  Neugeburt führen.
                </p>
              </div>

              <h2 className="heading-2 text-foreground mt-12 mb-6">Therapeutische Bedeutung</h2>
              <p className="body-text text-foreground/90 mb-6">
                Die Arbeit mit den perinatalen Matrizen beim Holotropen Atmen ermöglicht
                es, unverarbeitete Geburtserfahrungen bewusst zu machen und zu integrieren.
                Dies kann befreiend wirken und festgefahrene Lebensmuster lösen.
              </p>
              <p className="body-text text-foreground/90 mb-6">
                Dr. Sylvester Walch betont: &quot;Diese Konzeptionen sind nicht kausal zu
                verstehen. Nicht weil die Geburt so verlaufen ist, sind wir wie wir sind,
                sondern die Geburtserfahrung vermittelt uns bestimmte Grundmuster.&quot;
              </p>

              <blockquote className="border-l-4 border-primary pl-6 italic text-foreground/80 my-8">
                &quot;Die massive Konfrontation mit Tod- und Wiedergeburtsprozessen kann auf
                das Leben eine sehr positive Wirkung haben, weil tiefe Ängste abgebaut werden.&quot;
              </blockquote>

              <div className="bg-primary/10 border border-primary/30 rounded-2xl p-8 mt-12">
                <h3 className="heading-3 text-foreground mb-4">
                  Die Matrizen selbst erfahren
                </h3>
                <p className="body-text text-foreground/90 mb-6">
                  Beim Holotropen Atmen können diese Erfahrungsebenen auf natürliche
                  Weise zugänglich werden. Unsere erfahrenen Therapeuten begleiten
                  Sie sicher durch diesen Prozess.
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
                  href="/ratgeber/stanislav-grof"
                  className="group block bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all"
                >
                  <h4 className="font-jost font-semibold text-foreground group-hover:text-primary transition-colors">
                    Stanislav Grof
                  </h4>
                  <p className="text-foreground/70 text-sm mt-2">
                    Der Begründer des Holotropen Atmens
                  </p>
                </Link>
                <Link
                  href="/ratgeber/erfahrungsebenen"
                  className="group block bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all"
                >
                  <h4 className="font-jost font-semibold text-foreground group-hover:text-primary transition-colors">
                    Die fünf Erfahrungsebenen
                  </h4>
                  <p className="text-foreground/70 text-sm mt-2">
                    Welche Ebenen beim Holotropen Atmen erfahrbar sind
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
