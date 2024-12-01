import { Button } from '@/components/ui/button'
import React from 'react'
import { HoverCard } from '@radix-ui/react-hover-card'
import Image from 'next/image'

const HeroInfo = () => {
  return (
    <div className='font-roboto h-[1049px] pt-[112px] pr-[64px] w-[1280px]'>
      <div className='w-screen  '>

        <h1 className=' text-center h-[58px] font-bold text-5xl'>Explore Courses By Category</h1>

        <h2 className='  text-center leading-7  h-[27px] text-lg pt-8'>Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</h2>
      </div>
    
 <div className='md:grid md:grid-cols-3 md:gap-y-16 pt-28 md:gap-x-6  w-screen  '>


<Image className='w-full' src={'/images/card1.svg'} alt='card' width={410.67} height={132}/>
<Image className='w-full' src={'/images/card2.svg'} alt='card' width={410.67} height={132}/>
<Image  className='w-full' src={'/images/card3.svg'} alt='card' width={410.67} height={132}/>
<Image className='w-full hidden md:block' src={'/images/card4.svg'} alt='card' width={410.67} height={132}/>
<Image className='w-full hidden md:block' src={'/images/card5.svg'} alt='card' width={410.67} height={132}/>
<Image className='w-full hidden md:block' src={'/images/card6.svg'} alt='card' width={410.67} height={132}/>
<Image className='w-full hidden md:block' src={'/images/card7.svg'} alt='card' width={410.67} height={132}/>
<Image className='w-full hidden md:block ' src={'/images/card8.svg'} alt='card' width={410.67} height={132}/>
<Image className='w-full hidden md:block' src={'/images/card9.svg'} alt='card' width={410.67} height={132}/>

</div>
      <div className='flex justify-center w-screen items-center pt-12 pr-24 '>
        <Button className='w-[155] h-[48] text-black bg-white border-black border-2'>View All Courses</Button>
      </div>
    </div>
  )
}

export default HeroInfo
