import type { MetadataRoute } from 'next'
import { siteConfig } from '@/config/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url

  // Páginas estáticas principais
  const routes = [
    '',
    '/quem-somos',
    '/sobre',
    '/contato',
    '/faq',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // Páginas legais e compliance
  const legalPages = [
    '/termos',
    '/privacidade',
    '/politica-cookies',
    '/termo-ciencia-risco',
    '/investidor-qualificado',
    '/codigo-etica-conduta',
    '/politica-pld-cft',
    '/processo-kyc-pld',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }))

  // Páginas CVM 88 e educacionais
  const educationalPages = [
    '/material-didatico',
    '/ofertas-encerradas',
    '/empresas-inadimplentes',
    '/o-que-e-crowdfunding',
    '/o-que-sao-tokens',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }))

  return [...routes, ...legalPages, ...educationalPages]
}
