import DashLayout from 'Layout/AppLayout/appLayout'

//chart
import { Doughnut, Line } from 'react-chartjs-2'

//components
import ChartCard from 'components/chartCard'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
)

//styles
import styles from './metrics.module.css'
import MetricLiveCard from 'components/metricCard/metric'
import { useEffect, useState } from 'react'
import socket from 'backendservice/socketio/socket'
import huecosService from 'backendservice/huecos/index'

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "First dataset",
      data: [0,0,0,0,0,0],
      fill: true,
      lineTension: 0.3,
      borderCapStyle: 'round',
      borderDashOffset: 0.0,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)"
    }
  ]
};

const layOutData = (inData, Title, labels) => {
    const data = {
      labels: labels,
      datasets: [
        {
          label: Title,
          data: inData,
          fill: true,
          lineTension: 0.3,
          borderCapStyle: 'round',
          borderDashOffset: 0.0,
          backgroundColor: "rgba(75,192,192,0.2)",
          borderColor: "rgba(75,192,192,1)"
        }
      ]}

      return data
}

export const dataDonut = {
  labels: ['Suba', 'Bosa', 'Usaquen', 'Kennedy', 'Soacha', 'Fontibon'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};


export default function MetricsDash(){

  const [dataOne, setDataOne] = useState(data)
  const [dataTwo, setDataTwo] = useState(data)
  const [countHuecos, setCountHuecos] = useState(0)

    useEffect(() => {

      huecosService.getCountHuecos()
      .then( res => {
        setCountHuecos(res.data.data)
      })

      socket.on("arrayMetrics", data => {

        let labels = [], vel =[] , acc = []
        data?.forEach( metric => {
          labels.push(metric[2].value)
          vel.push(metric[0].value)
          acc.push(metric[1].value)
        });

        setDataOne(layOutData(vel, 'Velocidad', labels))
        setDataTwo(layOutData(acc, 'Aceleracion', labels))

        // setMetrics(data)
      })
    })


    return(

        <DashLayout>

            <div className = {styles.dashBoard}>

            <MetricLiveCard/>

              <div className={styles.content}>

                <ChartCard> 
                    <h2>Velocidad</h2>
                    <div className={styles.linecontainer}>
                      <Line data={dataOne}/>
                    </div>
                </ChartCard>

                <ChartCard> 
                    <h2>Aceleración</h2>
                    <div className={styles.linecontainer}>
                      <Line data={dataTwo}/>
                    </div>
                </ChartCard>

              </div>

              <div className={styles.content}>

              <ChartCard>
                <h2> Huecos Bogotá </h2>
                <div className={styles.linecontainer}>
                  <Doughnut data={dataDonut}/>
                </div>
              </ChartCard>

                  <ChartCard>
                    <h2> Numero Huecos Detectados</h2>
                    <p> {countHuecos} </p>
                  </ChartCard>     

              </div>

            </div>
            
        </DashLayout>
    )
}