/**
 * Text Component
 * Typography component with predefined variants
 */

import React from 'react';
import { Text as RNText, TextProps as RNTextProps, StyleSheet } from 'react-native';
import { TEXT_STYLES } from '../../constants';

interface TextProps extends RNTextProps {
  variant?: 'h1' | 'h2' | 'h3' | 'body' | 'bodyLarge' | 'caption' | 'small' | 'button';
  children: React.ReactNode;
}

export default function Text({ 
  variant = 'body', 
  style,
  children,
  ...props 
}: TextProps) {
  
  return (
    <RNText 
      style={[styles[variant], style]}
      {...props}
    >
      {children}
    </RNText>
  );
}

const styles = StyleSheet.create({
  h1: TEXT_STYLES.h1,
  h2: TEXT_STYLES.h2,
  h3: TEXT_STYLES.h3,
  body: TEXT_STYLES.body,
  bodyLarge: TEXT_STYLES.bodyLarge,
  caption: TEXT_STYLES.caption,
  small: TEXT_STYLES.small,
  button: TEXT_STYLES.button,
});

