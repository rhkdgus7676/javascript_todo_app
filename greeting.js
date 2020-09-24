'use strict';

const form = document.querySelector(".js-form");
const input = document.querySelector("input");
const greeting = document.querySelector(".js-greeting");

const USER_LS = "currentUser";
const SHOWING_CN = "showing";

//
// function submitName(value){
//   localStorage.setItem(value);
// }

// form.addEventListener("submit" , submitName(value))
//

function saveName(text){
    localStorage.setItem(USER_LS , text);
 }

function handleSubmit(e){
  e.preventDefault();
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}


function askForName(){
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit" , handleSubmit)
  
}

function paintGreeting(text){
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerHTML = `hello , ${text}`
}

function loadName(){
  const currentUser = localStorage.getItem(USER_LS);

  if (currentUser === null ){
    askForName();
    
  }else{
    paintGreeting(currentUser);
  }
}



function init(){
 loadName();

}

init();