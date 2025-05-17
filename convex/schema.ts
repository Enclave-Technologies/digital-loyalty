import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    clerkId: v.string(),
    fullName: v.string(),
    email: v.string(),
    phoneNumber: v.optional(v.string()),
    onboardingComplete: v.boolean(),
    // Add other fields as needed
  }).index("by_clerk_id", ["clerkId"]),
  
  businesses: defineTable({
    userId: v.id("users"),
    name: v.string(),
    // Add other business fields
  }).index("by_user_id", ["userId"]),
});