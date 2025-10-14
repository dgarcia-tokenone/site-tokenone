'use client';

import { useEffect } from 'react';

export default function BootstrapClient() {
  useEffect(() => {
    // Carrega JS de componentes (collapse, dropdown, etc.)
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore - Bootstrap JS não possui tipos oficiais
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);
  return null;
}

