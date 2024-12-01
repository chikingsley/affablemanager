import { createTamagui } from 'tamagui'
import { createInterFont } from '@tamagui/font-inter'
import { shorthands } from '@tamagui/shorthands'
import { themes, tokens } from '@tamagui/themes'
import { createMedia } from '@tamagui/react-native-media-driver'
import { createAnimations } from '@tamagui/animations-react-native'

const headingFont = createInterFont({
  size: {
    1: 12,
    2: 14,
    3: 15,
    4: 16,
    5: 18,
    6: 20,
    7: 24,
    8: 28,
    9: 32,
    10: 36,
  },
  transform: {
    6: 'uppercase',
    7: 'none',
  },
  weight: {
    1: '300',
    2: '400',
    3: '500',
    4: '600',
    5: '700',
    6: '800',
  },
  color: {
    1: '$colorFocus',
    2: '$color',
  },
  letterSpacing: {
    5: 2,
    6: 1,
    7: 0,
    8: -1,
    9: -2,
    10: -3,
    12: -4,
  },
  face: {
    300: { normal: 'InterLight' },
    400: { normal: 'Inter' },
    500: { normal: 'Inter' },
    600: { normal: 'InterSemiBold' },
    700: { normal: 'InterBold' },
    800: { normal: 'InterBold' },
  },
})

const bodyFont = createInterFont(
  {
    size: {
      1: 12,
      2: 14,
      3: 15,
      4: 16,
      5: 18,
      6: 20,
      7: 24,
      8: 28,
      9: 32,
      10: 36,
    },
    transform: {
      6: 'uppercase',
      7: 'none',
    },
    weight: {
      1: '300',
      2: '400',
      3: '500',
      4: '600',
      5: '700',
      6: '800',
    },
    color: {
      1: '$colorFocus',
      2: '$color',
    },
    letterSpacing: {
      5: 2,
      6: 1,
      7: 0,
      8: -1,
      9: -2,
      10: -3,
      12: -4,
    },
    face: {
      300: { normal: 'InterLight' },
      400: { normal: 'Inter' },
      500: { normal: 'Inter' },
      600: { normal: 'InterSemiBold' },
      700: { normal: 'InterBold' },
      800: { normal: 'InterBold' },
    },
  },
  {
    sizeSize: (size) => Math.round(size * 1.1),
  }
)

const animations = createAnimations({
  bouncy: {
    type: 'spring',
    damping: 10,
    mass: 0.9,
    stiffness: 100,
  },
  quick: {
    type: 'spring',
    damping: 20,
    mass: 1.2,
    stiffness: 250,
  },
  slow: {
    type: 'spring',
    damping: 20,
    stiffness: 60,
  },
})

const config = createTamagui({
  defaultTheme: 'light',
  shouldAddPrefersColorThemes: false,
  themeClassNameOnRoot: false,
  shorthands,
  fonts: {
    heading: headingFont,
    body: bodyFont,
  },
  themes,
  tokens,
  media: createMedia({
    xs: { maxWidth: 660 },
    sm: { maxWidth: 800 },
    md: { maxWidth: 1020 },
    lg: { maxWidth: 1280 },
    xl: { maxWidth: 1420 },
    xxl: { maxWidth: 1600 },
    gtXs: { minWidth: 660 + 1 },
    gtSm: { minWidth: 800 + 1 },
    gtMd: { minWidth: 1020 + 1 },
    gtLg: { minWidth: 1280 + 1 },
    short: { maxHeight: 820 },
    tall: { minHeight: 820 },
    hoverNone: { hover: 'none' },
    pointerCoarse: { pointer: 'coarse' },
  }),
  animations,
})

export type AppConfig = typeof config

declare module 'tamagui' {
  interface TamaguiCustomConfig extends AppConfig {}
}

export default config
