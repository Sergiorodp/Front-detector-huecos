
export default function HuecoCard ({hueco, color = 'black'}) {
    return(
        <>
        <div className = "metricContainer">

            <img src= { hueco.image.url }></img>

            <div className="info-container">
                <p>{`Latitud : ${hueco.latitud}`}</p>
                <p>{` Longitud : ${hueco.longitud}`}</p>
            </div>

        </div>
        <style jsx>{`

            img{
                
                width:100%;
                height:130px;
                object-fit: cover;
                border-radius:10px;
            }
        
            .metricContainer{
                padding: 5%;
                width: 90%;
                color: white;
                background: ${color};
                border-radius: 20px;
                margin: 0 1vw 0 1vw;
                
                box-shadow: 0px 0px 11px 1px rgba(0,0,0,0.05);
            }

            .info-container{
                width:100%;
                height:100%;
            }

            .metricContainer:hover{
                background: ${color}cc;
            }

        `}</style>
        </>

    )
}