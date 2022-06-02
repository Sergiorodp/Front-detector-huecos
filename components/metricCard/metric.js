
import socket from 'backendservice/socketio/socket'
import Metric from 'components/metric/metric'
import { useSelector } from 'react-redux'
import styles from './metricCard.module.css'

import { useEffect, useState } from 'react'

const initialState = [{
    name : 'velocidad',
    value : 'loading...'
  },{
    name : 'aceleracion',
    value : 'loading...'
  },{
    name : 'tiempo',
    value : `loading...`
  }]

export default function MetricLiveCard(){

    const colors = ['#4D78D7','#5FD2D3','#428ce0','#5FD2D3' ]

    const [ response, setResponse ] = useState([])
    const [ metric, setMetrics ] = useState(initialState)
    const state = useSelector(state => state)

    useEffect(()=>{

        const array = metric.map( info => {
            return(
                <Metric key={info.name}
                    name = {info.name}
                    response={info.value}
                    color={info.color}
                />
            )
        })
        setResponse(array);

        socket.on("FromAPI", data => {

            data = data.map( (info, index) => {
                return {
                    ...info,
                    color : colors[index]
                }
            })
            setMetrics(data)
        })
    },[])

    useEffect(() => {
        const array = metric.map( info => {
            return(
                <Metric key={info.name}
                    name = {info.name}
                    response={info.value}
                    color={info.color}
                />
            )
        })
        setResponse(array);
    },[metric])

    return(

        <div className = {styles.metricCardsContainer}>
            <h2> Metricas Tiempo Real</h2>
            <div className={styles.metricCard}>
                {state.isUser ? response : 'Loading...'}
            </div>
         </div>

    )

}