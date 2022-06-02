import DashLayout from 'Layout/AppLayout/appLayout'
import WebMap from 'components/map/map'

//styles
import styles from './dashstyle.module.css'


export default function Dash(){
    return(

        <DashLayout>

            <div className = {styles.dashBoard}>
                
                    <WebMap/>
             
            </div>
            
        </DashLayout>
    )
}