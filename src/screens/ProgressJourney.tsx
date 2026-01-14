/**
 * Progress Journey Screen - Informational only, no celebration
 * Material: GLASS
 */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS, SPACING, TEXT_STYLES } from '../constants';

export default function ProgressJourney() {
  return (
    <LinearGradient
      colors={COLORS.gradients.dark}
      style={styles.container}
    >
      <Text style={styles.text}>Your Journey</Text>
      <Text style={styles.subtitle}>Convex integration coming soon</Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: SPACING.LG,
  },
  text: {
    ...TEXT_STYLES.h2,
    color: COLORS.glass.text,
    marginBottom: SPACING.SM,
  },
  subtitle: {
    ...TEXT_STYLES.body,
    color: COLORS.glass.textSecondary,
  },
});

