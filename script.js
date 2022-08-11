const app = {
  init: () => {
    document
      .getElementById('btnGet')
      .addEventListener('click', app.fetchWeather);
    document
      .getElementById('btnCurrent')
      .addEventListener('click', app.getLocation);
  }}

//Declare variables for API
var lat = document.getElementById('latitude'); 
var lon = document.getElementById('longitude');
var lang = 'en';
var units ='metric';
var search = document.getElementById('search').value;
var key= 'db1cb261132a669040597c8d3f2222b6';
var url = `http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${key}&units=${units}&lang=${lang}`;


fetch(url)
      .then((resp) => {
        console.log(resp);
        if (!resp.ok) throw new Error(resp.statusText);
        return resp.json();
      })
      .then((data) => {
        app.showWeather(data);
      })



