/**
 * Mood Check-in Screen - Emotional gateway with orb-based selection
 * Material: GLASS
 */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS, SPACING, TEXT_STYLES } from '../constants';

export default function MoodCheckIn() {
  return (
    <LinearGradient
      colors={COLORS.gradients.lilac}
      style={styles.container}
    >
      <Text style={styles.text}>How are you feeling?</Text>
      <Text style={styles.subtitle}>Touch-first mood selection coming soon</Text>
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

