/**
 * BreathingOrb Component
 * Animated breathing guide - THE ONLY component allowed continuous animation
 * Breathing cycle: 4s inhale → 2s hold → 6s exhale
 */

import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  withSequence,
  withRepeat,
  Easing,
} from 'react-native-reanimated';
import { BreathingPhase } from '../../types/breathing';
import { BREATHING, COLORS, SPACING, TEXT_STYLES } from '../../constants';

interface BreathingOrbProps {
  phase: BreathingPhase;
  isActive: boolean;
  size?: number;
}

export default function BreathingOrb({
  phase,
  isActive,
  size = 200,
}: BreathingOrbProps) {
  
  const scale = useSharedValue(1);
  const opacity = useSharedValue(0.6);

  useEffect(() => {
    if (!isActive) {
      scale.value = withTiming(1, { duration: 400 });
      opacity.value = withTiming(0.6, { duration: 400 });
      return;
    }

    // Continuous breathing animation cycle
    scale.value = withRepeat(
      withSequence(
        // Inhale: expand to 1.3
        withTiming(1.3, {
          duration: BREATHING.INHALE,
          easing: Easing.inOut(Easing.ease),
        }),
        // Hold: stay at 1.3
        withTiming(1.3, {
          duration: BREATHING.HOLD,
        }),
        // Exhale: contract to 0.8
        withTiming(0.8, {
          duration: BREATHING.EXHALE,
          easing: Easing.inOut(Easing.ease),
        })
      ),
      -1, // Infinite repeat (EXCEPTION to "motion must stop" rule)
      false
    );

    // Pulse opacity
    opacity.value = withRepeat(
      withSequence(
        withTiming(1, { duration: BREATHING.INHALE }),
        withTiming(0.8, { duration: BREATHING.HOLD }),
        withTiming(0.6, { duration: BREATHING.EXHALE })
      ),
      -1,
      false
    );
  }, [isActive]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
    opacity: opacity.value,
  }));

  const phaseText = {
    inhale: 'Breathe in',
    hold: 'Hold',
    exhale: 'Breathe out',
  };

  const phaseColor = {
    inhale: COLORS.liquid.teal,
    hold: COLORS.liquid.lilac,
    exhale: COLORS.mood.calm,
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.orb,
          {
            width: size,
            height: size,
            borderRadius: size / 2,
            backgroundColor: phaseColor[phase],
          },
          animatedStyle,
        ]}
      />
      
      {isActive && (
        <View style={styles.textContainer}>
          <Text style={styles.phaseText}>{phaseText[phase]}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  orb: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 16,
    elevation: 16,
  },
  textContainer: {
    position: 'absolute',
    bottom: -60,
  },
  phaseText: {
    ...TEXT_STYLES.h3,
    color: COLORS.glass.text,
    textAlign: 'center',
  },
});

