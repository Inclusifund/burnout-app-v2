/**
 * Support Screen - External blogs, videos, threads
 * Material: GLASS
 */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS, SPACING, TEXT_STYLES } from '../constants';

export default function Support() {
  return (
    <LinearGradient
      colors={COLORS.gradients.dark}
      style={styles.container}
    >
      <Text style={styles.text}>Support</Text>
      <Text style={styles.subtitle}>Curated resources and community</Text>
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

