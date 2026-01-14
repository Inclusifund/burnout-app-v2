/**
 * MoodOrb Component
 * Touch-first mood selection with 7 emotional states
 * Design rule: Animation settles and stops after selection
 */

import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import * as Haptics from 'expo-haptics';
import { MoodType } from '../../types/mood';
import { getMoodColor, SPACING, TEXT_STYLES, DURATION } from '../../constants';

interface MoodOrbProps {
  mood: MoodType;
  label: string;
  isSelected: boolean;
  onPress: (mood: MoodType) => void;
  size?: number;
}

export default function MoodOrb({
  mood,
  label,
  isSelected,
  onPress,
  size = 80,
}: MoodOrbProps) {
  
  const scale = useSharedValue(1);
  const opacity = useSharedValue(isSelected ? 1 : 0.7);
  
  const handlePressIn = () => {
    // Scale down on press (no bounce - settles at 0.9)
    scale.value = withTiming(0.9, { duration: DURATION.FAST });
  };
  
  const handlePressOut = () => {
    // Scale back to normal or selected size
    const targetScale = isSelected ? 1.1 : 1;
    scale.value = withSpring(targetScale, {
      damping: 15,
      stiffness: 150,
    });
  };
  
  const handlePress = () => {
    // Haptic feedback
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    
    // Update opacity
    opacity.value = withTiming(1, { duration: DURATION.FAST });
    
    onPress(mood);
  };
  
  // Animated style
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
    opacity: opacity.value,
  }));
  
  const moodColor = getMoodColor(mood);
  
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        onPress={handlePress}
        activeOpacity={0.9}
      >
        <Animated.View
          style={[
            styles.orb,
            {
              width: size,
              height: size,
              borderRadius: size / 2,
              backgroundColor: moodColor,
            },
            isSelected && styles.selected,
            animatedStyle,
          ]}
        />
      </TouchableOpacity>
      <Text style={[styles.label, isSelected && styles.selectedLabel]}>
        {label}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: SPACING.SM,
  },
  orb: {
    // Shadow for depth
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  selected: {
    shadowOpacity: 0.5,
    shadowRadius: 12,
    elevation: 12,
  },
  label: {
    ...TEXT_STYLES.caption,
    color: 'rgba(255, 255, 255, 0.7)',
    marginTop: SPACING.XS,
    textAlign: 'center',
  },
  selectedLabel: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
});

