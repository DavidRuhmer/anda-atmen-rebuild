import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Holotropes Atmen Wien - Seminare & Workshops in Wien",
  description:
    "Holotropes Atmen in Wien und Umgebung. Professionelle Seminare mit erfahrenen Therapeuten. Nächster Termin: Baden bei Wien. Jetzt anmelden!",
  openGraph: {
    title: "Holotropes Atmen Wien | Anda-Atmen",
    description:
      "Holotropes Atmen Seminare in Wien und Umgebung. Nächste Termine 2026.",
  },
};

export default function HolotropesAtmenWienPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="section-container">
        <nav className="mb-8 text-sm">
          <ol className="flex items-center gap-2 text-foreground/60">
            <li><Link href="/" className="hover:text-primary">Home</Link></li>
            <li>/</li>
            <li className="text-foreground">Holotropes Atmen Wien</li>
          </ol>
        </nav>

        <h1 className="heading-1 text-foreground mb-6">
          Holotropes Atmen in Wien
        </h1>
        <p className="body-text text-foreground/80 max-w-3xl mb-12">
          Sie suchen Seminare für Holotropes Atmen in Wien oder Niederösterreich?
          Anda-Atmen bietet professionelle Workshops in der Region an.
        </p>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="heading-2 text-foreground mb-6">Unser Angebot in Wien</h2>
            <p className="body-text text-foreground/90 mb-6">
              Unsere Seminare finden regelmäßig im Raum Wien statt. Der nächste
              Termin ist am <strong>Schildbachhof Baden</strong>, nur 30 Minuten
              von Wien entfernt.
            </p>
            <ul className="space-y-3 text-foreground/90 mb-8">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-primary mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Erfahrene, ausgebildete Therapeuten
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-primary mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Kleine Gruppen (max. 16 Teilnehmer)
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-primary mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Vegetarische/vegane Verpflegung inklusive
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-primary mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Ärztliche Betreuung vor Ort
              </li>
            </ul>
            <Link href="/#termine" className="btn-primary">
              Alle Termine ansehen
            </Link>
          </div>

          <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
            <h3 className="heading-3 text-foreground mb-4">Nächster Termin bei Wien</h3>
            <div className="flex items-center gap-2 text-primary mb-4">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="font-jost font-semibold">19.–20. September 2026</span>
            </div>
            <p className="text-foreground/70 mb-2"><strong>Ort:</strong> Schildbachhof Baden</p>
            <p className="text-foreground/70 mb-2"><strong>Entfernung:</strong> ~30 Min. von Wien</p>
            <p className="text-foreground/70 mb-4"><strong>Preis:</strong> ab 255€ (Frühbucher)</p>
            <a
              href="mailto:anda.atmen@gmail.com?subject=Anmeldung Holotropes Atmen Baden"
              className="btn-primary w-full text-center block"
            >
              Jetzt anmelden
            </a>
          </div>
        </div>

        <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
          <h2 className="heading-2 text-foreground mb-6">Warum Holotropes Atmen?</h2>
          <p className="body-text text-foreground/90 mb-6">
            Holotropes Atmen ist eine kraftvolle Methode zur Selbsterforschung und
            persönlichen Entwicklung. Durch beschleunigte Atmung, unterstützende Musik
            und professionelle Begleitung können tiefe Heilungsprozesse angestoßen werden.
          </p>
          <Link href="/ratgeber/was-ist-holotropes-atmen" className="text-primary hover:underline font-jost font-medium">
            Mehr erfahren →
          </Link>
        </div>
      </div>
    </div>
  );
}
