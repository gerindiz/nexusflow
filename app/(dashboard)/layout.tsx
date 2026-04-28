import Sidebar from '@/components/ui/Sidebar'
import Header from '@/components/ui/Header'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div style={{display:'flex', height:'100vh', overflow:'hidden', background:'#f9fafb'}}>
      <Sidebar />
      <div style={{display:'flex', flexDirection:'column', flex:1, overflow:'hidden'}}>
        <Header />
        <main style={{flex:1, overflowY:'auto', padding:'24px'}}>
          {children}
        </main>
      </div>
    </div>
  )
}