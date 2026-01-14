/**
 * Breathing Exercises Screen - Primary breathing orb
 * Material: GLASS
 */

import React, { useRef } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS, SPACING, TEXT_STYLES } from '../constants';
import BreathingOrb from '../components/interactive/BreathingOrb';
import { Button } from '../components/common';
import useBreathingState from '../hooks/useBreathingState';
import { useSaveBreathingSession, useConvexUser } from '../hooks/useConvex';

export default function BreathingExercises() {
  const {
    state,
    phase,
    cyclesCompleted,
    duration,
    start,
    pause,
    resume,
    stop,
    reset,
  } = useBreathingState();
  
  const saveSession = useSaveBreathingSession();
  const userId = useConvexUser();
  const sessionStartRef = useRef<number>(0);

  const handleStart = () => {
    sessionStartRef.current = Date.now();
    start();
  };

  const isActive = state === 'breathing';
  const isPaused = state === 'paused';
  const isComplete = state === 'complete';

  const handlePrimaryAction = () => {
    if (state === 'idle') {
      handleStart();
    } else if (state === 'breathing') {
      pause();
    } else if (state === 'paused') {
      resume();
    } else if (state === 'complete') {
      reset();
    }
  };

  const handleStop = async () => {
    stop();
    
    // Save session to Convex
    try {
      await saveSession({
        userId,
        duration,
        cyclesCompleted,
        completed: true,
        startedAt: sessionStartRef.current,
        endedAt: Date.now(),
      });
      console.log('Session saved to Convex');
    } catch (error) {
      console.error('Failed to save session:', error);
    }
  };

  const getPrimaryButtonLabel = () => {
    if (state === 'idle') return 'Start';
    if (state === 'breathing') return 'Pause';
    if (state === 'paused') return 'Resume';
    if (state === 'complete') return 'Start Again';
    return 'Start';
  };

  return (
    <LinearGradient
      colors={COLORS.gradients.teal}
      style={styles.container}
    >
      <Text style={styles.title}>Breathe</Text>
      
      <View style={styles.orbContainer}>
        <BreathingOrb
          phase={phase}
          isActive={isActive}
          size={220}
        />
      </View>

      <View style={styles.stats}>
        <Text style={styles.statsText}>Cycles: {cyclesCompleted}</Text>
        <Text style={styles.statsText}>Duration: {Math.floor(duration / 60)}:{String(duration % 60).padStart(2, '0')}</Text>
      </View>

      <View style={styles.controls}>
        <Button
          title={getPrimaryButtonLabel()}
          onPress={handlePrimaryAction}
          variant="primary"
          style={styles.button}
        />
        
        {(isActive || isPaused) && (
          <Button
            title="Stop"
            onPress={handleStop}
            variant="ghost"
            style={styles.button}
          />
        )}
      </View>

      {isComplete && (
        <Text style={styles.completeText}>Session complete ✓</Text>
      )}
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
  title: {
    ...TEXT_STYLES.h1,
    color: COLORS.glass.text,
    marginBottom: SPACING.XXL,
  },
  orbContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: SPACING.XXL,
  },
  stats: {
    flexDirection: 'row',
    gap: SPACING.LG,
    marginBottom: SPACING.LG,
  },
  statsText: {
    ...TEXT_STYLES.body,
    color: COLORS.glass.textSecondary,
  },
  controls: {
    width: '100%',
    maxWidth: 300,
    gap: SPACING.SM,
  },
  button: {
    width: '100%',
  },
  completeText: {
    ...TEXT_STYLES.bodyLarge,
    color: COLORS.glass.text,
    marginTop: SPACING.MD,
  },
});

