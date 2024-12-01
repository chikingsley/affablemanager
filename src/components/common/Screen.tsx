import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styled } from 'tamagui'
import { ScrollView, View } from 'tamagui'

const Container = styled(SafeAreaView, {
  name: 'Container',
  flex: 1,
  backgroundColor: '$background',
})

const Content = styled(ScrollView, {
  name: 'Content',
  flex: 1,
  padding: '$md',
})

const StaticContent = styled(View, {
  name: 'StaticContent',
  flex: 1,
  padding: '$md',
})

interface ScreenProps {
  children: React.ReactNode
  scrollable?: boolean
  padding?: boolean
}

export const Screen: React.FC<ScreenProps> = ({
  children,
  scrollable = true,
  padding = true,
}) => {
  const ContentComponent = scrollable ? Content : StaticContent

  return (
    <Container>
      <ContentComponent padding={padding ? '$md' : 0}>{children}</ContentComponent>
    </Container>
  )
}
