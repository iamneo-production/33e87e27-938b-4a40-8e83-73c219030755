import React, {useState, useEffect } from "react";
import Chart from "react-apexcharts";

function SecondBarchart() {
  const [TaskName, setTaskName]= useState([]);
  const [PercentValue, setPercentValue]= useState([]);

  useEffect( ()=>{

    const workname=[];
    const completevalue=[];

    const getUserrecord= async()=>{
      const dataReq= await fetch("http://localhost:8005/mediasocial");
      const dataRes= await dataReq.json();
      

      for(let i=0; i<dataRes.length; i++)
      {
        workname.push(dataRes[i].member);
        completevalue.push(dataRes[i].complete);

      }
      setTaskName(workname);
      setPercentValue(completevalue);
 }
  getUserrecord();

  },[]);
  
  return (
    <React.Fragment>
      <div className="container-fluid mb-5" style={{paddingLeft: "30px"}}>
        
      
        <Chart
          type="bar"
          width={920}
          height={275}
          series={[
            {
              name: "Completion Percentage ",
              data: PercentValue,
            },
          ]}
          options={{
            title: {
              text: "Project Task Progress",
              style: {fontSize: 30 }
            },

            

            colors: ["#f90000"],
            theme: { mode: "light" },

            xaxis: {
              tickPlacement: "on",
              categories: TaskName,
            },

            yaxis: {
                labels: {
                  formatter: (val) => {
                  return `${val}`;
                  },
                style: { fontSize: "15", colors: ["#f90000"] },
              },
            },

            legend: {
              show: true,
              position: "right",
            },

            dataLabels: {
              formatter: (val) => {
                return `${val}`;
              },
              style: {
                colors: ["#f4f4f4"],
                fontSize: 15,
              },
            },
          }}
        ></Chart>
      </div>
    </React.Fragment>
  );
}

export default SecondBarchart;