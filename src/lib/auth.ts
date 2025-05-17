import { redirect } from "next/navigation";
import { currentUser } from "@clerk/nextjs/server";
import { ConvexHttpClient } from "convex/browser";
import { api } from "../../convex/_generated/api";

const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

// Define serializable user types
export type SerializableUser = {
    id: string;
    fullName: string | null;
    email: string | null;
    imageUrl: string | null;
};

export type SerializableConvexUser = {
    _id: string;
    clerkId: string;
    fullName: string;
    email: string;
    phoneNumber?: string;
    onboardingComplete: boolean;
};

export async function requireAuth() {
    const user = await currentUser();

    if (!user) {
        redirect("/login");
    }

    // Return serializable user data
    return {
        id: user.id,
        fullName: user.fullName,
        email: user.primaryEmailAddress?.emailAddress || null,
        imageUrl: user.imageUrl,
    } as SerializableUser;
}

export async function requireOnboarding() {
    const user = await requireAuth();

    try {
        // Fetch user from Convex
        const convexUser = await convex.query(api.users.getUserByClerkId, {
            clerkId: user.id,
        });

        // If user doesn't exist in Convex or hasn't completed onboarding
        if (!convexUser) {
            redirect("/onboarding");
        }

        if (!convexUser.onboardingComplete) {
            redirect("/onboarding");
        }

        return {
            user: user,
            convexUser: convexUser as SerializableConvexUser,
        };
    } catch (error) {
        // If there's an error fetching the user, redirect to onboarding
        redirect("/onboarding");
    }
}
