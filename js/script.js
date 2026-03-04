"use strick"

// Необходимо подвязать импут к кнопке после чего перенести текст в лист

const inp = document.querySelector('#entry');
const btnAdd = document.querySelector('.add');
const ul = document.querySelector('.list');


btnAdd.addEventListener('click', () => {
  const text = inp.value;
  const li = document.createElement('li');
  li.textContent = text;

  if (ul.children.length <= 25 && text.length <= 80) {
  ul.append(li);
  } else {
    alert("Достигнут лимит задач или задача слишком длинная");
  }

  inp.value = "";
});