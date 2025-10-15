import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

const APP_URL = "https://app.tokenone.com.br/authentication?organizationId=5rSaRhby9TbL7nmJa6rp";
const WHATSAPP_URL = "https://wa.me/5511999999999?text=Quero%20falar%20com%20a%20TokenOne";

type FooterLink = {
  label: string;
  href: string;
};

type FooterSection = {
  title: string;
  icon: ReactNode;
  links: FooterLink[];
};

const sections: FooterSection[] = [
  {
    title: "Sobre",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden>
        <path
          fill="currentColor"
          d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2Zm0 3.25a1.5 1.5 0 1 1-1.5 1.5A1.5 1.5 0 0 1 12 5.25Zm2 12h-4a1 1 0 0 1 0-2h1v-3h-.5a1 1 0 0 1 0-2H12a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"
        />
      </svg>
    ),
    links: [
      { label: "Quem somos", href: "/quem-somos" },
      { label: "Trabalhe conosco", href: "/contato?canal=Trabalhe conosco" },
    ],
  },
  {
    title: "Para você",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden>
        <path
          fill="currentColor"
          d="M12 2a6 6 0 0 1 6 6v3a1 1 0 0 1-2 0V8a4 4 0 0 0-8 0v3a1 1 0 0 1-2 0V8a6 6 0 0 1 6-6Zm7 12a1 1 0 0 1 1 1v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-5a1 1 0 0 1 2 0v4.75A1.25 1.25 0 0 0 7.25 20h9.5A1.25 1.25 0 0 0 18 18.75V15a1 1 0 0 1 1-1Z"
        />
      </svg>
    ),
    links: [
      { label: "O que são tokens?", href: "/o-que-sao-tokens" },
      { label: "O que é crowdfunding?", href: "/o-que-e-crowdfunding" },
    ],
  },
  {
    title: "Para a sua empresa",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden>
        <path
          fill="currentColor"
          d="M4 3a1 1 0 0 0-1 1v16h6v-5h6v5h6V4a1 1 0 0 0-1-1Zm1 2h4v3H5Zm0 5h4v3H5Zm10-5h4v5h-4Zm0 7h4v3h-4Z"
        />
      </svg>
    ),
    links: [
      { label: "Emita tokens", href: "https://app.tokenone.com.br/authentication?organizationId=5rSaRhby9TbL7nmJa6rp" },
      { label: "Área do emissor", href: APP_URL },
    ],
  },
  {
    title: "Ajuda",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden>
        <path
          fill="currentColor"
          d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2Zm.25 15a1.25 1.25 0 1 1-1.25-1.25A1.25 1.25 0 0 1 12.25 17ZM14 10.35a2.33 2.33 0 0 1-.94 1.89l-.56.42a1 1 0 0 0-.39.78v.06a1 1 0 0 1-2 0 2.82 2.82 0 0 1 1.11-2.25l.54-.42a.59.59 0 0 0 .24-.48 1.3 1.3 0 0 0-2.6-.15 1 1 0 0 1-1.94-.5 3.3 3.3 0 0 1 6.54.65Z"
        />
      </svg>
    ),
    links: [
      { label: "Fale conosco", href: "/contato?canal=Fale conosco" },
      { label: "Perguntas frequentes", href: "/faq" },
    ],
  },
  {
    title: "Jurídico",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden>
        <path
          fill="currentColor"
          d="M12 2a1 1 0 0 1 .84.45L18 10.87a1 1 0 0 1 .16.54v8.59a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-4H8v4a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-8.59a1 1 0 0 1 .16-.54L11.16 2.45A1 1 0 0 1 12 2Z"
        />
      </svg>
    ),
    links: [
      { label: "Termos e Condições", href: "/termos" },
      { label: "Política de Privacidade (LGPD)", href: "/privacidade" },
      { label: "Política de Cookies", href: "/politica-cookies" },
      { label: "Termo de Ciência e Risco", href: "/termo-ciencia-risco" },
      { label: "Declaração Investidor Qualificado", href: "/investidor-qualificado" },
    ],
  },
  {
    title: "Compliance",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden>
        <path
          fill="currentColor"
          d="M12 2a1 1 0 0 1 .7.29l8 8A1 1 0 0 1 20.3 12l-8 8a1 1 0 0 1-1.4 0l-8-8A1 1 0 0 1 4.3 10l8-8A1 1 0 0 1 12 2Zm0 4.41L7.41 11H11a1 1 0 0 1 1 1v3.59L16.59 11Z"
        />
      </svg>
    ),
    links: [
      { label: "Canal de denúncias", href: "/contato?canal=Canal de denúncias" },
      { label: "Canal LGPD", href: "/contato?canal=Canal LGPD" },
      { label: "Código de Ética e Conduta", href: "/codigo-etica-conduta" },
      { label: "Política de PLD/CFT", href: "/politica-pld-cft" },
      { label: "Processo de KYC/PLD", href: "/processo-kyc-pld" },
    ],
  },
  {
    title: "CVM 88",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden>
        <path
          fill="currentColor"
          d="M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h9l7-7V5a2 2 0 0 0-2-2Zm0 2h14v9h-5a2 2 0 0 0-2 2v5H5Zm3 2v2h8V7Zm0 4v2h5v-2Z"
        />
      </svg>
    ),
    links: [
      { label: "Material didático", href: "/material-didatico" },
      { label: "Ofertas encerradas", href: "/ofertas-encerradas" },
      { label: "Empresas inadimplentes", href: "/empresas-inadimplentes" },
    ],
  },
];

const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/tokenone",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden>
        <path
          fill="currentColor"
          d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm0 2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Zm5 3.5A3.5 3.5 0 1 1 8.5 12 3.5 3.5 0 0 1 12 8.5Zm0 2A1.5 1.5 0 1 0 13.5 12 1.5 1.5 0 0 0 12 10.5Zm5.25-3.75a1 1 0 1 1-1-1 1 1 0 0 1 1 1Z"
        />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/tokenone",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden>
        <path
          fill="currentColor"
          d="M5 3a2 2 0 1 1-2 2 2 2 0 0 1 2-2ZM4 8h2.9v13H4Zm5.6 0H13v1.8h.05A3.3 3.3 0 0 1 16 8.04c3.21 0 3.8 2.11 3.8 4.85V21h-3v-6.3c0-1.5-.03-3.43-2.09-3.43-2.09 0-2.41 1.63-2.41 3.32V21H9.6Z"
        />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@tokenone",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden>
        <path
          fill="currentColor"
          d="M21.8 8.001a3 3 0 0 0-2.11-2.12C17.75 5.5 12 5.5 12 5.5s-5.75 0-7.69.381A3 3 0 0 0 2.2 8.001 31.29 31.29 0 0 0 1.8 12a31.29 31.29 0 0 0 .4 3.999 3 3 0 0 0 2.11 2.12C6.25 18.5 12 18.5 12 18.5s5.75 0 7.69-.381a3 3 0 0 0 2.11-2.12A31.29 31.29 0 0 0 22.2 12a31.29 31.29 0 0 0-.4-3.999ZM10 15.5v-7l6 3.5Z"
        />
      </svg>
    ),
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer-tokenone" role="contentinfo">
      <div className="container py-5">
        <div className="d-flex flex-column flex-lg-row align-items-start align-items-lg-center justify-content-between gap-4 pb-4 border-bottom border-light-subtle">
          <Link href="/" aria-label="Página inicial">
            <Image src="/logos/LogoWhiteTransparent.webp" alt="TokenOne" width={200} height={60} className="footer-logo" />
          </Link>
          <div className="d-flex gap-3">
            {socials.map((social) => (
              <a key={social.label} className="footer-social" href={social.href} aria-label={social.label} target="_blank" rel="noopener noreferrer">
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-7 g-4 py-4">
          {sections.map((section) => (
            <div key={section.title} className="col">
              <div className="footer-column-title d-flex align-items-center gap-2 mb-2">
                <span className="footer-icon">{section.icon}</span>
                <span>{section.title}</span>
              </div>
              <ul className="list-unstyled footer-links">
                {section.links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith("/") ? (
                      <Link href={link.href} className="footer-link">
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="footer-link"
                        target={link.href.startsWith("http") ? "_blank" : undefined}
                        rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-bottom text-center">
          Copyright © {year}, TokenOne LTDA, inscrita no CNPJ 37.728.588/0001-04, com sede em São Paulo, SP.
        </div>
      </div>

      <a className="whatsapp-fab" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="Conversar no WhatsApp">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2.546 20.2c-.142.423.22.785.643.643l3.032-.892A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 1.5A8.5 8.5 0 1020.5 12 8.509 8.509 0 0012 3.5z"
            fill="currentColor"
          />
        </svg>
      </a>
    </footer>
  );
}
