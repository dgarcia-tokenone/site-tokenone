export const metadata = {
  title: "FAQ",
  description: "Perguntas frequentes sobre a plataforma e serviços.",
};

export default function FaqPage() {
  const faqs = [
    {
      q: 'O que é tokenização de ativos?',
      a: 'É o processo de representar um ativo no formato digital (token) em uma rede segura.',
    },
    {
      q: 'Vocês atendem requisitos regulatórios?',
      a: 'Oferecemos integrações e trilhas de auditoria para KYC/AML e conformidade.',
    },
  ];

  return (
    <section className="py-5">
      <div className="container">
        <h1 className="h2 fw-bold mb-4">Perguntas frequentes</h1>
        <div className="accordion" id="faq">
          {faqs.map((f, i) => (
            <div className="accordion-item" key={i}>
              <h2 className="accordion-header" id={`faq-h-${i}`}>
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#faq-c-${i}`}
                  aria-expanded="false"
                  aria-controls={`faq-c-${i}`}
                >
                  {f.q}
                </button>
              </h2>
              <div
                id={`faq-c-${i}`}
                className="accordion-collapse collapse"
                aria-labelledby={`faq-h-${i}`}
                data-bs-parent="#faq"
              >
                <div className="accordion-body text-secondary">{f.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

