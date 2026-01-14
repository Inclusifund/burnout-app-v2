/**
 * StoneCard Component
 * Matte beige card for stone material screens
 */

import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { MATERIALS, SPACING, RADIUS } from '../../constants';

interface StoneCardProps {
  children: React.ReactNode;
  variant?: 'small' | 'default' | 'large';
  style?: ViewStyle;
}

export default function StoneCard({ 
  children, 
  variant = 'default',
  style 
}: StoneCardProps) {
  
  return (
    <View style={[
      styles.container,
      styles[variant],
      style,
    ]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: MATERIALS.stone.secondaryBackground,
    borderRadius: RADIUS.MEDIUM,
    padding: SPACING.MD,
  },
  small: {
    minHeight: 80,
    padding: SPACING.SM,
  },
  default: {
    minHeight: 120,
  },
  large: {
    minHeight: 200,
    padding: SPACING.LG,
  },
});

