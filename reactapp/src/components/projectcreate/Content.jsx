import React from 'react'
//import { SlMenu } from "react-icons/sl";
//import { BiSolidAddToQueue } from "react-icons/bi";

const Content = () => {
    const func=()=>{
        //navigate
    }
  return (
    <div className='w-full flex flex-col  justify-center '>
        <h2 className='w-full font-poppins uppercase font-bold text-[30px] h-[100px] flex justify-center  items-center'>
            Projects
        </h2>
        <div className='text-white p-10 flex flex-row flex-wrap justify-evenly gap-5 '>
            <div className='bg-discount-gradient relative w-[250px] h-[250px]'>
                <h2 className='w-full h-[70px] uppercase  bg-black flex justify-center items-center font-poppins '>
                    Create Project
                </h2>
              <span className='absolute bg-white h-10 w-10 rounded-full flex justify-center items-center text-black bottom-10 left-[42%] hover:scale-125 cursor-pointer'
              onClick={func}
              >
                +
              </span>
            </div>
            <div className='bg-discount-gradient relative w-[250px] h-[250px]'>
                <h2 className='w-full h-[70px] uppercase  bg-black flex justify-center items-center font-poppins '>
                    View Projects
                </h2>
              <span className='absolute bg-white h-10 w-10 rounded-full flex justify-center items-center text-black bottom-10 left-[42%] hover:scale-125 cursor-pointer'
              onClick={func}
              >
                V
              </span>
            </div>
        </div>

    </div>
  )
}

export default Content