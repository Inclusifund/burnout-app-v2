/**
 * Burnout App v2 - Root Navigator
 * Stack navigation for all 9 design-locked screens
 */

import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { DURATION } from '../constants';
import { RootStackParamList } from './types';

// Import all screens
import Welcome from '../screens/Welcome';
import MoodCheckIn from '../screens/MoodCheckIn';
import BreathingExercises from '../screens/BreathingExercises';
import RestSpace from '../screens/RestSpace';
import ProgressJourney from '../screens/ProgressJourney';
import Words from '../screens/Words';
import Support from '../screens/Support';
import SupportOffers from '../screens/SupportOffers';
import SettingsSanctuary from '../screens/SettingsSanctuary';

const Stack = createStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{
        headerShown: false, // No headers (touch-first design)
        gestureEnabled: true,
        ...TransitionPresets.SlideFromRightIOS,
        transitionSpec: {
          open: {
            animation: 'timing',
            config: {
              duration: DURATION.NORMAL,
            },
          },
          close: {
            animation: 'timing',
            config: {
              duration: DURATION.NORMAL,
            },
          },
        },
      }}
    >
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="MoodCheckIn" component={MoodCheckIn} />
      <Stack.Screen name="BreathingExercises" component={BreathingExercises} />
      <Stack.Screen name="RestSpace" component={RestSpace} />
      <Stack.Screen name="ProgressJourney" component={ProgressJourney} />
      <Stack.Screen name="Words" component={Words} />
      <Stack.Screen name="Support" component={Support} />
      <Stack.Screen name="SupportOffers" component={SupportOffers} />
      <Stack.Screen name="SettingsSanctuary" component={SettingsSanctuary} />
    </Stack.Navigator>
  );
}

