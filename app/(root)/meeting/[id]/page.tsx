'use client'

import { useUser } from '@clerk/nextjs'
import React, { useState} from 'react'
import { StreamCall, StreamTheme } from '@stream-io/video-react-sdk';
import MeetingRoom from '@/components/MeetingRoom';
import MeetingSetup from '@/components/MeetingSetup';
import { useGetCallById } from '@/hook/useGetCallById';
import Loader from '@/components/Loader';

const Meeting = ({ params: {id} }: { params: { id: string } }) => {
  const { user, isLoaded } = useUser();
  const [isSetupComplete, setIsSetupComplete] = useState(false)

  const { call, isCallLoading } = useGetCallById(id);

  if(!isLoaded || !isCallLoading) return <Loader />

  if(!call) return(
    <p className="text-green-400">No call has been found</p>
  )

  return (
    <main className="h-screen w-full">
      <StreamCall>
        <StreamTheme>
          {!isSetupComplete ? (
            <MeetingSetup />      // waiting room
          ):(
            <MeetingRoom />       // 
          )}
        </StreamTheme>
      </StreamCall>
    <div>Meeting Room # {id} </div>
    </main>
  )
}

export default Meeting