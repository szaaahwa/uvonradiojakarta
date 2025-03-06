import React from 'react'

const Header = ({title, subtitle}) => {
  return (
    <header className='bg-gradient-to-r from-[#761F21] to-[#FB3748] w-full p-5 md:p-10 text-left leading-none '>
        <h1 className=' text-white text-[50px] md:text-[64px] font-bold'>{title}</h1>
        <h2 className='text-white text-[24px] md:text-[32px]'>{subtitle}</h2>
    </header>
  )
}

export default Header