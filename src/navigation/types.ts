/**
 * Burnout App v2 - Navigation Types
 * Type-safe navigation for all 9 design-locked screens
 */

import { MaterialMode } from '../constants';

export type RootStackParamList = {
  Welcome: undefined;
  MoodCheckIn: undefined;
  BreathingExercises: undefined;
  RestSpace: undefined;
  ProgressJourney: undefined;
  Words: undefined;
  Support: undefined;
  SupportOffers: undefined;
  SettingsSanctuary: undefined;
};

export type ScreenName = keyof RootStackParamList;

/**
 * Screen metadata - maps each screen to its material mode
 */
export const SCREEN_MATERIALS: Record<ScreenName, MaterialMode> = {
  Welcome: 'stone',
  MoodCheckIn: 'glass',
  BreathingExercises: 'glass',
  RestSpace: 'stone',
  ProgressJourney: 'glass',
  Words: 'stone',
  Support: 'glass',
  SupportOffers: 'glass',
  SettingsSanctuary: 'stone',
};

