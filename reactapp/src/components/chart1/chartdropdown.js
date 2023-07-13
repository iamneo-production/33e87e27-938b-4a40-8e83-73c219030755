import Chart from 'react-apexcharts'
import React from 'react';
import { useState } from 'react';


function ChartDropdownHello() {
  
  const [perName] = useState(['Person 1','Person 2','Person 3','Person 4','Person 5','Person 6','Person 7']);
  const [comList] = useState([0,5,10,15,20,25,30,35,40,45,50,55,65,70,75,80,85,90,95,100 ]);
  const [opt, setOpt] = useState({
      chart: {
        id: 'apexchart-example'
      },
      xaxis: {
        categories: ['Person 1','Person 2','Person 3','Person 4','Person 5','Person 6','Person 7']
      }
    });
  const [ser, setSer] = useState([{
      name: '% Completed',
      data: [0,0,0,0,0]
    }])

    const [pers, setPers] = useState([]);
    const [compl, setCompl] = useState([]);
    const sub = () => {
        console.log("submit", pers, compl)
        setOpt({
          chart: {
            id: 'apexchart-example'
          },
          xaxis: {
            categories: pers
          }
        })
        setSer([{
          pers: '% Completed',
          data: compl
        }])

    }
  

    return (
        <div style={{padding:"20px", color: "black", fontSize: "17px"}}>
            <div>
            <span><b style={{color: "black"}}>Team Members: </b></span>
            <select onChange={(e) => setPers([...pers, e.target.value])}>
                {
                    perName.map(item => {
                      return(
                          <option k>
                              {item}
                          </option>
                      )
                    })
                }
                
            </select>
            </div>
            <div>
            <span><b>Individual Task Completion Percentage: </b></span>
            <select onChange={(e) => setCompl([...compl, e.target.value])}>
                {
                    comList.map(item => {
                      return(
                          <option>
                              {item}
                          </option>
                      )
                    })
                }
                
            </select>
            </div>
            <button onClick={sub}>Submit</button>

          <Chart options={opt} series={ser} type="bar" width={500} height={532} />
      </div>

      
    )

    
}

export default ChartDropdownHello;