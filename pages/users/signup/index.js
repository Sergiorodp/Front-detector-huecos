import { useEffect, useState } from "react"
import { useRouter } from 'next/router'

// layout
import UserLayout from "Layout/users/UsersLayout"

// components
import Input from "components/input"
import Button from "components/button"

// hooks
import ActiveLink from "hooks/ActiveLink"

//service
import UserService from 'backendservice/user'

// styles
import styles from './Signup.module.css'

export default function Singup() {
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [message, setMessage] = useState('')

    const router = useRouter()

    useEffect( () => {
        setMessage('Registrar')
    },[])

    const handleChangeEmail = e => {
        const value = e.target.value
        setEmail(value) 
    }

    const handleChangeName = e => {
        const value = e.target.value
        setName(value) 
    }

    const handleChangeLastName = e => {
        const value = e.target.value
        setLastName(value) 
    }


    const handleChangePass = e => {
        const value = e.target.value 
        setPassword(value)
    }

    const handleRegister = e =>{
        e.preventDefault()
        setMessage('Loading...')
        UserService.RegisterService({
            name : name,
            email : email,
            password : password,
            street : "las flores",
            city : "Bogotá",
            country : "Colombia",
        })
        .then( () => {

            setPassword('')
            setEmail('') 
            router.push('/users/login')

        }).catch( e => {
            setMessage('Registrar')
            console.log("No se pudo registrar")
        })
        console.log("Registrar")
    }

    const marginTop = {
        marginTop : '6%',
        marginBottom : '6%'
    }

    return(
        <UserLayout
            tittle = "Crear una cuenta"
            subtittle = "Encuentra los mejores productos"
            style = { marginTop }
        >
            <>

                <form onSubmit = {handleRegister} className = {styles.form}>

     
                    <Input
                        label = {'Correo'}
                        handleChange = {handleChangeEmail}
                        value = {email}
                    />

                    <div className = {styles.inline}>
                        <Input
                        label = 'Nombre'
                        handleChange = {handleChangeName}
                        value = {name}
                        />

                        <Input
                        label = 'Apellido'
                        handleChange = {handleChangeLastName}
                        value = {lastName}
                        />
                    </div>

                    <Input
                        label = 'Contraseña'
                        handleChange = {handleChangePass}
                        value = {password}
                    />

                    <Input
                        label = 'Confirmar contraseña'
                        handleChange = {handleChangePass}
                        value = {password}
                    />

                <p className = {styles.redirect}>Al proceder aceptas los 
                    <ActiveLink href = 'login' className = {styles.register}> Terminos y condiciones </ActiveLink>
                </p>

                    <Button     
                        color = {'#6354f6'}
                        hover = {'#6354f6dd'}>
                            <label className = {styles.ButtonLabel}>
                                {message}
                            </label>
                    </Button>
                    
                </form>

                <p className = {styles.redirect}>¿Ya tienes una cuenta? 
                    <ActiveLink href = 'login' className = {styles.register}> Iniciar sesión </ActiveLink>
                </p>
            </>

        </UserLayout>
    )
}