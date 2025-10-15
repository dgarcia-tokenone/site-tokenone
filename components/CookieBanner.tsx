'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useCookieConsent } from '@/hooks/useCookieConsent';
import type { CookieConsent } from '@/lib/cookie-consent';

export default function CookieBanner() {
  const { showBanner, acceptAll, acceptNecessary, updateConsent } = useCookieConsent();
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState<CookieConsent>({
    necessary: true,
    analytics: true,
    marketing: false,
    preferences: true,
  });

  if (!showBanner) return null;

  const handleSavePreferences = () => {
    updateConsent(preferences);
  };

  const togglePreference = (key: keyof CookieConsent) => {
    if (key === 'necessary') return; // Não pode desativar cookies necessários
    setPreferences((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div
      className="cookie-banner position-fixed bottom-0 start-0 end-0 bg-white shadow-lg border-top border-secondary"
      role="dialog"
      aria-labelledby="cookie-banner-title"
      aria-describedby="cookie-banner-description"
      style={{ zIndex: 9999 }}
    >
      <div className="container py-4">
        {!showPreferences ? (
          // Banner simples
          <div className="row align-items-center g-3">
            <div className="col-12 col-lg-8">
              <h2 id="cookie-banner-title" className="h5 fw-bold mb-2">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="me-2"
                  style={{ verticalAlign: 'middle' }}
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
                Este site utiliza cookies
              </h2>
              <p id="cookie-banner-description" className="mb-0 text-secondary">
                Usamos cookies para melhorar sua experiência de navegação, analisar o tráfego do site e personalizar conteúdo.
                Ao clicar em &quot;Aceitar todos&quot;, você concorda com o uso de todos os cookies conforme nossa{' '}
                <Link href="/politica-cookies" className="text-decoration-none fw-semibold">
                  Política de Cookies
                </Link>
                .
              </p>
            </div>
            <div className="col-12 col-lg-4">
              <div className="d-grid gap-2 d-sm-flex">
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={() => setShowPreferences(true)}
                  aria-label="Personalizar preferências de cookies"
                >
                  Personalizar
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={acceptNecessary}
                  aria-label="Aceitar apenas cookies necessários"
                >
                  Apenas Necessários
                </button>
                <button
                  type="button"
                  className="btn btn-primary flex-sm-fill"
                  onClick={acceptAll}
                  aria-label="Aceitar todos os cookies"
                >
                  Aceitar Todos
                </button>
              </div>
            </div>
          </div>
        ) : (
          // Painel de preferências
          <div>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h2 id="cookie-banner-title" className="h5 fw-bold mb-0">
                Preferências de Cookies
              </h2>
              <button
                type="button"
                className="btn-close"
                onClick={() => setShowPreferences(false)}
                aria-label="Fechar painel de preferências"
              />
            </div>

            <p className="text-secondary mb-3">
              Escolha quais tipos de cookies você deseja aceitar. Cookies necessários não podem ser desativados.
            </p>

            <div className="row g-3 mb-4">
              {/* Cookies Necessários */}
              <div className="col-12 col-md-6">
                <div className="card h-100 border">
                  <div className="card-body">
                    <div className="form-check form-switch mb-2">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="cookie-necessary"
                        checked={preferences.necessary}
                        disabled
                        aria-label="Cookies necessários (sempre ativados)"
                      />
                      <label className="form-check-label fw-semibold" htmlFor="cookie-necessary">
                        Necessários
                        <span className="badge bg-secondary ms-2">Obrigatório</span>
                      </label>
                    </div>
                    <p className="small text-secondary mb-0">
                      Essenciais para o funcionamento do site. Incluem cookies de sessão e segurança.
                    </p>
                  </div>
                </div>
              </div>

              {/* Cookies de Preferências */}
              <div className="col-12 col-md-6">
                <div className="card h-100 border">
                  <div className="card-body">
                    <div className="form-check form-switch mb-2">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="cookie-preferences"
                        checked={preferences.preferences}
                        onChange={() => togglePreference('preferences')}
                        aria-label="Cookies de preferências"
                      />
                      <label className="form-check-label fw-semibold" htmlFor="cookie-preferences">
                        Preferências
                      </label>
                    </div>
                    <p className="small text-secondary mb-0">
                      Armazenam suas escolhas e configurações (idioma, região, etc.).
                    </p>
                  </div>
                </div>
              </div>

              {/* Cookies de Análise */}
              <div className="col-12 col-md-6">
                <div className="card h-100 border">
                  <div className="card-body">
                    <div className="form-check form-switch mb-2">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="cookie-analytics"
                        checked={preferences.analytics}
                        onChange={() => togglePreference('analytics')}
                        aria-label="Cookies de análise"
                      />
                      <label className="form-check-label fw-semibold" htmlFor="cookie-analytics">
                        Análise
                      </label>
                    </div>
                    <p className="small text-secondary mb-0">
                      Nos ajudam a entender como você usa o site para melhorar a experiência.
                    </p>
                  </div>
                </div>
              </div>

              {/* Cookies de Marketing */}
              <div className="col-12 col-md-6">
                <div className="card h-100 border">
                  <div className="card-body">
                    <div className="form-check form-switch mb-2">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="cookie-marketing"
                        checked={preferences.marketing}
                        onChange={() => togglePreference('marketing')}
                        aria-label="Cookies de marketing"
                      />
                      <label className="form-check-label fw-semibold" htmlFor="cookie-marketing">
                        Marketing
                      </label>
                    </div>
                    <p className="small text-secondary mb-0">
                      Usados para personalizar anúncios e medir a eficácia de campanhas.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="d-flex flex-column flex-sm-row gap-2 justify-content-end">
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={() => setShowPreferences(false)}
              >
                Cancelar
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={acceptNecessary}
              >
                Apenas Necessários
              </button>
              <button type="button" className="btn btn-primary" onClick={handleSavePreferences}>
                Salvar Preferências
              </button>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .cookie-banner {
          animation: slideUp 0.4s ease-out;
        }

        @keyframes slideUp {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
