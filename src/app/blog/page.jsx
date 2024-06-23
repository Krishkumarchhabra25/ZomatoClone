import Image from 'next/image';
import React from 'react';
import BlogPageBanner from "../../Components/Assets/blogPageBanner.png";

const BlogPage = () => {
  return (
    <div className='relative w-full h-screen flex justify-center items-center'>
      <Image src={BlogPageBanner} alt='blogPage' className='mt-6' />
      <div className='absolute inset-0 flex justify-end items-end'>
        <div className='bg-white w-[900px] rounded-lg mx-[143px] h-[360px]'>
          <div className='flex flex-col'>
            <div className='flex flex-1 gap-4 p-6'>
              <h2 className='font-bold'>Development</h2>
              <h2>16 March 2024</h2>
            </div>
            <div className='flex flex-col w-full mx-6'>
              <h2 className='font-bold text-3xl w-[760px]'>How to make a Game look more attractive with New VR & AI Technology</h2>
              <p className='flex w-[90%] mt-3'>
                Google has been investing in AI for many years and bringing its benefits to individuals, businesses and communities. Whether it’s publishing state-of-the-art research, building helpful products or developing tools and resources that enable others, we’re committed to making AI accessible to everyone.
              </p>
              <div className="w-[130px] h-10 border border-[#7C4EE4] rounded-md flex items-center justify-center mt-5">
                <button className="w-full h-full flex items-center justify-center">
                  <h1 className="text-center text-violet-600 font-bold">Read More</h1>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogPage;
