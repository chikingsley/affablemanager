# Codebase Summary

## Key Components and Their Interactions

### Core Components
- **Navigation**
  - Bottom tab navigator
  - Stack navigators per tab
  - Navigation service for programmatic navigation

- **Authentication**
  - Auth context provider
  - Protected routes
  - Supabase auth integration

- **UI Components**
  - Tamagui theme provider
  - Custom components library
  - Business-specific components

### Feature Modules
- **Dashboard**
  - Stats display
  - Action items
  - Quick actions

- **Offers**
  - Offer management
  - Performance tracking
  - Sharing system

- **Deals**
  - Pipeline view
  - Status management
  - Performance metrics

- **Finance**
  - Payment tracking
  - Reports generation
  - Invalid processing

- **Leads**
  - Lead management
  - Import system
  - Analytics

## Data Flow
- Supabase real-time subscriptions for live updates
- Context-based state management
- Local storage for offline capability
- File system integration for CSV handling

## External Dependencies
```json
{
  "dependencies": {
    "expo": "latest",
    "react-native": "latest",
    "@tamagui/core": "latest",
    "react-native-ui-lib": "latest",
    "@supabase/supabase-js": "latest",
    "@react-navigation/native": "latest",
    "@react-navigation/bottom-tabs": "latest"
  },
  "devDependencies": {
    "typescript": "latest",
    "jest": "latest",
    "detox": "latest"
  }
}
```

## Recent Significant Changes
- Initial project setup
- Documentation structure established
- Core architecture decisions made

## User Feedback Integration
- Not applicable yet (project initialization phase)

## Additional Documentation
- Project documentation in `project_plan/`:
  - development_constraints.md
  - project_init.md
  - interface_planning.md
