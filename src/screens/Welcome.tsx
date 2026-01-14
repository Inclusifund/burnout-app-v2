/**
 * Welcome Screen - First breath, minimal text
 * Material: STONE
 */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS, MATERIALS, SPACING, TEXT_STYLES } from '../constants';

export default function Welcome() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Take a breath</Text>
      <Text style={styles.subtitle}>Welcome to your space</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: MATERIALS.stone.background,
    justifyContent: 'center',
    alignItems: 'center',
    padding: SPACING.LG,
  },
  text: {
    ...TEXT_STYLES.h1,
    color: COLORS.stone.text,
    marginBottom: SPACING.SM,
  },
  subtitle: {
    ...TEXT_STYLES.body,
    color: COLORS.stone.textSecondary,
  },
});

