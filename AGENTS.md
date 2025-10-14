# Guia do Projeto — Codex + Next.js + Bootstrap (Site Corporativo de Tokenização e CaaS)

- Objetivo: orientar o desenvolvimento no VS Code com o Codex, garantindo site moderno, responsivo, seguro, acessível (WCAG AA), sempre em UTF‑8 e com SEO sólido.
- Público: empresa/plataforma de tokenização de ativos e crypto as a service (CaaS).
- Stack: Next.js 14+ (App Router) + TypeScript + Bootstrap 5 (Sass).

## Princípios
- UTF‑8 sempre: arquivos e HTML com `charset="utf-8"`.
- Segurança por padrão: cabeçalhos, CSP, validações, nada de conteúdo não sanitizado.
- Acessibilidade: WCAG AA, navegação por teclado, foco visível, ARIA adequada.
- Performance: imagens otimizadas, fontes auto-hospedadas, cache e ISR quando fizer sentido.
- SEO técnico: metadados, Open Graph/Twitter, sitemap/robots, JSON‑LD.
- UX consistente: tipografia legível, grid responsivo, contrastes adequados, sem CLS.

## Stack e Ferramentas
- Next.js 14+ (App Router) com TypeScript (`strict: true`).
- Bootstrap 5 via Sass; considerar `react-bootstrap` apenas se necessário.
- ESLint + Prettier; import aliases com `@/`.
- Testes: Vitest/Jest + Testing Library; E2E com Playwright (opcional).
- Deploy: Vercel (preferencial) ou similar.

## Estrutura de Pastas (sugerida)
- `app/` (App Router): `layout.tsx`, `page.tsx`, `robots.ts`, `sitemap.ts`, rotas e segmentos.
- `components/` componentes reutilizáveis.
- `public/` favicons, OG images, assets estáticos.
- `config/` (site, SEO, tema), `lib/` utilitários.
- `styles/` (separar tokens/variáveis Sass se necessário) — usamos `app/globals.scss`.

## Convenções de Código
- TypeScript estrito; sem `any` implícito.
- Componentes de UI acessíveis; `use client` apenas quando necessário.
- Imports absolutos com `@/`.
- CSS/Sass modular por componente quando aplicável; variáveis de tema centralizadas.
- Evitar `dangerouslySetInnerHTML`; sanitizar qualquer HTML externo.

## Dependências Principais (sugeridas)
- `next`, `react`, `react-dom`, `typescript`.
- `bootstrap`, `sass` (customização via Sass).
- `zod` (validação), `react-hook-form` (forms, opcional neste scaffold).

## Scripts
- `dev`, `build`, `start`, `lint` (se configurado), `typecheck`.

## Segurança
- Cabeçalhos via `next.config.mjs` (`headers()`):
  - `Content-Security-Policy` com `default-src 'self'`, restrições para `script-src`, `img-src`, `connect-src`.
  - `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`.
  - `Referrer-Policy: strict-origin-when-cross-origin`.
  - `Permissions-Policy` minimizada.
  - `Strict-Transport-Security` (em produção, HTTPS).
- Sanitização: validar entrada com `zod`, escapar/sanitizar conteúdo dinâmico.
- Segredos só no servidor (`process.env.*` em rotas/ações server). Evitar expor chaves no cliente.

## SEO Técnico
- Metadados com `export const metadata` em `app/layout.tsx` e por página.
- Open Graph/Twitter: título, descrição, imagem 1200×630.
- Canonical por página; breadcrumbs quando aplicável.
- `robots.ts` e `sitemap.ts` básicos no App Router.
- JSON‑LD via `<script type="application/ld+json">` para `Organization`, `Product/Service`, `FAQ`.

## Acessibilidade
- Semântica (`header`, `main`, `nav`, `footer`).
- `aria-label`/`aria-describedby` em controles, `alt` descritivo em imagens.
- Foco visível; navegação por teclado; `prefers-reduced-motion`.
- Títulos H1‑H2 hierárquicos; rótulos alinhados a inputs.

## UI/UX e Tema
- Bootstrap: grid responsivo; utilitários.
- Customização via Sass: cores, tipografia, espaçamentos, radii.
- Fontes auto-hospedadas de preferência; evitar FOUT/CLS.
- Componentes: Navbar sticky, Hero com CTA, Cards de soluções, Logos, Depoimentos, CTA final, Footer com links legais.

## Conteúdo e i18n
- Idioma padrão `pt-BR`; opcional `en`/`es` com `next-intl`/`next-i18next`.
- Tom institucional e claro, sem promessas financeiras.
- Páginas legais: Termos, Privacidade (LGPD), Cookies, Avisos de risco/regulatórios.

## Sitemap Funcional (sugerido)
- Home, Soluções (Tokenização, Emissão, Custódia, Compliance/KYC‑AML), Para Empresas/Parceiros, Preços (se aplicável), Recursos (Blog/FAQ/Docs), Sobre, Contato, Legal (Termos/Privacidade/Cookies).

## Formulários
- `react-hook-form` + `zod`, mensagens claras de erro.
- Proteção bot (Turnstile/reCAPTCHA).
- Integração segura com backend/CRM (sem chaves no cliente).

## Analytics e Consentimento
- GA4 ou `@vercel/analytics`.
- Banner de consentimento (LGPD), bloqueando scripts até consentir.
- Eventos de conversão nos CTAs.

## Desempenho
- `next/image` com `sizes` corretos; `priority` apenas em imagens críticas.
- `next/font` self‑hosted; evitar CDNs externas.
- Dividir código por rota; lazy em componentes pesados.
- ISR/Cache: `revalidate` por página conforme necessidade.

## CI/CD e Qualidade
- CI: lint, typecheck, test, build.
- Pré‑commit: lint/format (se configurado). 
- Deploy: Vercel com variáveis de ambiente por ambiente (dev/preview/prod).

## Como Trabalhar com o Codex
- Escreva tarefas claras, uma por vez, com critério de aceitação.
- Diga onde editar (arquivo/caminho) e o impacto esperado.
- Prefira TypeScript, App Router e Bootstrap via Sass.
- Peça planos curtos e confirme decisões ambíguas antes de implementar.
- Solicite validação (build/test) quando concluir um incremento.

## Backlog Inicial (para o Codex)
1) Scaffold do projeto Next.js 14+ com TS, App Router.
2) Instalar/Configurar `bootstrap` + `sass`, tema base.
3) Layout base (`app/layout.tsx`) com `metadata`, Navbar/Footer responsivos.
4) Home (`app/page.tsx`): Hero, vantagens, soluções, parceiros, CTA.
5) Páginas: Soluções, Sobre, Contato (form seguro), FAQ.
6) SEO: `robots.ts`, `sitemap.ts`, OG image padrão, JSON‑LD Organization.
7) Segurança: cabeçalhos em `next.config.mjs` e CSP mínima funcional.
8) Analytics: GA4 com consentimento.
9) Acessibilidade: passar checagem inicial (axe/cypress-axe opcional).

## Informações Pendentes (decisão do projeto)
- Branding: logo (SVG/PNG), paleta, tipografia (licenças), ícones.
- Conteúdo: textos finais por página, FAQs, idiomas (apenas `pt-BR`?).
- Sitemap final e nomenclatura de rotas.
- Regulatórios: disclaimers KYC/AML, avisos de risco, jurisdições atendidas.
- Integrações: redes suportadas, custodiante, provedores (KYC, e‑mail, CRM).
- Analytics: GA4 ID, política de cookies e template do banner.
- SEO: palavras‑chave, títulos e descrições por página.
- Blog/Recursos: haverá blog/MDX? Categorias? Autorias?
- Deploy: domínio, subdomínios, CDN, estratégia de preview.
- Padrões de commit e CI preferidos (se diferentes dos sugeridos).

