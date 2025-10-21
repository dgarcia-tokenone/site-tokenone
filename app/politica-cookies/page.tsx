'use client';

import { useCookieConsent } from '@/hooks/useCookieConsent';

export default function PoliticaCookiesPage() {
  const { consent, revoke, acceptAll } = useCookieConsent();

  return (
    <main className="py-5 py-lg-6">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 col-xl-9">
            <article className="legal-document">
              <header className="mb-5">
                <h1 className="display-5 fw-bold mb-4">Política de Cookies</h1>
                <p className="lead text-secondary">
                  Informações sobre como a TokenOne utiliza cookies e tecnologias similares
                </p>
                <div className="text-secondary mb-3">
                  <p className="mb-1">
                    <strong>Última atualização:</strong> 15 de outubro de 2025
                  </p>
                  <p className="mb-0">
                    <strong>Versão:</strong> 1.0
                  </p>
                </div>
              </header>

              {/* Status do Consentimento */}
              {consent && (
                <section className="mb-5">
                  <div className="alert alert-info border-info">
                    <h2 className="h6 fw-semibold mb-3">
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
                      Suas Preferências Atuais
                    </h2>
                    <div className="row g-2 mb-3">
                      <div className="col-6 col-md-3">
                        <div className="d-flex align-items-center gap-2">
                          <span className={`badge ${consent.necessary ? 'bg-success' : 'bg-secondary'}`}>
                            {consent.necessary ? '✓' : '✗'}
                          </span>
                          <span className="small">Necessários</span>
                        </div>
                      </div>
                      <div className="col-6 col-md-3">
                        <div className="d-flex align-items-center gap-2">
                          <span className={`badge ${consent.preferences ? 'bg-success' : 'bg-secondary'}`}>
                            {consent.preferences ? '✓' : '✗'}
                          </span>
                          <span className="small">Preferências</span>
                        </div>
                      </div>
                      <div className="col-6 col-md-3">
                        <div className="d-flex align-items-center gap-2">
                          <span className={`badge ${consent.analytics ? 'bg-success' : 'bg-secondary'}`}>
                            {consent.analytics ? '✓' : '✗'}
                          </span>
                          <span className="small">Análise</span>
                        </div>
                      </div>
                      <div className="col-6 col-md-3">
                        <div className="d-flex align-items-center gap-2">
                          <span className={`badge ${consent.marketing ? 'bg-success' : 'bg-secondary'}`}>
                            {consent.marketing ? '✓' : '✗'}
                          </span>
                          <span className="small">Marketing</span>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex gap-2">
                      <button type="button" className="btn btn-sm btn-outline-primary" onClick={revoke}>
                        Alterar Preferências
                      </button>
                      {(!consent.analytics || !consent.marketing) && (
                        <button type="button" className="btn btn-sm btn-primary" onClick={acceptAll}>
                          Aceitar Todos
                        </button>
                      )}
                    </div>
                  </div>
                </section>
              )}

              <section className="mb-5">
                <h2 className="h3 fw-semibold mb-3">1. O que são Cookies?</h2>
                <p className="mb-4">
                  Cookies são pequenos arquivos de texto armazenados no seu navegador quando você visita um site. Eles são
                  amplamente utilizados para fazer com que os sites funcionem de forma mais eficiente e fornecer informações
                  aos proprietários do site.
                </p>
                <p className="mb-0">
                  Os cookies permitem que reconheçamos você, personalizemos sua experiência e analisemos como nosso site é
                  usado. Eles não contêm vírus e não podem executar programas.
                </p>
              </section>

              <section className="mb-5">
                <h2 className="h3 fw-semibold mb-3">2. Por que Usamos Cookies?</h2>
                <p className="mb-3">A TokenOne utiliza cookies para diversos fins:</p>
                <ul className="mb-0">
                  <li className="mb-2">
                    <strong>Funcionalidade:</strong> Garantir que o site funcione corretamente e com segurança
                  </li>
                  <li className="mb-2">
                    <strong>Experiência do usuário:</strong> Lembrar suas preferências e configurações
                  </li>
                  <li className="mb-2">
                    <strong>Análise:</strong> Entender como os visitantes usam nosso site para melhorar a experiência
                  </li>
                  <li className="mb-2">
                    <strong>Marketing:</strong> Personalizar conteúdo e medir a eficácia de campanhas publicitárias
                  </li>
                </ul>
              </section>

              <section className="mb-5">
                <h2 className="h3 fw-semibold mb-3">3. Tipos de Cookies que Utilizamos</h2>

                <div className="mb-4">
                  <h3 className="h5 fw-semibold mb-3">3.1. Cookies Necessários (Obrigatórios)</h3>
                  <p className="mb-3">
                    Esses cookies são essenciais para o funcionamento do site e não podem ser desativados. Eles geralmente
                    são definidos apenas em resposta a ações feitas por você, como configurar suas preferências de
                    privacidade, fazer login ou preencher formulários.
                  </p>
                  <div className="table-responsive">
                    <table className="table table-bordered">
                      <thead className="table-light">
                        <tr>
                          <th style={{ width: '30%' }}>Nome</th>
                          <th style={{ width: '50%' }}>Propósito</th>
                          <th style={{ width: '20%' }}>Duração</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><code>tokenone_cookie_consent</code></td>
                          <td>Armazena suas preferências de cookies</td>
                          <td>12 meses</td>
                        </tr>
                        <tr>
                          <td><code>NEXT_LOCALE</code></td>
                          <td>Armazena preferência de idioma</td>
                          <td>Sessão</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="mb-4">
                  <h3 className="h5 fw-semibold mb-3">3.2. Cookies de Preferências</h3>
                  <p className="mb-0">
                    Permitem que o site lembre informações que mudam a forma como o site se comporta ou aparece, como seu
                    idioma preferido ou a região em que você está.
                  </p>
                </div>

                <div className="mb-4">
                  <h3 className="h5 fw-semibold mb-3">3.3. Cookies de Análise</h3>
                  <p className="mb-3">
                    Coletam informações sobre como você usa nosso site para nos ajudar a entender melhor como melhorar a
                    experiência do usuário. Todas as informações coletadas por esses cookies são agregadas e, portanto,
                    anônimas.
                  </p>
                  <div className="table-responsive">
                    <table className="table table-bordered">
                      <thead className="table-light">
                        <tr>
                          <th style={{ width: '20%', paddingRight: '1.5rem' }}>Serviço</th>
                          <th style={{ width: '45%', paddingRight: '2rem' }}>Propósito</th>
                          <th style={{ width: '35%' }}>Mais Informações</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td style={{ paddingRight: '1.5rem' }}>Google Analytics</td>
                          <td style={{ paddingRight: '2rem' }}>Análise de tráfego e comportamento do usuário</td>
                          <td>
                            <a
                              href="https://policies.google.com/privacy"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-decoration-none"
                            >
                              Política de Privacidade
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="mb-0">
                  <h3 className="h5 fw-semibold mb-3">3.4. Cookies de Marketing</h3>
                  <p className="mb-0">
                    Podem ser usados para construir um perfil de seus interesses e mostrar anúncios relevantes em outros
                    sites. Eles não armazenam informações pessoais diretamente, mas são baseados na identificação exclusiva
                    do seu navegador e dispositivo.
                  </p>
                </div>
              </section>

              <section className="mb-5">
                <h2 className="h3 fw-semibold mb-3">4. Cookies de Terceiros</h2>
                <p className="mb-3">
                  Além dos nossos próprios cookies, também podemos usar cookies de terceiros confiáveis para os seguintes
                  propósitos:
                </p>
                <ul className="mb-0">
                  <li className="mb-2">
                    <strong>Google Analytics:</strong> Para análise de tráfego e comportamento do usuário
                  </li>
                  <li className="mb-2">
                    <strong>Vercel Analytics:</strong> Para monitoramento de performance do site
                  </li>
                  <li className="mb-2">
                    <strong>YouTube:</strong> Para incorporação de vídeos (se aplicável)
                  </li>
                </ul>
              </section>

              <section className="mb-5">
                <h2 className="h3 fw-semibold mb-3">5. Como Gerenciar Cookies</h2>
                <p className="mb-3">Você pode gerenciar suas preferências de cookies de várias maneiras:</p>

                <h3 className="h5 fw-semibold mt-4 mb-3">5.1. Através do Nosso Banner</h3>
                <p className="mb-4">
                  Você pode aceitar ou recusar cookies não essenciais através do nosso banner de consentimento que aparece
                  quando você visita o site pela primeira vez. Você também pode alterar suas preferências a qualquer momento
                  clicando no botão acima.
                </p>

                <h3 className="h5 fw-semibold mt-4 mb-3">5.2. Através do Seu Navegador</h3>
                <p className="mb-3">
                  A maioria dos navegadores permite que você controle cookies através das configurações. Para saber mais
                  sobre como gerenciar cookies, consulte a ajuda do seu navegador:
                </p>
                <ul className="mb-0">
                  <li className="mb-2">
                    <a
                      href="https://support.google.com/chrome/answer/95647"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-none"
                    >
                      Google Chrome
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      href="https://support.mozilla.org/pt-BR/kb/gerencie-configuracoes-de-armazenamento-local-de-s"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-none"
                    >
                      Mozilla Firefox
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      href="https://support.apple.com/pt-br/guide/safari/sfri11471/mac"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-none"
                    >
                      Safari
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      href="https://support.microsoft.com/pt-br/microsoft-edge/excluir-cookies-no-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-none"
                    >
                      Microsoft Edge
                    </a>
                  </li>
                </ul>
              </section>

              <section className="mb-5">
                <h2 className="h3 fw-semibold mb-3">6. Conformidade com a LGPD</h2>
                <p className="mb-3">
                  A TokenOne está comprometida com a proteção de seus dados pessoais e com o cumprimento da Lei Geral de
                  Proteção de Dados (LGPD - Lei nº 13.709/2018).
                </p>
                <p className="mb-4">
                  Ao usar cookies, processamos dados pessoais apenas com base em seu consentimento explícito ou quando
                  necessário para o funcionamento legítimo do nosso site. Você tem o direito de retirar seu consentimento a
                  qualquer momento.
                </p>
                <p className="mb-0">
                  Para mais informações sobre como tratamos seus dados pessoais, consulte nossa{' '}
                  <a href="/privacidade" className="text-decoration-none fw-semibold">
                    Política de Privacidade
                  </a>
                  .
                </p>
              </section>

              <section className="mb-5">
                <h2 className="h3 fw-semibold mb-3">7. Alterações nesta Política</h2>
                <p className="mb-0">
                  Podemos atualizar esta Política de Cookies periodicamente para refletir mudanças em nossas práticas ou por
                  outros motivos operacionais, legais ou regulatórios. Recomendamos que você revise esta política
                  regularmente para se manter informado sobre como usamos cookies.
                </p>
              </section>

              <section className="mb-5">
                <h2 className="h3 fw-semibold mb-3">8. Contato</h2>
                <p className="mb-3">
                  Se você tiver dúvidas sobre nossa Política de Cookies ou sobre como usamos cookies, entre em contato
                  conosco:
                </p>
                <div className="card border">
                  <div className="card-body">
                    <p className="mb-2">
                      <strong>TokenOne LTDA</strong>
                    </p>
                    <p className="mb-2">CNPJ: 37.728.588/0001-04</p>
                    <p className="mb-2">
                      Email:{' '}
                      <a href="mailto:contato@tokenone.com.br" className="text-decoration-none">
                        contato@tokenone.com.br
                      </a>
                    </p>
                    <p className="mb-0">
                      Canal LGPD:{' '}
                      <a href="/contato?canal=Canal LGPD" className="text-decoration-none">
                        Formulário de Contato
                      </a>
                    </p>
                  </div>
                </div>
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
                  <br />
                  Última atualização: 15 de outubro de 2025
                </p>
              </footer>
            </article>
          </div>
        </div>
      </div>
    </main>
  );
}
