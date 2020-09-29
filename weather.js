'use strict';

const weatherContainer = document.querySelector(".js-weather");

const API_KEY = "30404cac6a60725f8fabcd4f7c6ef8ab";

function getWeather(lat , lon){
  fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  ).then(function(response){
    return response.json();    
  })
  .then(function(json){
    const  temperature = Math.round(json.main.temp);
    const place = json.name;
    weatherContainer.innerText = `${temperature}℃ @ ${place}`;
  });
}

const COORDS = 'coords';

function saveCoords(coordsObj){
  localStorage.setItem(COORDS , JSON.stringify(coordsObj));
}

function handleGeoSuccess(position){
  // console.log(position);
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    latitude,
    longitude
    // latitude : latitude ,
    // longitude : longitude
  };
  saveCoords(coordsObj);
  getWeather(latitude, longitude);
}

function handleGeoError(){
  console.log("can't access geo location")
}


function askForCoords(){
  navigator.geolocation.getCurrentPosition(handleGeoSuccess , handleGeoError);
}

function loadCoords(){
  const loadedCoords = localStorage.getItem(COORDS);
  if(loadedCoords === null){
    askForCoords();
  }else{
    //getweather
    const parsedCoords = JSON.parse(loadedCoords);
    // console.log(parsedCoords);
    getWeather(parsedCoords.latitude , parsedCoords.longitude);
  }
}




function init(){
  loadCoords();
}
init();