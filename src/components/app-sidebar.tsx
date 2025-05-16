"use client";

import * as React from "react";
import {
    AudioWaveform,
    BarChart,
    Command,
    GalleryVerticalEnd,
    Gift,
    Medal,
    ShoppingCart,
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
            title: "Members",
            icon: Users, // New icon
            url: "/members",
            items: [
                { title: "Directory", url: "/members" },
                { title: "Activity Feed", url: "/members/activity" },
                { title: "Segments", url: "/members/segments" },
            ],
        },
        {
            title: "Programs",
            icon: Medal, // Updated icon
            url: "/programs",
            items: [
                { title: "Current Program", url: "/programs/current" },
                { title: "Tier Settings", url: "/programs/tiers" },
                { title: "Rules Builder", url: "/programs/rules" },
            ],
        },
        {
            title: "Rewards",
            icon: Gift,
            url: "/rewards",
            items: [
                { title: "Reward Catalog", url: "/rewards" },
                { title: "Digital Rewards", url: "/rewards/digital" },
                { title: "Physical Rewards", url: "/rewards/physical" },
            ],
        },
        {
            title: "Redemptions",
            icon: ShoppingCart,
            url: "/redemptions",
            items: [
                { title: "Recent Activity", url: "/redemptions" },
                { title: "Approval Queue", url: "/redemptions/approvals" },
            ],
        },
        {
            title: "Analytics",
            icon: BarChart,
            url: "/analytics",
            items: [
                { title: "Dashboard", url: "/analytics" },
                { title: "Custom Reports", url: "/analytics/reports" },
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
