'use client';

import Link from "next/link";
import { useMemo, useState } from "react";

const snippets = {
  node: `// Exemplo de integração com Node.js
import tokenOne from '@tokenone/sdk';

const asset = await tokenOne.createToken({
  name: 'Meu Ativo',
  type: 'RWA',
  blockchain: 'polygon',
  supply: 1_000_000,
});

// Sucesso: token criado na blockchain com governança Token One`,
  python: `# Exemplo de integração com Python
from tokenone import TokenOne

client = TokenOne(api_key="seu-token")
asset = client.create_token(
    name="Meu Ativo",
    type="RWA",
    blockchain="polygon",
    supply=1_000_000,
)

# Sucesso: token registrado com sucesso`,
  curl: `# Exemplo de integração via cURL
curl -X POST https://api.tokenone.com/v1/tokens \\
  -H "Authorization: Bearer SEU_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "Meu Ativo",
    "type": "RWA",
    "blockchain": "polygon",
    "supply": 1000000
  }'

# Resultado: token emitido na rede selecionada`,
  webhook: `// Exemplo de webhook para eventos
app.post('/webhooks/tokenone', async (req, res) => {
  const event = req.body;

  if (event.type === 'token.minted') {
    await syncLedger(event.data);
  }

  res.status(200).send('ok');
});

// Notificação: auditoria em tempo real`,
} as const;

const snippetTabs = [
  { id: "node", label: "Node" },
  { id: "python", label: "Python" },
  { id: "curl", label: "cURL" },
  { id: "webhook", label: "Webhook" },
] as const;

export default function DevelopersSection() {
  const [activeSnippet, setActiveSnippet] = useState<(typeof snippetTabs)[number]["id"]>("node");
  const code = useMemo(() => snippets[activeSnippet], [activeSnippet]);

  return (
    <section className="developers-section py-5 py-lg-6" aria-labelledby="developers-title">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-12 col-lg-6">
            <div className="developers-copy">
              <span className="developers-eyebrow text-uppercase fw-semibold">Para desenvolvedores</span>
              <h2 className="developers-title" id="developers-title">
                Implemente sua solução com nossas APIs
              </h2>
              <p className="developers-description">
                A <span className="fw-semibold">Token One</span> oferece uma infraestrutura CaaS pronta para produção. Integre
                tokenização, gestão de wallets e emissão de ativos em minutos com SDKs confiáveis, documentação viva e suporte
                dedicado.
              </p>

              <div className="developers-highlight-grid">
                <div className="developers-highlight">
                  <h3 className="developers-highlight-title">SDKs prontos</h3>
                  <p className="developers-highlight-text">
                    Pacotes TypeScript, Python e coleções Postman com exemplos versionados para acelerar o onboarding do time.
                  </p>
                </div>
                <div className="developers-highlight">
                  <h3 className="developers-highlight-title">Observabilidade total</h3>
                  <p className="developers-highlight-text">
                    Webhooks resilientes, auditoria em tempo real e alertas configuráveis para garantir governança ponta-a-ponta.
                  </p>
                </div>
              </div>

              <p className="developers-note">
                Sandbox gratuita, sem cartão e com suporte técnico dedicado desde o primeiro deploy.
              </p>

              <Link className="btn btn-dark btn-lg developers-docs-btn" href="/">
                Ver documentação
              </Link>
            </div>
          </div>

          <div className="col-12 col-lg-6">
            <div className="developers-code-card">
              <div className="developers-code-header">
                <div role="tablist" aria-label="Exemplos de código" className="developers-tabs">
                  {snippetTabs.map((tab) => {
                    const isActive = tab.id === activeSnippet;
                    const isWebhook = tab.id === "webhook";
                    return (
                      <button
                        key={tab.id}
                        type="button"
                        className={`developers-tab${isActive ? " is-active" : ""}${isWebhook ? " d-none d-lg-inline-block" : ""}`}
                        role="tab"
                        aria-selected={isActive}
                        onClick={() => setActiveSnippet(tab.id)}
                      >
                        {tab.label}
                      </button>
                    );
                  })}
                </div>
                <button
                  type="button"
                  className="developers-copy-btn d-none d-lg-block"
                  onClick={async () => {
                    try {
                      await navigator.clipboard.writeText(code);
                    } catch {
                      // Clipboard API indisponível
                    }
                  }}
                >
                  Copiar
                </button>
              </div>
              <pre className="developers-code-block" aria-live="polite">
                <code>{code}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
