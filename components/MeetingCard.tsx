import React from 'react'

type Props = {}

const MeetingCard = (props: Props) => {
  return (
    <section className="bg-red-200 text-blue-700 flex flex-col text-xl font-semibold p-10">
      <article className='bg-yellow-500 p-5'>
        <div className="flex justify-between">
          <div className="">
            <h1>Title Here</h1>
            <p>23:00 PM</p>
          </div>
        </div>
      </article>

      <article className='bg-green-500 p-5'>
        <div className="flex justify-between">
          <h1>Title</h1>
          <p>Text goes right here</p>
        </div>
      </article>
    </section>
  )
}

export default MeetingCard