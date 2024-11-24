"use client"

import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { Archive, House } from "lucide-react"
import Tags from "./Tags"

const Links = () => {
  return (
    <div className=' w-full flex flex-col items-start justify-end gap-4'>
      <Link
        href='/'
        className={`${buttonVariants({
          variant: "default",
        })} h-7 text-[18px] w-full`}
        aria-label='Shop'
      >
        <House />
        All Notes
      </Link>
      <Link
        href='/archive'
        className={`${buttonVariants({
          variant: "default",
        })} h-7 text-[18px] w-full`}
        aria-label='About Us'
      >
        <Archive /> Archived Notes
      </Link>

      <Tags />
    </div>
  )
}

export default Links
