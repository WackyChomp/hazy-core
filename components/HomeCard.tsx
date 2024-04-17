import React from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

type Props = {
  className: string;
  img: string;
  title: string;
  description: string;
  handleClick: () => void;
}

const HomeCard = ({ className, img, title, description, handleClick}: Props) => {

  return (
    <div 
    className={cn(`bg-gray-800 px-5 py-10 flex flex-col justify-between w-full 
    xl:max-w-[300px] min-h[250px] rounded-md cursor-pointer`, className)}
    onClick={handleClick}
  >
    <div className="flex-center glassmorphism size-12 rounded-md">
      <Image 
        src={img}
        alt='add-new-meeting'
        width={25}
        height={25}
      />
    </div>

    <div className="flex flex-col pt-12">
      <h1 className='text-2xl font-bold'>{title}</h1>
      <p className='text-lg'>{description}</p>
    </div>
  </div>
  )
}

export default HomeCard