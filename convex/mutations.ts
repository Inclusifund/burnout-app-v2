import { mutation } from "./_generated/server";
import { v } from "convex/values";

/**
 * Burnout App v2 - Convex Mutations
 * Write operations for saving mood logs, breathing sessions, and preferences
 */

// Log a mood check-in (from MoodCheckIn screen)
export const logMood = mutation({
  args: {
    userId: v.string(),
    mood: v.string(),
    intensity: v.number(),
    notes: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const moodId = await ctx.db.insert("moodLogs", {
      userId: args.userId,
      mood: args.mood,
      intensity: args.intensity,
      notes: args.notes,
      timestamp: Date.now(),
    });
    
    return moodId;
  },
});

// Save a breathing session (from BreathingExercises screen)
export const saveBreathingSession = mutation({
  args: {
    userId: v.string(),
    duration: v.number(),
    cyclesCompleted: v.number(),
    completed: v.boolean(),
    startedAt: v.number(),
    endedAt: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    const sessionId = await ctx.db.insert("breathingSessions", {
      userId: args.userId,
      duration: args.duration,
      cyclesCompleted: args.cyclesCompleted,
      completed: args.completed,
      startedAt: args.startedAt,
      endedAt: args.endedAt ?? Date.now(),
    });
    
    return sessionId;
  },
});

// Update user preferences (from SettingsSanctuary screen)
export const updatePreferences = mutation({
  args: {
    userId: v.string(),
    enableTransitions: v.optional(v.boolean()),
    enableHaptics: v.optional(v.boolean()),
    reduceMotion: v.optional(v.boolean()),
    preferredMaterial: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    // Check if preferences already exist
    const existing = await ctx.db
      .query("userPreferences")
      .withIndex("by_user", (q) => q.eq("userId", args.userId))
      .first();
    
    if (existing) {
      // Update existing preferences
      await ctx.db.patch(existing._id, {
        enableTransitions: args.enableTransitions ?? existing.enableTransitions,
        enableHaptics: args.enableHaptics ?? existing.enableHaptics,
        reduceMotion: args.reduceMotion ?? existing.reduceMotion,
        preferredMaterial: args.preferredMaterial ?? existing.preferredMaterial,
      });
      return existing._id;
    } else {
      // Create new preferences with defaults
      const preferencesId = await ctx.db.insert("userPreferences", {
        userId: args.userId,
        enableTransitions: args.enableTransitions ?? true,
        enableHaptics: args.enableHaptics ?? true,
        reduceMotion: args.reduceMotion ?? false,
        preferredMaterial: args.preferredMaterial ?? "glass",
      });
      return preferencesId;
    }
  },
});

