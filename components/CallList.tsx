'use client'

import React, {useState} from 'react'
import { useGetCalls } from '@/hook/useGetCalls'
import { useRouter } from 'next/navigation'
import { CallRecording } from '@stream-io/video-react-sdk'

type Props = {}

const CallList = ({ type }: {type: 'ended' | 'upcoming' | 'recordings'} ) => {

  const { endedCalls, upcomingCalls, isLoading } = useGetCalls();
  const [recordings, setRecordings] = useState<CallRecording[]>([])
  const router = useRouter();


  const getCalls = () => {
    switch (type) {
      case 'ended':
        return endedCalls
      case 'recordings':
        return recordings
      case 'upcoming':
        return upcomingCalls

      default:
        return [];
    }
  }

  const getNoCallsMessage = () => {
    switch (type) {
      case 'ended':
        return 'No Previous Calls';
      case 'recordings':
        return 'No Recordings';
      case 'upcoming':
        return 'No Upcoming Calls';
        
      default:
        return '';
    }
  }

  return (
    <div>CallList</div>
  )
}

export default CallList