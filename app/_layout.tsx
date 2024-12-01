import { Stack } from 'expo-router'
import { TamaguiProvider, Theme } from 'tamagui'
import config from '../tamagui.config'
import { useFonts } from 'expo-font'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { ThemeProvider, useTheme } from '../src/context/ThemeContext'

function RootLayoutInner() {
  const { theme } = useTheme()
  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  })

  if (!loaded) return null

  return (
    <Theme name={theme}>
      <SafeAreaProvider>
        <StatusBar style={theme === 'dark' ? 'light' : 'dark'} />
        <Stack
          screenOptions={{
            headerShown: false,
            contentStyle: {
              backgroundColor: '$background',
            },
          }}
        >
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
      </SafeAreaProvider>
    </Theme>
  )
}

export default function RootLayout() {
  return (
    <TamaguiProvider config={config}>
      <ThemeProvider>
        <RootLayoutInner />
      </ThemeProvider>
    </TamaguiProvider>
  )
}
