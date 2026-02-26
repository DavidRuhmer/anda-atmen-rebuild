import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Holotropes Atmen Kitzbühel - 18.-19. April 2026",
  description:
    "Holotropes Atmen Seminar am Bio Yoga Hof Kitzbühel. 18.-19. April 2026. Atemberaubende Bergkulisse, max. 16 Teilnehmer, erfahrene Therapeuten. Ab 255€.",
  openGraph: {
    title: "Holotropes Atmen Kitzbühel | 18.-19. April 2026",
    description: "Seminar am Bio Yoga Hof mit Bergpanorama. Jetzt anmelden!",
  },
};

export default function KitzbuhelSeminarPage() {
  const eventSchema = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "Holotropes Atmen Seminar Kitzbühel",
    description: "Holotropes Atmen Wochenendseminar am Bio Yoga Hof Kitzbühel mit atemberaubender Bergkulisse.",
    startDate: "2026-04-18T09:00:00+02:00",
    endDate: "2026-04-19T13:00:00+02:00",
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: "Bio Yoga Hof Kitzbühel",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Ried Bichlach 18",
        addressLocality: "Kitzbühel",
        postalCode: "6370",
        addressCountry: "AT",
      },
    },
    organizer: {
      "@type": "Organization",
      name: "Anda-Atmen",
      url: "https://anda-atmen.at",
    },
    performer: {
      "@type": "Person",
      name: "Mag. Andreas Schuster",
    },
    offers: [
      {
        "@type": "Offer",
        name: "Frühbucher",
        price: "255",
        priceCurrency: "EUR",
        validThrough: "2026-02-17",
        availability: "https://schema.org/InStock",
      },
      {
        "@type": "Offer",
        name: "Regulär",
        price: "265",
        priceCurrency: "EUR",
        availability: "https://schema.org/InStock",
      },
    ],
    maximumAttendeeCapacity: 16,
    image: "https://anda-atmen.at/images/hero.jpg",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
      />
      <div className="pt-24 pb-16">
        <div className="section-container">
          <nav className="mb-8 text-sm">
            <ol className="flex items-center gap-2 text-foreground/60">
              <li><Link href="/" className="hover:text-primary">Home</Link></li>
              <li>/</li>
              <li><Link href="/seminare" className="hover:text-primary">Seminare</Link></li>
              <li>/</li>
              <li className="text-foreground">Kitzbühel April 2026</li>
            </ol>
          </nav>

          {/* Hero */}
          <div className="relative rounded-3xl overflow-hidden mb-12">
            <Image
              src="/images/hero.jpg"
              alt="Holotropes Atmen Seminar am Bio Yoga Hof Kitzbühel mit Bergpanorama"
              width={1200}
              height={500}
              className="w-full h-[300px] md:h-[400px] object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="flex items-center gap-2 text-white/80 text-sm mb-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
                Tirol, Österreich
              </div>
              <h1 className="heading-1 text-white mb-2">Holotropes Atmen Kitzbühel</h1>
              <p className="text-white/90 text-xl font-jost">18.–19. April 2026</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="prose prose-lg prose-stone max-w-none">
                <h2 className="heading-2 text-foreground mb-6">Über dieses Seminar</h2>
                <p className="body-text text-foreground/90 mb-6">
                  Erleben Sie Holotropes Atmen in der atemberaubenden Bergwelt von Kitzbühel.
                  Der Bio Yoga Hof bietet den perfekten Rahmen für Ihre transformative Erfahrung:
                  ein modernes Yoga-Studio mit Panoramablick auf die Tiroler Alpen.
                </p>

                <h3 className="heading-3 text-foreground mt-8 mb-4">Der Bio Yoga Hof</h3>
                <p className="body-text text-foreground/90 mb-6">
                  Der Bio Yoga Hof liegt auf einer Anhöhe über Kitzbühel und bietet einen
                  360-Grad-Blick auf die umliegende Bergwelt. Das lichtdurchflutete Studio
                  wurde 2020 von Johanna Haas erbaut und verfügt über eine überdachte Terrasse
                  für Outdoor-Yoga-Sessions bei schönem Wetter.
                </p>
                <ul className="list-disc list-inside space-y-2 text-foreground/90 mb-6">
                  <li>Großzügiger Seminarraum mit Bergpanorama</li>
                  <li>Überdachte Terrasse für Outdoor-Sessions</li>
                  <li>Bio-Verpflegung aus regionalen Produkten</li>
                  <li>Ruhige Lage in der Natur</li>
                  <li>Gieringer Weiher in 5 Minuten Fußweg erreichbar</li>
                </ul>

                <h3 className="heading-3 text-foreground mt-8 mb-4">Ablauf des Seminars</h3>

                <div className="bg-card rounded-xl p-6 border border-border mb-6">
                  <h4 className="font-jost font-semibold text-foreground mb-4">
                    Samstag, 18. April 2026
                  </h4>
                  <ul className="space-y-3 text-foreground/80">
                    <li className="flex gap-4">
                      <span className="font-jost font-medium text-primary w-20">09:00</span>
                      <span>Ankommen, Kennenlernen, Einführung</span>
                    </li>
                    <li className="flex gap-4">
                      <span className="font-jost font-medium text-primary w-20">10:30</span>
                      <span>Erste Atemsession (ca. 2-3 Stunden)</span>
                    </li>
                    <li className="flex gap-4">
                      <span className="font-jost font-medium text-primary w-20">13:30</span>
                      <span>Veganes Mittagessen & Pause</span>
                    </li>
                    <li className="flex gap-4">
                      <span className="font-jost font-medium text-primary w-20">15:00</span>
                      <span>Zweite Atemsession (Rollentausch)</span>
                    </li>
                    <li className="flex gap-4">
                      <span className="font-jost font-medium text-primary w-20">~18:00</span>
                      <span>Integration, Mandalas malen, Abschluss</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-card rounded-xl p-6 border border-border mb-6">
                  <h4 className="font-jost font-semibold text-foreground mb-4">
                    Sonntag, 19. April 2026
                  </h4>
                  <ul className="space-y-3 text-foreground/80">
                    <li className="flex gap-4">
                      <span className="font-jost font-medium text-primary w-20">09:00</span>
                      <span>Meditation</span>
                    </li>
                    <li className="flex gap-4">
                      <span className="font-jost font-medium text-primary w-20">10:00</span>
                      <span>Verarbeitung in Kleingruppen</span>
                    </li>
                    <li className="flex gap-4">
                      <span className="font-jost font-medium text-primary w-20">11:30</span>
                      <span>Abschlussrunde und Integration</span>
                    </li>
                    <li className="flex gap-4">
                      <span className="font-jost font-medium text-primary w-20">~13:00</span>
                      <span>Ende des Seminars</span>
                    </li>
                  </ul>
                </div>

                <h3 className="heading-3 text-foreground mt-8 mb-4">Ihr Therapeuten-Team</h3>
                <div className="grid sm:grid-cols-3 gap-4 mb-6">
                  <Link href="/team/andreas-schuster" className="group text-center">
                    <div className="relative w-20 h-20 mx-auto rounded-full overflow-hidden border-2 border-transparent group-hover:border-primary transition-all">
                      <Image src="/images/andreas-schuster.jpg" alt="Mag. Andreas Schuster" fill className="object-cover" />
                    </div>
                    <p className="font-jost font-medium text-foreground mt-2 group-hover:text-primary">Mag. Andreas Schuster</p>
                    <p className="text-sm text-foreground/60">Seminarleiter</p>
                  </Link>
                  <Link href="/team/luisa-grabenschweiger" className="group text-center">
                    <div className="relative w-20 h-20 mx-auto rounded-full overflow-hidden border-2 border-transparent group-hover:border-primary transition-all">
                      <Image src="/images/luisa-grabenschweiger.jpg" alt="Mag.a Luisa Grabenschweiger" fill className="object-cover" />
                    </div>
                    <p className="font-jost font-medium text-foreground mt-2 group-hover:text-primary">Mag.a Luisa Grabenschweiger</p>
                    <p className="text-sm text-foreground/60">Co-Therapeutin</p>
                  </Link>
                  <Link href="/team/daniel-scheyer" className="group text-center">
                    <div className="relative w-20 h-20 mx-auto rounded-full overflow-hidden border-2 border-transparent group-hover:border-primary transition-all">
                      <Image src="/images/daniel-scheyer.jpg" alt="Mag. Daniel Scheyer" fill className="object-cover" />
                    </div>
                    <p className="font-jost font-medium text-foreground mt-2 group-hover:text-primary">Mag. Daniel Scheyer</p>
                    <p className="text-sm text-foreground/60">Co-Therapeut</p>
                  </Link>
                </div>

                <h3 className="heading-3 text-foreground mt-8 mb-4">Anfahrt</h3>
                <p className="body-text text-foreground/90 mb-4">
                  <strong>Adresse:</strong> Ried Bichlach 18, 6370 Kitzbühel
                </p>
                <p className="body-text text-foreground/90 mb-6">
                  Der Bio Yoga Hof liegt etwa 4 km vom Zentrum Kitzbühel entfernt.
                  Kostenlose Parkplätze sind vorhanden.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Price Card */}
                <div className="bg-card rounded-2xl p-6 border border-border">
                  <h3 className="font-jost font-semibold text-foreground mb-4">Preise</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center pb-4 border-b border-border">
                      <div>
                        <p className="font-jost font-medium text-foreground">Frühbucher</p>
                        <p className="text-sm text-foreground/60">bis 17. Februar 2026</p>
                      </div>
                      <p className="text-2xl font-jost font-bold text-primary">255€</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-jost font-medium text-foreground">Regulär</p>
                        <p className="text-sm text-foreground/60">ab 18. Februar 2026</p>
                      </div>
                      <p className="text-xl font-jost text-foreground/70">265€</p>
                    </div>
                  </div>
                  <div className="mt-6 pt-4 border-t border-border">
                    <p className="text-sm text-foreground/70 mb-4">
                      <strong>Inklusive:</strong> Veganes Mittagessen & Pausenverpflegung
                    </p>
                    <p className="text-sm text-foreground/70">
                      <strong>Max. Teilnehmer:</strong> 16 Personen
                    </p>
                  </div>
                  <a
                    href="mailto:anda.atmen@gmail.com?subject=Anmeldung%20Holotropes%20Atmen%20Kitzbühel%20April%202026"
                    className="btn-primary w-full mt-6 text-center block"
                  >
                    Jetzt anmelden
                  </a>
                </div>

                {/* Location Contact */}
                <div className="bg-card rounded-2xl p-6 border border-border">
                  <h3 className="font-jost font-semibold text-foreground mb-4">Veranstaltungsort</h3>
                  <p className="text-foreground/80 mb-2">Bio Yoga Hof Kitzbühel</p>
                  <p className="text-foreground/60 text-sm mb-4">
                    Ried Bichlach 18<br />
                    6370 Kitzbühel
                  </p>
                  <p className="text-sm text-foreground/70 mb-2">
                    <strong>Kontakt Location:</strong>
                  </p>
                  <p className="text-sm text-foreground/70">
                    Johanna Haas<br />
                    <a href="tel:+436604990182" className="text-primary hover:underline">+43 660 4990182</a><br />
                    <a href="mailto:info@yogahof-kitzbuehel.at" className="text-primary hover:underline">info@yogahof-kitzbuehel.at</a>
                  </p>
                  <a
                    href="https://www.yogahof-kitzbuehel.at"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline text-sm mt-2 inline-block"
                  >
                    www.yogahof-kitzbuehel.at →
                  </a>
                </div>

                {/* Questions */}
                <div className="bg-primary/10 rounded-2xl p-6 border border-primary/30">
                  <h3 className="font-jost font-semibold text-foreground mb-3">Fragen?</h3>
                  <p className="text-sm text-foreground/80 mb-4">
                    Bei Fragen zum Seminar kontaktieren Sie uns gerne.
                  </p>
                  <a
                    href="mailto:anda.atmen@gmail.com"
                    className="text-primary hover:underline font-medium"
                  >
                    anda.atmen@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
