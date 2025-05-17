import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const createUser = mutation({
  args: {
    clerkId: v.string(),
    fullName: v.string(),
    email: v.string(),
    phoneNumber: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    // Check if user already exists
    const existingUser = await ctx.db
      .query("users")
      .withIndex("by_clerk_id", (q) => q.eq("clerkId", args.clerkId))
      .unique();
    
    if (existingUser) return existingUser._id;
    
    // Create new user
    return await ctx.db.insert("users", {
      clerkId: args.clerkId,
      fullName: args.fullName,
      email: args.email,
      phoneNumber: args.phoneNumber,
      onboardingComplete: false,
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
    await ctx.db.patch(args.userId, { onboardingComplete: args.completed });
  },
});