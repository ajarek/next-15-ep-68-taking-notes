'use client'

import Link from 'next/link'

const Links = () => {
  
  return (
    <div className=' w-full flex flex-col items-start justify-end gap-4'>
     
        <Link
          href='/about-us'
          className={`  text-xl hover:text-primary focus:text-primary `}
          aria-label='Shop'
        >
          O nas
        </Link>
        <Link
          href='/suits'
          className={`  text-xl hover:text-primary focus:text-primary `}
          aria-label='About Us'
        >
          Garnitury
        </Link>

        <Link
          href='/contact'
          className={`  text-xl hover:text-primary focus:text-primary `}
          aria-label='Contact'
        >
          Kontakt
        </Link>

        
     
    </div>
  )
}

export default Links
