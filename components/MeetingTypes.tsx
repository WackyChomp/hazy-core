'use client'

import React, { useState } from 'react'
import HomeCard from './HomeCard'
import { useRouter } from 'next/navigation';

type Props = {}

/* Used custom classes from global.css: flex-center , glassmorphism */

const MeetingTypes = (props: Props) => {
  const plus = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXBsdXMiPjxwYXRoIGQ9Ik01IDEyaDE0Ii8+PHBhdGggZD0iTTEyIDV2MTQiLz48L3N2Zz4='

  const router = useRouter();
  const [meetingState, setMeetingState] = useState<'isScheduleMeeting' | 'isJoiningMeeting' | 'isInstantMeeting' | undefined>()

  return (
    <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
      <HomeCard 
        img={plus}
        title='New Meeting'
        description='Start an instant meeting'
        handleClick={() => setMeetingState('isJoiningMeeting')}
        className=''
      />
      <HomeCard 
        img={plus}
        title='Schedule Meeting'
        description='Plan a future meeting'
        handleClick={() => setMeetingState('isScheduleMeeting')}
        className='bg-green-500'
      />
      <HomeCard 
        img={plus}
        title='View Past Recordings'
        description='Start an instant meeting'
        handleClick={() => setMeetingState('isJoiningMeeting')}
        className='bg-red-500'
      />
      <HomeCard 
        img={plus}
        title='New Meeting'
        description='Start an instant meeting'
        handleClick={() => router.push('/recordings')}
        className='bg-purple-500'
      />
    </section>
  )
}

export default MeetingTypes