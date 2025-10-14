import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { z } from 'zod'

const resend = new Resend(process.env.RESEND_API_KEY)

const contactSchema = z.object({
  email: z.string().email('Email inválido'),
  canal: z.string().min(1, 'Canal é obrigatório'),
  assunto: z.string().min(1, 'Assunto é obrigatório'),
  mensagem: z.string().min(10, 'Mensagem deve ter no mínimo 10 caracteres'),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validar dados
    const validatedData = contactSchema.parse(body)
    
    const { email, canal, assunto, mensagem } = validatedData
    
    // Enviar email via Resend
    const { data, error } = await resend.emails.send({
      from: 'TokenOne <noreply@tokenone.com.br>',
      to: process.env.CONTACT_EMAIL || 'contato@tokenone.com.br',
      replyTo: email,
      subject: `[${canal}] ${assunto}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background: linear-gradient(135deg, #3160ff 0%, #7c3aed 100%);
                color: white;
                padding: 30px;
                border-radius: 8px 8px 0 0;
                text-align: center;
              }
              .content {
                background: #f8f9fa;
                padding: 30px;
                border-radius: 0 0 8px 8px;
              }
              .field {
                margin-bottom: 20px;
              }
              .field-label {
                font-weight: 600;
                color: #0f172a;
                margin-bottom: 5px;
              }
              .field-value {
                background: white;
                padding: 12px;
                border-radius: 6px;
                border: 1px solid #e2e8f0;
              }
              .footer {
                margin-top: 30px;
                padding-top: 20px;
                border-top: 1px solid #e2e8f0;
                font-size: 12px;
                color: #64748b;
                text-align: center;
              }
            </style>
          </head>
          <body>
            <div class="header">
              <h1 style="margin: 0; font-size: 24px;">Nova Mensagem - TokenOne</h1>
            </div>
            <div class="content">
              <div class="field">
                <div class="field-label">Canal:</div>
                <div class="field-value">${canal}</div>
              </div>
              
              <div class="field">
                <div class="field-label">Email do Remetente:</div>
                <div class="field-value">${email}</div>
              </div>
              
              <div class="field">
                <div class="field-label">Assunto:</div>
                <div class="field-value">${assunto}</div>
              </div>
              
              <div class="field">
                <div class="field-label">Mensagem:</div>
                <div class="field-value">${mensagem.replace(/\n/g, '<br>')}</div>
              </div>
              
              <div class="footer">
                <p>Esta mensagem foi enviada através do formulário de contato do site TokenOne.</p>
                <p>Para responder, utilize o email: ${email}</p>
              </div>
            </div>
          </body>
        </html>
      `,
    })

    if (error) {
      console.error('Erro ao enviar email:', error)
      return NextResponse.json(
        { error: 'Erro ao enviar email. Tente novamente mais tarde.' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { 
        message: 'Email enviado com sucesso!',
        id: data?.id 
      },
      { status: 200 }
    )
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Dados inválidos', details: error.errors },
        { status: 400 }
      )
    }

    console.error('Erro inesperado:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}
