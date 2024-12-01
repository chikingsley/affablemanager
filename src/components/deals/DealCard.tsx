import { useState } from 'react'
import { ChevronDown, ChevronUp, Check } from '@tamagui/lucide-icons'
import { 
  YStack, 
  XStack, 
  Stack, 
  Text, 
  Button,
  Card,
  H4,
  Paragraph,
  Sheet,
  ScrollView,
} from 'tamagui'
import type { AnimationProp } from '@tamagui/core'

export interface DealProps {
  id: string
  title: string
  partner: string
  geo: string
  language?: string
  sources: string[]
  funnels: string[]
  status: 'Not Approved' | 'Extend' | 'Negotiating' | 'Prepay' | 'Confirmed'
  price: {
    type: 'cpa' | 'cpl'
    value: string
  }
  timeStatus: 'upcoming' | 'active' | 'completed'
  timeRemaining: string
  conversionRate: number
  leadsReceived: number
  leadsRequested: number
  deposits: number
  invalids: number
  workingHours: string
  startDate: string
  endDate: string
  needsAttention: boolean
  ftds: number
  cr: number
}

const StatusPill = ({ 
  status, 
  onStatusChange 
}: {
  status: DealProps['status']
  onStatusChange: (newStatus: DealProps['status']) => void
}) => {
  const [isOpen, setIsOpen] = useState(false)

  const getStatusColor = (s: string) => {
    switch (s) {
      case 'Confirmed': return { bg: '$green3', color: '$green11' }
      case 'Prepay': return { bg: '$purple3', color: '$purple11' }
      case 'Extend':
      case 'Negotiating': return { bg: '$yellow3', color: '$yellow11' }
      case 'Not Approved': return { bg: '$red3', color: '$red11' }
      default: return { bg: '$gray3', color: '$gray11' }
    }
  }

  const allStatuses: DealProps['status'][] = [
    'Confirmed',
    'Prepay',
    'Extend',
    'Negotiating',
    'Not Approved'
  ]

  return (
    <Stack>
      <Button
        size="$2"
        {...getStatusColor(status)}
        pressStyle={{ opacity: 0.8 }}
        borderRadius="$10"
        onPress={() => setIsOpen(true)}
      >
        {status}
      </Button>

      <Sheet
        modal
        open={isOpen}
        onOpenChange={setIsOpen}
        snapPoints={[30]}
        dismissOnSnapToBottom
      >
        <Sheet.Frame>
          <Sheet.ScrollView>
            <YStack padding="$4" space="$3">
              {allStatuses.map((s) => (
                <Button
                  key={s}
                  size="$4"
                  theme="active"
                  alignItems="center"
                  justifyContent="space-between"
                  onPress={() => {
                    onStatusChange(s)
                    setIsOpen(false)
                  }}
                >
                  <Text>{s}</Text>
                  {status === s && <Check size={16} />}
                </Button>
              ))}
            </YStack>
          </Sheet.ScrollView>
        </Sheet.Frame>
      </Sheet>
    </Stack>
  )
}

const TimeStatusRow = ({ 
  timeStatus, 
  timeRemaining,
  workingHours 
}: { 
  timeStatus: DealProps['timeStatus']
  timeRemaining: string
  workingHours: string
}) => {
  const getTimeColor = () => {
    switch (timeStatus) {
      case 'upcoming': return '$yellow11'
      case 'active': return '$green11'
      default: return '$gray11'
    }
  }

  return (
    <XStack justifyContent="space-between" alignItems="center">
      <Text fontSize="$3" color="$gray11">
        Working Hours: {workingHours}
      </Text>
      <Text fontSize="$3" color={getTimeColor()}>
        {timeStatus === 'upcoming' && `Starts in ${timeRemaining}`}
        {timeStatus === 'active' && `${timeRemaining} left`}
        {timeStatus === 'completed' && 'Completed'}
      </Text>
    </XStack>
  )
}

export const DealCard = ({ deal, onPress }: { deal: DealProps; onPress?: () => void }) => {
  const [expanded, setExpanded] = useState(false)
  const [currentStatus, setCurrentStatus] = useState(deal.status)

  return (
    <Card
      elevate
      bordered
      animation="bouncy"
      scale={0.9}
      hoverStyle={{ scale: 0.925 }}
      pressStyle={{ scale: 0.875 }}
      onPress={onPress}
    >
      <Card.Header onPress={() => setExpanded(!expanded)} paddingVertical="$4">
        <YStack space="$2.5">
          <XStack justifyContent="space-between" alignItems="flex-start" space="$4">
            <YStack space="$2.5" flex={1}>
              <XStack space="$2" alignItems="center" flexWrap="wrap">
                <H4>{deal.title}</H4>
                <Text color="$gray11">•</Text>
                <Text color="$gray11">{deal.partner}</Text>
                <Text color="$gray11">•</Text>
                <Text color="$gray11">{deal.geo}</Text>
                {deal.language && (
                  <>
                    <Text color="$gray11">•</Text>
                    <Text color="$gray11">{deal.language}</Text>
                  </>
                )}
              </XStack>
              
              <Paragraph size="$3" color="$gray11">
                Sources: {deal.sources.join(', ')}
              </Paragraph>
              <Paragraph size="$3" color="$gray11">
                Funnels: {deal.funnels.join(', ')}
              </Paragraph>
            </YStack>

            <YStack space="$2" alignItems="flex-end">
              <StatusPill status={currentStatus} onStatusChange={setCurrentStatus} />
              <Text fontSize="$3" fontWeight="500">
                {deal.leadsReceived}/{deal.leadsRequested} Leads
              </Text>
            </YStack>
          </XStack>

          <TimeStatusRow 
            timeStatus={deal.timeStatus}
            timeRemaining={deal.timeRemaining}
            workingHours={deal.workingHours}
          />
        </YStack>
      </Card.Header>

      {expanded && (
        <Card.Footer padding="$4" space="$4">
          <XStack space="$4" flexWrap="wrap">
            <YStack space="$1" flex={1}>
              <Text fontSize="$2" color="$gray11">Price</Text>
              <Text fontWeight="500">
                {deal.price.type === 'cpa' ? `€${deal.price.value}+` : `${deal.price.value} CPL`}
              </Text>
            </YStack>

            <YStack space="$1" flex={1}>
              <Text fontSize="$2" color="$gray11">FTDs</Text>
              <Text fontWeight="500">{deal.ftds}</Text>
            </YStack>

            <YStack space="$1" flex={1}>
              <Text fontSize="$2" color="$gray11">Invalids</Text>
              <Text fontWeight="500">{deal.invalids}</Text>
            </YStack>

            <YStack space="$1" flex={1}>
              <Text fontSize="$2" color="$gray11">CR</Text>
              <Text fontWeight="500">{deal.cr}%</Text>
            </YStack>
          </XStack>

          <XStack space="$2" padding="$3" backgroundColor="$gray3" borderRadius="$4">
            <Button flex={1} variant="outlined" size="$3">
              Call Statuses
            </Button>
            <Button flex={1} variant="outlined" size="$3">
              Extend Deal
            </Button>
            <Button flex={1} variant="outlined" size="$3">
              Message
            </Button>
          </XStack>
        </Card.Footer>
      )}
    </Card>
  )
}