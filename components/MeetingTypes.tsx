'use client'

import React, { useState } from 'react'
import HomeCard from './HomeCard'
import { useRouter } from 'next/navigation';
import MeetingModal from './MeetingModal';
import { useUser } from '@clerk/nextjs';
import { useStreamVideoClient } from '@stream-io/video-react-sdk';
import { Call } from '@stream-io/video-react-sdk';

type Props = {}

/* Used custom classes from global.css: flex-center , glassmorphism */

const MeetingTypes = (props: Props) => {
  /* Icons as data URL -- https://lucide.dev/icons */
  const Construction = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNvbnN0cnVjdGlvbiI+PHJlY3QgeD0iMiIgeT0iNiIgd2lkdGg9IjIwIiBoZWlnaHQ9IjgiIHJ4PSIxIi8+PHBhdGggZD0iTTE3IDE0djciLz48cGF0aCBkPSJNNyAxNHY3Ii8+PHBhdGggZD0iTTE3IDN2MyIvPjxwYXRoIGQ9Ik03IDN2MyIvPjxwYXRoIGQ9Ik0xMCAxNCAyLjMgNi4zIi8+PHBhdGggZD0ibTE0IDYgNy43IDcuNyIvPjxwYXRoIGQ9Im04IDYgOCA4Ii8+PC9zdmc+'
  const Plus = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXBsdXMiPjxwYXRoIGQ9Ik01IDEyaDE0Ii8+PHBhdGggZD0iTTEyIDV2MTQiLz48L3N2Zz4='
  const Calendar = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNhbGVuZGFyIj48cGF0aCBkPSJNOCAydjQiLz48cGF0aCBkPSJNMTYgMnY0Ii8+PHJlY3Qgd2lkdGg9IjE4IiBoZWlnaHQ9IjE4IiB4PSIzIiB5PSI0IiByeD0iMiIvPjxwYXRoIGQ9Ik0zIDEwaDE4Ii8+PC9zdmc+'
  const Video = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXZpZGVvIj48cGF0aCBkPSJtMjIgOC02IDQgNiA0VjhaIi8+PHJlY3Qgd2lkdGg9IjE0IiBoZWlnaHQ9IjEyIiB4PSIyIiB5PSI2IiByeD0iMiIgcnk9IjIiLz48L3N2Zz4='
  const UserPlus = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXVzZXItcGx1cyI+PHBhdGggZD0iTTE2IDIxdi0yYTQgNCAwIDAgMC00LTRINmE0IDQgMCAwIDAtNCA0djIiLz48Y2lyY2xlIGN4PSI5IiBjeT0iNyIgcj0iNCIvPjxsaW5lIHgxPSIxOSIgeDI9IjE5IiB5MT0iOCIgeTI9IjE0Ii8+PGxpbmUgeDE9IjIyIiB4Mj0iMTYiIHkxPSIxMSIgeTI9IjExIi8+PC9zdmc+'

  const router = useRouter();
  const [meetingState, setMeetingState] = useState<'isScheduleMeeting' | 'isJoiningMeeting' | 'isInstantMeeting' | undefined>()

  /* Variables used to create Meeting Id */
  const { user } = useUser();
  const client = useStreamVideoClient();
  const [values, setValues] = useState({
    dateTime: new Date(),
    description: '',
    link: '',
  });
  const [callDetails, setCallDetails] = useState<Call>();

  const createMeeting = async() => {
    if(!client || !user) return;       // no client + user = nothing happens or exit out without create meeting

    try {
      const id = crypto.randomUUID();     // generate random id for meeting call
      const call = client.call('default', id);

      if(!call) throw new Error('Failed to create a call!!!')

      const startsAt = values.dateTime.toISOString() || new Date(Date.now()).toISOString();
      const description = values.description || "Instant Meeting";

      await call.getOrCreate({
        data:{
          starts_at: startsAt,
          custom:{
            description
          }
        }
      })

      setCallDetails(call);

      if(!values.description){
        router.push(`/meeting/${call.id}`)
      }

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
      <HomeCard 
        img={Plus}
        title='New Meeting'
        description='Start an instant meeting'
        handleClick={() => setMeetingState('isInstantMeeting')}
        className='bg-blue-500'
      />
      <HomeCard 
        img={Calendar}
        title='Schedule Meeting'
        description='Plan a future meeting'
        handleClick={() => setMeetingState('isScheduleMeeting')}
        className='bg-green-500'
      />
      <HomeCard 
        img={Video}
        title='View Past Recordings'
        description="Visit videos you've missed"
        handleClick={() => router.push('/recordings')}
        className='bg-red-500'
      />
      <HomeCard 
        img={UserPlus}
        title='Join Meeting'
        description='Hop onto an existing meeting via invitation link'
        handleClick={() => setMeetingState('isJoiningMeeting')}
        className='bg-purple-500'
      />
      <HomeCard 
        img={Construction}
        title='Coming Soon'
        description="Special feature you'll see in the future"
        handleClick={() => setMeetingState(undefined)}
        className='bg-black'
      />
      <HomeCard 
        img={Construction}
        title='Coming Soon'
        description="Special feature you'll see in the future"
        handleClick={() => setMeetingState(undefined)}
        className='bg-black'
      />


      {/* Modal opens depending on meetingState */}
      <MeetingModal 
        isOpen={meetingState === 'isInstantMeeting'}
        onClose={() => setMeetingState(undefined)}
        title='Start an Instant Meeting Now!!!'
        className='text-pink-400'
        buttonText='Start Meeting'
        handleClick={createMeeting}
      />
    </section>
  )
}

export default MeetingTypes