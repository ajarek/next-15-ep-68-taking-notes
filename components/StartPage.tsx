import Image from "next/image"
import React from "react"

const StartPage = () => {
  return (
    <div className='min-h-screen ml-[200px] flex flex-col justify-center items-center'>
      <div className='flex'>
          <h1 className="self-end mb-2 text-2xl italic">Log in...</h1>
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
