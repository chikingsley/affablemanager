import { useState } from 'react'
import { ChevronDown, ChevronUp, Check } from '@tamagui/lucide-icons'
import { 
  YStack, 
  XStack, 
  Text,
  H4,
  Button,
  Card,
  Sheet,
  ScrollView,
  View
} from 'tamagui'

interface DealProps {
  partner: string
  geo: string
  dates: string
  funnels: string[]
  status: 'completed' | 'pending' | 'overdue'
  totalAmount: number
  cpaRate: number
  crgRate: number
  grossLeads: number
  deductions: number
  invalidRate: number
  netLeads: number
  ftds: number
  crRate: number
  invalidDeductRate: number
  ftdCost: number
  crgCost: number
  totalCost: number
  profit: number
  profitPercent: number
}

const StatusPill = ({ 
  status,
  onStatusChange 
}: {
  status: 'Open' | 'Closed'
  onStatusChange: (newStatus: 'Open' | 'Closed') => void
}) => {
  const [isOpen, setIsOpen] = useState(false)

  const getStatusColor = (s: string) => {
    switch (s) {
      case 'Open': return { bg: '$green3', color: '$green11' }
      case 'Closed': return { bg: '$gray3', color: '$gray11' }
      default: return { bg: '$gray3', color: '$gray11' }
    }
  }

  return (
    <View>
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
        snapPoints={[25]}
        dismissOnSnapToBottom
      >
        <Sheet.Frame>
          <Sheet.ScrollView>
            <YStack padding="$4" space="$3">
              {['Open', 'Closed'].map((s) => (
                <Button
                  key={s}
                  size="$4"
                  themed
                  alignItems="center"
                  justifyContent="space-between"
                  onPress={() => {
                    onStatusChange(s as 'Open' | 'Closed')
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
    </View>
  )
}

const formatNumber = (num: number | undefined) => {
  return num?.toLocaleString() ?? '0'
}

const DealStats = ({ label, value }: { label: string; value: string | number }) => (
  <YStack>
    <Text size="$2" color="$gray11">{label}</Text>
    <Text fontWeight="500" size="$3">{value}</Text>
  </YStack>
)

const DealStatusBadge = ({ status }: { status: DealProps['status'] }) => {
  const getStatusStyle = () => {
    switch (status) {
      case 'completed': return { bg: '$green3', color: '$green11' }
      case 'pending': return { bg: '$yellow3', color: '$yellow11' }
      case 'overdue': return { bg: '$red3', color: '$red11' }
      default: return { bg: '$gray3', color: '$gray11' }
    }
  }

  return (
    <XStack 
      padding="$2.5" 
      borderRadius="$10"
      {...getStatusStyle()}
    >
      <Text size="$2" fontWeight="500" textTransform="capitalize">
        {status}
      </Text>
    </XStack>
  )
}

export const FinanceCard = ({ deals }: { deals: DealProps[] }) => {
  const [expanded, setExpanded] = useState(false)
  const [currentStatus, setCurrentStatus] = useState<'Open' | 'Closed'>('Open')
  const partner = deals[0]?.partner ?? ''
  
  const groupTotals = {
    totalAmount: deals.reduce((sum, deal) => sum + (deal.totalAmount ?? 0), 0),
    totalCost: deals.reduce((sum, deal) => sum + (deal.totalCost ?? 0), 0),
    totalLeads: deals.reduce((sum, deal) => sum + (deal.grossLeads ?? 0), 0),
    totalFTDs: deals.reduce((sum, deal) => sum + (deal.ftds ?? 0), 0),
    avgCR: deals.length > 0 ? deals.reduce((sum, deal) => sum + (deal.crRate ?? 0), 0) / deals.length : 0
  }

  return (
    <Card elevate bordered>
      <Card.Header onPress={() => setExpanded(!expanded)} padding="$4">
        <YStack space="$4">
          <XStack justifyContent="space-between" alignItems="flex-start">
            <YStack>
              <H4>{partner}</H4>
              <Text size="$3" color="$gray11">{deals.length} Active Deals</Text>
            </YStack>
            <XStack space="$2" alignItems="center">
              <StatusPill status={currentStatus} onStatusChange={setCurrentStatus} />
              <Text fontWeight="500">€{formatNumber(groupTotals.totalAmount)}</Text>
              {expanded ? 
                <ChevronUp size={20} color="var(--gray11)" /> : 
                <ChevronDown size={20} color="var(--gray11)" />
              }
            </XStack>
          </XStack>
          
          <XStack flexWrap="wrap" gap="$4">
            <DealStats label="Total Cost" value={`€${formatNumber(groupTotals.totalCost)}`} />
            <DealStats label="Total Leads" value={formatNumber(groupTotals.totalLeads)} />
            <DealStats label="Total FTDs" value={formatNumber(groupTotals.totalFTDs)} />
            <DealStats label="Avg CR" value={`${groupTotals.avgCR.toFixed(1)}%`} />
          </XStack>

          <XStack space="$2">
            <Button flex={1} variant="outlined" size="$3">Add Deduction</Button>
            <Button flex={1} variant="outlined" size="$3">Add Payment</Button>
            <Button flex={1} variant="outlined" size="$3">PDF Invoice</Button>
          </XStack>
        </YStack>
      </Card.Header>

      {expanded && (
        <ScrollView>
          {deals.map((deal, index) => (
            <YStack 
              key={index}
              borderTopWidth={1}
              borderColor="$gray5"
              padding="$4"
              space="$4"
            >
              <XStack justifyContent="space-between" alignItems="flex-start">
                <YStack>
                  <XStack space="$2" alignItems="center">
                    <Text fontWeight="500">{deal.geo}</Text>
                    <Text color="$gray11">•</Text>
                    <Text color="$gray11">{deal.dates}</Text>
                  </XStack>
                  <Text size="$3" color="$gray11" marginTop="$1">
                    {deal.funnels.join(', ')}
                  </Text>
                </YStack>
                <DealStatusBadge status={deal.status} />
              </XStack>

              <XStack flexWrap="wrap" gap="$4">
                <DealStats label="Gross Leads" value={formatNumber(deal.grossLeads)} />
                <DealStats label="Invalids" value={formatNumber(deal.deductions)} />
                <DealStats label="Invalid %" value={`${deal.invalidRate ?? 0}%`} />
                <DealStats label="Net Leads" value={formatNumber(deal.netLeads)} />
              </XStack>
              
              <XStack flexWrap="wrap" gap="$4">
                <DealStats label="FTDs" value={formatNumber(deal.ftds)} />
                <DealStats label="CR Rate" value={`${deal.crRate ?? 0}%`} />
                <DealStats label="FTD Cost" value={`€${formatNumber(deal.ftdCost)}`} />
                <DealStats label="CRG Cost" value={`€${formatNumber(deal.crgCost)}`} />
              </XStack>

              <Card backgroundColor="$gray3" padding="$4">
                <XStack justifyContent="space-between" space="$4">
                  <DealStats label="Total Cost" value={`€${formatNumber(deal.totalCost)}`} />
                  <DealStats label="Profit" value={`€${formatNumber(deal.profit)}`} />
                  <DealStats label="Profit %" value={`${deal.profitPercent ?? 0}%`} />
                </XStack>
              </Card>
            </YStack>
          ))}
        </ScrollView>
      )}
    </Card>
  )
}