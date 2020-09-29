'use strict';

const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector(".js-title");


function getTime(){
  const date = new Date();

  const weekdayArray = new Array(7);
    weekdayArray[0] = "sunday";
    weekdayArray[1] = "monday";
    weekdayArray[2] = "tuesday";
    weekdayArray[3] = "wednesday";
    weekdayArray[4] = "thirsday";
    weekdayArray[5] = "friday";
    weekdayArray[6] = "saturday";

  const weekdays = weekdayArray[date.getDay()];

  // const dates = date.getDate();
  const hours = date.getHours();
  const mins = date.getMinutes();
  const secs = date.getSeconds();

  clockTitle.innerText =
  // ${dates < 10 ? `0${dates}` : dates} th 
  `${weekdays} , ${hours < 10 ? `0${hours}` : hours} : ${mins < 10 ? `0${mins}` : mins} : ${secs < 10 ? `0${secs}` : secs}`;
}



function init(){
  getTime();
  setInterval(getTime,1000);
}

init();