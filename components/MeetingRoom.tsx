
import React, { useState } from 'react'
import { CallParticipantsList, CallStatsButton, PaginatedGridLayout, SpeakerLayout } from '@stream-io/video-react-sdk'
import { cn } from '@/lib/utils'
import { Button } from './ui/button'
import { LayoutList, User } from 'lucide-react'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import EndCallButton from './EndCallButton'
import { useSearchParams } from 'next/navigation'


/*
Renders room with all participants and video control settings
*/

type Props = {}
type CallLayoutType = 'grid' | 'speaker-left' | 'speaker-right'

const MeetingRoom = (props: Props) => {
  const [layout, setLayout] = useState<CallLayoutType>('speaker-left')
  const [showParticipants, setShowParticipants] = useState(false)

  const searchParams = useSearchParams();
  const isPersonalRoom = !!searchParams.get('personal');    // !! - 1st becomes false , 2nd makes it true
  
  const CallLayout = () => {
    switch (layout) {
      case 'grid':
        return <PaginatedGridLayout />
      case 'speaker-right':
        return <SpeakerLayout participantsBarPosition='left' />
      default:
        return <SpeakerLayout participantsBarPosition='right' />
    }
  }

  return (
    <section className="relative h-screen w-full overflow-hidden pt-10 text-yellow-500">
      <div className="relative flex size-full items-center justify-center">
        <div className="flex size-full max-w-[1000px] items-center">
          <CallLayout />
        </div>

        <div className={cn(`h-[calc(100vh-90px)] hidden ml-2`, {'show-block': showParticipants})}>
          <CallParticipantsList onClose={() => setShowParticipants(false)} />
        </div>

        <DropdownMenu>
          <div className="flex items-center">
            <DropdownMenuTrigger className='cursor-pointer rounded-2xl bg-red-400 p-5 hover:bg-green-400'>
              <LayoutList size={40} className='text-purple-800'/>
            </DropdownMenuTrigger>
          </div>

          <DropdownMenuContent className='border-blue-800 bg-slate-500 text-white'>
            {['Grid', 'Speaker-Left', 'Speaker-Right'].
              map((item, index) => (
                <div key={index}>
                  <DropdownMenuItem 
                    className='cursor-pointer'
                    onClick={() => {
                      setLayout(item.toLowerCase() as CallLayoutType)
                    }}
                  >
                    {item}
                  </DropdownMenuItem>
                  <DropdownMenuSeparator className='border-green-600'/>
                </div>
              ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <CallStatsButton />

        {/* See/Hide Participants on call */}
        <Button onClick= {()=> setShowParticipants( (prev) => !prev) }>
          <div className="cursor-pointer rounded-4xl bg-orange-400 p-5 hover:bg-blue-400">
            <User size={40} className='text-orange-800' />
          </div>
        </Button>

        {!isPersonalRoom && <EndCallButton/>}
      </div>
    </section>
  )
}

export default MeetingRoom