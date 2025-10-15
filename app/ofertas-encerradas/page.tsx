export const metadata = {
  title: "Ofertas Encerradas | TokenOne",
  description:
    "Esta página reúne informações sobre as ofertas encerradas na plataforma, conforme a Resolução CVM 88.",
};

export default function OfertasEncerradasPage() {
  return (
    <main className="py-5 py-lg-6">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <article className="legal-document">
              <header className="mb-5">
                <h1 className="display-5 fw-bold mb-4">Oportunidades Encerradas</h1>
                <p className="lead text-secondary">
                  Esta página reúne informações sobre as ofertas encerradas na plataforma, conforme a Resolução CVM 88.
                </p>
              </header>

              <section className="mb-5">
                <div className="table-responsive">
                  <table className="table table-bordered table-hover align-middle">
                    <thead className="table-light">
                      <tr>
                        <th scope="col" className="text-center" style={{ width: "5%" }}>
                          N
                        </th>
                        <th scope="col" style={{ width: "25%" }}>
                          Sociedade Empresária de Pequeno Porte
                        </th>
                        <th scope="col" style={{ width: "25%" }}>
                          Oportunidade Finalizada
                        </th>
                        <th scope="col" style={{ width: "15%" }}>
                          CNPJ
                        </th>
                        <th scope="col" style={{ width: "15%" }}>
                          Data de encerramento da oferta
                        </th>
                        <th scope="col" className="text-end" style={{ width: "15%" }}>
                          Valor captado
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td colSpan={6} className="text-center text-secondary py-5">
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
                              className="mb-3 text-muted"
                            >
                              <path d="M9 11l3 3L22 4" />
                              <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
                            </svg>
                            <p className="mb-0 fw-semibold">Nenhuma oferta encerrada no momento</p>
                            <p className="small mb-0 mt-2">Os dados serão atualizados automaticamente</p>
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
                      <tr className="d-none">
                        <td className="text-center"></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td className="text-end"></td>
                      </tr>
                    </tbody>
                    <tfoot className="table-light">
                      <tr>
                        <td colSpan={5} className="text-end fw-semibold">
                          Valor Total Captado na Plataforma
                        </td>
                        <td className="text-end fw-bold">R$ 0,00</td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </section>

              <section className="mb-5">
                <div className="alert alert-info border-info" role="alert">
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
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="16" x2="12" y2="12" />
                      <line x1="12" y1="8" x2="12.01" y2="8" />
                    </svg>
                    Informação
                  </h4>
                  <p className="mb-0">
                    Esta página será atualizada automaticamente conforme as ofertas forem sendo encerradas na plataforma. Todas as
                    informações seguem as diretrizes da Resolução CVM 88/2022.
                  </p>
                </div>
              </section>

              <section className="mb-5">
                <h2 className="h4 fw-semibold mb-3">Sobre as Ofertas Encerradas</h2>
                <p className="mb-3">
                  De acordo com a Resolução CVM 88/2022, a plataforma TokenOne deve manter registro público de todas as ofertas
                  encerradas, incluindo:
                </p>
                <ul className="mb-3">
                  <li className="mb-2">Identificação da sociedade empresária de pequeno porte emissora</li>
                  <li className="mb-2">Nome da oportunidade de investimento</li>
                  <li className="mb-2">CNPJ da empresa emissora</li>
                  <li className="mb-2">Data de encerramento da oferta</li>
                  <li className="mb-2">Valor total captado na oferta</li>
                </ul>
                <p className="mb-0">
                  Estas informações são mantidas para garantir transparência e permitir que investidores acompanhem o histórico de
                  captações realizadas através da plataforma.
                </p>
              </section>

              <section className="mb-5">
                <h2 className="h4 fw-semibold mb-3">Conformidade Regulatória</h2>
                <div className="alert alert-warning border-warning" role="alert">
                  <p className="mb-2">
                    <strong>Resolução CVM 88/2022 - Artigo 13, § 2º:</strong>
                  </p>
                  <p className="mb-0">
                    A plataforma eletrônica deve manter em seu sítio na rede mundial de computadores, pelo prazo mínimo de 5 (cinco)
                    anos, as informações relativas às ofertas encerradas, incluindo a identificação da sociedade empresária de pequeno
                    porte, o valor captado e a data de encerramento da oferta.
                  </p>
                </div>
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
