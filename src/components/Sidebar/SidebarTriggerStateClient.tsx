"use client";

import { SidebarTrigger, useSidebar } from "../ui/sidebar";

export default function SidebarStateClient() {
  const { isMobile } = useSidebar();

  if (!isMobile) return null;
  return <SidebarTrigger />;
}
