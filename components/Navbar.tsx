import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <nav className="flex-between z-20 w-full bg-yellow-700 p-6 lg:px-10">
      <Link href='/' className='flex items-center gap-1'>
        <Image 
          src='/next.svg'
          alt='Logo'
          width={50}
          height={50}
          className='max-sm:size-10'
        />
        <p>Hazy Huddle</p>
      </Link>
    </nav>
  )
}

export default Navbar