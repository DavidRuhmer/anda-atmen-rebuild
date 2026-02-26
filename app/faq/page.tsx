import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Häufige Fragen (FAQ) - Holotropes Atmen",
  description:
    "Antworten auf die häufigsten Fragen zum Holotropen Atmen: Kosten, Vorbereitung, Ablauf, Sicherheit und mehr.",
};

const faqs = [
  {
    question: "Was kostet ein Seminar?",
    answer:
      "Die Kosten für ein Wochenendseminar liegen zwischen 255€ (Frühbucher) und 295€ (Normalpreis). Im Preis enthalten sind veganes Mittagessen und Pausenverpflegung.",
  },
  {
    question: "Wie bereite ich mich auf das Seminar vor?",
    answer:
      "Wir empfehlen, am Tag vor dem Seminar leicht zu essen und auf Alkohol zu verzichten. Bringen Sie bequeme Kleidung, eine Decke und persönliche Gegenstände für Ihr Wohlbefinden mit. Ein Notizbuch für Ihre Erfahrungen ist ebenfalls hilfreich.",
  },
  {
    question: "Ist Holotropes Atmen gefährlich?",
    answer:
      "Bei professioneller Begleitung und Einhaltung der Kontraindikationen ist Holotropes Atmen sicher. Unsere Seminare werden von ausgebildeten Therapeuten geleitet, und es ist immer eine Ärztin anwesend.",
  },
  {
    question: "Brauche ich Vorkenntnisse oder Erfahrung?",
    answer:
      "Nein, Vorkenntnisse sind nicht erforderlich. Sie erhalten vor der Session eine ausführliche Einführung. Wir empfehlen lediglich eine normale psychische und körperliche Belastbarkeit.",
  },
  {
    question: "Was soll ich zum Seminar mitbringen?",
    answer:
      "Bequeme Kleidung (Jogginghose, T-Shirt), warme Socken, eine Decke oder Schlafsack, ein kleines Kissen, Schreibmaterial, persönliche Hygieneartikel und ggf. Wechselkleidung.",
  },
  {
    question: "Wie lange dauert eine Atemsession?",
    answer:
      "Eine einzelne Atemsession dauert etwa 2-3 Stunden. Da in Paaren gearbeitet wird (Atmer und Sitter), umfasst ein kompletter Zyklus etwa 5-6 Stunden inklusive Pausen.",
  },
  {
    question: "Kann ich alleine kommen?",
    answer:
      "Ja, die meisten Teilnehmer kommen alleine. Die Paare für die Sessions werden vor Ort gebildet. Es entsteht schnell eine vertrauensvolle Gruppenatmosphäre.",
  },
  {
    question: "Was passiert nach dem Seminar?",
    answer:
      "Die Integration der Erfahrungen ist ein wichtiger Teil des Prozesses. Wir empfehlen, sich nach dem Seminar Zeit für Ruhe zu nehmen. Bei Bedarf bieten wir auch Nachgespräche an.",
  },
  {
    question: "Gibt es eine Altersbeschränkung?",
    answer:
      "Teilnehmer sollten mindestens 18 Jahre alt sein. Nach oben gibt es keine Grenze, solange die körperliche Gesundheit eine Teilnahme erlaubt.",
  },
  {
    question: "Kann ich bei Medikamenteneinnahme teilnehmen?",
    answer:
      "Das hängt von der Art der Medikamente ab. Bei Lithium, MAO-Hemmern oder starken Psychopharmaka ist eine Teilnahme nicht möglich. Bitte kontaktieren Sie uns für eine individuelle Beratung.",
  },
];

export default function FAQPage() {
  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="pt-24 pb-16">
        <div className="section-container">
          <nav className="mb-8 text-sm">
            <ol className="flex items-center gap-2 text-foreground/60">
              <li>
                <Link href="/" className="hover:text-primary">Home</Link>
              </li>
              <li>/</li>
              <li className="text-foreground">FAQ</li>
            </ol>
          </nav>

          <h1 className="heading-1 text-foreground mb-6">
            Häufig gestellte Fragen
          </h1>
          <p className="body-text text-foreground/80 max-w-3xl mb-12">
            Hier finden Sie Antworten auf die häufigsten Fragen zu unseren Seminaren
            für Holotropes Atmen.
          </p>

          <div className="max-w-3xl space-y-6">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group bg-card rounded-xl border border-border overflow-hidden"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <h2 className="font-jost font-semibold text-foreground pr-4">
                    {faq.question}
                  </h2>
                  <svg
                    className="w-5 h-5 text-primary transition-transform group-open:rotate-180 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-foreground/80">
                  <p>{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>

          <div className="max-w-3xl mt-12 bg-primary/10 border border-primary/30 rounded-2xl p-8">
            <h3 className="heading-3 text-foreground mb-4">
              Weitere Fragen?
            </h3>
            <p className="body-text text-foreground/90 mb-6">
              Haben Sie eine Frage, die hier nicht beantwortet wurde?
              Kontaktieren Sie uns gerne direkt.
            </p>
            <a
              href="mailto:anda.atmen@gmail.com"
              className="btn-primary inline-block"
            >
              Kontakt aufnehmen
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
