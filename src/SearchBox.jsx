import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useState } from 'react'
export default function SearchBox({updateInfo})
{
  let API_URL = "https://api.openweathermap.org/data/2.5/weather";
  let API_KEY  = "e82a766e1eca9932cdf5ab5e478c697e";
  let [city,setCity] = useState("");
  let[error,setError]=useState(false);
   

  let getWeatherInfo = async ()=>{
    try{
      let response = await fetch (`${API_URL}?q=${city}&appid=${API_KEY}&units=metric` );
      let jsonResponse = await response.json();
      // console.log(jsonResponse);
      let result =
      {
        city:city,
        feels_like:jsonResponse.main.feels_like,
        temp:jsonResponse.main.temp,
        temp_max:jsonResponse.main.temp_max,
        temp_min:jsonResponse.main.temp_min,
        humidity:jsonResponse.main.humidity,
        description:jsonResponse.weather[0].description
      }
      // console.log(result);
      return result;
    }
    catch(err){
      throw err;
    };
    
  }

  let handleChange=(event)=>{
    setCity(event.target.value);
  }

  let handleSubmit = async (event)=>{
    try{
      event.preventDefault();
      // console.log(city);
      setCity("");
      let newInfo = await getWeatherInfo();
      updateInfo(newInfo);
    }
     catch(err)
     {
      setError(true);
     }
  }
  return (
    <div>
       {/* <h1 >Search Weather</h1> */}
      <form onSubmit={handleSubmit}>
         <TextField id="city" label="city" variant="outlined" value={city} required onChange={handleChange}/>
         <br></br>
         <br></br>
         <Button variant="contained" type="submit" onClick={getWeatherInfo}> Submit </Button>
      </form>
      {error && <p style={{color:"red"}}>No such palce exist</p>}
    </div>
  )
}