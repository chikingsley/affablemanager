import React from 'react'
import { styled } from 'tamagui'
import { Card } from './Card'
import { Text, View } from 'tamagui'
import { FontAwesome5 } from '@expo/vector-icons'

const IconContainer = styled(View, {
  name: 'IconContainer',
  backgroundColor: '$primary',
  borderRadius: '$round',
  width: 40,
  height: 40,
  justifyContent: 'center',
  alignItems: 'center',
  opacity: 0.2,
  marginBottom: '$sm',
})

interface StatsCardProps {
  title: string
  value: string | number
  icon: string
  trend?: {
    value: number
    isPositive: boolean
  }
  color?: string
}

export const StatsCard: React.FC<StatsCardProps> = ({
  title,
  value,
  icon,
  trend,
  color = '$primary',
}) => {
  return (
    <Card
      size="medium"
      variant="elevated"
      backgroundColor={color}
      padding="$lg"
    >
      <IconContainer backgroundColor={color}>
        <FontAwesome5 name={icon} size={20} color="white" />
      </IconContainer>
      
      <Text
        color="white"
        fontSize="$3"
        opacity={0.9}
        marginBottom="$xs"
      >
        {title}
      </Text>
      
      <Text
        color="white"
        fontSize="$6"
        fontWeight="bold"
        marginBottom={trend ? '$xs' : 0}
      >
        {value}
      </Text>
      
      {trend && (
        <View flexDirection="row" alignItems="center">
          <FontAwesome5
            name={trend.isPositive ? 'arrow-up' : 'arrow-down'}
            size={12}
            color="white"
          />
          <Text
            color="white"
            fontSize="$2"
            marginLeft="$xs"
            opacity={0.9}
          >
            {Math.abs(trend.value)}% from last week
          </Text>
        </View>
      )}
    </Card>
  )
}
