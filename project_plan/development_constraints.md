# Development Constraints

## Technical Stack Constraints

### Frontend
- **Framework**: React Native via Expo
  - Must use Expo SDK latest stable version
  - Expo managed workflow for simplified development
- **Primary UI**: Tamagui
  - Theme system must be implemented from the start
  - Animations should be optimized for mobile performance
- **Secondary UI**: React Native UI Lib
  - Used specifically for complex data visualizations and business components

### Backend
- **Database**: Supabase
  - Real-time subscriptions for live updates
  - Row Level Security (RLS) policies required
- **Authentication**: Supabase Auth
  - Mobile-optimized auth flow
  - Secure token management
- **Storage**: Supabase Storage
  - Efficient CSV file handling
  - Proper file size limitations

## Development Environment

### Tools & Setup
- Node.js LTS version
- Expo CLI
- Expo Go app for development testing
- VSCode with React Native/Expo extensions

### Mobile-Specific Constraints
- Minimum supported iOS version: 13.0
- Minimum supported Android version: API level 21 (Android 5.0)
- Support for both portrait and landscape orientations
- Offline data persistence requirements
- Handle different screen sizes and densities

## Performance Requirements

### Loading Times
- Initial app load: < 3 seconds
- Screen transitions: < 300ms
- Data fetch operations: < 2 seconds
- CSV import processing: < 5 seconds for standard files

### Memory Management
- Efficient list rendering for large datasets
- Image optimization and caching
- Background task optimization

## Security Constraints

### Data Protection
- Secure storage of sensitive information
- Encrypted data transmission
- Session management
- Input validation and sanitization

### Authentication
- Biometric authentication support
- Secure token storage
- Auto-logout after inactivity

## UX Constraints

### Responsiveness
- Touch targets minimum 44x44 points
- Gesture handling with proper feedback
- Smooth animations (60 fps)

### Offline Capability
- Basic functionality without network
- Data sync when connection restored
- Clear offline state indicators

### Accessibility
- VoiceOver/TalkBack support
- Minimum contrast ratios
- Scalable text support
- Proper semantic markup

## Testing Requirements

### Unit Testing
- Jest for component testing
- Coverage requirements for critical paths

### Integration Testing
- E2E testing with Detox
- Device testing matrix

### Performance Testing
- Memory leak detection
- Load testing for data operations
- Battery usage monitoring

## Deployment Constraints

### App Store Requirements
- iOS App Store guidelines compliance
- Google Play Store guidelines compliance
- Privacy policy and terms of service
- App signing and provisioning

### CI/CD
- Automated build process
- Version management
- Beta distribution via TestFlight/Firebase
