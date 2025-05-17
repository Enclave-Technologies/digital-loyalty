"use client";
import React from "react";
import {
    Table,
    TableHeader,
    TableBody,
    TableRow,
    TableHead,
    TableCell,
} from "@/components/ui/table";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
    ArrowDown,
    ArrowUp,
    Users,
    Gift,
    // Activity,
    // TrendingUp,
    AlertCircle,
    DollarSign,
    // Clock,
} from "lucide-react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    BarChart,
    Bar,
    PieChart,
    Pie,
    Cell,
    // Legend,
    // PieLabelRenderProps,
} from "recharts";
import { dummyLoyaltyType, DummyTransactionType } from "./page";

const DashboardContent = ({
    loyaltyData,
    dummyTransactions,
}: {
    loyaltyData: dummyLoyaltyType;
    dummyTransactions: DummyTransactionType;
}) => {
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];

    const COLORS = ["#4f46e5", "#06b6d4", "#8b5cf6", "#ec4899"];

    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold">
                    Loyalty Program Dashboard
                </h1>
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium">
                            Total Active Members
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex items-center">
                            <Users className="mr-2 h-4 w-4 text-muted-foreground" />
                            <div className="text-2xl font-bold">
                                {loyaltyData.totalActiveMembers}
                            </div>
                            <Badge className="ml-auto" variant="outline">
                                <ArrowUp className="mr-1 h-3 w-3 text-emerald-500" />
                                12%
                            </Badge>
                        </div>
                        <ResponsiveContainer width="100%" height={50}>
                            <LineChart
                                data={loyaltyData.activeMembersByPeriod.map(
                                    (value, index) => ({
                                        name: `Day ${index + 1}`,
                                        value,
                                    })
                                )}
                            >
                                <Line
                                    type="monotone"
                                    dataKey="value"
                                    stroke="#4f46e5"
                                    strokeWidth={3}
                                    dot={{ r: 3 }}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium">
                            New Members
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex items-center">
                            <Users className="mr-2 h-4 w-4 text-muted-foreground" />
                            <div className="text-2xl font-bold">
                                {loyaltyData.newMembers}
                            </div>
                            <Badge className="ml-auto" variant="outline">
                                <ArrowUp className="mr-1 h-3 w-3 text-emerald-500" />
                                {loyaltyData.newMembersGrowth}%
                            </Badge>
                        </div>
                        <div className="text-xs text-muted-foreground mt-1">
                            Compared to last month
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium">
                            Churn Rate
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex items-center">
                            <div className="text-2xl font-bold">
                                {loyaltyData.churnRate}%
                            </div>
                            <Badge className="ml-auto" variant="outline">
                                <ArrowDown className="mr-1 h-3 w-3 text-emerald-500" />
                                0.5%
                            </Badge>
                        </div>
                        <div className="text-xs text-muted-foreground mt-1">
                            Decreased from last month
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium">
                            Reward Redemption Rate
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex items-center">
                            <Gift className="mr-2 h-4 w-4 text-muted-foreground" />
                            <div className="text-2xl font-bold">
                                {loyaltyData.redemptionRate}%
                            </div>
                            <Badge className="ml-auto" variant="outline">
                                <ArrowUp className="mr-1 h-3 w-3 text-emerald-500" />
                                5%
                            </Badge>
                        </div>
                        <div className="text-xs text-muted-foreground mt-1">
                            {loyaltyData.pointsRedeemed} /{" "}
                            {loyaltyData.pointsIssued} points
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Tabbed Content */}
            <Tabs defaultValue="performance" className="mb-8">
                <TabsList>
                    <TabsTrigger value="performance">
                        Program Performance
                    </TabsTrigger>
                    <TabsTrigger value="engagement">
                        Member Engagement
                    </TabsTrigger>
                    <TabsTrigger value="rewards">Reward Analytics</TabsTrigger>
                    <TabsTrigger value="acquisition">
                        Acquisition & Retention
                    </TabsTrigger>
                    <TabsTrigger value="issues">
                        Issues & Opportunities
                    </TabsTrigger>
                </TabsList>

                {/* Program Performance Tab */}
                <TabsContent value="performance" className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>
                                    Points Issued vs. Redeemed
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <div>
                                        <div className="flex justify-between mb-1">
                                            <span>Points Issued</span>
                                            <span>
                                                {loyaltyData.pointsIssued}
                                            </span>
                                        </div>
                                        <div className="w-full bg-muted rounded-full h-3">
                                            <div
                                                className="bg-primary h-3 rounded-full"
                                                style={{ width: "100%" }}
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between mb-1">
                                            <span>Points Redeemed</span>
                                            <span>
                                                {loyaltyData.pointsRedeemed}
                                            </span>
                                        </div>
                                        <div className="w-full bg-muted rounded-full h-3">
                                            <div
                                                className="bg-primary h-3 rounded-full"
                                                style={{
                                                    width: `${(loyaltyData.pointsRedeemed / loyaltyData.pointsIssued) * 100}%`,
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Member Growth Trend</CardTitle>
                            </CardHeader>
                            <CardContent className="h-[200px] flex items-center">
                                <div className="w-full">
                                    <ResponsiveContainer
                                        width="100%"
                                        height={200}
                                    >
                                        <LineChart
                                            data={loyaltyData.activeMembersByPeriod.map(
                                                (value, index) => ({
                                                    name: monthNames[index],
                                                    value,
                                                })
                                            )}
                                        >
                                            <XAxis dataKey="name" />
                                            <YAxis />
                                            <Tooltip />
                                            <Line
                                                type="monotone"
                                                dataKey="value"
                                                stroke="#4f46e5"
                                                strokeWidth={3}
                                                dot={{ r: 3 }}
                                            />
                                        </LineChart>
                                    </ResponsiveContainer>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </TabsContent>

                {/* Member Engagement Tab */}
                <TabsContent value="engagement" className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Tier Distribution</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ResponsiveContainer width="100%" height={200}>
                                    <PieChart>
                                        <Pie
                                            data={loyaltyData.tierDistribution}
                                            dataKey="value"
                                            nameKey="name"
                                            cx="50%"
                                            cy="50%"
                                            outerRadius={80}
                                            fill="#8884d8"
                                        >
                                            {loyaltyData.tierDistribution.map(
                                                (entry, index) => (
                                                    <Cell
                                                        key={`cell-${index}`}
                                                        fill={
                                                            COLORS[
                                                                index %
                                                                    COLORS.length
                                                            ]
                                                        }
                                                    />
                                                )
                                            )}
                                        </Pie>
                                    </PieChart>
                                </ResponsiveContainer>
                                <div className="grid grid-cols-2 gap-2 mt-4">
                                    {loyaltyData.tierDistribution.map(
                                        (tier, index) => (
                                            <div
                                                key={index}
                                                className="flex items-center"
                                            >
                                                <div
                                                    className="w-3 h-3 rounded-full mr-2"
                                                    style={{
                                                        backgroundColor:
                                                            COLORS[
                                                                index %
                                                                    COLORS.length
                                                            ],
                                                    }}
                                                />
                                                <span className="text-sm">
                                                    {tier.name}: {tier.value}%
                                                </span>
                                            </div>
                                        )
                                    )}
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Average Points Activity</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-6">
                                    <div>
                                        <div className="flex justify-between mb-1">
                                            <span>Avg. Points Earned</span>
                                            <span className="font-bold">
                                                {loyaltyData.avgPointsEarned}
                                            </span>
                                        </div>
                                        <div className="w-full bg-muted rounded-full h-2">
                                            <div
                                                className="bg-primary h-2 rounded-full"
                                                style={{ width: "100%" }}
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between mb-1">
                                            <span>Avg. Points Redeemed</span>
                                            <span className="font-bold">
                                                {loyaltyData.avgPointsRedeemed}
                                            </span>
                                        </div>
                                        <div className="w-full bg-muted rounded-full h-2">
                                            <div
                                                className="bg-primary h-2 rounded-full"
                                                style={{
                                                    width: `${(loyaltyData.avgPointsRedeemed / loyaltyData.avgPointsEarned) * 100}%`,
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-medium mb-2">
                                            Interaction Frequency
                                        </h4>
                                        <div className="grid grid-cols-3 gap-2 text-center text-sm">
                                            <div className="bg-muted p-2 rounded">
                                                <div className="font-bold">
                                                    45%
                                                </div>
                                                <div className="text-xs">
                                                    Weekly
                                                </div>
                                            </div>
                                            <div className="bg-muted p-2 rounded">
                                                <div className="font-bold">
                                                    30%
                                                </div>
                                                <div className="text-xs">
                                                    Monthly
                                                </div>
                                            </div>
                                            <div className="bg-muted p-2 rounded">
                                                <div className="font-bold">
                                                    25%
                                                </div>
                                                <div className="text-xs">
                                                    Quarterly
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </TabsContent>

                {/* Reward Analytics Tab */}
                <TabsContent value="rewards" className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Most Popular Rewards</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ResponsiveContainer width="100%" height={200}>
                                    <BarChart data={loyaltyData.popularRewards}>
                                        <XAxis dataKey="name" />
                                        <YAxis />
                                        <Tooltip />
                                        <Bar
                                            dataKey="redemptions"
                                            fill="#4f46e5"
                                        />
                                    </BarChart>
                                </ResponsiveContainer>
                                <div className="mt-4 pt-2 border-t">
                                    <div className="text-sm font-medium">
                                        Top Performers:
                                    </div>
                                    <div className="space-y-2 mt-2">
                                        {loyaltyData.popularRewards
                                            .slice(0, 3)
                                            .map((reward, index) => (
                                                <div
                                                    key={index}
                                                    className="flex items-center justify-between text-sm"
                                                >
                                                    <span>{reward.name}</span>
                                                    <Badge
                                                        variant="outline"
                                                        className="bg-emerald-50 text-emerald-700"
                                                    >
                                                        {reward.redemptions}
                                                    </Badge>
                                                </div>
                                            ))}
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Least Popular Rewards</CardTitle>
                                <CardDescription>
                                    Consider revising or replacing these rewards
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ResponsiveContainer width="100%" height={200}>
                                    <BarChart
                                        data={loyaltyData.unpopularRewards}
                                    >
                                        <XAxis dataKey="name" />
                                        <YAxis />
                                        <Tooltip />
                                        <Bar
                                            dataKey="redemptions"
                                            fill="#4f46e5"
                                        />
                                    </BarChart>
                                </ResponsiveContainer>
                                <div className="mt-4 pt-2 border-t">
                                    <div className="text-sm font-medium">
                                        Recommendations:
                                    </div>
                                    <ul className="text-sm text-muted-foreground list-disc pl-5 pt-1">
                                        <li>
                                            Replace &quot;Branded Mug&quot; with
                                            merchandise that aligns with
                                            customer preferences
                                        </li>
                                        <li>
                                            Increase discount percentage on
                                            accessories or bundle with popular
                                            items
                                        </li>
                                        <li>
                                            Promote gift wrapping during holiday
                                            seasons only
                                        </li>
                                    </ul>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    <Card>
                        <CardHeader>
                            <CardTitle>Points Spent by Reward Type</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <ResponsiveContainer
                                        width="100%"
                                        height={200}
                                    >
                                        <BarChart
                                            data={
                                                loyaltyData.pointsSpentByReward
                                            }
                                        >
                                            <XAxis dataKey="name" />
                                            <YAxis />
                                            <Tooltip />
                                            <Bar
                                                dataKey="points"
                                                fill="#4f46e5"
                                            />
                                        </BarChart>
                                    </ResponsiveContainer>
                                </div>
                                <div className="space-y-4">
                                    <div className="bg-muted p-4 rounded-lg">
                                        <div className="text-sm font-medium">
                                            Total Points Spent
                                        </div>
                                        <div className="text-2xl font-bold mt-1">
                                            {loyaltyData.pointsRedeemed}
                                        </div>
                                        <div className="text-xs text-muted-foreground">
                                            {loyaltyData.redemptionRate}% of
                                            total points issued
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-sm font-medium mb-2">
                                            Key Insights:
                                        </div>
                                        <ul className="text-sm text-muted-foreground list-disc pl-5">
                                            <li>
                                                Free Coffee accounts for{" "}
                                                {Math.round(
                                                    (loyaltyData
                                                        .pointsSpentByReward[0]
                                                        .points /
                                                        loyaltyData.pointsRedeemed) *
                                                        100
                                                )}
                                                % of all redeemed points
                                            </li>
                                            <li>
                                                Top 3 rewards account for{" "}
                                                {Math.round(
                                                    ((loyaltyData
                                                        .pointsSpentByReward[0]
                                                        .points +
                                                        loyaltyData
                                                            .pointsSpentByReward[1]
                                                            .points +
                                                        loyaltyData
                                                            .pointsSpentByReward[2]
                                                            .points) /
                                                        loyaltyData.pointsRedeemed) *
                                                        100
                                                )}
                                                % of redemptions
                                            </li>
                                            <li>
                                                Consider introducing new
                                                mid-tier rewards to distribute
                                                redemptions
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                {/* Acquisition & Retention Tab */}
                <TabsContent value="acquisition" className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Acquisition Metrics</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-6">
                                    <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                                        <div>
                                            <div className="text-sm font-medium">
                                                Cost per Loyalty Member
                                            </div>
                                            <div className="text-2xl font-bold mt-1">
                                                ${loyaltyData.acquisitionCost}
                                            </div>
                                        </div>
                                        <DollarSign className="h-8 w-8 text-muted-foreground opacity-50" />
                                    </div>

                                    <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                                        <div>
                                            <div className="text-sm font-medium">
                                                New Members (This Month)
                                            </div>
                                            <div className="text-2xl font-bold mt-1">
                                                {loyaltyData.newMembers}
                                            </div>
                                        </div>
                                        <Users className="h-8 w-8 text-muted-foreground opacity-50" />
                                    </div>

                                    <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                                        <div>
                                            <div className="text-sm font-medium">
                                                Referral Acquisitions
                                            </div>
                                            <div className="text-2xl font-bold mt-1">
                                                {loyaltyData.referrals}
                                            </div>
                                            <div className="text-xs text-muted-foreground">
                                                {Math.round(
                                                    (loyaltyData.referrals /
                                                        loyaltyData.newMembers) *
                                                        100
                                                )}
                                                % of new members
                                            </div>
                                        </div>
                                        <Users className="h-8 w-8 text-muted-foreground opacity-50" />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>
                                    Retention & Lifetime Value
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-6">
                                    <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                                        <div>
                                            <div className="text-sm font-medium">
                                                Loyalty Member Retention
                                            </div>
                                            <div className="text-2xl font-bold mt-1">
                                                {loyaltyData.retentionRate}%
                                            </div>
                                        </div>
                                        <Badge className="bg-emerald-100 text-emerald-800">
                                            <ArrowUp className="mr-1 h-3 w-3" />
                                            3.5%
                                        </Badge>
                                    </div>

                                    <div>
                                        <div className="text-sm font-medium mb-2">
                                            Customer Lifetime Value
                                        </div>
                                        <div className="grid grid-cols-2 gap-3">
                                            <div className="p-3 bg-muted rounded-lg">
                                                <div className="text-xs text-muted-foreground">
                                                    Loyalty Members
                                                </div>
                                                <div className="text-xl font-bold mt-1">
                                                    $
                                                    {
                                                        loyaltyData
                                                            .lifetimeValue
                                                            .loyalty
                                                    }
                                                </div>
                                            </div>
                                            <div className="p-3 bg-muted rounded-lg">
                                                <div className="text-xs text-muted-foreground">
                                                    Non-Loyalty
                                                </div>
                                                <div className="text-xl font-bold mt-1">
                                                    $
                                                    {
                                                        loyaltyData
                                                            .lifetimeValue
                                                            .nonLoyalty
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-2 text-sm text-muted-foreground">
                                            Loyalty members are worth{" "}
                                            {Math.round(
                                                (loyaltyData.lifetimeValue
                                                    .loyalty /
                                                    loyaltyData.lifetimeValue
                                                        .nonLoyalty) *
                                                    100
                                            )}
                                            % more than non-loyalty customers
                                        </div>
                                    </div>

                                    <div className="p-3 bg-muted rounded-lg">
                                        <div className="text-sm font-medium">
                                            ROI on Loyalty Program
                                        </div>
                                        <div className="text-2xl font-bold mt-1">
                                            265%
                                        </div>
                                        <div className="text-xs text-muted-foreground">
                                            Based on increased purchase
                                            frequency and average order value
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </TabsContent>

                {/* Issues & Opportunities Tab */}
                <TabsContent value="issues" className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Potential Issues</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                                        <div>
                                            <div className="text-sm font-medium">
                                                High Unredeemed Points
                                            </div>
                                            <div className="text-2xl font-bold mt-1">
                                                {loyaltyData.highPointsBalance}%
                                            </div>
                                            <div className="text-xs text-muted-foreground">
                                                of members have high point
                                                balances
                                            </div>
                                        </div>
                                        <AlertCircle className="h-8 w-8 text-amber-500 opacity-70" />
                                    </div>

                                    <div>
                                        <div className="text-sm font-medium mb-2">
                                            Low Engagement Segments
                                        </div>
                                        {loyaltyData.lowEngagementSegments.map(
                                            (segment, index) => (
                                                <div
                                                    key={index}
                                                    className="flex justify-between items-center mb-2 text-sm"
                                                >
                                                    <span>{segment.name}</span>
                                                    <Badge
                                                        variant="outline"
                                                        className="bg-amber-50 text-amber-700"
                                                    >
                                                        {segment.percentage}%
                                                    </Badge>
                                                </div>
                                            )
                                        )}
                                    </div>

                                    <div className="pt-2">
                                        <div className="text-sm font-medium mb-2">
                                            Recommended Actions:
                                        </div>
                                        <ul className="text-sm text-muted-foreground list-disc pl-5">
                                            <li>
                                                Send targeted emails to members
                                                with high point balances
                                            </li>
                                            <li>
                                                Create special onboarding
                                                rewards for new members
                                            </li>
                                            <li>
                                                Implement a win-back campaign
                                                for inactive members
                                            </li>
                                            <li>
                                                Review Bronze tier benefits to
                                                encourage progression
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Customer Feedback</CardTitle>
                                <CardDescription>
                                    Sentiment score:{" "}
                                    {loyaltyData.sentimentScore}/5
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                {/* WordCloud component is not defined, replacing with placeholder */}
                                <div className="text-center text-muted-foreground italic">
                                    WordCloud component is not available.
                                </div>

                                <div className="mt-6 space-y-3">
                                    <div className="p-3 bg-muted rounded-lg">
                                        <div className="text-sm font-medium">
                                            Top Positive Feedback
                                        </div>
                                        <div className="text-sm text-muted-foreground mt-1">
                                            &quot;The rewards program is easy to
                                            use and I love getting free
                                            coffee!&quot;
                                        </div>
                                    </div>

                                    <div className="p-3 bg-muted rounded-lg">
                                        <div className="text-sm font-medium">
                                            Top Improvement Suggestion
                                        </div>
                                        <div className="text-sm text-muted-foreground mt-1">
                                            &quot;Would like to see more variety
                                            in the rewards offered.&quot;
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-4 pt-2 border-t">
                                    <div className="text-sm font-medium mb-2">
                                        Opportunities:
                                    </div>
                                    <ul className="text-sm text-muted-foreground list-disc pl-5">
                                        <li>
                                            Expand reward options based on
                                            customer feedback
                                        </li>
                                        <li>
                                            Highlight program simplicity in
                                            marketing materials
                                        </li>
                                        <li>
                                            Consider app improvements for better
                                            user experience
                                        </li>
                                    </ul>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </TabsContent>
            </Tabs>

            {/* Recent Transactions Table */}
            <Card>
                <CardHeader>
                    <CardTitle>Recent Transactions</CardTitle>
                    <CardDescription>
                        The latest loyalty program transactions
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>ID</TableHead>
                                <TableHead>Date</TableHead>
                                <TableHead>Description</TableHead>
                                <TableHead className="text-right">
                                    Amount
                                </TableHead>
                                <TableHead>Status</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {dummyTransactions
                                .slice(0, 5)
                                .map((transaction) => (
                                    <TableRow key={transaction.id}>
                                        <TableCell>{transaction.id}</TableCell>
                                        <TableCell>
                                            {transaction.date}
                                        </TableCell>
                                        <TableCell>
                                            {transaction.description}
                                        </TableCell>
                                        <TableCell className="text-right">
                                            {transaction.amount}
                                        </TableCell>
                                        <TableCell>
                                            <Badge
                                                variant={
                                                    transaction.status ===
                                                    "Completed"
                                                        ? "default"
                                                        : "outline"
                                                }
                                            >
                                                {transaction.status}
                                            </Badge>
                                        </TableCell>
                                    </TableRow>
                                ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
};

export default DashboardContent;
