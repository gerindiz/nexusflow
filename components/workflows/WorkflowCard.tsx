type Status = 'active' | 'paused' | 'error'

type WorkflowCardProps = {
  name: string
  description: string
  status: Status
  runs: number
  lastRun: string
  trigger: string
}

const statusConfig = {
  active: { label: 'Activo',  color: '#16a34a', bg: '#f0fdf4', dot: '#22c55e' },
  paused: { label: 'Pausado', color: '#b45309', bg: '#fffbeb', dot: '#f59e0b' },
  error:  { label: 'Error',   color: '#dc2626', bg: '#fef2f2', dot: '#ef4444' },
}

export default function WorkflowCard({
  name, description, status, runs, lastRun, trigger
}: WorkflowCardProps) {
  const s = statusConfig[status]

  return (
    <div
      style={{background:'white', border:'1px solid #f3f4f6', borderRadius:'12px', padding:'20px', display:'flex', flexDirection:'column', gap:'12px', cursor:'pointer'}}
    >
      <div style={{display:'flex', justifyContent:'space-between', alignItems:'flex-start'}}>
        <div style={{flex:1, minWidth:0}}>
          <h3 style={{margin:0, fontSize:'14px', fontWeight:500, color:'#111827'}}>
            {name}
          </h3>
          <p style={{margin:'4px 0 0', fontSize:'12px', color:'#9ca3af'}}>
            {description}
          </p>
        </div>
        <div style={{display:'flex', alignItems:'center', gap:'5px', background:s.bg, padding:'4px 10px', borderRadius:'20px', flexShrink:0, marginLeft:'12px'}}>
          <div style={{width:'6px', height:'6px', borderRadius:'50%', background:s.dot}} />
          <span style={{fontSize:'11px', fontWeight:500, color:s.color}}>{s.label}</span>
        </div>
      </div>

      <div style={{borderTop:'1px solid #f9fafb'}} />

      <div style={{display:'flex', justifyContent:'space-between'}}>
        <div>
          <div style={{fontSize:'11px', color:'#9ca3af', marginBottom:'2px'}}>Ejecuciones</div>
          <div style={{fontSize:'14px', fontWeight:500, color:'#111827'}}>{runs.toLocaleString()}</div>
        </div>
        <div>
          <div style={{fontSize:'11px', color:'#9ca3af', marginBottom:'2px'}}>Último run</div>
          <div style={{fontSize:'14px', fontWeight:500, color:'#111827'}}>{lastRun}</div>
        </div>
        <div>
          <div style={{fontSize:'11px', color:'#9ca3af', marginBottom:'2px'}}>Trigger</div>
          <div style={{fontSize:'14px', fontWeight:500, color:'#111827'}}>{trigger}</div>
        </div>
      </div>
    </div>
  )
}