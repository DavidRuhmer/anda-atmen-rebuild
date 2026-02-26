import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Holotropes Atmen Österreich - Seminare in Wien, Kitzbühel & Baden",
  description:
    "Holotropes Atmen Seminare in ganz Österreich. Termine in Wien, Kitzbühel, Baden und mehr. Erfahrene Therapeuten, kleine Gruppen. Jetzt anmelden!",
  openGraph: {
    title: "Holotropes Atmen Österreich | Anda-Atmen",
    description:
      "Holotropes Atmen Seminare in ganz Österreich. Termine 2026 jetzt buchbar.",
  },
};

export default function HolotropesAtmenOesterreichPage() {
  const locations = [
    {
      name: "Kitzbühel",
      region: "Tirol",
      venue: "Bio Yoga Hof Kitzbühel",
      nextDate: "18.–19. April 2026",
      price: "255€",
    },
    {
      name: "Baden bei Wien",
      region: "Niederösterreich",
      venue: "Schildbachhof Baden",
      nextDate: "19.–20. September 2026",
      price: "255€",
    },
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="section-container">
        <nav className="mb-8 text-sm">
          <ol className="flex items-center gap-2 text-foreground/60">
            <li><Link href="/" className="hover:text-primary">Home</Link></li>
            <li>/</li>
            <li className="text-foreground">Holotropes Atmen Österreich</li>
          </ol>
        </nav>

        <h1 className="heading-1 text-foreground mb-6">
          Holotropes Atmen in Österreich
        </h1>
        <p className="body-text text-foreground/80 max-w-3xl mb-12">
          Anda-Atmen bietet Seminare für Holotropes Atmen an verschiedenen
          Standorten in Österreich an. Von den Tiroler Alpen bis nach Niederösterreich –
          finden Sie den Termin in Ihrer Nähe.
        </p>

        <h2 className="heading-2 text-foreground mb-8">Unsere Standorte</h2>
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {locations.map((location) => (
            <div
              key={location.name}
              className="bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-primary/50 transition-all"
            >
              <div className="flex items-center gap-2 text-primary text-sm mb-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
                {location.region}
              </div>
              <h3 className="heading-3 text-foreground mb-2">{location.name}</h3>
              <p className="text-foreground/70 mb-4">{location.venue}</p>
              <div className="flex items-center justify-between border-t border-white/10 pt-4 mt-4">
                <div>
                  <p className="text-sm text-foreground/60">Nächster Termin</p>
                  <p className="font-jost font-semibold text-foreground">{location.nextDate}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-foreground/60">ab</p>
                  <p className="text-xl font-jost font-bold text-primary">{location.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-primary/10 border border-primary/30 rounded-2xl p-8 text-center">
          <h2 className="heading-2 text-foreground mb-4">
            Bereit für Ihre Transformation?
          </h2>
          <p className="body-text text-foreground/90 max-w-2xl mx-auto mb-6">
            Wählen Sie Ihren bevorzugten Standort und erleben Sie die heilende
            Kraft des Holotropen Atmens mit unserem erfahrenen Team.
          </p>
          <Link href="/#termine" className="btn-primary">
            Alle Termine & Details
          </Link>
        </div>
      </div>
    </div>
  );
}
