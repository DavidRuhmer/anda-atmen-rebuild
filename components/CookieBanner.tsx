"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem("cookie-consent", JSON.stringify({
      necessary: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString(),
    }));
    setIsVisible(false);
  };

  const acceptNecessary = () => {
    localStorage.setItem("cookie-consent", JSON.stringify({
      necessary: true,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString(),
    }));
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] bg-background border-t border-border p-4 md:p-6 shadow-2xl">
      <div className="section-container">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
          <div className="flex-1">
            <h3 className="font-jost font-semibold text-lg mb-2">
              🍪 Cookie-Einstellungen
            </h3>
            <p className="text-foreground/80 text-sm mb-2">
              Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung auf unserer
              Website zu bieten. Sie können wählen, welche Cookies Sie akzeptieren möchten.
            </p>
            {showDetails && (
              <div className="mt-4 p-4 bg-card rounded-lg text-sm">
                <div className="mb-3">
                  <strong className="text-primary">Notwendige Cookies:</strong>
                  <p className="text-foreground/70">
                    Diese Cookies sind für die Grundfunktionen der Website erforderlich.
                  </p>
                </div>
                <div className="mb-3">
                  <strong className="text-primary">Analyse-Cookies:</strong>
                  <p className="text-foreground/70">
                    Helfen uns zu verstehen, wie Besucher mit der Website interagieren.
                  </p>
                </div>
                <div>
                  <strong className="text-primary">Marketing-Cookies:</strong>
                  <p className="text-foreground/70">
                    Werden verwendet, um relevante Werbung anzuzeigen.
                  </p>
                </div>
              </div>
            )}
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="text-primary text-sm hover:underline mt-2"
            >
              {showDetails ? "Weniger anzeigen" : "Mehr erfahren"}
            </button>
            <span className="mx-2 text-foreground/50">|</span>
            <Link href="/datenschutz" className="text-primary text-sm hover:underline">
              Datenschutzerklärung
            </Link>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={acceptNecessary}
              className="btn-outline text-sm px-4 py-2"
            >
              Nur notwendige
            </button>
            <button
              onClick={acceptAll}
              className="btn-primary text-sm px-4 py-2"
            >
              Alle akzeptieren
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
