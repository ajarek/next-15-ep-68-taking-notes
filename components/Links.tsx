'use client'

import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import { Archive, House, Tag } from 'lucide-react'

const Links = () => {
  
  return (
    <div className=' w-full flex flex-col items-start justify-end gap-4'>
     
        <Link
          href='/'
          className={`${buttonVariants({
            variant: 'default',
          })} h-7 text-[18px] w-full`}
          aria-label='Shop'
        >
          <House/>All Notes
        </Link>
        <Link
          href='/archive'
          className={`${buttonVariants({
            variant: 'default',
          })} h-7 text-[18px] w-full`}
          aria-label='About Us'
        >
         <Archive /> Archived Notes
        </Link>

        <Link
          href='/tags'
          className={`w-full flex justify-center items-center gap-2  text-[18px] hover:text-primary focus:text-primary `}
          aria-label='Contact'
        >
        <Tag/> Tags :
        </Link>

        
     
    </div>
  )
}

export default Links
