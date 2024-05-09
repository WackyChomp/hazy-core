'use client'

import React, {useState} from 'react'
import { useGetCalls } from '@/hook/useGetCalls'
import { useRouter } from 'next/navigation'
import { Call, CallRecording } from '@stream-io/video-react-sdk'
import MeetingCard from './MeetingCard'

type Props = {}

const CallList = ({ type }: {type: 'ended' | 'upcoming' | 'recordings'} ) => {

  const { endedCalls, upcomingCalls, isLoading } = useGetCalls();
  const [recordings, setRecordings] = useState<CallRecording[]>([])
  const router = useRouter();


  const getCalls = () => {
    switch (type) {
      case 'ended':
        return endedCalls;
      case 'recordings':
        return recordings;
      case 'upcoming':
        return upcomingCalls;
      default:
        return [];
    }
  };

  const getNoCallsMessage = () => {
    switch (type) {
      case 'ended':
        return 'No Previous Calls';
      case 'upcoming':
        return 'No Upcoming Calls';
      case 'recordings':
        return 'No Recordings';
        
      default:
        return '';
    }
  }

  const calls = getCalls();
  const noCallsMessage = getNoCallsMessage();


  return (
    <div className='grid grid-cols-1 gap-5 xl:grid-cols-2'>
      {calls && calls.length > 0 ? (calls.map((meeting: Call | CallRecording ) => (
        <MeetingCard />
      ))):(
        //<h1>{noCallsMessage}</h1>       
        // commented out to see how MeetingCard looks like / not able to get a call at all
        <MeetingCard />

      )}
    </div>
  )
}

export default CallList