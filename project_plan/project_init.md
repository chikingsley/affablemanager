# Project Initialization

## Project Setup

### 1. Environment Setup
```bash
# Install Expo CLI globally
npm install -g expo-cli

# Create new Expo project
expo init AffableManager
cd AffableManager

# Install core dependencies
npx expo install react-native-reanimated react-native-gesture-handler react-native-safe-area-context

# Install UI frameworks
npm install tamagui @tamagui/core @tamagui/config
npm install react-native-ui-lib

# Install Supabase
npm install @supabase/supabase-js
```

### 2. Project Structure
```
AffableManager/
├── app/                    # App entry points
├── src/
│   ├── components/         # Reusable components
│   │   ├── common/        # Shared components
│   │   ├── deals/         # Deal-specific components
│   │   ├── leads/         # Lead management components
│   │   └── finance/       # Financial components
│   ├── screens/           # Main app screens
│   ├── navigation/        # Navigation configuration
│   ├── services/          # API and backend services
│   ├── store/             # State management
│   ├── utils/             # Helper functions
│   └── theme/             # UI theme configuration
├── assets/                # Static assets
└── config/                # App configuration
```

### 3. Configuration Files

#### babel.config.js
```javascript
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-reanimated/plugin',
      [
        '@tamagui/babel-plugin',
        {
          components: ['tamagui'],
          config: './tamagui.config.ts',
        },
      ],
    ],
  };
};
```

#### app.json
```json
{
  "expo": {
    "name": "AffableManager",
    "slug": "affable-manager",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "updates": {
      "fallbackToCacheTimeout": 0
    },
    "assetBundlePatterns": [
      "**/*"
    ],
    "ios": {
      "supportsTablet": true,
      "bundleIdentifier": "com.yourcompany.affablemanager"
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#FFFFFF"
      },
      "package": "com.yourcompany.affablemanager"
    }
  }
}
```

## Initial Development Steps

### 1. Setup Authentication
- Configure Supabase Auth
- Implement authentication flow
- Create protected routes

### 2. Database Schema
- Set up Supabase tables
- Configure relationships
- Implement RLS policies

### 3. Core Features
1. Dashboard implementation
2. Offers management
3. Deals tracking
4. Finance module
5. Leads management

### 4. Testing Setup
- Configure Jest
- Set up E2E testing with Detox
- Create initial test suites

## Development Guidelines

### Code Style
- Use TypeScript for type safety
- Follow React Native best practices
- Implement proper error handling
- Use async/await for asynchronous operations

### State Management
- Use React Context for global state
- Implement proper caching strategies
- Handle offline data persistence

### Performance
- Implement list virtualization
- Optimize image loading
- Use proper memoization

### Security
- Implement proper validation
- Secure data storage
- Handle sensitive information appropriately

## Deployment Strategy

### 1. Development
- Local testing with Expo Go
- Development environment setup

### 2. Staging
- TestFlight distribution
- Firebase App Distribution

### 3. Production
- App Store submission
- Play Store submission
- CI/CD pipeline setup
