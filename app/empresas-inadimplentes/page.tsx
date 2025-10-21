export const metadata = {
  title: "Empresas Inadimplentes | TokenOne",
  description:
    "Lista de sociedades empresárias de pequeno porte que estão inadimplentes em relação ao cumprimento das obrigações de prestação de informações periódicas assumidas no âmbito da Resolução CVM 88.",
};

export default function EmpresasInadimplentesPage() {
  return (
    <main className="py-5 py-lg-6">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <article className="legal-document">
              <header className="mb-5 text-center">
                <h1 className="display-5 fw-bold mb-4">Empresas Inadimplentes</h1>
                <p className="lead text-secondary mb-3">Instrução CVM 88, de 27 de abril de 2022, Art. 32</p>
                <p className="text-secondary">
                  Lista de sociedades empresárias de pequeno porte que estão inadimplentes em relação ao cumprimento das obrigações de
                  prestação de informações periódicas assumidas no âmbito da Resolução CVM 88.
                </p>
              </header>

              <section className="mb-5">
                <div className="d-flex justify-content-end mb-3">
                  <small className="text-muted">
                    <em>Atualizado em: --/--/--</em>
                  </small>
                </div>

                <div className="table-responsive">
                  <table className="table table-bordered table-hover align-middle w-100" style={{ border: '1px solid #000', tableLayout: 'fixed' }}>
                    <thead className="table-light">
                      <tr>
                        <th scope="col" className="text-center" style={{ width: "5%", border: '1px solid #000' }}>
                          #
                        </th>
                        <th scope="col" className="text-center" style={{ width: "20%", border: '1px solid #000' }}>
                          PROJETO
                        </th>
                        <th scope="col" className="text-center" style={{ width: "30%", border: '1px solid #000' }}>
                          SOCIEDADE EMPRESARIA DE PEQUENO PORTE
                        </th>
                        <th scope="col" className="text-center" style={{ width: "15%", border: '1px solid #000' }}>
                          CNPJ
                        </th>
                        <th scope="col" className="text-center" style={{ width: "15%", border: '1px solid #000' }}>
                          ENCERRAMENTO
                        </th>
                        <th scope="col" className="text-center" style={{ width: "15%", border: '1px solid #000' }}>
                          VALOR CAPTADO
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td colSpan={6} className="text-center text-secondary py-5" style={{ border: '1px solid #000' }}>
                          <div className="d-flex flex-column align-items-center justify-content-center">
                            <svg
                              width="64"
                              height="64"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="mb-3 text-success"
                            >
                              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                              <polyline points="22 4 12 14.01 9 11.01" />
                            </svg>
                            <p className="mb-0 fw-semibold text-success">Nenhuma empresa inadimplente no momento</p>
                            <p className="small mb-0 mt-2 text-muted">Todas as empresas estão em conformidade com suas obrigações</p>
                          </div>
                        </td>
                      </tr>
                      {/* Linhas vazias para manter a estrutura da tabela conforme o MVP */}
                      <tr className="d-none">
                        <td className="text-center"></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td className="text-end"></td>
                      </tr>
                      <tr className="d-none">
                        <td className="text-center"></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td className="text-end"></td>
                      </tr>
                      <tr className="d-none">
                        <td className="text-center"></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td className="text-end"></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="mb-5">
                <div className="alert alert-warning border-warning" role="alert">
                  <h4 className="alert-heading h6 fw-semibold mb-2">
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
                    Importante
                  </h4>
                  <p className="mb-0">
                    Esta lista é atualizada regularmente e contém informações sobre empresas que não cumpriram com as obrigações de
                    prestação de informações periódicas conforme estabelecido pela Resolução CVM 88/2022.
                  </p>
                </div>
              </section>

              <section className="mb-5">
                <h2 className="h4 fw-semibold mb-3">Sobre a Inadimplência de Informações</h2>
                <p className="mb-3">
                  De acordo com o Artigo 32 da Instrução CVM 88/2022, as sociedades empresárias de pequeno porte que captaram recursos
                  através de plataformas eletrônicas de investimento participativo têm a obrigação de prestar informações periódicas aos
                  investidores e à CVM.
                </p>

                <h3 className="h5 fw-semibold mt-4 mb-3">Obrigações das Empresas</h3>
                <p className="mb-3">As sociedades empresárias devem fornecer:</p>
                <ul className="mb-3">
                  <li className="mb-2">Demonstrações financeiras anuais</li>
                  <li className="mb-2">Informações sobre fatos relevantes</li>
                  <li className="mb-2">Relatórios de desempenho</li>
                  <li className="mb-2">Atualização cadastral</li>
                  <li className="mb-2">Outras informações relevantes aos investidores</li>
                </ul>

                <h3 className="h5 fw-semibold mt-4 mb-3">Consequências da Inadimplência</h3>
                <p className="mb-3">
                  As empresas inadimplentes podem estar sujeitas a penalidades regulatórias e ficam impedidas de realizar novas ofertas
                  públicas através de plataformas de investimento participativo até regularizarem sua situação.
                </p>
              </section>

              <section className="mb-5">
                <h2 className="h4 fw-semibold mb-3">Conformidade Regulatória</h2>
                <div className="row g-4">
                  <div className="col-12 col-md-6">
                    <div className="card h-100 border-primary">
                      <div className="card-body">
                        <h3 className="h6 fw-semibold text-primary mb-3">
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
                          Base Legal
                        </h3>
                        <p className="small mb-0">
                          Resolução CVM 88, de 27 de abril de 2022, Artigo 32 - Estabelece as obrigações de prestação de informações
                          periódicas pelas sociedades empresárias de pequeno porte.
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
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                          </svg>
                          Transparência
                        </h3>
                        <p className="small mb-0">
                          A plataforma TokenOne mantém esta lista atualizada para garantir transparência aos investidores e conformidade
                          com as normas da CVM.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-5">
                <h2 className="h4 fw-semibold mb-3">Para Investidores</h2>
                <div className="alert alert-info border-info" role="alert">
                  <p className="mb-2">
                    <strong>Recomendação:</strong>
                  </p>
                  <p className="mb-0">
                    Antes de investir, verifique sempre se a empresa está em situação regular quanto às suas obrigações de prestação de
                    informações. Empresas inadimplentes podem representar maior risco ao investimento.
                  </p>
                </div>
              </section>

              <section className="mb-5">
                <h2 className="h4 fw-semibold mb-3">Contato</h2>
                <p className="mb-0">
                  Para mais informações sobre empresas inadimplentes ou para esclarecer dúvidas sobre obrigações regulatórias, entre em
                  contato conosco através do e-mail{" "}
                  <a href="mailto:contato@tokenone.com.br" className="text-decoration-none fw-semibold">
                    contato@tokenone.com.br
                  </a>
                  .
                </p>
              </section>

              <footer className="border-top pt-4 mt-5 text-secondary">
                <p className="small mb-0">
                  <strong>TokenOne LTDA</strong>
                  <br />
                  CNPJ: 37.728.588/0001-04
                  <br />
                  São Paulo, SP
                  <br />
                  Plataforma autorizada pela CVM - Resolução CVM 88/2022
                </p>
              </footer>
            </article>
          </div>
        </div>
      </div>
    </main>
  );
}
