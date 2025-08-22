# Solar System & Digital Odometer App

A React Native app with Expo that features:
- A solar system animation with Earth and Moon orbiting
- A "hacker"-style digital odometer
- Neon buttons with special effects
- Navigation between screens

## Prerequisites

- Node.js (v16 or higher)
- Expo CLI installed globally (`npm install -g expo-cli`)
- Mobile device with the Expo Go app or configured emulator

## Installation

1. Create a new app:

```shell
npx create-expo-app -t expo-template-blank-typescript SolarSystemApp
cd SolarSystemApp
```

2. Install dependencies:

```shell
npm install @react-navigation/native @react-navigation/native-stack react-native-reanimated react-native-gesture-handler
npx expo install react-native-screens react-native-safe-area-context
```

## Running the App

```shell
npx expo start
```

Scan the QR code with the Expo Go app or run on an emulator.

## Project Structure

```
SolarSystemApp/
├── components/
│   └── NeonButton.tsx
├── screens/
│   ├── HomeScreen.tsx
│   └── SecondScreen.tsx
├── App.tsx
└── package.json
```

## Main Features

### Solar System Screen
- Realistic animation of Earth orbiting the Sun
- Moon orbiting Earth at a different speed
- Neon button for navigation

<img src="https://github.com/user-attachments/assets/12b34eb5-6bd2-4d10-a153-0afbe5e56466" width="300" alt="Solar System">

### Digital Odometer Screen
- 5-digit counter in hacker terminal style
- Smooth number transition animation
- Neon visual effects

<img src="https://github.com/user-attachments/assets/2821d50c-3278-4218-a821-e94e846cbe26" width="300" alt="Digital Odometer">

### NeonButton Component
- Continuous pulsing effect
- Ripple animation on touch
- Neon glow and shadows
- Highly reusable

## Customization

To change the neon theme colors, modify these colors in the styles:

```typescript
const neonColors = {
  primary: '#0aff9d',
  shadow: 'rgba(10, 255, 157, 0.7)',
  ripple: 'rgba(0, 255, 157, 0.5)',
  text: '#ffffff'
};
```

## License

MIT License

## Credits

Developed by *Jean Carlos* using React Native and Expo