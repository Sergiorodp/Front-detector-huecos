//styles
import styles from './appLayout.module.css'

// components
import DashNav from './dashNav/dashNav'

export default function DashLayout({ children }){
    return(
        <section className = {styles.mainContainer}>   
            <div className = {styles.navContainer}>
                <DashNav/>
            </div>

            <div className = {styles.childrenContainer}>
                <div className={styles.userbar}>

                    <div className={styles.bar}>
                        <h2>Hello lol</h2>
                    </div>
                    <div className={ styles.userMenu}>
                        <h3>Hello perro</h3>
                    </div>
                </div>
                <div>
                    {children}
                </div>
            </div>
        </section>
    )
}