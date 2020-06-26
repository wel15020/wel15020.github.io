//ADD the key and change units to imperial
//const apiURL = "http://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=470ee5d5e719e7a5318dbf1830b0a4d8&units=imperial"

const apiURL = "http://api.openweathermap.org/data/2.5/weather?zip=83263,us&APPID=470ee5d5e719e7a5318dbf1830b0a4d8&units=imperial"

//Go fetch it and then wait for a response.
fetch(apiURL)
  .then((response) => response.json())
  .then((weatherInfo) => {
    //Once it comes back, display it to the console.
    console.log(weatherInfo);
    
    document.getElementById('place').innerHTML=weatherInfo.name;
    document.getElementById('currentTemp').innerHTML=weatherInfo.main.temp;
    document.getElementById('windSpeed').innerHTML=weatherInfo.wind.speed;

    const iconcode = weatherInfo.weather[0].icon;
    console.log(iconcode);
    
    const iconpath = "http://openweathermap.org/img/w/" + iconcode + ".png";
    console.log(iconpath);

    document.getElementById('weather_icon').src = iconpath;

 }); //end of "then" fat arrow function



