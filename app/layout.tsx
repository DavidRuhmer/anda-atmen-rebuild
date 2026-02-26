import type { Metadata } from "next";
import { Jost, Cardo } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import SchemaOrg from "@/components/SchemaOrg";

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  display: "swap",
});

const cardo = Cardo({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-cardo",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://anda-atmen.at"),
  title: {
    default: "Holotropes Atmen Österreich | Seminare Wien & Kitzbühel | Anda-Atmen",
    template: "%s | Anda-Atmen",
  },
  description:
    "Holotropes Atmen Seminare in Österreich. Erfahrene Therapeuten begleiten Sie in Wien, Kitzbühel & Baden. Nächste Termine 2026. Jetzt anmelden!",
  keywords: [
    "holotropes atmen",
    "holotropes atmen wien",
    "holotropes atmen österreich",
    "holotropes atmen seminar",
    "atemtherapie",
    "breathwork wien",
    "transpersonale psychologie",
    "stanislav grof",
    "sylvester walch",
    "bewusstseinserweiterung",
  ],
  authors: [{ name: "Anda-Atmen" }],
  creator: "Anda-Atmen",
  publisher: "Anda-Atmen",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "de_AT",
    url: "https://anda-atmen.at",
    siteName: "Anda-Atmen",
    title: "Holotropes Atmen Österreich | Seminare Wien & Kitzbühel",
    description:
      "Holotropes Atmen Seminare in Österreich. Erfahrene Therapeuten begleiten Sie in Wien, Kitzbühel & Baden. Nächste Termine 2026.",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Holotropes Atmen Seminar - Anda-Atmen",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Holotropes Atmen Österreich | Anda-Atmen",
    description:
      "Holotropes Atmen Seminare in Österreich. Erfahrene Therapeuten begleiten Sie in Wien, Kitzbühel & Baden.",
    images: ["/images/hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://anda-atmen.at",
    languages: {
      "de-AT": "https://anda-atmen.at",
    },
  },
  verification: {
    // google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de-AT" className={`${jost.variable} ${cardo.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#0f0e17" />
      </head>
      <body className="bg-background text-foreground font-cardo antialiased">
        <SchemaOrg />
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
