import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

const page = () => {
  return (
    <div className='mt-4 flex bg-[#F7F7F7] pl-6 h-[72px] w-full  ' >
      
<div className=' flex justify-center items-start  pl-4 md:w-[1280] w-[428px]
'> 
    <Image src={'/images/DdsgnrLibrary.svg'} alt="logo" width={130.6} height={41}/>

</div>


<div className='  md:flex bg-white m-4 hidden'>

<ul className='flex justify-center space-x-14 font-roboto ml-40  w-[687px]  '>

  <li className='pt-2 hover:bg-amber-200 cursor-pointer '>Home</li>
  <li className='pt-2  hover:bg-amber-200 cursor-pointer'>Courses</li>
  <li className='pt-2  hover:bg-amber-200 cursor-pointer'>Services</li>
  <li className='pt-2  hover:bg-amber-200 cursor-pointer'>Achievement</li>
  <li className='pt-2  hover:bg-amber-200 cursor-pointer'>About Us</li>
  <li className='pt-2  hover:bg-amber-200 cursor-pointer'>Testimonial</li>
</ul>
  


<div className='space-x-2 flex bg-white font-roboto '  >
<Button className='ml-4 text-black bg-white border-black border-2 w-[80px] h-[40px] hover:bg-slate-200'>Login</Button>
<Button className='w-[95px] h-[40px] hover:bg-amber-600'>Sign Up </Button>

</div>
</div>






    </div>
  )
}

export default page
