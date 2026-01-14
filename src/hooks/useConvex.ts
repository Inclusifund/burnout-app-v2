/**
 * useConvex Hook
 * Simplified wrapper for Convex queries and mutations
 * Uses a mock user ID for MVP (replace with real auth later)
 */

import { useQuery, useMutation } from 'convex/react';
import { api } from '../../convex/_generated/api';

// Mock user ID for MVP (replace with real auth in Phase 2)
export const MOCK_USER_ID = 'user_mvp_001';

export function useConvexUser() {
  return MOCK_USER_ID;
}

// Mood hooks
export function useMoodHistory(limit?: number) {
  const userId = useConvexUser();
  return useQuery(api.queries.getMoodHistory, { userId, limit });
}

export function useLogMood() {
  return useMutation(api.mutations.logMood);
}

// Breathing hooks
export function useBreathingSessions(limit?: number) {
  const userId = useConvexUser();
  return useQuery(api.queries.getBreathingSessions, { userId, limit });
}

export function useSaveBreathingSession() {
  return useMutation(api.mutations.saveBreathingSession);
}

// Preferences hooks
export function useUserPreferences() {
  const userId = useConvexUser();
  return useQuery(api.queries.getUserPreferences, { userId });
}

export function useUpdatePreferences() {
  return useMutation(api.mutations.updatePreferences);
}

