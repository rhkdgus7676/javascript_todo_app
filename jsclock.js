'use strict';

const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector(".js-title");


function getTime(){
  const date = new Date();
  const days = date.getDay();
  const dates = date.getDate();
  const hours = date.getHours();
  const mins = date.getMinutes();
  const secs = date.getSeconds();

  clockTitle.innerText = 
  `${dates}일 ${hours < 10 ? `0${hours}` : hours}시 ${mins < 10 ? `0${mins}` : mins}분   ${secs < 10 ? `0${secs}` : secs}초`;
}






function init(){
  getTime();
  // setInterval(getTime,1000);
}

init();