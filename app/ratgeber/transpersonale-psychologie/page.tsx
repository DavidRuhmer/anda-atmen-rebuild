import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Transpersonale Psychologie - Die vierte Kraft der Psychologie",
  description:
    "Die transpersonale Psychologie integriert spirituelle Erfahrungen in die Psychotherapie. Erfahren Sie mehr über diesen Ansatz und seine Verbindung zum Holotropen Atmen.",
  openGraph: {
    title: "Transpersonale Psychologie | Anda-Atmen",
    description: "Brückenschlag zwischen Psychotherapie und Spiritualität.",
  },
};

export default function TranspersonalePsychologiePage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Transpersonale Psychologie - Die vierte Kraft der Psychologie",
    description: "Die transpersonale Psychologie integriert spirituelle Erfahrungen in die Psychotherapie.",
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
              <li className="text-foreground">Transpersonale Psychologie</li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <header className="mb-12">
              <h1 className="heading-1 text-foreground mb-6">
                Transpersonale Psychologie
              </h1>
              <p className="text-xl text-foreground/80 leading-relaxed">
                Die &quot;vierte Kraft&quot; der Psychologie schlägt eine Brücke zwischen
                Psychotherapie und Spiritualität.
              </p>
            </header>

            <div className="prose prose-lg prose-stone max-w-none">
              <h2 className="heading-2 text-foreground mt-12 mb-6">Was ist Transpersonale Psychologie?</h2>
              <p className="body-text text-foreground/90 mb-6">
                Der Begriff &quot;transpersonal&quot; kommt aus dem Lateinischen und bedeutet
                &quot;über das Persönliche hinaus&quot;. Die transpersonale Psychologie beschäftigt
                sich mit Erfahrungen und Zuständen, die über das persönliche Selbst
                hinausgehen und tiefere Ebenen des Bewusstseins, der Spiritualität
                und der menschlichen Existenz einbeziehen.
              </p>
              <p className="body-text text-foreground/90 mb-6">
                Während konventionelle Psychotherapie-Richtungen eine &quot;reife Persönlichkeit&quot;
                als Ziel anstreben, bezieht die transpersonale Psychologie die religiöse
                und spirituelle Dimension der Psyche mit ein.
              </p>

              <h2 className="heading-2 text-foreground mt-12 mb-6">Die vier Kräfte der Psychologie</h2>
              <div className="space-y-4 mb-8">
                <div className="flex gap-4 items-start">
                  <span className="w-8 h-8 rounded-full bg-foreground/10 text-foreground font-jost font-bold flex items-center justify-center text-sm flex-shrink-0">1</span>
                  <div>
                    <p className="font-jost font-medium text-foreground">Psychoanalyse (Freud)</p>
                    <p className="text-foreground/70 text-sm">Fokus auf das Unbewusste und frühe Kindheitserfahrungen</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="w-8 h-8 rounded-full bg-foreground/10 text-foreground font-jost font-bold flex items-center justify-center text-sm flex-shrink-0">2</span>
                  <div>
                    <p className="font-jost font-medium text-foreground">Behaviorismus</p>
                    <p className="text-foreground/70 text-sm">Fokus auf beobachtbares Verhalten und Konditionierung</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="w-8 h-8 rounded-full bg-foreground/10 text-foreground font-jost font-bold flex items-center justify-center text-sm flex-shrink-0">3</span>
                  <div>
                    <p className="font-jost font-medium text-foreground">Humanistische Psychologie (Maslow, Rogers)</p>
                    <p className="text-foreground/70 text-sm">Fokus auf Selbstverwirklichung und menschliches Potenzial</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="w-8 h-8 rounded-full bg-primary text-white font-jost font-bold flex items-center justify-center text-sm flex-shrink-0">4</span>
                  <div>
                    <p className="font-jost font-medium text-foreground">Transpersonale Psychologie</p>
                    <p className="text-foreground/70 text-sm">Bezieht spirituelle Erfahrungen und erweiterte Bewusstseinszustände ein</p>
                  </div>
                </div>
              </div>

              <h2 className="heading-2 text-foreground mt-12 mb-6">Ken Wilbers Bewusstseinsmodell</h2>
              <p className="body-text text-foreground/90 mb-6">
                Der Bewusstseinsphilosoph Ken Wilber beschreibt in seinem &quot;Atman Projekt&quot;
                drei Bewusstseinsstufen, die der Mensch durchlaufen kann:
              </p>
              <div className="bg-card rounded-xl p-6 border border-border my-8">
                <ul className="space-y-4">
                  <li>
                    <strong className="text-foreground">Präpersonal:</strong>
                    <span className="text-foreground/80"> Das unbewusste Stadium der frühen Kindheitsentwicklung</span>
                  </li>
                  <li>
                    <strong className="text-foreground">Personal:</strong>
                    <span className="text-foreground/80"> Das Stadium des Selbstbewusstseins und des reifen Ich</span>
                  </li>
                  <li>
                    <strong className="text-foreground">Transpersonal:</strong>
                    <span className="text-foreground/80"> Das Überbewusstsein, der mystische Weg, bei dem das Ich
                    sich einer größeren Einheit (dem Selbst) unterordnet</span>
                  </li>
                </ul>
              </div>
              <p className="body-text text-foreground/90 mb-6">
                Wichtig: Das Ich verliert auf der transpersonalen Ebene nicht seine
                Bedeutung, sondern ordnet sich einem größeren Ganzen unter.
              </p>

              <h2 className="heading-2 text-foreground mt-12 mb-6">Methoden der Transpersonalen Therapie</h2>
              <p className="body-text text-foreground/90 mb-6">
                Verschiedene therapeutische Ansätze gehören zur transpersonalen Tradition:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/90 mb-6">
                <li>C.G. Jungs Analytische Psychologie</li>
                <li>Psychosynthese (Roberto Assagioli)</li>
                <li><strong>Holotropes Atmen (Stanislav Grof)</strong></li>
                <li>Initiatische Therapie (Graf Dürckheim)</li>
                <li>Prozessarbeit (Arnold Mindell)</li>
                <li>Meditation und Achtsamkeitspraktiken</li>
              </ul>

              <h2 className="heading-2 text-foreground mt-12 mb-6">Holotropes Atmen als transpersonale Methode</h2>
              <p className="body-text text-foreground/90 mb-6">
                Das Holotrope Atmen ist eine der wichtigsten Methoden der transpersonalen
                Psychotherapie. Durch veränderte Bewusstseinszustände werden Erfahrungen
                möglich, die über das gewöhnliche Alltagsbewusstsein hinausgehen.
              </p>
              <p className="body-text text-foreground/90 mb-6">
                Die Methode ermöglicht einen Zugang zu verschiedenen Erfahrungsebenen –
                von biografischen Erinnerungen über Geburtserfahrungen bis hin zu
                transpersonalen und spirituellen Erlebnissen.
              </p>

              <blockquote className="border-l-4 border-primary pl-6 italic text-foreground/80 my-8">
                &quot;Die transpersonale Psychotherapie versucht einen Brückenschlag zwischen
                Psychotherapie und Spiritualität zu schaffen, ohne sich auf eine
                bestimmte Religion festzulegen.&quot;
              </blockquote>

              <h2 className="heading-2 text-foreground mt-12 mb-6">Grundvoraussetzung für die Praxis</h2>
              <p className="body-text text-foreground/90 mb-6">
                Die Arbeit mit transpersonalen Methoden erfordert eine fundierte
                Ausbildung sowohl in personalen als auch in transpersonalen Techniken.
                Unsere Seminarleiter haben eine umfassende Ausbildung in dieser
                Tradition absolviert.
              </p>

              <div className="bg-primary/10 border border-primary/30 rounded-2xl p-8 mt-12">
                <h3 className="heading-3 text-foreground mb-4">
                  Transpersonale Erfahrungen machen
                </h3>
                <p className="body-text text-foreground/90 mb-6">
                  Das Holotrope Atmen bietet einen sicheren Rahmen, um transpersonale
                  Erfahrungen zu machen und zu integrieren.
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
