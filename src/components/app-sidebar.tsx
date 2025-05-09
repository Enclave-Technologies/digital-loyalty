"use client";

import * as React from "react";
import {
    AudioWaveform,
    BookOpen,
    Bot,
    Command,
    CreditCard,
    GalleryVerticalEnd,
    LayoutTemplate,
    PlusCircle,
    Settings2,
    SquareTerminal,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarRail,
} from "@/components/ui/sidebar";

// This is sample data.
const data = {
    teams: [
        {
            name: "Arabica Coffee",
            logo: GalleryVerticalEnd,
            plan: "Enterprise",
        },
        {
            name: "Delhi 6 Restro Bar",
            logo: AudioWaveform,
            plan: "Startup",
        },
        {
            name: "Junel's",
            logo: Command,
            plan: "Free",
        },
    ],
    navMain: [
        {
            title: "Customers",
            url: "#",
            icon: SquareTerminal,
            isActive: true,
            items: [
                {
                    title: "History",
                    url: "#",
                },
                {
                    title: "Starred",
                    url: "#",
                },
                {
                    title: "Settings",
                    url: "#",
                },
            ],
        },
        {
            title: "Loyalty Cards",
            url: "#",
            icon: CreditCard,
            items: [
              {
                title: "Templates",
                url: "/business-onboarding",
                icon: LayoutTemplate,
              },
              {
                title: "Create New",
                url: "/business-onboarding/edit/new",
                icon: PlusCircle,
              },
              {
                title: "History",
                url: "#",
                icon: History,
              },
            ],
          },
        {
            title: "Programs",
            url: "#",
            icon: Bot,
            items: [
                {
                    title: "Genesis",
                    url: "#",
                },
                {
                    title: "Explorer",
                    url: "#",
                },
                {
                    title: "Quantum",
                    url: "#",
                },
            ],
        },
        {
            title: "Transactions",
            url: "#",
            icon: BookOpen,
            items: [
                {
                    title: "Introduction",
                    url: "#",
                },
                {
                    title: "Get Started",
                    url: "#",
                },
                {
                    title: "Tutorials",
                    url: "#",
                },
                {
                    title: "Changelog",
                    url: "#",
                },
            ],
        },
        {
            title: "Settings",
            url: "#",
            icon: Settings2,
            items: [
                {
                    title: "General",
                    url: "#",
                },
                {
                    title: "Team",
                    url: "#",
                },
                {
                    title: "Billing",
                    url: "#",
                },
                {
                    title: "Limits",
                    url: "#",
                },
            ],
        },
    ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar collapsible="icon" {...props}>
            <SidebarHeader>
                <TeamSwitcher teams={data.teams} />
            </SidebarHeader>
            <SidebarContent>
                <NavMain items={data.navMain} />
                {/* <NavProjects projects={data.projects} /> */}
            </SidebarContent>
            <SidebarFooter>
                <NavUser />
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    );
}
