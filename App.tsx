/**
 * Burnout App v2 — Main Entry Point
 * Design-locked, sensory-first regulation app
 */

import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import { ConvexProvider, ConvexReactClient } from 'convex/react';
import RootNavigator from './src/navigation/RootNavigator';

// Initialize Convex client
const convexUrl = process.env.EXPO_PUBLIC_CONVEX_URL!;
const convex = new ConvexReactClient(convexUrl);

export default function App() {
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
});
