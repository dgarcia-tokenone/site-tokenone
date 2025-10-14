import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";

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
    badge: "Tokenização regulatória",
    description:
      "Estruturamos ofertas dentro da CVM 88 com governança digital, trilhas de auditoria e cap table automatizado.",
  },
  {
    badge: "Distribuição white label",
    description:
      "Criamos marketplaces customizados com onboarding, suitability e experiências omnichannel para investidores.",
  },
  {
    badge: "Crypto as a Service",
    description:
      "Entregamos carteiras MPC, emissões de stablecoins e integrações fiat-crypto sob demanda, com SLAs corporativos.",
  },
] as const;

const leadership = [
  {
    name: "Luiz Gustavo Nugnes",
    role: "Fundador e CEO",
    bio: "Especialista em open banking, pagamentos instantâneos e CBDC. Lidera a visão de plataforma white label da Token One e publica análises sobre Real Digital e infraestrutura financeira.",
    base: "São Paulo, SP",
    skills: ["Product vision", "Parcerias Estratégicas", "Regulação", "Blockchain"],
    image: "/images/Luiz-Gustavo.png",
    imageAlt: "Luiz Gustavo Nugnes",
  },
  {
    name: "Daniel Garcia",
    role: "Co-fundador e COO",
    bio: "Experiência sólida em análise de dados, produtos digitais e sistemas financeiros. Coordena operações, relacionamento com emissores e o roadmap operacional da plataforma.",
    base: "Paulínia, SP",
    skills: ["Operações", "Compliance", "Produtos Digitais", "Experiência do Emissor"],
    image: "/images/Daniel-Garcia.png",
    imageAlt: "Daniel Garcia",
  },
  {
    name: "Rodinei Lima",
    role: "Arquiteto de Soluções",
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
        className="py-5 py-lg-6"
        style={{
          background: "linear-gradient(180deg, #0b1120 0%, #111827 100%)",
          paddingTop: "6rem",
          marginTop: "1rem",
        }}
        aria-labelledby="quem-somos-hero-title"
      >
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-12 col-lg-6 text-white">
              <p className="text-uppercase small mb-3" style={{ letterSpacing: "0.2em", color: "#60a5fa" }}>
                Sobre a Token One
              </p>
              <h1 className="display-5 fw-bold mb-4" id="quem-somos-hero-title" style={{ lineHeight: 1.2 }}>
                Infraestrutura white label para tokenização, distribuição e operação de ativos digitais.
              </h1>
              <p className="lead mb-4" style={{ color: "rgba(255, 255, 255, 0.7)" }}>
                Unimos regulação CVM 88, compliance contínuo e tecnologia blockchain para ajudar emissores e
                distribuidores a criarem experiências digitais seguras, escaláveis e totalmente personalizadas.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <Link
                  className="btn btn-primary px-4"
                  href="/contato?canal=Demonstração"
                  aria-label="Falar com o time da Token One"
                >
                  Falar com o time
                </Link>
                <Link className="btn btn-outline-light px-4" href="/material-didatico">
                  Conheça a plataforma
                </Link>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="position-relative">
                <div className="rounded-4 shadow-lg overflow-hidden">
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
                <span
                  className="position-absolute top-0 start-0 translate-middle rounded-pill px-3 py-2 text-white fw-semibold small"
                  style={{ background: "rgba(37, 99, 235, 0.7)", letterSpacing: "0.08em" }}
                >
                  Tokenização com governança
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-light" aria-labelledby="quem-somos-pilares-title">
        <div className="container">
          <div className="row text-center mb-4">
            <div className="col">
              <h2 className="h2 fw-bold text-dark mb-3" id="quem-somos-pilares-title">
                Nossos pilares
              </h2>
              <p className="text-muted mb-0">
                Construímos a Token One para que emissores lancem ofertas com a mesma fluidez de um produto digital.
              </p>
            </div>
          </div>
          <div className="row g-4">
            {pillars.map((pillar) => (
              <div className="col-md-4" key={pillar.badge}>
                <div className="card h-100 shadow-sm border-0">
                  <div className="card-body p-4">
                    <span className="badge bg-primary text-uppercase mb-3">{pillar.badge}</span>
                    <p className="text-muted mb-0">{pillar.description}</p>
                  </div>
                </div>
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
                Liderança Token One
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

      <section className="py-5" aria-labelledby="quem-somos-cultura-title">
        <div className="container">
          <div className="row text-center mb-4">
            <div className="col">
              <h2 className="h2 fw-bold text-dark mb-3" id="quem-somos-cultura-title">
                Nossa cultura de entrega
              </h2>
              <p className="text-muted mb-0">
                Transparência, compliance responsivo e co-criação com clientes para tirar ideias do papel rapidamente.
              </p>
            </div>
          </div>
          <div className="row g-4">
            {cultureValues.map((value) => (
              <div className="col-md-4" key={value.title}>
                <div className="card h-100 shadow-sm border-0">
                  <div className="card-body p-4">
                    <h3 className="h5 fw-semibold mb-2">{value.title}</h3>
                    <p className="text-muted mb-0">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
