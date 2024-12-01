import { styled } from 'tamagui'
import { Button as TamaguiButton } from 'tamagui'

export const Button = styled(TamaguiButton, {
  name: 'Button',
  backgroundColor: '$primary',
  borderRadius: '$md',
  paddingVertical: '$sm',
  paddingHorizontal: '$md',
  
  variants: {
    size: {
      small: {
        paddingVertical: '$xs',
        paddingHorizontal: '$sm',
        fontSize: '$2',
      },
      medium: {
        paddingVertical: '$sm',
        paddingHorizontal: '$md',
        fontSize: '$3',
      },
      large: {
        paddingVertical: '$md',
        paddingHorizontal: '$lg',
        fontSize: '$4',
      },
    },
    variant: {
      filled: {
        backgroundColor: '$primary',
        color: 'white',
      },
      outlined: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: '$primary',
        color: '$primary',
      },
      ghost: {
        backgroundColor: 'transparent',
        color: '$primary',
      },
    },
    disabled: {
      true: {
        opacity: 0.5,
      },
    },
  },
  
  defaultVariants: {
    size: 'medium',
    variant: 'filled',
  },
})
