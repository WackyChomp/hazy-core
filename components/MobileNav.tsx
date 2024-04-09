'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { sidebarLinks } from '@/constants'

import {
  Sheet,
  SheetContent,
  SheetClose,
  SheetTrigger,
} from "@/components/ui/sheet"


type Props = {}

const hamburgerIcon = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLW1lbnUiPjxsaW5lIHgxPSI0IiB4Mj0iMjAiIHkxPSIxMiIgeTI9IjEyIi8+PGxpbmUgeDE9IjQiIHgyPSIyMCIgeTE9IjYiIHkyPSI2Ii8+PGxpbmUgeDE9IjQiIHgyPSIyMCIgeTE9IjE4IiB5Mj0iMTgiLz48L3N2Zz4='

const MobileNav = (props: Props) => {
  const pathname = usePathname();

  return (
    <section className="w-full max-w-[265px]">
      <Sheet>

        <SheetTrigger>
          <Image
            src={hamburgerIcon}
            alt='hamburger-icon'
            width={36}
            height={36}
            className='cursor-pointer'
          />
        </SheetTrigger>

        <SheetContent side='left' className='border-none bg-slate-600'>
          {/* Used from Navbar component */}
          <Link href='/' className='flex items-center gap-1'>
            <Image 
              src='/next.svg'
              alt='Logo'
              width={100}
              height={100}
              className='max-sm:size-10'
            />
            <p className='text-[15px] font-semibold text-yellow-400'>
              Hazy Huddle
            </p>
          </Link>

          {/* Used from Sidebar component */}
          <div className="flex flex-col justify-between overflow-y-auto h-[calc(100vh)-72px]">
            <SheetClose asChild>
              <section className="flex flex-col h-full gap-6 pt-16 text-blue-400">
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
                        width={25}
                        height={25}
                      />
                      <p>
                        {item.label}
                      </p>
                    </Link>
                  )
                })}
              </section>
            </SheetClose>
          </div>

        </SheetContent>

      </Sheet>
    </section>
  )
}

export default MobileNav