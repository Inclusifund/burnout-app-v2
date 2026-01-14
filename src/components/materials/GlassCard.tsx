/**
 * GlassCard Component
 * Frosted glass card with blur effect for glass material screens
 */

import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { BlurView } from 'expo-blur';
import { MATERIALS, SPACING } from '../../constants';

interface GlassCardProps {
  children: React.ReactNode;
  variant?: 'small' | 'default' | 'large';
  style?: ViewStyle;
  intensity?: number; // Blur intensity override
}

export default function GlassCard({ 
  children, 
  variant = 'default',
  style,
  intensity 
}: GlassCardProps) {
  
  const blurIntensity = intensity ?? MATERIALS.glass.blur;
  
  return (
    <View style={[
      styles.container,
      styles[variant],
      MATERIALS.glass.shadow,
      style,
    ]}>
      <BlurView
        intensity={blurIntensity}
        tint="light"
        style={styles.blur}
      >
        <View style={styles.content}>
          {children}
        </View>
      </BlurView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: MATERIALS.glass.borderRadius,
    overflow: 'hidden',
    backgroundColor: MATERIALS.glass.background,
    borderWidth: 1,
    borderColor: MATERIALS.glass.border,
  },
  blur: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: SPACING.MD,
  },
  small: {
    minHeight: 80,
  },
  default: {
    minHeight: 120,
  },
  large: {
    minHeight: 200,
  },
});

