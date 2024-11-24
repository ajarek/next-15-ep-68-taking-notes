import { buttonVariants } from "@/components/ui/button"
import { Archive, House } from "lucide-react"
import Tags from "./Tags"
import { ModeToggle } from "@/components/ModeToggle"
import Image from "next/image"
import Link from "next/link"
import Logout from "@/components/Logout"
import { auth } from "@/app/api/auth/auth"

const MobileNav = async () => {
  const session = await auth()

  return (
    <div className=' lg:hidden  w-max min-h-16 flex  justify-start items-center gap-2  px-2  border-t-2'>
      <div className='w-full flex items-center justify-between'>
        <Link
          href='/'
          className='h-16 w-fit flex justify-start items-center gap-2 '
        >
          <div className='w-8 h-8 flex justify-center items-center  '>
            <Image
              src='/pen.png'
              alt='logo'
              width={60}
              height={60}
              aria-label='logo'
            />
          </div>
          <h1 className='flex items-center gap-2 text-2xl font-bold text-primary italic '>
            Notes
          </h1>
        </Link>
        <ModeToggle />
      </div>
      <Logout session={session} />

      {session && (
        <>
          <Link
            href='/'
            className={`${buttonVariants({
              variant: "default",
            })} h-7 text-[18px] w-fit`}
            aria-label='Shop'
          >
            <House />
          </Link>
          <Link
            href='/archive'
            className={`${buttonVariants({
              variant: "default",
            })} h-7 text-[18px] w-fit`}
            aria-label='About Us'
          >
            <Archive />
          </Link>

          <Tags />
        </>
      )}
    </div>
  )
}

export default MobileNav
