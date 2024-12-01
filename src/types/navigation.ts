export type RootStackParamList = {
  index: undefined
  '(tabs)': undefined
  'auth/login': undefined
  'auth/signup': undefined
  modal: undefined
}

export type RootTabParamList = {
  dashboard: undefined
  deals: undefined
  offers: undefined
  finance: undefined
  settings: undefined
}

export type DashboardStackParamList = {
  index: undefined
  notifications: undefined
}

export type OffersStackParamList = {
  index: undefined
  'offer-detail': { id: string }
  'new-offer': undefined
}

export type DealsStackParamList = {
  index: undefined
  'deals-detail': { id: string }
  'new-deal': undefined
}

export type FinanceStackParamList = {
  index: undefined
  'transaction-detail': { id: string }
}

export type SettingsStackParamList = {
  index: undefined
  profile: undefined
  'account-settings': undefined
}

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
