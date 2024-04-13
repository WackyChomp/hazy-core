import React from 'react'

type Props = {}

const Home = (props: Props) => {
  return (
    <section className="flex size-full flex-col gap-10 text-green-700">
      <h1 className="text-3xl font-bold">
        Home Page
      </h1>
      <div className="bg-hero_two bg-cover h-[300px] w-full rounded-[20px]">
        <div className="flex h-full flex-col justify-between max-md:px-10 max-md:py-20 p-7">
          <h2 className='glassmorphism max-w-[300px] rounded-xl py-2 text-center text-base font-normal'>
            [Placeholder] Upcoming Meeting at: 3:45 PM
          </h2>
          <div className="glassmorphism max-w-[350px] p-2 rounded-xl flex flex-col gap-3">
            <h1 className='text-4xl font-semibold lg:text-7xl'>11:30 AM</h1>
            <p className='text-lg font-medium lg:text-2xl'>Wednesday, April 20, 20XX</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home