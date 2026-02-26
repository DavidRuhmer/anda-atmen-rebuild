import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Mag. Andreas Schuster - Seminarleiter Holotropes Atmen",
  description:
    "Mag. Andreas Schuster ist Gründer von Anda-Atmen und ausgebildeter Seminarleiter für Holotropes Atmen bei Dr. Sylvester Walch (IHTP). Coach & Supervisor in Graz.",
  openGraph: {
    title: "Mag. Andreas Schuster | Anda-Atmen",
    description: "Seminarleiter für Holotropes Atmen, Coach & Supervisor",
  },
};

export default function AndreasSchusterPage() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Andreas Schuster",
    honorificPrefix: "Mag.",
    jobTitle: "Seminarleiter für Holotropes Atmen",
    worksFor: {
      "@type": "Organization",
      name: "Anda-Atmen",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Graz",
      addressCountry: "AT",
    },
    image: "https://anda-atmen.at/images/andreas-schuster.jpg",
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
              <li className="text-foreground">Andreas Schuster</li>
            </ol>
          </nav>

          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="relative w-64 h-64 mx-auto rounded-2xl overflow-hidden border-4 border-primary/20">
                  <Image
                    src="/images/andreas-schuster.jpg"
                    alt="Mag. Andreas Schuster - Seminarleiter für Holotropes Atmen bei Anda-Atmen"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="mt-6 text-center">
                  <h1 className="heading-2 text-foreground">Mag. Andreas Schuster</h1>
                  <p className="text-primary font-jost font-medium mt-1">Seminarleiter & Gründer</p>
                </div>
                <div className="mt-6 bg-card rounded-xl p-4 border border-border">
                  <h3 className="font-jost font-semibold text-foreground mb-3">Kontakt</h3>
                  <a
                    href="mailto:anda.atmen@gmail.com"
                    className="text-primary hover:underline block"
                  >
                    anda.atmen@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="prose prose-lg prose-stone max-w-none">
                <h2 className="heading-2 text-foreground mb-6">Über Andreas</h2>
                <p className="body-text text-foreground/90 mb-6">
                  Mag. Andreas Schuster ist der Gründer und Hauptseminarleiter von Anda-Atmen.
                  Seine Leidenschaft für das Holotrope Atmen entdeckte er während seiner eigenen
                  persönlichen Entwicklungsreise und entschied sich, diese transformative Methode
                  professionell weiterzugeben.
                </p>

                <h3 className="heading-3 text-foreground mt-8 mb-4">Ausbildung & Qualifikationen</h3>
                <ul className="list-disc list-inside space-y-2 text-foreground/90 mb-6">
                  <li>Magister-Abschluss</li>
                  <li>Ausbildung zum Seminarleiter für Holotropes Atmen bei Dr. Sylvester Walch</li>
                  <li>Zertifizierter Coach & Supervisor</li>
                  <li>Mitglied des IHTP (Institut für Holotropes Atmen und Transpersonale Psychotherapie)</li>
                </ul>

                <h3 className="heading-3 text-foreground mt-8 mb-4">Über das IHTP</h3>
                <p className="body-text text-foreground/90 mb-6">
                  Das IHTP (ursprünglich ÖATP) wurde 1993 als Teil des Curriculums
                  &quot;Transpersonale Selbsterfahrung und Holotropes Atmen&quot; unter der Leitung
                  von Dr. Sylvester Walch gegründet. Dr. Walch ist einer der bedeutendsten
                  Pioniere des Holotropen Atmens im deutschsprachigen Raum mit über 45 Jahren
                  Berufserfahrung.
                </p>

                <h3 className="heading-3 text-foreground mt-8 mb-4">Philosophie</h3>
                <p className="body-text text-foreground/90 mb-6">
                  Andreas glaubt fest daran, dass jeder Mensch die innere Weisheit besitzt,
                  seinen eigenen Heilungsweg zu finden. Seine Aufgabe als Seminarleiter sieht
                  er darin, einen sicheren Raum zu schaffen, in dem diese innere Weisheit
                  zum Ausdruck kommen kann.
                </p>

                <blockquote className="border-l-4 border-primary pl-6 italic text-foreground/80 my-8">
                  &quot;Das Holotrope Atmen ermöglicht uns, Zugang zu tieferen Schichten unseres
                  Bewusstseins zu finden und brachliegende Potenziale zu aktivieren.&quot;
                </blockquote>

                <h3 className="heading-3 text-foreground mt-8 mb-4">Tätigkeitsbereiche</h3>
                <ul className="list-disc list-inside space-y-2 text-foreground/90 mb-6">
                  <li>Leitung von Holotropes Atmen Seminaren in Österreich</li>
                  <li>Coaching und Supervision</li>
                  <li>Individuelle Begleitung und Integration</li>
                </ul>
              </div>

              <div className="mt-12 bg-primary/10 border border-primary/30 rounded-2xl p-8">
                <h3 className="heading-3 text-foreground mb-4">
                  Seminar mit Andreas besuchen
                </h3>
                <p className="body-text text-foreground/90 mb-6">
                  Andreas leitet alle Anda-Atmen Seminare persönlich. Erleben Sie Holotropes
                  Atmen unter seiner erfahrenen Anleitung.
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
