/**
 * BackgroundLayer Component
 * Renders appropriate background for STONE/GLASS/LIQUID material modes
 */

import React from 'react';
import { View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialMode, MATERIALS, COLORS } from '../../constants';

interface BackgroundLayerProps {
  material: MaterialMode;
  variant?: 'dark' | 'lilac' | 'teal'; // For glass backgrounds
  children?: React.ReactNode;
}

export default function BackgroundLayer({ 
  material, 
  variant = 'dark',
  children 
}: BackgroundLayerProps) {
  
  // STONE: Solid beige background
  if (material === 'stone') {
    return (
      <View style={[styles.container, { backgroundColor: MATERIALS.stone.background }]}>
        {children}
      </View>
    );
  }
  
  // GLASS: Gradient background
  if (material === 'glass') {
    const gradientColors = COLORS.gradients[variant];
    return (
      <LinearGradient
        colors={gradientColors}
        style={styles.container}
      >
        {children}
      </LinearGradient>
    );
  }
  
  // LIQUID: Lilac to teal gradient (for transitions)
  if (material === 'liquid') {
    return (
      <LinearGradient
        colors={MATERIALS.liquid.colors}
        style={styles.container}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        {children}
      </LinearGradient>
    );
  }
  
  // Fallback
  return (
    <View style={[styles.container, { backgroundColor: MATERIALS.stone.background }]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

