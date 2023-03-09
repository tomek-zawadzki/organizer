import moment from "moment";

const menuBox = document.querySelector(".menu-close");
const menuItems = document.querySelectorAll(".menu__list--text");
const menuBtn = document.querySelector(".menu__title");

const openMenu = () => {
  menuBox.classList.toggle("menu");

  if (menuBox.classList.contains("menu-close")) {
    menuBox.classList.remove("menu-close");
  } else {
    menuBox.classList.add("menu-close");
  }

  menuItems.forEach((item) => {
    if (item.classList.contains("hidden")) {
      item.classList.remove("hidden");
    } else {
      item.classList.add("hidden");
    }
  });
};

menuBtn.addEventListener("click", openMenu);

// QUOTE GENERATOR
const quoteText = document.querySelector(".quotes__text");
const quoteAuthor = document.querySelector(".quotes__author");
const changeQuoteBtn = document.querySelector(".quotes__change-btn");

const changeQuote = (data) => {
  const random = Math.floor(Math.random() * data.length);
  quoteText.innerHTML = data[random].text;
  quoteAuthor.innerHTML = data[random].author;
};

const getQuote = async () => {
  try {
    const res = await fetch("https://type.fit/api/quotes");
    const json = await res.json();
    changeQuote(json);
  } catch (err) {
    console.error(err);
  }
};

getQuote();

changeQuoteBtn.addEventListener("click", getQuote);

// CHANGING MENU CARDS

const cardBtn = document.querySelectorAll(".menu__list--btn");
const cardNotes = document.querySelector(".notes");
const cardWallet = document.querySelector(".wallet");
const cardCalendar = document.querySelector(".calendar");
const cardTasks = document.querySelector(".tasks");
const cards = document.querySelectorAll(".card");

cardBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.target.closest("li").classList.contains("item-tasks")) {
      cards.forEach((card) => card.classList.remove("active-card"));
      cards.forEach((card) => card.classList.add("hidden"));
      cardTasks.classList.remove("hidden");
      cardTasks.classList.add("active-card");
    }
    if (e.target.closest("li").classList.contains("item-notes")) {
      cards.forEach((card) => card.classList.remove("active-card"));
      cards.forEach((card) => card.classList.add("hidden"));
      cardNotes.classList.remove("hidden");
      cardNotes.classList.add("active-card");
    }
    if (e.target.closest("li").classList.contains("item-wallet")) {
      cards.forEach((card) => card.classList.remove("active-card"));
      cards.forEach((card) => card.classList.add("hidden"));
      cardWallet.classList.remove("hidden");
      cardWallet.classList.add("active-card");
    }
    if (e.target.closest("li").classList.contains("item-calendar")) {
      cards.forEach((card) => card.classList.remove("active-card"));
      cards.forEach((card) => card.classList.add("hidden"));
      cardCalendar.classList.remove("hidden");
      cardCalendar.classList.add("active-card");
    }
  });
});

// TASK SECTION
const taskInput = document.querySelector(".tasks__input");
const taskBox = document.querySelector(".new-tasks-box");
const addTaskBtn = document.querySelector(".tasks__add-btn");
const acceptEditWindowBtn = document.querySelector(".edit-btn__accept");
const closeEditWindowBtn = document.querySelector(".edit-btn__close");
let editWidnow = document.querySelector(".tasks__edit");
let editInput = document.querySelector(".tasks__edit--input");

let taskPlace;
let newTask;
let idNumber = 0;
let taskToEdit;

const addNewTask = () => {
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
  console.log(taskToDelete);
  taskToDelete.remove();
};

const openEditWindow = (e) => {
  const oldTask = e.target.closest(".tasks__new-task").id;
  taskToEdit = document.getElementById(oldTask);
  editInput.value = taskToEdit.firstChild.textContent;
  editWidnow.style.display = "flex";
};

const actionClick = (e) => {
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

const changeTask = () => {
  taskToEdit.firstChild.textContent = editInput.value;
  editWidnow.style.display = "none";
  editInput.innerHTML = "";
};

const closeEditWindow = () => {
  editWidnow.style.display = "none";
};

addTaskBtn.addEventListener("click", addNewTask);
taskBox.addEventListener("click", actionClick);
acceptEditWindowBtn.addEventListener("click", changeTask);
closeEditWindowBtn.addEventListener("click", closeEditWindow);

// NOTES SECTION
const notesBox = document.querySelector(".new-notes-box");
const noteTitle = document.querySelector(".form__note-title");
const noteContent = document.querySelector(".form__textarea");
const addNoteBtn = document.querySelector(".form__accept-btn");
const editNotePanel = document.querySelector(".note-edit");
const editNoteCloseBtn = document.querySelector(".note-edit__btn--close");
const editNoteAcceptBtn = document.querySelector(".note-edit__btn--accept");
let editNoteTitleInput = document.querySelector(".note-edit__title");
let editNoteTextarea = document.querySelector(".note-edit__content");

let notePlace;
let idNoteNumber = 0;
let noteToEdit;
let newNoteTitle;
let newNoteContent;

const addNewNote = () => {
  if (noteTitle.value !== "") {
    idNoteNumber++;

    notePlace = document.createElement("div");
    notePlace.classList.add("notes__new-note");
    notePlace.setAttribute("id", `id-note-${idNoteNumber}`);
    notesBox.appendChild(notePlace);
    newNoteTitle = document.createElement("p");
    newNoteTitle.innerHTML = noteTitle.value;
    newNoteTitle.classList.add("notes__new-note--title");
    notePlace.appendChild(newNoteTitle);

    newNoteContent = document.createElement("p");
    newNoteContent.innerHTML = noteContent.value;

    newNoteContent.classList.add("hidden");
    notePlace.appendChild(newNoteContent);
    createNewNoteBtns();
  } else {
    console.log("wprowadz tekst");
  }

  noteTitle.value = "";
  noteContent.value = "";
};

const createNewNoteBtns = () => {
  const btnsNoteArea = document.createElement("div");
  btnsNoteArea.classList.add("notes__new-note--buttons");
  notePlace.appendChild(btnsNoteArea);

  const editNoteBtn = document.createElement("button");
  editNoteBtn.classList.add("note__new-note--edit-btn");
  editNoteBtn.classList.add("note__new-note--btn");
  editNoteBtn.innerHTML = "edit";

  const deleteNoteBtn = document.createElement("button");
  deleteNoteBtn.classList.add("note__new-note--trash-btn");
  deleteNoteBtn.classList.add("note__new-note--btn");
  deleteNoteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';

  btnsNoteArea.appendChild(editNoteBtn);
  btnsNoteArea.appendChild(deleteNoteBtn);
};

const deleteNote = (e) => {
  const noteToDelete = e.target.closest(".notes__new-note");
  noteToDelete.remove();
};

const openEditNotePanel = (e) => {
  const oldNote = e.target.closest(".notes__new-note").id;
  noteToEdit = document.getElementById(oldNote);
  editNoteTitleInput.value = noteToEdit.firstChild.textContent;
  editNoteTextarea.value = noteToEdit.firstChild.nextSibling.textContent;
  editNotePanel.classList.remove("hidden");
};

const changeNote = (e) => {
  noteToEdit.firstChild.textContent = editNoteTitleInput.value;
  noteToEdit.firstChild.nextSibling.textContent = editNoteTextarea.value;
  editNotePanel.classList.add("hidden");
  editNoteTitleInput.innerHTML = "";
  editNoteTextarea.innerHTML = "";
};

const actionBtns = (e) => {
  if (
    e.target.closest("button").classList.contains("note__new-note--trash-btn")
  ) {
    deleteNote(e);
  } else if (
    e.target.closest("button").classList.contains("note__new-note--edit-btn")
  ) {
    openEditNotePanel(e);
  }
};

const closeEditNotePanel = () => {
  editNotePanel.classList.add("hidden");
};

editNoteAcceptBtn.addEventListener("click", changeNote);
notesBox.addEventListener("click", actionBtns);
editNoteCloseBtn.addEventListener("click", closeEditNotePanel);
addNoteBtn.addEventListener("click", addNewNote);

// Today
const todayDate = document.querySelector(".today__date--day");
const todayDayName = document.querySelector(".today__date--day-name");
const temperature = document.querySelector(".weather__temp");
const sunset = document.querySelector(".sunset__text");
const sunrise = document.querySelector(".sunrise__text");
const weatherIcon = document.querySelector(".weather__img");
const weatherPressure = document.querySelector(".weather__pressure");
const weatherHumidity = document.querySelector(".weather__humidity");
const weatherCity = document.querySelector(".weather__city");
const weatherBox = document.querySelector(".weather");

// let getDate = new Date().toDateString();
const getDate = moment().format("DD.MM.YYYY");
const getDay = moment().format("dddd");

todayDate.textContent = getDate;
todayDayName.textContent = getDay;

const getWeatherData = async (lat, long) => {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=0ac8d24292bec7ba2bf644e405cffefb`
    );
    const data = await res.json();
    temperature.textContent = `${(data.main.temp - 273.15).toFixed(1)} ℃`;
    console.log(data);
    sunrise.textContent = `Sunrise: ${new Date(
      data.sys.sunrise * 1000
    ).toLocaleTimeString("default")}`;
    sunset.textContent = `Sunset: ${new Date(
      data.sys.sunset * 1000
    ).toLocaleTimeString("default")}`;
    weatherCity.innerHTML = data.name;
    weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    weatherPressure.textContent = `${data.main.pressure} hPa`;
    weatherHumidity.textContent = `${data.main.humidity} %`;
  } catch (err) {
    console.error(err);
  }
};

const showWeather = () => {
  let latitude;
  let longitude;
  if (navigator.geolocation)
    navigator.geolocation.getCurrentPosition(
      function (position) {
        latitude = position.coords.latitude.toFixed(2);
        longitude = position.coords.longitude.toFixed(2);
        getWeatherData(latitude, longitude);
      },
      function () {
        alert("could not get your position");
      }
    );
};
showWeather();

// WALLET SECTION
const addTrnasactionBtn = document.querySelector(".add-transaction-btn");
const newTransactionWindow = document.querySelector(".wallet__new-transaction");
const closeNewTransactionBtn = document.querySelector(
  ".new-transactions__buttons--cancel"
);
const saveeNewTransactionBtn = document.querySelector(
  ".new-transactions__buttons--save"
);
const newTransactionType = document.querySelector("#type");
const newTransactionTitleInput = document.querySelector("#name");
const newTransactionValueInput = document.querySelector("#value");
const expensesList = document.querySelector(".expenses__list");
const incomesList = document.querySelector(".incomes__list");
const walletBalanceValue = document.querySelector(".wallet__balance--value");

let newTransactionElement;

const openNewTransactionWindow = () => {
  newTransactionWindow.style.display = "flex";
};

const closeNewTransactionWindow = () => {
  newTransactionWindow.style.display = "none";
};

const addNewTransaction = () => {
  if (newTransactionType.value === "expense") {
    createTransaction();
    expensesList.appendChild(newTransactionElement);

    walletBalanceValue.textContent =
      parseFloat(walletBalanceValue.textContent) -
      parseFloat(newTransactionValueInput.value);
  }

  if (newTransactionType.value === "income") {
    createTransaction();
    incomesList.appendChild(newTransactionElement);

    walletBalanceValue.textContent =
      parseFloat(walletBalanceValue.textContent) +
      parseFloat(newTransactionValueInput.value);
  }

  newTransactionTitleInput.value = "";
  newTransactionValueInput.value = "";

  closeNewTransactionWindow();
};

// const countWalletBalance = () => {

// }

const createTransaction = () => {
  newTransactionElement = document.createElement("li");
  newTransactionElement.classList.add("expenses__list--item");
  newTransactionElement.innerHTML = newTransactionTitleInput.value;

  const newTransactionValue = document.createElement("span");
  newTransactionValue.classList.add("new-transaction__span");
  newTransactionValue.innerHTML = `${newTransactionValueInput.value} zł`;

  newTransactionElement.appendChild(newTransactionValue);
};

addTrnasactionBtn.addEventListener("click", openNewTransactionWindow);
saveeNewTransactionBtn.addEventListener("click", addNewTransaction);
closeNewTransactionBtn.addEventListener("click", closeNewTransactionWindow);
