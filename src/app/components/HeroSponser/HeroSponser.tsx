import React from 'react'
import Image from 'next/image'
const HeroSponser = () => {
  return (
    <div className='w-screen '>
    <div className=' md:flex bg-[#F7F7F7] md:justify-between md:items-center w-[428px]  h-[239.34px] md:h-[228px] wpt-48 md:w-[1280px] flex-col

'>

        <h1 className='font-roboto text-2xl font-bold  w-[320px] h-[68px] pl-1 '>
        Trusted by 2000+ companies worldwide.
        </h1>

        <div className='flex pr-1 space-x-20'>
<Image src={"/images/logo1.svg"} alt="logo" width={123.8} height={38.52}/>
<Image src={"/images/logo2.svg"} alt="logo" width={123.8} height={38.52}/>
<Image src={"/images/logo3.svg"} alt="logo" width={123.8} height={38.52}/>
<Image src={"/images/logo4.svg"} alt="logo" width={123.8} height={38.52}/>


<Image src={"/images/logo5.svg"} alt="logo" width={123.8} height={38.52}/>
<Image src={"/images/logo6.svg"} alt="logo" width={123.8} height={38.52}/>       

        </div>
      
    </div>
    </div>
  )
}

export default HeroSponser
