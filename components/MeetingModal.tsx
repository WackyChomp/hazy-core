import React, { ReactNode } from 'react';
import Image from 'next/image';
import { Button } from './ui/button';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"


type Props = {
  handleClick?: () => void;
  onClose: () => void;
  isOpen: boolean;
  title: string;
  buttonIcon?: string;
  buttonText?: string;
  className?: string;
  children?: ReactNode;
  image?: string;
}

const MeetingModal = ({ buttonIcon, buttonText, children, className, handleClick, image, isOpen, onClose, title}: Props) => {

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogTrigger>Open</DialogTrigger>
      <DialogContent className='flex flex-col w-full max-w-[520px] gap-6 border-none bg-yellow-600'>
        <div className="flex flex-col gap-6">
          {image && (
            <div className="flex justify-center">
              <Image src={image} alt='image' width={100} height={100} />
            </div>
          )}
          <h1 className='text-3xl font-bold'>{title}</h1>
          {children}
          <Button 
            className='bg-green-500 focus-visible:ring-0 focus-visible:ring-offset-0'
            onClick={handleClick}
          >
            {buttonIcon && (
              <Image src={buttonIcon} alt='button-icon' width={30} height={30} />
            )} &nbsp;
            {buttonText || 'Schedule Meeting'}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default MeetingModal