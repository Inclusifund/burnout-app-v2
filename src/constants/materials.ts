/**
 * Burnout App v2 - Material System
 * Design-locked: STONE, GLASS, and LIQUID materials only
 */

export type MaterialMode = 'stone' | 'glass' | 'liquid';

export const MATERIALS = {
  // STONE - Grounding, matte, tactile
  // Used for: Rest Space, Words, Settings Sanctuary
  stone: {
    background: '#E8E4DF', // warm beige
    secondaryBackground: '#D4CFC7', // slightly darker beige
    texture: 'matte' as const,
    blur: 0,
    shadow: 'none' as const,
  },
  
  // GLASS - Frosted clarity, over gradients
  // Used for: Mood Check-in, Breathing, Support, Support Offers, Progress
  glass: {
    background: 'rgba(255, 255, 255, 0.1)', // frosted white
    border: 'rgba(255, 255, 255, 0.2)',
    blur: 20, // BlurView intensity
    borderRadius: 24,
    shadow: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.1,
      shadowRadius: 12,
      elevation: 8, // Android
    },
  },
  
  // LIQUID - Blurred gradients, transitions only
  // Used for: Transition overlays, special experiential moments
  liquid: {
    colors: ['#C5B8E0', '#7FB3B8'], // lilac to teal
    blur: 15,
    opacity: 0.8,
  },
} as const;

// Border radius constants
export const RADIUS = {
  SMALL: 12,
  MEDIUM: 24,
  LARGE: 32,
  ROUND: 9999,
} as const;

// Spacing scale (8pt grid system)
export const SPACING = {
  XXS: 4,
  XS: 8,
  SM: 16,
  MD: 24,
  LG: 32,
  XL: 48,
  XXL: 64,
  XXXL: 96,
} as const;

// Opacity levels
export const OPACITY = {
  INVISIBLE: 0,
  FAINT: 0.1,
  SUBTLE: 0.2,
  MEDIUM: 0.5,
  STRONG: 0.8,
  OPAQUE: 1,
} as const;

