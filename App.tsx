/**
 * Burnout App v2 — Main Entry Point
 * Design-locked, sensory-first regulation app
 */

import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import { ConvexProvider, ConvexReactClient } from 'convex/react';
import RootNavigator from './src/navigation/RootNavigator';

// Initialize Convex client with validation
const convexUrl = process.env.EXPO_PUBLIC_CONVEX_URL;

if (!convexUrl) {
  console.error(
    'EXPO_PUBLIC_CONVEX_URL is not set. Please create a .env.local file with your Convex deployment URL.'
  );
}

const convex = convexUrl ? new ConvexReactClient(convexUrl) : null;

export default function App() {
  // Show error screen if Convex URL is missing
  if (!convex) {
    return (
      <View style={[styles.container, styles.errorContainer]}>
        <Text style={styles.errorTitle}>Configuration Error</Text>
        <Text style={styles.errorText}>
          Missing Convex deployment URL.{'\n\n'}
          Please create a .env.local file with:{'\n'}
          EXPO_PUBLIC_CONVEX_URL=your-deployment-url
        </Text>
      </View>
    );
  }

  return (
    <ConvexProvider client={convex}>
      <GestureHandlerRootView style={styles.container}>
        <NavigationContainer>
          <StatusBar style="auto" />
          <RootNavigator />
        </NavigationContainer>
      </GestureHandlerRootView>
    </ConvexProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  errorContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#E8E4DF',
  },
  errorTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4A4A4A',
    marginBottom: 16,
  },
  errorText: {
    fontSize: 16,
    color: '#6B6B6B',
    textAlign: 'center',
    lineHeight: 24,
  },
});
