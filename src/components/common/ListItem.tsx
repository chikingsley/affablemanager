import React from 'react'
import { View, Text, XStack, YStack, styled } from 'tamagui'
import { ChevronRight } from '@tamagui/lucide-icons'

const ListItemContainer = styled(XStack, {
  padding: '$md',
  backgroundColor: 'white',
  borderBottomWidth: 1,
  borderBottomColor: '$gray4',
  alignItems: 'center',
  gap: '$sm',
  pressStyle: {
    backgroundColor: '$gray2',
  },
})

const IconContainer = styled(View, {
  width: 40,
  height: 40,
  borderRadius: '$round',
  backgroundColor: '$gray2',
  justifyContent: 'center',
  alignItems: 'center',
})

interface ListItemProps {
  title: string
  subtitle?: string
  rightText?: string
  icon?: React.ReactNode
  onPress?: () => void
  showArrow?: boolean
}

export function ListItem({
  title,
  subtitle,
  rightText,
  icon,
  onPress,
  showArrow = true,
}: ListItemProps) {
  return (
    <ListItemContainer onPress={onPress}>
      {icon && <IconContainer>{icon}</IconContainer>}
      
      <YStack flex={1} gap="$xs">
        <Text fontSize="$4" fontWeight="600" numberOfLines={1}>
          {title}
        </Text>
        {subtitle && (
          <Text fontSize="$3" color="$gray11" numberOfLines={2}>
            {subtitle}
          </Text>
        )}
      </YStack>
      
      <XStack alignItems="center" gap="$sm">
        {rightText && (
          <Text fontSize="$3" color="$gray11">
            {rightText}
          </Text>
        )}
        {showArrow && <ChevronRight size={20} color="$gray9" />}
      </XStack>
    </ListItemContainer>
  )
}
