// const app = {
//   init: () => {
//     document
//       .getElementById('btnGet')
//       .addEventListener('click', app.fetchWeather);
//     document
//       .getElementById('btnCurrent')
//       .addEventListener('click', app.getLocation);
//   }}

//Declare variables for API
// var lat = document.getElementById('latitude'); 
// var lon = document.getElementById('longitude');
// var lang = 'en';
// var units ='metric';
// var search = document.getElementById('search').value;
var fetchButton = document.getElementById('fetch-button');


function getApi() {
  var key = 'dd9f750d866c7ea7294e978112f158c0';
  var requestUrl = `http://api.openweathermap.org/data/2.5/onecall?`;
  var geourl = `http://api.openweathermap.org/geo/1.0/direct?`;

  var lat = document.getElementById('latitude');
  var lon = document.getElementById('longitude');
  var lang = 'en';
  var units = 'metric';
  var search = document.getElementById('search').value;
  console.log(document.getElementById('search').value);
  var url = `${geourl}q=${search}&appid=${key}`;
  fetch(url)
    .then(function (resp) {
      console.log(resp);
      return resp.json();
    })
    .then(function (data) {
      console.log(data);

    })

}
fetchButton.addEventListener('click', getApi);
