import Links from "@/components/Links"

import { ModeToggle } from "@/components/ModeToggle"
import Image from "next/image"
import Link from "next/link"
import Logout from "@/components/Logout"
import { auth } from "@/app/api/auth/auth"

const Aside = async () => {
  const session = await auth()
  const { user } = (session as any) || {}
  return (
    <div className='fixed  w-[200px] min-h-screen flex flex-col justify-start items-start gap-4  px-4  border-r-2'>
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

      {user?.admin && (
        <Link
          href='/dashboard'
          className={` text-xl hover:text-primary focus:text-primary px-4`}
        >
          Panel
        </Link>
      )}
      <Links/>
      <Logout session={session} />
      <ModeToggle />
    </div>
  )
}

export default Aside
