import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Weather() {

    const[data, setData] = useState({})
    const [lat, setLat] = useState(0)
    const [lon, setLon] = useState(0)

    const api_key = process.env.REACT_APP_API_KEY
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric`;

    
    useEffect(() => {
        axios.get(url).then((response) => {
                    setData(response.data);
                })
    },[url])

    function getUserLocation() {
      navigator.geolocation.getCurrentPosition(function(position){
         setLat(position.coords.latitude)
        setLon(position.coords.longitude)
      })
    }

    const logoChooser = () => {
      if(data.weather === undefined) {
        return <>Still loading</>
      }else {
        return (<img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt=""/>)
      }
    }

  return (
    <div className='text-white flex items-center justify-end'>
        <div className='flex mr-8 items-center text-lg'>
          {getUserLocation()}
          {logoChooser()}
            {(data.main?.temp)?.toFixed()}°C
        </div>
    </div>
  )
}

export default Weather