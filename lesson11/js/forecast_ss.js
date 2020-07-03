
// Soda Spings forecast

const apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=42.65&lon=-111.60&units=imperial&exclude=minutely,hourly&APPID=470ee5d5e719e7a5318dbf1830b0a4d8";
// const apiURL = "http://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=470ee5d5e719e7a5318dbf1830b0a4d8&units=imperial";

fetch(apiURL)
  .then((response) => response.json())
  .then((weatherInfo) => {
    //console.log(weatherInfo);

    document.getElementById('current').textContent = weatherInfo.current.weather[0].description;
    document.getElementById('current-temp').textContent = weatherInfo.current.temp.toFixed(0);
    document.getElementById('humidity').textContent = weatherInfo.current.humidity;
    document.getElementById('speed').textContent = weatherInfo.current.wind_speed.toFixed(0);

    const newDay = weatherInfo['daily'];
    const forecast = newDay.slice(1, 6);

    forecast.forEach(eachDay => {
      let data = document.createElement('td');
      let para1 = document.createElement('p');
      let image = document.createElement('img');

      image.setAttribute('src', `https://openweathermap.org/img/w/${eachDay.weather[0].icon}.png`);
      image.setAttribute('alt', `${eachDay.weather[0].description}`);

      para1.innerHTML = `${eachDay.temp.day.toFixed(0)}&#8457;`;
      data.appendChild(para1);
      data.appendChild(image);

      document.querySelector('tr.newData').appendChild(data);
    });
  });

var day = new Date();
var weekday = new Array(7);
weekday[0] = "Sun";
weekday[1] = "Mon";
weekday[2] = "Tues";
weekday[3] = "Wed";
weekday[4] = "Thurs";
weekday[5] = "Fri";
weekday[6] = "Sat";

document.getElementById('tomorrow').innerHTML = weekday[(day.getDay() + 1) % 7];
document.getElementById('day2').innerHTML = weekday[(day.getDay() + 2) % 7];
document.getElementById('day3').innerHTML = weekday[(day.getDay() + 3) % 7]
document.getElementById('day4').innerHTML = weekday[(day.getDay() + 4) % 7]
document.getElementById('day5').innerHTML = weekday[(day.getDay() + 5) % 7];