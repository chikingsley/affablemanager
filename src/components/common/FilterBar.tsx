import { ScrollView, Button, XStack } from 'tamagui'

interface FilterItem {
  label: string
  active: boolean
}

interface FilterBarProps {
  filters: FilterItem[]
  onFilterClick?: (index: number) => void
}

const FilterBar = ({ filters, onFilterClick }: FilterBarProps) => {
  return (
    <ScrollView 
      horizontal 
      showsHorizontalScrollIndicator={false}
      paddingHorizontal="$4"
      paddingVertical="$3"
    >
      <XStack space="$2">
        {filters.map((filter, index) => (
          <Button
            key={index}
            size="$3"
            borderRadius="$10"
            paddingHorizontal="$3.5"
            backgroundColor={filter.active ? '$blue3' : '$gray3'}
            color={filter.active ? '$blue11' : '$gray11'}
            pressStyle={{
              opacity: 0.8,
              scale: 0.98
            }}
            onPress={() => onFilterClick?.(index)}
          >
            {filter.label}
          </Button>
        ))}
      </XStack>
    </ScrollView>
  )
}

export default FilterBar