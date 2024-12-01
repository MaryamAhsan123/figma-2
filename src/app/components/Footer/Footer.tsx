import { Button } from '@/components/ui/button'
import React from 'react'
import { Input } from "@/components/ui/input"
import Image from 'next/image'

const Footer = () => {
  return (
    <div className='pt-[1800px] bg-[#F7F7F7]'>
<div className='h-[803.89px]   w-[1280px] font-roboto  '>
      
      <div className='md:flex md:flex-col md:m-12 pl-6 mt-6'>
      
      <h1 className='font-bold text-5xl w-[560px] h-[58px] hidden md:block  '>Customer testimonials</h1>
      <h2 className='font-bold text-5xl w-[315px]  md:hidden'>What Our Student Say</h2>


      <p className='bg-[#F7F7F7]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      
      </div>
      
      
      <div className='md:flex w-screen md:gap-6 m-6 '>
        <Image className='w-full ' src={"/images/testi1.svg"} alt='testimonial' width={416} height={294.89}/>
        <Image className='w-full hidden md:block' src={"/images/testi2.svg"} alt='testimonial' width={416} height={294.89}/>
        <Image className='w-full hidden md:block' src={"/images/testi3.svg"} alt='testimonial' width={416} height={294.89}/>


      </div>
<div className='flex  justify-between w-screen '>

      <div className="flex items-start  space-x-2 m-4 ">
  <button className="w-3 h-3 rounded-full bg-black hover:bg-blue-600 focus:ring-2 focus:ring-blue-500"></button>
  <button className="w-3 h-3 rounded-full bg-gray-400 hover:bg-gray-500 focus:ring-2 focus:ring-blue-500"></button>
  <button className="w-3 h-3 rounded-full bg-gray-400 hover:bg-gray-500 focus:ring-2 focus:ring-blue-500"></button>
  <button className="w-3 h-3 rounded-full bg-gray-400 hover:bg-gray-500 focus:ring-2 focus:ring-blue-500"></button>
  <button className="w-3 h-3 rounded-full bg-gray-400 hover:bg-gray-500 focus:ring-2 focus:ring-blue-500"></button>
  

</div>  
<div className='flex items-end m-4 '>
<Image src={'/images/slider.svg'} alt='next' width={111} height={48}/>
</div>
          </div>



</div>

    </div>
  )
}

export default Footer
