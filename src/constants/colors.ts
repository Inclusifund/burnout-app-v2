/**
 * Burnout App v2 - Color Palette
 * Design-locked color system for stone, glass, liquid, and mood states
 */

export const COLORS = {
  // Stone colors (warm, grounding)
  stone: {
    primary: '#E8E4DF',      // warm beige background
    secondary: '#D4CFC7',    // darker beige
    text: '#4A4A4A',         // dark grey for readability
    textSecondary: '#6B6B6B', // medium grey
  },
  
  // Glass colors (frosted, transparent)
  glass: {
    background: 'rgba(255, 255, 255, 0.1)', // frosted white
    border: 'rgba(255, 255, 255, 0.2)',     // subtle border
    text: '#FFFFFF',                         // white text
    textSecondary: 'rgba(255, 255, 255, 0.7)', // dimmed white
  },
  
  // Liquid colors (gradient transitions)
  liquid: {
    lilac: '#C5B8E0',  // soft purple
    teal: '#7FB3B8',   // soft teal
  },
  
  // Mood colors (emotional states)
  mood: {
    overwhelmed: '#B85C5C',  // muted red
    exhausted: '#A88B8B',    // dusty rose
    tired: '#8B8EA5',        // soft blue-grey
    numb: '#9CA3A8',         // neutral grey
    okay: '#A3B8A0',         // soft sage
    calm: '#8FAAA3',         // muted teal
    content: '#7FB3B8',      // teal (matches liquid)
  },
  
  // Background gradients for glass screens
  gradients: {
    dark: ['#1A1A1A', '#2D2D2D'],      // subtle dark gradient
    lilac: ['#3D3552', '#2A2A3D'],     // purple-tinted dark
    teal: ['#2A3D3D', '#1F2E2E'],      // teal-tinted dark
  },
  
  // Utility colors
  black: '#000000',
  white: '#FFFFFF',
  error: '#D64545',      // error/warning red
  success: '#6B9E6B',    // success green
  transparent: 'transparent',
} as const;

/**
 * Get mood color by mood string
 */
export function getMoodColor(mood: string): string {
  const moodKey = mood.toLowerCase() as keyof typeof COLORS.mood;
  return COLORS.mood[moodKey] || COLORS.mood.okay;
}

/**
 * Get gradient colors for a specific material background
 */
export function getGradientForMaterial(variant: 'dark' | 'lilac' | 'teal' = 'dark'): string[] {
  return COLORS.gradients[variant];
}

