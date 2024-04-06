'use client'

import React from 'react'
import { sidebarLinks } from '@/constants/index'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'

type Props = {}

const Sidebar = (props: Props) => {
  const pathname = usePathname()

  return (
    <section className="
      bg-orange-700 text-white sticky left-0 top-0 flex h-screen w-fit 
      flex-col justify-start p-5 pt-10 max-sm:hidden lg:w-[250px]"
    >
      <h1 className='bg-green-700 text-3xl mb-10'>Sidebar Here</h1>
      {/* List of links */}
      <div className="bg-blue-700 flex flex-col gap-2">
        {sidebarLinks.map((item) => {
          const isActive = pathname === item.route || pathname.startsWith(item.route)

          return(
            <Link 
              href={item.route}
              key={item.label}
              className={cn('flex gap-4 items-center p-5 rounded-xl justify-start', 
                {'bg-purple-400' : isActive,}
              )}
            >
              <Image 
                src={item.imgUrl}
                alt={item.label}
                width={50}
                height={50}
              />
              <p>
                {item.label}
              </p>
            </Link>
          )
        })}
      </div>
    </section>
  )
}

export default Sidebar