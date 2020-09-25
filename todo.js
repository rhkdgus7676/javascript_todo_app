'use strict';

const toDoForm = document.querySelector(".toDoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".toDoList");

const TODOS_LS = 'toDos';

const toDos = []; 

function saveToDos(){
  localStorage.setItem(TODOS_LS , JSON.stringify(toDos));
}

function loadToDos(){
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if(loadedToDos !== null){    
    const parsedToDos = JSON.parse(loadedToDos);
    console.log(parsedToDos);
    parsedToDos.forEach(function(toDo){
      console.log(toDo.text);
      paintToDo(toDo.text);
    });
  }
}

function handleSubmit(e){
  e.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}

function paintToDo(text){
 const li = document.createElement("li");
 const delBtn = document.createElement("button");
 const span = document.createElement("span");
 const newId =  toDos.length + 1;
 delBtn.innerText = "XXXXXX";

 span.innerText = text;
 li.appendChild(span);
 li.id =  newId;
 li.appendChild(delBtn);
 toDoList.appendChild(li);
 const toDoObj = {
   text : text ,
   id :  newId
 };
 toDos.push(toDoObj);
 saveToDos();
}



function init(){
  loadToDos();
  toDoForm.addEventListener("submit" , handleSubmit);
  
}
init();