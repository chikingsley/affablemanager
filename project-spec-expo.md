# Lead & Deal Management System Technical Specification

## System Overview
A mobile-first application designed to manage the full lifecycle of leads and deals, from offer creation through financial settlement. The system handles complex data relationships while maintaining a simple, intuitive interface for rapid deal management and lead tracking.

## Technical Stack

### Frontend
- **Framework**: React Native via Expo
- **Primary UI**: Tamagui
  - Modern, performant base components
  - Theme system
  - Animation capabilities
- **Secondary UI**: React Native UI Lib
  - Complex data visualizations
  - Business components
  - Advanced gestures

### Backend
- **Database**: Supabase
- **Authentication**: Supabase Auth
- **File Storage**: Supabase Storage (for CSV imports)

## Core Pages & Features

### 1. Dashboard

#### Purpose
Central command center showing critical metrics and items requiring immediate attention.

#### Key Features
- Real-time stats cards
  - Today's active leads
  - Pending deals
  - Outstanding payments
  - Priority offers
- Action items list
  - Deals needing status updates
  - Leads requiring follow-up (2hr+ rule)
  - Pending prepayments
- Quick action buttons
  - Create new deal
  - Import leads
  - Copy offer details

#### UI Elements
- Swipeable stat cards
- Actionable notifications
- Progress indicators
- Quick filters for different views

### 2. Offers Page

#### Purpose
Manage and distribute offer information efficiently with powerful filtering and sharing capabilities.

#### Key Features
- Advanced filtering system
  - Multiple GEO selection
  - Price range filtering
  - Performance metrics
  - Status filtering (Active/Tested/Priority)
- Bulk operations
  - Multi-select interface
  - Batch status updates
  - Mass offer sharing
- One-click formatting
  - Chat-ready offer formatting
  - Custom templates
  - Automatic price calculations
- Performance tracking
  - Conversion rates
  - Historical performance
  - Deal success metrics

#### UI Elements
- Filter chip system
- Swipeable offer cards
- Multi-select interface
- Quick action buttons
- Sort indicators
- Performance badges

### 3. Deals Page

#### Purpose
Track and manage active deals with detailed performance monitoring and quick actions.

#### Key Features
- Deal creation
  - Offer-based templating
  - Working hours configuration
  - Lead volume setting
  - Price calculations
- Status management
  - Visual status pipeline
  - Automated status updates
  - Extension handling
- Performance tracking
  - Lead count monitoring
  - Deposit tracking
  - Invalid management
- Communication
  - Auto-formatted deal confirmations
  - Finance notifications
  - Status update messages

#### UI Elements
- Deal pipeline view
- Progress tracking cards
- Time zone selectors
- Calendar integration
- Quick action buttons
- Status badges

### 4. Finance Page

#### Purpose
Comprehensive financial tracking and reporting system with multiple perspectives.

#### Key Features
- Weekly rollups
  - Deal performance
  - Revenue tracking
  - Profit calculations
- Payment management
  - Prepayment tracking
  - Final payment reconciliation
  - Payment history
- Invalid processing
  - Dispute management
  - Resolution tracking
  - Historical records
- Reporting
  - Custom date ranges
  - Multiple perspectives (buyer/seller)
  - Export capabilities

#### UI Elements
- Financial summary cards
- Date range selectors
- Performance charts
- Payment status indicators
- Export buttons

### 5. Leads Page

#### Purpose
Efficient lead management with focus on status tracking and performance monitoring.

#### Key Features
- Lead import
  - CSV processing
  - Field mapping
  - Validation rules
- Status tracking
  - Call status updates
  - Timeline view
  - Performance monitoring
- Invalid management
  - Flagging system
  - Resolution tracking
  - Bulk processing
- Performance analytics
  - Conversion tracking
  - Quality metrics
  - Time-based analysis

#### UI Elements
- Status timeline
- Filter system
- Import interface
- Quick update buttons
- Performance indicators

## Database Schema

### Tables

#### Offers
```sql
CREATE TABLE offers (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    geo VARCHAR NOT NULL,
    funnel VARCHAR NOT NULL,
    source VARCHAR NOT NULL,
    buying_price DECIMAL NOT NULL,
    network_price DECIMAL NOT NULL,
    brand_price DECIMAL NOT NULL,
    seller_fee DECIMAL NOT NULL,
    deduction_limit DECIMAL NOT NULL,
    conversion_rate DECIMAL,
    network_ppl DECIMAL GENERATED ALWAYS AS (network_price - buying_price) STORED,
    brand_ppl DECIMAL GENERATED ALWAYS AS (brand_price - buying_price) STORED,
    network_ppl_percent DECIMAL GENERATED ALWAYS AS ((network_price - buying_price)/network_price * 100) STORED,
    brand_ppl_percent DECIMAL GENERATED ALWAYS AS ((brand_price - buying_price)/brand_price * 100) STORED,
    is_active BOOLEAN DEFAULT true,
    is_priority BOOLEAN DEFAULT false,
    is_tested BOOLEAN DEFAULT false,
    prices_validated BOOLEAN DEFAULT false,
    test_performance JSONB,
    activated_at TIMESTAMP WITH TIME ZONE,
    deactivated_at TIMESTAMP WITH TIME ZONE,
    last_tested_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
```

#### Deals
```sql
CREATE TABLE deals (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    offer_id UUID REFERENCES offers(id),
    status VARCHAR NOT NULL CHECK (status IN ('Not Approved', 'Negotiating', 'Prepaid Pending', 'Confirmed')),
    start_date DATE NOT NULL,
    leads_requested INTEGER NOT NULL,
    working_hours_start TIME NOT NULL,
    working_hours_end TIME NOT NULL,
    timezone VARCHAR NOT NULL,
    agreed_price DECIMAL NOT NULL,
    ppl DECIMAL GENERATED ALWAYS AS (agreed_price - (SELECT buying_price FROM offers WHERE id = offer_id)) STORED,
    ppl_percent DECIMAL GENERATED ALWAYS AS (
        ((agreed_price - (SELECT buying_price FROM offers WHERE id = offer_id))/agreed_price) * 100
    ) STORED,
    extension_sequence INTEGER DEFAULT 0,
    original_deal_id UUID REFERENCES deals(id),
    main_chat_copied BOOLEAN DEFAULT false,
    finance_chat_copied BOOLEAN DEFAULT false,
    additional_notes JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
```

#### DealTracking
```sql
CREATE TABLE deal_tracking (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    deal_id UUID REFERENCES deals(id),
    tracking_date DATE NOT NULL,
    leads_received INTEGER DEFAULT 0,
    deposits INTEGER DEFAULT 0,
    invalids INTEGER DEFAULT 0,
    deductions DECIMAL DEFAULT 0,
    prepayment_amount DECIMAL DEFAULT 0,
    prepayment_date TIMESTAMP WITH TIME ZONE,
    remaining_balance DECIMAL,
    daily_stats JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
```

#### Leads
```sql
CREATE TABLE leads (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    deal_id UUID REFERENCES deals(id),
    email VARCHAR NOT NULL,
    current_call_status VARCHAR NOT NULL,
    is_invalid BOOLEAN DEFAULT false,
    invalid_reason VARCHAR,
    first_name VARCHAR NOT NULL,
    last_name VARCHAR NOT NULL,
    phone VARCHAR NOT NULL,
    matching_criteria JSONB,
    matching_timestamp TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
```

## Data Flow & Interactions

### Offer to Deal Flow
1. User filters and selects offer
2. Creates deal with:
   - Working hours
   - Lead volume
   - Price adjustments
3. System:
   - Calculates PPL metrics
   - Generates confirmation messages
   - Creates tracking entry

### Lead Processing Flow
1. CSV import
2. System matches to active deals based on:
   - GEO
   - Working hours
   - Deal status
3. Creates lead records
4. Updates deal tracking

### Financial Tracking Flow
1. Deal creation triggers tracking entry
2. Daily updates for:
   - Lead count
   - Deposits
   - Invalids
3. Weekly rollup for reporting
4. Payment reconciliation

## Mobile-First Considerations

### Performance
- Lazy loading for lists
- Optimized data queries
- Efficient state management

### Offline Capabilities
- Essential data caching
- Queue system for updates
- Sync management

### UI/UX Priorities
- Quick actions accessible
- Important data visible first
- Gesture-based interactions
- Context-aware features

## Security Considerations

### Data Access
- Role-based access control
- Data encryption
- Secure API endpoints

### Audit Trail
- Action logging
- Change tracking
- User activity monitoring

## Future Considerations

### Scalability
- Data archiving strategy
- Performance optimization
- Feature expansion capabilities

### Integration
- API development
- Webhook support
- Third-party service connections
