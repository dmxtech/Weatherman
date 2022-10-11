//timeframe
const d = new Date();
let date = d.getDay();
document.getElementById("date").innerHTML = d;
console.log(d);
//search/fetch button 
var searchinput = document.getElementById('search');
var searchButton = document.getElementById('search-button');
var locButton = document.getElementById('show');
//set your location from real location
(() => {
  const message = document.querySelector('#message');

  // check if the Geolocation API is supported
  if (!navigator.geolocation) {
    message.textContent = `Your browser doesn't support Geolocation`;
    message.classList.add('error');
    return;
  }

  // handle click event
  const btn = document.querySelector('#show');
  btn.addEventListener('click', function () {
    // get the current position
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  });


  // handle success case
  function onSuccess(position) {
    const {
      latitude,
      longitude
    } = position.coords;

    message.classList.add('success');
    message.textContent = `Your location: (${latitude},${longitude})`;
    // localStorage.setItem(position, d);
  }

  // handle error case
  function onError() {
    message.classList.add('error');
    message.textContent = `Failed to get your location!`;
  }

})();
//set search items on local storage
localStorage.setItem(search, d);



// Getting searched city from local storage
var city1 = localStorage.key(0);
document.getElementById("city1").innerHTML = city1
// city1.addEventListener('click'(city1.value = searchinput);
var city2 = localStorage.key(1);

document.getElementById("city2").innerHTML = city2
var city3 = localStorage.key(2);
document.getElementById("city3").innerHTML = city3
var city4 = localStorage.key(3);
document.getElementById("city4").innerHTML = city4
var city5 = localStorage.key(4);
document.getElementById("city5").innerHTML = city5
var city6 = localStorage.key(5);
document.getElementById("city6").innerHTML = city6
var city7 = localStorage.key(6);
document.getElementById("city7").innerHTML = city7
var city8 = localStorage.key(7);
document.getElementById("city8").innerHTML = city8

//getapi function start
function getApi() {
  //API key
  var key = 'dd9f750d866c7ea7294e978112f158c0';
  //Declare variables for API
  var geourl = `https://api.openweathermap.org/geo/1.0/direct?`;
  //search text and function
  var search = document.getElementById('search').value;
  console.log(search);

  //Geocoding API call
  var Gurl = `${geourl}q=${search}&appid=${key}`;

  fetch(Gurl)
    .then(function (resp) {
      console.log(resp);
      return resp.json();
    })
    .then(function (data) {
      console.log(data);

      let lon = data[0].lon;
      let lat = data[0].lat;
      console.log(lon);
      thename = data[0].name;
      Mainloc = data;
      getforecast(lat, lon);
    });

}
function getforecast(lat, lon) {
  var key = 'dd9f750d866c7ea7294e978112f158c0';
  fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${key}`)
    .then(function (resp) {
      console.log(resp);
      return resp.json();
    })
    .then(function (data) {
      console.log(data);
      console.log(data.list);
      let wind = data.list[0].wind;
      console.log(wind);
      let fetchlist = data.list;
      let weatherlist = [];
      for (let i = 1; i < 36; i += 9) {
        weatherlist.push(fetchlist[i]);
      }
      //Today's weather info
      console.log(weatherlist);
      let maintemp = data.list[0].main.temp;
      console.log(maintemp);
      let day = data.list[0].dt_txt;
      let icon = fetchlist[0].weather[0].icon;
      let iconurl = ("http://openweathermap.org/img/wn/" + icon + "@2x.png");
      console.log(icon);
      console.log(iconurl);
      let humidity = data.list[0].main.humidity;
      let windspeed = data.list[0].wind.speed;
      document.getElementById("cityname").innerHTML = "City name: " + thename;
      document.getElementById("day").innerHTML = "Today is: " + day;

      document.getElementById("wicon").src = iconurl;


      document.getElementById("temp").innerHTML = "Temperature: " + (maintemp - 273) + "℃";
      document.getElementById("humidity").innerHTML = "Humidity: " + humidity + "%";
      document.getElementById("wind").innerHTML = "Windspeed: " + windspeed + "MPH";

      let day5 = weatherlist[0].dt_txt;
      let maintemp5 = weatherlist[0].main.temp;
      let humidity5 = weatherlist[0].main.humidity;
      let windspeed5 = weatherlist[0].wind.speed;
      let icon5 = weatherlist[0].weather[0].icon
      let icon5url = ("http://openweathermap.org/img/wn/" + icon5 + "@2x.png");
      document.getElementById("day5").innerHTML = "1-Day: " + day5;
      document.getElementById("wicon5").src = icon5url;
      document.getElementById("temp5").innerHTML = "Temperature: " + (maintemp5 - 273) + "℃";
      document.getElementById("humidity5").innerHTML = "Humidity: " + humidity5 + "%";
      document.getElementById("wind5").innerHTML = "Windspeed: " + windspeed5 + "MPH";


      let day4 = weatherlist[1].dt_txt;
      let maintemp4 = weatherlist[1].main.temp;
      let humidity4 = weatherlist[1].main.humidity;
      let windspeed4 = weatherlist[1].wind.speed;
      let icon4 = weatherlist[1].weather[0].icon
      let icon4url = ("src", "http://openweathermap.org/img/wn/" + icon4 + "@2x.png");
      document.getElementById("day4").innerHTML = "2-Day: " + day4;
      document.getElementById("wicon4").src = icon4url;
      document.getElementById("temp4").innerHTML = "Temperature: " + (maintemp4 - 273) + "℃";
      document.getElementById("humidity4").innerHTML = "Humidity: " + humidity4 + "%";
      document.getElementById("wind4").innerHTML = "Windspeed: " + windspeed4 + "MPH";
      console.log(icon4url);
      let day3 = weatherlist[2].dt_txt;
      let maintemp3 = weatherlist[2].main.temp;
      let humidity3 = weatherlist[2].main.humidity;
      let windspeed3 = weatherlist[2].wind.speed;
      let icon3 = weatherlist[2].weather[0].icon
      let icon3url = ("src", "http://openweathermap.org/img/wn/" + icon3 + "@2x.png");
      document.getElementById("day3").innerHTML = "3-Day: " + day3;
      document.getElementById("wicon3").src = icon3url;
      document.getElementById("temp3").innerHTML = "Temperature: " + (maintemp3 - 273) + "℃";
      document.getElementById("humidity3").innerHTML = "Humidity: " + humidity3 + "%";
      document.getElementById("wind3").innerHTML = "Windspeed: " + windspeed3 + "MPH";

      let day2 = weatherlist[3].dt_txt;
      let maintemp2 = weatherlist[3].main.temp;
      let humidity2 = weatherlist[3].main.humidity;
      let windspeed2 = weatherlist[3].wind.speed;
      let icon2 = weatherlist[3].weather[0].icon
      let icon2url = ("src", "http://openweathermap.org/img/wn/" + icon2 + "@2x.png");
      document.getElementById("day2").innerHTML = "4-Day: " + day2;
      document.getElementById("wicon2").src = icon2url;
      document.getElementById("temp2").innerHTML = "Temperature: " + (maintemp2 - 273) + "℃";
      document.getElementById("humidity2").innerHTML = "Humidity: " + humidity2 + "%";
      document.getElementById("wind2").innerHTML = "Windspeed: " + windspeed2 + "MPH";


    })
}

searchButton.addEventListener('click', getApi);




// show weather data
// const currentWeather = document.getElementById('currentweather');
// const weather = document.getElementById('weather');
// const currentTemp = document.getElementById('currenttemp');
// const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
// const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
// const country = document.getElementById('country');


// function showWeatherData(dataw) {
//   let { temperature, humidity, wind_speed, UV_index } = dataw.current;

//   timezone.innerHTML = dataw.timezone;
//   country.innerHTML = dataw.lat + 'N ' + dataw.lon + 'E'

//   currentWeather.innerHTML =
//     ` <div class="weather">
//           <div>Temperature</div>
//           <div>${temperature}</div>
//       </div>
//           <div class="weather">
//             <div>Humidity</div>
//             <div>${humidity}%</div>
//         </div>
//         <div class="weather">
//             <div>Wind Speed</div>
//             <div>${wind_speed}</div>
//         </div>
//         <div class="weather">
//             <div>UV index</div>
//             <div>${UV_index}</div>
//         </div> `;

//   let otherDayForcast = ''
//   dataw.daily.forEach((day, idx) => {
//     if (idx == 0) {
//       currentTemp.innerHTML = `
//                   <img src="http://openweathermap.org/img/wn//${day.weather[0].icon}@4x.png" alt="weather-icon" class="wicon">
//                   <div class="other">
//                       <div class="day">${window.moment(day.dt * 1000).format('dddd')}</div>
//                       <div class="temp">Night - ${day.temp.night}&#176;C</div>
//                       <div class="temp">Day - ${day.temp.day}&#176;C</div>
//                   </div>
//                   `
//     } else {
//       otherDayForcast += `
//                   <div class="5dayforecast-item">
//                       <div class="day">${window.moment(day.dt * 1000).format('ddd')}</div>
//                       <img src="http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png" alt="weather-icon" class="wicon">
//                       <div class="temp">Night - ${day.temp.night}&#176;C</div>
//                       <div class="temp">Day - ${day.temp.day}&#176;C</div>
//                   </div>
//                   `
//     }
//   })
// }

// locButton.addEventListener('click', showWeatherData);

// weather.innerHTML = otherDayForecast;