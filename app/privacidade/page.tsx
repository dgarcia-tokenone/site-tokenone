export const metadata = {
  title: "Política de Privacidade (LGPD) | TokenOne",
  description: "Política de Privacidade e Aviso de Privacidade da TokenOne em conformidade com a Lei Geral de Proteção de Dados (LGPD).",
};

export default function PrivacidadePage() {
  return (
    <main className="py-5 py-lg-6">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 col-xl-9">
            <article className="legal-document">
              <header className="mb-5">
                <h1 className="display-5 fw-bold mb-4">Política de Privacidade (LGPD)</h1>
                <p className="lead text-secondary">Aviso de Privacidade - TokenOne</p>
              </header>

              <section className="mb-5">
                <p className="mb-3">
                  A TokenOne está comprometida com a proteção da privacidade e dos dados pessoais de seus usuários, em conformidade com a
                  Lei Geral de Proteção de Dados Pessoais (LGPD - Lei nº 13.709/2018).
                </p>
                <p className="mb-0">
                  Este Aviso de Privacidade descreve como a TokenOne coleta, utiliza, armazena, compartilha e protege suas informações
                  pessoais. Ao utilizar nossa plataforma, você concorda com as práticas descritas neste documento.
                </p>
              </section>

              <section className="mb-5 p-4 bg-light rounded-3 border">
                <h2 className="h5 fw-semibold mb-3">Documento Completo</h2>
                <p className="mb-3">
                  Para acessar o documento completo da nossa Política de Privacidade e Aviso de Privacidade em conformidade com a LGPD,
                  clique no botão abaixo:
                </p>
                <a
                  href="/docs/Aviso-de-Privacidade-TokenOne.pdf"
                  className="btn btn-primary"
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    width="16"
                    height="16"
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
                  Baixar Aviso de Privacidade (PDF)
                </a>
              </section>

              <section className="mb-5">
                <h2 className="h3 fw-semibold mb-3">1. Informações que Coletamos</h2>
                <p className="mb-3">Coletamos informações pessoais necessárias para prestar nossos serviços, incluindo mas não se limitando a:</p>
                <ul>
                  <li className="mb-2">Dados de identificação (nome, CPF/CNPJ, RG, data de nascimento)</li>
                  <li className="mb-2">Dados de contato (e-mail, telefone, endereço)</li>
                  <li className="mb-2">Dados financeiros e bancários</li>
                  <li className="mb-2">Dados de navegação e uso da plataforma</li>
                  <li className="mb-2">Documentos necessários para processos de KYC (Know Your Customer)</li>
                </ul>
              </section>

              <section className="mb-5">
                <h2 className="h3 fw-semibold mb-3">2. Finalidade do Tratamento</h2>
                <p className="mb-3">Utilizamos seus dados pessoais para:</p>
                <ul>
                  <li className="mb-2">Prestação de serviços da plataforma</li>
                  <li className="mb-2">Cumprimento de obrigações legais e regulatórias</li>
                  <li className="mb-2">Processos de verificação de identidade (KYC) e prevenção à lavagem de dinheiro (PLD)</li>
                  <li className="mb-2">Comunicação sobre ofertas, atualizações e mudanças em nossos serviços</li>
                  <li className="mb-2">Análise e melhoria de nossos serviços</li>
                  <li className="mb-2">Proteção contra fraudes e atividades ilícitas</li>
                </ul>
              </section>

              <section className="mb-5">
                <h2 className="h3 fw-semibold mb-3">3. Compartilhamento de Dados</h2>
                <p className="mb-3">Seus dados podem ser compartilhados com:</p>
                <ul>
                  <li className="mb-2">Autoridades regulatórias e governamentais, quando exigido por lei</li>
                  <li className="mb-2">Parceiros de negócios necessários para a prestação dos serviços</li>
                  <li className="mb-2">Provedores de serviços de infraestrutura tecnológica</li>
                  <li className="mb-2">Instituições financeiras para processamento de transações</li>
                </ul>
                <p className="mb-0">Todos os compartilhamentos são realizados com as devidas proteções contratuais e técnicas.</p>
              </section>

              <section className="mb-5">
                <h2 className="h3 fw-semibold mb-3">4. Segurança dos Dados</h2>
                <p className="mb-3">A TokenOne implementa medidas técnicas e organizacionais para proteger seus dados pessoais, incluindo:</p>
                <ul>
                  <li className="mb-2">Criptografia de dados em trânsito e em repouso</li>
                  <li className="mb-2">Controles de acesso rigorosos</li>
                  <li className="mb-2">Monitoramento contínuo de segurança</li>
                  <li className="mb-2">Infraestrutura em nuvem com certificações de segurança (AWS/GCP)</li>
                  <li className="mb-2">Multi-Party Computation (MPC) para gestão de chaves</li>
                </ul>
              </section>

              <section className="mb-5">
                <h2 className="h3 fw-semibold mb-3">5. Seus Direitos</h2>
                <p className="mb-3">Conforme a LGPD, você tem direito a:</p>
                <ul>
                  <li className="mb-2">Confirmação da existência de tratamento de seus dados</li>
                  <li className="mb-2">Acesso aos seus dados pessoais</li>
                  <li className="mb-2">Correção de dados incompletos, inexatos ou desatualizados</li>
                  <li className="mb-2">Anonimização, bloqueio ou eliminação de dados desnecessários</li>
                  <li className="mb-2">Portabilidade dos dados</li>
                  <li className="mb-2">Informação sobre compartilhamento de dados</li>
                  <li className="mb-2">Revogação do consentimento</li>
                </ul>
              </section>

              <section className="mb-5">
                <h2 className="h3 fw-semibold mb-3">6. Retenção de Dados</h2>
                <p className="mb-0">
                  Mantemos seus dados pessoais pelo tempo necessário para cumprir as finalidades descritas neste aviso, incluindo
                  obrigações legais, contratuais e regulatórias.
                </p>
              </section>

              <section className="mb-5">
                <h2 className="h3 fw-semibold mb-3">7. Alterações Neste Aviso</h2>
                <p className="mb-0">
                  Podemos atualizar este Aviso de Privacidade periodicamente. Notificaremos você sobre alterações significativas através da
                  plataforma ou por e-mail.
                </p>
              </section>

              <section className="mb-5">
                <h2 className="h3 fw-semibold mb-3">Entre em Contato</h2>
                <p className="mb-3">
                  Para exercer seus direitos ou esclarecer dúvidas sobre o tratamento de seus dados pessoais, entre em contato conosco:
                </p>
                <p className="mb-2">
                  <strong>E-mail:</strong>{" "}
                  <a href="mailto:contato@tokenone.com.br" className="text-decoration-none">
                    contato@tokenone.com.br
                  </a>
                </p>
                <p className="mb-0">
                  <strong>Canal LGPD:</strong> Disponível no rodapé da plataforma
                </p>
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
