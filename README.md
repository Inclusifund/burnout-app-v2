# Burnout App v2

A sensory-first regulation app for people experiencing burnout.

## Design Philosophy

- **Design-locked**: 9 screens only, 3 material modes (STONE/GLASS/LIQUID)
- **Motion rules**: Everything slows, settles, and stops (except breathing orb)
- **Touch-first**: Primary interactions through touch, not text
- **No gamification**: No streaks, scores, or performance metrics

## Tech Stack

- React Native + Expo
- TypeScript
- React Navigation (Stack)
- Convex (real-time backend)
- Reanimated 3 (animations)
- Expo Blur (glass effects)

## Setup

```bash
# Install dependencies
npm install

# Start development server
npm start

# Run on iOS
npm run ios

# Run on Android
npm run android
```

## Convex Setup

Your Convex deployment URL is already configured in `.env.local`:
```
EXPO_PUBLIC_CONVEX_URL=https://brainy-starling-470.convex.cloud
```

To push schema changes to Convex:
```bash
npx convex dev
```

## Project Structure

```
burnout-app-v2/
├── src/
│   ├── constants/          # Design system (materials, motion, colors, typography)
│   ├── navigation/         # Stack navigator
│   ├── screens/           # 9 design-locked screens
│   ├── components/
│   │   ├── materials/     # BackgroundLayer, GlassCard, StoneCard
│   │   ├── interactive/   # MoodOrb, BreathingOrb (coming soon)
│   │   └── common/        # Button, Text, SafeArea
│   ├── hooks/
│   ├── types/
│   └── utils/
├── convex/
│   ├── schema.ts          # Database schema
│   ├── queries.ts         # Data reads
│   └── mutations.ts       # Data writes
└── App.tsx
```

## Screens (9 Only)

1. **Welcome** (STONE) - First breath
2. **MoodCheckIn** (GLASS) - Orb-based emotional gateway
3. **BreathingExercises** (GLASS) - Primary breathing orb
4. **RestSpace** (STONE) - Safe place to do nothing
5. **ProgressJourney** (GLASS) - Informational only
6. **Words** (STONE) - Scripts and language support
7. **Support** (GLASS) - External blogs, videos, threads
8. **SupportOffers** (GLASS) - Access to care
9. **SettingsSanctuary** (STONE) - Control and consent

## Development Status

✅ **Completed:**
- Project initialization
- Design system constants
- Navigation with 9 screens
- Material components (BackgroundLayer, GlassCard, StoneCard)
- Common components (Button, Text, SafeArea)
- Convex schema and queries/mutations

🚧 **In Progress:**
- Interactive components (MoodOrb, BreathingOrb)
- Convex integration with screens
- Haptics and accessibility

## Critical Rules

1. **Motion must stop** - All animations settle (except breathing orb)
2. **No gamification** - No streaks, scores, badges
3. **Touch-first** - Minimum 44pt touch targets
4. **Material fidelity** - Only STONE/GLASS/LIQUID modes

## License

[To be determined]

