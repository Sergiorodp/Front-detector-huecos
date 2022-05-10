import Link from 'next/link'

// styles
import styles from './dashNav.module.css'

export default function DashBoardNav(){

    const menu = [ 
        {
            name : "Home",
            link : "/"
        },
        {
            name : "Products",
            link : "/dashboard/"
        },{
            name : "Añadir",
            link : "/dashboard/addProduct" 
        }]

    const placeMenu = menu.map( cont =>{
        return(
    
        <Link href = {`${cont.link}`} key = {cont.name}>
            <li  className = {styles.menulink}>
                <a>
                    {cont.name}
                </a>
            </li>
        </Link>
            
        )
    })

    return(
        <nav className = {styles.container}>
            <div className={styles.headerMenuContainer}>
                <h2>Panel de Control</h2>
            </div>
            <div className={styles.menuContainer}>
                <ul className = { styles.menu }>
                    {placeMenu}
                </ul>
            </div>
            <div className={styles.footerDashNav}>
                <p>footer</p>
            </div>
        </nav>
    )
}