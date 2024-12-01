#  initialize_documentation

# Project Types and Reference Standards

## 1. FULL STACK APPLICATION

### Stack Configuration
```yaml
Base: 
  - Next.js 15
  - Turborepo (if multi-platform)
UI: shadcn/ui
Backend: 
  - Supabase + Edge Functions
Mobile: 
  - Expo (if needed)
Auth: Supabase Auth
Database: 
  - Primary: Supabase PostgreSQL
  - ORM: Prisma
Cache: Upstash Redis
State: Zustand
```

### Development Tooling
```yaml
Package Manager: pnpm
IDE: VSCode
Extensions:
  - Prettier
  - ESLint
  - TypeScript
  - Tailwind CSS
  - Prisma
  - GitLens
Dev Server: 
  - auto-open
  - port 3000
Testing: Vitest + Testing Library
Linting: ESLint + Prettier
Git Hooks: husky + lint-staged
Debug: Chrome DevTools + React DevTools
```

### UI Architecture
```yaml
Web:
  Navigation:
    - Header-based primary nav
    - Responsive sidebar
    - Breadcrumbs
  Components:
    - Data tables
    - Form systems
    - Modal/sheet system
    - Dashboard layouts
Mobile:
  Navigation:
    - Bottom tabs
    - Stack navigation
    - Pull-to-refresh
  Components:
    - Lists/cards
    - Mobile forms
    - Bottom sheets
    - FAB
Common:
  - Responsive design
  - Dark mode support
  - Loading states
  - Error boundaries
```

## 2. QUICK API/AI

### Stack Configuration
```yaml
Core: 
  - FastAPI + Pydantic
AI:
  Default: Mistral API (free tier)
  Complex: Claude/OpenAI API
Database: SQLite
Deploy: Vercel/Railway
```

### Development Tooling
```yaml
Package Manager: poetry
IDE: VSCode
Extensions:
  - Python
  - Thunder Client
Dev Server: uvicorn
Testing: pytest
Debug: debugpy
```

### UI Architecture
```yaml
Documentation:
  - OpenAPI docs
  - Testing interface
  - API explorer
Monitoring:
  - Status dashboard
  - Request logs
  - Performance metrics
```

## 3. MARKETING SITE

### Stack Configuration
```yaml
Core: Next.js 15
UI: 
  - shadcn/ui
  - Tailwind
CMS: MDX (if blog)
Forms: React Email
Analytics: Vercel Analytics
```

### Development Tooling
```yaml
Package Manager: pnpm
IDE: VSCode
Extensions:
  - Prettier
  - ESLint
  - Tailwind CSS
  - MDX
Dev Server: auto-open, port 3000
Testing: Vitest (minimal)
Debug: Chrome DevTools
```

### UI Architecture
```yaml
Navigation:
  - Sticky header
  - Mobile hamburger
  - Smooth scroll
Sections:
  - Hero
  - Features
  - CTA blocks
  - Testimonials
Animations:
  - Scroll reveals
  - Hover effects
  - Page transitions
```

## 4. DATA/ML PIPELINE

### Stack Configuration
```yaml
Core: 
  - Python
  - Pandas
ML: 
  - sklearn/PyTorch
API: FastAPI (if needed)
UI: Streamlit (if needed)
```

### Development Tooling
```yaml
Package Manager: poetry
IDE: VSCode
Extensions:
  - Python
  - Pylance
  - Jupyter
  - Python Test Explorer
Notebooks: Jupyter Lab
Testing: pytest
Version Control: DVC
Debug: debugpy + ipdb
```

### UI Architecture
```yaml
If UI needed:
  - Data dashboards
  - Interactive visualizations
  - Parameter controls
  - Results display
```

## 5. AUTOMATION SCRIPT

### Stack Configuration
```yaml
Core: 
  - Python
  - Click/Typer
UI: Rich (CLI)
Schedule: GitHub Actions
Data: Pandas (if needed)
```

### Development Tooling
```yaml
Package Manager: poetry
IDE: VSCode
Extensions:
  - Python
  - Pylance
  - YAML
  - GitHub Actions
Testing: pytest
Debug: debugpy
Logging: loguru
```

### UI Architecture
```yaml
CLI Interface:
  - Progress bars
  - Status updates
  - Error displays
  - Interactive prompts
```

## 6. CHROME EXTENSION

### Stack Configuration
```yaml
Core: 
  - TypeScript
  - Vite
UI: 
  - Tailwind
  - React
Build: Web-ext
```

### Development Tooling
```yaml
Package Manager: pnpm
IDE: VSCode
Extensions:
  - Chrome Debugger
  - ESLint
  - Prettier
  - Tailwind CSS
Testing: Vitest
Debug: Chrome DevTools
```

### UI Architecture
```yaml
Popup:
  - Compact interface
  - Quick actions
  - Settings panel
Content:
  - Injected UI
  - Overlays
  - Tooltips
Options:
  - Full page settings
  - Account management
  - Preferences
```

## Selection Criteria

### Full Stack App if:
- Multiple user types
- Complex data management
- Real-time features
- Mobile requirements
- User authentication

### Quick API/AI if:
- AI/ML endpoints needed
- Simple data processing
- API-first approach
- Minimal UI needs
- Quick deployment

### Marketing Site if:
- Content-focused
- Lead generation
- Blog/news features
- SEO priority
- Static content

### Data/ML Pipeline if:
- Heavy data processing
- ML model training
- Batch processing
- Analysis focus
- Research oriented

### Automation Script if:
- Task automation
- CLI tools
- Scheduled jobs
- System integration
- Data transformation

### Chrome Extension if:
- Browser integration
- Page manipulation
- Content enhancement
- Browser toolbar
- Site-specific tools

## Common Add-ons

### Analytics
```yaml
Default: Vercel Analytics
Options:
  - Posthog
  - Plausible
  - Google Analytics
```

### Monitoring
```yaml
Default: Sentry
Options:
  - LogRocket
  - DataDog
  - New Relic
```

### Security
```yaml
Default: Supabase Auth
Options:
  - Clerk
  - Auth0
  - NextAuth
```

### Email
```yaml
Default: Resend
Options:
  - SendGrid
  - Postmark
  - AWS SES
```

# Development Constraints and Preferences

## Development Tooling
- Package Manager: [only list what's needed]
- Dev Server: [only if web project]
- IDE: VSCode + [specific extensions needed]

## Technical Stack
- Frontend: [only if needed]
- Backend: [only if needed]
- Database: [only if needed]
- Additional: [any special requirements]

## Development Style
- Code Style: [specific to project type]
- Testing: [if needed]

## Deployment
- Platform: [specific platform]
- Strategy: [if needed]

## Special Requirements
[only if there are any]

# Project Initialization

## Project Overview
- Project Name: 
- Target Completion Date:
- Key Stakeholders:
- Primary Goals:

## Technical Requirements
- Platform Target: [Web/Mobile/Both]
- Performance Needs:
  * Expected Users:
  * Data Volume:
  * Real-time Needs:
- Security Needs:
  * Auth Requirements:
  * Data Privacy:
- Scale Requirements:
  * Initial Scale:
  * Growth Projections:

## Resource Constraints
- Time Constraints:
- Budget Constraints:
- Team Size:
- Must-have Deadlines:

## Success Criteria
- Core Features:
- Critical User Flows:
- Performance Targets:
- Launch Requirements:

# interface_planning.md

## Navigation Architecture
- Primary Navigation:
  * Type: [Bottom Tabs/Drawer/Stack]
  * Behavior: [Fixed/Collapsible/Contextual]
  * Transitions: [Slide/Fade/Push]
  * States: [Active/Inactive/Loading]

- Secondary Navigation:
  * Type: [Nested/Modal/Sheet]
  * Entry/Exit: [Slide up/Fade/Spring]
  * Depth Indicators: [Breadcrumb/Back/Title]

- Gesture System:
  * Swipe Actions: [Direction/Purpose/Feedback]
  * Pull Behaviors: [Refresh/Load More/Actions]
  * Long Press: [Duration/Feedback/Actions]
  * Pan/Pinch: [Zoom/Scale/Move]
  * Multi-touch: [Specific gestures]

## Screen Inventory

### [Screen Name]
Layout Structure:
- Hierarchy:
  * Primary Content
  * Secondary Content
  * Supporting Elements

Key Elements:
- Headers:
  * Style: [Fixed/Collapsible/Transparent]
  * Content: [Title/Actions/Search]
  * Behavior: [Scroll/Fixed/Dynamic]

- Content Area:
  * Layout: [List/Grid/Custom]
  * Scroll Behavior: [Smooth/Paged/Infinite]
  * Empty States: [Message/Action/Animation]
  * Loading States: [Skeleton/Spinner/Progressive]
  * Error States: [Message/Retry/Fallback]

- Action Elements:
  * Primary: [FAB/Button/Gesture]
  * Secondary: [Menu/Contextual/Sheet]
  * Position: [Fixed/Floating/Inline]
  * States: [Default/Active/Disabled]

Interactions:
- Touch Targets:
  * Size: [Minimum 44x44px]
  * Spacing: [Minimum 8px]
  * Feedback: [Highlight/Ripple/Scale]

- Animations:
  * Entry: [Type/Duration/Curve]
  * Exit: [Type/Duration/Curve]
  * State Changes: [Type/Duration/Curve]
  * Loading: [Type/Duration/Loop]
  * Micro-interactions: [Hover/Press/Success]

- Transitions:
  * Between States: [Duration: 200ms, Curve: ease-out]
  * Between Screens: [Duration: 300ms, Curve: spring(1, 90, 12)]
  * For Data: [Fade: 150ms, Stagger: 50ms]

Data Display:
- Lists:
  * Style: [Card/Divider/Group]
  * Actions: [Swipe/Press/Select]
  * Updates: [Optimistic/Real-time/Refresh]

- Cards:
  * Style: [Elevated/Flat/Interactive]
  * States: [Default/Selected/Expanded]
  * Transitions: [Expand/Collapse/Flip]

- Charts/Visualizations:
  * Type: [Line/Bar/Custom]
  * Interactions: [Zoom/Pan/Select]
  * Updates: [Animate/Real-time/Static]

## Responsive Framework

Mobile First:
- Portrait Layout:
  * Content Priority
  * Navigation Access
  * Action Placement

- Landscape Adjustments:
  * Layout Adaptation
  * Control Relocation
  * Content Reflow

Tablet/Desktop:
- Layout Expansion:
  * Multi-column
  * Side Panels
  * Master-Detail

- Enhanced Features:
  * Hover States
  * Right-click Menus
  * Keyboard Shortcuts
  * Drag and Drop

## Accessibility Framework

Navigation:
- Keyboard Support:
  * Tab Order
  * Focus Indicators
  * Shortcut Keys

- Screen Readers:
  * ARIA Labels
  * Role Definitions
  * State Announcements
  * Action Descriptions

- Reduced Motion:
  * Alternative Transitions
  * Static Options
  * Preference Detection

Visual:
- Color Contrast:
  * WCAG AA Standards
  * Text Contrast
  * Interactive Elements

- Text Scaling:
  * Minimum Sizes
  * Scale Factors
  * Layout Stability

## Motion Language

Timing Guidelines:
- Micro-interactions: 100-200ms
- State Changes: 200-300ms
- Navigation: 300-500ms
- Loading: 1000-2000ms

Animation Curves:
- Standard: cubic-bezier(0.4, 0, 0.2, 1)
- Decelerate: cubic-bezier(0, 0, 0.2, 1)
- Accelerate: cubic-bezier(0.4, 0, 1, 1)
- Sharp: cubic-bezier(0.4, 0, 0.6, 1)

Transition Categories:
- Entrance:
  * Fade Up: [Duration/Curve]
  * Scale In: [Duration/Curve]
  * Slide In: [Duration/Curve]

- Exit:
  * Fade Out: [Duration/Curve]
  * Scale Out: [Duration/Curve]
  * Slide Out: [Duration/Curve]

- State:
  * Loading: [Pattern/Duration]
  * Success: [Pattern/Duration]
  * Error: [Pattern/Duration]

## Error & Empty States

Error Handling:
- Network Errors:
  * Visual Feedback
  * Retry Options
  * Offline Support

- User Errors:
  * Validation Feedback
  * Correction Guidance
  * Recovery Options

Empty States:
- First Use:
  * Welcome Message
  * Setup Guide
  * Sample Data

- No Content:
  * Helpful Message
  * Action Prompts
  * Visual Enhancement

## Feedback System

Visual:
- Success: [Animation/Color/Icon]
- Error: [Animation/Color/Icon]
- Progress: [Animation/Color/Icon]
- Loading: [Animation/Color/Icon]

Haptic:
- Light Impact: [When/Duration]
- Medium Impact: [When/Duration]
- Heavy Impact: [When/Duration]
- Selection: [When/Duration]

Audio:
- Success Tones
- Error Alerts
- Action Feedback
- Navigation Cues

## Theme System

Colors:
- Primary Palette:
  * Main
  * Light
  * Dark
  * Contrast

- Semantic Colors:
  * Success
  * Error
  * Warning
  * Info

- Status Colors:
  * Active
  * Inactive
  * Disabled
  * Highlighted

Typography:
- Scale:
  * Display
  * Heading
  * Body
  * Caption

- Properties:
  * Weight
  * Spacing
  * Line Height
  * Font Family

Spacing:
- Grid: 8px base unit
- Margins: [Specific values]
- Padding: [Specific values]
- Layout: [Specific values]

## Platform-Specific Considerations

### Web (Desktop/Laptop)
Navigation:
- Header-based primary nav
- Sidebar for complex apps
- Dropdown menus
- Breadcrumbs
- Keyboard shortcuts

Interactions:
- Hover states
- Right-click menus
- Drag and drop
- Multi-select with shift/ctrl
- Form tabbing
- Mouse wheel/trackpad

### Mobile Web (PWA)
Navigation:
- Bottom navigation bar
- Hamburger menu
- Back button handling
- Pull-to-refresh
- Bottom sheets

Interactions:
- Touch targets (min 44px)
- Swipe gestures
- Long press
- Safe areas (notch/home indicator)
- Virtual keyboard handling

### Native Mobile (iOS/Android)
Navigation:
iOS:
- Tab bar (bottom)
- Large titles
- Back swipe
- Action sheets
- Context menus

Android:
- Material Design patterns
- FAB (Floating Action Button)
- Bottom nav
- Navigation drawer
- Pull-to-refresh

Interactions:
- Platform-specific gestures
- Haptic feedback
- Share sheet integration
- Deep linking
- Push notifications

### Tablet/iPad
Layout:
- Split views
- Slideovers
- Popovers
- Multi-column layout
- Adaptive UI

Interactions:
- Apple Pencil/Stylus
- Keyboard attachment
- Stage Manager
- Drag and drop between apps
- Multiple windows

### Desktop App (Electron/Tauri)
System:
- Native window controls
- Menu bar integration
- System tray
- File system access
- Global shortcuts

Features:
- Multi-window support
- Background processes
- Local storage
- Offline first
- OS notifications

### Common Adaptations
Content:
- Responsive images
- Flexible grids
- Dynamic typography
- Content prioritization
- Layout shifts

Features:
- Authentication flows
- Data persistence
- Offline support
- Share functionality
- Settings sync

Performance:
- Load times
- Animation frame rates
- Memory usage
- Battery impact
- Network handling

