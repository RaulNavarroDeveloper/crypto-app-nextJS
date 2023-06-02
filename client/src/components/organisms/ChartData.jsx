import React, { useEffect, useState, useMemo } from "react"
import LinearChart from "../molecules/chartJS/LinearChart";
import TemporalityChartContainer from "../molecules/TemporalityChartContainer";

export default function ChartData ({historicalData, coinID}) {  
  const [data, setData] = useState(
    historicalData?.map((item) => ({
      time: item.timestamp.substring(0,10),
      value: item.price
    }))
    )
    const [interval, setInterval] = useState("1d");
  const handleDatosChange = (newData) => {
    // console.log('Datos recibidos del componente hijo:', newData);
    setInterval(newData)
  };

  useEffect(() => {
    if(interval){
      // console.time('filter array');
      fetch(`http://localhost:3000/api/coins/historicData/${coinID}/interval/${interval}`)
      .then(async function (res) {
        const response = await res.json();
        // console.log(response);
        setData(response.map((item) => ({
          time: item.timestamp.substring(0,10),
          value: item.price
        })));
        // console.timeEnd('filter array');
        // console.log(response.map((item) => ({
        //   time: item.timestamp.substring(0,10),
        //   value: item.price
        // })));

        // console.log(historicalData?.map((item) => ({
        //   time: item.timestamp.substring(0,10),
        //   value: item.price
        // })));
      })
    }
  }, [interval])
  return (
    <section className="col-span-7 bg-yellow-500">
      <h2 className="text-3xl font-bold my-2 ms-5">To USD Chart</h2>
      <TemporalityChartContainer onDatosChange={handleDatosChange}></TemporalityChartContainer>
      <LinearChart chartData={data}></LinearChart>
    </section>
  )
  }
