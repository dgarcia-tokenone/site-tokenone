import type { Metadata } from "next";
import "@/styles/bootstrap-custom.scss";
import "./globals.scss";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BootstrapClient from "@/components/BootstrapClient";
import CookieBanner from "@/components/CookieBanner";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} - Tokenização e CaaS`,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} - Tokenização e CaaS`,
    description: siteConfig.description,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    site: siteConfig.twitter,
    title: `${siteConfig.name} - Tokenização e CaaS`,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  alternates: { canonical: siteConfig.url },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="d-flex flex-column min-vh-100">
        <Navbar />
        <main id="content" className="flex-fill" role="main">
          {children}
        </main>
        <Footer />
        {/* Habilita JS do Bootstrap no cliente */}
        <BootstrapClient />
        {/* Banner de Consentimento de Cookies (LGPD) */}
        <CookieBanner />
        {/* JSON-LD Organization */}
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FinancialService",
              name: siteConfig.name,
              url: siteConfig.url,
              logo: `${siteConfig.url}/icons/favicon.png`,
              description: siteConfig.description,
              address: {
                "@type": "PostalAddress",
                streetAddress: "Rua José Tavares Siqueira, 97, Conjunto 43",
                addressLocality: "São Paulo",
                addressRegion: "SP",
                postalCode: "03085-030",
                addressCountry: "BR",
              },
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                email: "contato@tokenone.com.br",
                availableLanguage: ["pt-BR"],
              },
              sameAs: [
                "https://www.instagram.com/tokenone",
                "https://www.linkedin.com/company/tokenone",
                "https://www.youtube.com/@tokenone",
              ],
              areaServed: "BR",
              slogan: "Tokenização e CaaS - Crypto as a Service",
            }),
          }}
        />
      </body>
    </html>
  );
}
