/**
 * Mood Check-in Screen - Emotional gateway with orb-based selection
 * Material: GLASS
 */

import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS, SPACING, TEXT_STYLES } from '../constants';
import { MoodOrb } from '../components/interactive';
import { Button } from '../components/common';
import { MoodType, MOOD_STATES, MOOD_LABELS } from '../types/mood';
import { useLogMood, useConvexUser } from '../hooks/useConvex';

export default function MoodCheckIn() {
  const [selectedMood, setSelectedMood] = useState<MoodType | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const logMood = useLogMood();
  const userId = useConvexUser();

  const handleMoodSelect = (mood: MoodType) => {
    setSelectedMood(mood);
  };

  const handleContinue = async () => {
    if (!selectedMood || isSaving) return;
    
    try {
      setIsSaving(true);
      
      // Save to Convex
      await logMood({
        userId,
        mood: selectedMood,
        intensity: 3, // Default intensity (could add slider later)
        notes: undefined,
      });
      
      Alert.alert('Saved', 'Your mood has been logged', [
        { text: 'OK', onPress: () => setSelectedMood(null) }
      ]);
    } catch (error) {
      console.error('Failed to save mood:', error);
      Alert.alert('Error', 'Failed to save mood. Please try again.');
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <LinearGradient
      colors={COLORS.gradients.lilac}
      style={styles.container}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>How are you feeling?</Text>
        <Text style={styles.subtitle}>Touch what resonates</Text>

        <View style={styles.orbGrid}>
          {MOOD_STATES.map((mood) => (
            <MoodOrb
              key={mood}
              mood={mood}
              label={MOOD_LABELS[mood]}
              isSelected={selectedMood === mood}
              onPress={handleMoodSelect}
            />
          ))}
        </View>

        {selectedMood && (
          <View style={styles.buttonContainer}>
            <Button
              title={isSaving ? "Saving..." : "Save"}
              onPress={handleContinue}
              variant="primary"
              disabled={isSaving}
            />
          </View>
        )}
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: SPACING.LG,
  },
  title: {
    ...TEXT_STYLES.h2,
    color: COLORS.glass.text,
    marginBottom: SPACING.XS,
    textAlign: 'center',
  },
  subtitle: {
    ...TEXT_STYLES.body,
    color: COLORS.glass.textSecondary,
    marginBottom: SPACING.XL,
    textAlign: 'center',
  },
  orbGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: SPACING.MD,
    maxWidth: 400,
  },
  buttonContainer: {
    marginTop: SPACING.XL,
    width: '100%',
    maxWidth: 300,
  },
});

