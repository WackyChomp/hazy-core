
import React from 'react'
import { useCall, useCallStateHooks } from '@stream-io/video-react-sdk';
import { Button } from './ui/button';
import { useRouter } from 'next/navigation';

type Props = {}

const EndCallButton = (props: Props) => {
  const call = useCall();
  const router = useRouter();
  const { useLocalParticipant } = useCallStateHooks();
  const localParticipant = useLocalParticipant();

  const isMeetingOwner = localParticipant && call?.state.createdBy && localParticipant.userId === call.state.createdBy.id;

  if(!isMeetingOwner) return null;

  return (
    <Button onClick={async() =>{
      await call.endCall();
      router.push('/')
    }} className='bg-red-600'>
      End this call!!!
    </Button>
  )
}

export default EndCallButton