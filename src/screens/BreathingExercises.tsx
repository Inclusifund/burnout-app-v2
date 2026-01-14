/**
 * Breathing Exercises Screen - Primary breathing orb
 * Material: GLASS
 */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS, SPACING, TEXT_STYLES } from '../constants';

export default function BreathingExercises() {
  return (
    <LinearGradient
      colors={COLORS.gradients.teal}
      style={styles.container}
    >
      <Text style={styles.text}>Breathe</Text>
      <Text style={styles.subtitle}>Breathing orb coming soon</Text>
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
    ...TEXT_STYLES.h1,
    color: COLORS.glass.text,
    marginBottom: SPACING.SM,
  },
  subtitle: {
    ...TEXT_STYLES.body,
    color: COLORS.glass.textSecondary,
  },
});

