import React from 'react'
import Image from 'next/image'

type Props = {
  className: string;
  img: string;
  title: string;
  description: string;
  handleClick: () => void;
}

const HomeCard = ({ className, img, title, description, handleClick}: Props) => {
  const plus = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXBsdXMiPjxwYXRoIGQ9Ik01IDEyaDE0Ii8+PHBhdGggZD0iTTEyIDV2MTQiLz48L3N2Zz4='

  return (
    <div 
    className={`bg-blue-500 px-5 py-10 flex flex-col justify-between w-full 
    xl:max-w-[300px] min-h[250px] rounded-md cursor-pointer`}
    onClick={() => {}}
  >
    <div className="flex-center glassmorphism size-12 rounded-md">
      <Image 
        src={plus}
        alt='add-new-meeting'
        width={25}
        height={25}
      />
    </div>

    <div className="flex flex-col pt-12">
      <h1 className='text-2xl font-bold'>New Meeting</h1>
      <p className='text-lg'>Start an instant meeting</p>
    </div>
  </div>
  )
}

export default HomeCard