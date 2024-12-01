import React from 'react'
import { ScrollView } from 'react-native'
import { YStack, Text, Card, Button, XStack } from 'tamagui'
import { Plus, Search, ArrowUpRight, ArrowDownRight } from '@tamagui/lucide-icons'
import { useRouter } from 'expo-router'
import { Screen } from '../../../src/components/common'
import { NavBar } from '../../../src/components/navigation'

export default function FinanceScreen() {
  const router = useRouter()

  return (
    <Screen>
      <NavBar 
        title="Finance"
        rightElement={
          <Button
            size="$3"
            backgroundColor="$blue9"
            icon={<Plus size={18} color="white" />}
            onPress={() => router.push('/finance/new')}
          >
            <Text color="white" fontSize="$3" fontWeight="500">
              New Transaction
            </Text>
          </Button>
        }
      />
      <ScrollView style={{ flex: 1 }}>
        <YStack padding="$4" space="$4">
          <Card bordered padding="$4">
            <Text fontSize="$2" color="$gray10">Total Balance</Text>
            <Text fontSize="$8" fontWeight="bold">$285,450</Text>
            <Text fontSize="$2" color="$green10">+12.5% from last month</Text>
          </Card>

          <XStack space="$2">
            <Card flex={1} bordered padding="$3">
              <Text fontSize="$2" color="$gray10">Income</Text>
              <Text fontSize="$6" fontWeight="bold">$37K</Text>
              <Text fontSize="$2" color="$green10">This Month</Text>
            </Card>
            <Card flex={1} bordered padding="$3">
              <Text fontSize="$2" color="$gray10">Expenses</Text>
              <Text fontSize="$6" fontWeight="bold">$8.5K</Text>
              <Text fontSize="$2" color="$red10">This Month</Text>
            </Card>
          </XStack>

          <Card bordered padding="$3">
            <XStack space="$2" alignItems="center">
              <Search size={20} color="$gray10" />
              <Text color="$gray10">Search transactions...</Text>
            </XStack>
          </Card>

          <YStack space="$2">
            {[
              {
                id: 1,
                title: 'Project Payment',
                amount: '+$25,000',
                type: 'income',
                date: 'Today',
                status: 'Completed'
              },
              {
                id: 2,
                title: 'Software License',
                amount: '-$5,000',
                type: 'expense',
                date: 'Yesterday',
                status: 'Pending'
              }
            ].map((transaction) => (
              <Card
                key={transaction.id}
                bordered
                padding="$4"
                pressStyle={{ scale: 0.98 }}
                onPress={() => router.push(`/finance/${transaction.id}`)}
              >
                <XStack justifyContent="space-between" alignItems="center" marginBottom="$2">
                  <Text fontWeight="bold">{transaction.title}</Text>
                  <Text 
                    color={transaction.type === 'income' ? '$green10' : '$red10'}
                    fontWeight="bold"
                  >
                    {transaction.amount}
                  </Text>
                </XStack>
                <XStack space="$2">
                  <Text 
                    backgroundColor={transaction.status === 'Completed' ? '$green2' : '$orange2'}
                    color={transaction.status === 'Completed' ? '$green10' : '$orange10'}
                    padding="$1"
                    borderRadius="$2"
                    fontSize="$2"
                  >
                    {transaction.status}
                  </Text>
                  <Text 
                    backgroundColor="$gray2"
                    color="$gray10"
                    padding="$1"
                    borderRadius="$2"
                    fontSize="$2"
                  >
                    {transaction.date}
                  </Text>
                </XStack>
              </Card>
            ))}
          </YStack>
        </YStack>
      </ScrollView>
    </Screen>
  )
}
