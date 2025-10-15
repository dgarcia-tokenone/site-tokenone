import Image from "next/image";

export const metadata = {
  title: "Processo de KYC/PLD | TokenOne",
  description:
    "Manual de Processos - KYC/PLD. Detalhamento do Processo de Verificação de Identidade Digital (KYC) e Política de Prevenção à Lavagem de Dinheiro (PLD).",
};

export default function ProcessoKycPldPage() {
  return (
    <main className="py-5 py-lg-6">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 col-xl-9">
            <article className="legal-document">
              <header className="mb-5">
                <h1 className="display-5 fw-bold mb-4">MANUAL DE PROCESSOS - KYC/PLD</h1>
                <p className="lead text-secondary mb-4">
                  Detalhamento do Processo de Verificação de Identidade Digital (KYC) e Política de Prevenção à Lavagem de Dinheiro
                  (PLD)
                </p>
                <div className="text-secondary mb-3">
                  <p className="mb-1">
                    <strong>Referência:</strong> Conformidade com a Instrução CVM nº 88/2022, Circular Bacen nº 3.978/2020,
                    recomendações do GAFI/FATF e demais regulamentos de PLD/KYC.
                  </p>
                  <p className="mb-1">
                    <strong>Data de Elaboração:</strong> 05/09/2025
                  </p>
                  <p className="mb-0">
                    <strong>Versão:</strong> 1.3
                  </p>
                </div>
              </header>

              <section className="mb-5">
                <h2 className="h3 fw-semibold mb-3">1. Introdução</h2>
                <p className="mb-3">
                  A TokenOne adota uma solução tecnológica de ponta para a verificação de identidade de seus clientes e investidores,
                  em linha com as melhores práticas de mercado e os requisitos regulatórios de Know Your Customer (KYC), Know Your
                  Business (KYB), Know Your Transaction (KYT) e Prevenção à Lavagem de Dinheiro (PLD).
                </p>
                <p className="mb-4">
                  Para este fim, nossa plataforma utiliza o serviço de verificação de identidade da Veriff, cuja metodologia de
                  trabalho e componentes técnicos estão detalhados neste documento, conforme a "Technical Overview of Veriff Service".
                </p>

                <div className="mb-4">
                  <figure className="text-center">
                    <Image
                      src="/images/veriff-1.jpg"
                      alt="Processo de verificação Veriff"
                      width={800}
                      height={450}
                      className="img-fluid rounded shadow-sm"
                      style={{ maxWidth: "100%", height: "auto" }}
                    />
                    <figcaption className="text-secondary mt-2 small">Processo de verificação Veriff</figcaption>
                  </figure>
                </div>

                <p className="mb-0">
                  <a
                    href="https://www.veriff.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-primary btn-sm"
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
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                    Visitar site da Veriff
                  </a>
                </p>
              </section>

              <section className="mb-5">
                <h2 className="h3 fw-semibold mb-3">2. Visão Geral do Processo de Verificação de Identidade (KYC)</h2>
                <p className="mb-4">
                  O processo de onboarding é estruturado em uma sessão de verificação única, que combina a captura de dados
                  biométricos e documentos de identificação com uma análise avançada de fraude.
                </p>

                <h3 className="h5 fw-semibold mt-4 mb-3">2.1. Fluxo de Verificação do Usuário Final</h3>
                <ol className="mb-4">
                  <li className="mb-3">
                    <strong>Início da Sessão:</strong> O sistema da TokenOne inicia uma sessão de verificação via API da Veriff,
                    gerando um token de sessão exclusivo.
                  </li>
                  <li className="mb-3">
                    <strong>Preparação e Device Profiling:</strong> O usuário é direcionado ao fluxo (via SDK/Web) e, neste momento, a
                    Veriff inicia a coleta passiva do Device & Network Fingerprinting (impressão digital do dispositivo e da rede) para
                    fins de prevenção de fraude.
                  </li>
                  <li className="mb-3">
                    <strong>Captura de Documentos:</strong> O usuário é guiado para fotografar seu documento de identificação (frente e
                    verso), com auxílio do Assisted Image Capture (AIC), que fornece feedback em tempo real sobre a qualidade da imagem
                    (luminosidade, nitidez, foco).
                  </li>
                  <li className="mb-3">
                    <strong>Captura de Selfie e Prova de Vida (Liveness):</strong> O usuário realiza uma selfie ou gravação de vídeo
                    curta. A Veriff captura, em segundo plano, fotos adicionais para analisar o movimento natural e determinar a
                    vivacidade (liveness) do usuário, mitigando ataques de apresentação (ex: fotos de fotos, máscaras, vídeos
                    pré-gravados).
                  </li>
                  <li className="mb-3">
                    <strong>Submissão:</strong> O conjunto de dados é submetido para análise em tempo real.
                  </li>
                </ol>

                <div className="mb-0">
                  <figure className="text-center">
                    <Image
                      src="/images/veriff-fluxo-simplificado.webp"
                      alt="Fluxo Simplificado do Processo de Verificação"
                      width={800}
                      height={600}
                      className="img-fluid rounded shadow-sm"
                      style={{ maxWidth: "100%", height: "auto" }}
                    />
                    <figcaption className="text-secondary mt-2 small">
                      Fluxo Simplificado do Processo de Verificação
                    </figcaption>
                  </figure>
                </div>
              </section>

              <section className="mb-5">
                <h2 className="h3 fw-semibold mb-3">3. Mecanismos de Análise e Prevenção à Fraude (PLD/KYT)</h2>
                <p className="mb-4">
                  A Veriff emprega um motor de fraude sofisticado para identificar e sinalizar riscos antes de emitir uma decisão
                  final, em conformidade com o dever de diligência (due diligence) da nossa plataforma:
                </p>

                <div className="mb-4">
                  <figure className="text-center">
                    <Image
                      src="/images/veriff-motor-de-fraude.webp"
                      alt="Motor de Fraude Veriff"
                      width={800}
                      height={500}
                      className="img-fluid rounded shadow-sm"
                      style={{ maxWidth: "100%", height: "auto" }}
                    />
                    <figcaption className="text-secondary mt-2 small">Motor de Fraude Veriff</figcaption>
                  </figure>
                </div>

                <h3 className="h5 fw-semibold mt-4 mb-3">3.1. Análise de Dados e Documentos</h3>
                <ul className="mb-4">
                  <li className="mb-2">
                    <strong>Extração de Dados (Data Extractor):</strong> Sistema automático que utiliza OCR (Google OCR), MRZ (Zona de
                    Leitura Ótica) e códigos de barras para extrair dados críticos do documento (nome, data de nascimento, número do
                    documento).
                  </li>
                  <li className="mb-2">
                    <strong>Análise Forense de Imagem:</strong> Verificação de adulteração do documento, verificando elementos de
                    segurança e comparando as faces da selfie e do documento para determinar a similaridade facial.
                  </li>
                </ul>

                <h3 className="h5 fw-semibold mt-4 mb-3">3.2. Sistema de Vínculos Cruzados (Cross-linking) (KYT)</h3>
                <p className="mb-3">
                  O sistema de Cross-linking da Veriff é essencial para a análise comportamental e transacional, funcionando como um
                  mecanismo de Know Your Transaction (KYT) na fase de onboarding.
                </p>
                <ul className="mb-3">
                  <li className="mb-2">
                    <strong>Finalidade:</strong> Identificar e bloquear fraudadores conhecidos ou usuários tentando se passar por
                    terceiros.
                  </li>
                  <li className="mb-2">
                    <strong>Funcionamento:</strong> A sessão atual é comparada com o histórico de sessões em toda a base de clientes da
                    Veriff.
                  </li>
                </ul>
                <p className="mb-2">
                  <strong>Elementos Vinculados (Exemplos):</strong>
                </p>
                <ul className="mb-4">
                  <li className="mb-1">Mesmo dispositivo (device fingerprint).</li>
                  <li className="mb-1">Mesmo endereço IP externo ou rede local.</li>
                  <li className="mb-1">Mesmo documento de identificação.</li>
                  <li className="mb-1">Correspondência ou similaridade facial (face embeddings).</li>
                </ul>

                <h3 className="h5 fw-semibold mt-4 mb-3">3.3. Sinalizadores de Risco (Risk Labels)</h3>
                <p className="mb-3">
                  A Veriff gera Risk Labels que destacam comportamentos e informações que indicam potencial risco de fraude ou uso
                  malicioso, acionando uma revisão manual por especialistas:
                </p>

                <div className="table-responsive mb-0">
                  <table className="table table-bordered table-hover">
                    <thead className="table-light">
                      <tr>
                        <th scope="col">Categoria do Risco</th>
                        <th scope="col">Exemplos de Sinalização de Risco (Relevância PLD/KYC)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <strong>Pessoa</strong>
                        </td>
                        <td>
                          Baixa similaridade facial (face na selfie vs. documento), detecção de fraude ou abuso em sessões anteriores.
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Documento</strong>
                        </td>
                        <td>
                          Adulteração de documento, uso de documento ligado a múltiplos nomes/datas de nascimento.
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Dispositivo & Rede</strong>
                        </td>
                        <td>
                          Uso de Proxy, VPN, ou Tor, timezone do dispositivo e da rede incompatíveis, modo de navegação anônima
                          (incognito), baixa liveness detectada.
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Crosslinks</strong>
                        </td>
                        <td>
                          Sessão vinculada a uma sessão anterior recusada por Fraude Conhecida ou Adulteração de Documento.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="mb-5">
                <h2 className="h3 fw-semibold mb-3">4. Decisão Final e Integração com a PLD</h2>
                <p className="mb-4">
                  O Decision Maker da Veriff aplica os perfis de decisão definidos pela TokenOne para gerar uma das três decisões
                  finais, que são comunicadas via Decision Webhook para o nosso sistema:
                </p>

                <div className="table-responsive mb-5">
                  <table className="table table-bordered table-hover">
                    <thead className="table-light">
                      <tr>
                        <th scope="col">Decisão</th>
                        <th scope="col">Descrição</th>
                        <th scope="col">Ação da TokenOne</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <strong className="text-success">Approved (Aprovado)</strong>
                        </td>
                        <td>Verificação bem-sucedida. Não foram detectados indícios de fraude.</td>
                        <td>Permissão para completar o cadastro e realizar operações.</td>
                      </tr>
                      <tr>
                        <td>
                          <strong className="text-warning">Resubmission (Ressubmissão)</strong>
                        </td>
                        <td>
                          Qualidade de imagem ou dados insuficientes (ex: foto embaçada, documento expirado). Não é uma indicação de
                          fraude.
                        </td>
                        <td>Usuário notificado para refazer a verificação.</td>
                      </tr>
                      <tr>
                        <td>
                          <strong className="text-danger">Declined (Recusado)</strong>
                        </td>
                        <td>
                          Forte suspeita de fraude, adulteração de documento, falha na prova de vida (liveness) ou vinculação com um
                          padrão de fraude conhecido (Cross-linking).
                        </td>
                        <td>
                          Bloqueio imediato do onboarding. Ocorrência é registrada e analisada pelo Setor de Compliance e PLD para
                          possível comunicação às autoridades, conforme o caso.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="h5 fw-semibold mt-4 mb-3">4.1. Resubmission (Ressubmissão)</h3>
                <div className="table-responsive mb-5">
                  <table className="table table-bordered table-sm">
                    <thead className="table-light">
                      <tr>
                        <th scope="col">Nome da Checagem</th>
                        <th scope="col">Descrição da Checagem</th>
                        <th scope="col">Decisão</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Vídeo: Arquivo de mídia existe</td>
                        <td>
                          A máquina verifica a presença do arquivo de vídeo, e o especialista verifica a duração do arquivo de vídeo
                          para determinar se a prevenção de fraude pode ser conduzida com o arquivo fornecido.
                        </td>
                        <td>
                          <span className="badge bg-warning text-dark">Resubmissão</span>
                        </td>
                      </tr>
                      <tr>
                        <td>País e tipo de documento suportados nesta integração</td>
                        <td>
                          Imagens do documento são analisadas por máquina e especialistas para determinar se o documento apresentado é
                          suportado pela integração fornecida.
                        </td>
                        <td>
                          <span className="badge bg-warning text-dark">Resubmissão</span>
                        </td>
                      </tr>
                      <tr>
                        <td>Documento corresponde ao tipo de documento selecionado</td>
                        <td>
                          Imagens do documento são analisadas por máquina e especialistas para determinar se o documento apresentado é
                          suportado pela integração fornecida.
                        </td>
                        <td>
                          <span className="badge bg-warning text-dark">Resubmissão</span>
                        </td>
                      </tr>
                      <tr>
                        <td>Veriff suporta o documento apresentado</td>
                        <td>
                          Imagens do documento são analisadas por máquina e especialistas para determinar se o documento apresentado é
                          suportado pelo Veriff.
                        </td>
                        <td>
                          <span className="badge bg-warning text-dark">Resubmissão</span>
                        </td>
                      </tr>
                      <tr>
                        <td>Imagens de rosto e imagens de documento existem</td>
                        <td>
                          Imagens do documento são analisadas por máquina e especialistas para determinar se as imagens de documento e
                          de rosto necessárias estão presentes.
                        </td>
                        <td>
                          <span className="badge bg-warning text-dark">Resubmissão</span>
                        </td>
                      </tr>
                      <tr>
                        <td>Rosto claramente visível</td>
                        <td>
                          A imagem do rosto é analisada por especialistas para determinar se o rosto apresentado está claramente visível
                          para conduzir a verificação de identidade.
                        </td>
                        <td>
                          <span className="badge bg-warning text-dark">Resubmissão</span>
                        </td>
                      </tr>
                      <tr>
                        <td>Documento não expirado</td>
                        <td>
                          Imagens do documento são analisadas por máquina e especialistas para determinar se o documento apresentado
                          está expirado.
                        </td>
                        <td>
                          <span className="badge bg-warning text-dark">Resubmissão</span>
                        </td>
                      </tr>
                      <tr>
                        <td>Documento não anulado ou danificado</td>
                        <td>
                          Imagens do documento são analisadas por máquina e especialistas para determinar se o documento apresentado
                          está danificado ou anulado.
                        </td>
                        <td>
                          <span className="badge bg-warning text-dark">Resubmissão</span>
                        </td>
                      </tr>
                      <tr>
                        <td>Dados do documento claramente visíveis</td>
                        <td>
                          Imagens do documento são analisadas por especialistas para determinar se o documento apresentado está
                          claramente visível para coletar dados do documento.
                        </td>
                        <td>
                          <span className="badge bg-warning text-dark">Resubmissão</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          Coleta de sobrenome, Coleta de outros nomes, Coleta de data de nascimento, Coleta de data de emissão do
                          documento, Coleta de data de validade, Coleta de número do documento, Coleta de nacionalidade, Coleta de
                          endereço residencial, Coleta de local de nascimento, Coleta de B-category
                        </td>
                        <td>Os dados são coletados por máquina e especialistas, se presentes no documento.</td>
                        <td>
                          <span className="badge bg-warning text-dark">Resubmissão</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="h5 fw-semibold mt-4 mb-3">4.2. Declined (Recusado)</h3>
                <div className="table-responsive mb-0">
                  <table className="table table-bordered table-sm">
                    <thead className="table-light">
                      <tr>
                        <th scope="col">Nome da Checagem</th>
                        <th scope="col">Descrição da Checagem</th>
                        <th scope="col">Decisão</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Fraude: Sessão não é fraude conhecida</td>
                        <td>
                          Relações cruzadas de sessões anteriores são pesquisadas para determinar se dados do usuário ou a impressão
                          digital do dispositivo estão vinculados a atividade fraudulenta conhecida.
                        </td>
                        <td>
                          <span className="badge bg-danger">Recusado</span>
                        </td>
                      </tr>
                      <tr>
                        <td>Fraude: Sessão não é usuário duplicado</td>
                        <td>
                          Relações cruzadas de sessões anteriores são pesquisadas para determinar se os dados do usuário já receberam
                          uma decisão - a sessão é recusada se o usuário já foi processado em uma sessão anterior.
                        </td>
                        <td>
                          <span className="badge bg-danger">Recusado</span>
                        </td>
                      </tr>
                      <tr>
                        <td>Fraude: Sessão não é dispositivo duplicado</td>
                        <td>
                          Relações cruzadas de sessões anteriores são pesquisadas para determinar se os dados da impressão digital do
                          dispositivo já receberam uma decisão - a sessão é recusada se o usuário já foi processado em uma sessão
                          anterior.
                        </td>
                        <td>
                          <span className="badge bg-danger">Recusado</span>
                        </td>
                      </tr>
                      <tr>
                        <td>Fraude: Sessão não é ID duplicada</td>
                        <td>
                          Relações cruzadas de sessões anteriores são pesquisadas para determinar se os dados do usuário já receberam
                          uma decisão - a sessão é recusada se o usuário já foi processado em uma sessão anterior.
                        </td>
                        <td>
                          <span className="badge bg-danger">Recusado</span>
                        </td>
                      </tr>
                      <tr>
                        <td>Vídeo: Apenas uma pessoa está presente</td>
                        <td>O vídeo é analisado por especialistas para determinar se há apenas uma única pessoa na sessão.</td>
                        <td>
                          <span className="badge bg-danger">Recusado</span>
                        </td>
                      </tr>
                      <tr>
                        <td>Vídeo: Documento é real</td>
                        <td>
                          O vídeo é analisado por especialistas para determinar se o usuário e o documento são vivos e reais (live and
                          real).
                        </td>
                        <td>
                          <span className="badge bg-danger">Recusado</span>
                        </td>
                      </tr>
                      <tr>
                        <td>Imagens não enviadas como apresentação de slides</td>
                        <td>
                          Imagens (e vídeo) são analisadas por máquina e especialistas para determinar se a sessão é enviada de um
                          emulador.
                        </td>
                        <td>
                          <span className="badge bg-danger">Recusado</span>
                        </td>
                      </tr>
                      <tr>
                        <td>Imagens não enviadas de uma tela de dispositivo</td>
                        <td>
                          Imagens (e vídeo) são analisadas por máquina e especialistas para determinar se a sessão é enviada de uma tela
                          de dispositivo.
                        </td>
                        <td>
                          <span className="badge bg-danger">Recusado</span>
                        </td>
                      </tr>
                      <tr>
                        <td>Imagens não enviadas de uma impressão</td>
                        <td>
                          Imagens (e vídeo) são analisadas por especialistas para determinar se a sessão é enviada de uma impressão.
                        </td>
                        <td>
                          <span className="badge bg-danger">Recusado</span>
                        </td>
                      </tr>
                      <tr>
                        <td>Aparência do documento enviado corresponde à do espécime oficial</td>
                        <td>
                          Imagens do documento são analisadas por máquina e especialistas para determinar se o documento enviado é
                          semelhante ao espécime, e é comparado ao banco de dados de espécimes interno.
                        </td>
                        <td>
                          <span className="badge bg-danger">Recusado</span>
                        </td>
                      </tr>
                      <tr>
                        <td>Referência cruzada de dados do documento bem-sucedida</td>
                        <td>
                          Imagens do documento são analisadas por máquina e especialistas para determinar se a referência cruzada de
                          dados do documento enviado (dados do documento para MRZ, dados da parte traseira do documento, dados do código
                          de barras) é bem-sucedida.
                        </td>
                        <td>
                          <span className="badge bg-danger">Recusado</span>
                        </td>
                      </tr>
                      <tr>
                        <td>Rosto no retrato semelhante ao rosto no documento</td>
                        <td>
                          Idade, gênero, etnia e características faciais da imagem do rosto enviada e da imagem do rosto do documento
                          são analisados por máquina e especialistas para determinar se a pessoa é a mesma.
                        </td>
                        <td>
                          <span className="badge bg-danger">Recusado</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="mb-5">
                <h2 className="h3 fw-semibold mb-3">5. Conclusão</h2>
                <p className="mb-0">
                  A utilização do serviço Veriff assegura que a TokenOne cumpre o dever regulatório de identificação, qualificação e
                  monitoramento de seus usuários, utilizando métodos de verificação que são resistentes a ataques de apresentação e
                  que se beneficiam de uma inteligência antifraude global (Cross-linking) para mitigar os riscos de PLD e garantir a
                  integridade da plataforma.
                </p>
              </section>

              <section className="mb-5">
                <h2 className="h3 fw-semibold mb-3">ENTRE EM CONTATO COM A TOKEN ONE!</h2>
                <p className="mb-0">
                  Ficamos à disposição para esclarecer suas dúvidas, receber feedbacks ou reclamações através do seguinte e-mail:{" "}
                  <a href="mailto:contato@tokenone.com.br" className="text-decoration-none fw-semibold">
                    contato@tokenone.com.br
                  </a>
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
                  Última atualização: 05 de setembro de 2025
                </p>
              </footer>
            </article>
          </div>
        </div>
      </div>
    </main>
  );
}
