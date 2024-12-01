import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

const HeroAbout = () => {
  return (
    <div className='md:flex md:h-screen md:w-screen w:[428px] h-[780px]'>
  

<div className='md:w-1/2 md:flex  md:flex-col md:justify-center  md:items-center'>

<div className='w-[500px] h-[212px]'>    

<h1 className='font-roboto font-bold text-[56px] '>Learn new skills online with ease</h1>

<p className='font-roboto text-[18px]'>Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>


</div>


<div className='md:space-x-3 pt-16 w-[500px] '>

<Button>Start learning now</Button>
<Button className='text-black bg-white border-black border-2'>Explore Courses</Button>

</div>


</div>


<div className='md:flex md:w-1/2 md:justify-end   right-0 h-[800] '>
<Image src={'/images/hero.svg'} alt="photo" width={640} height={900}/>

</div>




    </div>
  )
}

export default HeroAbout
