/**
 * Burnout App v2 - Typography System
 * Type scale optimized for readability during burnout
 */

export const TYPOGRAPHY = {
  // Font families
  fonts: {
    regular: 'System',      // Use system default for accessibility
    medium: 'System',
    bold: 'System',
  },
  
  // Font sizes (progressive scale)
  sizes: {
    xs: 12,
    sm: 14,
    base: 16,
    lg: 18,
    xl: 24,
    xxl: 32,
    xxxl: 48,
  },
  
  // Line heights (optimized for readability)
  lineHeights: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.75,
    loose: 2,
  },
  
  // Font weights
  weights: {
    regular: '400' as const,
    medium: '500' as const,
    semibold: '600' as const,
    bold: '700' as const,
  },
  
  // Letter spacing
  letterSpacing: {
    tight: -0.5,
    normal: 0,
    wide: 0.5,
    wider: 1,
  },
} as const;

/**
 * Predefined text styles for common use cases
 */
export const TEXT_STYLES = {
  // Headings
  h1: {
    fontSize: TYPOGRAPHY.sizes.xxxl,
    fontWeight: TYPOGRAPHY.weights.bold,
    lineHeight: TYPOGRAPHY.lineHeights.tight,
    letterSpacing: TYPOGRAPHY.letterSpacing.tight,
  },
  
  h2: {
    fontSize: TYPOGRAPHY.sizes.xxl,
    fontWeight: TYPOGRAPHY.weights.bold,
    lineHeight: TYPOGRAPHY.lineHeights.normal,
    letterSpacing: TYPOGRAPHY.letterSpacing.normal,
  },
  
  h3: {
    fontSize: TYPOGRAPHY.sizes.xl,
    fontWeight: TYPOGRAPHY.weights.semibold,
    lineHeight: TYPOGRAPHY.lineHeights.normal,
    letterSpacing: TYPOGRAPHY.letterSpacing.normal,
  },
  
  // Body text
  body: {
    fontSize: TYPOGRAPHY.sizes.base,
    fontWeight: TYPOGRAPHY.weights.regular,
    lineHeight: TYPOGRAPHY.lineHeights.relaxed,
    letterSpacing: TYPOGRAPHY.letterSpacing.normal,
  },
  
  bodyLarge: {
    fontSize: TYPOGRAPHY.sizes.lg,
    fontWeight: TYPOGRAPHY.weights.regular,
    lineHeight: TYPOGRAPHY.lineHeights.relaxed,
    letterSpacing: TYPOGRAPHY.letterSpacing.normal,
  },
  
  // Small text
  caption: {
    fontSize: TYPOGRAPHY.sizes.sm,
    fontWeight: TYPOGRAPHY.weights.regular,
    lineHeight: TYPOGRAPHY.lineHeights.normal,
    letterSpacing: TYPOGRAPHY.letterSpacing.wide,
  },
  
  small: {
    fontSize: TYPOGRAPHY.sizes.xs,
    fontWeight: TYPOGRAPHY.weights.regular,
    lineHeight: TYPOGRAPHY.lineHeights.normal,
    letterSpacing: TYPOGRAPHY.letterSpacing.wide,
  },
  
  // Buttons
  button: {
    fontSize: TYPOGRAPHY.sizes.base,
    fontWeight: TYPOGRAPHY.weights.medium,
    lineHeight: TYPOGRAPHY.lineHeights.tight,
    letterSpacing: TYPOGRAPHY.letterSpacing.wide,
  },
} as const;

/**
 * Get font family based on weight
 */
export function getFontFamily(weight: keyof typeof TYPOGRAPHY.weights = 'regular'): string {
  // In a real app, you might load custom fonts
  // For now, we use system fonts with appropriate weights
  return TYPOGRAPHY.fonts[weight] || TYPOGRAPHY.fonts.regular;
}

