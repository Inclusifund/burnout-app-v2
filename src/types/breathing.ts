/**
 * Breathing Types
 * State machine for breathing exercises
 */

export type BreathingPhase = 'inhale' | 'hold' | 'exhale';

export type BreathingState = 'idle' | 'breathing' | 'paused' | 'complete';

export interface BreathingSession {
  state: BreathingState;
  phase: BreathingPhase;
  cyclesCompleted: number;
  totalDuration: number; // in seconds
  startedAt?: number;
}

