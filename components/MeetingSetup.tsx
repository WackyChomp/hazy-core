'use client'

import React, { useState, useEffect } from 'react'
import { Button } from './ui/button'
import { useCall, VideoPreview } from '@stream-io/video-react-sdk'
import { DeviceSettings } from '@stream-io/video-react-sdk'


/*
-Asking whether to toggle microphone and camera
-Render video for preview
*/


type Props = {}

const MeetingSetup = (props: Props) => {
  const [isMicAndCamToggledOn, setisMicAndCamToggledOn] = useState(false);

  const call = useCall();

  if(!call){
    throw new Error ('useCall must be used within StreamCall component')
  }

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
    <div className='bg-blue-800 flex h-screen w-[400px] flex-col items-center justify-center gap-3 text-orange-500'>
      <h1 className='text-2xl font-bold'>MeetingSetup</h1>

      <VideoPreview />

      <div className="border border-yellow-400 flex h-20 items-center justify-center gap-5">
        <label className="flex items-center justify-center gap-2 font-medium">
          <input 
            type="checkbox" 
            checked={isMicAndCamToggledOn}
            onChange={(e) => setisMicAndCamToggledOn(e.target.checked)}
          />
          Join with mic and camera off
        </label>
        <DeviceSettings />
      </div>

      <Button>
        Join Meeting
      </Button>

    </div>
  )
}

export default MeetingSetup