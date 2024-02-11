import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
export default function InfoBox({info})
{
  // //DUMMY DATA----------->
  // let info={
  //   city:"Mumbai",
  //   feels_like :29.77,
  //   humidity: 51,
  //   temp: 28.99,
  //   temp_max: 28.99,
  //   temp_min: 28.99,
  //   weather:"haze"
  // }

  let IMG_URL = "https://images.unsplash.com/photo-1634840884193-2f6cf2538871?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZHVzdHklMjB3ZWF0aGVyfGVufDB8fDB8fHww";

  let HOT_URL ="https://images.unsplash.com/photo-1447601932606-2b63e2e64331?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG90JTIwc3VubnklMjB3ZWF0aGVyfGVufDB8fDB8fHww";
  let COLD_URL = "https://images.unsplash.com/photo-1476400424721-e25994a9f0ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHRodW5kZXJzdHJvbXxlbnwwfHwwfHx8MA%3D%3D";
  let RAIN_URL="https://media.istockphoto.com/id/105934727/photo/rain.jpg?s=612x612&w=0&k=20&c=rJcjz9o_7spWniAhZ-oFOVQ9gBJCy2tY_s__RqsseVw=";
  return (
    <div className="InfoBox">
      <h1>Weather-Info {info.description}</h1>
      <div className="container-Box">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image = {info.humidity > 70 ? RAIN_URL:info.temp < 18 ? COLD_URL:HOT_URL } 
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
             
            </Typography>
            <Typography variant="body2" color="text.secondary" component="span">
              <h1>{info.city}{info.humidity > 70 ? <ThunderstormIcon/> : info.temp < 18 ?<AcUnitIcon />:
            <WbSunnyIcon/> } </h1>
              <p>Teampature:{info.temp}&deg;C</p>
              <p>Humidity:{info.humidity}</p>
              <p>Temp_Max:{info.temp_max}&deg;C</p>
              <p>Temp_Min:{info.temp_min}&deg;C</p>
              <p>Feels_like:{info.feels_like}&deg;C</p>
              <p><b>The weather is described as {info.weather} and feels like {info.feels_like}&deg;C</b></p>

            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}