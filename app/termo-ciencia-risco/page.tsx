export const metadata = {
  title: "Termo de Ciência e Risco | TokenOne",
  description:
    "Entenda os riscos envolvidos no investimento em valores mobiliários através de crowdfunding. Documento essencial para investidores da TokenOne.",
};

export default function TermoCienciaRiscoPage() {
  return (
    <main className="py-5 py-lg-6">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 col-xl-9">
            <article className="legal-document">
              <header className="mb-5">
                <h1 className="display-5 fw-bold mb-4">TERMO DE CIÊNCIA E RISCO DO INVESTIDOR</h1>
                <p className="lead text-secondary">
                  Documento obrigatório para todos os investidores que desejam investir através da plataforma TokenOne
                </p>
              </header>

              <section className="mb-5">
                <h2 className="h3 fw-semibold mb-3">O que é o Termo de Ciência e Risco?</h2>
                <p className="mb-4">
                  O Termo de Ciência e Risco do Investidor é um documento obrigatório, estabelecido pela Resolução CVM 88/2022,
                  que deve ser assinado por todos os investidores antes de realizar qualquer investimento em ofertas públicas
                  de valores mobiliários dispensadas de registro através de plataformas de crowdfunding.
                </p>
                <p className="mb-4">
                  Este documento tem como objetivo assegurar que o investidor está ciente de todos os riscos envolvidos neste
                  tipo de investimento, incluindo a possibilidade de perda total do capital investido, a falta de liquidez
                  dos ativos e as características específicas das sociedades empresárias de pequeno porte.
                </p>
              </section>

              <section className="mb-5">
                <h2 className="h3 fw-semibold mb-3">Por que este documento é importante?</h2>
                <p className="mb-3">
                  Investir em sociedades empresárias de pequeno porte através de crowdfunding apresenta riscos significativos
                  que diferem de investimentos tradicionais. O Termo de Ciência e Risco garante que você, investidor:
                </p>
                <ul className="mb-4">
                  <li className="mb-2">
                    <strong>Compreenda os riscos:</strong> Está ciente de que pode perder todo o capital investido caso a
                    empresa não tenha sucesso ou enfrente dificuldades financeiras.
                  </li>
                  <li className="mb-2">
                    <strong>Reconheça a baixa liquidez:</strong> Entende que os valores mobiliários adquiridos podem ter
                    dificuldade de venda no mercado secundário, tornando difícil resgatar seu investimento rapidamente.
                  </li>
                  <li className="mb-2">
                    <strong>Aceite a ausência de garantias:</strong> Está ciente de que a CVM não analisa previamente as
                    ofertas e não garante a veracidade das informações prestadas pelas empresas.
                  </li>
                  <li className="mb-2">
                    <strong>Tome decisões conscientes:</strong> Tem acesso a todas as informações necessárias para avaliar
                    se o investimento é adequado ao seu perfil de risco e objetivos financeiros.
                  </li>
                </ul>
              </section>

              <section className="mb-5">
                <h2 className="h3 fw-semibold mb-3">Principais Riscos a serem considerados</h2>

                <div className="row g-4 mb-4">
                  <div className="col-12 col-md-6">
                    <div className="card h-100 border-danger">
                      <div className="card-body">
                        <h3 className="h6 fw-semibold text-danger mb-3">
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
                          Risco de Perda Total
                        </h3>
                        <p className="mb-0">
                          Existe a possibilidade real de perder 100% do valor investido caso a empresa não consiga gerar os
                          resultados esperados ou enfrente inadimplência dos devedores.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-md-6">
                    <div className="card h-100 border-warning">
                      <div className="card-body">
                        <h3 className="h6 fw-semibold text-warning mb-3">
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
                            <line x1="12" y1="8" x2="12" y2="12" />
                            <line x1="12" y1="16" x2="12.01" y2="16" />
                          </svg>
                          Baixa Liquidez
                        </h3>
                        <p className="mb-0">
                          Os valores mobiliários adquiridos não são negociados em mercados organizados, o que pode dificultar
                          ou impossibilitar a venda dos ativos quando você desejar.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-md-6">
                    <div className="card h-100 border-info">
                      <div className="card-body">
                        <h3 className="h6 fw-semibold text-info mb-3">
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
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                            <polyline points="14 2 14 8 20 8" />
                            <line x1="16" y1="13" x2="8" y2="13" />
                            <line x1="16" y1="17" x2="8" y2="17" />
                            <polyline points="10 9 9 9 8 9" />
                          </svg>
                          Ausência de Análise Prévia da CVM
                        </h3>
                        <p className="mb-0">
                          A CVM não analisa previamente as ofertas dispensadas de registro. A responsabilidade pela veracidade
                          das informações é da empresa emissora e da plataforma.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-md-6">
                    <div className="card h-100 border-secondary">
                      <div className="card-body">
                        <h3 className="h6 fw-semibold text-secondary mb-3">
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
                            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                          </svg>
                          Dificuldade de Avaliação
                        </h3>
                        <p className="mb-0">
                          Pode haver dificuldade na avaliação dos ativos pela falta de informação pública e ausência de
                          obrigatoriedade de demonstrações financeiras auditadas.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-5">
                <h2 className="h3 fw-semibold mb-3">Quando devo assinar o Termo?</h2>
                <p className="mb-4">
                  O Termo de Ciência e Risco deve ser assinado <strong>antes de confirmar qualquer investimento</strong>{" "}
                  através da plataforma TokenOne. Sem a assinatura deste documento, não será possível prosseguir com o
                  investimento.
                </p>
                <p className="mb-4">
                  Durante o processo de investimento na plataforma, você será solicitado a ler atentamente e assinar
                  eletronicamente o Termo. Certifique-se de compreender todos os riscos antes de assinar.
                </p>
              </section>

              <section className="mb-5">
                <h2 className="h3 fw-semibold mb-3">Como minimizar os riscos?</h2>
                <div className="alert alert-success border-success" role="alert">
                  <h3 className="h6 fw-semibold mb-3">Recomendações para investidores:</h3>
                  <ul className="mb-0">
                    <li className="mb-2">
                      <strong>Diversifique seus investimentos:</strong> Não coloque todo seu capital em uma única oferta.
                      Distribua seus recursos entre diferentes projetos e setores.
                    </li>
                    <li className="mb-2">
                      <strong>Leia toda a documentação:</strong> Analise cuidadosamente as Informações Essenciais da Oferta,
                      a Lâmina da Operação e os documentos jurídicos antes de investir.
                    </li>
                    <li className="mb-2">
                      <strong>Invista apenas o que pode perder:</strong> Utilize recursos que, se perdidos, não comprometerão
                      sua segurança financeira e qualidade de vida.
                    </li>
                    <li className="mb-2">
                      <strong>Utilize o fórum de dúvidas:</strong> Faça perguntas aos responsáveis pela oferta para esclarecer
                      qualquer ponto que não esteja claro.
                    </li>
                    <li className="mb-2">
                      <strong>Respeite seu perfil de risco:</strong> Invista de acordo com sua tolerância ao risco e objetivos
                      financeiros identificados no questionário de suitability.
                    </li>
                  </ul>
                </div>
              </section>

              <section className="mb-5">
                <h2 className="h3 fw-semibold mb-3">Baixar o Termo Oficial</h2>
                <p className="mb-4">
                  Você pode baixar o Termo de Ciência e Risco do Investidor em formato PDF para leitura prévia. No entanto,
                  lembre-se de que a assinatura eletrônica oficial deve ser realizada através da plataforma TokenOne durante o
                  processo de investimento.
                </p>
                <div className="d-flex gap-3 flex-wrap">
                  <a
                    href="/docs/Termo-de-Ciência-de-Riscos-do-Investidor-Tokenone.pdf"
                    className="btn btn-primary btn-lg px-4"
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                  >
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
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                    Baixar Termo (PDF)
                  </a>
                </div>
              </section>

              <section className="mb-5">
                <div className="alert alert-danger border-danger" role="alert">
                  <h2 className="h5 fw-bold mb-3">AVISO IMPORTANTE DA CVM:</h2>
                  <p className="mb-2">
                    AS SOCIEDADES EMPRESÁRIAS DE PEQUENO PORTE E AS OFERTAS APRESENTADAS NESTA PLATAFORMA ESTÃO AUTOMATICAMENTE
                    DISPENSADAS DE REGISTRO PELA COMISSÃO DE VALORES MOBILIÁRIOS - CVM.
                  </p>
                  <p className="mb-2">
                    <strong>A CVM NÃO ANALISA PREVIAMENTE AS OFERTAS.</strong>
                  </p>
                  <p className="mb-2">
                    AS OFERTAS REALIZADAS NÃO IMPLICAM, POR PARTE DA CVM, A GARANTIA DA VERACIDADE DAS INFORMAÇÕES PRESTADAS, DE
                    ADEQUAÇÃO À LEGISLAÇÃO VIGENTE OU JULGAMENTO SOBRE A QUALIDADE DA SOCIEDADE EMPRESÁRIA DE PEQUENO PORTE.
                  </p>
                  <p className="mb-0">
                    <strong>
                      ANTES DE ACEITAR UMA OFERTA, LEIA COM ATENÇÃO AS INFORMAÇÕES ESSENCIAIS DA OFERTA, EM ESPECIAL A SEÇÃO DE
                      ALERTAS SOBRE RISCOS.
                    </strong>
                  </p>
                </div>
              </section>

              <section className="mb-5">
                <h2 className="h3 fw-semibold mb-3">Dúvidas ou mais informações?</h2>
                <p className="mb-3">
                  Para esclarecer dúvidas sobre o Termo de Ciência e Risco ou sobre o processo de investimento, consulte também:
                </p>
                <ul className="mb-0">
                  <li className="mb-2">
                    <a href="/material-didatico" className="text-decoration-none">
                      Material Didático do Investidor
                    </a>{" "}
                    - Guia completo sobre investimento em crowdfunding
                  </li>
                  <li className="mb-2">
                    <a href="/faq" className="text-decoration-none">
                      Perguntas Frequentes
                    </a>{" "}
                    - Respostas para as dúvidas mais comuns
                  </li>
                  <li className="mb-2">
                    <a href="/contato?canal=Fale conosco" className="text-decoration-none">
                      Fale Conosco
                    </a>{" "}
                    - Entre em contato com nossa equipe
                  </li>
                </ul>
              </section>

              <footer className="border-top pt-4 mt-5 text-secondary">
                <p className="small mb-0">
                  <strong>TokenOne LTDA</strong>
                  <br />
                  CNPJ: 37.728.588/0001-04
                  <br />
                  Rua José Tavares Siqueira, nº 97, Conjunto 43
                  <br />
                  CEP 03085-030, Tatuapé, São Paulo/SP
                </p>
              </footer>
            </article>
          </div>
        </div>
      </div>
    </main>
  );
}
