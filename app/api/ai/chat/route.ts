
import { createGoogleGenerativeAI } from '@ai-sdk/google'
import { generateText } from 'ai'

const google = createGoogleGenerativeAI({
  apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY!,
})

export async function POST(req: Request) {
  const { messages } = await req.json()

  const { text } = await generateText({
    model: google('gemini-2.5-flash'),
    system: `Eres un asistente experto en automatización de workflows para NexusFlow.
    Tu rol es ayudar a los usuarios a:
    - Diseñar flujos de trabajo automatizados
    - Sugerir triggers y acciones para sus workflows
    - Explicar cómo conectar herramientas como Slack, email, webhooks
    - Optimizar automatizaciones existentes
    Responde siempre en el idioma del usuario. Sé conciso y práctico.`,
    messages,
  })

  return Response.json({ text })
}