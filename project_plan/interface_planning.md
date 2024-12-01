# Interface Planning

## Navigation Structure

### Bottom Tab Navigation
```
- Dashboard
- Offers
- Deals
- Finance
- Leads
```

### Stack Navigation (per tab)
```
Dashboard/
├── Main Dashboard
└── Notification Details

Offers/
├── Offers List
├── Offer Details
├── Create/Edit Offer
└── Share Offer

Deals/
├── Deals Pipeline
├── Deal Details
├── Create Deal
└── Deal Performance

Finance/
├── Financial Overview
├── Payment Details
├── Weekly Reports
└── Invalid Management

Leads/
├── Leads List
├── Lead Details
├── Import Leads
└── Lead Analytics
```

## Screen Layouts

### 1. Dashboard Screen
```yaml
Components:
  - Stats Cards Carousel
    * Swipeable horizontal list
    * Key metrics display
    * Touch feedback
  
  - Action Items List
    * Priority-sorted list
    * Pull-to-refresh
    * Swipe actions
  
  - Quick Action Buttons
    * Fixed position grid
    * Icon + label design
    * Haptic feedback
```

### 2. Offers Screen
```yaml
Components:
  - Filter Bar
    * Horizontal scroll chips
    * Multi-select support
    * Active filters display
  
  - Offer Cards
    * Swipeable actions
    * Performance indicators
    * Quick copy buttons
  
  - Sort/Filter Modal
    * Bottom sheet design
    * Multiple filter options
    * Apply/Reset buttons
```

### 3. Deals Screen
```yaml
Components:
  - Pipeline View
    * Horizontal scroll stages
    * Deal cards in columns
    * Drag-drop support
  
  - Deal Creation Form
    * Step-by-step flow
    * Dynamic calculations
    * Validation feedback
  
  - Performance Metrics
    * Visual charts
    * Key stats display
    * Time period selector
```

### 4. Finance Screen
```yaml
Components:
  - Financial Summary
    * Card-based layout
    * Period selector
    * Export options
  
  - Payment Tracking
    * Status indicators
    * Payment timeline
    * Action buttons
  
  - Reports Section
    * Filterable tables
    * Export functionality
    * Chart visualizations
```

### 5. Leads Screen
```yaml
Components:
  - Lead Import
    * File picker
    * Progress indicator
    * Field mapping UI
  
  - Lead List
    * Virtual scroll
    * Status indicators
    * Quick actions
  
  - Analytics Dashboard
    * Performance charts
    * Conversion metrics
    * Time-based analysis
```

## UI Components Library

### Common Components
```yaml
Buttons:
  - Primary Action
  - Secondary Action
  - Icon Button
  - FAB

Cards:
  - Info Card
  - Action Card
  - Stats Card
  - List Item Card

Inputs:
  - Text Input
  - Search Bar
  - Date Picker
  - Multi-select
  - Number Input

Feedback:
  - Toast Messages
  - Loading Spinners
  - Error States
  - Empty States
```

### Custom Components
```yaml
Business:
  - Deal Pipeline Card
  - Offer Summary View
  - Lead Status Timeline
  - Payment Status Badge

Charts:
  - Performance Line Chart
  - Conversion Funnel
  - Revenue Bar Chart
  - Status Distribution
```

## Interaction Patterns

### Gestures
```yaml
Swipe:
  - List item actions
  - Card dismissal
  - Navigation back

Long Press:
  - Context menu
  - Multi-select mode
  - Copy content

Pull:
  - Refresh content
  - Load more data
  - Show actions
```

### Animations
```yaml
Transitions:
  - Screen navigation
  - Modal presentation
  - List updates

Feedback:
  - Button press
  - Success/Error states
  - Loading states

Micro-interactions:
  - Status changes
  - Value updates
  - Focus states
```

## Accessibility Considerations

### Visual
```yaml
- High contrast mode
- Dynamic type support
- Color blind friendly
- Loading indicators
```

### Interactive
```yaml
- VoiceOver support
- Touch target sizes
- Gesture alternatives
- Error announcements
```

## Responsive Design

### Orientation Support
```yaml
Portrait:
  - Optimized layouts
  - Full-width components
  - Scrollable content

Landscape:
  - Split views
  - Adapted navigation
  - Repositioned modals
```

### Device Adaptation
```yaml
- Different screen sizes
- Notch/cutout handling
- Safe area compliance
- Keyboard avoidance
```

## AffableManager Screen Structure and Component Plan

### Common Components (to be reused across screens)
```typescript
// Common layout components
- ScreenWrapper: YStack with SafeAreaView and standard padding
- HeaderBar: XStack with title, back button (when needed), and actions
- LoadingSpinner: Spinner component with standard styling
- ErrorMessage: Card with error icon and message
- EmptyState: Card with illustration and message

// Common interactive components
- ActionButton: Button with consistent styling and optional icon
- SearchBar: Input with search icon and clear button
- FilterChips: ScrollView with horizontally scrolling filter options
- ListItem: Pressable card with consistent layout for list items
- FAB: Floating action button for primary actions
```

## Screen-by-Screen Breakdown

### 1. Dashboard (index.tsx)
```typescript
Components:
- StatsGrid: XStack with Card components for key metrics
- ActivityFeed: YStack with ListItems for recent activities
- QuickActions: XStack with ActionButtons for common tasks
- UpcomingTasks: Card with scrollable task list

Layout:
- HeaderBar with profile menu
- StatsGrid (3 columns)
- QuickActions (horizontal scroll)
- ActivityFeed
- UpcomingTasks
```

### 2. Leads Screen (leads/index.tsx)
```typescript
Components:
- LeadsList: YStack of ListItems for leads
- LeadFilters: FilterChips for lead status/type
- LeadSearchBar: SearchBar with advanced filters
- AddLeadFAB: FAB for new lead creation

Layout:
- HeaderBar with search toggle
- LeadFilters (horizontal scroll)
- LeadsList (scrollable)
- AddLeadFAB (bottom right)
```

### 3. Lead Detail Screen (leads/[id].tsx)
```typescript
Components:
- LeadHeader: Card with lead info and status
- ContactInfo: Card with contact details
- InteractionHistory: Timeline of interactions
- LeadActions: Button group for lead actions

Layout:
- HeaderBar with edit/delete
- LeadHeader
- ContactInfo
- InteractionHistory
- LeadActions (bottom)
```

### 4. Offers Screen (offers/index.tsx)
```typescript
Components:
- OffersList: YStack of ListItems for offers
- OfferFilters: FilterChips for offer status
- OfferStats: Card with offer metrics
- AddOfferFAB: FAB for new offer

Layout:
- HeaderBar with search
- OfferStats
- OfferFilters
- OffersList
- AddOfferFAB
```

### 5. Offer Detail Screen (offers/[id].tsx)
```typescript
Components:
- OfferHeader: Card with offer summary
- OfferTimeline: Timeline of offer stages
- OfferDocuments: List of attached documents
- OfferActions: Button group for offer actions

Layout:
- HeaderBar with status
- OfferHeader
- OfferTimeline
- OfferDocuments
- OfferActions (bottom)
```

### 6. Finance Screen (finance/index.tsx)
```typescript
Components:
- FinancialSummary: Card with key metrics
- TransactionList: YStack of transactions
- RevenueChart: Chart component
- FilterPeriod: Date range selector

Layout:
- HeaderBar with date filter
- FinancialSummary
- RevenueChart
- TransactionList
```

### 7. Settings Screen (settings/index.tsx)
```typescript
Components:
- SettingsGroup: Card with grouped settings
- SettingsItem: ListItem for individual settings
- ThemeSelector: Custom theme picker
- ProfileSection: Card with user info

Layout:
- HeaderBar
- ProfileSection
- SettingsGroups (scrollable)
```

## Tamagui Component Usage Guidelines

### Typography
```typescript
- Headings: Text with fontSize="$8" fontWeight="bold"
- Subheadings: Text with fontSize="$6" fontWeight="600"
- Body: Text with fontSize="$4"
- Caption: Text with fontSize="$3" color="$gray10"
```

### Spacing
```typescript
- Screen padding: padding="$4"
- Between sections: space="$4"
- Between items: space="$2"
- Card padding: padding="$4"
```

### Colors
```typescript
- Primary actions: theme="blue"
- Success states: theme="green"
- Warning states: theme="orange"
- Error states: theme="red"
- Neutral states: theme="gray"
```

### Animations
```typescript
- Card hover: animation="bouncy"
- Button press: pressStyle={{ scale: 0.98 }}
- List item press: pressStyle={{ opacity: 0.8 }}
```

### Common Props
```typescript
- Cards: elevate bordered size="$4"
- Buttons: size="$4" theme="blue"
- Inputs: size="$4" borderWidth={1}
```

This structure ensures consistent component usage across all screens while maintaining a professional and cohesive look. Each screen follows similar patterns but adapts the components to its specific needs.
