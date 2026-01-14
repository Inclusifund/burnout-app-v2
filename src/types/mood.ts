/**
 * Mood Types
 * 7 emotional states for the MoodOrb system
 */

export type MoodType = 
  | 'overwhelmed'
  | 'exhausted'
  | 'tired'
  | 'numb'
  | 'okay'
  | 'calm'
  | 'content';

export const MOOD_STATES: MoodType[] = [
  'overwhelmed',
  'exhausted',
  'tired',
  'numb',
  'okay',
  'calm',
  'content',
];

export const MOOD_LABELS: Record<MoodType, string> = {
  overwhelmed: 'Overwhelmed',
  exhausted: 'Exhausted',
  tired: 'Tired',
  numb: 'Numb',
  okay: 'Okay',
  calm: 'Calm',
  content: 'Content',
};

