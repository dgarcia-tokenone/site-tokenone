'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'

const CANAIS = [
  'Fale conosco',
  'Trabalhe conosco',
  'Canal de denúncias',
  'Canal LGPD',
] as const

function ContatoForm() {
  const searchParams = useSearchParams()
  const canalParam = searchParams.get('canal')

  const [formData, setFormData] = useState({
    email: '',
    canal: canalParam || '',
    assunto: '',
    mensagem: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null)

  useEffect(() => {
    if (canalParam) {
      setFormData((prev) => ({ ...prev, canal: canalParam }))
    }
  }, [canalParam])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Erro ao enviar mensagem')
      }

      setMessage({
        type: 'success',
        text: 'Mensagem enviada com sucesso! Entraremos em contato em breve.',
      })
      setFormData({
        email: '',
        canal: canalParam || '',
        assunto: '',
        mensagem: '',
      })
    } catch (error) {
      setMessage({
        type: 'error',
        text: error instanceof Error ? error.message : 'Erro ao enviar mensagem. Tente novamente.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="py-5 bg-light min-vh-100">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <div className="mb-4">
              <Link href="/" className="btn btn-outline-secondary btn-sm">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="me-1"
                >
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                Voltar
              </Link>
            </div>

            <div className="card shadow-sm border-0">
              <div className="card-body p-4 p-md-5">
                <h1 className="h3 fw-bold mb-2">Enviar um email</h1>
                <p className="text-secondary mb-4">
                  Os campos marcados com um asterisco (<span className="text-danger">*</span>) são obrigatórios.
                </p>

                {message && (
                  <div
                    className={`alert ${message.type === 'success' ? 'alert-success' : 'alert-danger'} alert-dismissible fade show`}
                    role="alert"
                  >
                    {message.text}
                    <button
                      type="button"
                      className="btn-close"
                      onClick={() => setMessage(null)}
                      aria-label="Fechar"
                    />
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="email" className="form-label fw-semibold">
                      Endereço de e-mail <span className="text-danger">*</span>
                    </label>
                    <input
                      type="email"
                      className="form-control form-control-lg"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="seu@email.com"
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="canal" className="form-label fw-semibold">
                      Canal <span className="text-danger">*</span>
                    </label>
                    <select
                      className="form-select form-select-lg"
                      id="canal"
                      name="canal"
                      value={formData.canal}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                    >
                      <option value="">Selecione um canal</option>
                      {CANAIS.map((canal) => (
                        <option key={canal} value={canal}>
                          {canal}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="assunto" className="form-label fw-semibold">
                      Assunto <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      id="assunto"
                      name="assunto"
                      value={formData.assunto}
                      onChange={handleChange}
                      required
                      placeholder="Digite o assunto"
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="mensagem" className="form-label fw-semibold">
                      Descrição <span className="text-danger">*</span>
                    </label>
                    <textarea
                      className="form-control form-control-lg"
                      id="mensagem"
                      name="mensagem"
                      value={formData.mensagem}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="Insira os detalhes de sua solicitação. Um membro de nossa equipe de suporte responderá assim que possível."
                      disabled={isSubmitting}
                      minLength={10}
                    />
                    <div className="form-text">Mínimo de 10 caracteres</div>
                  </div>

                  <div className="d-grid">
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true" />
                          Enviando...
                        </>
                      ) : (
                        'Enviar'
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className="mt-4 text-center text-secondary small">
              <p className="mb-1">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="me-1"
                  style={{ verticalAlign: 'text-bottom' }}
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                Suas informações estão protegidas e serão tratadas com confidencialidade
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ContatoPage() {
  return (
    <Suspense fallback={
      <div className="py-5 bg-light min-vh-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8">
              <div className="card shadow-sm border-0">
                <div className="card-body p-4 p-md-5 text-center">
                  <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Carregando...</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    }>
      <ContatoForm />
    </Suspense>
  )
}
