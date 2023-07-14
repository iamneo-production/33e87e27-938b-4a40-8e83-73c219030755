import React, {useState, useEffect } from "react";
import Chart from "react-apexcharts";

function Barchart() {
  const [PersonName, setPersonName]= useState([]);
  const [PercentValue, setPercentValue]= useState([]);

  useEffect( ()=>{

    const membername=[];
    const completevalue=[];

    const getUserrecord= async()=>{
      const dataReq= await fetch("http://localhost:8004/socialmedia");
      const dataRes= await dataReq.json();

      for(let i=0; i<dataRes.length; i++)
      {
        membername.push(dataRes[i].member);
        completevalue.push(dataRes[i].complete);

      }
      setPersonName(membername);
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
              text: "Individual Task Progress",
              style: { fontSize: 30, color: "#000000" },
            },

            

            colors: ["#f90000"],
            theme: { mode: "light" },

            xaxis: {
              tickPlacement: "on",
              categories: PersonName,
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

export default Barchart;