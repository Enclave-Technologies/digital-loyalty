"use client";

import * as React from "react";
import {
    AudioWaveform,
    BadgePercent,
    BarChart,
    Command,
    GalleryVerticalEnd,
    Gift,
    Home,
    Medal,
    Settings,
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
            title: "Dashboard",
            icon: BarChart,
            url: "/analytics",
            items: [{ title: "Dashboard", url: "/analytics" }],
        },
        {
            title: "Stores",
            icon: Home,
            url: "/stores",
            items: [
                { title: "All Stores", url: "/stores" },
                { title: "Add Store", url: "/stores/new" },
            ],
        },
        {
            title: "Customers",
            icon: Users,
            url: "/customers",
            items: [
                { title: "Customer List", url: "/customers" },
                { title: "Add Customer", url: "/customers/new" },
            ],
        },
        {
            title: "Loyalty Program",
            icon: Medal,
            url: "/program",
            items: [
                { title: "Program Settings", url: "/program/settings" },
                { title: "Stamp Rules", url: "/program/stamps" },
                { title: "Expiry Settings", url: "/program/expiry" },
            ],
        },
        {
            title: "Rewards",
            icon: Gift,
            url: "/rewards",
            items: [
                { title: "Reward List", url: "/rewards" },
                { title: "Add Reward", url: "/rewards/new" },
            ],
        },
        {
            title: "Redemptions",
            icon: ShoppingCart,
            url: "/redemptions",
            items: [
                { title: "Pending Approvals", url: "/redemptions/approvals" },
                { title: "History", url: "/redemptions/history" },
            ],
        },
        {
            title: "Team Settings",
            icon: Settings,
            url: "/settings/team",
            items: [
                { title: "Manage Users", url: "/settings/team/users" },
                { title: "Roles & Permissions", url: "/settings/team/roles" },
            ],
        },
        {
            title: "Passes",
            icon: BadgePercent,
            url: "/passes",
            items: [
                { title: "Issued Passes", url: "/passes" },
                { title: "Sign-Up Settings", url: "/passes/settings" },
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
