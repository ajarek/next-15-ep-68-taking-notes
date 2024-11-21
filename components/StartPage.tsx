import Image from "next/image"
import Link from "next/link"
import React from "react"

const StartPage = () => {
  return (
    <div className='min-h-screen ml-[200px] max-lg:ml-0 flex flex-col justify-center items-center'>
      <div className='flex'>
          <Link href='/register' className="self-end mb-2 text-2xl italic">Log in...</Link>
        <Image
          src='/pen.png'
          alt='logo'
          width={160}
          height={160}
          aria-label='logo'
        />
      </div>
    </div>
  )
}

export default StartPage
