import React, { useRef, useState } from 'react'
import Header from '../../components/header/header'
import { FooterSection } from "../../components/footer/footer";
import HomeDetails from '../../components/home/homeDetails';
export const HomePage = () => {

  return (
    <div>
        <Header  />
        <HomeDetails/>
        <FooterSection />
  
    </div>
  )
}
