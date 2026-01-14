import { query } from "./_generated/server";
import { v } from "convex/values";

/**
 * Burnout App v2 - Convex Queries
 * Read-only data fetching for reactive UI updates
 */

// Get mood history for a user (for ProgressJourney screen)
export const getMoodHistory = query({
  args: { userId: v.string(), limit: v.optional(v.number()) },
  handler: async (ctx, args) => {
    const limit = args.limit ?? 30; // Default to last 30 entries
    
    const moods = await ctx.db
      .query("moodLogs")
      .withIndex("by_user", (q) => q.eq("userId", args.userId))
      .order("desc")
      .take(limit);
    
    return moods;
  },
});

// Get breathing sessions for a user (for ProgressJourney screen)
export const getBreathingSessions = query({
  args: { userId: v.string(), limit: v.optional(v.number()) },
  handler: async (ctx, args) => {
    const limit = args.limit ?? 20; // Default to last 20 sessions
    
    const sessions = await ctx.db
      .query("breathingSessions")
      .withIndex("by_user", (q) => q.eq("userId", args.userId))
      .order("desc")
      .take(limit);
    
    return sessions;
  },
});

// Get user preferences (for SettingsSanctuary screen)
export const getUserPreferences = query({
  args: { userId: v.string() },
  handler: async (ctx, args) => {
    const preferences = await ctx.db
      .query("userPreferences")
      .withIndex("by_user", (q) => q.eq("userId", args.userId))
      .first();
    
    // Return default preferences if none exist
    if (!preferences) {
      return {
        enableTransitions: true,
        enableHaptics: true,
        reduceMotion: false,
        preferredMaterial: "glass",
      };
    }
    
    return preferences;
  },
});

