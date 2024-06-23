import Template from '@/Components/common/Template/Template';
import Image from 'next/image';
import React from 'react';
import HomePageBaner from "../../Components/Assets/homepage.png";
import { Raleway } from "next/font/google";
import HomeBanner2 from "../../Components/Assets/Container.png";

const raleway = Raleway({
  subsets: ["latin"],
  weight: "800",
});

const HomePage = () => {
  return (
    <Template>
      <div className='relative w-full h-screen'>
        <Image src={HomePageBaner} alt='footerlog' layout='fill' objectFit='cover' />
        <div className='absolute inset-0 flex items-center justify-center'>
          <div className="flex flex-1 justify-between mx-24 gap-12">
            <div className='flex flex-col text-white mt-24'>
              <h1>Featured Post</h1>
              <div>
                <h2 className={`${raleway.className} text-[64px] font-bold`}>How AI Will</h2>
                <h2 className={`${raleway.className} text-[64px] font-bold`}>Change the Future</h2>
                <p className='break-words w-[500px]'>
                  The future of AI will see home robots having enhanced intelligence, increased capabilities, and becoming more personal and possibly cute. For example, home robots will overcome navigation, direction
                </p>
                <div className="w-[130px] h-10 border rounded-md bg-white flex items-center justify-center mt-4">
                <button className="w-full h-full flex items-center justify-center">
                  <h1 className="text-center text-black">Read More</h1>
                </button>
              </div>
              </div>
            </div>
            <div className=''>
              <Image src={HomeBanner2} alt='homeBanner2' />
            </div>
          </div>
        </div>
      </div>
    </Template>
  );
};

export default HomePage;
