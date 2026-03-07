"use strick"

const tasksDB = {
  tasks: []
};

const inp = document.querySelector('#entry');
const btnAdd = document.querySelector('.add');
const ul = document.querySelector('.list');
const checkBox = document.querySelector('[type="checkbox"]');

btnAdd.addEventListener('submit', (event) => {
  event.preventDefault();
  const text = inp.value;

  // const li = document.createElement('li');
  // li.textContent = text;

  // if (ul.children.length <= 25 && text.length <= 80) {
  // ul.prepend(li);
  // } else {
  //   alert("Достигнут лимит задач или задача слишком длинная");
  // }

  event.target.reset();
});