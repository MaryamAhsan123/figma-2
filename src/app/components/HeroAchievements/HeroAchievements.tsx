import React from 'react'
import Image from 'next/image'

const HeroAchievements = () => {
  return (
    <div className='pt-[112px] pr-[64px] h-[488px] w-[1280px]'>
      
<div className=' font-roboto w-screen  '>
    <h1 className='text-center font-bold text-5xl '>
    Our Achivements 
    </h1>

    </div>

    <div className='font-roboto w-screen flex justify-center'>
    <p className='text-lg w-[1152px] h-[54px] text-center pt-4 '>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
    </p>

    </div>

<div className='md:flex pt-16 justify-center items-center w-screen grid grid-cols-2 '>

<Image className='w-full' src={'/images/achieve1.svg'} alt='achievement' width={296} height={80}/>
<Image className='w-full' src={'/images/achieve2.svg'} alt='achievement' width={296} height={80}/>
<Image className='w-full' src={'/images/achieve3.svg'} alt='achievement' width={296} height={80}/>
<Image className='w-full' src={'/images/achieve4.svg'} alt='achievement' width={296} height={80}/>





</div>

    </div>
  )
}

export default HeroAchievements
