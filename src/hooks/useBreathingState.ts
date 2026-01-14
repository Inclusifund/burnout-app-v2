/**
 * useBreathingState Hook
 * Manages breathing cycle state machine
 */

import { useState, useEffect, useRef } from 'react';
import { BreathingPhase, BreathingState } from '../types/breathing';
import { BREATHING } from '../constants';

export default function useBreathingState() {
  const [state, setState] = useState<BreathingState>('idle');
  const [phase, setPhase] = useState<BreathingPhase>('inhale');
  const [cyclesCompleted, setCyclesCompleted] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const startTimeRef = useRef<number>(0);
  const lastCycleCountRef = useRef<number>(0); // Track last counted cycle to prevent duplicates

  const start = () => {
    setState('breathing');
    setPhase('inhale');
    startTimeRef.current = Date.now();
    lastCycleCountRef.current = 0; // Reset cycle tracking
  };

  const pause = () => {
    setState('paused');
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const resume = () => {
    setState('breathing');
  };

  const stop = () => {
    setState('complete');
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const reset = () => {
    setState('idle');
    setPhase('inhale');
    setCyclesCompleted(0);
    lastCycleCountRef.current = 0; // Reset cycle tracking
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  // Breathing cycle management
  useEffect(() => {
    if (state !== 'breathing') return;

    const cycleDuration = BREATHING.TOTAL_CYCLE;
    const startTime = Date.now();

    intervalRef.current = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const cyclePosition = elapsed % cycleDuration;

      if (cyclePosition < BREATHING.INHALE) {
        setPhase('inhale');
      } else if (cyclePosition < BREATHING.INHALE + BREATHING.HOLD) {
        setPhase('hold');
      } else {
        setPhase('exhale');
      }

      // Complete cycle check - use floor division to count completed cycles
      // This prevents multiple increments within the same cycle
      const currentCycleCount = Math.floor(elapsed / cycleDuration);
      
      // Only increment if we've entered a new cycle
      if (currentCycleCount > lastCycleCountRef.current) {
        lastCycleCountRef.current = currentCycleCount;
        setCyclesCompleted(currentCycleCount);
      }
    }, 100); // Check every 100ms

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [state]);

  const duration = startTimeRef.current > 0
    ? Math.floor((Date.now() - startTimeRef.current) / 1000)
    : 0;

  return {
    state,
    phase,
    cyclesCompleted,
    duration,
    start,
    pause,
    resume,
    stop,
    reset,
  };
}

