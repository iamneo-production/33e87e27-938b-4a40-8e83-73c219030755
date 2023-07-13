import ChartDropdownHello from './chartdropdown';
import ChartDropdownTutorial from './chartdropdownsecond';
import Navbar from './navbar';
import React from 'react';
import './ChartsRender.css';




  


function ChartsRender() {

  
  return (
    <>
    <div>
    
      <Navbar/>
      <div className='Chartsu'>
        <ChartDropdownHello/> 
        <ChartDropdownTutorial/>
        </div>
      
      
      
      
      </div>
      
    
   
    </>
    );
}


export default ChartsRender;