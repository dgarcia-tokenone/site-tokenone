'use client';

import type { ReactNode } from 'react';
import { useEffect, useRef } from 'react';

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

export type FaqQuestion = {
  q: string;
  a: string | ReactNode;
};

export type FaqCategory = {
  category: string;
  questions: FaqQuestion[];
};

interface FaqAccordionProps {
  faqs: FaqCategory[];
}

/**
 * Componente de accordion para FAQs seguindo as diretivas do agents.md
 * - Acessível (WCAG AA): semântica HTML, ARIA, navegação por teclado
 * - Bootstrap 5 nativo via data-bs-* attributes
 * - TypeScript estrito
 * - Responsivo e com estilos customizados
 */
export default function FaqAccordion({ faqs }: FaqAccordionProps) {
  const accordionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let isActive = true;
    let Collapse: CollapseConstructor | null = null;
    const instances = new Map<Element, CollapseInstance>();

    const initAccordion = async () => {
      const collapseModule = await import('bootstrap/js/dist/collapse');
      if (!isActive) {
        return;
      }

      const collapseExport = (collapseModule as { default?: unknown }).default ?? collapseModule;
      Collapse = collapseExport as CollapseConstructor;

      const container = accordionRef.current;
      if (!container || !Collapse) {
        return;
      }

      const collapseElements = container.querySelectorAll<HTMLElement>('.accordion-collapse');
      collapseElements.forEach((element) => {
        if (Collapse?.getInstance(element)) {
          return;
        }

        if (Collapse) {
          const instance = new Collapse(element, { toggle: false });
          instances.set(element, instance);
        }
      });
    };

    void initAccordion();

    // Cleanup para evitar memory leaks
    return () => {
      isActive = false;
      instances.forEach((instance) => {
        instance.dispose();
      });
      instances.clear();
    };
  }, [faqs]);

  return (
    <div ref={accordionRef}>
      {faqs.map((category, categoryIndex) => {
        const accordionGroupId = `faq-category-${categoryIndex}`;
        const headingId = `${accordionGroupId}-title`;

        return (
          <section key={accordionGroupId} className="mb-5" aria-labelledby={headingId}>
            <h2
              id={headingId}
              className="h4 fw-semibold text-uppercase text-secondary mb-3"
              style={{ letterSpacing: '0.08em' }}
            >
              {category.category}
            </h2>

            {/* Accordion do Bootstrap */}
            <div className="accordion accordion-flush" id={accordionGroupId}>
              {category.questions.map((faq, faqIndex) => {
                const accordionId = `faq-${categoryIndex}-${faqIndex}`;

                return (
                  <div
                    className="accordion-item bg-transparent border-0 mb-4"
                    key={accordionId}
                  >
                    {/* Header com a pergunta */}
                    <h3 className="accordion-header" id={`heading-${accordionId}`}>
                      <button
                        className="accordion-button collapsed bg-white shadow-sm fw-semibold"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse-${accordionId}`}
                        aria-expanded="false"
                        aria-controls={`collapse-${accordionId}`}
                        style={{
                          color: '#1e293b',
                          borderRadius: '0',
                          padding: '1.25rem 1.5rem',
                          fontSize: '1.1rem',
                        }}
                      >
                        {faq.q}
                      </button>
                    </h3>

                    {/* Body com a resposta */}
                    <div
                      id={`collapse-${accordionId}`}
                      className="accordion-collapse collapse"
                      aria-labelledby={`heading-${accordionId}`}
                      data-bs-parent={`#${accordionGroupId}`}
                    >
                      <div
                        className="accordion-body bg-white"
                        style={{
                          lineHeight: 1.7,
                          color: '#64748b',
                          padding: '1.5rem',
                          fontSize: '1rem',
                        }}
                      >
                        {faq.a}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        );
      })}
    </div>
  );
}
