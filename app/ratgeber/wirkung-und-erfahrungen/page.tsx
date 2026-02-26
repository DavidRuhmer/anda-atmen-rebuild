import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Wirkung und Erfahrungen - Holotropes Atmen",
  description:
    "Erfahren Sie, welche Wirkungen Holotropes Atmen hat und welche Erfahrungen Teilnehmer in Seminaren machen. Wissenschaftliche Erkenntnisse und Erfahrungsberichte.",
};

export default function WirkungUndErfahrungenPage() {
  return (
    <article className="pt-24 pb-16">
      <div className="section-container">
        <nav className="mb-8 text-sm">
          <ol className="flex items-center gap-2 text-foreground/60">
            <li><Link href="/" className="hover:text-primary">Home</Link></li>
            <li>/</li>
            <li><Link href="/ratgeber" className="hover:text-primary">Ratgeber</Link></li>
            <li>/</li>
            <li className="text-foreground">Wirkung und Erfahrungen</li>
          </ol>
        </nav>

        <div className="max-w-3xl">
          <header className="mb-12">
            <h1 className="heading-1 text-foreground mb-6">
              Wirkung und Erfahrungen beim Holotropen Atmen
            </h1>
            <p className="text-xl text-foreground/80">
              Was passiert während einer Session und welche Erfahrungen machen Teilnehmer?
            </p>
          </header>

          <div className="prose prose-lg prose-stone max-w-none">
            <h2 className="heading-2 text-foreground mt-12 mb-6">Was passiert im Körper?</h2>
            <p className="body-text text-foreground/90 mb-6">
              Durch die beschleunigte Atmung verändert sich der CO2-Gehalt im Blut, was zu einer
              leichten Alkalose führt. Dies kann zu Kribbeln in Händen und Füßen, veränderten
              Körperwahrnehmungen und einem erweiterten Bewusstseinszustand führen.
            </p>

            <h2 className="heading-2 text-foreground mt-12 mb-6">Typische Erfahrungen</h2>
            <ul className="list-disc list-inside space-y-3 mb-6 text-foreground/90">
              <li><strong>Emotionale Freisetzung:</strong> Tiefes Weinen, Lachen oder Wut können aufkommen und sich lösen</li>
              <li><strong>Körperliche Empfindungen:</strong> Wärme, Kälte, Vibration oder das Gefühl von Leichtigkeit</li>
              <li><strong>Visuelle Erlebnisse:</strong> Farben, Bilder oder Erinnerungen können auftauchen</li>
              <li><strong>Spirituelle Erfahrungen:</strong> Gefühle von Einheit, Transzendenz oder tiefem Frieden</li>
              <li><strong>Biografische Erinnerungen:</strong> Vergessene Erlebnisse können wieder bewusst werden</li>
            </ul>

            <h2 className="heading-2 text-foreground mt-12 mb-6">Langfristige Wirkungen</h2>
            <p className="body-text text-foreground/90 mb-6">
              Viele Teilnehmer berichten von nachhaltigen positiven Veränderungen:
            </p>
            <ul className="list-disc list-inside space-y-3 mb-6 text-foreground/90">
              <li>Größere emotionale Klarheit und Selbstverständnis</li>
              <li>Lösung von alten Mustern und Blockaden</li>
              <li>Verbesserte Beziehungen zu sich selbst und anderen</li>
              <li>Mehr Gelassenheit im Umgang mit Herausforderungen</li>
              <li>Gestärkte Intuition und Kreativität</li>
            </ul>

            <div className="bg-primary/10 border border-primary/30 rounded-2xl p-8 mt-12">
              <h3 className="heading-3 text-foreground mb-4">Ihre eigene Erfahrung machen</h3>
              <p className="body-text text-foreground/90 mb-6">
                Jede Erfahrung ist einzigartig. Unsere erfahrenen Therapeuten begleiten Sie
                sicher durch den Prozess.
              </p>
              <Link href="/#termine" className="btn-primary inline-block">Termine ansehen</Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
