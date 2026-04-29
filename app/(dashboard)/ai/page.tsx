'use client'
import { useState, useRef, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
type Message = {
  role: 'user' | 'assistant'
  content: string
}

export default function AIPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: '¡Hola! Soy tu asistente de NexusFlow. Puedo ayudarte a diseñar workflows, sugerir automatizaciones y conectar herramientas. ¿Por dónde empezamos?'
    }
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  async function sendMessage() {
    if (!input.trim() || loading) return

    const userMessage: Message = { role: 'user', content: input }
    const newMessages = [...messages, userMessage]
    setMessages(newMessages)
    setInput('')
    setLoading(true)

    try {
      const response = await fetch('/api/ai/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages }),
      })

      const data = await response.json()

      setMessages(prev => [...prev, {
        role: 'assistant',
        content: data.text || 'No pude generar una respuesta.'
      }])

    } catch (error) {
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: 'Hubo un error al conectar con el agente. Intenta de nuevo.'
      }])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{display:'flex', flexDirection:'column', height:'calc(100vh - 112px)'}}>

      <div style={{marginBottom:'16px'}}>
        <h1 style={{margin:0, fontSize:'18px', fontWeight:500, color:'#111827'}}>Agente IA</h1>
        <p style={{margin:'4px 0 0', fontSize:'13px', color:'#9ca3af'}}>
          Diseña y optimiza tus workflows con inteligencia artificial
        </p>
      </div>

      <div style={{flex:1, background:'white', border:'1px solid #f3f4f6', borderRadius:'12px', display:'flex', flexDirection:'column', overflow:'hidden'}}>

        <div style={{flex:1, overflowY:'auto', padding:'20px', display:'flex', flexDirection:'column', gap:'16px'}}>
          {messages.map((msg, i) => (
            <div key={i} style={{display:'flex', justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start'}}>
              <div style={{
                maxWidth:'70%',
                padding:'12px 16px',
                borderRadius: msg.role === 'user' ? '12px 12px 2px 12px' : '12px 12px 12px 2px',
                background: msg.role === 'user' ? '#2563eb' : '#f9fafb',
                color: msg.role === 'user' ? 'white' : '#111827',
                fontSize:'14px',
                lineHeight:'1.6',
                border: msg.role === 'assistant' ? '1px solid #f3f4f6' : 'none',
              }}>
                {msg.role === 'assistant' && (
                  <div style={{display:'flex', alignItems:'center', gap:'6px', marginBottom:'6px'}}>
                    <div style={{width:'20px', height:'20px', background:'#2563eb', borderRadius:'6px', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'10px'}}>⚡</div>
                    <span style={{fontSize:'11px', fontWeight:500, color:'#6b7280'}}>NexusFlow AI</span>
                  </div>
                )}
                <ReactMarkdown>{msg.content}</ReactMarkdown>
              </div>
            </div>
          ))}
          {loading && (
            <div style={{display:'flex', justifyContent:'flex-start'}}>
              <div style={{padding:'12px 16px', borderRadius:'12px 12px 12px 2px', background:'#f9fafb', border:'1px solid #f3f4f6'}}>
                <div style={{display:'flex', alignItems:'center', gap:'6px', marginBottom:'6px'}}>
                  <div style={{width:'20px', height:'20px', background:'#2563eb', borderRadius:'6px', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'10px'}}>⚡</div>
                  <span style={{fontSize:'11px', fontWeight:500, color:'#6b7280'}}>NexusFlow AI</span>
                </div>
                <span style={{fontSize:'14px', color:'#9ca3af'}}>Pensando...</span>
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        {messages.length === 1 && (
          <div style={{padding:'0 20px 16px', display:'flex', gap:'8px', flexWrap:'wrap'}}>
            {[
              '¿Cómo automatizo el onboarding de usuarios?',
              'Crea un workflow para clasificar emails',
              '¿Qué triggers puedo usar con Slack?',
            ].map(suggestion => (
              <button
                key={suggestion}
                onClick={() => setInput(suggestion)}
                style={{fontSize:'12px', padding:'6px 12px', background:'#f9fafb', border:'1px solid #e5e7eb', borderRadius:'20px', color:'#374151', cursor:'pointer'}}
              >
                {suggestion}
              </button>
            ))}
          </div>
        )}

        <div style={{padding:'16px 20px', borderTop:'1px solid #f3f4f6', display:'flex', gap:'10px'}}>
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && sendMessage()}
            placeholder="Describe el workflow que quieres automatizar..."
            style={{flex:1, padding:'10px 14px', border:'1px solid #e5e7eb', borderRadius:'8px', fontSize:'14px', outline:'none', color:'#111827'}}
          />
          <button
            onClick={sendMessage}
            disabled={loading || !input.trim()}
            style={{padding:'10px 20px', background: loading || !input.trim() ? '#e5e7eb' : '#2563eb', color: loading || !input.trim() ? '#9ca3af' : 'white', border:'none', borderRadius:'8px', fontSize:'14px', fontWeight:500, cursor: loading ? 'not-allowed' : 'pointer'}}
          >
            {loading ? '...' : 'Enviar'}
          </button>
        </div>
      </div>
    </div>
  )
}