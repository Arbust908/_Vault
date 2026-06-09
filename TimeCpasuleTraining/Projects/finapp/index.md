# Financial Management PWA - Development Plan

Great project idea! This budgeting framework is a solid foundation. Here's a comprehensive outline and plan:

## Project Overview
A Progressive Web App that helps users track income, expenses, and allocate money according to the 50/30/20-ish rule (with customization based on the image).

## Core Features

**Phase 1 - MVP (2-3 weeks)**
- User authentication (local or simple OAuth)
- Income tracking (multiple sources: salary, ROI, side hustles)
- Expense categories matching the image (Needs, Wants, Debts, Savings, Investments)
- Manual transaction entry
- Dashboard showing category breakdowns with percentage allocations
- Budget vs actual spending visualization
- Monthly summary view

**Phase 2 - Enhanced Features (2-3 weeks)**
- Recurring transactions (rent, subscriptions, loan payments)
- Multiple currency support
- Transaction history with search/filter
- Budget recommendations based on income
- Notifications for budget limits
- Dark/light theme
- Offline functionality (PWA core feature)
- Data export (CSV/PDF)

**Phase 3 - Advanced Features (3-4 weeks)**
- Charts and analytics (spending trends, category comparisons)
- Goal tracking (emergency fund, holiday savings)
- Debt payoff calculator
- Multiple account management
- Receipt photo attachment
- Bank connection (optional, complex)
- Savings recommendations

## Tech Stack

**Nuxt 3 Setup:**
- Nuxt 3 (Vue 3 with Composition API)
- Vite PWA plugin (`@vite-pwa/nuxt`)
- Pinia for state management
- VueUse for utilities
- Tailwind CSS for styling (or Nuxt UI/shadcn-vue)

**Data & Backend:**
- IndexedDB for local storage (using `idb` or Dexie.js)
- Optional: Supabase/Firebase for cloud sync
- Optional: Nitro API routes for server features

**UI Components:**
- Chart.js or Apache ECharts for visualizations
- Headless UI or Radix Vue for accessible components
- Date-fns for date handling

## Database Schema

```
Users
- id
- name
- email
- currency
- created_at

Income_Sources
- id
- user_id
- name
- amount
- frequency (daily/weekly/monthly)
- type (salary/ROI/side_hustle)
- date

Transactions
- id
- user_id
- amount
- category (needs/wants/debts/savings/investments)
- subcategory
- description
- date
- is_recurring
- receipt_url

Budgets
- id
- user_id
- category
- allocated_percentage
- allocated_amount
- month_year

Goals
- id
- user_id
- name
- target_amount
- current_amount
- deadline
```

## Project Structure

```
nuxt-finance-pwa/
├── app.vue
├── nuxt.config.ts
├── components/
│   ├── Dashboard/
│   │   ├── CategoryCard.vue
│   │   ├── BudgetOverview.vue
│   │   └── RecentTransactions.vue
│   ├── Income/
│   │   └── IncomeForm.vue
│   ├── Transactions/
│   │   ├── TransactionForm.vue
│   │   ├── TransactionList.vue
│   │   └── CategorySelector.vue
│   └── Charts/
│       ├── PieChart.vue
│       └── LineChart.vue
├── pages/
│   ├── index.vue (Dashboard)
│   ├── income.vue
│   ├── transactions.vue
│   ├── budget.vue
│   ├── analytics.vue
│   └── settings.vue
├── composables/
│   ├── useDatabase.ts
│   ├── useTransactions.ts
│   ├── useBudget.ts
│   └── useIncome.ts
├── stores/
│   ├── user.ts
│   ├── transactions.ts
│   └── budget.ts
├── utils/
│   ├── calculations.ts
│   ├── validators.ts
│   └── formatters.ts
└── public/
    └── icons/ (PWA icons)
```

## Development Phases

**Week 1-2: Foundation**
- Set up Nuxt 3 project with PWA plugin
- Configure Tailwind and component library
- Set up IndexedDB with basic schema
- Create authentication flow
- Build basic layout and navigation

**Week 3-4: Core Functionality**
- Income management page
- Transaction entry and listing
- Category system based on image
- Budget allocation interface
- Basic dashboard with totals

**Week 5-6: Calculations & Logic**
- Budget calculation engine
- Percentage allocation logic
- Monthly rollover handling
- Recurring transaction automation
- Data persistence and sync

**Week 7-8: Visualization & Polish**
- Charts and analytics
- PWA optimization (offline, caching)
- Responsive design refinement
- Performance optimization
- Testing and bug fixes

## Key Considerations

**PWA Requirements:**
- Service worker for offline functionality
- App manifest with icons
- Installable prompt
- Background sync for data
- Cache strategies for assets

**User Experience:**
- Quick transaction entry (should take <30 seconds)
- Smart categorization suggestions
- Visual feedback on budget status
- Mobile-first design
- Gestures for common actions (swipe to delete)

**Data Privacy:**
- Local-first approach
- Optional cloud backup
- Encrypted storage for sensitive data
- Clear data export/delete options

Would you like me to help you with any specific part? I can create the initial project setup, build specific components, or help with the state management architecture.

---

# Updated Development Plan - Integrating Your Excel Workflows

Based on your spreadsheets, I can see you're managing a more complex financial system than the basic budget app. Let me revise the plan to match your actual workflows:

## Key Workflows Identified

**1. Multi-Account Utility/Service Tracking** (Image 1)
- Multiple service providers (Edenor, Naturgy, Aysa, ARBA, SAT-muni-ABL)
- Monthly bill tracking across the year
- Account numbers for each service
- Category grouping (General, Fondo, Arriba, Abajo)
- Annual totals and running calculations

**2. Multi-Currency Transaction Ledger** (Image 4)
- USD and ARS tracking
- Running balance in both currencies
- Color-coded transactions (expenses in red, positive in green)
- Transaction types (Viaje, VEP, Alda, Gastos, Servicios, etc.)
- Multiple balance columns tracking different accounts

**3. Rental Income Tracking** (Image 5)
- Monthly rental income
- Discount tracking
- Net income calculation

**4. Account Credentials Management** (Images 2 & 3)
- Service provider login information
- Account numbers
- Quick reference data

## Revised Database Schema

```typescript
// Core entities based on your workflows

Accounts {
  id: string
  user_id: string
  name: string // "Edenor", "Naturgy", etc.
  account_number: string // "3759957083"
  category: string // "General", "Fondo", "Arriba", "Abajo"
  type: string // "utility", "rental", "general"
  credentials?: { // encrypted
    username: string
    password: string
    login_url: string
  }
  color: string
  is_active: boolean
}

Transactions {
  id: string
  user_id: string
  date: Date
  concept: string
  amount_usd: number
  amount_ars: number
  account_id: string
  category: string
  transaction_type: string // "expense", "income", "transfer"
  balance_usd_after: number // running balance
  balance_ars_after: number
  balance_pesos_after: number // if you track a third balance
  notes: string
}

MonthlyBills {
  id: string
  user_id: string
  account_id: string
  year: number
  month: number // 1-12
  amount: number
  paid: boolean
  due_date: Date
  payment_date: Date
}

RentalIncome {
  id: string
  user_id: string
  property_name: string
  year: number
  month: number
  base_rent: number
  discount: number
  net_rent: number
  paid: boolean
}

Budgets {
  id: string
  user_id: string
  year: number
  month: number
  category: string
  allocated_amount: number
  spent_amount: number
}
```

## Updated App Structure

```
pages/
├── index.vue                    # Dashboard with overview
├── accounts/
│   ├── index.vue               # List all accounts
│   ├── [id].vue                # Account detail with monthly view
│   └── credentials.vue         # Secure credentials vault
├── transactions/
│   ├── index.vue               # Transaction ledger (like Image 4)
│   ├── new.vue                 # Add transaction
│   └── import.vue              # Import from Excel/CSV
├── bills/
│   ├── index.vue               # Monthly bill tracker (like Image 1)
│   └── calendar.vue            # Calendar view of due dates
├── rental/
│   └── index.vue               # Rental income tracker (like Image 5)
├── reports/
│   ├── monthly.vue             # Monthly summary
│   ├── annual.vue              # Annual view like your Excel
│   └── comparison.vue          # USD vs ARS analysis
└── settings/
    ├── index.vue
    └── import-export.vue       # Excel import/export
```

## Key Features to Build

### 1. **Multi-Currency Transaction Ledger**
```vue
<!-- Replicates Image 4 functionality -->
<template>
  <div class="transaction-ledger">
    <table>
      <thead>
        <tr>
          <th>Fecha</th>
          <th>Concepto</th>
          <th>USD</th>
          <th>Saldo USD</th>
          <th>ARS</th>
          <th>Saldo ARS</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="tx in transactions" 
            :class="tx.amount < 0 ? 'expense' : 'income'">
          <!-- Dynamic color coding like your sheet -->
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style>
.expense { background-color: #ff6b6b; }
.income { background-color: #51cf66; }
</style>
```

### 2. **Monthly Bill Matrix View**
```vue
<!-- Replicates Image 1 layout -->
<template>
  <div class="bills-matrix">
    <div class="category" v-for="category in categories">
      <h3>{{ category.name }}</h3>
      <table>
        <thead>
          <tr>
            <th>Cuenta</th>
            <th>Número</th>
            <th v-for="month in 12">{{ monthName(month) }}</th>
            <th>Total 2025</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="account in category.accounts">
            <td>{{ account.name }}</td>
            <td>{{ account.number }}</td>
            <td v-for="month in 12">
              <input v-model="bills[account.id][month]" 
                     type="number" 
                     @change="updateTotal">
            </td>
            <td>{{ calculateYearTotal(account.id) }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
```

### 3. **Running Balance Calculator**
```typescript
// composables/useBalanceCalculator.ts
export const useBalanceCalculator = () => {
  const calculateRunningBalance = (transactions: Transaction[]) => {
    let balanceUSD = 0
    let balanceARS = 0
    
    return transactions.map(tx => {
      balanceUSD += tx.amount_usd
      balanceARS += tx.amount_ars
      
      return {
        ...tx,
        balance_usd_after: balanceUSD,
        balance_ars_after: balanceARS
      }
    })
  }
  
  return { calculateRunningBalance }
}
```

### 4. **Secure Credentials Vault**
```typescript
// composables/useCredentials.ts
import { encrypt, decrypt } from '~/utils/crypto'

export const useCredentials = () => {
  const saveCredential = async (accountId: string, data: any) => {
    const encrypted = await encrypt(JSON.stringify(data))
    await window.storage.set(`cred:${accountId}`, encrypted)
  }
  
  const getCredential = async (accountId: string) => {
    const encrypted = await window.storage.get(`cred:${accountId}`)
    if (!encrypted) return null
    return JSON.parse(await decrypt(encrypted.value))
  }
  
  return { saveCredential, getCredential }
}
```

### 5. **Excel Import/Export**
```typescript
// utils/excelImport.ts
import * as XLSX from 'xlsx'

export const importFromExcel = async (file: File) => {
  const data = await file.arrayBuffer()
  const workbook = XLSX.read(data)
  
  // Parse sheet structure matching your format
  const sheet = workbook.Sheets[workbook.SheetNames[0]]
  const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 })
  
  // Transform to app structure
  return parseExcelData(jsonData)
}

export const exportToExcel = (data: any[], filename: string) => {
  const ws = XLSX.utils.json_to_sheet(data)
  const wb = XLSX.utils.book_new()
  XLSX.utils.book_append_sheet(wb, ws, "Data")
  XLSX.writeFile(wb, `${filename}.xlsx`)
}
```

## Implementation Priority

**Phase 1 (Week 1-2): Core Data Migration**
- Set up database schema for your workflows
- Build Excel import functionality
- Create account management (with credentials vault)
- Basic transaction entry

**Phase 2 (Week 3-4): Main Views**
- Transaction ledger with running balances
- Monthly bills matrix view
- Rental income tracker
- Color-coded visualization

**Phase 3 (Week 5-6): Calculations & Reports**
- Multi-currency balance tracking
- Monthly/annual aggregations
- Category totals (matching your Excel categories)
- Export functionality

**Phase 4 (Week 7-8): Polish & Features**
- Bill payment reminders
- Exchange rate tracking (USD/ARS)
- Mobile-optimized views
- Offline sync

## Critical Features for Your Use Case

1. **Multi-currency support** (USD/ARS primary)
2. **Running balance calculations** (like column E in Image 4)
3. **Color-coded transactions** (expenses red, income green)
4. **Monthly matrix view** for bills
5. **Secure credential storage**
6. **Excel export** (maintain compatibility)
7. **Account categorization** (General, Fondo, Arriba, Abajo)

Would you like me to start building any specific component? I can create:
- The transaction ledger with multi-currency support
- The monthly bills matrix view
- The Excel import/export functionality
- The secure credentials vault

Which workflow is most critical to migrate first?