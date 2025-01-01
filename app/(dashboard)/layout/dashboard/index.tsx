'use client'
import { SidebarProvider } from '@/components/ui/sidebar'
import { ReactNode } from 'react'

import { useMobile } from '@/hooks/custom/use-custom-mobile'
import { HeaderDashboard } from './Header'
import { FooterDashboard } from './Footer'
import { NavItems } from './NavItem'
import { Sidebar } from './SideBar'

export const DashBoardLayout = ({ children }: { children: ReactNode }) => {
  const isMobile = useMobile()

  return (
    <div className="flex flex-col min-h-screen absolute">
      {isMobile && <NavItems />}
      <HeaderDashboard />

      <SidebarProvider>
        <Sidebar />
        <main>{children}</main>
      </SidebarProvider>
      <FooterDashboard />
    </div>
  )
}