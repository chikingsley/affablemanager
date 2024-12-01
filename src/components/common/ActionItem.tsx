import React from 'react'
import { styled } from 'tamagui'
import { View, Text, Button } from 'tamagui'
import { FontAwesome5 } from '@expo/vector-icons'

const Container = styled(View, {
  name: 'ActionItemContainer',
  flexDirection: 'row',
  alignItems: 'center',
  padding: '$sm',
  borderRadius: '$md',
  backgroundColor: '$backgroundHover',
  marginBottom: '$sm',
})

const IconContainer = styled(View, {
  name: 'ActionItemIconContainer',
  width: 40,
  height: 40,
  borderRadius: '$round',
  justifyContent: 'center',
  alignItems: 'center',
  marginRight: '$sm',
})

interface ActionItemProps {
  title: string
  description: string
  icon: string
  iconColor?: string
  onPress?: () => void
  actionLabel?: string
}

export const ActionItem: React.FC<ActionItemProps> = ({
  title,
  description,
  icon,
  iconColor = '$primary',
  onPress,
  actionLabel = 'View',
}) => {
  return (
    <Container pressStyle={{ opacity: 0.8 }} onPress={onPress}>
      <IconContainer backgroundColor={iconColor}>
        <FontAwesome5 name={icon} size={16} color="white" />
      </IconContainer>
      
      <View flex={1}>
        <Text
          fontSize="$4"
          fontWeight="600"
          marginBottom="$xs"
          numberOfLines={1}
        >
          {title}
        </Text>
        <Text
          fontSize="$3"
          color="$textMuted"
          numberOfLines={2}
        >
          {description}
        </Text>
      </View>
      
      {onPress && (
        <Button
          size="small"
          variant="outlined"
          marginLeft="$sm"
          onPress={onPress}
        >
          {actionLabel}
        </Button>
      )}
    </Container>
  )
}
