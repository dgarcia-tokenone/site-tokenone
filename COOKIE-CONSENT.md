# 🍪 Sistema de Consentimento de Cookies (LGPD)

## Implementação Completa - TokenOne

Este documento descreve a implementação do sistema de gerenciamento de consentimento de cookies conforme a LGPD (Lei Geral de Proteção de Dados - Lei nº 13.709/2018).

---

## 📋 Visão Geral

O sistema permite que os usuários controlem quais tipos de cookies desejam aceitar, em conformidade com a LGPD. A implementação inclui:

- ✅ Banner de consentimento responsivo
- ✅ Painel de personalização de preferências
- ✅ Armazenamento local das escolhas do usuário
- ✅ Página de Política de Cookies completa
- ✅ Gerenciamento de 4 tipos de cookies
- ✅ Interface acessível (WCAG AA)

---

## 🗂️ Estrutura de Arquivos

```
site-tokenone/
├── lib/
│   └── cookie-consent.ts          # Lógica de gerenciamento de consentimento
├── hooks/
│   └── useCookieConsent.ts        # React Hook para gerenciar estado
├── components/
│   └── CookieBanner.tsx           # Componente visual do banner
├── app/
│   ├── layout.tsx                 # Banner integrado no layout
│   └── politica-cookies/
│       └── page.tsx               # Página de Política de Cookies
```

---

## 🔧 Componentes

### 1. Biblioteca de Consentimento (`lib/cookie-consent.ts`)

Funções principais:

```typescript
// Obter consentimento atual
getConsent(): ConsentTimestamp | null

// Salvar consentimento
saveConsent(consent: CookieConsent): void

// Aceitar todos os cookies
acceptAllCookies(): void

// Aceitar apenas necessários
acceptNecessaryCookies(): void

// Revogar consentimento
revokeConsent(): void

// Verificar se tem consentimento para tipo específico
hasConsentFor(type: 'necessary' | 'analytics' | 'marketing' | 'preferences'): boolean
```

### 2. Hook React (`hooks/useCookieConsent.ts`)

Hook customizado para gerenciar estado do consentimento:

```typescript
const {
  consent,        // Consentimento atual
  timestamp,      // Data/hora do consentimento
  showBanner,     // Se deve mostrar o banner
  updateConsent,  // Atualizar consentimento
  acceptAll,      // Aceitar todos
  acceptNecessary,// Aceitar apenas necessários
  revoke,         // Revogar consentimento
  hasConsentFor   // Verificar tipo específico
} = useCookieConsent();
```

### 3. Banner de Cookies (`components/CookieBanner.tsx`)

Componente visual com duas views:

- **View Simples**: Botões rápidos (Aceitar Todos, Apenas Necessários, Personalizar)
- **View Detalhada**: Painel com toggles para cada tipo de cookie

---

## 📊 Tipos de Cookies

### 1. **Necessários** (Obrigatórios)
- Sempre ativados
- Essenciais para funcionamento do site
- Exemplos: sessão, preferências de idioma, consentimento de cookies

### 2. **Preferências**
- Armazenam configurações do usuário
- Exemplos: tema, layout preferido, timezone

### 3. **Análise**
- Coletam dados para melhorar a experiência
- Exemplos: Google Analytics, Vercel Analytics
- Dados agregados e anônimos

### 4. **Marketing**
- Personalização de anúncios
- Medição de campanhas
- Exemplos: Meta Pixel, Google Ads

---

## 💾 Armazenamento

### LocalStorage

```javascript
{
  "consent": {
    "necessary": true,
    "analytics": true,
    "marketing": false,
    "preferences": true
  },
  "timestamp": "2025-10-15T14:30:00.000Z",
  "version": "1.0"
}
```

**Key**: `tokenone_cookie_consent`
**Duração**: 12 meses

---

## 🎨 Interface do Usuário

### Banner Simples

```
┌─────────────────────────────────────────────────────────────┐
│ 🕐 Este site utiliza cookies                               │
│                                                             │
│ Usamos cookies para melhorar sua experiência...            │
│                                                             │
│ [Personalizar] [Apenas Necessários] [Aceitar Todos]        │
└─────────────────────────────────────────────────────────────┘
```

### Painel de Preferências

```
┌─────────────────────────────────────────────────────────────┐
│ Preferências de Cookies                              [×]    │
├─────────────────────────────────────────────────────────────┤
│ ┌─────────────────┐  ┌─────────────────┐                   │
│ │ ☑ Necessários   │  │ ☐ Preferências  │                   │
│ │ (Obrigatório)   │  │                 │                   │
│ └─────────────────┘  └─────────────────┘                   │
│ ┌─────────────────┐  ┌─────────────────┐                   │
│ │ ☐ Análise       │  │ ☐ Marketing     │                   │
│ └─────────────────┘  └─────────────────┘                   │
│                                                             │
│ [Cancelar] [Apenas Necessários] [Salvar Preferências]      │
└─────────────────────────────────────────────────────────────┘
```

---

## 🔗 Integração com Analytics

### Exemplo com Google Analytics

```typescript
'use client';

import { useEffect } from 'react';
import { useCookieConsent } from '@/hooks/useCookieConsent';

export default function Analytics() {
  const { hasConsentFor } = useCookieConsent();

  useEffect(() => {
    // Só carrega GA se tiver consentimento
    if (hasConsentFor('analytics')) {
      // Inicializar Google Analytics
      window.gtag('config', 'GA_MEASUREMENT_ID');
    }
  }, [hasConsentFor]);

  return null;
}
```

---

## ⚖️ Conformidade LGPD

### Princípios Atendidos

✅ **Consentimento Explícito** (Art. 7º, I)
- Banner claro e visível
- Opções específicas por tipo de cookie
- Consentimento granular

✅ **Finalidade Específica** (Art. 6º, I)
- Cada tipo de cookie tem propósito definido
- Descrição clara de uso

✅ **Livre Acesso** (Art. 9º, V)
- Usuário pode visualizar e alterar preferências
- Link no footer para Política de Cookies

✅ **Transparência** (Art. 6º, VI)
- Documentação completa
- Informações claras sobre cada tipo

✅ **Direito à Revogação** (Art. 8º, § 5º)
- Função `revoke()` implementada
- Botão na Política de Cookies

---

## 🚀 Como Usar

### 1. Verificar Consentimento

```typescript
import { hasConsentFor } from '@/lib/cookie-consent';

if (hasConsentFor('analytics')) {
  // Carregar script de analytics
}
```

### 2. Usar no Componente

```typescript
import { useCookieConsent } from '@/hooks/useCookieConsent';

export default function MyComponent() {
  const { consent, acceptAll } = useCookieConsent();

  if (!consent) {
    return <p>Aguardando consentimento...</p>;
  }

  return <p>Consentimento obtido!</p>;
}
```

### 3. Alterar Preferências

Os usuários podem alterar preferências de 3 formas:

1. **Banner inicial** - Primeira visita
2. **Página de Política** - Link no footer
3. **Função revoke()** - Programaticamente

---

## 📱 Responsividade

O banner é totalmente responsivo:

- **Mobile**: Stacked buttons, full width
- **Tablet**: Flexbox adaptativo
- **Desktop**: Horizontal layout

---

## ♿ Acessibilidade

### ARIA Labels

```html
<div
  role="dialog"
  aria-labelledby="cookie-banner-title"
  aria-describedby="cookie-banner-description"
>
```

### Navegação por Teclado

- ✅ Todos os controles acessíveis via Tab
- ✅ Enter/Space para ativar botões
- ✅ Foco visível em todos os elementos

### Screen Readers

- Labels descritivos
- Alt text em ícones
- Feedback de estado (checked/unchecked)

---

## 🧪 Testes Recomendados

### Testes Funcionais

```bash
# 1. Primeira visita
- Banner deve aparecer
- Nenhum cookie analytics/marketing deve ser definido

# 2. Aceitar Todos
- Banner deve desaparecer
- Todos os cookies permitidos
- localStorage deve conter consentimento

# 3. Apenas Necessários
- Apenas cookies necessários permitidos
- Analytics/Marketing bloqueados

# 4. Personalizar
- Painel deve abrir
- Toggles devem funcionar
- Salvar deve persistir escolhas

# 5. Revogar
- Limpar localStorage
- Banner deve reaparecer
```

### Testes de Compatibilidade

- ✅ Chrome/Edge
- ✅ Firefox
- ✅ Safari
- ✅ Mobile (iOS/Android)

---

## 📄 Páginas Relacionadas

- **Política de Cookies**: `/politica-cookies`
- **Política de Privacidade**: `/privacidade`
- **Termos e Condições**: `/termos`

---

## 🔄 Versionamento

**Versão Atual**: 1.0

Quando atualizar a política:
1. Incrementar `CONSENT_VERSION` em `cookie-consent.ts`
2. Forçará nova solicitação de consentimento
3. Atualizar data na Política de Cookies

---

## 📞 Suporte

Para dúvidas sobre implementação:
- **Email**: contato@tokenone.com.br
- **Canal LGPD**: `/contato?canal=Canal LGPD`

---

## 📚 Referências

- [LGPD - Lei nº 13.709/2018](http://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm)
- [ANPD - Guia de Cookies](https://www.gov.br/anpd)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

---

**Implementado em**: 15 de outubro de 2025
**Próxima revisão**: 15 de abril de 2026
