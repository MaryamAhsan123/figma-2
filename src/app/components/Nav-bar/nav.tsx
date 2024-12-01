import React from 'react'
import Image from 'next/image'

const Nav = () => {
  return (
    <div className='hidden md:block'>
    <div className='flex justify-between bg-[#F7F7F7] h-[54px]  '>
      <div className='h-[50px] flex items-center justify-start  px-16'>
        <p className='font-roboto text-sm  mr-2 '> Phone Number: 956 742 455 678</p>
        <span className="text-lg mr-2 ">|</span>
        <p className='font-roboto text-sm  '>Email: info@ddsgnr.com</p>
        </div>
        
        <div className='flex space-x-6 pr-16 '>
            <Image src={'/images/Facebook.svg'} alt="facebook logo" width={18} height={18}/>
            <Image src={'/images/insta.svg'} alt="insta logo" width={18} height={18}/>
            <Image src={'/images/lnk.svg'} alt="linkedIn logo" width={18} height={24}/>
            <Image src={'/images/x.svg'} alt="X logo" width={18} height={15.3}/>

        </div>
       
    </div>
    </div>
  )
}

export default Nav;
 