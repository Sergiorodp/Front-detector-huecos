import DashLayout from 'Layout/AppLayout/appLayout'
import WebMap from 'components/map/map'
import DetectionService from 'backendservice/detections/index'

//styles
import styles from './detecciones.module.css'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import ChartCard from 'components/chartCard'

export default function Dash(){

    const [ detections, setDetections ] = useState([])
    const state = useSelector(state => state)

    useEffect(() => {

        DetectionService.getDetectionsUser(state)
        .then(res => {
            
            console.log(res?.data?.result)
            const getDetect = res?.data?.result?.map( data => {
                return <ChartCard key={data.id}>
                    {`${data}`}
                </ChartCard>
            })
            setDetections(getDetect)
        })

    },[])

    return(

        <DashLayout>

            <div className = {styles.dashBoard}>

                <div className={styles.detections}>

                    {detections}

                </div>
             
            </div>
            
        </DashLayout>
    )
}