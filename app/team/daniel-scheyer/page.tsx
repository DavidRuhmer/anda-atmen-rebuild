import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Mag. Daniel Scheyer - Klinischer Psychologe & Psychotherapeut",
  description:
    "Mag. Daniel Scheyer ist Klinischer Psychologe, Gesundheitspsychologe und Psychotherapeut mit Spezialisierung auf Existenzanalyse und humanistische Therapie.",
  openGraph: {
    title: "Mag. Daniel Scheyer | Anda-Atmen",
    description: "Klinischer Psychologe & Psychotherapeut im Anda-Atmen Team",
  },
};

export default function DanielScheyerPage() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Daniel Scheyer",
    honorificPrefix: "Mag.",
    jobTitle: "Klinischer Psychologe & Psychotherapeut",
    worksFor: {
      "@type": "Organization",
      name: "Anda-Atmen",
    },
    image: "https://anda-atmen.at/images/daniel-scheyer.jpg",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <div className="pt-24 pb-16">
        <div className="section-container">
          <nav className="mb-8 text-sm">
            <ol className="flex items-center gap-2 text-foreground/60">
              <li><Link href="/" className="hover:text-primary">Home</Link></li>
              <li>/</li>
              <li><Link href="/team" className="hover:text-primary">Team</Link></li>
              <li>/</li>
              <li className="text-foreground">Daniel Scheyer</li>
            </ol>
          </nav>

          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="relative w-64 h-64 mx-auto rounded-2xl overflow-hidden border-4 border-primary/20">
                  <Image
                    src="/images/daniel-scheyer.jpg"
                    alt="Mag. Daniel Scheyer - Klinischer Psychologe und Psychotherapeut bei Anda-Atmen"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="mt-6 text-center">
                  <h1 className="heading-2 text-foreground">Mag. Daniel Scheyer</h1>
                  <p className="text-primary font-jost font-medium mt-1">Klinischer Psychologe</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="prose prose-lg prose-stone max-w-none">
                <h2 className="heading-2 text-foreground mb-6">Über Daniel</h2>
                <p className="body-text text-foreground/90 mb-6">
                  Mag. Daniel Scheyer bringt als Klinischer Psychologe und Psychotherapeut
                  eine fundierte fachliche Expertise in das Anda-Atmen Team ein. Seine
                  Spezialisierung auf humanistische Therapie und Existenzanalyse ergänzt
                  die transpersonale Arbeit des Holotropen Atmens ideal.
                </p>

                <h3 className="heading-3 text-foreground mt-8 mb-4">Qualifikationen</h3>
                <ul className="list-disc list-inside space-y-2 text-foreground/90 mb-6">
                  <li>Klinischer Psychologe</li>
                  <li>Gesundheitspsychologe</li>
                  <li>Psychotherapeut (Humanistische Therapie / Existenzanalyse)</li>
                  <li>Eingetragen bei PsyOnline</li>
                </ul>

                <h3 className="heading-3 text-foreground mt-8 mb-4">Schwerpunkte</h3>
                <p className="body-text text-foreground/90 mb-6">
                  Daniel arbeitet mit einem existenzanalytischen Ansatz, der den Menschen
                  in seiner Ganzheit betrachtet. Die Existenzanalyse fragt nach dem Sinn
                  des Lebens und hilft Menschen dabei, ein erfülltes und authentisches
                  Leben zu führen.
                </p>

                <h3 className="heading-3 text-foreground mt-8 mb-4">Rolle bei Anda-Atmen</h3>
                <p className="body-text text-foreground/90 mb-6">
                  Als Co-Therapeut bei den Holotropes Atmen Seminaren unterstützt Daniel
                  die Teilnehmer mit seiner psychologischen Expertise. Seine Präsenz
                  gewährleistet eine professionelle psychologische Begleitung während
                  der intensiven Atemsessions.
                </p>

                <div className="bg-card rounded-xl p-6 border border-border my-8">
                  <h4 className="font-jost font-semibold text-foreground mb-3">
                    Über Existenzanalyse
                  </h4>
                  <p className="text-foreground/80 text-sm">
                    Die Existenzanalyse ist eine psychotherapeutische Methode, die von
                    Viktor Frankl begründet wurde. Sie fokussiert auf die Sinnfindung
                    und hilft Menschen, Verantwortung für ihr Leben zu übernehmen und
                    authentische Entscheidungen zu treffen.
                  </p>
                </div>
              </div>

              <div className="mt-12 bg-primary/10 border border-primary/30 rounded-2xl p-8">
                <h3 className="heading-3 text-foreground mb-4">
                  Seminar mit Daniel besuchen
                </h3>
                <p className="body-text text-foreground/90 mb-6">
                  Daniel ist als Co-Therapeut bei den Seminaren in Kitzbühel und Baden
                  dabei und unterstützt die Teilnehmer mit seiner psychologischen Expertise.
                </p>
                <Link href="/#termine" className="btn-primary inline-block">
                  Nächste Termine ansehen
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
