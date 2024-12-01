// src/components/navigation/NavBar.tsx
import React from 'react'
import { XStack, Text, Button, YStack, Badge, styled } from 'tamagui'
import { Bell, Plus, Menu, Filter, ArrowLeft } from '@tamagui/lucide-icons'
import { useRouter } from 'expo-router'

const NavContainer = styled(XStack, {
  height: 72,
  backgroundColor: 'white',
  borderBottomWidth: 1,
  borderBottomColor: '$gray4',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingHorizontal: '$4',
  paddingTop: '$4',
})

const IconButton = styled(Button, {
  size: '$3',
  circular: true,
  unstyled: true,
  pressStyle: { opacity: 0.7 },
  hoverStyle: { backgroundColor: '$gray3' },
})

interface NavBarProps {
  title: string
  leftElement?: React.ReactNode
  rightElement?: React.ReactNode
  showBack?: boolean
  showMenu?: boolean
  showNotification?: boolean
  notificationCount?: number
  onMenuPress?: () => void
}

export function NavBar({
  title,
  leftElement,
  rightElement,
  showBack = false,
  showMenu = false,
  showNotification = true,
  notificationCount,
  onMenuPress,
}: NavBarProps) {
  const router = useRouter()

  return (
    <YStack>
      <NavContainer>
        <XStack flex={1} alignItems="center" space="$2">
          {showBack && (
            <IconButton onPress={() => router.back()}>
              <ArrowLeft size={24} color="$gray12" />
            </IconButton>
          )}
          {showMenu && (
            <IconButton onPress={onMenuPress}>
              <Menu size={24} color="$gray12" />
            </IconButton>
          )}
          {leftElement}
          <Text fontSize="$6" fontWeight="bold" color="$gray12">
            {title}
          </Text>
        </XStack>

        <XStack alignItems="center" space="$3">
          {rightElement}
          {showNotification && (
            <IconButton onPress={() => router.push('/notifications')}>
              <Bell size={24} color="$gray12" />
              {notificationCount > 0 && (
                <Badge
                  size="$2"
                  backgroundColor="$red10"
                  position="absolute"
                  top={-4}
                  right={-4}
                >
                  {notificationCount}
                </Badge>
              )}
            </IconButton>
          )}
        </XStack>
      </NavContainer>
    </YStack>
  )
}