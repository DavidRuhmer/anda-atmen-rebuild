import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Risiken und Nebenwirkungen - Holotropes Atmen",
  description:
    "Wichtige Informationen zu Kontraindikationen beim Holotropen Atmen. Für wen ist es nicht geeignet? Sicherheitsvorkehrungen und Hinweise.",
};

export default function RisikenUndNebenwirkungenPage() {
  return (
    <article className="pt-24 pb-16">
      <div className="section-container">
        <nav className="mb-8 text-sm">
          <ol className="flex items-center gap-2 text-foreground/60">
            <li><Link href="/" className="hover:text-primary">Home</Link></li>
            <li>/</li>
            <li><Link href="/ratgeber" className="hover:text-primary">Ratgeber</Link></li>
            <li>/</li>
            <li className="text-foreground">Risiken und Nebenwirkungen</li>
          </ol>
        </nav>

        <div className="max-w-3xl">
          <header className="mb-12">
            <h1 className="heading-1 text-foreground mb-6">
              Risiken und Nebenwirkungen
            </h1>
            <p className="text-xl text-foreground/80">
              Wichtige Sicherheitsinformationen für Ihre Entscheidung.
            </p>
          </header>

          <div className="prose prose-lg prose-invert max-w-none">
            <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-6 mb-8">
              <h3 className="text-red-400 font-jost font-semibold mb-2">Wichtiger Hinweis</h3>
              <p className="text-foreground/90 text-sm">
                Holotropes Atmen ist eine intensive Erfahrung. Bitte lesen Sie die folgenden
                Kontraindikationen sorgfältig durch und konsultieren Sie im Zweifel Ihren Arzt.
              </p>
            </div>

            <h2 className="heading-2 text-foreground mt-12 mb-6">Kontraindikationen</h2>
            <p className="body-text text-foreground/90 mb-6">
              Holotropes Atmen ist <strong>nicht geeignet</strong> für Personen mit:
            </p>
            <ul className="list-disc list-inside space-y-3 mb-6 text-foreground/90">
              <li>Herz-Kreislauf-Erkrankungen oder Bluthochdruck</li>
              <li>Epilepsie oder Krampfanfälle in der Vorgeschichte</li>
              <li>Akuten psychotischen Episoden oder Schizophrenie</li>
              <li>Schwangerschaft</li>
              <li>Frischen Operationen oder schweren körperlichen Verletzungen</li>
              <li>Netzhautablösung oder erhöhtem Augeninnendruck</li>
              <li>Akuten Infektionskrankheiten</li>
              <li>Einnahme bestimmter Medikamente (Lithium, MAO-Hemmer)</li>
            </ul>

            <h2 className="heading-2 text-foreground mt-12 mb-6">Mögliche Nebenwirkungen</h2>
            <p className="body-text text-foreground/90 mb-6">
              Während der Session können vorübergehend auftreten:
            </p>
            <ul className="list-disc list-inside space-y-3 mb-6 text-foreground/90">
              <li>Kribbeln oder Taubheit in Händen, Füßen oder Gesicht (Tetanie)</li>
              <li>Schwindel oder Benommenheit</li>
              <li>Muskelkrämpfe</li>
              <li>Intensive Emotionen</li>
              <li>Kopfschmerzen</li>
            </ul>
            <p className="body-text text-foreground/90 mb-6">
              Diese Symptome sind in der Regel harmlos und verschwinden nach der Session.
            </p>

            <h2 className="heading-2 text-foreground mt-12 mb-6">Unsere Sicherheitsmaßnahmen</h2>
            <ul className="list-disc list-inside space-y-3 mb-6 text-foreground/90">
              <li>Ausführliches Vorgespräch und Anamnesebogen</li>
              <li>Professionelle Begleitung durch ausgebildete Therapeuten</li>
              <li>Ärztliche Präsenz bei unseren Seminaren</li>
              <li>Sitter-System: Jeder Atmer wird individuell betreut</li>
              <li>Sichere Umgebung und vertraulicher Rahmen</li>
            </ul>

            <div className="bg-primary/10 border border-primary/30 rounded-2xl p-8 mt-12">
              <h3 className="heading-3 text-foreground mb-4">Fragen?</h3>
              <p className="body-text text-foreground/90 mb-6">
                Wenn Sie unsicher sind, ob Holotropes Atmen für Sie geeignet ist,
                kontaktieren Sie uns gerne für ein Vorgespräch.
              </p>
              <a href="mailto:anda.atmen@gmail.com" className="btn-primary inline-block">
                Kontakt aufnehmen
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
