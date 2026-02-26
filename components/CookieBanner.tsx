"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [settings, setSettings] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Small delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const saveConsent = (consent: typeof settings) => {
    localStorage.setItem("cookie-consent", JSON.stringify({
      ...consent,
      timestamp: new Date().toISOString(),
    }));
    setIsVisible(false);
  };

  const acceptAll = () => {
    saveConsent({
      necessary: true,
      analytics: true,
      marketing: true,
    });
  };

  const acceptSelected = () => {
    saveConsent(settings);
  };

  const rejectAll = () => {
    saveConsent({
      necessary: true,
      analytics: false,
      marketing: false,
    });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-4 bg-black/40">
      <div
        className="bg-card rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto border border-border"
        role="dialog"
        aria-labelledby="cookie-title"
        aria-describedby="cookie-description"
      >
        <div className="p-6">
          {/* Header */}
          <div className="flex items-start gap-4 mb-4">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <div>
              <h2 id="cookie-title" className="font-jost font-semibold text-lg text-foreground">
                Ihre Privatsphäre ist uns wichtig
              </h2>
              <p id="cookie-description" className="text-foreground/70 text-sm mt-1">
                Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung zu bieten.
              </p>
            </div>
          </div>

          {/* Settings Toggle */}
          {showSettings ? (
            <div className="space-y-4 mb-6">
              {/* Necessary Cookies */}
              <div className="flex items-start justify-between gap-4 p-4 bg-background rounded-xl">
                <div>
                  <p className="font-jost font-medium text-foreground">Notwendige Cookies</p>
                  <p className="text-sm text-foreground/60 mt-1">
                    Erforderlich für grundlegende Website-Funktionen. Können nicht deaktiviert werden.
                  </p>
                </div>
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={true}
                    disabled
                    className="sr-only"
                  />
                  <div className="w-11 h-6 bg-primary rounded-full cursor-not-allowed">
                    <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transform translate-x-5"></div>
                  </div>
                </div>
              </div>

              {/* Analytics Cookies */}
              <div className="flex items-start justify-between gap-4 p-4 bg-background rounded-xl">
                <div>
                  <p className="font-jost font-medium text-foreground">Analyse-Cookies</p>
                  <p className="text-sm text-foreground/60 mt-1">
                    Helfen uns zu verstehen, wie Besucher unsere Website nutzen.
                  </p>
                </div>
                <button
                  onClick={() => setSettings({ ...settings, analytics: !settings.analytics })}
                  className="relative focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-full"
                  role="switch"
                  aria-checked={settings.analytics}
                >
                  <div className={`w-11 h-6 rounded-full transition-colors ${settings.analytics ? 'bg-primary' : 'bg-gray-300'}`}>
                    <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${settings.analytics ? 'translate-x-6' : 'translate-x-1'}`}></div>
                  </div>
                </button>
              </div>

              {/* Marketing Cookies */}
              <div className="flex items-start justify-between gap-4 p-4 bg-background rounded-xl">
                <div>
                  <p className="font-jost font-medium text-foreground">Marketing-Cookies</p>
                  <p className="text-sm text-foreground/60 mt-1">
                    Werden verwendet, um relevante Werbung anzuzeigen.
                  </p>
                </div>
                <button
                  onClick={() => setSettings({ ...settings, marketing: !settings.marketing })}
                  className="relative focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-full"
                  role="switch"
                  aria-checked={settings.marketing}
                >
                  <div className={`w-11 h-6 rounded-full transition-colors ${settings.marketing ? 'bg-primary' : 'bg-gray-300'}`}>
                    <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${settings.marketing ? 'translate-x-6' : 'translate-x-1'}`}></div>
                  </div>
                </button>
              </div>
            </div>
          ) : (
            <p className="text-foreground/70 text-sm mb-6">
              Wir nutzen Cookies und ähnliche Technologien, um unsere Website zu verbessern
              und Ihnen personalisierte Inhalte anzubieten. Sie können Ihre Einstellungen
              jederzeit anpassen.
            </p>
          )}

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3">
            {showSettings ? (
              <>
                <button
                  onClick={acceptSelected}
                  className="btn-primary flex-1"
                >
                  Auswahl speichern
                </button>
                <button
                  onClick={() => setShowSettings(false)}
                  className="px-6 py-3 text-foreground/70 hover:text-foreground transition-colors font-jost font-medium"
                >
                  Zurück
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={acceptAll}
                  className="btn-primary flex-1"
                >
                  Alle akzeptieren
                </button>
                <button
                  onClick={rejectAll}
                  className="px-6 py-3 border-2 border-border rounded-full text-foreground hover:bg-background transition-colors font-jost font-medium flex-1"
                >
                  Nur notwendige
                </button>
              </>
            )}
          </div>

          {/* Settings Link */}
          {!showSettings && (
            <button
              onClick={() => setShowSettings(true)}
              className="w-full text-center text-primary hover:underline text-sm mt-4 font-jost"
            >
              Einstellungen anpassen
            </button>
          )}

          {/* Privacy Link */}
          <div className="mt-4 pt-4 border-t border-border text-center">
            <Link href="/datenschutz" className="text-foreground/60 hover:text-primary text-sm">
              Mehr in unserer Datenschutzerklärung
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
