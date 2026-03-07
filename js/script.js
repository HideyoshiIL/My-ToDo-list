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
  } 
  if (newTasks.length > 25) {
    alert("Задача слишком длинная");
  }
  if (newTasks.trim() === "") {
    return;
  }

  tasksDB.tasks.push(newTasks);
  createTasksList(tasksDB.tasks, tasksList);
  event.target.reset();
});



function createTasksList(task, parent) {
  parent.innerHTML = "";
  task.forEach((tas, i) => {
    parent.innerHTML += `<li class="newTask">${i + 1}. ${tas}
    <i class="fa fa-trash-o" aria-hidden="true"></i> </li>`
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