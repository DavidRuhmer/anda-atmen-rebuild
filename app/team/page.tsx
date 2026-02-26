import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Unser Team - Therapeuten für Holotropes Atmen",
  description:
    "Lernen Sie unser erfahrenes Team kennen: Ausgebildete Therapeuten, Psychologen und Ärzte begleiten Sie sicher durch das Holotrope Atmen.",
  openGraph: {
    title: "Unser Team | Anda-Atmen",
    description:
      "Erfahrene Therapeuten für Holotropes Atmen in Österreich.",
  },
};

const teamMembers = [
  {
    slug: "andreas-schuster",
    name: "Mag. Andreas Schuster",
    role: "Seminarleiter",
    image: "/images/andreas-schuster.jpg",
    shortDesc: "Gründer von Anda-Atmen, ausgebildet bei Dr. Sylvester Walch",
  },
  {
    slug: "daniel-scheyer",
    name: "Mag. Daniel Scheyer",
    role: "Klinischer Psychologe & Psychotherapeut",
    image: "/images/daniel-scheyer.jpg",
    shortDesc: "Spezialist für Existenzanalyse und humanistische Therapie",
  },
  {
    slug: "ines-schauer",
    name: "Dr. Ines Schauer",
    role: "Ärztin",
    image: "/images/ines-schauer.jpg",
    shortDesc: "Allgemeinmedizinerin mit Fokus auf ganzheitliche Medizin",
  },
  {
    slug: "isabella-lugsch",
    name: "Mag.a Isabella Lugsch MSc.",
    role: "Psychotherapeutin",
    image: "/images/isabella-lugsch.jpg",
    shortDesc: "Integrative Therapie, Brainspotting und Traumatherapie",
  },
  {
    slug: "luisa-grabenschweiger",
    name: "Mag.a Luisa Grabenschweiger",
    role: "Psychotherapeutin",
    image: "/images/luisa-grabenschweiger.jpg",
    shortDesc: "Transpersonale Psychotherapie und Holotrope Atemarbeit",
  },
];

export default function TeamPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="section-container">
        <nav className="mb-8 text-sm">
          <ol className="flex items-center gap-2 text-foreground/60">
            <li><Link href="/" className="hover:text-primary">Home</Link></li>
            <li>/</li>
            <li className="text-foreground">Team</li>
          </ol>
        </nav>

        <h1 className="heading-1 text-foreground mb-6">Unser Team</h1>
        <p className="body-text text-foreground/80 max-w-3xl mb-12">
          Unser erfahrenes Team aus Therapeuten, Psychologen und Ärzten begleitet Sie
          sicher und einfühlsam durch das Holotrope Atmen. Alle Teammitglieder haben
          eine fundierte Ausbildung und langjährige Erfahrung.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <Link
              key={member.slug}
              href={`/team/${member.slug}`}
              className="group block bg-card rounded-2xl p-6 border border-border hover:border-primary/50 transition-all"
            >
              <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-transparent group-hover:border-primary transition-all">
                <Image
                  src={member.image}
                  alt={`${member.name} - ${member.role} bei Anda-Atmen`}
                  fill
                  className="object-cover"
                />
              </div>
              <h2 className="font-jost font-semibold text-foreground text-lg text-center">
                {member.name}
              </h2>
              <p className="text-primary text-sm text-center mb-2">{member.role}</p>
              <p className="text-foreground/70 text-sm text-center">{member.shortDesc}</p>
              <div className="mt-4 text-center">
                <span className="text-primary font-jost font-medium text-sm group-hover:underline">
                  Mehr erfahren →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
