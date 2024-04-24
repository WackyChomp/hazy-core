
import { useUser } from '@clerk/nextjs'
import React, { useState} from 'react'
import { StreamCall, StreamTheme } from '@stream-io/video-react-sdk';
import MeetingRoom from '@/components/MeetingRoom';
import MeetingSetup from '@/components/MeetingSetup';

const Meeting = ({ params }: { params: { id: string } }) => {
  const { user, isLoaded } = useUser();
  const [isSetupComplete, setIsSetupComplete] = useState(false)

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
    <div>Meeting Room # {params.id} </div>
    </main>
  )
}

export default Meeting