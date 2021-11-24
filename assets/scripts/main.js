const reset = document.querySelector(".nav__btn");
const submitTask = document.querySelector(".input__btn")
const taskDisplay = document.querySelector(".tasks__display");

const taskNumbers = 0;

const incrementTaskNumber = (number) => {
  if(number == 0) {

  }
}

const makeTask = (task) => {
  return `
  <div class="task">
    <input class="task__checkbox" type="checkbox">
    <p class="task__text">${task}</p>
    <button class="task__btn"><i class="fas fa-pencil-alt fa-lg"></i></button>
  </div>
  `
}

const handleSubmitClick = () => {
  const input = document.querySelector(".input__task");
  const inputVal = input.value;
  taskDisplay.innerHTML += makeTask(inputVal);
}

const handleResetClick = () => {
  window.location.reload();
}

reset.addEventListener("click", handleResetClick);
submitTask.addEventListener("click", handleSubmitClick);