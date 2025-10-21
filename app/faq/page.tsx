import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import FaqAccordion, { type FaqCategory } from "@/components/FaqAccordion";

const pageTitle = "Perguntas Frequentes";
const pageDescription = "Tire suas dúvidas sobre tokenização de ativos, blockchain, investimentos e a plataforma Token One.";

const canonicalUrl = new URL("/faq", siteConfig.url).toString();

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

const faqs: FaqCategory[] = [
  {
    category: "Conceitos Básicos",
    questions: [
      {
        q: "O que é tokenização de ativos?",
        a: "Tokenização é o processo de converter direitos sobre um ativo real (como imóveis, recebíveis, obras de arte, ações) em tokens digitais registrados em blockchain. Cada token representa uma fração ou a totalidade do ativo, permitindo que ele seja negociado, transferido e gerido de forma digital, segura e transparente.",
      },
      {
        q: "O que são tokens?",
        a: "Tokens são representações digitais de ativos, direitos ou utilidades registradas em uma blockchain. Eles podem representar propriedade (security tokens), acesso a serviços (utility tokens) ou valor monetário (stablecoins). Os tokens seguem padrões técnicos como ERC-20, ERC-1155 ou ERC-721, garantindo interoperabilidade e segurança.",
      },
      {
        q: "Qual a diferença entre tokenização e criptomoedas?",
        a: "Criptomoedas como Bitcoin e Ethereum são moedas digitais nativas da blockchain. Tokenização, por outro lado, é o processo de representar ativos reais (imóveis, recebíveis, commodities) em formato digital usando blockchain. Os tokens representam algo que existe fora da blockchain, enquanto criptomoedas são ativos nativos digitais.",
      },
      {
        q: "O que é blockchain?",
        a: "Blockchain é uma tecnologia de registro distribuído que armazena informações em blocos encadeados de forma imutável e transparente. Cada transação é validada por múltiplos participantes da rede, garantindo segurança, rastreabilidade e eliminando a necessidade de intermediários centralizados.",
      },
    ],
  },
  {
    category: "Regulação e Compliance",
    questions: [
      {
        q: "A tokenização de ativos é regulamentada no Brasil?",
        a: "Sim. A CVM (Comissão de Valores Mobiliários) regula a oferta pública de tokens que se enquadram como valores mobiliários através da Resolução CVM 88/2022, que trata de plataformas de investimento participativo (equity crowdfunding). A Token One está em processo de autorização junto à CVM como Plataforma Eletrônica de Investimento Participativo.",
      },
      {
        q: "O que é a Resolução CVM 88/2022?",
        a: "A Resolução CVM 88/2022 regulamenta as plataformas eletrônicas de investimento participativo (equity crowdfunding) no Brasil. Ela estabelece regras para oferta pública de valores mobiliários de pequeno valor, permitindo que empresas de pequeno porte captem recursos de investidores através de plataformas autorizadas pela CVM.",
      },
      {
        q: "Vocês realizam KYC e procedimentos de PLD/CFT?",
        a: "Sim. A Token One implementa processos rigorosos de KYC (Know Your Customer) e PLD/CFT (Prevenção à Lavagem de Dinheiro e Combate ao Financiamento do Terrorismo) para todos os usuários da plataforma. Utilizamos provedores especializados e seguimos as diretrizes do COAF e da Resolução CVM 88/2022.",
      },
      {
        q: "Quais documentos são necessários para investir?",
        a: "Para investir, você precisará fornecer: documento de identidade com foto (RG, CNH ou passaporte), CPF, comprovante de residência atualizado e informações sobre sua experiência de investimento. Pessoas jurídicas devem apresentar contrato social, CNPJ e documentos dos representantes legais. O processo é 100% digital.",
      },
    ],
  },
  {
    category: "Investimentos e Riscos",
    questions: [
      {
        q: "Qual o valor mínimo para investir?",
        a: "O valor mínimo varia de acordo com cada oferta disponível na plataforma, mas geralmente parte de R$ 100 a R$ 1.000 por operação. A tokenização permite a fracionamento de ativos, democratizando o acesso a investimentos que tradicionalmente exigiam valores mais elevados.",
      },
      {
        q: "Quais são os riscos de investir em ativos tokenizados?",
        a: "Como todo investimento, existem riscos: risco de crédito (inadimplência do emissor), risco de liquidez (dificuldade de vender o token), risco de mercado (flutuações de valor), risco operacional e tecnológico. É fundamental ler o documento de oferta, avaliar seu perfil de investidor e diversificar seus investimentos. Rentabilidade passada não garante resultados futuros.",
      },
      {
        q: "Os investimentos são garantidos pelo FGC?",
        a: "Não. Os tokens representam valores mobiliários e não são cobertos pelo Fundo Garantidor de Créditos (FGC), que protege apenas depósitos bancários, CDBs, LCIs e LCAs. Leia atentamente os termos de cada oferta e avalie os riscos antes de investir.",
      },
      {
        q: "Como funciona a remuneração dos investimentos?",
        a: "A remuneração varia conforme o tipo de ativo tokenizado. Pode ser através de: pagamento de juros periódicos (bonds/recebíveis), distribuição de lucros (equity tokens), valorização do ativo (real estate tokens) ou pagamento na data de vencimento. Cada oferta possui termos específicos detalhados no documento de investimento.",
      },
      {
        q: "Posso vender meus tokens antes do vencimento?",
        a: "Depende da liquidez do mercado secundário. Alguns tokens podem ser negociados em mercados secundários, permitindo a venda antecipada. Porém, não há garantia de liquidez imediata, e você pode precisar aceitar um desconto sobre o valor investido. Verifique as condições de liquidez de cada oferta.",
      },
    ],
  },
  {
    category: "Plataforma Token One",
    questions: [
      {
        q: "O que é a Token One?",
        a: "A Token One é uma plataforma de tecnologia que oferece infraestrutura white label de Crypto as a Service (CaaS) para tokenização, distribuição e gestão de ativos digitais. Permitimos que empresas, instituições financeiras e securitizadoras emitam e gerenciem tokens com compliance, governança digital e auditoria automatizada.",
      },
      {
        q: "Como posso emitir tokens na plataforma?",
        a: "Para emitir tokens, você deve: 1) Entrar em contato com nossa equipe comercial, 2) Passar por processo de due diligence e KYC corporativo, 3) Estruturar a oferta com nosso suporte jurídico e técnico, 4) Configurar os parâmetros do token na plataforma, 5) Submeter a oferta para aprovação (se aplicável). Nosso time oferece suporte completo durante todo o processo.",
      },
      {
        q: "Quais blockchains são suportadas?",
        a: "Atualmente suportamos Polygon (rede principal), Ethereum e outras redes compatíveis com EVM (Ethereum Virtual Machine). A escolha da blockchain depende dos requisitos de custo, velocidade e escalabilidade de cada projeto. Nosso time técnico auxilia na seleção da melhor rede para cada caso de uso.",
      },
      {
        q: "A plataforma oferece APIs para integração?",
        a: "Sim. Oferecemos APIs REST completas e SDKs em TypeScript e Python para integração com sistemas existentes. Nossa documentação técnica inclui exemplos de código, webhooks para notificações em tempo real e sandbox gratuito para testes. Suporte técnico dedicado está disponível desde o primeiro deploy.",
      },
      {
        q: "Como é garantida a segurança dos ativos?",
        a: "A segurança é garantida através de múltiplas camadas: carteiras MPC (Multi-Party Computation) para custódia de chaves, smart contracts auditados, criptografia de ponta a ponta, autenticação multifator, monitoramento 24/7 e conformidade com padrões de segurança da informação. Realizamos auditorias de segurança periódicas.",
      },
      {
        q: "Qual o custo para usar a plataforma?",
        a: "Nossa estrutura de custos é transparente e varia conforme o volume e tipo de operação. Geralmente cobramos: taxa de setup da oferta, taxa de sucesso sobre o valor captado e taxa de manutenção mensal. Para emissores corporativos, oferecemos modelo white label com precificação customizada. Entre em contato para um orçamento personalizado.",
      },
    ],
  },
  {
    category: "Operacional",
    questions: [
      {
        q: "Como faço para criar uma conta?",
        a: "Acesse o botão 'Cadastre-se' no topo da página, preencha seus dados pessoais, valide seu e-mail e complete o processo de KYC enviando os documentos solicitados. A aprovação geralmente ocorre em até 48 horas úteis. Após a aprovação, você pode explorar as ofertas disponíveis e realizar investimentos.",
      },
      {
        q: "Como faço um investimento?",
        a: "Após o cadastro aprovado: 1) Navegue pelas ofertas disponíveis, 2) Leia o documento de oferta completo, 3) Selecione o valor que deseja investir, 4) Faça o pagamento via PIX, TED ou boleto, 5) Aguarde a confirmação do pagamento, 6) Os tokens serão creditados em sua carteira digital automaticamente.",
      },
      {
        q: "Quais formas de pagamento são aceitas?",
        a: "Aceitamos PIX (confirmação instantânea), TED/transferência bancária (confirmação em até 1 dia útil) e boleto bancário (confirmação em até 2 dias úteis). Para investimentos corporativos de grande porte, podemos avaliar outras modalidades de pagamento.",
      },
      {
        q: "Como acompanho meus investimentos?",
        a: "Através do dashboard da plataforma você pode: visualizar todos os seus tokens, acompanhar a rentabilidade de cada ativo, verificar histórico de transações, receber notificações de pagamentos de juros/dividendos e baixar extratos e comprovantes. O acesso é 24/7 via web e mobile.",
      },
      {
        q: "Como funciona o resgate ou venda dos tokens?",
        a: "O resgate pode ocorrer de duas formas: 1) No vencimento do ativo conforme termos da oferta (resgate automático), 2) Venda antecipada no mercado secundário (quando disponível). Para mercado secundário, você publica uma oferta de venda e aguarda um comprador interessado. A liquidação é feita através da plataforma.",
      },
      {
        q: "Preciso declarar os investimentos no Imposto de Renda?",
        a: "Sim. Todos os investimentos em tokens devem ser declarados no Imposto de Renda na ficha de 'Bens e Direitos' sob o código correspondente a valores mobiliários. Os rendimentos devem ser declarados conforme sua natureza (rendimentos de aplicação financeira, ganho de capital, etc.). Fornecemos informes de rendimentos anuais para facilitar sua declaração. Consulte um contador para orientações específicas.",
      },
    ],
  },
  {
    category: "Suporte",
    questions: [
      {
        q: "Como entro em contato com o suporte?",
        a: "Você pode entrar em contato através de: WhatsApp (botão no canto inferior direito), e-mail (através do formulário de contato), chat ao vivo dentro da plataforma (usuários logados) ou telefone. Nosso horário de atendimento é de segunda a sexta, das 9h às 18h. Para emergências técnicas, mantemos suporte 24/7 para emissores.",
      },
      {
        q: "Quanto tempo leva para aprovar meu cadastro?",
        a: "O processo de KYC geralmente leva de 24 a 48 horas úteis. Em casos complexos ou que exijam documentação adicional, pode levar até 5 dias úteis. Você receberá notificações por e-mail sobre o status da sua solicitação em cada etapa do processo.",
      },
      {
        q: "E se eu esquecer minha senha?",
        a: "Na tela de login, clique em 'Esqueci minha senha', insira seu e-mail cadastrado e você receberá um link para redefinir sua senha. Por segurança, o link expira em 1 hora. Se não receber o e-mail, verifique sua caixa de spam ou entre em contato com nosso suporte.",
      },
    ],
  },
];

export default function FaqPage() {
  return (
    <>
      {/* FAQ Content */}
      <section className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          {/* Título centralizado */}
          <div className="row justify-content-center text-center mb-5">
            <div className="col-12">
              <h1
                className="fw-bold mb-4"
                style={{
                  color: '#1e293b',
                  fontSize: '2rem',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                }}
              >
                Perguntas Frequentes
              </h1>
            </div>
          </div>

          {/* Lista de perguntas */}
          <div className="row justify-content-center">
            <div className="col-lg-10 col-xl-9">
              <FaqAccordion faqs={faqs} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
