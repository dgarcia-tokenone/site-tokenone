import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import PillarCard from "@/components/PillarCard";
import CultureCard from "@/components/CultureCard";

const pageTitle = "Quem somos";
const pageDescription =
  "Infraestrutura white label para tokenização, distribuição e operação de ativos digitais com foco em governança, compliance contínuo e experiência do emissor.";

const canonicalUrl = new URL("/quem-somos", siteConfig.url).toString();

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    title: `${siteConfig.name} — ${pageTitle}`,
    description: pageDescription,
    url: canonicalUrl,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${pageTitle}`,
    description: pageDescription,
    images: [siteConfig.ogImage],
  },
};

const pillars = [
  {
    badge: "Crypto as a Service)",
    description:
      "Entregamos carteiras MPC, emissões de stablecoins e integrações fiat-crypto sob demanda, com SLAs corporativos.",
  },
  {
    badge: "Tokenização",
    description:
      "Estruturamos ofertas dentro da CVM 88 com governança digital, trilhas de auditoria e cap table automatizado.",
  },
  {
    badge: "Distribuição whitelabel",
    description:
      "Criamos marketplaces customizados com onboarding, suitability e experiências omnichannel para investidores.",
  },
] as const;

const leadership = [
  {
    name: "Luiz Gustavo Nugnes",
    role: "Founder & CEO",
    bio: "Sólida experiência no mercado financeiro e iniciativas em Blockchain. Lidera a visão de produtos e parcerias estratégicas da plataforma Token One.",
    base: "São Paulo, SP",
    skills: ["Product vision", "Parcerias Estratégicas", "Regulação", "Blockchain"],
    image: "/images/Luiz-Gustavo.png",
    imageAlt: "Luiz Gustavo Nugnes",
  },
  {
    name: "Daniel Garcia",
    role: "Co-Founder & COO",
    bio: "Experiência sólida em análise de dados, produtos digitais e sistemas financeiros. Coordena operações, relacionamento com emissores e o roadmap operacional da plataforma.",
    base: "Paulínia, SP",
    skills: ["Operações", "Compliance", "Produtos Digitais", "Experiência do Emissor"],
    image: "/images/Daniel-Garcia.png",
    imageAlt: "Daniel Garcia",
  },
  {
    name: "Rodinei Lima",
    role: "Solution Architect & DevOps Engineer",
    bio: "Responsável por arquitetura de integração, padrões de API e escalabilidade cloud. Conduz a implementação técnica de tokenização, custody connectors e ferramentas de monitoramento.",
    base: "São Paulo, SP",
    skills: ["Arquitetura Cloud", "Segurança e Observabilidade", "Integrações Blockchain"],
    image: "/images/Rodinei.png",
    imageAlt: "Rodinei Lima",
  },
] as const;

const cultureValues = [
  {
    title: "Regulação como diferencial",
    description:
      "Atuamos sob os requisitos da CVM 88 e referenciais de LGPD, alinhando compliance e experiência do usuário desde o design da jornada.",
  },
  {
    title: "Tecnologia conectada",
    description:
      "Conectamos APIs de bancos, custódias, provedores de KYC e ferramentas de analytics para uma visão unificada da operação.",
  },
  {
    title: "Time próximo",
    description:
      "Trabalhamos junto aos clientes com squads dedicados, OKRs compartilhados e acompanhamento contínuo de resultados.",
  },
] as const;

export default function AboutPage() {
  return (
    <>
      <section
        className="about-hero-section py-5 py-lg-6"
        style={{
          paddingTop: "6rem",
        }}
        aria-labelledby="quem-somos-hero-title"
      >
        <span className="shape shape-one" aria-hidden="true" />
        <span className="shape shape-two" aria-hidden="true" />
        <span className="shape shape-three" aria-hidden="true" />
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-12 col-lg-6 text-white">
              <p className="text-uppercase fw-bold large mb-3" style={{ letterSpacing: "0.2em", color: "#60a5fa" }}>
                Sobre a Token One
              </p>
              <h1 className="display-6 mb-4" id="quem-somos-hero-title" style={{ lineHeight: 1.2 }}>
                A Token One é uma empresa de tecnologia que oferece uma plataforma whitelabel de Crypto as a Service (CaaS) para transformar qualquer ativo em um token digital utilizando a Blockchain.
              </h1>

              <div className="d-flex flex-wrap gap-3">
                <Link className="btn fw-bold btn-outline-light px-4" href="https://app.tokenone.com.br/authentication?organizationId=5rSaRhby9TbL7nmJa6rp">
                  Conheça a Plataforma
                </Link>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="position-relative">
                <Image
                  src="/images/estrutura.png"
                  alt="Estrutura tecnológica Token One"
                  width={960}
                  height={720}
                  sizes="(max-width: 991px) 100vw, 540px"
                  priority
                  className="img-fluid"
                  style={{ display: "block" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 py-lg-6" style={{ backgroundColor: "#f8fafc" }} aria-labelledby="quem-somos-pilares-title">
        <div className="container">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-lg-8">
              <h2 className="display-6 fw-bold mb-3" id="quem-somos-pilares-title" style={{ color: "#0f172a" }}>
                Nossos pilares
              </h2>
            </div>
          </div>
          <div className="row g-4">
            {pillars.map((pillar, index) => (
              <div className="col-md-6 col-lg-4" key={pillar.badge}>
                <PillarCard badge={pillar.badge} description={pillar.description} index={index} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-5"
        style={{ backgroundColor: "#0b1120" }}
        aria-labelledby="quem-somos-leadership-title"
      >
        <div className="container">
          <div className="row text-center mb-5">
            <div className="col">
              <h2 className="h2 fw-bold text-white mb-3" id="quem-somos-leadership-title">
                Nosso Time
              </h2>
              <p className="text-white-50 mb-0">
                Um time que combina regulação, produto digital, operações e arquitetura de sistemas para entregar
                experiências completas.
              </p>
            </div>
          </div>
          <div className="row g-4">
            {leadership.map((leader) => (
              <div className="col-md-4" key={leader.name}>
                <div
                  className="card h-100 shadow-sm border-0"
                  style={{ backgroundColor: "#111827", color: "#f9fafb" }}
                >
                  <div className="card-body p-4 d-flex flex-column gap-3">
                    <div className="d-flex align-items-center gap-3">
                      <div className="position-relative" style={{ width: "144px", height: "144px" }}>
                        <Image
                          src={leader.image}
                          alt={leader.imageAlt}
                          fill
                          sizes="144px"
                          className="rounded-circle shadow-sm"
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                      <div>
                        <h3 className="h5 fw-bold text-white mb-1">{leader.name}</h3>
                        <span className="text-white-50 text-uppercase small">{leader.role}</span>
                      </div>
                    </div>
                    <p className="text-white-50 mb-0" style={{ fontSize: "0.95rem" }}>
                      {leader.bio}
                    </p>
                    <div className="d-flex flex-wrap gap-2">
                      {leader.skills.map((skill) => (
                        <span className="badge bg-light text-dark" key={skill}>
                          {skill}
                        </span>
                      ))}
                    </div>
                    <p className="text-white-50 small mb-0 mt-auto">
                      <span className="fw-semibold text-white">Base:</span> {leader.base}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-5 py-lg-6" style={{ backgroundColor: "#f8fafc" }} aria-labelledby="quem-somos-cultura-title">
        <div className="container">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-lg-8">
              <h2 className="display-6 fw-bold mb-3" id="quem-somos-cultura-title" style={{ color: "#0f172a" }}>
                Nossa cultura de entrega
              </h2>
              <p className="lead text-muted mb-0">
                Transparência, compliance responsivo e co-criação com clientes para tirar ideias do papel rapidamente
              </p>
            </div>
          </div>
          <div className="row g-4">
            {cultureValues.map((value, index) => (
              <div className="col-md-6 col-lg-4" key={value.title}>
                <CultureCard title={value.title} description={value.description} index={index} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
