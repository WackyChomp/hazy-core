'use client'

import React, { useState, useEffect } from 'react'
import { useCall, VideoPreview } from '@stream-io/video-react-sdk'


/*
-Asking whether to toggle microphone and camera
-Render video for preview
*/


type Props = {}

const MeetingSetup = (props: Props) => {
  const [isMicAndCamToggledOn, setisMicAndCamToggledOn] = useState(false);

  const call = useCall();

  useEffect(() => {
    if(isMicAndCamToggledOn){
      call?.camera.disable();
      call?.microphone.disable();
    }else{
      call?.camera.enable();
      call?.microphone.enable();

    }
    
  }, [isMicAndCamToggledOn, call?.camera, call?.microphone])
  

  return (
    <div className='flex h-screen w-full flex-col items-center justify-center gap-3 text-orange-500'>
      <h1 className='text-2xl font-bold'>MeetingSetup</h1>

      <VideoPreview />

    </div>
  )
}

export default MeetingSetup