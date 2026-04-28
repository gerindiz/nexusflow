import WorkflowCard from '@/components/workflows/WorkflowCard'

const mockWorkflows = [
  { id:'1', name:'Clasificador de emails con IA', description:'Lee emails entrantes y los clasifica por prioridad usando GPT-4o', status:'active' as const, runs:1284, lastRun:'hace 2 min', trigger:'Webhook' },
  { id:'2', name:'Resumen diario de Slack', description:'Genera un resumen de conversaciones importantes cada mañana', status:'active' as const, runs:89, lastRun:'hace 6 hrs', trigger:'Cron' },
  { id:'3', name:'Onboarding de nuevos usuarios', description:'Envía secuencia de emails personalizados con IA al registrarse', status:'paused' as const, runs:432, lastRun:'hace 2 días', trigger:'Evento' },
  { id:'4', name:'Monitor de precios competencia', description:'Scraping diario y alerta si hay cambios de precio relevantes', status:'error' as const, runs:56, lastRun:'hace 1 día', trigger:'Cron' },
  { id:'5', name:'Generador de reportes PDF', description:'Crea reportes semanales automáticos y los envía por email', status:'active' as const, runs:204, lastRun:'hace 3 hrs', trigger:'Cron' },
  { id:'6', name:'Agente de soporte IA', description:'Responde tickets de soporte automáticamente con contexto del usuario', status:'active' as const, runs:3891, lastRun:'hace 5 min', trigger:'Webhook' },
]

export default function WorkflowsPage() {
  return (
    <div>
      {/* Header de página */}
      <div style={{display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:'24px'}}>
        <div>
          <h1 style={{margin:0, fontSize:'18px', fontWeight:500, color:'#111827'}}>Workflows</h1>
          <p style={{margin:'4px 0 0', fontSize:'13px', color:'#9ca3af'}}>
            {mockWorkflows.length} workflows · {mockWorkflows.filter(w => w.status === 'active').length} activos
          </p>
        </div>
      </div>

      {/* Panel de métricas */}
      <div style={{display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:'12px', marginBottom:'24px'}}>
        {[
          { label:'Total workflows', value:'6', sub:'2 agregados este mes', color:'#2563eb', bg:'#eff6ff' },
          { label:'Ejecuciones hoy', value:'1.847', sub:'+12% vs ayer', color:'#16a34a', bg:'#f0fdf4' },
          { label:'Tasa de éxito', value:'97.2%', sub:'3 errores esta semana', color:'#7c3aed', bg:'#f5f3ff' },
          { label:'Tiempo promedio', value:'1.3s', sub:'por ejecución', color:'#b45309', bg:'#fffbeb' },
        ].map((metric) => (
          <div key={metric.label} style={{background:'white', border:'1px solid #f3f4f6', borderRadius:'12px', padding:'16px'}}>
            <div style={{fontSize:'11px', color:'#9ca3af', marginBottom:'8px'}}>{metric.label}</div>
            <div style={{fontSize:'24px', fontWeight:500, color:'#111827', marginBottom:'4px'}}>{metric.value}</div>
            <div style={{display:'flex', alignItems:'center', gap:'4px'}}>
              <div style={{width:'6px', height:'6px', borderRadius:'50%', background:metric.color, flexShrink:0}} />
              <span style={{fontSize:'11px', color:'#9ca3af'}}>{metric.sub}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Grid de cards */}
      <div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:'16px'}}>
        {mockWorkflows.map((workflow) => (
          <WorkflowCard key={workflow.id} {...workflow} />
        ))}
      </div>
    </div>
  )
}