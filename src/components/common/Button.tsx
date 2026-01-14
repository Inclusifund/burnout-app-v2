/**
 * Button Component
 * Touch-responsive button with haptic feedback and no-bounce animation
 */

import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import * as Haptics from 'expo-haptics';
import { COLORS, SPACING, RADIUS, TEXT_STYLES, TRANSITIONS } from '../../constants';

interface ButtonProps {
  onPress: () => void;
  title: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  disabled?: boolean;
  hapticFeedback?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export default function Button({
  onPress,
  title,
  variant = 'primary',
  disabled = false,
  hapticFeedback = true,
  style,
  textStyle,
}: ButtonProps) {
  
  const handlePress = () => {
    if (disabled) return;
    
    // Haptic feedback
    if (hapticFeedback) {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    }
    
    onPress();
  };
  
  return (
    <TouchableOpacity
      onPress={handlePress}
      disabled={disabled}
      activeOpacity={0.7}
      style={[
        styles.button,
        styles[variant],
        disabled && styles.disabled,
        style,
      ]}
    >
      <Text style={[
        styles.text,
        styles[`${variant}Text` as const],
        disabled && styles.disabledText,
        textStyle,
      ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: SPACING.LG,
    paddingVertical: SPACING.MD,
    borderRadius: RADIUS.MEDIUM,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 44, // Accessibility: minimum touch target
  },
  
  // Primary: Glass style
  primary: {
    backgroundColor: COLORS.glass.background,
    borderWidth: 1,
    borderColor: COLORS.glass.border,
  },
  
  // Secondary: Stone style
  secondary: {
    backgroundColor: COLORS.stone.secondary,
  },
  
  // Ghost: Transparent
  ghost: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: COLORS.glass.border,
  },
  
  disabled: {
    opacity: 0.4,
  },
  
  text: {
    ...TEXT_STYLES.button,
  },
  
  primaryText: {
    color: COLORS.glass.text,
  },
  
  secondaryText: {
    color: COLORS.stone.text,
  },
  
  ghostText: {
    color: COLORS.glass.text,
  },
  
  disabledText: {
    opacity: 0.5,
  },
});

