'use client'

import { useState, useEffect } from 'react'
import { 
  YStack, 
  XStack, 
  Text,
  Card,
  View
} from 'tamagui'

interface LeadProps {
  customer: string
  geo: string
  status: 'New' | 'Follow Up' | 'FTD' | 'Not Interested' | 'NA' | 'Invalid'
  partner: string
  email: string
  timeReceived: string
  timeUpdated: string
}

const StatusPill = ({ status }: { status: LeadProps['status'] }) => {
  const getStatusStyle = (s: string) => {
    switch (s) {
      case 'New': return { 
        backgroundColor: '$blue3',
        color: '$blue11',
        borderColor: '$blue7',
        borderWidth: 1
      }
      case 'Follow Up': return { 
        backgroundColor: '$yellow3',
        color: '$yellow11'
      }
      case 'FTD': return { 
        backgroundColor: '$green3',
        color: '$green11'
      }
      case 'Not Interested':
      case 'NA': return { 
        backgroundColor: '$red2',
        color: '$red11'
      }
      case 'Invalid': return { 
        backgroundColor: '$red3',
        color: '$red11'
      }
      default: return { 
        backgroundColor: '$gray3',
        color: '$gray11'
      }
    }
  }

  return (
    <XStack
      paddingHorizontal="$3"
      paddingVertical="$1.5"
      borderRadius="$10"
      {...getStatusStyle(status)}
    >
      <Text size="$3" fontWeight="500">{status}</Text>
    </XStack>
  )
}

const formatDate = (date: string) => {
  const d = new Date(date)
  const yy = d.getFullYear().toString().slice(-2)
  const mm = String(d.getMonth() + 1).padStart(2, '0')
  const dd = String(d.getDate()).padStart(2, '0')
  const hh = String(d.getHours()).padStart(2, '0')
  const min = String(d.getMinutes()).padStart(2, '0')
  
  return {
    date: `${yy}-${mm}-${dd}`,
    time: `${hh}:${min} UTC`
  }
}

const LiveTimer = ({ startTime }: { startTime: string }) => {
  const [elapsed, setElapsed] = useState('')

  useEffect(() => {
    const calculateElapsed = () => {
      const start = new Date(startTime).getTime()
      const now = new Date().getTime()
      const diff = now - start

      const hours = Math.floor(diff / (1000 * 60 * 60))
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((diff % (1000 * 60)) / 1000)

      return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
    }

    setElapsed(calculateElapsed())
    const interval = setInterval(() => {
      setElapsed(calculateElapsed())
    }, 1000)

    return () => clearInterval(interval)
  }, [startTime])

  return <Text size="$3">{elapsed}</Text>
}

const TimeBlock = ({ label, date, time }: { 
  label: string
  date?: string
  time?: string
}) => (
  <YStack>
    <Text size="$2" color="$gray11">{label}</Text>
    {date && <Text size="$3">{date}</Text>}
    {time && <Text size="$3" color="$gray11">{time}</Text>}
  </YStack>
)

export const LeadsCard = ({ lead }: { lead: LeadProps }) => {
  const receivedTime = formatDate(lead.timeReceived)
  const updatedTime = formatDate(lead.timeUpdated)

  return (
    <Card elevate bordered padding="$4">
      <YStack space="$3">
        {/* Customer Info */}
        <XStack justifyContent="space-between" alignItems="center">
          <XStack space="$2" alignItems="center">
            <Text fontWeight="500">{lead.customer}</Text>
            <Text color="$gray11">•</Text>
            <Text color="$gray11">{lead.geo}</Text>
          </XStack>
          <StatusPill status={lead.status} />
        </XStack>

        {/* Partner & Email */}
        <XStack justifyContent="space-between" alignItems="center">
          <Text size="$3" color="$gray11">{lead.partner}</Text>
          <Text size="$3" color="$gray11">{lead.email}</Text>
        </XStack>

        {/* Time Info */}
        <Card backgroundColor="$gray3" padding="$3">
          <XStack justifyContent="space-between">
            <TimeBlock 
              label="Received"
              date={receivedTime.date}
              time={receivedTime.time}
            />
            <YStack>
              <Text size="$2" color="$gray11">Timer</Text>
              <LiveTimer startTime={lead.timeReceived} />
            </YStack>
            <TimeBlock 
              label="Updated"
              date={updatedTime.date}
              time={updatedTime.time}
            />
          </XStack>
        </Card>
      </YStack>
    </Card>
  )
}