import { useState } from "react"
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
export default function Weather()
{
  let [weatherInfo,setWeatherInfo]=useState(
    {
        city:"Mumbai",
        feels_like :29.77,
        humidity: 51,
        temp: 28.99,
        temp_max: 28.99,
        temp_min: 28.99,
        description:"haze"
      }
  )
  let updateInfo = (newInfo)=>{
    setWeatherInfo(newInfo);
  }
  return(
    <div>
       <h1> WEATHER APP BY SINGH</h1>
       <SearchBox updateInfo={updateInfo}/>
       <InfoBox info={weatherInfo}/>
    </div>
  )
}