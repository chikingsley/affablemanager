import React from 'react'
import { Button, styled, Text, XStack } from 'tamagui'
import { Check } from '@tamagui/lucide-icons'

const ChipButton = styled(Button, {
  backgroundColor: '$gray2',
  borderRadius: '$full',
  paddingHorizontal: '$md',
  paddingVertical: '$sm',
  height: 'auto',
  
  variants: {
    selected: {
      true: {
        backgroundColor: '$primary',
      },
    },
  },
})

interface FilterChipProps {
  label: string
  selected?: boolean
  onPress?: () => void
  count?: number
}

export function FilterChip({
  label,
  selected,
  onPress,
  count,
}: FilterChipProps) {
  return (
    <ChipButton selected={selected} onPress={onPress}>
      <XStack alignItems="center" gap="$xs">
        {selected && <Check size={14} color="white" />}
        <Text
          color={selected ? 'white' : '$gray11'}
          fontSize="$3"
        >
          {label}
        </Text>
        {count !== undefined && (
          <Text
            color={selected ? 'white' : '$gray11'}
            fontSize="$2"
            opacity={0.8}
          >
            ({count})
          </Text>
        )}
      </XStack>
    </ChipButton>
  )
}
