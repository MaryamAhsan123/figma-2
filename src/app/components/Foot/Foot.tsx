import React from 'react'
import { Button} from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Image from 'next/image'

const Foot = () => {
  return (
    <div className='font-roboto'>
      
      <div className='md:flex  md:justify-between mt-20 grid grid-cols-1 place-items-center '>
  <div className='md:flex md:flex-col items-start pl-16 font-roboto'>
    <h1 className='font-semibold text-lg w-[500px] h-[27px]'>Subscribe to our newsletter</h1>
    
    <h2 className='text-lg '>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
    </div>
    
    <div className="md:flex  md:items-end md:space-x-2  font-roboto">
      <Input className='h-10 w-[241px]' type="email" placeholder="Email" />
      <Button type="submit">Subscribe</Button>
      </div>
</div>



  <div className="md:container md:mx-auto pt-10">
    <div className="md:flex justify-center">
      <div className="md:grid md:grid-cols-4 md:gap-8 md:gap-x-48 pt-10 flex flex-col gap-2 ">

<div >
  <Image src={'/images/DdsgnrLibrary.svg'} alt='logo' width={130.6} height={40}/>
</div>

      
        <div className="space-y-2 text-center">
          <h4 className="font-bold text-lg">Courses</h4>
          <p>Business</p>
          <p>Development</p>
          <p>Technology</p>
          <p>Design</p>
          <p>Programming</p>
        </div>

        
        <div className="space-y-2 text-center">
          <h4 className="font-bold text-lg">Resources</h4>
          <p>Career</p>
          <p>Resume</p>
          <p>Learning</p>
          <p>Interview Preparations</p>
          <p>jobs</p>
        </div>

        
        <div className="space-y-2 text-center">
          <h4 className="font-bold text-lg">About Us</h4>
          <p>Contact</p>
          <p>Help Support</p>
          <p>FAQ</p>
          <p>Terms and Conditions</p>
          <p>Partners</p>
        </div>
      </div>
    </div>
  </div>


<div className='md:flex justify-center items-center p-8'>
<hr className='md:flex justify-center items-center md:w-[1120px]  w-[380px] h-4 border-black '></hr>
</div>

<div className='md:flex justify-between items-center md:width[1120px] h-[54px] mr-12'>

      <div className='h-[50px] md:flex items-center justify-start  px-16'>
        <p className='font-roboto text-sm  mr-2 '> 2023 Ddsgnr. All right reserved.</p>
        <div className='flex '>
        <p className='font-roboto text-sm  mr-4 '>Privacy Policy</p>
        <p className='font-roboto text-sm mr-4 '>Terms of Service</p>
        <p className='font-roboto text-sm  '>Cookies Settings</p>
        </div>
        </div>
        
        <div className='flex md:space-x-6 md:pr-16 md:pl-8 pt-12 '>
            <Image src={'/images/Facebook.svg'} alt="facebook logo" width={18} height={18}/>
            <Image src={'/images/insta.svg'} alt="insta logo" width={18} height={18}/>
          
            <Image src={'/images/x.svg'} alt="X logo" width={18} height={15.3}/>
            <Image src={'/images/lnk.svg'} alt="linkedIn logo" width={18} height={24}/>
        </div>
       
    </div>






    </div>
  )
}

export default Foot
