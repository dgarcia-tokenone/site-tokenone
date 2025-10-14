export const metadata = {
  title: "Soluções",
  description: "Tokenização, emissão, custódia e compliance para empresas.",
};

export default function SolucoesPage() {
  return (
    <section className="py-5">
      <div className="container">
        <h1 className="h2 fw-bold mb-4">Soluções</h1>
        <div className="row g-4 row-cols-1 row-cols-md-2">
          {[
            { title: 'Tokenização de Ativos', text: 'Infraestrutura para emissão e gestão de tokens com governança.' },
            { title: 'Custódia', text: 'Camadas de segurança e controle de acesso corporativo.' },
            { title: 'Compliance (KYC/AML)', text: 'Integração com provedores e trilhas de auditoria.' },
            { title: 'Conectividade', text: 'Integrações com provedores, redes e parceiros.' },
          ].map((s) => (
            <div className="col" key={s.title}>
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h2 className="h5 fw-semibold mb-2">{s.title}</h2>
                  <p className="mb-0 text-secondary">{s.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

