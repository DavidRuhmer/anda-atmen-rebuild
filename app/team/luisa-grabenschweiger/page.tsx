import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Mag.a Luisa Grabenschweiger - Psychotherapeutin",
  description:
    "Mag.a Luisa Grabenschweiger ist Psychotherapeutin in Salzburg mit Spezialisierung auf Transpersonale Psychotherapie, Holotropes Atmen, EMDR und Brainspotting.",
  openGraph: {
    title: "Mag.a Luisa Grabenschweiger | Anda-Atmen",
    description: "Psychotherapeutin für Transpersonale Therapie im Anda-Atmen Team",
  },
};

export default function LuisaGrabenschweigerPage() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Luisa Grabenschweiger",
    honorificPrefix: "Mag.a",
    jobTitle: "Psychotherapeutin",
    worksFor: {
      "@type": "Organization",
      name: "Anda-Atmen",
    },
    image: "https://anda-atmen.at/images/luisa-grabenschweiger.jpg",
    sameAs: [
      "https://luisagrabenschweiger.com/",
      "https://www.vis-vitalis-salzburg.at/",
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
              <li className="text-foreground">Luisa Grabenschweiger</li>
            </ol>
          </nav>

          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="relative w-64 h-64 mx-auto rounded-2xl overflow-hidden border-4 border-primary/20">
                  <Image
                    src="/images/luisa-grabenschweiger.jpg"
                    alt="Mag.a Luisa Grabenschweiger - Psychotherapeutin bei Anda-Atmen"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="mt-6 text-center">
                  <h1 className="heading-2 text-foreground">Mag.a Luisa Grabenschweiger</h1>
                  <p className="text-primary font-jost font-medium mt-1">Psychotherapeutin</p>
                </div>
                <div className="mt-6 bg-card rounded-xl p-4 border border-border">
                  <h3 className="font-jost font-semibold text-foreground mb-3">Praxis Salzburg</h3>
                  <p className="text-foreground/70 text-sm">
                    VIS VITALIS Praxisgemeinschaft<br />
                    Franz-Josef-Kai 33<br />
                    5020 Salzburg
                  </p>
                  <a
                    href="https://luisagrabenschweiger.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline text-sm mt-2 inline-block"
                  >
                    luisagrabenschweiger.com
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="prose prose-lg prose-stone max-w-none">
                <h2 className="heading-2 text-foreground mb-6">Über Luisa</h2>
                <p className="body-text text-foreground/90 mb-6">
                  Mag.a Luisa Grabenschweiger-Holzinger ist Psychotherapeutin in Salzburg
                  mit Spezialisierung auf Tiefenpsychologische Transaktionsanalyse. Sie
                  hat umfangreiche Weiterbildungen in Transpersonaler Psychotherapie und
                  Holotroper Atemarbeit bei Dr. Sylvester Walch absolviert.
                </p>

                <h3 className="heading-3 text-foreground mt-8 mb-4">Qualifikationen</h3>
                <ul className="list-disc list-inside space-y-2 text-foreground/90 mb-6">
                  <li>Klinische Psychologin und Gesundheitspsychologin</li>
                  <li>Psychotherapeutin (Tiefenpsychologische Transaktionsanalyse)</li>
                  <li>Weiterbildung in Transpersonaler Psychotherapie (Dr. Sylvester Walch / IHTP)</li>
                  <li>Weiterbildung in Holotroper Atemarbeit</li>
                  <li>Zertifizierte Brainspotting-Therapeutin</li>
                </ul>

                <h3 className="heading-3 text-foreground mt-8 mb-4">Therapiemethoden</h3>
                <ul className="list-disc list-inside space-y-2 text-foreground/90 mb-6">
                  <li>Tiefenpsychologische Transaktionsanalyse</li>
                  <li>Paartherapie</li>
                  <li>Supervision</li>
                  <li>Traumatherapie</li>
                  <li>EMDR</li>
                  <li>Brainspotting</li>
                  <li>Körperorientierte Psychotherapie</li>
                  <li>Holotropes Atmen</li>
                </ul>

                <h3 className="heading-3 text-foreground mt-8 mb-4">Eigene Holotropes Atmen Seminare</h3>
                <p className="body-text text-foreground/90 mb-6">
                  Neben ihrer Tätigkeit bei Anda-Atmen bietet Luisa auch eigene
                  Holotropes Atmen Seminare in Koppl bei Salzburg an, gemeinsam mit
                  Mag.a Maria Embacher.
                </p>

                <div className="bg-card rounded-xl p-6 border border-border my-8">
                  <h4 className="font-jost font-semibold text-foreground mb-3">
                    Praxisstandorte
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-medium text-foreground">Salzburg Stadt</p>
                      <p className="text-foreground/70">Franz-Josef-Kai 33, 5020 Salzburg</p>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Seekirchen</p>
                      <p className="text-foreground/70">Moosstraße 52, 5201 Seekirchen</p>
                    </div>
                  </div>
                </div>

                <h3 className="heading-3 text-foreground mt-8 mb-4">Kontakt</h3>
                <p className="body-text text-foreground/90 mb-2">
                  <strong>Telefon:</strong> +43 660 675 21 56
                </p>
                <p className="body-text text-foreground/90 mb-6">
                  <strong>E-Mail:</strong>{" "}
                  <a href="mailto:luisa.grabenschweiger@gmail.com" className="text-primary hover:underline">
                    luisa.grabenschweiger@gmail.com
                  </a>
                </p>
                <p className="text-foreground/70 text-sm">
                  Sprachen: Deutsch, Englisch | Online-Therapie verfügbar | Kostenerstattung möglich
                </p>
              </div>

              <div className="mt-12 bg-primary/10 border border-primary/30 rounded-2xl p-8">
                <h3 className="heading-3 text-foreground mb-4">
                  Seminar mit Luisa besuchen
                </h3>
                <p className="body-text text-foreground/90 mb-6">
                  Luisa ist als Co-Therapeutin bei allen Anda-Atmen Seminaren dabei
                  und bringt ihre umfangreiche Erfahrung in Transpersonaler Therapie
                  und Holotroper Atemarbeit ein.
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
