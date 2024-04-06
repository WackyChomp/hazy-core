import React, { ReactNode } from 'react'
import Sidebar from '@/components/Sidebar'
import Navbar from '@/components/Navbar'

const HomeLayout = ({ children }: {children: ReactNode}) => {
  return (
    <main className='bg-blue-400 relative'>

      <Navbar />

      <div className="bg-red-400 flex">
        <Sidebar/>
        <section className="bg-yellow-400 flex min-h-screen flex-1 flex-col px-10 pb-10 pt-52 max-md:pb-24 sm:px-14">
          <div className="w-full">
            {children}
          </div>
        </section>
      </div>

    </main>
  )
}

export default HomeLayout