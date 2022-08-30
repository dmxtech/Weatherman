var fetchButton = document.getElementById('fetch-button');
//Getting searched city from local storage
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
function getApi() {
  //Declare variables for API
  //API key
  var key = 'dd9f750d866c7ea7294e978112f158c0';
  //E
  var requestUrl = `http://api.openweathermap.org/data/2.5/onecall?`;
  var geourl = `http://api.openweathermap.org/geo/1.0/direct?`;
  var Wurl = `https://api.openweathermap.org/data/2.5/weather?`;
  var lang = 'en';
  var units = 'metric';
  //search text and function
  var search = document.getElementById('search').value;
  console.log(document.getElementById('search').value);
  //timeframe
  var d = new Date();
  let day = d.getDay();
  document.getElementById("date").innerHTML = d;
  console.log(d);
  //set search items on local storage
  localStorage.setItem(search, d);


  //set your location from real nlocation
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
    }

    // handle error case
    function onError() {
      message.classList.add('error');
      message.textContent = `Failed to get your location!`;
    }

  })();
  //Geocoding API call
  var Gurl = `${geourl}q=${search}&appid=${key}`;

  let theCountry, theLat, theLon, theName, theState = [], Mainloc = {};

  let Geoloc = function () {
    for (let prop in Mainloc) {
      console.log(prop);
      console.log(Mainloc[prop]);
    };
  }

  fetch(Gurl)
    .then(function (resp) {
      console.log(resp);
      return resp.json();
    })
    .then(function (data) {
      console.log(data);
      theState = data.state;
      theName = data.name;
      theLon = data.lon;
      theLat = data.lat;
      theCountry = data.country;
      Mainloc = data;
      Geoloc();
    })

  //WeatherApi call
  var Wurl = `${Wurl}q=${search}&appid=${key}`;
  fetch(Wurl)
    .then(function (resp) {
      console.log(resp);
      return resp.json();
    })
    .then(function (data) {
      var dataw = data;
      console.log(dataw);
    })
    .catch(err => console.error(err));
}


fetchButton.addEventListener('click', getApi);
