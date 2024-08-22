import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'

interface ButtonProps {
    isLoading:boolean,
    className?:string,
    children?:React.ReactNode,
}
function SubmitButton({isLoading,children,className}:ButtonProps) {
  return (
    <Button
    type="submit"
    disabled={isLoading}
    className={className ?? 'shad-primary-btn w-full'}
  >
    {isLoading ? (
      <div className="flex items-center gap-4">
        <Image alt='loader' src="/assets/icons/loader.svg" 
        width={24}
        height={24}
        className='animate-spn'/>
        loading ...
      </div>
    ) : (
      children
    )}
  </Button>
  )
}
export default SubmitButton