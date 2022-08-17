var fetchButton = document.getElementById('fetch-button');

function getApi() {
  //Declare variables for API
  var key = 'dd9f750d866c7ea7294e978112f158c0';
  var requestUrl = `http://api.openweathermap.org/data/2.5/onecall?`;
  var geourl = `http://api.openweathermap.org/geo/1.0/direct?`;
  var Wurl = `https://api.openweathermap.org/data/2.5/weather?`;
  var lang = 'en';
  var units = 'metric';
  var search = document.getElementById('search').value;
  console.log(document.getElementById('search').value);
  var Gurl = `${geourl}q=${search}&appid=${key}`;
  fetch(Gurl)
    .then(function (resp) {
      console.log(resp);
      return resp.json();
    })
    .then(function (data) {
      console.log(data);

    })



  var lat = `${[data.lat], lat}`;
  var lon = `$0, lon]`;

  var rurl = `${Wurl}lat=${lat}&lon=${lon}&appid=${key}`;
  fetch(rurl)
    .then(function (resp) {
      console.log(resp);
      return resp.json();
    })

}


fetchButton.addEventListener('click', getApi);
