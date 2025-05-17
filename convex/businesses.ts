import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const createBusiness = mutation({
    args: {
        clerkId: v.string(),
        name: v.string(),
    },
    handler: async (ctx, args) => {
        const identity = await ctx.auth.getUserIdentity();
        if (identity === null) {
            throw new Error("Not authenticated");
        }
        // Get user ID from clerk ID
        const user = await ctx.db
            .query("users")
            .withIndex("by_clerk_id", (q) => q.eq("clerkId", args.clerkId))
            .unique();

        if (!user) {
            throw new Error("User not found");
        }

        // Create business
        return await ctx.db.insert("businesses", {
            userId: user._id,
            name: args.name,
        });
    },
});

export const getBusinessesByUserId = query({
    args: { userId: v.id("users") },
    handler: async (ctx, args) => {
        const identity = await ctx.auth.getUserIdentity();
        if (identity === null) {
            throw new Error("Not authenticated");
        }
        return await ctx.db
            .query("businesses")
            .withIndex("by_user_id", (q) => q.eq("userId", args.userId))
            .collect();
    },
});
