import { Link } from '@tanstack/react-router';
import { BookText, Info, SquareTerminal } from 'lucide-react';

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { NavMain } from './nav-main';
import { NavUser } from './nav-user';

const data = {
  navMain: [
    {
      title: 'About',
      url: '/about',
      icon: Info,
      isActive: false,
    },
    {
      title: 'Posts',
      url: '/posts/',
      icon: BookText,
      isActive: false,
    },
  ],
  user: {
    name: 'ochir',
    email: 'ochir.code@gmail.com',
    avatar: '#',
  },
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link to="/">
                <div className="bg-zinc-700 text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <SquareTerminal className="size-4" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-medium">Home</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
