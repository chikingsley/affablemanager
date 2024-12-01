import React from 'react'
import { Input, XStack, styled } from 'tamagui'
import { Search, X } from '@tamagui/lucide-icons'

const SearchInput = styled(Input, {
  flex: 1,
  height: 40,
  paddingLeft: 40,
  backgroundColor: '$gray2',
  borderWidth: 0,
})

interface SearchBarProps {
  value: string
  onChangeText: (text: string) => void
  placeholder?: string
  onClear?: () => void
}

export function SearchBar({
  value,
  onChangeText,
  placeholder = 'Search...',
  onClear,
}: SearchBarProps) {
  return (
    <XStack
      position="relative"
      alignItems="center"
      marginVertical="$sm"
      paddingHorizontal="$sm"
    >
      <Search
        size={20}
        color="$gray9"
        position="absolute"
        left={16}
        zIndex={1}
      />
      <SearchInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
      />
      {value.length > 0 && (
        <X
          size={20}
          color="$gray9"
          position="absolute"
          right={16}
          zIndex={1}
          onPress={onClear}
        />
      )}
    </XStack>
  )
}
