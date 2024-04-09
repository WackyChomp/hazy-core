import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import MobileNav from './MobileNav' 

type Props = {}

const Navbar = (props: Props) => {
  return (
    <nav className="fixed flex-between z-20 w-full bg-yellow-700 p-6 lg:px-10">
      <Link href='/' className='flex items-center gap-1'>
        <Image 
          src='/next.svg'
          alt='Logo'
          width={100}
          height={100}
          className='max-sm:size-10'
        />
        <p className='text-[30px] font-semibold text-yellow-400 max-sm:hidden'>
          Hazy Huddle
        </p>
      </Link>

      <div className="flex-between gap-10">
        {/* Clerk User Management */}

        {/* Mobile Nav for smaller screen */}
        <MobileNav />
      </div>
      
    </nav>
  )
}

export default Navbar