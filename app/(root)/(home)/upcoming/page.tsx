import React from 'react'
import CallList from '@/components/CallList'

type Props = {}

const Upcoming = (props: Props) => {
  return (
    <section className="flex size-full flex-col gap-10 text-green-700">
    <h1 className="text-3xl font-bold">
      Upcoming Page
    </h1>

    <CallList type='upcoming' />

  </section>
  )
}

export default Upcoming