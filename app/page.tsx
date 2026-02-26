import Image from "next/image";
import Link from "next/link";

// Team-Daten
const teamMembers = [
  {
    name: "Mag. Andreas Schuster",
    role: "Seminarleiter",
    description: "Seminarleiter, Ausbildung zum Holotropen Atmen bei Sylvester Walch, Coach & Supervisor",
    image: "/images/andreas-schuster.jpg",
  },
  {
    name: "Mag. Daniel Scheyer",
    role: "Klinischer Psychologe",
    description: "Klinischer Psychologe & Psychotherapeut",
    image: "/images/daniel-scheyer.jpg",
  },
  {
    name: "Dr. Ines Schauer",
    role: "Ärztin",
    description: "Allgemeinmedizinerin & Ärztin für psychosomatische Medizin",
    image: "/images/ines-schauer.jpg",
  },
  {
    name: "Mag.a Isabella Lugsch MSc.",
    role: "Psychotherapeutin",
    description: "Psychotherapeutin, Klinische- und Gesundheitspsychologin",
    image: "/images/isabella-lugsch.jpg",
  },
  {
    name: "Mag.a Luisa Grabenschweiger",
    role: "Psychotherapeutin",
    description: "Psychotherapeutin in freier Praxis, Weiterbildung in Transpersonaler Psychotherapie und Holotroper Atemarbeit bei Dr. Sylvester Walch / IHTP",
    image: "/images/luisa-grabenschweiger.jpg",
  },
];

// Termine-Daten
const termine = [
  {
    id: 1,
    title: "Holotropes Atmen Kitzbühel",
    date: "18.–19. April 2026",
    location: "Bio Yoga Hof Kitzbühel",
    leader: "Mag. Andreas Schuster",
    coTherapists: "Mag.a Luisa Grabenschweiger & Mag. Daniel Scheyer",
    earlyBirdPrice: "255€",
    regularPrice: "265€",
    earlyBirdDeadline: "17. Februar 2026",
    includes: "Veganes Mittagessen & Pausenverpflegung",
    maxParticipants: 16,
    contact: {
      name: "Johanna Haas",
      email: "info@yogahof-kitzbuehel.at",
      phone: "+43 (0) 660 4990182",
      website: "www.yogahof-kitzbuehel.at",
    },
    schedule: [
      "Samstag: 09:00–18:00 (zwei Atemsitzungen)",
      "Sonntag: 09:00–13:00 (Meditation, Integration)",
    ],
  },
  {
    id: 2,
    title: "Holotropes Atmen Baden",
    date: "19.–20. September 2026",
    location: "Schildbachhof Baden",
    leader: "Mag. Andreas Schuster",
    coTherapists: "Mag.a Luisa Grabenschweiger & Mag. Daniel Scheyer",
    earlyBirdPrice: "255€",
    regularPrice: "295€",
    includes: "Veganes Mittagessen & Pausenverpflegung",
    maxParticipants: 16,
    note: "Rein vegetarisches Seminarhotel",
    registrationDeadline: "1 Monat vor Seminarbeginn",
    contact: {
      name: "Eveline Lugsch",
      email: "eveline@der-schildbachhof.at",
      phone: "+43 (0) 660 5077383",
      website: "www.der-schildbachhof.at",
    },
    schedule: [
      "Samstag: 09:00–ca. 18:00 (zwei Atemsitzungen)",
      "Sonntag: 09:00–13:00 (Meditation, Integration)",
    ],
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center pt-20 pb-16">
        <div className="section-container text-center">
          <h1 className="heading-1 text-foreground mb-6 animate-fade-in">
            HOLOTROPES ATMEN
          </h1>
          <p className="heading-3 text-foreground/90 max-w-3xl mx-auto mb-8 animate-slide-up">
            Beim Holotropen Atmen werden durch veränderte Bewusstseinszustände heilende
            und spirituelle Prozesse in Gang gesetzt.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="#termine" className="btn-primary">
              Nächste Termine
            </Link>
            <Link href="#holotropes-atmen" className="btn-outline">
              Mehr erfahren
            </Link>
          </div>
          <div className="relative max-w-4xl mx-auto">
            <Image
              src="/images/hero.jpg"
              alt="Holotropes Atmen Seminar - Gruppe bei der Atemarbeit in Österreich"
              width={1200}
              height={675}
              className="rounded-3xl shadow-2xl"
              priority
            />
          </div>
        </div>
      </section>

      {/* Holotropes Atmen Section */}
      <section id="holotropes-atmen" className="py-20 bg-card">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-2 text-foreground mb-8 text-center">
              Was ist Holotropes Atmen?
            </h2>
            <div className="body-text text-foreground/90 space-y-6">
              <p>
                Mit Hilfe beschleunigter Atmung, evokativer Musik und prozessorientierter
                Körperarbeit werden einengende Lebensmuster aufgelöst, tiefere seelische
                Schichten intensiver bearbeitet und brachliegende Potenziale aktiviert.
              </p>
              <p>
                Dies stärkt das Vertrauen in die innere Weisheit und befähigt dazu, den
                Herausforderungen des Lebens offener, mutiger und gelassener zu begegnen.
              </p>
              <p>
                Die Erfahrungen werden durch Gruppengespräche und meditative Übungen
                vertieft und integriert.
              </p>
            </div>
            <div className="mt-10 text-center">
              <Link href="/ratgeber/was-ist-holotropes-atmen" className="btn-primary">
                Ausführlicher Ratgeber
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Termine Section */}
      <section id="termine" className="py-20">
        <div className="section-container">
          <h2 className="heading-2 text-foreground mb-12 text-center">
            Termine 2026
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {termine.map((termin) => (
              <article
                key={termin.id}
                className="bg-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-all"
              >
                <div className="flex items-center gap-2 text-primary mb-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="font-jost font-semibold">{termin.date}</span>
                </div>
                <h3 className="heading-3 text-foreground mb-2">{termin.title}</h3>
                <p className="text-foreground/70 mb-4">
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {termin.location}
                  </span>
                </p>
                <div className="space-y-2 text-sm text-foreground/80 mb-6">
                  <p><strong>Leitung:</strong> {termin.leader}</p>
                  <p><strong>Co-Therapeuten:</strong> {termin.coTherapists}</p>
                  <p><strong>Inklusive:</strong> {termin.includes}</p>
                  <p><strong>Max. Teilnehmer:</strong> {termin.maxParticipants} Personen</p>
                  {termin.note && <p className="text-primary">{termin.note}</p>}
                </div>
                <div className="flex items-center justify-between border-t border-border pt-4">
                  <div>
                    <p className="text-sm text-foreground/60">Frühbucher</p>
                    <p className="text-2xl font-jost font-bold text-primary">{termin.earlyBirdPrice}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-foreground/60">Regulär</p>
                    <p className="text-xl font-jost text-foreground/70">{termin.regularPrice}</p>
                  </div>
                </div>
                <a
                  href={`mailto:anda.atmen@gmail.com?subject=Anmeldung ${termin.title}`}
                  className="btn-primary w-full mt-6 text-center block"
                >
                  Jetzt anmelden
                </a>
              </article>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="body-text text-foreground/70 mb-4">
              <strong>Voraussetzung:</strong> Normale psychische & körperliche Belastbarkeit
            </p>
            <p className="text-foreground/60">
              Kontakt: <a href="mailto:anda.atmen@gmail.com" className="text-primary hover:underline">anda.atmen@gmail.com</a>
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-card">
        <div className="section-container">
          <h2 className="heading-2 text-foreground mb-12 text-center">
            Unser Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {teamMembers.map((member) => (
              <article key={member.name} className="text-center group">
                <div className="relative w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden border-4 border-transparent group-hover:border-primary transition-all">
                  <Image
                    src={member.image}
                    alt={`${member.name} - ${member.role} bei Anda-Atmen Holotropes Atmen`}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-jost font-semibold text-foreground text-lg">
                  {member.name}
                </h3>
                <p className="text-primary text-sm mb-2">{member.role}</p>
                <p className="text-foreground/70 text-sm">{member.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="section-container text-center">
          <h2 className="heading-2 text-foreground mb-6">
            Bereit für Ihre Transformation?
          </h2>
          <p className="body-text text-foreground/80 max-w-2xl mx-auto mb-8">
            Entdecken Sie die heilende Kraft des Holotropen Atmens. Unsere erfahrenen
            Therapeuten begleiten Sie sicher auf Ihrer Reise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#termine" className="btn-primary">
              Termine ansehen
            </Link>
            <Link href="/faq" className="btn-outline">
              Häufige Fragen
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
