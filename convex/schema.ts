import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

/**
 * Burnout App v2 - Convex Schema
 * Design-locked database structure for mood tracking, breathing sessions, and user preferences
 */

export default defineSchema({
  // Mood logs - emotional check-ins
  moodLogs: defineTable({
    userId: v.string(),
    mood: v.string(), // overwhelmed, tired, numb, okay, content, etc.
    intensity: v.number(), // 1-5 scale
    notes: v.optional(v.string()),
    timestamp: v.number(),
  }).index("by_user", ["userId"]),

  // Breathing sessions - track breathing exercises
  breathingSessions: defineTable({
    userId: v.string(),
    duration: v.number(), // Total duration in seconds
    cyclesCompleted: v.number(), // Number of breathing cycles completed
    completed: v.boolean(), // Whether session was completed or abandoned
    startedAt: v.number(),
    endedAt: v.optional(v.number()),
  }).index("by_user", ["userId"]),

  // User preferences - settings sanctuary data
  userPreferences: defineTable({
    userId: v.string(),
    enableTransitions: v.boolean(), // Liquid transitions between screens
    enableHaptics: v.boolean(), // Touch feedback
    reduceMotion: v.boolean(), // Accessibility: shorter durations, less blur
    preferredMaterial: v.string(), // User's preferred material mode (if customizable)
  }).index("by_user", ["userId"]),
});

