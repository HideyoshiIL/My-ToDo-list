"use strict"

const tasksDB = {
  tasks: []
};

const form = document.querySelector('.inp')
const entry = document.querySelector('.entry');
const tasksList = document.querySelector('.list');
const checkBox = document.querySelector('[type="checkbox"]');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const newTasks = entry.value;
  const imporChek = checkBox.checked;

  
  if (tasksDB.tasks.length >= 15) {
    alert("Слишком много задач");
    return;
  } else if (newTasks.length > 1150) {
    alert("Задача слишком длинная");
  } else if (newTasks.trim() === "") {
    return;
  } else {
  tasksDB.tasks.push({
    text: newTasks,
    important: imporChek
  });
  createTasksList(tasksDB.tasks, tasksList, imporChek);
  event.target.reset();
  }
});



function createTasksList(task, parent) {
  parent.innerHTML = "";

  task.forEach((tas, i) => {
    if (tas.important){
      parent.innerHTML += `
      <li class="newTask">
        <div class="taskContent">
        <span> ${i + 1}. <i class="fa fa-star" aria-hidden="true"></i> ${tas.text}</span>
        </div>
    <i class="fa fa-trash-o" aria-hidden="true"></i> 
    </li>`
    } else {
      parent.innerHTML += `
      <li class="newTask">
        <div class="taskContent">
        <span> ${i + 1}. ${tas.text}</span>
        </div>
    <i class="fa fa-trash-o" aria-hidden="true"></i> 
    </li>`
    }
  });

  document.querySelectorAll(".fa-trash-o").forEach((btm, i) => {
    btm.addEventListener('click', () => {
      btm.parentElement.remove();
      tasksDB.tasks.splice(i, 1);
      createTasksList(task, parent);
    })
  });


}

  createTasksList(tasksDB.tasks, tasksList);