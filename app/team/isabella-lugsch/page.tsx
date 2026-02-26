import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Mag.a Isabella Lugsch MSc. - Psychotherapeutin",
  description:
    "Mag.a Isabella Lugsch MSc. ist Psychotherapeutin mit Spezialisierung auf Integrative Therapie, Brainspotting und Traumatherapie. Klinische- und Gesundheitspsychologin in Baden.",
  openGraph: {
    title: "Mag.a Isabella Lugsch MSc. | Anda-Atmen",
    description: "Psychotherapeutin und Gesundheitspsychologin im Anda-Atmen Team",
  },
};

export default function IsabellaLugschPage() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Isabella Lugsch",
    honorificPrefix: "Mag.a",
    honorificSuffix: "MSc.",
    jobTitle: "Psychotherapeutin",
    worksFor: {
      "@type": "Organization",
      name: "Anda-Atmen",
    },
    image: "https://anda-atmen.at/images/isabella-lugsch.jpg",
    sameAs: [
      "https://www.psychotherapie-in-baden.at/",
    ],
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
              <li className="text-foreground">Isabella Lugsch</li>
            </ol>
          </nav>

          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="relative w-64 h-64 mx-auto rounded-2xl overflow-hidden border-4 border-primary/20">
                  <Image
                    src="/images/isabella-lugsch.jpg"
                    alt="Mag.a Isabella Lugsch MSc. - Psychotherapeutin bei Anda-Atmen"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="mt-6 text-center">
                  <h1 className="heading-2 text-foreground">Mag.a Isabella Lugsch MSc.</h1>
                  <p className="text-primary font-jost font-medium mt-1">Psychotherapeutin</p>
                </div>
                <div className="mt-6 bg-card rounded-xl p-4 border border-border">
                  <h3 className="font-jost font-semibold text-foreground mb-3">Praxis</h3>
                  <p className="text-foreground/70 text-sm">
                    VIA Therapiezentrum<br />
                    Herrnkirchengasse 6<br />
                    2500 Baden
                  </p>
                  <a
                    href="https://www.psychotherapie-in-baden.at/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline text-sm mt-2 inline-block"
                  >
                    www.psychotherapie-in-baden.at
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="prose prose-lg prose-stone max-w-none">
                <h2 className="heading-2 text-foreground mb-6">Über Isabella</h2>
                <p className="body-text text-foreground/90 mb-6">
                  Mag.a Isabella Lugsch MSc., geboren 1983 in Wien, ist Psychotherapeutin
                  mit Spezialisierung auf Integrative Therapie sowie Klinische- und
                  Gesundheitspsychologin. Sie praktiziert im VIA Therapiezentrum in Baden.
                </p>

                <h3 className="heading-3 text-foreground mt-8 mb-4">Ausbildung</h3>
                <ul className="list-disc list-inside space-y-2 text-foreground/90 mb-6">
                  <li>Psychologie-Studium (Wien und University of Illinois, USA)</li>
                  <li>Mag.rer.nat. Abschluss</li>
                  <li>Ausbildung zur Klinischen- und Gesundheitspsychologin (GkPP)</li>
                  <li>MSc. in Psychotherapie</li>
                  <li>HA-Ausbildung: IHTP, GTT in Ausbildung</li>
                </ul>

                <h3 className="heading-3 text-foreground mt-8 mb-4">Weiterbildungen</h3>
                <ul className="list-disc list-inside space-y-2 text-foreground/90 mb-6">
                  <li>Körpertherapeutische Ansätze nach Sylvester Walch</li>
                  <li>Brainspotting nach David Grand</li>
                  <li>Traumatherapie</li>
                  <li>Achtsamkeitsbasierte Psychotherapie</li>
                  <li>MBSR (Mindfulness Based Stress Reduction) nach Jon Kabat-Zinn</li>
                  <li>MSC (Mindful Self-Compassion) nach Kristin Neff</li>
                </ul>

                <h3 className="heading-3 text-foreground mt-8 mb-4">Arbeitsschwerpunkte</h3>
                <ul className="list-disc list-inside space-y-2 text-foreground/90 mb-6">
                  <li>Angst und Panikattacken</li>
                  <li>Beziehung, Partnerschaft und Ehe</li>
                  <li>Burnout und Burnout-Prävention</li>
                  <li>Depression</li>
                  <li>Psychosomatik</li>
                </ul>

                <blockquote className="border-l-4 border-primary pl-6 italic text-foreground/80 my-8">
                  &quot;Holotropes Atmen bedeutet für mich, in Kontakt mit der Essenz des
                  menschlichen Daseins zu kommen. Das vertrauensvolle, achtsame Setting
                  ermöglicht eine tiefere Verbindung mit sich selbst, anderen Menschen
                  und dem größeren Ganzen.&quot;
                </blockquote>

                <h3 className="heading-3 text-foreground mt-8 mb-4">Zielgruppen</h3>
                <p className="body-text text-foreground/90 mb-6">
                  Isabella arbeitet mit jungen Erwachsenen (18-29 Jahre), Erwachsenen
                  und älteren Menschen in ihrer Praxis in Baden.
                </p>
              </div>

              <div className="mt-12 bg-primary/10 border border-primary/30 rounded-2xl p-8">
                <h3 className="heading-3 text-foreground mb-4">
                  Seminar mit Isabella besuchen
                </h3>
                <p className="body-text text-foreground/90 mb-6">
                  Isabella ist Teil des therapeutischen Teams bei den Anda-Atmen Seminaren
                  und begleitet die Teilnehmer mit ihrer Expertise in Traumatherapie
                  und achtsamkeitsbasierter Psychotherapie.
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
