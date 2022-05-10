import DashLayout from 'Layout/AppLayout/appLayout'

//styles
import styles from './dashstyle.module.css'


export default function Dash(){
    return(

        <DashLayout>

            <div className = {styles.dashBoard}>
                <div className = {styles.categorieCard}>
                    
                </div>
            </div>
            
        </DashLayout>
    )
}