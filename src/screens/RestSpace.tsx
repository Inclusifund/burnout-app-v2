/**
 * Rest Space Screen - Safe place to do nothing
 * Material: STONE
 */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS, MATERIALS, SPACING, TEXT_STYLES } from '../constants';

export default function RestSpace() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>It's okay to rest</Text>
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
  },
});

