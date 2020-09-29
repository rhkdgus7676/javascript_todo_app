'use strict';

const toDoForm = document.querySelector(".toDoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".toDoList");

const TODOS_LS = 'toDos';

let toDos = []; 


function deleteToDo(event){
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
  const cleanToDos = toDos.filter(function(toDo){
    return toDo.id !== parseInt(li.id);
  });
  toDos = cleanToDos;
  saveToDos();
} 

function saveToDos(){
  localStorage.setItem(TODOS_LS , JSON.stringify(toDos));
}

function loadToDos(){
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if(loadedToDos !== null){    
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(function(toDo){
      // console.log(toDo.text);
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
 delBtn.innerText = "delete";
delBtn.addEventListener("click" , deleteToDo);
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
  // setTimeout(loadToDos, 1000);
  
}
init();