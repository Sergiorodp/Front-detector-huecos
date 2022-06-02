import { useRouter } from 'next/router'
import { useSelector, useDispatch} from 'react-redux'
import { useEffect } from 'react'

// backServices
import userService from 'backendservice/user/index'

//styles
import styles from './appLayout.module.css'

// components
import DashNav from './dashNav/dashNav'
import MainBar from 'components/mainbar/bar'

//reducer funtions
import { setUser, initialState} from 'reducers/usersReducer'


const fetchParams = async ( token ) => {

    await userService.isValidTkn(token.tkn)
    return userService.GetByTkn( token.tkn )
}


export default function DashLayout({ children }){

    const router = useRouter()
    const selector = useSelector( state => state)
    const dispatch = useDispatch()

    useEffect(() => {

        const tkn = window.localStorage.tkn ?? false

        console.log(window.localStorage.token)

        if(!tkn){
            router.push('/users/login')
        }else{
            
            const token = JSON.parse(tkn)
            fetchParams(token)
            .then( res => {
                console.log(res)
                const info = res.data.result
                dispatch(setUser(info))
            })
        }

        console.log(selector)
    },[])

    return(
        <section className = {styles.mainContainer}>   
            <div className = {styles.navContainer}>
                <DashNav/>
            </div>

            <div className = {styles.infoContainer}>
                
                <MainBar/>
                
                <div className={ styles.childrenContainer}>
                    {children}
                </div>

            </div>
        </section>
    )
}