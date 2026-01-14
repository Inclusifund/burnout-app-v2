/**
 * Settings Sanctuary Screen - Control and consent (boring is good)
 * Material: STONE
 */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS, MATERIALS, SPACING, TEXT_STYLES } from '../constants';

export default function SettingsSanctuary() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Settings</Text>
      <Text style={styles.subtitle}>Your space, your control</Text>
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
  },
});

