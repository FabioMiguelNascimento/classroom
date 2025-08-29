"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { HelpCircle, LogOut, Settings, Sun, User, type LucideIcon } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  useSidebar,
} from "@/components/ui/sidebar";
import { Profile } from "@/types/profile.type";

interface Item {
  separator?: boolean
  icon: LucideIcon;
  label: string;
}

export function NavFooter({ profile }: { profile: Profile }) {
  const { isMobile } = useSidebar();

  const items: Item[] = [
    {
      icon: User,
      label: "Profile",
    },
    {
      icon: Settings,
      label: "Settings",
    },
    {
      icon: HelpCircle,
      label: "Help",
    },
    {
      icon: Sun,
      label: "Theme",
    },
    {
      separator: true,
      icon: LogOut,
      label: "Log out",
    },
  ];

  return (
    <SidebarMenu>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <SidebarMenuButton size="lg">
            <Avatar>
              <AvatarImage src={profile.image} />
              <AvatarFallback>
                {profile.name.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col ">
              <span className="text-sm font-bold">{profile.name}</span>
              <span className="text-xs font-medium">{profile.email}</span>
            </div>
          </SidebarMenuButton>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
          side={isMobile ? "top" : "right"}
          align="end"
          sideOffset={4}
        >
          <DropdownMenuLabel>
            <div className="flex gap-3">
              <Avatar>
                <AvatarImage src={profile.image} />
                <AvatarFallback>
                  {profile.name.charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div className="flex flex-col ">
                <span className="text-sm font-bold">{profile.name}</span>
                <span className="text-xs font-medium">{profile.email}</span>
              </div>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            {items.map((item) => (
              <>
              { item.separator && <DropdownMenuSeparator /> }
              <DropdownMenuItem key={item.label}>
                <item.icon className="text-inherit" />
                {item.label}
              </DropdownMenuItem>
              </>
            ))}
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </SidebarMenu>
  );
}
