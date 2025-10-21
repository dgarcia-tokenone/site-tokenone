'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

type CollapseConfig = {
  toggle?: boolean;
};

type CollapseInstance = {
  dispose(): void;
};

type CollapseConstructor = {
  new (element: Element, config?: CollapseConfig): CollapseInstance;
  getInstance(element: Element): CollapseInstance | null;
};

export default function BootstrapClient() {
  const pathname = usePathname();

  useEffect(() => {
    let isActive = true;
    let Collapse: CollapseConstructor | null = null;
    const instances = new Set<CollapseInstance>();

    const initAccordions = async () => {
      const module = await import('bootstrap/js/dist/collapse');
      if (!isActive) {
        return;
      }

      const collapseExport = (module as { default?: unknown }).default ?? module;
      Collapse = collapseExport as CollapseConstructor;

      const collapseElements = document.querySelectorAll<HTMLElement>('.accordion-collapse');
      collapseElements.forEach((element) => {
        if (Collapse?.getInstance(element)) {
          return;
        }

        if (Collapse) {
          const instance = new Collapse(element, { toggle: false });
          instances.add(instance);
        }
      });
    };

    void initAccordions();

    return () => {
      isActive = false;
      instances.forEach((instance) => {
        instance.dispose();
      });
      instances.clear();
    };
  }, [pathname]);

  return null;
}
