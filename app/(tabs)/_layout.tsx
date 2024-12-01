import { Tabs, useRouter } from 'expo-router'
import { Home, FileText, DollarSign, Settings } from '@tamagui/lucide-icons'
import { View } from 'react-native'
import { Circle } from 'tamagui'

export default function TabLayout() {
  const router = useRouter()
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          borderTopWidth: 1,
          borderTopColor: '#e5e5e5',
          height: 80,
          paddingBottom: 40,
          paddingTop: 10,
        },
      }}
    >
      <Tabs.Screen
        name="offers/index"
        options={{
          title: 'Offers',
          tabBarIcon: ({ color, size }) => <FileText size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="deals/index"
        options={{
          title: 'Deals',
          tabBarIcon: ({ color, size }) => <FileText size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="dashboard/index"
        options={{
          title: 'Dashboard',
          tabBarIcon: ({ focused }) => (
            <View style={{ 
              marginBottom: 40,
            }}>
              <Circle
                size={66}
                backgroundColor={focused ? '$blue9' : '$blue8'}
                elevation={4}
                pressStyle={{ scale: 0.97 }}
                onPress={() => router.push('/dashboard')}
                animation="bouncy"
                pressable
              >
                <Home size={34} color="white" />
              </Circle>
            </View>
          ),
          tabBarLabel: () => null,
        }}
      />
      <Tabs.Screen
        name="finance/index"
        options={{
          title: 'Finance',
          tabBarIcon: ({ color, size }) => <DollarSign size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="settings/index"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color, size }) => <Settings size={size} color={color} />,
        }}
      />
    </Tabs>
  )
}
