//timeframe
const d = new Date();
let date = d.getDay();
document.getElementById("date").innerHTML = d;
console.log(d);
//search/fetch button 
var searchButton = document.getElementById('search-button');
var locButton = document.getElementById('show');
//set your location from real location
(() => {
  const message = document.querySelector('message');

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
    localStorage.setItem(position, d);
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
  console.log(document.getElementById('search').value);

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
      theCountry = data[0].country;
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
      let wind = data.list[0].weather;
      console.log(wind);
      let fetchlist = data.list;
      let weatherlist = [];
      for (let i = 1; i < 36; i += 9) {
        weatherlist.push(fetchlist[i]);
      }
      console.log(weatherlist);
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