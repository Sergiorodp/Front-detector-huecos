import { useSelector} from 'react-redux'

// styles 
import styles from './bar.module.css'

//components
import UserButton from 'components/userButton/user'

export default function MainBar () {

    const selectorUser = useSelector(state => state)

    return(
        <div className = {styles.MainBar }>

            <div className={styles.bar }>
                <h2>Hello { selectorUser.data?.user?.name ?? ' loading... ' }</h2>
            </div>

            <div className={ styles.userMenu }>
                <UserButton/>
                <h3>...</h3>
                
            </div>

        </div>
    )
}