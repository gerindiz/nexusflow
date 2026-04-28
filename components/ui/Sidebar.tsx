'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { href: '/workflows', label: 'Workflows', emoji: '⚡' },
  { href: '/webhooks', label: 'Webhooks', emoji: '🔗' },
  { href: '/settings', label: 'Settings', emoji: '⚙️' },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside style={{width:'220px', height:'100%', background:'white', borderRight:'1px solid #f3f4f6', display:'flex', flexDirection:'column', flexShrink:0}}>

      {/* Logo */}
      <div style={{height:'64px', display:'flex', alignItems:'center', padding:'0 20px', borderBottom:'1px solid #f3f4f6', gap:'8px'}}>
        <div style={{width:'28px', height:'28px', background:'#2563eb', borderRadius:'8px', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'14px'}}>
          ⚡
        </div>
        <span style={{fontWeight:600, fontSize:'14px', color:'#111827'}}>NexusFlow</span>
      </div>

      {/* Nav */}
      <nav style={{flex:1, padding:'12px 8px', display:'flex', flexDirection:'column', gap:'4px'}}>
        {navItems.map(({ href, label, emoji }) => {
          const isActive = pathname === href
          return (
            <Link
              key={href}
              href={href}
              style={{
                display:'flex', alignItems:'center', gap:'10px',
                padding:'8px 12px', borderRadius:'8px', fontSize:'13px',
                textDecoration:'none', transition:'background 0.15s',
                background: isActive ? '#eff6ff' : 'transparent',
                color: isActive ? '#1d4ed8' : '#6b7280',
                fontWeight: isActive ? 500 : 400,
              }}
            >
              <span style={{fontSize:'15px'}}>{emoji}</span>
              {label}
            </Link>
          )
        })}
      </nav>

      {/* Usuario */}
      <div style={{padding:'12px', borderTop:'1px solid #f3f4f6'}}>
        <div style={{display:'flex', alignItems:'center', gap:'10px', padding:'8px 12px', borderRadius:'8px', cursor:'pointer'}}>
          <div style={{width:'28px', height:'28px', borderRadius:'50%', background:'#dbeafe', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'11px', fontWeight:500, color:'#1d4ed8', flexShrink:0}}>
            U
          </div>
          <div>
            <div style={{fontSize:'12px', fontWeight:500, color:'#111827'}}>Usuario</div>
            <div style={{fontSize:'11px', color:'#9ca3af'}}>user@email.com</div>
          </div>
        </div>
      </div>

    </aside>
  )
}