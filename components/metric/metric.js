//styles
import { useEffect, useState } from 'react'
import styles from './metric.module.css'

export default function Metric ({response, name, color = 'black'}) {

    return(
        <>
        <div className = "metricContainer">
            <h3>{`${name}: ${response}`}</h3>
        </div>
        <style jsx>{`
        
            .metricContainer{
                width: 90%;
                color: white;
                background: ${color};
                border-radius: 20px;
                margin: 0 1vw 0 1vw;
                display:flex;
                justify-content: center;
                align-items:center;
                box-shadow: 0px 0px 11px 1px rgba(0,0,0,0.05);
            }

            .metricContainer:hover{
                background: ${color}cc;
            }

        `}</style>
        </>

    )
}