'use client';

import { useEffect } from 'react';

export default function BootstrapClient() {
  useEffect(() => {
    // Carrega JS de componentes (collapse, dropdown, etc.)
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);
  return null;
}

