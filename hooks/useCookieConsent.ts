'use client';

import { useState, useEffect } from 'react';
import type { CookieConsent, ConsentTimestamp } from '@/lib/cookie-consent';
import {
  getConsent,
  saveConsent,
  acceptAllCookies,
  acceptNecessaryCookies,
  revokeConsent,
  hasConsent,
  hasConsentFor,
} from '@/lib/cookie-consent';

export function useCookieConsent() {
  const [consent, setConsent] = useState<ConsentTimestamp | null>(null);
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Carregar consentimento ao montar
    const currentConsent = getConsent();
    setConsent(currentConsent);
    setShowBanner(!hasConsent());

    // Escutar mudanças no consentimento
    const handleConsentChange = (event: Event) => {
      const customEvent = event as CustomEvent<ConsentTimestamp | null>;
      setConsent(customEvent.detail);
      setShowBanner(!customEvent.detail);
    };

    window.addEventListener('cookieConsentChange', handleConsentChange);

    return () => {
      window.removeEventListener('cookieConsentChange', handleConsentChange);
    };
  }, []);

  const updateConsent = (newConsent: CookieConsent) => {
    saveConsent(newConsent);
  };

  const acceptAll = () => {
    acceptAllCookies();
  };

  const acceptNecessary = () => {
    acceptNecessaryCookies();
  };

  const revoke = () => {
    revokeConsent();
  };

  return {
    consent: consent?.consent,
    timestamp: consent?.timestamp,
    showBanner,
    updateConsent,
    acceptAll,
    acceptNecessary,
    revoke,
    hasConsentFor,
  };
}
