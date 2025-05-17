import DashboardContent from "./DashboardContent";
import { requireOnboarding } from "@/lib/auth";

export type dummyLoyaltyType = {
    totalActiveMembers: number;
    newMembers: number;
    newMembersGrowth: number;
    churnRate: number;
    pointsIssued: number;
    pointsRedeemed: number;
    redemptionRate: number;
    activeMembersByPeriod: number[];
    avgPointsEarned: number;
    avgPointsRedeemed: number;
    tierDistribution: {
        name: string;
        value: number;
    }[];
    popularRewards: {
        name: string;
        redemptions: number;
    }[];
    unpopularRewards: {
        name: string;
        redemptions: number;
    }[];
    pointsSpentByReward: {
        name: string;
        points: number;
        value: number;
    }[];
    acquisitionCost: number;
    referrals: number;
    retentionRate: number;
    lifetimeValue: {
        loyalty: number;
        nonLoyalty: number;
    };
    highPointsBalance: number;
    lowEngagementSegments: {
        name: string;
        percentage: number;
    }[];
    sentimentScore: number;
    feedbackKeywords: {
        text: string;
        value: number;
    }[];
};

export type DummyTransactionType = {
    id: number;
    date: string;
    description: string;
    amount: string;
    status: string;
}[];

// Sample data - replace with actual data from your API
const dummyTransactions = Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    date: new Date(Date.now() - i * 86400000).toLocaleDateString(),
    description: `Transaction ${i + 1}`,
    amount: (Math.random() * 1000).toFixed(2),
    status: i % 2 === 0 ? "Completed" : "Pending",
}));

// Sample loyalty program data
const loyaltyData = {
    totalActiveMembers: 1200,
    newMembers: 85,
    newMembersGrowth: 15, // percentage
    churnRate: 3.2,
    pointsIssued: 45000,
    pointsRedeemed: 32000,
    redemptionRate: 71, // percentage
    activeMembersByPeriod: [820, 850, 900, 950, 1050, 1150, 1200],
    avgPointsEarned: 450,
    avgPointsRedeemed: 320,
    tierDistribution: [
        { name: "Bronze", value: 65 },
        { name: "Silver", value: 25 },
        { name: "Gold", value: 8 },
        { name: "Platinum", value: 2 },
    ],
    popularRewards: [
        { name: "Free Coffee", redemptions: 120 },
        { name: "10% Discount", redemptions: 85 },
        { name: "Free Dessert", redemptions: 65 },
        { name: "Free Delivery", redemptions: 45 },
        { name: "BOGO Offer", redemptions: 30 },
    ],
    unpopularRewards: [
        { name: "Branded Mug", redemptions: 10 },
        { name: "Keychain", redemptions: 15 },
        { name: "Gift Wrapping", redemptions: 5 },
    ],
    pointsSpentByReward: [
        { name: "Free Coffee", points: 12000, value: 12000 },
        { name: "10% Discount", points: 9000, value: 9000 },
        { name: "Free Dessert", points: 6000, value: 6000 },
        { name: "Free Delivery", points: 3000, value: 3000 },
        { name: "BOGO Offer", points: 2000, value: 2000 },
    ],
    acquisitionCost: 15.5,
    referrals: 25,
    retentionRate: 85,
    lifetimeValue: {
        loyalty: 1200,
        nonLoyalty: 800,
    },
    highPointsBalance: 20,
    lowEngagementSegments: [
        { name: "Inactive 3+ months", percentage: 15 },
        { name: "Low purchase frequency", percentage: 10 },
    ],
    sentimentScore: 4.2,
    feedbackKeywords: [
        { text: "easy", value: 10 },
        { text: "rewards", value: 8 },
        { text: "coffee", value: 6 },
        { text: "variety", value: 4 },
        { text: "discount", value: 3 },
    ],
};

export default async function DashboardPage() {
    // This will redirect if user is not authenticated or hasn't completed onboarding
    const { user, convexUser } = await requireOnboarding();

    console.log("user", user);
    console.log("convexUser", convexUser);

    return (
        <DashboardContent
            loyaltyData={loyaltyData}
            dummyTransactions={dummyTransactions}
        />
    );
}
