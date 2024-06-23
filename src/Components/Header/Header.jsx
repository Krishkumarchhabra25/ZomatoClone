import Image from "next/image";
import React from "react";
import logo from "../Assets/logo.png";

import { Raleway } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  weight: "800",
});

const Header = () => {
  return (
    <div className="max-w-full h-[70px] bg-white text-black">
      <div className=" flex flex-1 justify-between p-3">
        <div className="flex flex-1 gap-4 mx-20 items-center ">
          <Image src={logo} alt="logo" width={43} height={43} />
          <h2 className={`${raleway.className} text-[33.7px]`}>Krish</h2>
        </div>
        <div className=" flex items-center">
          <div  className="flex flex-1 items-center mr-20" >
             <div className=" flex flex-1 flex-shrink-0 text-black space-x-16 items-center">
               <h1>Blog</h1>
               <h1>About</h1>
               <h1>Search</h1>
               <div className="w-[130px] h-10 border rounded-md bg-violet-500 flex items-center justify-center">
               <button className="w-full h-full flex items-center justify-center">
                 <h1 className="text-center text-white">Contact us</h1>
               </button>
             </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
