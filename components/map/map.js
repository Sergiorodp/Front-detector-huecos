import 'mapbox-gl/dist/mapbox-gl.css';
import { useEffect, useState } from 'react';
import Map, {Marker} from 'react-map-gl';
import huecosService from 'backendservice/huecos/index'
import socket from 'backendservice/socketio/socket'

export default function WebMap(){

    const [ huecos , setHuecos ] = useState([])
    const [viewport, setViewport] = useState({
        longitude: -74.08316250237104,
        latitude: 4.649846822093906,
        zoom: 10
    })

    const [pos, setPos] = useState({})

    useEffect(() => {

        huecosService.getHuecos()
        .then( res => {

            console.log(res)
            const formatHuecos = res.data.map( (hueco, index) => {

                return(
                    <Marker 
                        key={hueco.id} 
                        latitude={hueco.latitud}
                        longitude = {hueco.longitud}
                    >
                        <img src={hueco.image.url} width='30px'/>
                    </Marker>
                )
            } )

            setHuecos(formatHuecos)

            socket.on('prueba', data => {
                setPos(data)
            })

        })

    },[])

    return (
        <>
            <h2> Mapa huecos </h2>
            <div className='map-container'>
                <Map
                mapboxAccessToken='pk.eyJ1Ijoic2VyZ2lvLXJvZHJpZ3VleiIsImEiOiJjbDN1OXI0YXUyNGZ3M2ZwbjRsdjFnanozIn0.1bNx-z2QNQqAMhbKHrKD6g'
                initialViewState={viewport}
                style={{width: '100%'}}
                mapStyle="mapbox://styles/mapbox/streets-v9"
                >
                    {huecos}
{/*                     
                    <Marker
                    latitude={pos.lat}
                    longitude={pos. lon}
                    >
                        <img src=''/>
                    </Marker> */}
        
                </Map>
            </div>
            <style jsx>{`
                
                .map-container{
                    height: 100%;
                    padding: 2% 0;
                }
                
                `}</style>
        </>
    )
}