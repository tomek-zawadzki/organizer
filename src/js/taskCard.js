const taskInput = document.querySelector(".tasks__input");

export const taskBox = document.querySelector(".new-tasks-box");

let editWidnow = document.querySelector(".tasks__edit");
let editInput = document.querySelector(".tasks__edit--input");

let taskPlace;
let newTask;
let idNumber = 0;
let taskToEdit;

export const addNewTask = () => {
  if (taskInput.value !== "") {
    idNumber++;
    taskPlace = document.createElement("div");
    taskPlace.classList.add("tasks__new-task");
    taskPlace.setAttribute("id", `id-task-${idNumber}`);
    taskBox.appendChild(taskPlace);
    newTask = document.createElement("p");
    newTask.innerHTML = taskInput.value;
    newTask.classList.add("tasks__new-task--text");
    taskPlace.appendChild(newTask);

    createNewTaskBtns();
  } else {
    console.log("wprowadz tekst");
  }

  taskInput.value = "";
};

const createNewTaskBtns = () => {
  const btnsArea = document.createElement("div");
  btnsArea.classList.add("tasks__new-task--buttons");
  taskPlace.appendChild(btnsArea);

  const acceptBtn = document.createElement("button");
  acceptBtn.classList.add("tasks__new-task--accept-btn");
  acceptBtn.classList.add("tasks__new-task--btn");
  acceptBtn.innerHTML = '<i class="fa-solid fa-check"></i>';

  const editBtn = document.createElement("button");
  editBtn.classList.add("tasks__new-task--edit-btn");
  editBtn.classList.add("tasks__new-task--btn");
  editBtn.innerHTML = "edit";

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("tasks__new-task--trash-btn");
  deleteBtn.classList.add("tasks__new-task--btn");
  deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';

  btnsArea.appendChild(acceptBtn);
  btnsArea.appendChild(editBtn);
  btnsArea.appendChild(deleteBtn);
};

const deleteTask = (e) => {
  const taskToDelete = e.target.closest(".tasks__new-task");
  taskToDelete.remove();
};

const openEditWindow = (e) => {
  const oldTask = e.target.closest(".tasks__new-task").id;
  taskToEdit = document.getElementById(oldTask);
  editInput.value = taskToEdit.firstChild.textContent;
  editWidnow.style.display = "flex";
};

export const actionClick = (e) => {
  if (e.target.classList.value !== "") {
    if (
      e.target
        .closest("button")
        .classList.contains("tasks__new-task--accept-btn")
    ) {
      e.target
        .closest("div")
        .parentElement.firstElementChild.classList.toggle("task-finished");
    } else if (
      e.target
        .closest("button")
        .classList.contains("tasks__new-task--trash-btn")
    ) {
      deleteTask(e);
    } else if (
      e.target.closest("button").classList.contains("tasks__new-task--edit-btn")
    ) {
      openEditWindow(e);
    }
  }
};

export const changeTask = () => {
  taskToEdit.firstChild.textContent = editInput.value;
  editWidnow.style.display = "none";
  editInput.innerHTML = "";
};

export const closeEditWindow = () => {
  editWidnow.style.display = "none";
};
