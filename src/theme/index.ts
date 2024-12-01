import { createTheme } from '@tamagui/core'

export const lightTheme = createTheme({
  background: '#ffffff',
  backgroundHover: '#f5f5f5',
  backgroundPress: '#eeeeee',
  backgroundFocus: '#f5f5f5',
  backgroundStrong: '#ffffff',
  backgroundTransparent: 'rgba(255,255,255,0)',
  color: '#000000',
  colorHover: '#111111',
  colorPress: '#222222',
  colorFocus: '#111111',
  colorTransparent: 'rgba(0,0,0,0)',
  borderColor: '#eeeeee',
  borderColorHover: '#dddddd',
  borderColorFocus: '#dddddd',
  borderColorPress: '#cccccc',
  placeholderColor: '#999999',
  primary: '#007AFF',
  secondary: '#5856D6',
  success: '#34C759',
  warning: '#FF9500',
  error: '#FF3B30',
  text: '#000000',
  textMuted: '#666666',
})

export const darkTheme = createTheme({
  background: '#000000',
  backgroundHover: '#111111',
  backgroundPress: '#222222',
  backgroundFocus: '#111111',
  backgroundStrong: '#000000',
  backgroundTransparent: 'rgba(0,0,0,0)',
  color: '#ffffff',
  colorHover: '#eeeeee',
  colorPress: '#dddddd',
  colorFocus: '#eeeeee',
  colorTransparent: 'rgba(255,255,255,0)',
  borderColor: '#333333',
  borderColorHover: '#444444',
  borderColorFocus: '#444444',
  borderColorPress: '#555555',
  placeholderColor: '#666666',
  primary: '#0A84FF',
  secondary: '#5E5CE6',
  success: '#32D74B',
  warning: '#FF9F0A',
  error: '#FF453A',
  text: '#ffffff',
  textMuted: '#999999',
})

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
}

export const borderRadius = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  round: 9999,
}

export const typography = {
  heading: {
    h1: {
      fontSize: 32,
      lineHeight: 40,
      fontWeight: '700',
    },
    h2: {
      fontSize: 28,
      lineHeight: 36,
      fontWeight: '700',
    },
    h3: {
      fontSize: 24,
      lineHeight: 32,
      fontWeight: '600',
    },
    h4: {
      fontSize: 20,
      lineHeight: 28,
      fontWeight: '600',
    },
    h5: {
      fontSize: 18,
      lineHeight: 24,
      fontWeight: '600',
    },
  },
  body: {
    large: {
      fontSize: 18,
      lineHeight: 28,
    },
    regular: {
      fontSize: 16,
      lineHeight: 24,
    },
    small: {
      fontSize: 14,
      lineHeight: 20,
    },
    xs: {
      fontSize: 12,
      lineHeight: 16,
    },
  },
}
