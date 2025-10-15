/**
 * Biblioteca de gerenciamento de consentimento de cookies (LGPD)
 * Armazena preferências do usuário no localStorage
 */

export type CookieConsent = {
  necessary: boolean; // Sempre true (não pode ser desativado)
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
};

export type ConsentTimestamp = {
  consent: CookieConsent;
  timestamp: string;
  version: string;
};

const CONSENT_KEY = 'tokenone_cookie_consent';
const CONSENT_VERSION = '1.0';

/**
 * Obtém o consentimento atual do localStorage
 */
export function getConsent(): ConsentTimestamp | null {
  if (typeof window === 'undefined') return null;

  try {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (!stored) return null;

    const parsed = JSON.parse(stored) as ConsentTimestamp;

    // Verificar se a versão é a mesma
    if (parsed.version !== CONSENT_VERSION) {
      return null;
    }

    return parsed;
  } catch {
    return null;
  }
}

/**
 * Salva o consentimento no localStorage
 */
export function saveConsent(consent: CookieConsent): void {
  if (typeof window === 'undefined') return;

  const data: ConsentTimestamp = {
    consent,
    timestamp: new Date().toISOString(),
    version: CONSENT_VERSION,
  };

  try {
    localStorage.setItem(CONSENT_KEY, JSON.stringify(data));

    // Disparar evento customizado para atualizar componentes
    window.dispatchEvent(new CustomEvent('cookieConsentChange', { detail: data }));
  } catch (error) {
    console.error('Erro ao salvar consentimento de cookies:', error);
  }
}

/**
 * Aceita todos os cookies
 */
export function acceptAllCookies(): void {
  saveConsent({
    necessary: true,
    analytics: true,
    marketing: true,
    preferences: true,
  });
}

/**
 * Aceita apenas cookies necessários
 */
export function acceptNecessaryCookies(): void {
  saveConsent({
    necessary: true,
    analytics: false,
    marketing: false,
    preferences: false,
  });
}

/**
 * Revoga o consentimento (limpa do localStorage)
 */
export function revokeConsent(): void {
  if (typeof window === 'undefined') return;

  try {
    localStorage.removeItem(CONSENT_KEY);
    window.dispatchEvent(new CustomEvent('cookieConsentChange', { detail: null }));
  } catch (error) {
    console.error('Erro ao revogar consentimento:', error);
  }
}

/**
 * Verifica se o usuário já deu consentimento
 */
export function hasConsent(): boolean {
  return getConsent() !== null;
}

/**
 * Verifica se um tipo específico de cookie foi consentido
 */
export function hasConsentFor(type: keyof CookieConsent): boolean {
  const consent = getConsent();
  if (!consent) return false;
  return consent.consent[type];
}
