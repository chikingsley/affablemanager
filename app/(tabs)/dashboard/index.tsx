import React from 'react'
import { ScrollView, YStack } from 'tamagui'
import { Screen, StatsCard, ActionItem } from '../../../src/components/common'
import { NavBar } from '../../../src/components/navigation'
import { Home, DollarSign, FileText, Briefcase, Users } from '@tamagui/lucide-icons'
import { useRouter } from 'expo-router'

export default function DashboardScreen() {
  const router = useRouter()

  const stats = [
    {
      title: 'Active Leads',
      value: '124',
      icon: <Users size={24} color="white" />,
      trend: { value: 12, isPositive: true },
      color: '$blue10',
      onPress: () => router.push('/leads'),
    },
    {
      title: 'Open Deals',
      value: '8',
      icon: <Briefcase size={24} color="white" />,
      trend: { value: -5, isPositive: false },
      color: '$purple10',
      onPress: () => router.push('/deals'),
    },
    {
      title: 'Revenue',
      value: '$12,450',
      icon: <DollarSign size={24} color="white" />,
      trend: { value: 8, isPositive: true },
      color: '$green10',
      onPress: () => router.push('/finance'),
    },
  ]

  const actionItems = [
    {
      title: 'Update Deal Status',
      description: '3 deals need status updates',
      icon: <Briefcase size={20} color="$orange10" />,
      onPress: () => router.push('/deals'),
    },
    {
      title: 'Follow-up Required',
      description: '5 leads waiting for follow-up',
      icon: <Users size={20} color="$red10" />,
      onPress: () => router.push('/leads'),
    },
    {
      title: 'New Offers',
      description: '2 new offers to review',
      icon: <FileText size={20} color="$blue10" />,
      onPress: () => router.push('/offers'),
    },
  ]

  const quickActions = [
    {
      title: 'Add New Lead',
      description: 'Create a new lead',
      icon: <Users size={20} color="$primary" />,
      onPress: () => router.push('/leads/new'),
    },
    {
      title: 'Create Deal',
      description: 'Start a new deal',
      icon: <Briefcase size={20} color="$primary" />,
      onPress: () => router.push('/deals/new'),
    },
    {
      title: 'Add Offer',
      description: 'Create new offer',
      icon: <FileText size={20} color="$primary" />,
      onPress: () => router.push('/offers/new'),
    },
  ]

  return (
    <Screen>
      <NavBar title="Dashboard" />
      
      <ScrollView>
        <YStack padding="$md" gap="$lg">
          {/* Stats Overview */}
          <YStack gap="$sm">
            {stats.map((stat, index) => (
              <StatsCard
                key={index}
                title={stat.title}
                value={stat.value}
                icon={stat.icon}
                trend={stat.trend}
                color={stat.color}
                onPress={stat.onPress}
              />
            ))}
          </YStack>

          {/* Action Items */}
          <YStack gap="$sm">
            {actionItems.map((item, index) => (
              <ActionItem
                key={index}
                title={item.title}
                description={item.description}
                icon={item.icon}
                onPress={item.onPress}
              />
            ))}
          </YStack>

          {/* Quick Actions */}
          <YStack gap="$sm">
            {quickActions.map((action, index) => (
              <ActionItem
                key={index}
                title={action.title}
                description={action.description}
                icon={action.icon}
                onPress={action.onPress}
                actionLabel="Create"
              />
            ))}
          </YStack>
        </YStack>
      </ScrollView>
    </Screen>
  )
}
