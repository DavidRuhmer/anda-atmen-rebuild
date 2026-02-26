import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Dr. Ines Schauer - Ärztin für ganzheitliche Medizin",
  description:
    "Dr. Ines Schauer ist Allgemeinmedizinerin mit Fokus auf ganzheitliche und psychosomatische Medizin. Sie gewährleistet die medizinische Sicherheit bei den Holotropes Atmen Seminaren.",
  openGraph: {
    title: "Dr. Ines Schauer | Anda-Atmen",
    description: "Ärztin für ganzheitliche Medizin im Anda-Atmen Team",
  },
};

export default function InesSchauerPage() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ines Schauer",
    honorificPrefix: "Dr.",
    jobTitle: "Ärztin für Allgemeinmedizin",
    worksFor: {
      "@type": "Organization",
      name: "Anda-Atmen",
    },
    image: "https://anda-atmen.at/images/ines-schauer.jpg",
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
              <li className="text-foreground">Ines Schauer</li>
            </ol>
          </nav>

          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="relative w-64 h-64 mx-auto rounded-2xl overflow-hidden border-4 border-primary/20">
                  <Image
                    src="/images/ines-schauer.jpg"
                    alt="Dr. Ines Schauer - Ärztin für ganzheitliche Medizin bei Anda-Atmen"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="mt-6 text-center">
                  <h1 className="heading-2 text-foreground">Dr. Ines Schauer</h1>
                  <p className="text-primary font-jost font-medium mt-1">Ärztin</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="prose prose-lg prose-stone max-w-none">
                <h2 className="heading-2 text-foreground mb-6">Über Ines</h2>
                <p className="body-text text-foreground/90 mb-6">
                  Dr. Ines Schauer ist Allgemeinmedizinerin mit einem besonderen Fokus
                  auf ganzheitliche und psychosomatische Medizin. Ihre Präsenz bei den
                  Anda-Atmen Seminaren gewährleistet die medizinische Sicherheit aller
                  Teilnehmer.
                </p>

                <h3 className="heading-3 text-foreground mt-8 mb-4">Qualifikationen</h3>
                <ul className="list-disc list-inside space-y-2 text-foreground/90 mb-6">
                  <li>Ärztin für Allgemeinmedizin</li>
                  <li>Phytotherapie (Donau Universität Krems, 2021)</li>
                  <li>Orthomolekulare Medizin (2022)</li>
                  <li>Diplomierte Mentaltrainerin (Vitalakademie Linz)</li>
                  <li>REBIS-Ausbildung bei Ivan Rohe</li>
                </ul>

                <h3 className="heading-3 text-foreground mt-8 mb-4">Ganzheitlicher Ansatz</h3>
                <p className="body-text text-foreground/90 mb-6">
                  Dr. Schauer verbindet schulmedizinisches Wissen mit komplementären
                  Heilmethoden. Ihr Interesse an ganzheitlicher Medizin spiegelt sich
                  in ihren Weiterbildungen in Phytotherapie, orthomolekularer Medizin
                  und mentalem Training wider.
                </p>

                <h3 className="heading-3 text-foreground mt-8 mb-4">Rolle bei Anda-Atmen</h3>
                <p className="body-text text-foreground/90 mb-6">
                  Als medizinische Begleitung ist Dr. Schauer bei den Seminaren vor Ort
                  und steht für alle medizinischen Fragen zur Verfügung. Sie führt
                  Vorabgespräche mit Teilnehmern durch, um sicherzustellen, dass keine
                  Kontraindikationen vorliegen.
                </p>

                <div className="bg-green-50 border border-green-200 rounded-xl p-6 my-8">
                  <h4 className="font-jost font-semibold text-green-800 mb-3">
                    Medizinische Sicherheit
                  </h4>
                  <p className="text-green-700 text-sm">
                    Die Anwesenheit einer Ärztin bei unseren Seminaren ist Teil unseres
                    umfassenden Sicherheitskonzepts. So können wir sicherstellen, dass
                    alle Teilnehmer optimal betreut werden.
                  </p>
                </div>
              </div>

              <div className="mt-12 bg-primary/10 border border-primary/30 rounded-2xl p-8">
                <h3 className="heading-3 text-foreground mb-4">
                  Fragen zur medizinischen Eignung?
                </h3>
                <p className="body-text text-foreground/90 mb-6">
                  Wenn Sie unsicher sind, ob Holotropes Atmen für Sie geeignet ist,
                  können Sie uns gerne kontaktieren. Wir klären Ihre Fragen vorab.
                </p>
                <a href="mailto:anda.atmen@gmail.com" className="btn-primary inline-block">
                  Kontakt aufnehmen
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
