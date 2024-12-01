import Image from "next/image";

import React from 'react'
import Nav from "./components/Nav-bar/nav";
import Header from "./components/Header/header";
import HeroAbout from "./components/HeroAbout/HeroAbout";
import HeroSponser from "./components/HeroSponser/HeroSponser";
import HeroInfo from "./components/HeroInfo/HeroInfo";
import HeroAchievements from "./components/HeroAchievements/HeroAchievements";
import HeroCourses from "./components/HeroCourses/HeroCourses";
import Footer from "./components/Footer/Footer";
import Foot from "./components/Foot/foot";





const page = () => {
  return (
    <div>
      <Nav/>
      <Header/>
      <HeroAbout/>
      <HeroSponser/>
      <HeroInfo/>
      <HeroAchievements/>
      <HeroCourses/>

<Footer/>
<Foot/>


      
      
      
      

    </div>
  )
}

export default page
