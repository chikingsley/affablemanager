import React from 'react'
import { XStack, YStack, Text, Button, styled } from 'tamagui'
import { Plus } from '@tamagui/lucide-icons'

const ActionButton = styled(Button, {
  name: 'ActionButton',
  backgroundColor: '$blue9',
  borderRadius: '$4',
  paddingHorizontal: '$4',
  height: 40,
  
  variants: {
    variant: {
      secondary: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: '$blue9',
      },
    },
  },
})

interface PageHeaderProps {
  title: string
  actionLabel?: string
  onAction?: () => void
  rightElement?: React.ReactNode
}

export function PageHeader({ 
  title, 
  actionLabel, 
  onAction,
  rightElement
}: PageHeaderProps) {
  return (
    <YStack paddingTop="$6" paddingHorizontal="$4" space="$4">
      <XStack justifyContent="space-between" alignItems="center">
        <Text 
          fontSize="$7" 
          fontWeight="bold" 
          color="$gray12"
        >
          {title}
        </Text>
        {actionLabel && onAction ? (
          <ActionButton
            icon={<Plus size={18} color="$color" />}
            onPress={onAction}
          >
            {actionLabel}
          </ActionButton>
        ) : rightElement}
      </XStack>
    </YStack>
  )
}
