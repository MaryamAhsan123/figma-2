import { Button } from '@/components/ui/button'
import React from 'react'
import Image from 'next/image'

const HeroCourses = () => {
  return (
    <div className='font-roboto h-[1742px] pt-[112px] pr-[64px] w-[1280px]'>
      
<div className='w-screen'>
    <h1 className=' text-center font-bold text-[56px]'>Courses</h1>
    <h2 className=' text-center text-lg'>Your Ultimate Guide to learning</h2>
</div>

<div className='w-screen flex justify-center items-center pt-20 h-[40px]'>
<Button className=' text-black bg-white border-black border-1'>Popular</Button>
<Button className=' text-black bg-white border-black border-1'>Recommended</Button>
<Button className=' text-black bg-white border-black border-1'>Best Price</Button>


</div>

<div className='pt-16 md:grid md:grid-cols-3 w-screen gap-y-12 gap-x-6 p-6'>
  <Image className='w-full' src={'/images/course1.svg'} alt='course outline' width={416} height={534}/>
  <Image className='w-full' src={'/images/course2.svg'} alt='course outline' width={416} height={534}/>
  <Image className='w-full' src={'/images/course3.svg'} alt='course outline' width={416} height={534}/>
  <Image className='w-full hidden md:block' src={'/images/course4.svg'} alt='course outline' width={416} height={534}/>
  <Image className='w-full hidden md:block' src={'/images/course5.svg'} alt='course outline' width={416} height={534}/>
  <Image className='w-full hidden md:block' src={'/images/course6.svg'} alt='course outline' width={416} height={534}/>


</div>

<div className='w-screen flex justify-center items-center pt-8 pr-16 '>
        <Button className=' w-[152] h-[40] text-black bg-white border-black border-2'>View All Courses</Button>
      </div>


      <div className='h-[895px] w-[1280px]  pt-[112px] pr-[64] 
'>

<div className='w-screen font-roboto pt-[290px] bg-[#F7F7F7] '>
    <h1 className='md:text-center  font-bold text-5xl'>Our team</h1>
    <h2 className='md:text-center text-lg pt-14'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h2>


</div>

<div className=' md:flex w-screen pt-20 bg-[#F7F7F7] grid grid-cols-1 place-items-center '>

<Image className=' w-full ' src={"/images/team11.svg"} alt='team member' width={394.67} height={273}/>

<Image className='w-full  ' src={"/images/team2.svg"} alt='team member' width={394.67} height={273}/>
<Image className='w-full ' src={"/images/team3.svg"} alt='team member' width={150} height={150}/>
</div>



<div className='md:flex w-screen bg-[#F7F7F7] hidden'>

<Image className='w-full' src={"/images/team4.svg"} alt='team member' width={394.67} height={273}/>
<Image className='w-full' src={"/images/team5.svg"} alt='team member' width={394.67} height={273}/>
<Image className='w-full' src={"/images/team6.svg"} alt='team member' width={394.67} height={273}/>


</div>
   







</div>


    </div>
  )
}

export default HeroCourses
