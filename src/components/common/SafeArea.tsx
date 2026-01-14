/**
 * SafeArea Component
 * Wrapper for safe area context with material-aware backgrounds
 */

import React from 'react';
import { StyleSheet, ViewStyle } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialMode, MATERIALS } from '../../constants';

interface SafeAreaProps {
  children: React.ReactNode;
  material?: MaterialMode;
  style?: ViewStyle;
}

export default function SafeArea({ 
  children, 
  material = 'stone',
  style 
}: SafeAreaProps) {
  
  const backgroundColor = material === 'stone' 
    ? MATERIALS.stone.background 
    : 'transparent';
  
  return (
    <SafeAreaView style={[styles.container, { backgroundColor }, style]}>
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

