"use client";

import * as React from "react";
import {
    AudioWaveform,
    BarChart,
    Command,
    GalleryVerticalEnd,
    Home,
    Medal,
    Users,
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
            title: "Dashboard",
            icon: BarChart,
            url: "/analytics",
            items: [{ title: "Dashboard", url: "/analytics" }],
        },
        {
            title: "Businesses",
            icon: Home,
            url: "/businesses",
            items: [
                { title: "All Businesses", url: "/businesses" },
                { title: "Add Business", url: "/add-business/0" },
                { title: "Business Onboarding", url: "/business-onboarding" },
            ],
        },
        {
            title: "Customers",
            icon: Users,
            url: "/customers",
            items: [{ title: "Customer List", url: "/customers" }],
        },
        {
            title: "Loyalty Programs",
            icon: Medal,
            url: "/programs",
            items: [{ title: "All Programs", url: "/programs" }],
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
