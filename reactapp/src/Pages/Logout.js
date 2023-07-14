import React,{useContext,useEffect} from 'react';
import {UserContext} from '../context'
import { useNavigate } from 'react-router-dom';
const Logout = () => {
    const{setUser,user}=useContext(UserContext)
    const navigate= useNavigate();
    useEffect(() => {
        if(!user){
            navigate("/")
        }
      }, [user]);
    return (
        <div className='ml-56'>
            <h1 className='ml-40 text-white'>Logout page</h1>
            <button onClick={()=>{setUser(false)}}  className='btn btn-danger'>logout</button>
            
        </div>
    );
};

export default Logout;