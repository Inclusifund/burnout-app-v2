/**
 * Progress Journey Screen - Informational only, no celebration
 * Material: GLASS
 */

import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS, SPACING, TEXT_STYLES } from '../constants';
import { GlassCard } from '../components/materials';
import { useMoodHistory, useBreathingSessions } from '../hooks/useConvex';

export default function ProgressJourney() {
  const moodHistory = useMoodHistory(10); // Last 10 mood logs
  const breathingSessions = useBreathingSessions(10); // Last 10 sessions

  return (
    <LinearGradient
      colors={COLORS.gradients.dark}
      style={styles.container}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>Your Journey</Text>
        <Text style={styles.subtitle}>Information, not celebration</Text>

        {/* Mood History */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recent Moods</Text>
          {moodHistory && moodHistory.length > 0 ? (
            moodHistory.map((log) => (
              <GlassCard key={log._id} variant="small" style={styles.card}>
                <Text style={styles.cardText}>
                  {log.mood} • {new Date(log.timestamp).toLocaleDateString()}
                </Text>
              </GlassCard>
            ))
          ) : (
            <Text style={styles.emptyText}>No mood logs yet</Text>
          )}
        </View>

        {/* Breathing Sessions */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recent Sessions</Text>
          {breathingSessions && breathingSessions.length > 0 ? (
            breathingSessions.map((session) => (
              <GlassCard key={session._id} variant="small" style={styles.card}>
                <Text style={styles.cardText}>
                  {session.cyclesCompleted} cycles • {Math.floor(session.duration / 60)}m
                </Text>
                <Text style={styles.cardSubtext}>
                  {new Date(session.startedAt).toLocaleDateString()}
                </Text>
              </GlassCard>
            ))
          ) : (
            <Text style={styles.emptyText}>No breathing sessions yet</Text>
          )}
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    padding: SPACING.LG,
  },
  title: {
    ...TEXT_STYLES.h2,
    color: COLORS.glass.text,
    marginBottom: SPACING.XS,
  },
  subtitle: {
    ...TEXT_STYLES.body,
    color: COLORS.glass.textSecondary,
    marginBottom: SPACING.XL,
  },
  section: {
    marginBottom: SPACING.XL,
  },
  sectionTitle: {
    ...TEXT_STYLES.h3,
    color: COLORS.glass.text,
    marginBottom: SPACING.SM,
  },
  card: {
    marginBottom: SPACING.SM,
  },
  cardText: {
    ...TEXT_STYLES.body,
    color: COLORS.glass.text,
  },
  cardSubtext: {
    ...TEXT_STYLES.caption,
    color: COLORS.glass.textSecondary,
    marginTop: SPACING.XXS,
  },
  emptyText: {
    ...TEXT_STYLES.body,
    color: COLORS.glass.textSecondary,
    fontStyle: 'italic',
  },
});

