import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ratgeber Holotropes Atmen",
  description:
    "Erfahren Sie alles über Holotropes Atmen: Was es ist, wie es wirkt, welche Erfahrungen Teilnehmer machen und worauf Sie achten sollten.",
  openGraph: {
    title: "Ratgeber Holotropes Atmen | Anda-Atmen",
    description:
      "Erfahren Sie alles über Holotropes Atmen: Was es ist, wie es wirkt und worauf Sie achten sollten.",
  },
};

const articles = [
  {
    slug: "was-ist-holotropes-atmen",
    title: "Was ist Holotropes Atmen?",
    description:
      "Eine umfassende Einführung in die Methode des Holotropen Atmens, ihre Geschichte und wie eine typische Session abläuft.",
    readTime: "8 Min. Lesezeit",
    category: "Grundlagen",
  },
  {
    slug: "anleitung-und-ablauf",
    title: "Anleitung und Ablauf",
    description:
      "Schritt für Schritt durch eine Holotrope Atemsession: Vorbereitung, Atmung, Musik, Körperarbeit und Integration.",
    readTime: "10 Min. Lesezeit",
    category: "Grundlagen",
  },
  {
    slug: "wirkung-und-erfahrungen",
    title: "Wirkung und Erfahrungen",
    description:
      "Erfahren Sie, welche Wirkungen Holotropes Atmen hat und welche Erfahrungen Teilnehmer in unseren Seminaren machen.",
    readTime: "6 Min. Lesezeit",
    category: "Grundlagen",
  },
  {
    slug: "musik-holotropes-atmen",
    title: "Die Rolle der Musik",
    description:
      "Wie speziell ausgewählte Musik den Atemprozess unterstützt und transformative Erfahrungen ermöglicht.",
    readTime: "7 Min. Lesezeit",
    category: "Grundlagen",
  },
  {
    slug: "risiken-und-nebenwirkungen",
    title: "Risiken und Nebenwirkungen",
    description:
      "Wichtige Informationen zu Kontraindikationen, Sicherheitsvorkehrungen und für wen Holotropes Atmen nicht geeignet ist.",
    readTime: "5 Min. Lesezeit",
    category: "Grundlagen",
  },
  {
    slug: "stanislav-grof",
    title: "Stanislav Grof",
    description:
      "Der Begründer des Holotropen Atmens: Vom LSD-Forscher zum Pionier der transpersonalen Psychologie.",
    readTime: "8 Min. Lesezeit",
    category: "Hintergrund",
  },
  {
    slug: "erfahrungsebenen",
    title: "Die fünf Erfahrungsebenen",
    description:
      "Welche Bewusstseinsebenen beim Holotropen Atmen zugänglich werden: von biografisch bis transpersonal.",
    readTime: "8 Min. Lesezeit",
    category: "Theorie",
  },
  {
    slug: "perinatale-matrizen",
    title: "Perinatale Matrizen",
    description:
      "Die vier Geburtsphasen nach Grof (BPM I-IV) und wie sie unser psychisches Leben prägen.",
    readTime: "12 Min. Lesezeit",
    category: "Theorie",
  },
  {
    slug: "transpersonale-psychologie",
    title: "Transpersonale Psychologie",
    description:
      "Die vierte Kraft der Psychologie: Brückenschlag zwischen Psychotherapie und Spiritualität.",
    readTime: "10 Min. Lesezeit",
    category: "Hintergrund",
  },
  {
    slug: "spirituelle-krisen",
    title: "Spirituelle Krisen",
    description:
      "Wenn sich das Bewusstsein öffnet: Intensive Transformationsprozesse verstehen und begleiten.",
    readTime: "9 Min. Lesezeit",
    category: "Theorie",
  },
];

export default function RatgeberPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="section-container">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm">
          <ol className="flex items-center gap-2 text-foreground/60">
            <li>
              <Link href="/" className="hover:text-primary">
                Home
              </Link>
            </li>
            <li>/</li>
            <li className="text-foreground">Ratgeber</li>
          </ol>
        </nav>

        <h1 className="heading-1 text-foreground mb-6">
          Ratgeber Holotropes Atmen
        </h1>
        <p className="body-text text-foreground/80 max-w-3xl mb-12">
          In unserem Ratgeber finden Sie umfassende Informationen über Holotropes
          Atmen. Erfahren Sie mehr über die Methode, ihre Wirkung und worauf Sie
          achten sollten.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/ratgeber/${article.slug}`}
              className="group block bg-card rounded-2xl p-6 border border-border hover:border-primary/50 transition-all"
            >
              <div className="flex items-center gap-2 text-primary text-sm mb-4">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
                <span>{article.readTime}</span>
              </div>
              <h2 className="heading-3 text-foreground mb-3 group-hover:text-primary transition-colors">
                {article.title}
              </h2>
              <p className="text-foreground/70">{article.description}</p>
              <div className="mt-4 text-primary font-jost font-medium flex items-center gap-2">
                Weiterlesen
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
