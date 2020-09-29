'use strict';

let map;


const currentCoords = localStorage.getItem("coords");
// console.log("coords");

// const latitude = localStorage.coords.latitude;
// const longitude = localStorage.coords.longitude;

  // const coordsObj = {
  //   latitude,
  //   longitude
  // };

const googleMap = document.querySelector(".google_map");


function initMap() {
  map = new google.maps.Map(googleMap, {
    center: { lat: 35.652832, lng: 139.839478 },
    zoom: 9,
  });
  
}

