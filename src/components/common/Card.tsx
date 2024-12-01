import { styled } from 'tamagui'
import { View } from 'tamagui'

export const Card = styled(View, {
  name: 'Card',
  backgroundColor: '$background',
  borderRadius: '$lg',
  padding: '$md',
  shadowColor: '$color',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 8,
  elevation: 3,
  
  variants: {
    size: {
      small: {
        padding: '$sm',
      },
      medium: {
        padding: '$md',
      },
      large: {
        padding: '$lg',
      },
    },
    variant: {
      outlined: {
        borderWidth: 1,
        borderColor: '$borderColor',
        shadowOpacity: 0,
        elevation: 0,
      },
      elevated: {
        shadowOpacity: 0.1,
        elevation: 3,
      },
    },
  },
  
  defaultVariants: {
    size: 'medium',
    variant: 'elevated',
  },
})
