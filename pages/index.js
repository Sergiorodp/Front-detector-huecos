import DashLayout from 'Layout/AppLayout/appLayout'

//styles
import styles from 'styles/Home.module.css'

// components

import { useEffect, useState } from 'react'

//socket

import huecosService from 'backendservice/huecos/index'
import WebMap from 'components/map/map'
import HuecoCard from 'components/huecoCard/hueco'
import MetricLiveCard from 'components/metricCard/metric'


export default function Dash(){

    const colors = ['#4D78D7','#5FD2D3','#428ce0','#5FD2D3' ]
    const naranja = '#F7630C'
    const [ huecos , setHuecos ] = useState([])

    useEffect(() => {

        // getHuecos
        huecosService.getHuecos()
        .then( res => {

            const data = res.data?.slice(0,4) // obtener los primeros 4 elementos del array variabñe

            const formatHuecos = data.map( (hueco, index) => {

                return(
                    <HuecoCard key={hueco.id}
                    hueco={hueco}
                    color = {colors[index]}
                    />
                )
            } )

            setHuecos(formatHuecos)
        })
        


    },[])

    return(

        <DashLayout>

            <div className = {styles.dashBoard}>

                <MetricLiveCard/>

                <div className={styles.card}>
                    <WebMap/>
                </div>

                <div className={styles.huecosContainer}>
                    <h2> Ultimos huecos detectados </h2>
                    <div className={styles.huecosCards}>
                        {huecos}
                    </div>
                    
                </div>
            </div>
            
        </DashLayout>
    )
}