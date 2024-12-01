import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import {
  DashboardStackParamList,
  DealsStackParamList,
  OffersStackParamList,
  FinanceStackParamList,
  SettingsStackParamList,
} from '../types/navigation'

export const useDashboardNavigation = () =>
  useNavigation<NativeStackNavigationProp<DashboardStackParamList>>()

export const useDealsNavigation = () =>
  useNavigation<NativeStackNavigationProp<DealsStackParamList>>()

export const useOffersNavigation = () =>
  useNavigation<NativeStackNavigationProp<OffersStackParamList>>()

export const useFinanceNavigation = () =>
  useNavigation<NativeStackNavigationProp<FinanceStackParamList>>()

export const useSettingsNavigation = () =>
  useNavigation<NativeStackNavigationProp<SettingsStackParamList>>()
