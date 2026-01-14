/**
 * Settings Sanctuary Screen - Control and consent (boring is good)
 * Material: STONE
 */

import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Switch, ScrollView } from 'react-native';
import { COLORS, MATERIALS, SPACING, TEXT_STYLES } from '../constants';
import { StoneCard } from '../components/materials';
import { useUserPreferences, useUpdatePreferences, useConvexUser } from '../hooks/useConvex';

export default function SettingsSanctuary() {
  const preferences = useUserPreferences();
  const updatePreferences = useUpdatePreferences();
  const userId = useConvexUser();

  const [enableTransitions, setEnableTransitions] = useState(true);
  const [enableHaptics, setEnableHaptics] = useState(true);
  const [reduceMotion, setReduceMotion] = useState(false);

  // Load preferences from Convex
  useEffect(() => {
    if (preferences) {
      setEnableTransitions(preferences.enableTransitions);
      setEnableHaptics(preferences.enableHaptics);
      setReduceMotion(preferences.reduceMotion);
    }
  }, [preferences]);

  const handleToggle = async (
    key: 'enableTransitions' | 'enableHaptics' | 'reduceMotion',
    value: boolean
  ) => {
    // Update local state immediately
    if (key === 'enableTransitions') setEnableTransitions(value);
    if (key === 'enableHaptics') setEnableHaptics(value);
    if (key === 'reduceMotion') setReduceMotion(value);

    // Save to Convex
    try {
      await updatePreferences({
        userId,
        [key]: value,
      });
    } catch (error) {
      console.error('Failed to update preferences:', error);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>Settings</Text>
        <Text style={styles.subtitle}>Your space, your control</Text>

        <StoneCard style={styles.card}>
          <View style={styles.setting}>
            <View style={styles.settingText}>
              <Text style={styles.settingTitle}>Transitions</Text>
              <Text style={styles.settingDescription}>
                Liquid material transitions between screens
              </Text>
            </View>
            <Switch
              value={enableTransitions}
              onValueChange={(value) => handleToggle('enableTransitions', value)}
              trackColor={{ false: COLORS.stone.secondary, true: COLORS.liquid.teal }}
            />
          </View>
        </StoneCard>

        <StoneCard style={styles.card}>
          <View style={styles.setting}>
            <View style={styles.settingText}>
              <Text style={styles.settingTitle}>Haptic Feedback</Text>
              <Text style={styles.settingDescription}>
                Gentle vibrations on touch
              </Text>
            </View>
            <Switch
              value={enableHaptics}
              onValueChange={(value) => handleToggle('enableHaptics', value)}
              trackColor={{ false: COLORS.stone.secondary, true: COLORS.liquid.teal }}
            />
          </View>
        </StoneCard>

        <StoneCard style={styles.card}>
          <View style={styles.setting}>
            <View style={styles.settingText}>
              <Text style={styles.settingTitle}>Reduce Motion</Text>
              <Text style={styles.settingDescription}>
                Shorter animations, less blur (accessibility)
              </Text>
            </View>
            <Switch
              value={reduceMotion}
              onValueChange={(value) => handleToggle('reduceMotion', value)}
              trackColor={{ false: COLORS.stone.secondary, true: COLORS.liquid.teal }}
            />
          </View>
        </StoneCard>

        <Text style={styles.footer}>
          Boring settings are good settings. Clear, simple, respectful.
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: MATERIALS.stone.background,
  },
  scrollContent: {
    padding: SPACING.LG,
  },
  title: {
    ...TEXT_STYLES.h2,
    color: COLORS.stone.text,
    marginBottom: SPACING.XS,
  },
  subtitle: {
    ...TEXT_STYLES.body,
    color: COLORS.stone.textSecondary,
    marginBottom: SPACING.XL,
  },
  card: {
    marginBottom: SPACING.MD,
  },
  setting: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  settingText: {
    flex: 1,
    marginRight: SPACING.MD,
  },
  settingTitle: {
    ...TEXT_STYLES.bodyLarge,
    color: COLORS.stone.text,
    marginBottom: SPACING.XXS,
  },
  settingDescription: {
    ...TEXT_STYLES.caption,
    color: COLORS.stone.textSecondary,
  },
  footer: {
    ...TEXT_STYLES.caption,
    color: COLORS.stone.textSecondary,
    textAlign: 'center',
    marginTop: SPACING.XL,
    fontStyle: 'italic',
  },
});

