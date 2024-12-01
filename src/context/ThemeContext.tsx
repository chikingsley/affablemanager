import React, { createContext, useContext, useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

type ThemeMode = 'light' | 'dark'

interface ThemeContextType {
  theme: ThemeMode
  toggleTheme: () => void
  setTheme: (theme: ThemeMode) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<ThemeMode>('light')

  useEffect(() => {
    // Load saved theme on startup
    AsyncStorage.getItem('theme').then((savedTheme) => {
      if (savedTheme === 'light' || savedTheme === 'dark') {
        setThemeState(savedTheme)
      }
    })
  }, [])

  const setTheme = async (newTheme: ThemeMode) => {
    setThemeState(newTheme)
    await AsyncStorage.setItem('theme', newTheme)
  }

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
