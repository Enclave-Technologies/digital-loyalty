import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const createUser = mutation({
    args: {
        clerkId: v.string(),
        fullName: v.string(),
        email: v.string(),
        phoneNumber: v.optional(v.string()),
        profilePictureUrl: v.optional(v.string()),
        location: v.optional(v.string()),
    },
    handler: async (ctx, args) => {
        // Check if user already exists
        const existingUser = await ctx.db
            .query("users")
            .withIndex("by_clerk_id", (q) => q.eq("clerkId", args.clerkId))
            .unique();

        if (existingUser) return existingUser._id;

        const now = Date.now();

        // Create new user with expanded fields
        return await ctx.db.insert("users", {
            clerkId: args.clerkId,
            fullName: args.fullName,
            email: args.email,
            phoneNumber: args.phoneNumber,
            profilePictureUrl: args.profilePictureUrl,
            location: args.location,
            onboardingComplete: false,

            // Set default values for new fields
            createdAt: now,
            updatedAt: now,
            lastActiveAt: now,
            role: "admin", // Default role
            isSuspended: false,
            phoneNumberVerified: false,
        });
    },
});

export const updateUser = mutation({
    args: {
        userId: v.id("users"),
        fullName: v.optional(v.string()),
        email: v.optional(v.string()),
        phoneNumber: v.optional(v.string()),
        profilePictureUrl: v.optional(v.string()),
        bio: v.optional(v.string()),
        location: v.optional(v.string()),
        preferredLanguage: v.optional(v.string()),
        timeZone: v.optional(v.string()),
    },
    handler: async (ctx, args) => {
        const { userId, ...updates } = args;

        // Add updatedAt timestamp
        const updatedData = {
            ...updates,
            updatedAt: Date.now(),
        };

        await ctx.db.patch(userId, updatedData);

        return await ctx.db.get(userId);
    },
});

export const updateLastActive = mutation({
    args: { userId: v.id("users") },
    handler: async (ctx, args) => {
        await ctx.db.patch(args.userId, {
            lastActiveAt: Date.now(),
            updatedAt: Date.now(),
        });
    },
});

export const getUserByClerkId = query({
    args: { clerkId: v.string() },
    handler: async (ctx, args) => {
        return await ctx.db
            .query("users")
            .withIndex("by_clerk_id", (q) => q.eq("clerkId", args.clerkId))
            .unique();
    },
});

export const updateOnboardingStatus = mutation({
    args: { userId: v.id("users"), completed: v.boolean() },
    handler: async (ctx, args) => {
        await ctx.db.patch(args.userId, {
            onboardingComplete: args.completed,
            updatedAt: Date.now(),
        });
    },
});

export const updateUserRole = mutation({
    args: {
        userId: v.id("users"),
        role: v.string(),
    },
    handler: async (ctx, args) => {
        await ctx.db.patch(args.userId, {
            role: args.role,
            updatedAt: Date.now(),
        });
    },
});

export const suspendUser = mutation({
    args: {
        userId: v.id("users"),
        isSuspended: v.boolean(),
    },
    handler: async (ctx, args) => {
        await ctx.db.patch(args.userId, {
            isSuspended: args.isSuspended,
            updatedAt: Date.now(),
        });
    },
});

export const verifyPhoneNumber = mutation({
    args: { userId: v.id("users") },
    handler: async (ctx, args) => {
        await ctx.db.patch(args.userId, {
            phoneNumberVerified: true,
            updatedAt: Date.now(),
        });
    },
});
