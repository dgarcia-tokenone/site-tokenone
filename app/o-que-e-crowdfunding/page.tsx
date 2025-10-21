export const metadata = {
  title: "O que é Crowdfunding? | TokenOne",
  description:
    "Entenda de forma simples o que é crowdfunding, como funciona o investimento coletivo e como você pode participar financiando empresas promissoras.",
};

export default function OQueECrowdfundingPage() {
  return (
    <main className="py-5 py-lg-6">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 col-xl-9">
            <article className="legal-document">
              <header className="mb-5">
                <h1 className="display-5 fw-bold mb-4">O que é Crowdfunding?</h1>
                <p className="lead text-secondary">
                  Descubra como o financiamento coletivo está democratizando o acesso ao investimento em empresas e startups
                  promissoras.
                </p>
              </header>

              <section className="mb-5">
                <h2 className="h3 fw-semibold mb-3">Introdução: O Poder da Multidão</h2>
                <p className="mb-3">
                  Imagine poder investir em uma startup inovadora com o mesmo potencial da próxima grande empresa de tecnologia, ou
                  ajudar uma pequena empresa promissora a crescer e, ao mesmo tempo, lucrar com esse crescimento. Isso é possível com o
                  crowdfunding!
                </p>
                <p className="mb-0">
                  O crowdfunding, ou financiamento coletivo, está revolucionando a forma como empresas captam recursos e como pessoas
                  comuns podem se tornar investidores de negócios promissores. Vamos entender tudo sobre essa modalidade de investimento
                  que está transformando o mercado financeiro brasileiro.
                </p>
              </section>

              <section className="mb-5">
                <h2 className="h3 fw-semibold mb-3">O que é Crowdfunding?</h2>
                <div className="alert alert-primary border-primary mb-4" role="alert">
                  <h3 className="h5 fw-semibold mb-3">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="me-2"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 16v-4" />
                      <path d="M12 8h.01" />
                    </svg>
                    Definição Simples
                  </h3>
                  <p className="mb-0">
                    <strong>Crowdfunding</strong> vem do inglês &quot;crowd&quot; (multidão) + &quot;funding&quot; (financiamento), ou seja,{" "}
                    <strong>financiamento coletivo</strong>. É quando um grupo de pessoas se une para investir pequenas quantias em um
                    projeto, empresa ou causa, tornando possível a captação de recursos que, individualmente, seria mais difícil de
                    obter.
                  </p>
                </div>

                <h3 className="h5 fw-semibold mt-4 mb-3">Exemplo Prático</h3>
                <p className="mb-3">Pense em uma &quot;vaquinha online&quot; para investimentos:</p>
                <ul className="mb-4">
                  <li className="mb-2">
                    <strong>Uma empresa precisa de R$ 500.000</strong> para crescer
                  </li>
                  <li className="mb-2">
                    <strong>500 pessoas investem R$ 1.000 cada uma</strong>
                  </li>
                  <li className="mb-2">
                    <strong>A empresa recebe o valor total</strong> para realizar seus planos
                  </li>
                  <li className="mb-2">
                    <strong>Cada investidor recebe uma participação</strong> na empresa proporcional ao seu investimento
                  </li>
                  <li className="mb-2">
                    <strong>Se a empresa crescer e lucrar</strong>, todos os investidores podem ganhar dinheiro
                  </li>
                </ul>

                <div className="card bg-light border-0 mb-0">
                  <div className="card-body">
                    <h4 className="h6 fw-semibold mb-3">A diferença do crowdfunding tradicional:</h4>
                    <p className="mb-0 small">
                      Existem vários tipos de crowdfunding. O mais conhecido é o de <strong>doação ou recompensa</strong> (como aquelas
                      campanhas para criar um produto onde você ganha o produto em troca da contribuição). Porém, o{" "}
                      <strong>equity crowdfunding</strong> é diferente: você se torna <strong>sócio da empresa</strong>, investindo
                      dinheiro em troca de uma participação societária, podendo lucrar com o crescimento do negócio.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-5">
                <h2 className="h3 fw-semibold mb-3">Tipos de Crowdfunding</h2>
                <p className="mb-4">Existem diferentes modalidades de crowdfunding, cada uma com suas características:</p>

                <div className="row g-4 mb-0">
                  <div className="col-12 col-md-6">
                    <div className="card h-100 border-primary">
                      <div className="card-body">
                        <h3 className="h6 fw-semibold mb-3 text-primary">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="me-2"
                          >
                            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                          </svg>
                          Equity Crowdfunding
                        </h3>
                        <p className="small mb-2">
                          <strong>O que é:</strong> Você investe em troca de participação societária (ações) da empresa.
                        </p>
                        <p className="small mb-2">
                          <strong>Retorno:</strong> Lucros futuros, dividendos ou venda da participação com valorização.
                        </p>
                        <p className="small mb-0">
                          <strong>Foco TokenOne:</strong> Este é o modelo que utilizamos!
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-md-6">
                    <div className="card h-100 border-success">
                      <div className="card-body">
                        <h3 className="h6 fw-semibold mb-3 text-success">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="me-2"
                          >
                            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                          </svg>
                          Crowdfunding de Recompensa
                        </h3>
                        <p className="small mb-2">
                          <strong>O que é:</strong> Você contribui e recebe um produto, serviço ou benefício em troca.
                        </p>
                        <p className="small mb-2">
                          <strong>Retorno:</strong> O produto ou serviço prometido (não há retorno financeiro).
                        </p>
                        <p className="small mb-0">
                          <strong>Exemplo:</strong> Catarse, Kickstarter.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-md-6">
                    <div className="card h-100 border-info">
                      <div className="card-body">
                        <h3 className="h6 fw-semibold mb-3 text-info">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="me-2"
                          >
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                          </svg>
                          Crowdfunding de Doação
                        </h3>
                        <p className="small mb-2">
                          <strong>O que é:</strong> Contribuições para causas sociais, projetos pessoais ou beneficentes.
                        </p>
                        <p className="small mb-2">
                          <strong>Retorno:</strong> Satisfação pessoal de ajudar (sem retorno financeiro).
                        </p>
                        <p className="small mb-0">
                          <strong>Exemplo:</strong> Vakinha, GoFundMe.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-md-6">
                    <div className="card h-100 border-warning">
                      <div className="card-body">
                        <h3 className="h6 fw-semibold mb-3 text-warning">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="me-2"
                          >
                            <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                            <line x1="1" y1="10" x2="23" y2="10" />
                          </svg>
                          Crowdfunding de Empréstimo (P2P)
                        </h3>
                        <p className="small mb-2">
                          <strong>O que é:</strong> Empréstimo coletivo onde investidores emprestam dinheiro com juros.
                        </p>
                        <p className="small mb-2">
                          <strong>Retorno:</strong> Recebimento do valor emprestado + juros.
                        </p>
                        <p className="small mb-0">
                          <strong>Exemplo:</strong> Peer-to-peer lending.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-5">
                <h2 className="h3 fw-semibold mb-3">Equity Crowdfunding: O Foco da TokenOne</h2>
                <p className="mb-4">
                  Na TokenOne, trabalhamos especificamente com <strong>equity crowdfunding</strong> (também chamado de investimento
                  participativo ou crowdfunding de investimento). Vamos entender melhor como funciona:
                </p>

                <h3 className="h5 fw-semibold mt-4 mb-3">Como Funciona o Processo?</h3>
                <div className="row g-4 mb-4">
                  <div className="col-12 col-md-6 col-lg-4">
                    <div className="card h-100 text-center border-primary">
                      <div className="card-body">
                        <div className="display-4 fw-bold text-primary mb-3">1</div>
                        <h4 className="h6 fw-semibold mb-2">Empresa Busca Recursos</h4>
                        <p className="small mb-0">
                          Uma empresa de pequeno porte precisa de capital para crescer e submete sua proposta à plataforma
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-md-6 col-lg-4">
                    <div className="card h-100 text-center border-success">
                      <div className="card-body">
                        <div className="display-4 fw-bold text-success mb-3">2</div>
                        <h4 className="h6 fw-semibold mb-2">Análise e Aprovação</h4>
                        <p className="small mb-0">
                          A plataforma analisa a empresa, faz due diligence e, se aprovada, prepara a documentação da oferta
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-md-6 col-lg-4">
                    <div className="card h-100 text-center border-info">
                      <div className="card-body">
                        <div className="display-4 fw-bold text-info mb-3">3</div>
                        <h4 className="h6 fw-semibold mb-2">Abertura da Oferta</h4>
                        <p className="small mb-0">
                          A oferta é publicada na plataforma com todas as informações sobre a empresa, riscos e oportunidades
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-md-6 col-lg-4">
                    <div className="card h-100 text-center border-warning">
                      <div className="card-body">
                        <div className="display-4 fw-bold text-warning mb-3">4</div>
                        <h4 className="h6 fw-semibold mb-2">Período de Captação</h4>
                        <p className="small mb-0">
                          Investidores analisam e decidem investir. A oferta fica aberta por um período determinado (máximo 180 dias)
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-md-6 col-lg-4">
                    <div className="card h-100 text-center border-danger">
                      <div className="card-body">
                        <div className="display-4 fw-bold text-danger mb-3">5</div>
                        <h4 className="h6 fw-semibold mb-2">Meta Atingida</h4>
                        <p className="small mb-0">
                          Se a meta mínima (pelo menos 2/3 do valor alvo) for atingida, a captação é bem-sucedida
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-md-6 col-lg-4">
                    <div className="card h-100 text-center border-secondary">
                      <div className="card-body">
                        <div className="display-4 fw-bold text-secondary mb-3">6</div>
                        <h4 className="h6 fw-semibold mb-2">Você Vira Sócio!</h4>
                        <p className="small mb-0">
                          Os recursos vão para a empresa e você recebe seus valores mobiliários (tokens), tornando-se sócio do negócio
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-5">
                <h2 className="h3 fw-semibold mb-3">Quem Pode Investir em Crowdfunding?</h2>
                <p className="mb-4">
                  No Brasil, o equity crowdfunding é regulamentado pela CVM (Comissão de Valores Mobiliários) através da Resolução CVM
                  88/2022. Qualquer pessoa pode investir, mas existem limites anuais para proteger os investidores:
                </p>

                <div className="row g-4 mb-4">
                  <div className="col-12 col-md-6 col-lg-4">
                    <div className="card h-100 border-primary">
                      <div className="card-body">
                        <h3 className="h6 fw-semibold text-primary mb-3">Investidor em Geral</h3>
                        <div className="display-6 fw-bold text-primary mb-3">R$ 20 mil/ano</div>
                        <p className="small mb-2">
                          <strong>Limite:</strong> Até R$ 20.000 por ano em todas as plataformas de crowdfunding
                        </p>
                        <p className="small mb-0 text-muted">Sem necessidade de comprovação de renda ou patrimônio</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-md-6 col-lg-4">
                    <div className="card h-100 border-success">
                      <div className="card-body">
                        <h3 className="h6 fw-semibold text-success mb-3">Renda/Patrimônio Elevado</h3>
                        <div className="display-6 fw-bold text-success mb-3">10% do valor</div>
                        <p className="small mb-2">
                          <strong>Requisito:</strong> Renda bruta anual OU patrimônio acima de R$ 200.000
                        </p>
                        <p className="small mb-2">
                          <strong>Limite:</strong> Até 10% do maior valor (renda ou patrimônio)
                        </p>
                        <p className="small mb-0 text-muted">Necessária declaração formal</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-md-12 col-lg-4">
                    <div className="card h-100 border-warning">
                      <div className="card-body">
                        <h3 className="h6 fw-semibold text-warning mb-3">Investidor Qualificado</h3>
                        <div className="display-6 fw-bold text-warning mb-3">Sem limites</div>
                        <p className="small mb-2">
                          <strong>Requisito:</strong> Patrimônio financeiro acima de R$ 1.000.000
                        </p>
                        <p className="small mb-2">
                          <strong>Limite:</strong> Não há limite de investimento
                        </p>
                        <p className="small mb-0 text-muted">Necessária certificação</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="alert alert-info border-info" role="alert">
                  <h4 className="h6 fw-semibold mb-2">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="me-2"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="16" x2="12" y2="12" />
                      <line x1="12" y1="8" x2="12.01" y2="8" />
                    </svg>
                    Importante Saber
                  </h4>
                  <p className="mb-0">
                    Estes limites são <strong>anuais</strong> e se aplicam à <strong>soma de todos os investimentos</strong> que você
                    fizer em plataformas de crowdfunding durante o ano-calendário, não apenas na TokenOne.
                  </p>
                </div>
              </section>

              <section className="mb-5">
                <h2 className="h3 fw-semibold mb-3">Vantagens do Crowdfunding para Investidores</h2>
                <p className="mb-4">O crowdfunding oferece diversas vantagens para quem quer investir:</p>

                <div className="row g-4">
                  <div className="col-12">
                    <article className="card border-0 shadow-sm h-100">
                      <div className="card-body p-4">
                        <h3 className="h5 fw-semibold mb-3" style={{ color: "#1e293b" }}>
                          1. Acesso a Investimentos Exclusivos
                        </h3>
                        <p className="mb-2">
                          Tradicionalmente, investir em empresas em estágio inicial era privilégio de grandes investidores e fundos de
                          venture capital. Com o crowdfunding, qualquer pessoa pode:
                        </p>
                        <ul className="mb-0">
                          <li className="mb-1">Investir em startups promissoras</li>
                          <li className="mb-1">Participar de negócios inovadores desde o início</li>
                          <li className="mb-1">Ter acesso a oportunidades antes restritas</li>
                          <li className="mb-1">Diversificar além dos investimentos tradicionais</li>
                        </ul>
                      </div>
                    </article>
                  </div>

                  <div className="col-12">
                    <article className="card border-0 shadow-sm h-100">
                      <div className="card-body p-4">
                        <h3 className="h5 fw-semibold mb-3" style={{ color: "#1e293b" }}>
                          2. Baixo Valor de Entrada
                        </h3>
                        <p className="mb-2">
                          Diferente de investimentos tradicionais em empresas que exigem valores elevados, no crowdfunding:
                        </p>
                        <ul className="mb-0">
                          <li className="mb-1">Você pode começar com valores acessíveis (muitas vezes a partir de R$ 500 ou R$ 1.000)</li>
                          <li className="mb-1">Não precisa ser milionário para ser sócio de empresas</li>
                          <li className="mb-1">Pode diversificar investindo pequenas quantias em várias empresas</li>
                          <li className="mb-1">Democratização real do acesso ao investimento em negócios</li>
                        </ul>
                      </div>
                    </article>
                  </div>

                  <div className="col-12">
                    <article className="card border-0 shadow-sm h-100">
                      <div className="card-body p-4">
                        <h3 className="h5 fw-semibold mb-3" style={{ color: "#1e293b" }}>
                          3. Alto Potencial de Retorno
                        </h3>
                        <p className="mb-2">
                          Investir em empresas em estágio inicial pode gerar retornos significativos:
                        </p>
                        <ul className="mb-3">
                          <li className="mb-1">
                            Se a empresa crescer muito, sua participação pode se valorizar exponencialmente
                          </li>
                          <li className="mb-1">Possibilidade de receber dividendos se a empresa se tornar lucrativa</li>
                          <li className="mb-1">Oportunidade de &quot;exit&quot; (venda da participação) com lucro</li>
                          <li className="mb-1">Potencial de multiplicar o investimento inicial várias vezes</li>
                        </ul>
                        <div className="alert alert-warning mb-0" role="alert">
                          <strong>Importante:</strong> Alto potencial de retorno também significa alto risco. Muitas startups não têm
                          sucesso.
                        </div>
                      </div>
                    </article>
                  </div>

                  <div className="col-12">
                    <article className="card border-0 shadow-sm h-100">
                      <div className="card-body p-4">
                        <h3 className="h5 fw-semibold mb-3" style={{ color: "#1e293b" }}>
                          4. Transparência e Informação
                        </h3>
                        <p className="mb-2">As plataformas de crowdfunding são obrigadas a fornecer informações detalhadas:</p>
                        <ul className="mb-0">
                          <li className="mb-1">Documentos completos sobre a empresa e o negócio</li>
                          <li className="mb-1">Informações financeiras e projeções</li>
                          <li className="mb-1">Alertas claros sobre riscos</li>
                          <li className="mb-1">Possibilidade de fazer perguntas aos empreendedores</li>
                          <li className="mb-1">Atualizações periódicas após o investimento</li>
                        </ul>
                      </div>
                    </article>
                  </div>

                  <div className="col-12">
                    <article className="card border-0 shadow-sm h-100">
                      <div className="card-body p-4">
                        <h3 className="h5 fw-semibold mb-3" style={{ color: "#1e293b" }}>
                          5. Apoio ao Empreendedorismo
                        </h3>
                        <p className="mb-2">Além do retorno financeiro, você:</p>
                        <ul className="mb-0">
                          <li className="mb-1">Ajuda empresas brasileiras a crescerem</li>
                          <li className="mb-1">Contribui para a geração de empregos</li>
                          <li className="mb-1">Apoia inovação e desenvolvimento econômico</li>
                          <li className="mb-1">Pode investir em causas e setores que você acredita</li>
                          <li className="mb-1">Satisfação de ser parte do sucesso de novos negócios</li>
                        </ul>
                      </div>
                    </article>
                  </div>

                  <div className="col-12">
                    <article className="card border-0 shadow-sm h-100">
                      <div className="card-body p-4">
                        <h3 className="h5 fw-semibold mb-3" style={{ color: "#1e293b" }}>
                          6. Diversificação de Portfólio
                        </h3>
                        <p className="mb-2">O crowdfunding permite diversificar seus investimentos:</p>
                        <ul className="mb-0">
                          <li className="mb-1">Adicione ativos alternativos ao seu portfólio</li>
                          <li className="mb-1">Invista em diferentes setores e estágios de empresas</li>
                          <li className="mb-1">Complemente investimentos tradicionais (ações, fundos, renda fixa)</li>
                          <li className="mb-1">Reduza riscos através da diversificação</li>
                        </ul>
                      </div>
                    </article>
                  </div>
                </div>
              </section>

              <section className="mb-5">
                <h2 className="h3 fw-semibold mb-3">Riscos do Investimento em Crowdfunding</h2>
                <div className="alert alert-danger border-danger mb-4" role="alert">
                  <h3 className="h6 fw-semibold mb-2">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="me-2"
                    >
                      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                      <line x1="12" y1="9" x2="12" y2="13" />
                      <line x1="12" y1="17" x2="12.01" y2="17" />
                    </svg>
                    Aviso Importante
                  </h3>
                  <p className="mb-0">
                    Investir em empresas de pequeno porte através de crowdfunding é considerado um investimento de{" "}
                    <strong>alto risco</strong>. É fundamental entender todos os riscos antes de investir.
                  </p>
                </div>

                <h3 className="h5 fw-semibold mt-4 mb-3">Principais Riscos:</h3>
                <div className="row g-3 mb-0">
                  <div className="col-12 col-md-6">
                    <div className="card h-100 border-danger">
                      <div className="card-body">
                        <h4 className="h6 fw-semibold text-danger mb-3">Risco de Perda Total</h4>
                        <p className="small mb-0">
                          Empresas em estágio inicial têm alta taxa de falência. Há possibilidade real de perder todo o dinheiro
                          investido se a empresa não for bem-sucedida.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-md-6">
                    <div className="card h-100 border-danger">
                      <div className="card-body">
                        <h4 className="h6 fw-semibold text-danger mb-3">Baixa Liquidez</h4>
                        <p className="small mb-0">
                          Não há garantia de que você conseguirá vender sua participação quando quiser. O investimento pode ficar
                          &quot;preso&quot; por anos até um evento de liquidez (venda da empresa, IPO, etc.).
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-md-6">
                    <div className="card h-100 border-danger">
                      <div className="card-body">
                        <h4 className="h6 fw-semibold text-danger mb-3">Diluição da Participação</h4>
                        <p className="small mb-0">
                          A empresa pode captar mais recursos no futuro, emitindo novas ações, o que pode diluir (reduzir
                          percentualmente) sua participação e seus direitos.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-md-6">
                    <div className="card h-100 border-danger">
                      <div className="card-body">
                        <h4 className="h6 fw-semibold text-danger mb-3">Assimetria de Informação</h4>
                        <p className="small mb-0">
                          Como investidor minoritário, você pode não ter acesso a todas as informações ou poder de decisão sobre os
                          rumos da empresa.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-md-6">
                    <div className="card h-100 border-danger">
                      <div className="card-body">
                        <h4 className="h6 fw-semibold text-danger mb-3">Prazo Longo de Retorno</h4>
                        <p className="small mb-0">
                          Normalmente leva muitos anos (5 a 10 anos ou mais) para uma empresa crescer o suficiente para gerar retorno
                          aos investidores.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-md-6">
                    <div className="card h-100 border-danger">
                      <div className="card-body">
                        <h4 className="h6 fw-semibold text-danger mb-3">Falta de Garantias</h4>
                        <p className="small mb-0">
                          Não há garantias ou seguros protegendo seu investimento. Se a empresa falir, você pode não recuperar nada.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-5">
                <h2 className="h3 fw-semibold mb-3">Como Escolher um Bom Investimento em Crowdfunding?</h2>
                <p className="mb-4">Para aumentar suas chances de sucesso, considere estas dicas:</p>

                <div className="card mb-3 border-primary">
                  <div className="card-body">
                    <h3 className="h6 fw-semibold mb-3">1. Analise o Negócio Profundamente</h3>
                    <ul className="mb-0 small">
                      <li className="mb-1">Entenda o modelo de negócio e como a empresa ganha dinheiro</li>
                      <li className="mb-1">Avalie o mercado, concorrência e diferenciais</li>
                      <li className="mb-1">Verifique o histórico e experiência dos fundadores</li>
                      <li className="mb-1">Analise os números: receita, custos, projeções</li>
                    </ul>
                  </div>
                </div>

                <div className="card mb-3 border-success">
                  <div className="card-body">
                    <h3 className="h6 fw-semibold mb-3">2. Leia TODA a Documentação</h3>
                    <ul className="mb-0 small">
                      <li className="mb-1">Informações Essenciais da Oferta</li>
                      <li className="mb-1">Seção de alertas sobre riscos</li>
                      <li className="mb-1">Demonstrações financeiras</li>
                      <li className="mb-1">Termos e condições do investimento</li>
                    </ul>
                  </div>
                </div>

                <div className="card mb-3 border-info">
                  <div className="card-body">
                    <h3 className="h6 fw-semibold mb-3">3. Diversifique Seus Investimentos</h3>
                    <ul className="mb-0 small">
                      <li className="mb-1">Nunca coloque todo seu dinheiro em uma única empresa</li>
                      <li className="mb-1">Invista em várias empresas de setores diferentes</li>
                      <li className="mb-1">Use apenas dinheiro que você pode perder sem comprometer seu orçamento</li>
                      <li className="mb-1">Mantenha a maior parte de seu patrimônio em investimentos mais seguros</li>
                    </ul>
                  </div>
                </div>

                <div className="card mb-3 border-warning">
                  <div className="card-body">
                    <h3 className="h6 fw-semibold mb-3">4. Avalie a Plataforma</h3>
                    <ul className="mb-0 small">
                      <li className="mb-1">Verifique se a plataforma é autorizada pela CVM</li>
                      <li className="mb-1">Pesquise a reputação e histórico da plataforma</li>
                      <li className="mb-1">Veja o track record de ofertas anteriores</li>
                      <li className="mb-1">Avalie a qualidade do suporte e informações fornecidas</li>
                    </ul>
                  </div>
                </div>

                <div className="card mb-0 border-secondary">
                  <div className="card-body">
                    <h3 className="h6 fw-semibold mb-3">5. Faça Perguntas</h3>
                    <ul className="mb-0 small">
                      <li className="mb-1">Use o fórum de perguntas para esclarecer dúvidas</li>
                      <li className="mb-1">Questione pontos que não ficaram claros</li>
                      <li className="mb-1">Avalie como os empreendedores respondem às perguntas</li>
                      <li className="mb-1">Não invista se ainda tiver dúvidas importantes</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="mb-5">
                <h2 className="h3 fw-semibold mb-3">Crowdfunding no Brasil: Números e Regulamentação</h2>
                <div className="row g-4 mb-4">
                  <div className="col-12 col-md-4">
                    <div className="card text-center h-100 bg-primary text-white border-0">
                      <div className="card-body">
                        <div className="display-4 fw-bold mb-2">R$ 5 milhões</div>
                        <p className="mb-0">Limite máximo de captação por empresa por ano</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-4">
                    <div className="card text-center h-100 bg-success text-white border-0">
                      <div className="card-body">
                        <div className="display-4 fw-bold mb-2">2017</div>
                        <p className="mb-0">Ano de regulamentação pela CVM (atualizada em 2022)</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-4">
                    <div className="card text-center h-100 bg-info text-white border-0">
                      <div className="card-body">
                        <div className="display-4 fw-bold mb-2">180 dias</div>
                        <p className="mb-0">Prazo máximo para captação de cada oferta</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="alert alert-success border-success" role="alert">
                  <h3 className="h6 fw-semibold mb-2">Segurança Regulatória</h3>
                  <p className="mb-0">
                    O Brasil possui uma das legislações mais avançadas do mundo para crowdfunding. A Resolução CVM 88/2022 estabelece
                    regras claras para proteger investidores, incluindo limites de investimento, obrigações de transparência,
                    prestação de informações periódicas e fiscalização das plataformas.
                  </p>
                </div>
              </section>

              <section className="mb-5">
                <h2 className="h3 fw-semibold mb-3">Perguntas Frequentes sobre Crowdfunding</h2>
                <div className="row g-4">
                  <div className="col-12">
                    <article className="card border-0 shadow-sm h-100">
                      <div className="card-body p-4">
                        <h3 className="h5 fw-semibold mb-3" style={{ color: "#1e293b" }}>
                          Quanto tempo leva para ter retorno do investimento?
                        </h3>
                        <p className="mb-0 text-muted">
                          O retorno em crowdfunding geralmente é de longo prazo. Investimentos em empresas em estágio inicial podem
                          levar de 5 a 10 anos (ou mais) para gerar retorno através de dividendos ou eventos de liquidez (venda da
                          empresa, IPO). Este não é um investimento para quem precisa do dinheiro no curto prazo.
                        </p>
                      </div>
                    </article>
                  </div>

                  <div className="col-12">
                    <article className="card border-0 shadow-sm h-100">
                      <div className="card-body p-4">
                        <h3 className="h5 fw-semibold mb-3" style={{ color: "#1e293b" }}>
                          Posso vender minha participação quando quiser?
                        </h3>
                        <p className="mb-0 text-muted">
                          Não há garantia de liquidez. Diferente de ações na bolsa, não existe um mercado secundário ativo para
                          participações em empresas pequenas. Você pode tentar vender sua participação para outros investidores
                          (negociação privada), mas pode ser difícil encontrar compradores. Considere este investimento como ilíquido.
                        </p>
                      </div>
                    </article>
                  </div>

                  <div className="col-12">
                    <article className="card border-0 shadow-sm h-100">
                      <div className="card-body p-4">
                        <h3 className="h5 fw-semibold mb-3" style={{ color: "#1e293b" }}>
                          Qual a diferença entre crowdfunding e investir na bolsa de valores?
                        </h3>
                        <p className="mb-0 text-muted">
                          Na bolsa você compra ações de empresas grandes e estabelecidas, com alta liquidez (pode vender a qualquer
                          momento) e transparência regulatória. No crowdfunding, você investe em empresas pequenas ou startups, com
                          baixa liquidez, maior risco, mas também potencial de retorno muito maior se a empresa crescer
                          significativamente.
                        </p>
                      </div>
                    </article>
                  </div>

                  <div className="col-12">
                    <article className="card border-0 shadow-sm h-100">
                      <div className="card-body p-4">
                        <h3 className="h5 fw-semibold mb-3" style={{ color: "#1e293b" }}>
                          O que acontece se a empresa falir?
                        </h3>
                        <p className="mb-0 text-muted">
                          Se a empresa falir, você provavelmente perderá todo o seu investimento. Como acionista minoritário, você está
                          no final da fila de credores. Primeiro são pagos funcionários, fornecedores, bancos, e só depois (se sobrar
                          algo) os acionistas. Por isso é fundamental diversificar e investir apenas o que você pode perder.
                        </p>
                      </div>
                    </article>
                  </div>

                  <div className="col-12">
                    <article className="card border-0 shadow-sm h-100">
                      <div className="card-body p-4">
                        <h3 className="h5 fw-semibold mb-3" style={{ color: "#1e293b" }}>
                          Tenho direito a participar das decisões da empresa?
                        </h3>
                        <p className="mb-0 text-muted">
                          Depende dos termos da oferta. Geralmente, investidores de crowdfunding são acionistas minoritários sem poder
                          de voto nas decisões do dia a dia. No entanto, você tem direito a receber informações periódicas sobre a
                          empresa e pode ter direito a voto em decisões muito importantes (conforme acordado nos documentos da oferta).
                        </p>
                      </div>
                    </article>
                  </div>
                </div>
              </section>

              <section className="mb-5">
                <div className="alert alert-success border-success" role="alert">
                  <h2 className="h4 fw-semibold mb-3">Pronto para Começar no Crowdfunding?</h2>
                  <p className="mb-3">
                    Agora que você entende o que é crowdfunding e como funciona, está preparado para explorar oportunidades de
                    investimento na TokenOne!
                  </p>
                  <p className="mb-3">
                    <strong>Lembre-se sempre:</strong>
                  </p>
                  <ul className="mb-4">
                    <li className="mb-2">Leia toda a documentação de cada oferta</li>
                    <li className="mb-2">Entenda os riscos específicos de cada investimento</li>
                    <li className="mb-2">Diversifique seus investimentos</li>
                    <li className="mb-2">Invista apenas o que você pode perder</li>
                    <li className="mb-2">Pense no longo prazo</li>
                    <li className="mb-2">Faça perguntas quando tiver dúvidas</li>
                  </ul>
                  <div className="d-flex gap-3 flex-wrap">
                    <a
                      href="https://app.tokenone.com.br/authentication?organizationId=5rSaRhby9TbL7nmJa6rp"
                      className="btn btn-dark"
                    >
                      Ver Oportunidades Disponíveis
                    </a>
                    <a href="/material-didatico" className="btn btn-outline-dark">
                      Material Didático Completo
                    </a>
                    <a href="/o-que-sao-tokens" className="btn btn-outline-dark">
                      Entender Sobre Tokens
                    </a>
                  </div>
                </div>
              </section>

              <section className="mb-5">
                <h2 className="h3 fw-semibold mb-3">Ainda tem dúvidas?</h2>
                <p className="mb-3">
                  Nossa equipe está pronta para ajudar você a entender melhor o crowdfunding e encontrar as melhores oportunidades de
                  investimento:
                </p>
                <ul className="mb-0">
                  <li className="mb-2">
                    <strong>E-mail:</strong>{" "}
                    <a href="mailto:contato@tokenone.com.br" className="text-decoration-none">
                      contato@tokenone.com.br
                    </a>
                  </li>
                  <li className="mb-2">
                    <strong>WhatsApp:</strong> 11 99605-0404
                  </li>
                  <li className="mb-2">
                    <strong>FAQ:</strong>{" "}
                    <a href="/faq" className="text-decoration-none">
                      Perguntas Frequentes
                    </a>
                  </li>
                </ul>
              </section>

              <footer className="border-top pt-4 mt-5 text-secondary">
                <p className="small mb-0">
                  <strong>TokenOne LTDA</strong>
                  <br />
                  CNPJ: 37.728.588/0001-04
                  <br />
                  São Paulo, SP
                </p>
              </footer>
            </article>
          </div>
        </div>
      </div>
    </main>
  );
}
