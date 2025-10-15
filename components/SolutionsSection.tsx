'use client';

import { useState } from "react";

type SolutionMetric = {
  value: string;
  label: string;
  description: string;
  progress: number;
};

type SolutionContent = {
  id: "tokenizacao" | "distribuicao" | "caas";
  label: string;
  headline: string;
  description: string;
  valueTitle: string;
  valueBullets: readonly string[];
  highlightTitle: string;
  highlightBullets: readonly string[];
  metrics: readonly SolutionMetric[];
  calloutTitle: string;
  calloutDescription: string;
};

const solutions: readonly SolutionContent[] = [
  {
    id: "caas",
    label: "Crypto as a Service",
    headline: "Crypto as a Service sem fricção",
    description:
      "Ofereça carteiras whitelabel, emissão de stablecoins e operações OTC com governança corporativa.",
    valueTitle: "Como entregamos valor",
    valueBullets: [
      "Infraestrutura de custódia MPC com políticas granulares: aprovação multi-assinatura, whitelisting e limites por transação/período",
      "Due diligence KYB corporativo: validação de beneficiários finais, screening de sanções (OFAC, ONU) e monitoramento AML on-chain",
      "Automação contábil e fiscal: conciliação de carteiras, apuração de IR (ganho de capital), relatórios SPED e DeSTDA",
    ],
    highlightTitle: "Recursos em destaque",
    highlightBullets: [
      "On/off-ramp integrado: gateways fiat licenciados, Pix API (SPI) e reconciliação bancária automatizada (OFX/CNAB)",
      "Treasury management: emissão de stablecoins lastreadas, yield farming institucional e gestão de liquidez multi-chain",
      "Monitoramento SOC 24x7: detecção de anomalias comportamentais, alertas em tempo real e seguro de custódia até US$ 100M",
    ],
    metrics: [
      {
        value: "99.95%",
        label: "SLA de disponibilidade",
        description: "Infraestrutura redundante com observabilidade completa.",
        progress: 95,
      },
      {
        value: "ISO",
        label: "Controles de segurança",
        description: "Políticas alinhadas a ISO 27001 e auditorias recorrentes.",
        progress: 85,
      },
      {
        value: "24/7",
        label: "Mesa OTC assistida",
        description: "Suporte corporativo com SLAs para tesourarias e custódia.",
        progress: 90,
      },
    ],
    calloutTitle: "Custódia MPC e auditoria 24x7",
    calloutDescription: "Integre com Fireblocks, BitGo e provedores de seguro especializado.",
  },
  {
    id: "tokenizacao",
    label: "Tokenização",
    headline: "Tokenize qualquer ativo em semanas",
    description:
      "Automatizamos emissão on-chain com compliance CVM 88, fluxos pós-oferta e monitoramento contínuo PLD/FT e LGPD.",
    valueTitle: "Como entregamos valor",
    valueBullets: [
      "Estruturação jurídica e emissão on-chain em conformidade com Resolução CVM 88/2022 e ICVM 175",
      "Processos automatizados de KYC/KYB, suitability e registro de distribuição com auditoria contínua",
      "Integração API com sistemas legados (core bancário, ERPs SAP/TOTVS) e custódia blockchain nativa",
    ],
    highlightTitle: "Recursos em destaque",
    highlightBullets: [
      "Suporte a múltiplos ativos: FIDC, CRA, debêntures, crédito de carbono e stablecoins lastreadas",
      "Smart contracts auditados com registro imutável de eventos corporativos e distribuições",
      "Certificação ICP-Brasil (Soluti, Certisign) integrada e cofres MPC enterprise-grade (Fireblocks, BitGo)",
    ],
    metrics: [
      {
        value: "40%",
        label: "Go-live mais rápido",
        description: "Comparado à estruturação tradicional de ofertas privadas.",
        progress: 80,
      },
      {
        value: "15+",
        label: "Integrações nativas",
        description: "Bancos parceiros, assinatura digital e provedores de KYC.",
        progress: 65,
      },
      {
        value: "24/7",
        label: "APIs e webhooks",
        description: "Conecte ERP, CRM, BI e motor de risco em tempo real.",
        progress: 90,
      },
    ],
    calloutTitle: "Auditoria permanente",
    calloutDescription: "Dashboards para gestores, investidores e reguladores com trilhas imutáveis.",
  },
  {
    id: "distribuicao",
    label: "Distribuição",
    headline: "Monte seu marketplace de distribuição",
    description:
      "Gerencie captações, investidores e comunicação em um fluxo integrado com compliance automatizado.",
    valueTitle: "Como entregamos valor",
    valueBullets: [
      "Motor de suitability com análise de perfil de risco, limites regulatórios e bloqueios preventivos automáticos",
      "Fluxo de captação end-to-end: cadastro qualificado, assinatura digital certificada e data room com controle de acesso",
      "Conciliação financeira automatizada: Pix, TED/DOC, boletos e liquidação DVP (delivery versus payment) on-chain",
    ],
    highlightTitle: "Recursos em destaque",
    highlightBullets: [
      "CRM omnichannel com automação de follow-up, scoring de conversão e analytics de distribuição em tempo real",
      "Workflow de assinatura eletrônica avançada ICP-Brasil com timestamping e armazenamento em nuvem certificado (ITI)",
      "Mercado secundário regulado: book de ofertas, matching automático e operações OTC com clearing on-chain",
    ],
    metrics: [
      {
        value: "2x",
        label: "Conversão em captação",
        description: "Jornadas omnichannel com analytics de engajamento.",
        progress: 75,
      },
      {
        value: "100%",
        label: "Compliance dinâmico",
        description: "Suitability automatizado com alertas e bloqueios contextuais.",
        progress: 85,
      },
      {
        value: "Tempo real",
        label: "Analytics de distribuição",
        description: "KPIs de liquidez, compliance e comunicação atualizados continuamente.",
        progress: 70,
      },
    ],
    calloutTitle: "Distribuição multicanal",
    calloutDescription: "Portal dedicado para emissores, investidores e parceiros com jornadas personalizadas.",
  },
] as const;

export default function SolutionsSection() {
  const [activeTab, setActiveTab] = useState<SolutionContent["id"]>("caas");
  const activeSolution = solutions.find((solution) => solution.id === activeTab) ?? solutions[0];

  return (
    <section
      className="py-5 py-lg-6 position-relative"
      style={{ background: "linear-gradient(135deg, #0b1120 0%, #111827 100%)" }}
      aria-labelledby="home-solutions-title"
    >
      <div className="container text-white">
        <div className="row mb-4 mb-lg-5">
          <div className="col-lg-9 mx-auto text-center">
            <span className="badge rounded-pill text-bg-primary text-uppercase fw-semibold mb-3" style={{ letterSpacing: "0.08em" }}>
              Plataforma whitelabel
            </span>
            <h2 className="display-6 fw-semibold mb-3" id="home-solutions-title">
              Infraestrutura <span className="text-primary fw-bold">whitelabel</span> de tokenização e distribuição
            </h2>
          </div>
        </div>

        <div className="d-flex justify-content-center">
          <div className="d-flex gap-2 flex-wrap justify-content-center" role="tablist" aria-label="Segmentos Token One">
            {solutions.map((tab) => {
              const isActive = tab.id === activeTab;
              return (
                <button
                  key={tab.id}
                  type="button"
                  className={`fw-semibold px-4 py-2 rounded-pill border-0 shadow-sm${isActive ? " active" : ""}`}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`pane-${tab.id}`}
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    backdropFilter: "blur(12px)",
                    backgroundColor: isActive ? "rgba(59, 130, 246, 0.9)" : "rgba(255, 255, 255, 0.08)",
                    color: "#fff",
                    border: "0",
                    boxShadow: isActive ? "0 12px 30px rgba(37, 99, 235, 0.35)" : "0 8px 20px rgba(15, 23, 42, 0.35)",
                    transition: "all 0.3s ease",
                  }}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-4 mt-lg-5" id={`pane-${activeSolution.id}`} role="tabpanel" aria-live="polite">
          <div className="row g-4 align-items-stretch">
            <div className="col-lg-7">
              <div
                className="p-4 p-lg-5 h-100 rounded-4 border border-light-subtle"
                style={{ background: "rgba(15, 23, 42, 0.55)", backdropFilter: "blur(16px)" }}
              >
                <h3 className="h2 fw-semibold mb-3 text-white">{activeSolution.headline}</h3>
                <p className="mb-4" style={{ color: "rgba(255, 255, 255, 0.75)" }}>
                  {activeSolution.description}
                </p>
                <div className="row g-4">
                  <div className="col-12 col-md-6">
                    <h4 className="h6 text-uppercase fw-semibold text-primary mb-3">{activeSolution.valueTitle}</h4>
                    <ul className="list-unstyled d-flex flex-column gap-3 mb-0">
                      {activeSolution.valueBullets.map((bullet) => (
                        <li key={bullet} className="d-flex gap-3">
                          <span className="solution-check" aria-hidden="true">
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              aria-hidden="true"
                              focusable="false"
                            >
                              <circle cx="10" cy="10" r="9" className="solution-check-ring" />
                              <path
                                d="M6 10.5l2.6 2.4L14 7.2"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>
                          <span style={{ color: "rgba(255, 255, 255, 0.8)" }}>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="col-12 col-md-6">
                    <h4 className="h6 text-uppercase fw-semibold text-primary mb-3">{activeSolution.highlightTitle}</h4>
                    <ul className="list-unstyled d-flex flex-column gap-3 mb-0">
                      {activeSolution.highlightBullets.map((bullet) => (
                        <li key={bullet} className="d-flex gap-3">
                          <span className="solution-check solution-check--success" aria-hidden="true">
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              aria-hidden="true"
                              focusable="false"
                            >
                              <circle cx="10" cy="10" r="9" className="solution-check-ring" />
                              <path
                                d="M6 10.5l2.6 2.4L14 7.2"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>
                          <span style={{ color: "rgba(255, 255, 255, 0.8)" }}>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div
                className="h-100 d-flex flex-column gap-4 rounded-4 p-4 p-lg-5"
                style={{
                  background: "linear-gradient(160deg, rgba(30, 64, 175, 0.85), rgba(14, 116, 144, 0.85))",
                  boxShadow: "0 20px 45px rgba(15, 23, 42, 0.35)",
                }}
              >
                <div className="row g-3">
                  {activeSolution.metrics.map((metric) => (
                    <div className="col-12" key={metric.label}>
                      <div className="d-flex align-items-baseline justify-content-between gap-3 mb-1">
                        <span className="h3 fw-bold text-white">{metric.value}</span>
                        <span className="text-uppercase small fw-semibold" style={{ color: "rgba(255, 255, 255, 0.8)" }}>
                          {metric.label}
                        </span>
                      </div>
                      <p className="mb-2 small" style={{ color: "rgba(255, 255, 255, 0.75)" }}>
                        {metric.description}
                      </p>
                      <div className="progress" style={{ height: "6px", backgroundColor: "rgba(255, 255, 255, 0.2)" }}>
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{
                            width: `${metric.progress}%`,
                            background: "linear-gradient(90deg, rgba(59,130,246,0.9) 0%, rgba(14,165,233,0.9) 100%)",
                          }}
                          aria-valuenow={metric.progress}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-3 rounded-3" style={{ background: "rgba(15, 23, 42, 0.2)", border: "1px solid rgba(255,255,255,0.15)" }}>
                  <h4 className="h6 text-white fw-semibold mb-2">{activeSolution.calloutTitle}</h4>
                  <p className="mb-0 small" style={{ color: "rgba(255, 255, 255, 0.8)" }}>
                    {activeSolution.calloutDescription}
                  </p>
                </div>
                <div className="mt-auto" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
