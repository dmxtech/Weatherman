const fetchButton = document.getElementById('fetch-button');
const locButton = document.getElementById('show');
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
    localStorage.setItem(position, d);
  }

  // handle error case
  function onError() {
    message.classList.add('error');
    message.textContent = `Failed to get your location!`;
  }

})();
//Getting searched city from local storage
const city1 = localStorage.key(0);
document.getElementById("city1").innerHTML = city1
const city2 = localStorage.key(1);
document.getElementById("city2").innerHTML = city2
const city3 = localStorage.key(2);
document.getElementById("city3").innerHTML = city3
const city4 = localStorage.key(3);
document.getElementById("city4").innerHTML = city4
const city5 = localStorage.key(4);
document.getElementById("city5").innerHTML = city5
const city6 = localStorage.key(5);
document.getElementById("city6").innerHTML = city6
const city7 = localStorage.key(6);
document.getElementById("city7").innerHTML = city7
const city8 = localStorage.key(7);
document.getElementById("city8").innerHTML = city8

//getapi function start
function getApi() {
  //Declare variables for API
  //API key
  const key = 'dd9f750d866c7ea7294e978112f158c0';
  //E

  const geourl = `http://api.openweathermap.org/geo/1.0/direct?`;
  const Wurl = `https://api.openweathermap.org/data/2.5/weather?`;
  const lang = 'en';
  const units = 'metric';
  //search text and function
  const search = document.getElementById('search').value;
  console.log(document.getElementById('search').value);

  //Geocoding API call
  const Gurl = `${geourl}q=${search}&appid=${key}`;
  let theCountry, theLat, theLon, theName, theState = [], Mainloc = {};
  let Geoloc = function () {
    for (let prop in Mainloc) {
      console.log(prop);
      console.log(Mainloc[prop]);
    };
  }

  fetch(Gurl)
    .then(function (resp) {
      return resp.json();
    })
    .then(function (data) {
      console.log(data);
      theState = data.state;
      theName = data.name;
      theLon = data.lon;
      theLat = `${lat}`;
      theCountry = data.country;
      Mainloc = data;
      Geoloc();
      console.log(theLon);

      //WeatherApi call

      const reqUrl = `https://api.openweathermap.org/data/3.0/onecall?`;
      const requestUrl = `${reqUrl}q=lat=${theLat}&lon=${theLon}&appid=${key}`;
      fetch(requestUrl)
        .then(function (resp) {
          console.log(resp);
          return resp.json();
        })
        .then(function (data) {
          const dataw = data;
          console.log(dataw);
        })
    })
    .catch(err => console.error(err));
}

//set search items on local storage
localStorage.setItem(search, d);



//timeframe
const d = new Date();
let date = d.getDay();
document.getElementById("date").innerHTML = d;
console.log(d);


//show weather data
const currentWeather = document.getElementById('currentweather');
const weather = document.getElementById('weather');
const currentTemp = document.getElementById('currenttemp');
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const country = document.getElementById('country');


function showWeatherData(dataw) {
  let { temperature, humidity, wind_speed, UV_index } = dataw.current;

  timezone.innerHTML = dataw.timezone;
  country.innerHTML = dataw.lat + 'N ' + dataw.lon + 'E'

  currentWeather.innerHTML =
    ` <div class="weather">
    <div>Temperature</div>
    <div>${temperature}</div>
</div>
    <div class="weather">
      <div>Humidity</div>
      <div>${humidity}%</div>
  </div>

  <div class="weather">
      <div>Wind Speed</div>
      <div>${wind_speed}</div>
  </div>
  <div class="weather">
      <div>UV index</div>
      <div>${UV_index}</div>
  </div> `;

  let otherDayForcast = ''
  dataw.daily.forEach((day, idx) => {
    if (idx == 0) {
      currentTemp.innerHTML = `
            <img src="http://openweathermap.org/img/wn//${day.weather[0].icon}@4x.png" alt="weather-icon" class="wicon">
            <div class="other">
                <div class="day">${window.moment(day.dt * 1000).format('dddd')}</div>
                <div class="temp">Night - ${day.temp.night}&#176;C</div>
                <div class="temp">Day - ${day.temp.day}&#176;C</div>
            </div>

            `
    } else {
      otherDayForcast += `
            <div class="5dayforecast-item">
                <div class="day">${window.moment(day.dt * 1000).format('ddd')}</div>
                <img src="http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png" alt="weather-icon" class="wicon">
                <div class="temp">Night - ${day.temp.night}&#176;C</div>
                <div class="temp">Day - ${day.temp.day}&#176;C</div>
            </div>

            `

    }
  })
}
// weather.innerHTML = otherDayForecast;


locButton.addEventListener('click', showWeatherData);
fetchButton.addEventListener('click', getApi);


