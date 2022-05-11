import UserLayout from 'Layout/users/UsersLayout'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

//components
import Button from 'components/button'
import Input from 'components/input'

// hooks
import ActiveLink from 'hooks/ActiveLink'

// service
import helpers from 'backendservice/helpers'
import UserService from 'backendservice/user'

//styles
import styles from './Login.module.css'


export default function Login() {

    const router = useRouter()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')

    useEffect( () => {
        const user = helpers.getUser_const()
        setMessage('Ingresa')
        user !== null && router.replace('/')
    },[])


    const handleChangeEmail = e => {
        const value = e.target.value
        setEmail(value) 
    }

    const handleChangePass = e => {
        const value = e.target.value 
        setPassword(value)
    }

    const handleLogin = e => {

        e.preventDefault()

        setMessage('Loading...')

        UserService.LoginService({
            email : email,
            password : password
        })
        .then( () => {

            console.log(`{
                "email" : ${email},
                "password" : ${password}
            }`);
            setPassword('')
            setEmail('') 
            router.push('/')

        })
        .catch( e => {
            setMessage('Ingresa')
            console.log("usuario o contraseña incorrectos")
            console.log(e)

        })

    }

    return(
        <UserLayout 
        tittle = {"Iniciar sesión"}
        subtittle = {"Bienvenido"}
        >
            <>
                <form onSubmit = {handleLogin} className = {styles.form}>
                    <Input
                    label = {'Correo'}
                    handleChange = {handleChangeEmail}
                    value = {email}
                    />
                    <Input
                    label = {'Contraseña'}
                    type = 'password'
                    handleChange = {handleChangePass}
                    value = {password}
                    />

                    <Button 
                    color = {'#6354f6'}
                    hover = {'#6354f6dd'}>
                        <label className = {styles.ButtonLabel}>
                            {message}
                        </label>
                    </Button>
                </form>

                <p className = {styles.redirect}>¿eres nuev@? Crea una cuenta 
                    <ActiveLink href = 'signup' className = {styles.register}> Registrate </ActiveLink>
                </p>
        </>   
        </UserLayout>
    )
    
}
