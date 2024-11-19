import type { Session } from 'next-auth'
import Link from 'next/link'
import LogoutBtn from '@/components/LogoutBtn'
import { buttonVariants } from '@/components/ui/button'
import { KeyRound } from 'lucide-react'

const Logout = async ({ session }: { session: Session | null }) => {
  return (
    <>
    {session && (
        <span className='px-4 max-lg:hidden'>{session.user?.email}</span>
      )}
      {session ? (
        <LogoutBtn />
      ) : (
        <Link
          className={`${buttonVariants({
            variant: 'default',
          })} h-7 text-[18px] w-full`}
          href={'/register'}
          aria-label='Login'
        >
         <KeyRound /> Login
        </Link>
      )}
      
    </>
  )
}

export default Logout
