
import styles from './Input.module.css'

const Input = ({label, value, type, handleChange}) => {
    return(
        <div className = {styles.InputLabel}>
            <label >{label}</label>
            <input onChange = {handleChange}
             type = {type}
             value = {value} />
        </div>
    )
}

export default Input