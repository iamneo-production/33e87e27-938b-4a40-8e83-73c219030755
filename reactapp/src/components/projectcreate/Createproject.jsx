import React from 'react'

const Createproject = () => {
    return (
        <div className='w-full'>
            <h2 className='w-full flex justify-center items-center uppercase font-poppins h-[100px] font-bold'>
                Create Project
            </h2>
            <div className='flex justify-center items-center'>
                <form action="" className='p-10 w-[70%] bg-discount-gradient rounded-2xl font-poppins text-white h-[500px] flex flex-col justify-center items-center '>
                    <div className='w-full  flex justify-center  '>
                        <label htmlFor="" className='w-[30%]'>Project Name :</label>
                        <input type="text" placeholder='Name...' className='h-[40px] text-black outline-none w-[50%] border-none' />
                    </div>
                    <div className='w-full  flex mt-5 justify-center  '>
                        <label htmlFor="" className='w-[30%]'>Description :</label>

                        <textarea
                            placeholder="About project..."
                            className="h-[120px] text-black outline-none w-[50%] border-none"
                        ></textarea>                    </div>
                    <div className='w-full mt-5  flex justify-center  '>
                        <label htmlFor="" className='w-[30%]'>Start date :</label>
                        <input type="date" className='h-[40px] text-black outline-none w-[50%] border-none' />
                    </div>
                    <div className='w-full mt-5  flex justify-center  '>
                        <label htmlFor="" className='w-[30%]'>End Date :</label>
                        <input type="date" className='h-[40px] text-black outline-none w-[50%] border-none' />
                    </div>
                    <div className='flex justify-center items-center'>

                    <button className='mt-10 w-[80px] rounded-xl hover:scale-110 text-black font-poppins font-semibold h-[40px] bg-secondary'>ADD</button>
                    </div>

                </form>
            </div>
            


        </div>
    )
}

export default Createproject