import Image from "next/image";
import Link from "next/link";
import SolutionsSection from "@/components/SolutionsSection";
import DevelopersSection from "@/components/DevelopersSection";

const partnerLogos = [
  {
    src: "/images/ISIBankwebp.webp",
    alt: "Logo ISI Bank",
    width: 160,
    height: 90,
    style: { filter: "grayscale(15%)" } as React.CSSProperties,
  },
  {
    src: "/images/Logo-TS-Securitizadora.webp",
    alt: "Logo TS Securitizadora",
    width: 200,
    height: 90,
    style: undefined as React.CSSProperties | undefined,
  },
  {
    src: "/images/logo-claro.webp",
    alt: "Logo Securitizar",
    width: 200,
    height: 90,
    style: { filter: "grayscale(5%)" } as React.CSSProperties,
  },
];

export default function HomePage() {
  return (
    <>
      <section className="hero-section py-5 py-lg-6" aria-labelledby="home-hero-title">
        <span className="shape shape-one" aria-hidden="true" />
        <span className="shape shape-two" aria-hidden="true" />
        <span className="shape shape-three" aria-hidden="true" />
        <div className="container py-lg-4">
          <div className="row align-items-center g-5">
            <div className="col-12 col-lg-6">
              <p className="hero-badge mb-4">
                <i>CRYPTO AS A SERVICE (CaaS)</i>
              </p>
              <h1 className="display-4 fw-bold mb-3 hero-title" id="home-hero-title">
                Tokenização de Ativos
              </h1>
              <p className="lead mb-4 hero-subtitle">
                A Token One é uma empresa de tecnologia que oferece uma plataforma whitelabel de <i>Crypto as a Service (CaaS)</i> para
                transformar qualquer ativo em um token digital utilizando a <strong>Blockchain</strong>.
              </p>
              <div className="hero-actions">
                <Link
                  className="btn hero-cta"
                  href="https://app.tokenone.com.br/authentication?organizationId=5rSaRhby9TbL7nmJa6rp"
                >
                  Conheça a Plataforma
                </Link>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="hero-media">
                <span className="hero-chip d-none d-lg-inline">Tokenização, Distribuição, Governança</span>
                <Image
                  src="/images/MockTokenOne-transparente.webp"
                  alt="Interface da plataforma Token One exibida em notebook e smartphone"
                  width={1040}
                  height={760}
                  sizes="(max-width: 991px) 100vw, 520px"
                  priority
                  className="img-fluid hero-media-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="partner-showcase py-5 py-lg-6" aria-labelledby="home-clientes-title">
        <div className="container">
          <div className="partner-showcase-card p-4 p-md-5">
            <div className="row gy-4 justify-content-center text-center">
              <div className="col-12 col-lg-10 col-xl-8">
                <span className="partner-chip text-uppercase small fw-semibold mx-auto" role="presentation">
                  Nossos Clientes
                </span>
                <h2 className="h3 fw-semibold text-white mt-3 mb-3" id="home-clientes-title">
                  Conheça quem já tokenizou ativos com a Token One
                </h2>
                <p className="mb-0 text-white-50">
                  Instituições financeiras e securitizadoras utilizam nossa infraestrutura CaaS para estruturar, distribuir e custodiar
                  ativos tokenizados com governança, compliance e uma experiência premium para investidores.
                </p>
              </div>
            </div>
            <div className="row row-cols-2 row-cols-md-3 g-3 g-md-4 mt-4 mt-lg-5 justify-content-center">
              {partnerLogos.map(({ style: logoStyle, ...partner }) => (
                <div className="col" key={partner.alt}>
                  <div className="partner-logo-card h-100">
                    <Image
                      {...partner}
                      alt={partner.alt}
                      className="partner-logo-image"
                      sizes="(max-width: 575px) 45vw, (max-width: 991px) 28vw, 180px"
                      style={{
                        maxWidth: "100%",
                        height: "auto",
                        ...(logoStyle ?? {}),
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SolutionsSection />
      <DevelopersSection />
    </>
  );
}
