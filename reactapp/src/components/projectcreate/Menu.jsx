import React,{useState} from 'react'

const Menu = () => {
const [active, setactive] = useState(0);
const func=(index)=>{
    console.log(index);
    setactive(index);
};
  return (
    
        <div className='font-poppins text-white'>
        <div className='flex border-b-[1px] h-[100px] justify-center items-center'>
            <h2 className='uppercase text-[13px] font-bold'>
                Project Management System
            </h2>
        </div>
        <ul className='flex flex-col justify-center items-center mt-8 w-full h-full'>
            {["Home","Projects","My Projects","Tasks","My Tasks","Chat","Report","Logout"].map((item,index)=>(
                <li key={index} className={`h-[50px] w-full flex justify-center items-center hover:bg-blue-800 cursor-pointer ${active===index?"bg-blue-800":""
                }`} 
                onClick={()=>func(index)}
                >
                    {item}
                </li>
            ))}
        </ul>


    </div>
  )
}

export default Menu