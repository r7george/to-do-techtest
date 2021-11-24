const reset = document.querySelector(".nav__btn");
const submitTask = document.querySelector(".input__btn")
const taskDisplay = document.querySelector(".tasks__display");
const taskCounter = document.querySelector(".tasks__start-text");
const deleteSection = document.querySelector(".delete");

const taskArr = [];

const makeTask = (task) => {
  return `
  <div class="task">
    <input class="task__checkbox" type="checkbox">
    <p class="task__text">${task}</p>
    <button class="task__btn"><i class="fas fa-pencil-alt fa-lg"></i></button>
  </div>
  `
}

const taskCounterHTML = (number) => {
  return `Tasks to Complete: ${number}`;
}

const handleSubmitClick = () => {
  const input = document.querySelector(".input__task");
  const inputVal = input.value;
  taskArr.push(inputVal);
  taskDisplay.innerHTML += makeTask(inputVal);
  taskCounter.innerHTML = taskCounterHTML(taskArr.length);

  input.value = "";
}

const handleResetClick = () => {
  window.location.reload();
}

const taskCheckbox = document.querySelector(".task__checkbox");

reset.addEventListener("click", handleResetClick);
submitTask.addEventListener("click", handleSubmitClick);
taskCheckbox.addEventListener("click", () => {
  if (deleteSection.style.display === "none") {
    deleteSection.style.display = "flex";
  }
  else {
    deleteSection.style.display = "none";
  }
})

