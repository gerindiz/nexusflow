'use client'
import { Bell, Search } from 'lucide-react'

export default function Header() {
  return (
    <header style={{height:'64px', background:'white', borderBottom:'1px solid #f3f4f6', display:'flex', alignItems:'center', justifyContent:'space-between', padding:'0 24px', flexShrink:0}}>

      <div style={{display:'flex', alignItems:'center', gap:'8px', background:'#f9fafb', border:'1px solid #e5e7eb', borderRadius:'8px', padding:'6px 12px', width:'280px'}}>
        <Search style={{width:'16px', height:'16px', color:'#9ca3af'}} />
        <input
          type="text"
          placeholder="Buscar workflows..."
          style={{background:'transparent', fontSize:'14px', color:'#374151', outline:'none', flex:1, border:'none'}}
        />
      </div>

      <div style={{display:'flex', alignItems:'center', gap:'12px'}}>
        <button style={{position:'relative', padding:'8px', color:'#9ca3af', background:'none', border:'none', cursor:'pointer', borderRadius:'8px'}}>
          <Bell style={{width:'16px', height:'16px'}} />
          <span style={{position:'absolute', top:'6px', right:'6px', width:'6px', height:'6px', background:'#3b82f6', borderRadius:'50%', display:'block'}} />
        </button>
        <button style={{display:'flex', alignItems:'center', gap:'8px', background:'#2563eb', color:'white', fontSize:'14px', fontWeight:500, padding:'8px 16px', borderRadius:'8px', border:'none', cursor:'pointer'}}>
          + Nuevo workflow
        </button>
      </div>

    </header>
  )
  }
