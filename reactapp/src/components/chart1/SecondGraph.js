import React from "react";
import Chart from "react-apexcharts";

function Barchart() {
  return (
    <React.Fragment>
      <div>
      <h3 style={{fontSize : "25px", fontWeight : "bolder"}}>PROJECT TASK PROGRESS CHART</h3>

        <Chart
          type="bar"
          width={560}
          height={250}
          series={[
            {
              name: "Completion Percentage ",
              data: [20,40,60,80,100],
            },
          ]}
          options={{
            
            colors: ["#f90000"],
            theme: { mode: "light" },

            xaxis: {
              tickPlacement: "on",
              categories: [
                "UML Diagrams",
                "FrontEnd",
                "BackEnd",
                "Activity Flow",
                "Testing"
              ],
            },

            yaxis: {
              labels: {
                formatter: (val) => {
                  return `${val}`;
                },
                style: { fontSize: "15", colors: ["#f90000"] },
              },
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