export const metadata = {
  title: "Material Didático do Investidor | TokenOne",
  description:
    "Guia completo para investidores. Entenda todos os procedimentos, termos técnicos, riscos e direitos envolvidos no processo de investimento via crowdfunding.",
};

export default function MaterialDidaticoPage() {
  return (
    <main className="py-5 py-lg-6">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 col-xl-9">
            <article className="legal-document">
              <header className="mb-5">
                <h1 className="display-5 fw-bold mb-4">MATERIAL DIDÁTICO DO INVESTIDOR</h1>
              </header>

              <section className="mb-5">
                <h2 className="h3 fw-semibold mb-3">1. INTRODUÇÃO E OBJETIVO DESTE MANUAL</h2>

                <h3 className="h5 fw-semibold mt-4 mb-3">1.1. Quem Somos</h3>
                <p className="mb-4">
                  Seja bem-vindo à nossa Plataforma de Investimento Participativo. Somos a <strong>TOKEN ONE</strong>, inscrita no CNPJ
                  sob o nº 37.728.588/0001-04, endereço comercial à Rua José Tavares Siqueira, nº 97, Conjunto 43, CEP 03085-030,
                  Tatuapé, São Paulo/SP, uma empresa devidamente constituída no Brasil e autorizada pela Comissão de Valores Mobiliários
                  (CVM) a operar como uma plataforma eletrônica de crowdfunding. Nossa atividade consiste em intermediar a captação de
                  recursos para sociedades empresárias de pequeno porte, através de ofertas públicas de valores mobiliários que são
                  dispensadas de registro, conforme os termos da Resolução CVM 88, de 27 de abril de 2022, e demais regulamentações
                  aplicáveis.
                </p>

                <h3 className="h5 fw-semibold mt-4 mb-3">1.2. Finalidade Deste Material Didático</h3>
                <p className="mb-3">
                  Este documento foi elaborado com o objetivo de ser um guia completo para você, investidor. Nele, detalhamos todos os
                  procedimentos, termos técnicos, riscos e direitos envolvidos no processo de investimento via crowdfunding. O
                  conhecimento aprofundado destas informações é fundamental para que você tome decisões de investimento conscientes e
                  alinhadas ao seu perfil de risco.
                </p>

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
                    ALERTA DA CVM
                  </h4>
                  <p className="mb-0">
                    Este manual é uma ferramenta educacional e não deve, em hipótese alguma, ser confundido com as &quot;Informações
                    Essenciais da Oferta&quot;. A leitura atenta de todos os documentos específicos de cada oferta é indispensável antes de
                    qualquer investimento.
                  </p>
                </div>
              </section>

              <section className="mb-5">
                <h2 className="h3 fw-semibold mb-3">2. O PROCESSO DE INVESTIMENTO NA PRÁTICA</h2>
                <p className="mb-4">
                  O investimento em nossa plataforma é 100% digital, seguro e transparente. Detalhamos abaixo cada etapa do processo.
                </p>

                <h3 className="h5 fw-semibold mt-4 mb-3">2.1. Cadastro e Análise de Perfil (KYC e Suitability)</h3>
                <p className="mb-4">
                  Para começar, você deve realizar um cadastro completo em nossa plataforma. Durante este processo, solicitaremos seus
                  dados pessoais e documentos para verificação de identidade (processo conhecido como <em>Know Your Client - KYC</em>).
                  Em seguida, você preencherá um questionário de Adequação ao Perfil de Risco (<em>Suitability</em>), que nos ajudará a
                  entender seus objetivos, sua tolerância a riscos e seu conhecimento do mercado financeiro.
                </p>

                <h3 className="h5 fw-semibold mt-4 mb-3">2.2. Acesso e Análise das Ofertas</h3>
                <p className="mb-3">
                  Após a aprovação do seu cadastro, você terá acesso aos &quot;Pools&quot; (operações) de investimento disponíveis. Cada oferta é
                  acompanhada por um pacote completo de &quot;Documentos da Operação&quot;, que inclui:
                </p>
                <ul className="mb-4">
                  <li className="mb-2">
                    <strong>Lâmina da Operação:</strong> Apresentação com os detalhes sobre o Originador dos créditos, as
                    características e os critérios de seleção dos Ativos Lastro, a estrutura da emissão, as garantias (como o Índice de
                    Subordinação), o prazo e a Rentabilidade-Alvo.
                  </li>
                  <li className="mb-2">
                    <strong>Informações Essenciais da Oferta:</strong> Documento principal com os dados formais da captação e alertas de
                    risco.
                  </li>
                  <li className="mb-2">
                    <strong>Documentos Jurídicos:</strong> Contrato de investimento e outros documentos pertinentes.
                  </li>
                  <li className="mb-2">
                    <strong>Fórum de Dúvidas:</strong> Um espaço para que você possa fazer perguntas diretamente aos responsáveis pela
                    estruturação da oferta.
                  </li>
                </ul>

                <h3 className="h5 fw-semibold mt-4 mb-3">2.3. Confirmação do Investimento e Alocação de Recursos</h3>
                <p className="mb-3">Após estudar a oferta e decidir investir, você deverá:</p>
                <ol className="mb-3">
                  <li className="mb-2">Indicar o valor que deseja aportar.</li>
                  <li className="mb-2">
                    Ler e assinar eletronicamente o Termo de Ciência de Risco e o Contrato de Investimento.
                  </li>
                  <li className="mb-2">Transferir o valor para a conta bancária indicada na página da oferta.</li>
                </ol>
                <p className="mb-4">
                  <strong>Importante:</strong> Os recursos transferidos por você serão mantidos em uma conta de pagamento segregada, que
                  não se confunde com o patrimônio da Plataforma, de seus sócios ou da empresa emissora. Os fundos permanecerão nesta
                  conta até que a oferta seja concluída com sucesso e o período de desistência tenha expirado.
                </p>

                <h3 className="h5 fw-semibold mt-4 mb-3">2.4. Direito de Desistência</h3>
                <p className="mb-3">
                  A legislação garante a você o direito de desistir do investimento, sem qualquer custo ou penalidade, em um prazo de
                  até <strong>5 (cinco) dias corridos</strong> a contar da data de confirmação do seu investimento.
                </p>
                <p className="mb-4">
                  A solicitação de desistência deve ser feita através dos canais indicados em nossa plataforma. Caso opte pela
                  desistência dentro do prazo, o valor aportado será integralmente devolvido.
                </p>

                <h3 className="h5 fw-semibold mt-4 mb-3">2.5. Possibilidade de Oferta Parcial</h3>
                <p className="mb-4">
                  Uma oferta será considerada bem-sucedida se atingir a meta mínima de captação, que será sempre de, no mínimo,{" "}
                  <strong>2/3 (dois terços)</strong> do valor alvo total da oferta. Caso essa meta mínima seja atingida dentro do prazo
                  de captação (que não pode exceder 180 dias), a oferta pode ser encerrada e os recursos repassados à emissora, mesmo
                  que o valor máximo não tenha sido alcançado.
                </p>

                <h3 className="h5 fw-semibold mt-4 mb-3">2.6. Encerramento da Oferta e Formalização</h3>
                <ul className="mb-0">
                  <li className="mb-2">
                    <strong>Se a meta mínima NÃO for atingida:</strong> A oferta é cancelada, e os valores investidos são devolvidos
                    integralmente aos investidores, sem qualquer correção ou juros.
                  </li>
                  <li className="mb-2">
                    <strong>Se a meta mínima for atingida:</strong> Após o fim do prazo da oferta e do período de desistência, os
                    recursos são transferidos para a empresa emissora, e os valores mobiliários (representados por tokens em nossa
                    plataforma) são emitidos e transferidos para a sua titularidade.
                  </li>
                </ul>
              </section>

              <section className="mb-5">
                <h2 className="h3 fw-semibold mb-3">3. PERFIS DE INVESTIDOR E LIMITES DE APORTE</h2>
                <p className="mb-4">
                  A regulação da CVM estabelece limites de investimento anuais para proteger os investidores, que são calculados
                  considerando a soma de todos os aportes realizados em plataformas de crowdfunding no ano-calendário.
                </p>

                <div className="row g-4 mb-0">
                  <div className="col-12 col-md-6 col-lg-4">
                    <div className="card h-100 border-primary">
                      <div className="card-body">
                        <h3 className="h6 fw-semibold text-primary mb-3">Investidor em Geral</h3>
                        <p className="mb-3">
                          Pode investir até <strong>R$ 20.000,00</strong> por ano-calendário.
                        </p>
                        <p className="small mb-0 text-secondary">
                          Durante o cadastro, você deverá assinar a declaração correspondente ao Anexo C da Resolução CVM 88.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-md-6 col-lg-4">
                    <div className="card h-100 border-success">
                      <div className="card-body">
                        <h3 className="h6 fw-semibold text-success mb-3">Investidor com Renda ou Patrimônio Elevados</h3>
                        <p className="mb-3">
                          Se sua renda bruta anual ou o total de seus investimentos financeiros for superior a{" "}
                          <strong>R$ 200.000,00</strong>, você poderá investir até <strong>10%</strong> do maior desses dois valores.
                        </p>
                        <p className="small mb-0 text-secondary">
                          Para isso, é necessário assinar a declaração do Anexo B da Resolução CVM 88.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-md-12 col-lg-4">
                    <div className="card h-100 border-warning">
                      <div className="card-body">
                        <h3 className="h6 fw-semibold text-warning mb-3">Investidor Qualificado</h3>
                        <p className="mb-3">
                          Investidores que possuem mais de <strong>R$ 1.000.000,00</strong> em investimentos financeiros e atestam por
                          escrito essa condição <strong>não estão sujeitos a limites de investimento</strong>.
                        </p>
                        <p className="small mb-0 text-secondary">
                          É exigida a assinatura da declaração do Anexo A da Resolução CVM 88.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-5">
                <h2 className="h3 fw-semibold mb-3">4. ANÁLISE DE RISCOS: LEITURA ESSENCIAL</h2>
                <p className="mb-4">
                  Investir em sociedades empresárias de pequeno porte é uma atividade de alto risco. A possibilidade de retorno é
                  proporcional ao risco assumido. É crucial que você compreenda os seguintes pontos:
                </p>

                <h3 className="h5 fw-semibold mt-4 mb-3">4.1. Risco de Perda Total do Capital Investido</h3>
                <p className="mb-3">
                  Ao investir em títulos de crédito, o risco de perda do capital está diretamente relacionado à performance dos ativos
                  que lastreiam a operação. O principal fator de risco é a inadimplência dos devedores desses títulos. Caso os devedores
                  originais dos recebíveis não efetuem os pagamentos devidos, o fluxo de caixa esperado para remunerar os investidores
                  não se concretizará, podendo levar à perda parcial ou total do valor investido.
                </p>
                <p className="mb-3">
                  <strong>Fatores a considerar:</strong>
                </p>
                <ul className="mb-4">
                  <li className="mb-2">
                    <strong>Risco do Originador:</strong> O sucesso do investimento depende da capacidade do Originador em selecionar
                    bons Ativos Lastro e em realizar a cobrança de forma eficiente. A análise do histórico passado não é garantia de
                    performance futura.
                  </li>
                  <li className="mb-2">
                    <strong>Risco Macroeconômico e de Crédito:</strong> O cenário econômico do país impacta a capacidade de pagamento
                    das empresas. Dados de mercado, como os do Banco Central e Serasa Experian, indicam os níveis de inadimplência no
                    Brasil. Por exemplo, em abril de 2023, o Brasil registrou 6,5 milhões de empresas inadimplentes, sendo a maior parte
                    micro e pequenas empresas.
                  </li>
                  <li className="mb-2">
                    <strong>Insuficiência de Garantias:</strong> Embora as operações possam ter mecanismos de proteção, como a
                    subordinação de capital, um nível de inadimplência na carteira superior ao previsto pode consumir toda essa proteção,
                    resultando em perdas para o investidor. A plataforma não oferece qualquer garantia de devolução do investimento.
                  </li>
                </ul>

                <h3 className="h5 fw-semibold mt-4 mb-3">4.2. Risco de Baixa Liquidez</h3>
                <p className="mb-4">
                  Os Tokens de Recebíveis não são negociados em mercados secundários organizados. Eventual venda deverá ocorrer em
                  negociações privadas dentro da plataforma, o que pode resultar em dificuldade para encontrar um comprador,
                  caracterizando o ativo como de baixa liquidez.
                </p>

                <h3 className="h5 fw-semibold mt-4 mb-3">4.3. Dificuldade de Avaliação e Precificação</h3>
                <p className="mb-4">
                  A precificação dos Ativos Lastro depende de metodologias de avaliação de cada Originador. Após a oferta, a
                  precificação dos tokens para uma negociação privada dependerá de negociação entre as partes, o que dificulta a
                  determinação de um valor justo. A plataforma, no entanto, precificará os tokens diariamente com base na performance do
                  Ativo de Securitização correspondente.
                </p>

                <h3 className="h5 fw-semibold mt-4 mb-3">4.4. Ausência de Informações Públicas e Auditoria</h3>
                <p className="mb-4">
                  Pode haver dificuldade na avaliação dos Ativos Lastro pela falta de informação pública sobre eles e seus devedores.
                  Além disso, não há obrigatoriedade legal de que o Originador ou a estrutura da operação apresentem demonstrações
                  financeiras auditadas por uma auditoria independente.
                </p>

                <h3 className="h5 fw-semibold mt-4 mb-3">4.5. Não Existência de Instituição Custodiante</h3>
                <p className="mb-4">
                  Os Tokens de Recebíveis (TRs) não serão guardados por uma instituição custodiante. Eles serão armazenados diretamente
                  na sua Wallet, da qual você tem titularidade. A plataforma auxilia no gerenciamento da carteira para uma experiência
                  facilitada, e os ativos e transações ficam registrados de forma segura na blockchain.
                </p>

                <h3 className="h5 fw-semibold mt-4 mb-3">4.6. A Melhor Mitigação de Risco: A Diversificação</h3>
                <div className="alert alert-info border-info" role="alert">
                  <p className="mb-0">
                    <strong>A estratégia mais eficaz para mitigar os riscos é construir um portfólio diversificado.</strong> Ao invés de
                    alocar uma grande quantia em um único Pool, distribua seus recursos por várias operações, com diferentes
                    Originadores, teses de crédito e tipos de ativos.
                  </p>
                </div>
              </section>

              <section className="mb-5">
                <h2 className="h3 fw-semibold mb-3">5. AGENTES DA OPERAÇÃO: ORIGINADOR E POOL</h2>
                <p className="mb-3">Diferente do investimento em empresas, as operações de crédito possuem agentes específicos:</p>
                <ul className="mb-0">
                  <li className="mb-3">
                    <strong>O Originador:</strong> É a entidade responsável por selecionar os Ativos Lastro que irão compor o portfólio
                    de crédito da operação, conforme os Critérios de Elegibilidade. Os recursos captados no Pool são utilizados pelo
                    Originador para adquirir esses ativos.
                  </li>
                  <li className="mb-3">
                    <strong>O Pool:</strong> É o veículo (constituído como um patrimônio separado) que aloca os recursos dos
                    investidores e os destina para a aquisição dos direitos creditórios (Ativos Lastro). Ele é regido por um smart
                    contract (contrato inteligente) que automatiza as regras da operação.
                  </li>
                </ul>
              </section>

              <section className="mb-5">
                <h2 className="h3 fw-semibold mb-3">6. REMUNERAÇÃO DA PLATAFORMA E OUTROS CUSTOS</h2>
                <p className="mb-3">
                  A remuneração da Plataforma consiste em uma taxa percentual calculada sobre o montante total captado na oferta. Essa
                  taxa só é devida em caso de sucesso da captação e seu valor exato estará sempre descrito nos Documentos da Operação.
                </p>
                <p className="mb-0">
                  Adicionalmente, empresas do mesmo grupo econômico da plataforma podem prestar outros serviços para a execução da
                  operação de crédito (como estruturação, cobrança, etc.), cujos custos serão transparentes e informados nos documentos
                  da oferta.
                </p>
              </section>

              <section className="mb-5">
                <h2 className="h3 fw-semibold mb-3">7. PRAZOS DE RETORNO ESPERADOS</h2>
                <p className="mb-0">
                  Os prazos de retorno de cada Pool dependem da tese de cada produto e das características dos Ativos Lastro. Diferente
                  de investimentos em empresas, o retorno geralmente ocorre através de pagamentos periódicos de juros e amortização.
                  Contudo, é comum que o prazo para recebimento integral do principal investido supere <strong>2 (dois) anos</strong>.
                  Leia sempre os Documentos da Operação com atenção.
                </p>
              </section>

              <section className="mb-5">
                <h2 className="h3 fw-semibold mb-3">8. PROCEDIMENTOS PARA TRANSAÇÕES PRIVADAS</h2>
                <p className="mb-0">
                  Toda negociação privada de tokens deve ser precedida do cadastro da contraparte na plataforma TokenOne. O investidor
                  deverá comunicar à plataforma sobre a transferência para que a atualização da titularidade seja efetuada em nossos
                  registros. Transações privadas só podem ocorrer dentro do ambiente da plataforma.
                </p>
              </section>

              <section className="mb-5">
                <h2 className="h3 fw-semibold mb-3">9. CANAIS DE ATENDIMENTO E RECLAMAÇÕES</h2>
                <p className="mb-0">
                  Para qualquer dúvida, sugestão ou reclamação, utilize nossos canais oficiais de atendimento. Caso não se sinta
                  satisfeito com a solução apresentada, você pode contatar o Serviço de Atendimento ao Cidadão (SAC) da CVM, disponível
                  no site oficial.
                </p>
              </section>

              <section className="mb-5">
                <h2 className="h3 fw-semibold mb-3">10. GLOSSÁRIO DE TERMOS TÉCNICOS</h2>
                <dl className="mb-0">
                  <dt className="fw-semibold mb-2">Ativo de Securitização</dt>
                  <dd className="mb-3">
                    É o ativo emitido pelo Pool que contém todas as características da Emissão, como remuneração e prazo, de acordo com
                    as características dos Ativos Lastro.
                  </dd>

                  <dt className="fw-semibold mb-2">Ativo(s) Lastro</dt>
                  <dd className="mb-3">
                    São os ativos (direitos creditórios) que servem como lastro para a emissão do Ativo de Securitização. A performance
                    do investimento depende da performance desses ativos.
                  </dd>

                  <dt className="fw-semibold mb-2">Cascata de Pagamentos</dt>
                  <dd className="mb-3">
                    É a ordem de prioridade para pagamentos de despesas e da remuneração dos Investidores da Emissão, conforme previsto
                    nos Documentos da Operação.
                  </dd>

                  <dt className="fw-semibold mb-2">Critério(s) de Elegibilidade</dt>
                  <dd className="mb-3">São os critérios que o Pool deve observar para adquirir um Ativo Lastro.</dd>

                  <dt className="fw-semibold mb-2">Originador</dt>
                  <dd className="mb-3">É o responsável por selecionar os Ativos Lastro que irão integrar o Pool.</dd>

                  <dt className="fw-semibold mb-2">Pool</dt>
                  <dd className="mb-3">
                    Veículo constituído para alocação dos recursos dos investidores, destinado à aquisição de direitos creditórios.
                  </dd>

                  <dt className="fw-semibold mb-2">Rentabilidade-Alvo</dt>
                  <dd className="mb-3">É a rentabilidade esperada para os detentores dos Tokens da classe Sênior.</dd>

                  <dt className="fw-semibold mb-2">Stablecoin</dt>
                  <dd className="mb-3">
                    Um tipo de token digital pareado a um ativo estável, como uma moeda fiduciária (ex: 1 stablecoin = 1 Real).
                  </dd>

                  <dt className="fw-semibold mb-2">Índice de Subordinação</dt>
                  <dd className="mb-3">
                    Proporção mínima de Tokens da classe Junior em relação ao total de Tokens, que funciona como uma garantia para os
                    detentores de Tokens da classe Sênior.
                  </dd>

                  <dt className="fw-semibold mb-2">Tokens (Sênior e Junior)</dt>
                  <dd className="mb-0">
                    São as representações digitais do Ativo de Securitização. Podem ser divididos em classes (tranches) com diferentes
                    níveis de risco e retorno, como Sênior (menor risco) e Junior (maior risco).
                  </dd>
                </dl>
              </section>

              <section className="mb-5">
                <div className="alert alert-danger border-danger" role="alert">
                  <h2 className="h5 fw-bold mb-3">ATENÇÃO:</h2>
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
                      ANTES DE ACEITAR UMA OFERTA, LEIA COM ATENÇÃO AS INFORMAÇÕES ESSENCIAIS DA OFERTA, EM ESPECIAL A SEÇÃO DE ALERTAS
                      SOBRE RISCOS.
                    </strong>
                  </p>
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
                </p>
              </footer>
            </article>
          </div>
        </div>
      </div>
    </main>
  );
}
