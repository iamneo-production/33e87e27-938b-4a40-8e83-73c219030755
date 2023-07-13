import Chart from 'react-apexcharts'
import React from 'react';
import { useState } from 'react';


function ChartDropdownTutorial() {
  const [empName] = useState(['UML Diagrams','Frontend','Backend','Activity Flow','Testing']);
  const [salaryList] = useState([0,5,10,15,20,25,30,35,40,45,50,55,65,70,75,80,85,90,95,100 ]);
  const [options, setOption] = useState({
      chart: {
        id: 'apexchart-example'
      },
      xaxis: {
        categories: ['UML Diagrams','Frontend','Backend','Activity Flow','Testing']
      }
    });
  const [series, setSeries] = useState([{
      name: '% Completed',
      data: [0,0,0,0,0]
    }])

    const [name, setName] = useState([]);
    const [salary, setSalary] = useState([]);
    const submit = () => {
        console.log("submit", name, salary)
        setOption({
          chart: {
            id: 'apexchart-example'
          },
          xaxis: {
            categories: name
          }
        })
        setSeries([{
          name: '% Completed',
          data: salary
        }])

    }
    return (
        <div style={{padding:"20px", color: "black", fontSize: "17px"}}>
            <div>
            <span><b>Task Category: </b></span>
            <select onChange={(e) => setName([...name, e.target.value])}>
                {
                    empName.map(item => {
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
            <span><b>Completion Percentage: </b></span>
            <select onChange={(e) => setSalary([...salary, e.target.value])}>
                {
                    salaryList.map(item => {
                      return(
                          <option>
                              {item}
                          </option>
                      )
                    })
                }
                
            </select>
            </div>
            
            <button onClick={submit}>Submit</button>
            
          <Chart options={options} series={series} type="bar" width={500} height={532} />
      </div>
    )
  
}


export default ChartDropdownTutorial;
