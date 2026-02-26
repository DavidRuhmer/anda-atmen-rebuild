import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Holotropes Atmen Seminare 2026 - Termine & Anmeldung",
  description:
    "Alle Holotropes Atmen Seminare 2026 von Anda-Atmen. Termine in Kitzbühel und Baden bei Wien. Jetzt Frühbucherrabatt sichern!",
  openGraph: {
    title: "Seminare 2026 | Anda-Atmen",
    description: "Holotropes Atmen Seminare in Österreich - alle Termine 2026",
  },
};

const seminare = [
  {
    slug: "kitzbuehel-april-2026",
    title: "Holotropes Atmen Kitzbühel",
    date: "18.–19. April 2026",
    location: "Bio Yoga Hof Kitzbühel",
    region: "Tirol",
    earlyBirdPrice: "255€",
    regularPrice: "265€",
    image: "/images/hero.jpg",
  },
  {
    slug: "baden-september-2026",
    title: "Holotropes Atmen Baden",
    date: "19.–20. September 2026",
    location: "Schildbachhof Baden",
    region: "Niederösterreich",
    earlyBirdPrice: "255€",
    regularPrice: "295€",
    image: "/images/hero.jpg",
  },
];

export default function SeminarePage() {
  return (
    <div className="pt-24 pb-16">
      <div className="section-container">
        <nav className="mb-8 text-sm">
          <ol className="flex items-center gap-2 text-foreground/60">
            <li><Link href="/" className="hover:text-primary">Home</Link></li>
            <li>/</li>
            <li className="text-foreground">Seminare</li>
          </ol>
        </nav>

        <h1 className="heading-1 text-foreground mb-6">Seminare 2026</h1>
        <p className="body-text text-foreground/80 max-w-3xl mb-12">
          Entdecken Sie unsere Holotropes Atmen Seminare an ausgewählten Orten in
          Österreich. Kleine Gruppen, erfahrene Therapeuten und einzigartige Locations
          für Ihre transformative Erfahrung.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {seminare.map((seminar) => (
            <Link
              key={seminar.slug}
              href={`/seminare/${seminar.slug}`}
              className="group block bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all"
            >
              <div className="p-8">
                <div className="flex items-center gap-2 text-primary mb-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  <span className="text-sm font-medium">{seminar.region}</span>
                </div>
                <h2 className="heading-3 text-foreground mb-2 group-hover:text-primary transition-colors">
                  {seminar.title}
                </h2>
                <p className="text-foreground/70 mb-4">{seminar.location}</p>

                <div className="flex items-center gap-2 text-foreground mb-6">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="font-jost font-semibold">{seminar.date}</span>
                </div>

                <div className="flex items-center justify-between border-t border-border pt-4">
                  <div>
                    <p className="text-sm text-foreground/60">Frühbucher</p>
                    <p className="text-2xl font-jost font-bold text-primary">{seminar.earlyBirdPrice}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-foreground/60">Regulär</p>
                    <p className="text-xl font-jost text-foreground/70">{seminar.regularPrice}</p>
                  </div>
                </div>

                <div className="mt-6 text-primary font-jost font-medium flex items-center justify-center gap-2 group-hover:gap-3 transition-all">
                  Details & Anmeldung
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 bg-card rounded-2xl p-8 border border-border">
          <h2 className="heading-2 text-foreground mb-6">Allgemeine Informationen</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-jost font-semibold text-foreground mb-3">Im Preis enthalten</h3>
              <ul className="space-y-2 text-foreground/80">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-primary mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Zwei Atemsessions (Samstag)
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-primary mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Meditation und Integration (Sonntag)
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-primary mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Veganes Mittagessen & Pausenverpflegung
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-primary mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Professionelle therapeutische Begleitung
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-primary mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Ärztliche Betreuung vor Ort
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-jost font-semibold text-foreground mb-3">Voraussetzungen</h3>
              <ul className="space-y-2 text-foreground/80">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-foreground/50 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Normale psychische Belastbarkeit
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-foreground/50 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Normale körperliche Belastbarkeit
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-foreground/50 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Mindestalter 18 Jahre
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-foreground/50 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Keine Kontraindikationen
                </li>
              </ul>
              <Link href="/ratgeber/risiken-und-nebenwirkungen" className="text-primary hover:underline text-sm mt-4 inline-block">
                Mehr zu Kontraindikationen →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
