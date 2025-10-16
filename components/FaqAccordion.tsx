'use client';

import { useEffect, useRef } from 'react';

export type FaqQuestion = {
  q: string;
  a: string | React.ReactNode;
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
    let Collapse: any;

    const initAccordion = async () => {
      // Carrega Bootstrap dinamicamente para evitar SSR issues
      // @ts-ignore - Bootstrap não tem tipos oficiais para imports dinâmicos
      const bootstrap = await import('bootstrap/dist/js/bootstrap.bundle.min.js');
      Collapse = bootstrap.Collapse;

      // Aguarda o DOM estar pronto
      await new Promise(resolve => setTimeout(resolve, 100));

      if (accordionRef.current) {
        // Inicializa cada collapse manualmente
        const collapseElements = accordionRef.current.querySelectorAll('.accordion-collapse');
        collapseElements.forEach((element) => {
          if (!element.classList.contains('collapse-initialized')) {
            new Collapse(element, { toggle: false });
            element.classList.add('collapse-initialized');
          }
        });
      }
    };

    initAccordion();

    // Cleanup para evitar memory leaks
    return () => {
      if (accordionRef.current && Collapse) {
        const collapseElements = accordionRef.current.querySelectorAll('.accordion-collapse');
        collapseElements.forEach((element) => {
          const instance = Collapse.getInstance(element);
          if (instance) {
            instance.dispose();
          }
        });
      }
    };
  }, []);

  return (
    <div ref={accordionRef}>
      {faqs.map((category, categoryIndex) => (
        <div key={categoryIndex} className="mb-5">
          {/* Accordion do Bootstrap */}
          <div className="accordion accordion-flush" id={`faq-category-${categoryIndex}`}>
            {category.questions.map((faq, faqIndex) => {
              const accordionId = `faq-${categoryIndex}-${faqIndex}`;

              return (
                <div
                  className="accordion-item bg-transparent border-0 mb-4"
                  key={faqIndex}
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
                    data-bs-parent={`#faq-category-${categoryIndex}`}
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
        </div>
      ))}
    </div>
  );
}
