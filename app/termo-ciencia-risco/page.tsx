import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

const pageTitle = "Termo de Ciência de Risco";
const pageDescription = "Termo de ciência de risco para investimentos em valores mobiliários através da plataforma Token One, conforme Resolução CVM 88/2022.";

const canonicalUrl = new URL("/termo-ciencia-risco", siteConfig.url).toString();

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

export default function TermoCienciaRiscoPage() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="py-5"
        style={{
          background: "linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)",
          borderBottom: "1px solid #e2e8f0",
        }}
      >
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-10">
              <h1 className="display-5 fw-bold mb-3" style={{ color: "#0f172a" }}>
                Termo de Ciência de Risco
              </h1>
              <p className="lead text-muted">
                Declaração obrigatória de ciência dos riscos inerentes aos investimentos realizados através da plataforma Token One.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-5 py-lg-6">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              {/* Alert Box */}
              <div className="alert alert-warning mb-5" role="alert" style={{ borderLeft: "4px solid #f59e0b", borderRadius: "0.5rem" }}>
                <h5 className="alert-heading fw-bold">
                  <i className="bi bi-exclamation-triangle-fill me-2"></i>
                  Atenção: Leitura Obrigatória
                </h5>
                <p className="mb-0">
                  Este documento é de leitura obrigatória para todos os investidores que desejam realizar investimentos através da plataforma Token One.
                  A aceitação deste termo é requisito essencial para participação em ofertas de valores mobiliários, conforme determinado pela Resolução CVM 88/2022.
                </p>
              </div>

              {/* Introduction */}
              <div className="mb-5">
                <h2 className="h4 fw-bold mb-3" style={{ color: "#1e293b" }}>
                  Introdução
                </h2>
                <p className="text-secondary" style={{ lineHeight: 1.8 }}>
                  A <strong>Token One LTDA</strong>, inscrita no CNPJ 37.728.588/0001-04, doravante denominada <strong>PLATAFORMA</strong>, atua como Plataforma Eletrônica de Investimento Participativo,
                  em conformidade com a Resolução CVM nº 88/2022, facilitando a captação de recursos por empresas de pequeno porte através da oferta pública de valores mobiliários.
                </p>
                <p className="text-secondary" style={{ lineHeight: 1.8 }}>
                  Este Termo de Ciência de Risco tem como objetivo informar os investidores sobre os riscos inerentes aos investimentos em valores mobiliários ofertados através desta plataforma,
                  permitindo que tomem decisões conscientes e fundamentadas sobre suas aplicações financeiras.
                </p>
              </div>

              {/* Risco 1 */}
              <div className="mb-5">
                <h2 className="h4 fw-bold mb-3" style={{ color: "#1e293b" }}>
                  1. Risco de Perda do Capital Investido
                </h2>
                <p className="text-secondary" style={{ lineHeight: 1.8 }}>
                  <strong>O INVESTIDOR PODE PERDER A TOTALIDADE DO CAPITAL INVESTIDO.</strong>
                </p>
                <p className="text-secondary" style={{ lineHeight: 1.8 }}>
                  Os investimentos em valores mobiliários de empresas de pequeno porte envolvem alto grau de risco. Não há garantia de retorno do capital investido nem de rentabilidade mínima.
                  Em caso de insolvência, recuperação judicial ou falência da empresa emissora, o investidor pode não recuperar qualquer valor investido.
                </p>
                <p className="text-secondary" style={{ lineHeight: 1.8 }}>
                  Empresas em estágio inicial ou de pequeno porte apresentam maior volatilidade e incerteza quanto aos seus resultados operacionais e financeiros.
                  Históricos financeiros passados não garantem resultados futuros.
                </p>
              </div>

              {/* Risco 2 */}
              <div className="mb-5">
                <h2 className="h4 fw-bold mb-3" style={{ color: "#1e293b" }}>
                  2. Ausência de Garantia do Fundo Garantidor de Créditos (FGC)
                </h2>
                <p className="text-secondary" style={{ lineHeight: 1.8 }}>
                  <strong>OS INVESTIMENTOS REALIZADOS ATRAVÉS DA PLATAFORMA NÃO SÃO GARANTIDOS PELO FGC.</strong>
                </p>
                <p className="text-secondary" style={{ lineHeight: 1.8 }}>
                  O Fundo Garantidor de Créditos (FGC) protege exclusivamente determinados depósitos e investimentos bancários, como poupança, CDB, LCI e LCA, até o limite de R$ 250.000,00 por CPF/CNPJ e por instituição financeira.
                </p>
                <p className="text-secondary" style={{ lineHeight: 1.8 }}>
                  Os valores mobiliários ofertados através desta plataforma (tokens representativos de dívida, participação societária ou outros ativos) <strong>NÃO contam com cobertura do FGC</strong> nem de qualquer outro mecanismo de garantia governamental.
                </p>
                <p className="text-secondary" style={{ lineHeight: 1.8 }}>
                  Em caso de inadimplência ou insolvência do emissor, a recuperação do capital dependerá exclusivamente das garantias específicas previstas nos termos da oferta e da capacidade de pagamento do emissor.
                </p>
              </div>

              {/* Risco 3 */}
              <div className="mb-5">
                <h2 className="h4 fw-bold mb-3" style={{ color: "#1e293b" }}>
                  3. Risco de Liquidez
                </h2>
                <p className="text-secondary" style={{ lineHeight: 1.8 }}>
                  <strong>OS INVESTIMENTOS PODEM APRESENTAR BAIXA OU NENHUMA LIQUIDEZ.</strong>
                </p>
                <p className="text-secondary" style={{ lineHeight: 1.8 }}>
                  Liquidez refere-se à facilidade de conversão do investimento em dinheiro sem perda significativa de valor.
                  Os valores mobiliários ofertados através da plataforma podem não possuir mercado secundário ativo ou qualquer mercado secundário.
                </p>
                <p className="text-secondary" style={{ lineHeight: 1.8 }}>
                  Mesmo quando existe mercado secundário, não há garantia de que haverá compradores interessados em adquirir seus tokens pelo preço desejado ou em qualquer preço.
                  O investidor pode precisar manter o investimento até o vencimento ou data de resgate prevista nos termos da oferta.
                </p>
                <p className="text-secondary" style={{ lineHeight: 1.8 }}>
                  Tentativas de venda antecipada podem resultar em deságios significativos (venda por valor inferior ao investido).
                  Em situações de necessidade urgente de recursos, o investidor pode não conseguir resgatar seu investimento.
                </p>
              </div>

              {/* Risco 4 */}
              <div className="mb-5">
                <h2 className="h4 fw-bold mb-3" style={{ color: "#1e293b" }}>
                  4. Risco de Crédito e Inadimplência
                </h2>
                <p className="text-secondary" style={{ lineHeight: 1.8 }}>
                  <strong>O EMISSOR PODE NÃO HONRAR SEUS COMPROMISSOS FINANCEIROS.</strong>
                </p>
                <p className="text-secondary" style={{ lineHeight: 1.8 }}>
                  Risco de crédito é a possibilidade de o emissor não cumprir suas obrigações de pagamento de juros, principal ou outras remunerações previstas nos termos da oferta.
                </p>
                <p className="text-secondary" style={{ lineHeight: 1.8 }}>
                  Empresas de pequeno porte apresentam maior risco de inadimplência devido a: menor diversificação de receitas, maior dependência de poucos clientes ou fornecedores,
                  menor capacidade de acesso a crédito, maior vulnerabilidade a crises econômicas e setoriais.
                </p>
                <p className="text-secondary" style={{ lineHeight: 1.8 }}>
                  Em caso de inadimplência, o investidor poderá: ter atraso nos pagamentos de juros ou principal, receber valores inferiores ao contratado,
                  precisar acionar garantias (quando existirem), ingressar com medidas judiciais de cobrança (com custos e prazos incertos).
                </p>
                <p className="text-secondary" style={{ lineHeight: 1.8 }}>
                  A PLATAFORMA <strong>NÃO se responsabiliza</strong> por inadimplência, atrasos ou descumprimento de obrigações por parte dos emissores.
                  A PLATAFORMA não atua como garantidora, avalista ou fiadora das obrigações dos emissores.
                </p>
              </div>

              {/* Risco 5 */}
              <div className="mb-5">
                <h2 className="h4 fw-bold mb-3" style={{ color: "#1e293b" }}>
                  5. Risco de Mercado e Volatilidade
                </h2>
                <p className="text-secondary" style={{ lineHeight: 1.8 }}>
                  <strong>O VALOR DOS INVESTIMENTOS PODE VARIAR SIGNIFICATIVAMENTE.</strong>
                </p>
                <p className="text-secondary" style={{ lineHeight: 1.8 }}>
                  Os valores mobiliários estão sujeitos a flutuações de valor decorrentes de diversos fatores, incluindo:
                </p>
                <ul className="text-secondary" style={{ lineHeight: 1.8 }}>
                  <li>Condições econômicas gerais (inflação, taxa de juros, PIB, câmbio)</li>
                  <li>Condições específicas do setor de atuação do emissor</li>
                  <li>Desempenho operacional e financeiro da empresa</li>
                  <li>Mudanças regulatórias e legislativas</li>
                  <li>Sentimento geral do mercado e dos investidores</li>
                  <li>Eventos geopolíticos e macroeconômicos</li>
                </ul>
                <p className="text-secondary" style={{ lineHeight: 1.8 }}>
                  Quando houver mercado secundário, o preço de negociação dos tokens pode ser inferior ao valor investido, resultando em perdas para o investidor que desejar vender antes do vencimento.
                </p>
              </div>

              {/* Risco 6 */}
              <div className="mb-5">
                <h2 className="h4 fw-bold mb-3" style={{ color: "#1e293b" }}>
                  6. Risco Operacional e Tecnológico
                </h2>
                <p className="text-secondary" style={{ lineHeight: 1.8 }}>
                  <strong>INVESTIMENTOS EM TOKENS DIGITAIS ENVOLVEM RISCOS TECNOLÓGICOS ESPECÍFICOS.</strong>
                </p>
                <p className="text-secondary" style={{ lineHeight: 1.8 }}>
                  A tokenização de ativos utiliza tecnologia blockchain, que está sujeita a riscos específicos:
                </p>
                <ul className="text-secondary" style={{ lineHeight: 1.8 }}>
                  <li><strong>Risco de smart contract:</strong> Falhas ou vulnerabilidades em contratos inteligentes podem resultar em perdas irrecuperáveis</li>
                  <li><strong>Risco de rede blockchain:</strong> Congestionamento, forks, ou ataques à rede podem afetar transações e custódia</li>
                  <li><strong>Risco de chaves privadas:</strong> Perda de acesso às chaves criptográficas pode resultar em perda permanente dos ativos</li>
                  <li><strong>Risco de plataforma:</strong> Falhas técnicas, indisponibilidade de sistemas, ou descontinuação de serviços</li>
                  <li><strong>Risco cibernético:</strong> Ataques hackers, phishing, malware ou outras ameaças de segurança digital</li>
                </ul>
                <p className="text-secondary" style={{ lineHeight: 1.8 }}>
                  A PLATAFORMA adota medidas de segurança de acordo com as melhores práticas de mercado, mas não pode garantir a inexistência de falhas ou violações de segurança.
                </p>
              </div>

              {/* Risco 7 */}
              <div className="mb-5">
                <h2 className="h4 fw-bold mb-3" style={{ color: "#1e293b" }}>
                  7. Risco Regulatório e Legal
                </h2>
                <p className="text-secondary" style={{ lineHeight: 1.8 }}>
                  <strong>MUDANÇAS NA LEGISLAÇÃO PODEM AFETAR SEUS INVESTIMENTOS.</strong>
                </p>
                <p className="text-secondary" style={{ lineHeight: 1.8 }}>
                  O mercado de tokenização de ativos e investimento participativo está sujeito a evolução regulatória constante.
                  Alterações na legislação, regulamentação ou interpretação de normas podem:
                </p>
                <ul className="text-secondary" style={{ lineHeight: 1.8 }}>
                  <li>Afetar a capacidade de negociação dos tokens</li>
                  <li>Impor novas obrigações ou restrições aos investidores</li>
                  <li>Alterar o tratamento tributário dos investimentos</li>
                  <li>Modificar direitos e obrigações previstos nos termos da oferta</li>
                  <li>Impactar a continuidade de operações da plataforma ou do emissor</li>
                </ul>
              </div>

              {/* Risco 8 */}
              <div className="mb-5">
                <h2 className="h4 fw-bold mb-3" style={{ color: "#1e293b" }}>
                  8. Limites de Investimento para Proteção do Investidor
                </h2>
                <p className="text-secondary" style={{ lineHeight: 1.8 }}>
                  De acordo com a Resolução CVM 88/2022, os investidores estão sujeitos a limites de investimento anual em ofertas públicas de distribuição de valores mobiliários realizadas por meio de plataforma eletrônica de investimento participativo:
                </p>
                <div className="table-responsive mt-4 mb-4">
                  <table className="table table-bordered">
                    <thead className="table-light">
                      <tr>
                        <th>Perfil do Investidor</th>
                        <th>Limite Anual de Investimento</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Investidor com renda bruta anual ou montante de investimentos financeiros <strong>inferior a R$ 100.000,00</strong></td>
                        <td>Até <strong>R$ 10.000,00</strong> por ano</td>
                      </tr>
                      <tr>
                        <td>Investidor com renda bruta anual ou montante de investimentos financeiros <strong>igual ou superior a R$ 100.000,00</strong></td>
                        <td>Até <strong>10% da renda bruta anual ou do montante de investimentos financeiros</strong></td>
                      </tr>
                      <tr>
                        <td><strong>Investidor Qualificado</strong> (conforme Resolução CVM 30/2021)</td>
                        <td><strong>Sem limite</strong></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-secondary" style={{ lineHeight: 1.8 }}>
                  Estes limites aplicam-se ao somatório de todos os investimentos realizados pelo investidor em todas as plataformas de investimento participativo no período de 12 meses.
                </p>
                <p className="text-secondary" style={{ lineHeight: 1.8 }}>
                  O investidor é responsável por controlar e respeitar seus limites de investimento, declarando de forma verídica sua renda bruta anual e montante de investimentos financeiros.
                </p>
              </div>

              {/* Risco 9 */}
              <div className="mb-5">
                <h2 className="h4 fw-bold mb-3" style={{ color: "#1e293b" }}>
                  9. Papel e Responsabilidades da Plataforma
                </h2>
                <p className="text-secondary" style={{ lineHeight: 1.8 }}>
                  A PLATAFORMA atua como intermediária tecnológica, facilitando a conexão entre emissores de valores mobiliários e investidores.
                  É importante compreender que:
                </p>
                <ul className="text-secondary" style={{ lineHeight: 1.8 }}>
                  <li>A PLATAFORMA <strong>NÃO é instituição financeira</strong> e não capta recursos para investimento próprio</li>
                  <li>A PLATAFORMA <strong>NÃO presta assessoria de investimentos</strong> nem recomenda investimentos específicos</li>
                  <li>A PLATAFORMA <strong>NÃO garante</strong> a rentabilidade, liquidez ou retorno de qualquer investimento</li>
                  <li>A PLATAFORMA <strong>NÃO se responsabiliza</strong> por perdas decorrentes de inadimplência dos emissores</li>
                  <li>A PLATAFORMA realiza análise prévia dos emissores e ofertas, mas <strong>NÃO garante</strong> a veracidade integral das informações prestadas ou o sucesso dos empreendimentos</li>
                  <li>O investidor é responsável por <strong>realizar sua própria análise</strong> e avaliação dos riscos antes de investir</li>
                </ul>
                <p className="text-secondary" style={{ lineHeight: 1.8 }}>
                  A divulgação de ofertas na PLATAFORMA não representa recomendação de investimento. Toda decisão de investimento deve ser baseada em análise própria do investidor.
                </p>
              </div>

              {/* Risco 10 */}
              <div className="mb-5">
                <h2 className="h4 fw-bold mb-3" style={{ color: "#1e293b" }}>
                  10. Informações e Due Diligence
                </h2>
                <p className="text-secondary" style={{ lineHeight: 1.8 }}>
                  <strong>É FUNDAMENTAL QUE O INVESTIDOR REALIZE SUA PRÓPRIA ANÁLISE.</strong>
                </p>
                <p className="text-secondary" style={{ lineHeight: 1.8 }}>
                  Antes de realizar qualquer investimento, o investidor deve:
                </p>
                <ul className="text-secondary" style={{ lineHeight: 1.8 }}>
                  <li>Ler integralmente o <strong>documento de oferta</strong> e todos os anexos</li>
                  <li>Compreender o modelo de negócio do emissor</li>
                  <li>Avaliar as demonstrações financeiras e projeções apresentadas</li>
                  <li>Verificar a existência e qualidade de garantias oferecidas</li>
                  <li>Analisar o histórico e reputação do emissor e seus administradores</li>
                  <li>Consultar profissionais especializados (contadores, advogados, consultores financeiros) se necessário</li>
                  <li>Considerar sua situação financeira pessoal, objetivos de investimento e tolerância a risco</li>
                </ul>
                <p className="text-secondary" style={{ lineHeight: 1.8 }}>
                  As informações disponibilizadas na PLATAFORMA são fornecidas pelos emissores. Embora a PLATAFORMA realize verificações preliminares,
                  o investidor deve conduzir sua própria análise e não deve confiar exclusivamente nas informações apresentadas.
                </p>
              </div>

              {/* Diversificação */}
              <div className="mb-5">
                <h2 className="h4 fw-bold mb-3" style={{ color: "#1e293b" }}>
                  11. Importância da Diversificação
                </h2>
                <p className="text-secondary" style={{ lineHeight: 1.8 }}>
                  <strong>NÃO CONCENTRE TODO O SEU PATRIMÔNIO EM UM ÚNICO INVESTIMENTO.</strong>
                </p>
                <p className="text-secondary" style={{ lineHeight: 1.8 }}>
                  A diversificação é uma estratégia fundamental de gestão de risco. Recomenda-se que o investidor:
                </p>
                <ul className="text-secondary" style={{ lineHeight: 1.8 }}>
                  <li>Não invista recursos que possam fazer falta no curto prazo</li>
                  <li>Não comprometa mais do que uma pequena parcela de seu patrimônio em investimentos de alto risco</li>
                  <li>Diversifique entre diferentes emissores, setores e tipos de ativos</li>
                  <li>Mantenha uma reserva de emergência em investimentos líquidos e de baixo risco</li>
                  <li>Considere seu horizonte de investimento e necessidades futuras de recursos</li>
                </ul>
                <p className="text-secondary" style={{ lineHeight: 1.8 }}>
                  Investimentos em empresas de pequeno porte devem representar apenas uma parcela do portfólio total do investidor, compatível com seu perfil de risco.
                </p>
              </div>

              {/* Declaração Final */}
              <div className="mb-5">
                <h2 className="h4 fw-bold mb-3" style={{ color: "#1e293b" }}>
                  12. Declaração de Ciência e Aceitação
                </h2>
                <p className="text-secondary" style={{ lineHeight: 1.8 }}>
                  Ao aceitar este Termo de Ciência de Risco, o investidor declara que:
                </p>
                <ul className="text-secondary" style={{ lineHeight: 1.8 }}>
                  <li>Leu e compreendeu integralmente o conteúdo deste documento</li>
                  <li>Está ciente de todos os riscos mencionados e de que pode perder a totalidade do capital investido</li>
                  <li>Compreende que os investimentos não são garantidos pelo FGC ou qualquer outro mecanismo de garantia governamental</li>
                  <li>Está ciente de que pode enfrentar dificuldades ou impossibilidade de resgatar seus investimentos antes do vencimento</li>
                  <li>Compreende o papel limitado da PLATAFORMA e que ela não garante rentabilidade ou se responsabiliza por inadimplência dos emissores</li>
                  <li>Realizou ou realizará sua própria análise dos investimentos e não se baseia exclusivamente nas informações fornecidas pela PLATAFORMA</li>
                  <li>Possui condições financeiras para suportar eventual perda total do capital investido sem comprometer seu padrão de vida</li>
                  <li>Consultou ou teve a oportunidade de consultar profissionais especializados para avaliar a adequação dos investimentos ao seu perfil</li>
                  <li>Declara de forma verídica sua renda bruta anual e montante de investimentos financeiros para fins de aplicação dos limites regulatórios</li>
                  <li>Assume integral responsabilidade por suas decisões de investimento</li>
                </ul>
              </div>

              {/* Alert Final */}
              <div className="alert alert-danger mb-5" role="alert" style={{ borderLeft: "4px solid #dc2626", borderRadius: "0.5rem" }}>
                <h5 className="alert-heading fw-bold">
                  <i className="bi bi-shield-exclamation me-2"></i>
                  Advertência Final
                </h5>
                <p className="mb-2">
                  <strong>RENTABILIDADE PASSADA NÃO REPRESENTA GARANTIA DE RESULTADOS FUTUROS.</strong>
                </p>
                <p className="mb-2">
                  <strong>LEIA ATENTAMENTE TODOS OS DOCUMENTOS DA OFERTA ANTES DE INVESTIR.</strong>
                </p>
                <p className="mb-0">
                  <strong>EM CASO DE DÚVIDAS, CONSULTE UM PROFISSIONAL ESPECIALIZADO.</strong>
                </p>
              </div>

              {/* Footer Info */}
              <div className="p-4 rounded-3 mb-4" style={{ backgroundColor: "#f8fafc", border: "1px solid #e2e8f0" }}>
                <p className="text-secondary mb-2" style={{ fontSize: "0.875rem", lineHeight: 1.6 }}>
                  <strong>Token One LTDA</strong> | CNPJ: 37.728.588/0001-04
                </p>
                <p className="text-secondary mb-2" style={{ fontSize: "0.875rem", lineHeight: 1.6 }}>
                  Plataforma Eletrônica de Investimento Participativo em processo de autorização junto à CVM.
                </p>
                <p className="text-secondary mb-0" style={{ fontSize: "0.875rem", lineHeight: 1.6 }}>
                  Para dúvidas ou mais informações, entre em contato através da nossa <a href="/contato">página de contato</a>.
                </p>
              </div>

              {/* Last Update */}
              <p className="text-muted text-center" style={{ fontSize: "0.875rem" }}>
                Última atualização: 15 de outubro de 2025
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
