/**
 * Words Screen - Scripts and language support
 * Material: STONE
 */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS, MATERIALS, SPACING, TEXT_STYLES } from '../constants';

export default function Words() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Words</Text>
      <Text style={styles.subtitle}>Communication scripts for difficult conversations</Text>
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
    ...TEXT_STYLES.h2,
    color: COLORS.stone.text,
    marginBottom: SPACING.SM,
  },
  subtitle: {
    ...TEXT_STYLES.body,
    color: COLORS.stone.textSecondary,
    textAlign: 'center',
  },
});

