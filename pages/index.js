import DashLayout from 'Layout/AppLayout/appLayout'

//styles
import styles from 'styles/Home.module.css'


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