import React from 'react'
import { ScrollView } from 'react-native'
import { YStack, Text, Card, Button, XStack } from 'tamagui'
import { Plus, Search } from '@tamagui/lucide-icons'
import { useRouter } from 'expo-router'
import { Screen } from '../../../src/components/common'
import { NavBar } from '../../../src/components/navigation'

export default function OffersScreen() {
  const router = useRouter()

  const filters = [
    { id: 'all', label: 'All', count: 25 },
    { id: 'draft', label: 'Draft', count: 8 },
    { id: 'sent', label: 'Sent', count: 10 },
    { id: 'accepted', label: 'Accepted', count: 5 },
    { id: 'rejected', label: 'Rejected', count: 2 },
  ]

  const offers = [
    {
      id: '1',
      title: 'Premium Package Offer',
      client: 'Tech Solutions Ltd',
      value: '$25,000',
      status: 'Sent',
      validUntil: '5 days',
    },
    {
      id: '2',
      title: 'Custom Development',
      client: 'Digital Innovations',
      value: '$45,000',
      status: 'Draft',
      validUntil: '7 days',
    },
    {
      id: '3',
      title: 'Maintenance Contract',
      client: 'Global Systems',
      value: '$12,000',
      status: 'Accepted',
      validUntil: '2 days',
    },
    {
      id: '4',
      title: 'Security Upgrade',
      client: 'Secure Corp',
      value: '$35,000',
      status: 'Rejected',
      validUntil: 'Expired',
    },
  ]

  const renderOfferStatus = (status: string) => {
    const colors = {
      Draft: '$gray10',
      Sent: '$blue10',
      Accepted: '$green10',
      Rejected: '$red10',
    }

    return (
      <Text 
        color={colors[status] || '$gray10'} 
        fontSize="$2" 
        fontWeight="600"
      >
        {status.toUpperCase()}
      </Text>
    )
  }

  return (
    <Screen>
      <NavBar 
        title="Offers"
        rightElement={
          <Button
            size="$3"
            backgroundColor="$blue9"
            icon={<Plus size={18} color="white" />}
            onPress={() => router.push('/offers/new')}
          >
            <Text color="white" fontSize="$3" fontWeight="500">
              New Offer
            </Text>
          </Button>
        }
      />
      <ScrollView style={{ flex: 1 }}>
        <YStack padding="$4" space="$4">
          <XStack space="$2">
            <Card flex={1} bordered padding="$3">
              <Text fontSize="$2" color="$gray10">Total Value</Text>
              <Text fontSize="$6" fontWeight="bold">$117K</Text>
            </Card>
            <Card flex={1} bordered padding="$3">
              <Text fontSize="$2" color="$gray10">Success Rate</Text>
              <Text fontSize="$6" fontWeight="bold">72%</Text>
            </Card>
          </XStack>

          <Card bordered padding="$3">
            <XStack space="$2" alignItems="center">
              <Search size={20} color="$gray10" />
              <Text color="$gray10">Search offers...</Text>
            </XStack>
          </Card>

          <YStack space="$2">
            {offers.map((offer) => (
              <Card
                key={offer.id}
                bordered
                padding="$4"
                pressStyle={{ scale: 0.98 }}
                onPress={() => router.push(`/offers/${offer.id}`)}
              >
                <Text fontWeight="bold" marginBottom="$1">{offer.title}</Text>
                <Text color="$gray10" marginBottom="$2">{offer.client} • {offer.value}</Text>
                <XStack space="$2">
                  {renderOfferStatus(offer.status)}
                  <Text 
                    backgroundColor="$orange2"
                    color="$orange10"
                    padding="$1"
                    borderRadius="$2"
                    fontSize="$2"
                  >
                    Valid for {offer.validUntil}
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
