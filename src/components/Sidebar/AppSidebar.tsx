"use client"

import {
  BookOpen,
  GraduationCap,
  Home
} from "lucide-react"
import * as React from "react"

import { NavMain } from "@/components/Sidebar/NavMain"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  SidebarTrigger,
  useSidebar
} from "@/components/ui/sidebar"
import { NavItem } from "@/types/nav-item.type"
import { Profile } from "@/types/profile.type"
import { NavFooter } from "./NavFooter"

const data: {
  navMain: NavItem[],
  footer: Profile
}  = {
  navMain: [
    {
      title: "Classrooms",
      url: "/app",
      icon: Home,
    },
    {
      title: "Classes",
      url: "#",
      icon: GraduationCap,
    },
    {
      title: "Assignments",
      url: "#",
      icon: BookOpen,
    },
  ],
  footer: {
    name: "John Doe",
    email: "johnLenon@hotmail.com",
    image: "/foto-epica.webp",
    theme: "dark"
  }
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { isMobile } = useSidebar()
  return (
    <Sidebar collapsible="icon" {...props}>

      <SidebarContent className="gap-0">
          <SidebarHeader className={`${isMobile ? "items-end" : " "}`}>
            <SidebarTrigger />
          </SidebarHeader>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarRail />
      <SidebarFooter>
        <NavFooter profile={data.footer} />
      </SidebarFooter>
    </Sidebar>
  )
}
