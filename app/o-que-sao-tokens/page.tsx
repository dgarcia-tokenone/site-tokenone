export const metadata = {
  title: "O que são Tokens? | TokenOne",
  description:
    "Entenda de forma simples o que são tokens, como funciona a tokenização de ativos e como essa tecnologia está democratizando o acesso a investimentos.",
};

const faqItems = [
  {
    id: "faqToken1",
    question: "Qual o valor mínimo para investir?",
    answer: "Depende de cada oferta, mas geralmente você pode começar a investir com valores acessíveis, muitas vezes a partir de R$ 100 ou R$ 500. Isso torna o investimento em tokens muito mais acessível do que investimentos tradicionais."
  },
  {
    id: "faqToken2",
    question: "Posso vender meus tokens a qualquer momento?",
    answer: "Depende do tipo de token e das regras de cada investimento. Alguns tokens podem ter períodos de carência ou restrições. A TokenOne pode facilitar negociações privadas entre investidores, mas é importante entender as condições específicas de cada oferta antes de investir."
  },
  {
    id: "faqToken3",
    question: "Tokens são a mesma coisa que criptomoedas?",
    answer: "Não exatamente. Embora ambos usem tecnologia blockchain, criptomoedas (como Bitcoin) são moedas digitais usadas como meio de troca. Tokens de ativos representam a propriedade ou direitos sobre ativos reais do mundo físico ou digital. É como a diferença entre dinheiro e um título de propriedade."
  },
  {
    id: "faqToken4",
    question: "Preciso entender de tecnologia para investir?",
    answer: "Não! A TokenOne cuida de toda a parte tecnológica para você. Você só precisa entender o básico sobre o investimento que está fazendo (o ativo, os riscos, os retornos esperados). É como usar um carro - você não precisa ser mecânico para dirigir."
  },
  {
    id: "faqToken5",
    question: "Meus tokens podem ser roubados?",
    answer: "A tecnologia blockchain é extremamente segura. Seus tokens ficam em uma carteira digital (wallet) protegida por senhas e criptografia. É importante manter suas credenciais de acesso seguras. A TokenOne implementa múltiplas camadas de segurança para proteger seus ativos."
  }
];

export default function OQueSaoTokensPage() {
  return (
    <main className="py-5 py-lg-6">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 col-xl-9">
            <article className="legal-document">
              <header className="mb-5">
                <h1 className="display-5 fw-bold mb-4">O que são Tokens?</h1>
                <p className="lead text-secondary">
                  Entenda de forma simples como a tokenização está transformando o mercado financeiro e democratizando o acesso a
                  investimentos.
                </p>
              </header>

              <section className="mb-5">
                <h2 className="h3 fw-semibold mb-3">Introdução: Uma Nova Era de Investimentos</h2>
                <p className="mb-3">
                  Imagine poder investir em um apartamento de alto padrão com apenas R$ 1.000, ou ter uma pequena parte de uma fazenda
                  produtiva, ou ainda participar dos lucros de uma empresa promissora. Parece impossível? Com a tokenização de ativos,
                  isso já é realidade!
                </p>
                <p className="mb-0">
                  Os tokens estão revolucionando a forma como as pessoas investem, tornando o mercado financeiro mais acessível,
                  transparente e democrático. Vamos entender como isso funciona de maneira simples e prática.
                </p>
              </section>

              <section className="mb-5">
                <h2 className="h3 fw-semibold mb-3">O que é um Token?</h2>
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
                    <strong>Token</strong> é uma representação digital de um ativo do mundo real. É como ter um &quot;certificado digital&quot;
                    que comprova que você é dono de uma parte (ou da totalidade) de algo valioso - pode ser um imóvel, uma obra de
                    arte, recebíveis de uma empresa, ou qualquer outro bem.
                  </p>
                </div>

                <h3 className="h5 fw-semibold mt-4 mb-3">Exemplo Prático</h3>
                <p className="mb-3">Pense em um token como uma &quot;fatia de bolo&quot;:</p>
                <ul className="mb-4">
                  <li className="mb-2">
                    <strong>O bolo inteiro</strong> seria, por exemplo, um apartamento de R$ 1.000.000
                  </li>
                  <li className="mb-2">
                    <strong>Cada fatia (token)</strong> representa uma pequena parte desse apartamento, digamos R$ 1.000
                  </li>
                  <li className="mb-2">
                    <strong>Você pode comprar quantas fatias quiser</strong>, de acordo com seu orçamento
                  </li>
                  <li className="mb-2">
                    <strong>Cada fatia lhe dá direito</strong> a uma parte proporcional dos benefícios (como aluguel ou valorização)
                  </li>
                </ul>

                <div className="card bg-light border-0 mb-0">
                  <div className="card-body">
                    <h4 className="h6 fw-semibold mb-3">Em termos técnicos:</h4>
                    <p className="mb-0 small">
                      Um token é uma unidade de código registrada em blockchain (uma tecnologia de registro seguro e transparente) que
                      representa digitalmente a propriedade ou direitos sobre um ativo. Cada token contém informações sobre o ativo que
                      representa e pode ser transferido, comprado ou vendido de forma segura e rastreável.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-5">
                <h2 className="h3 fw-semibold mb-3">O que é Tokenização?</h2>
                <p className="mb-4">
                  <strong>Tokenização</strong> é o processo de transformar um ativo do mundo real em tokens digitais. É como &quot;digitalizar&quot;
                  a propriedade de algo, dividindo-a em pequenas partes que podem ser facilmente compradas, vendidas ou negociadas.
                </p>

                <h3 className="h5 fw-semibold mt-4 mb-3">Como funciona o processo?</h3>
                <div className="row g-4 mb-4">
                  <div className="col-12 col-md-6 col-lg-3">
                    <div className="card h-100 text-center border-primary">
                      <div className="card-body">
                        <div className="display-4 fw-bold text-primary mb-3">1</div>
                        <h4 className="h6 fw-semibold mb-2">Seleção do Ativo</h4>
                        <p className="small mb-0">
                          Escolhe-se um ativo real que será tokenizado (imóvel, recebíveis, obra de arte, etc.)
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-md-6 col-lg-3">
                    <div className="card h-100 text-center border-success">
                      <div className="card-body">
                        <div className="display-4 fw-bold text-success mb-3">2</div>
                        <h4 className="h6 fw-semibold mb-2">Avaliação</h4>
                        <p className="small mb-0">O ativo é avaliado para determinar seu valor total e características</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-md-6 col-lg-3">
                    <div className="card h-100 text-center border-info">
                      <div className="card-body">
                        <div className="display-4 fw-bold text-info mb-3">3</div>
                        <h4 className="h6 fw-semibold mb-2">Criação dos Tokens</h4>
                        <p className="small mb-0">
                          O ativo é dividido em tokens digitais, cada um representando uma fração do total
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-md-6 col-lg-3">
                    <div className="card h-100 text-center border-warning">
                      <div className="card-body">
                        <div className="display-4 fw-bold text-warning mb-3">4</div>
                        <h4 className="h6 fw-semibold mb-2">Disponibilização</h4>
                        <p className="small mb-0">Os tokens são oferecidos aos investidores através de plataformas autorizadas</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-5">
                <h2 className="h3 fw-semibold mb-3">Que Tipos de Ativos Podem Ser Tokenizados?</h2>
                <p className="mb-4">
                  Praticamente qualquer coisa de valor pode ser tokenizada! Veja alguns exemplos:
                </p>

                <div className="row g-4 mb-0">
                  <div className="col-12 col-md-6">
                    <div className="card h-100 border-0 shadow-sm">
                      <div className="card-body">
                        <h3 className="h6 fw-semibold mb-3">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="me-2 text-primary"
                          >
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                            <polyline points="9 22 9 12 15 12 15 22" />
                          </svg>
                          Imóveis
                        </h3>
                        <p className="small mb-0">
                          Apartamentos, casas, salas comerciais, galpões. Você pode investir em imóveis sem precisar comprar o imóvel
                          inteiro.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-md-6">
                    <div className="card h-100 border-0 shadow-sm">
                      <div className="card-body">
                        <h3 className="h6 fw-semibold mb-3">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="me-2 text-success"
                          >
                            <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                            <line x1="1" y1="10" x2="23" y2="10" />
                          </svg>
                          Recebíveis
                        </h3>
                        <p className="small mb-0">
                          Valores que empresas têm a receber no futuro, como duplicatas, cheques, carnês e contratos.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-md-6">
                    <div className="card h-100 border-0 shadow-sm">
                      <div className="card-body">
                        <h3 className="h6 fw-semibold mb-3">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="me-2 text-info"
                          >
                            <circle cx="12" cy="8" r="7" />
                            <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
                          </svg>
                          Obras de Arte e Colecionáveis
                        </h3>
                        <p className="small mb-0">
                          Quadros, esculturas, itens raros. Invista em arte sem precisar de milhões.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-md-6">
                    <div className="card h-100 border-0 shadow-sm">
                      <div className="card-body">
                        <h3 className="h6 fw-semibold mb-3">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="me-2 text-warning"
                          >
                            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                          </svg>
                          Commodities
                        </h3>
                        <p className="small mb-0">
                          Ouro, prata, produtos agrícolas. Tenha exposição a commodities de forma fracionada.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-md-6">
                    <div className="card h-100 border-0 shadow-sm">
                      <div className="card-body">
                        <h3 className="h6 fw-semibold mb-3">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="me-2 text-danger"
                          >
                            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                          </svg>
                          Participação em Empresas
                        </h3>
                        <p className="small mb-0">
                          Tokens que representam parte do capital de empresas, similar a ações mas mais acessível.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-md-6">
                    <div className="card h-100 border-0 shadow-sm">
                      <div className="card-body">
                        <h3 className="h6 fw-semibold mb-3">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="me-2 text-secondary"
                          >
                            <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
                            <line x1="7" y1="7" x2="7.01" y2="7" />
                          </svg>
                          Propriedade Intelectual e Royalties
                        </h3>
                        <p className="small mb-0">Direitos sobre músicas, filmes, patentes e outros direitos de propriedade.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-5">
                <h2 className="h3 fw-semibold mb-3">Quais as Vantagens dos Tokens para Investidores?</h2>
                <p className="mb-4">
                  A tokenização traz diversos benefícios que estão transformando o mercado de investimentos:
                </p>

                <div className="row g-4">
                  <div className="col-12 col-md-6">
                    <div className="card h-100 border-0 shadow-sm">
                      <div className="card-body">
                        <div className="d-flex align-items-center mb-3">
                          <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: "40px", height: "40px", flexShrink: 0 }}>
                            <strong>1</strong>
                          </div>
                          <h3 className="h5 fw-semibold mb-0">Democratização do Acesso</h3>
                        </div>
                        <p className="mb-2">
                          <strong>Antes:</strong> Para investir em um imóvel de R$ 1 milhão, você precisaria ter R$ 1 milhão.
                        </p>
                        <p className="mb-2">
                          <strong>Com tokens:</strong> Você pode investir com R$ 100, R$ 500 ou R$ 1.000, comprando apenas uma fração do imóvel.
                        </p>
                        <p className="mb-0 text-muted">
                          Isso significa que investimentos que antes eram exclusivos para pessoas muito ricas agora estão acessíveis para qualquer pessoa!
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-md-6">
                    <div className="card h-100 border-0 shadow-sm">
                      <div className="card-body">
                        <div className="d-flex align-items-center mb-3">
                          <div className="bg-success text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: "40px", height: "40px", flexShrink: 0 }}>
                            <strong>2</strong>
                          </div>
                          <h3 className="h5 fw-semibold mb-0">Maior Liquidez</h3>
                        </div>
                        <p className="mb-2">
                          <strong>Liquidez</strong> significa a facilidade de transformar seu investimento em dinheiro rapidamente.
                        </p>
                        <p className="mb-2">
                          <strong>Exemplo:</strong> Vender um apartamento inteiro pode levar meses. Mas vender tokens que representam uma fração desse apartamento pode ser muito mais rápido, pois há mais pessoas interessadas em comprar quantias menores.
                        </p>
                        <p className="mb-0 text-muted">Os tokens podem ser negociados em plataformas especializadas, facilitando a compra e venda.</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-md-6">
                    <div className="card h-100 border-0 shadow-sm">
                      <div className="card-body">
                        <div className="d-flex align-items-center mb-3">
                          <div className="bg-info text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: "40px", height: "40px", flexShrink: 0 }}>
                            <strong>3</strong>
                          </div>
                          <h3 className="h5 fw-semibold mb-0">Transparência Total</h3>
                        </div>
                        <p className="mb-2">
                          Todos os tokens são registrados em <strong>blockchain</strong>, uma tecnologia que funciona como um &quot;livro de registros&quot; público e impossível de alterar.
                        </p>
                        <p className="mb-2">
                          <strong>Isso significa:</strong>
                        </p>
                        <ul className="mb-0">
                          <li className="mb-1">Você pode verificar quem é o dono de cada token</li>
                          <li className="mb-1">Todas as transações ficam registradas permanentemente</li>
                          <li className="mb-1">Não há como fraudar ou manipular os registros</li>
                          <li className="mb-1">Total rastreabilidade e segurança</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-md-6">
                    <div className="card h-100 border-0 shadow-sm">
                      <div className="card-body">
                        <div className="d-flex align-items-center mb-3">
                          <div className="bg-warning text-dark rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: "40px", height: "40px", flexShrink: 0 }}>
                            <strong>4</strong>
                          </div>
                          <h3 className="h5 fw-semibold mb-0">Redução de Custos</h3>
                        </div>
                        <p className="mb-2">
                          A tokenização elimina ou reduz diversos intermediários (bancos, corretoras, cartórios, etc.), o que significa:
                        </p>
                        <ul className="mb-0">
                          <li className="mb-1">Menos taxas para pagar</li>
                          <li className="mb-1">Processos mais rápidos</li>
                          <li className="mb-1">Menos burocracia</li>
                          <li className="mb-1">Mais do seu dinheiro vai para o investimento real</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-md-6">
                    <div className="card h-100 border-0 shadow-sm">
                      <div className="card-body">
                        <div className="d-flex align-items-center mb-3">
                          <div className="bg-danger text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: "40px", height: "40px", flexShrink: 0 }}>
                            <strong>5</strong>
                          </div>
                          <h3 className="h5 fw-semibold mb-0">Diversificação Mais Fácil</h3>
                        </div>
                        <p className="mb-2">
                          Com valores menores, você pode investir em diversos tipos de ativos ao mesmo tempo, reduzindo seus riscos:
                        </p>
                        <ul className="mb-2">
                          <li className="mb-1">Um pouco em imóveis</li>
                          <li className="mb-1">Um pouco em recebíveis de empresas</li>
                          <li className="mb-1">Um pouco em commodities</li>
                          <li className="mb-1">Um pouco em arte</li>
                        </ul>
                        <p className="mb-0 text-muted">
                          <em>&quot;Não coloque todos os ovos na mesma cesta&quot;</em> - com tokens, isso fica muito mais fácil!
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-md-6">
                    <div className="card h-100 border-0 shadow-sm">
                      <div className="card-body">
                        <div className="d-flex align-items-center mb-3">
                          <div className="bg-secondary text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: "40px", height: "40px", flexShrink: 0 }}>
                            <strong>6</strong>
                          </div>
                          <h3 className="h5 fw-semibold mb-0">Acesso 24/7</h3>
                        </div>
                        <p className="mb-0">
                          Diferente do mercado tradicional que funciona em horários limitados, plataformas de tokens podem operar 24 horas por dia, 7 dias por semana, permitindo que você invista quando for mais conveniente para você.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-5">
                <h2 className="h3 fw-semibold mb-3">Como Funciona a Tecnologia por Trás dos Tokens?</h2>
                <p className="mb-4">
                  Embora não seja necessário entender toda a tecnologia para investir, é importante saber o básico:
                </p>

                <div className="card bg-light border-0 mb-4">
                  <div className="card-body">
                    <h3 className="h5 fw-semibold mb-3">Blockchain: O Livro de Registros Digital</h3>
                    <p className="mb-3">
                      <strong>Blockchain</strong> (cadeia de blocos) é a tecnologia que garante a segurança e transparência dos tokens.
                      Imagine um grande livro de registros onde:
                    </p>
                    <ul className="mb-3">
                      <li className="mb-2">Cada página (bloco) contém várias transações</li>
                      <li className="mb-2">Cada página está conectada à anterior, formando uma corrente</li>
                      <li className="mb-2">Uma vez escrito, nada pode ser apagado ou alterado</li>
                      <li className="mb-2">Todos podem ver o que está escrito (transparência)</li>
                      <li className="mb-2">Mas apenas o dono tem a chave para movimentar seus tokens (segurança)</li>
                    </ul>
                    <p className="mb-0">
                      Essa tecnologia elimina a necessidade de confiar em um único intermediário, pois o próprio sistema garante a
                      segurança.
                    </p>
                  </div>
                </div>

                <div className="card bg-light border-0 mb-0">
                  <div className="card-body">
                    <h3 className="h5 fw-semibold mb-3">Smart Contracts: Contratos Inteligentes</h3>
                    <p className="mb-3">
                      <strong>Smart Contracts</strong> são programas de computador que executam automaticamente os termos de um
                      contrato quando certas condições são atendidas.
                    </p>
                    <p className="mb-2">
                      <strong>Exemplo prático:</strong>
                    </p>
                    <p className="mb-3">
                      Imagine que você comprou tokens de um imóvel que gera aluguel. O smart contract pode ser programado para
                      distribuir automaticamente sua parte do aluguel todo mês, sem precisar de intermediários ou burocracias.
                    </p>
                    <p className="mb-0">
                      <strong>SE</strong> o aluguel for pago <strong>ENTÃO</strong> distribua automaticamente X% para cada dono de
                      token.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-5">
                <h2 className="h3 fw-semibold mb-3">Tokens na TokenOne: Como Funciona?</h2>
                <p className="mb-4">
                  Na TokenOne, facilitamos todo o processo para que você possa investir em tokens de forma simples e segura:
                </p>

                <div className="row g-4 mb-0">
                  <div className="col-12">
                    <div className="card border-primary">
                      <div className="card-body">
                        <h3 className="h6 fw-semibold mb-3">1. Cadastro e Verificação</h3>
                        <p className="mb-0">
                          Crie sua conta e passe por um processo de verificação de identidade (KYC) para garantir a segurança de
                          todos.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="card border-success">
                      <div className="card-body">
                        <h3 className="h6 fw-semibold mb-3">2. Escolha Seus Investimentos</h3>
                        <p className="mb-0">
                          Navegue pelas oportunidades disponíveis (pools de recebíveis, imóveis, etc.) e escolha aquelas que fazem mais
                          sentido para seu perfil e objetivos.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="card border-info">
                      <div className="card-body">
                        <h3 className="h6 fw-semibold mb-3">3. Invista</h3>
                        <p className="mb-0">
                          Defina quanto quer investir e adquira seus tokens. Você receberá os tokens em sua carteira digital (wallet).
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="card border-warning">
                      <div className="card-body">
                        <h3 className="h6 fw-semibold mb-3">4. Acompanhe e Receba Retornos</h3>
                        <p className="mb-0">
                          Monitore seus investimentos pela plataforma e receba seus retornos automaticamente conforme os termos de cada
                          investimento.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-5">
                <h2 className="h3 fw-semibold mb-3">É Seguro Investir em Tokens?</h2>
                <div className="alert alert-warning border-warning mb-4" role="alert">
                  <h3 className="h6 fw-semibold mb-2">Importante Saber:</h3>
                  <p className="mb-0">
                    Como qualquer investimento, tokens envolvem riscos. É fundamental entender esses riscos antes de investir.
                  </p>
                </div>

                <h3 className="h5 fw-semibold mt-4 mb-3">Aspectos de Segurança:</h3>
                <div className="row g-3 mb-4">
                  <div className="col-12 col-md-6">
                    <div className="d-flex align-items-start">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="me-3 text-success flex-shrink-0 mt-1"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <div>
                        <strong>Tecnologia Segura:</strong> Blockchain é praticamente impossível de hackear ou fraudar
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="d-flex align-items-start">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="me-3 text-success flex-shrink-0 mt-1"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <div>
                        <strong>Regulamentação:</strong> A TokenOne é autorizada pela CVM (Resolução CVM 88/2022)
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="d-flex align-items-start">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="me-3 text-success flex-shrink-0 mt-1"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <div>
                        <strong>Transparência:</strong> Todas as transações são registradas e auditáveis
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="d-flex align-items-start">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="me-3 text-success flex-shrink-0 mt-1"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <div>
                        <strong>Due Diligence:</strong> Análise criteriosa de cada ativo antes da tokenização
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="h5 fw-semibold mt-4 mb-3">Principais Riscos:</h3>
                <ul className="mb-0">
                  <li className="mb-2">
                    <strong>Risco de crédito:</strong> Em investimentos de recebíveis, há o risco de inadimplência dos devedores
                  </li>
                  <li className="mb-2">
                    <strong>Risco de liquidez:</strong> Nem sempre será fácil vender seus tokens rapidamente
                  </li>
                  <li className="mb-2">
                    <strong>Risco de mercado:</strong> O valor dos ativos pode variar para cima ou para baixo
                  </li>
                  <li className="mb-2">
                    <strong>Risco regulatório:</strong> Mudanças nas leis podem afetar o mercado de tokens
                  </li>
                </ul>
              </section>

              <section className="mb-5">
                <h2 className="h3 fw-semibold mb-3">O Mercado de Tokenização no Brasil</h2>
                <div className="row g-4 mb-0">
                  <div className="col-12 col-md-4">
                    <div className="card text-center h-100 bg-primary text-white border-0">
                      <div className="card-body">
                        <div className="display-4 fw-bold mb-2">+R$ 700bi</div>
                        <p className="mb-0">Movimentados em ativos digitais no Brasil (2021-2022)</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-4">
                    <div className="card text-center h-100 bg-success text-white border-0">
                      <div className="card-body">
                        <div className="display-4 fw-bold mb-2">#1</div>
                        <p className="mb-0">Brasil é líder na América Latina em adoção de tokenização</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-4">
                    <div className="card text-center h-100 bg-info text-white border-0">
                      <div className="card-body">
                        <div className="display-4 fw-bold mb-2">Crescendo</div>
                        <p className="mb-0">Mercado em rápida expansão com novas oportunidades</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-5">
                <h2 className="h3 fw-semibold mb-4 text-center text-uppercase">Perguntas Frequentes</h2>
                <div className="row g-4">
                  {faqItems.map((item) => (
                    <div key={item.id} className="col-12">
                      <div className="card border-0 shadow-sm">
                        <div className="card-body p-4">
                          <h3 className="h5 fw-semibold mb-3">{item.question}</h3>
                          <p className="mb-0 text-muted">{item.answer}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mb-5">
                <div className="alert alert-success border-success" role="alert">
                  <h2 className="h4 fw-semibold mb-3">Pronto para Começar?</h2>
                  <p className="mb-3">
                    Agora que você entende o que são tokens e como eles funcionam, está pronto para explorar as oportunidades de
                    investimento na TokenOne!
                  </p>
                  <p className="mb-3">
                    <strong>Próximos passos:</strong>
                  </p>
                  <ol className="mb-4">
                    <li className="mb-2">Crie sua conta na plataforma TokenOne</li>
                    <li className="mb-2">Complete o processo de verificação (KYC)</li>
                    <li className="mb-2">Explore as oportunidades disponíveis</li>
                    <li className="mb-2">Leia atentamente os documentos de cada oferta</li>
                    <li className="mb-2">Comece investindo valores que você pode perder sem comprometer seu orçamento</li>
                    <li className="mb-2">Diversifique seus investimentos</li>
                  </ol>
                  <div className="d-flex gap-3 flex-wrap">
                    <a
                      href="https://app.tokenone.com.br/authentication?organizationId=5rSaRhby9TbL7nmJa6rp"
                      className="btn btn-success"
                    >
                      Ver Oportunidades Disponíveis
                    </a>
                    <a href="/material-didatico" className="btn btn-outline-success">
                      Material Didático Completo
                    </a>
                  </div>
                </div>
              </section>

              <section className="mb-5">
                <h2 className="h3 fw-semibold mb-3">Ainda tem dúvidas?</h2>
                <p className="mb-3">
                  Estamos aqui para ajudar! Entre em contato conosco através de nossos canais de atendimento:
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
