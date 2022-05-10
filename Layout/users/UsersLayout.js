
// hooks
import ActiveLink from 'hooks/ActiveLink'

// svg
import LoginBack from 'components/svg/LoginBack'

// styles
import styles from './UsersLayout.module.css'

const UserLayout = ({ children, tittle = '', subtittle = '', style = {} }) => {

    return(
        <div className = {styles.mainConatiner}>    
            <LoginBack className = {styles.svg}/>
            <div className = {styles.moduleContainer} style = {style}>
                <section className = {styles.CardConatiner} >
                <div className = {styles.form}>
                    <header className={styles.headerContainer}>
                        
                        <ActiveLink href = '/'>
                            <h1 className = {styles.logo}> LOGO </h1>
                        </ActiveLink>

                        <h1>{tittle}</h1>
                        <h3>{subtittle}</h3>

                    </header>
                        {children}
                    </div>

                    <footer className = {styles.footer}>
                    <p>Politicas</p>
                    <p>Terminos</p>
                    </footer>

                </section>
            </div>
        </div>
    )
}

export default UserLayout 