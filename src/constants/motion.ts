/**
 * Burnout App v2 - Motion Rules
 * NON-NEGOTIABLE: Motion appears only on transitions or touch, always slows/settles/STOPS
 */

// Duration constants (milliseconds)
export const DURATION = {
  INSTANT: 0,
  FAST: 200,
  NORMAL: 400,
  SLOW: 800,
  VERY_SLOW: 1200,
} as const;

// Breathing cycle timings (exception to "motion must stop" rule)
export const BREATHING = {
  INHALE: 4000,   // 4 seconds in
  HOLD: 2000,     // 2 seconds pause
  EXHALE: 6000,   // 6 seconds out
  TOTAL_CYCLE: 12000, // 12 seconds per complete cycle
} as const;

// Easing functions (Material Design deceleration - no bounce)
export const EASING = {
  // Standard easing: settles smoothly and stops
  EASE_OUT: [0.4, 0, 0.2, 1] as const,
  EASE_IN_OUT: [0.4, 0, 0.6, 1] as const,
  
  // Linear for breathing (consistent pace)
  LINEAR: [0, 0, 1, 1] as const,
} as const;

// Transition configurations
export const TRANSITIONS = {
  // Liquid overlay transitions between screens
  liquidFade: {
    duration: DURATION.SLOW,
    easing: EASING.EASE_IN_OUT,
  },
  
  // Button press scale (touch feedback)
  buttonPress: {
    scale: 0.95,
    duration: DURATION.FAST,
    easing: EASING.EASE_OUT,
  },
  
  // Card entrance animations
  cardEntrance: {
    duration: DURATION.NORMAL,
    easing: EASING.EASE_OUT,
  },
} as const;

// Haptic feedback patterns
export const HAPTICS = {
  LIGHT: 'light' as const,      // Button presses
  MEDIUM: 'medium' as const,    // Mood selection
  HEAVY: 'heavy' as const,      // Rare, significant moments
  SELECTION: 'selection' as const, // Settings toggles
} as const;

// Motion rules (for documentation and linting)
export const MOTION_RULES = {
  // When motion appears
  TRIGGER_ON_TRANSITION: true,
  TRIGGER_ON_TOUCH: true,
  TRIGGER_CONTINUOUS: false, // Exception: BreathingOrb only
  
  // How motion behaves
  MUST_SLOW: true,
  MUST_SETTLE: true,
  MUST_STOP: true,
  
  // What's forbidden
  NO_BOUNCE: true,
  NO_INFINITE_LOOPS: true, // Exception: BreathingOrb
  NO_GAMIFICATION: true,
  
  // Accessibility
  RESPECT_REDUCED_MOTION: true,
} as const;

// Reduced motion overrides (accessibility)
export const REDUCED_MOTION = {
  DURATION_MULTIPLIER: 0.5, // Halve all durations
  DISABLE_BLUR: true,        // Remove blur effects
  DISABLE_TRANSITIONS: false, // Keep transitions, just faster
} as const;

