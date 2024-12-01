import React from 'react'
import { ScrollView, YStack, Text, Button, XStack, Switch } from 'tamagui'
import { Screen } from '../../../src/components/common'
import { NavBar } from '../../../src/components/navigation'
import { 
  User,
  Settings as SettingsIcon,
  LogOut,
  ChevronRight,
  Moon
} from '@tamagui/lucide-icons'
import { useRouter } from 'expo-router'
import { useTheme } from '../../../src/context/ThemeContext'

export default function SettingsScreen() {
  const router = useRouter()
  const { theme, toggleTheme } = useTheme()

  return (
    <Screen>
      <NavBar title="Settings" />
      <ScrollView flex={1}>
        <YStack padding="$4" space="$4">
          {/* Theme Toggle */}
          <Button
            backgroundColor="$gray1"
            borderColor="$gray4"
            borderWidth={1}
            pressStyle={{ opacity: 0.8 }}
          >
            <XStack padding="$3" alignItems="center" justifyContent="space-between" width="100%">
              <XStack space="$3" alignItems="center">
                <Moon size={24} color="$gray11" />
                <YStack>
                  <Text fontWeight="bold" color="$gray12">Dark Mode</Text>
                  <Text color="$gray11" fontSize="$3">Switch between light and dark themes</Text>
                </YStack>
              </XStack>
              <Switch
                checked={theme === 'dark'}
                onCheckedChange={toggleTheme}
                size="$3"
              />
            </XStack>
          </Button>

          {/* Profile Section */}
          <Button
            backgroundColor="$gray1"
            borderColor="$gray4"
            borderWidth={1}
            pressStyle={{ opacity: 0.8 }}
            onPress={() => router.push('/settings/profile')}
          >
            <XStack padding="$3" alignItems="center" justifyContent="space-between" width="100%">
              <XStack space="$3" alignItems="center">
                <User size={24} color="$gray11" />
                <YStack>
                  <Text fontWeight="bold" color="$gray12">Profile</Text>
                  <Text color="$gray11" fontSize="$3">Manage your profile information</Text>
                </YStack>
              </XStack>
              <ChevronRight size={20} color="$gray11" />
            </XStack>
          </Button>

          {/* Account Settings */}
          <Button
            backgroundColor="$gray1"
            borderColor="$gray4"
            borderWidth={1}
            pressStyle={{ opacity: 0.8 }}
            onPress={() => router.push('/settings/account-settings')}
          >
            <XStack padding="$3" alignItems="center" justifyContent="space-between" width="100%">
              <XStack space="$3" alignItems="center">
                <SettingsIcon size={24} color="$gray11" />
                <YStack>
                  <Text fontWeight="bold" color="$gray12">Account Settings</Text>
                  <Text color="$gray11" fontSize="$3">Security and preferences</Text>
                </YStack>
              </XStack>
              <ChevronRight size={20} color="$gray11" />
            </XStack>
          </Button>

          {/* Logout */}
          <Button
            backgroundColor="$gray1"
            borderColor="$gray4"
            borderWidth={1}
            pressStyle={{ opacity: 0.8 }}
            onPress={() => {
              // Handle logout
            }}
          >
            <XStack padding="$3" alignItems="center" space="$3">
              <LogOut size={24} color="$red10" />
              <Text fontWeight="bold" color="$red10">Log Out</Text>
            </XStack>
          </Button>
        </YStack>
      </ScrollView>
    </Screen>
  )
}
