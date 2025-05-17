import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    users: defineTable({
        clerkId: v.string(),
        fullName: v.string(),
        email: v.string(),
        phoneNumber: v.optional(v.string()),
        onboardingComplete: v.boolean(),

        // Additional user fields
        createdAt: v.number(), // Unix timestamp
        updatedAt: v.number(), // Unix timestamp
        profilePictureUrl: v.optional(v.string()),
        bio: v.optional(v.string()),
        location: v.optional(v.string()),
        preferredLanguage: v.optional(v.string()),
        timeZone: v.optional(v.string()),
        lastActiveAt: v.optional(v.number()),
        isSuspended: v.optional(v.boolean()),
        role: v.optional(v.string()), // "user", "admin", "employee"
        phoneNumberVerified: v.optional(v.boolean()),
    }).index("by_clerk_id", ["clerkId"]),

    businesses: defineTable({
        userId: v.id("users"),
        name: v.string(),
        // Add other business fields
    }).index("by_user_id", ["userId"]),
});
