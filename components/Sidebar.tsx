import React from 'react'

type Props = {}

const Sidebar = (props: Props) => {
  return (
    <section className="
      bg-orange-700 text-white sticky left-0 top-0 flex h-screen w-fit 
      flex-col justify-start p-5 pt-24 max-sm:hidden lg:w-[250px]"
    >
      <h1 className='bg-green-700 text-5xl mb-10'>Sidebar Here</h1>
      {/* List of links */}
      <div className="bg-blue-700 flex flex-col gap-4">
        <p>item 1</p>
        <p>item 2</p>
        <p>item 3</p>
        <p>item 4</p>
        <p>item 5</p>
      </div>
    </section>
  )
}

export default Sidebar