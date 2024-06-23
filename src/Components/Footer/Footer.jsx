import Image from 'next/image'
import React from 'react'
import footerLog from "../Assets/footerbanner.png"
import { Raleway } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  weight: "800",
});
const Footer = () => {
  return (
    <div className='relative w-full h-64'>
    <Image src={footerLog} alt='footerlog' objectFit='cover'  />
      <div className='absolute inset-0 flex items-center justify-center'>
      <div className="text-center text-white">
      <h1 className={`text-[52px] font-bold ${raleway.className}`}>Get our stories delivered From</h1>
      <p className={`${raleway.className} text-[52px] font-bold`}>us to your inbox weekly.</p>
    </div>
      </div>
    </div>
  )
}

export default Footer