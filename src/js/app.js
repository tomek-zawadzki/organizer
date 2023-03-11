import moment from "moment";

import { openMenu } from "./menu.js";
import { showWeather } from "./weather.js";
import { getQuote, changeQuoteBtn } from "./quoteGenerator.js";
import { changeCards } from "./changeCards.js";
import {
  addNewTask,
  actionClick,
  changeTask,
  closeEditWindow,
  taskBox,
} from "./taskCard.js";
import {
  addNewNote,
  changeNote,
  actionBtns,
  closeEditNotePanel,
  notesBox,
} from "./notesCard.js";
import {
  openNewTransactionWindow,
  addNewTransaction,
  closeNewTransactionWindow,
} from "./walletCard.js";

//MENU
const menuBtn = document.querySelector(".menu__title");
menuBtn.addEventListener("click", openMenu);

// QUOTE GENERATOR
getQuote();
changeQuoteBtn.addEventListener("click", getQuote);

// CHANGING MENU CARDS
const cardBtn = document.querySelectorAll(".menu__list--btn");
cardBtn.forEach((btn) => {
  btn.addEventListener("click", changeCards);
});

// WEATHER
const todayDate = document.querySelector(".today__date--day");
const todayDayName = document.querySelector(".today__date--day-name");

const getDate = moment().format("DD.MM.YYYY");
const getDay = moment().format("dddd");

todayDate.textContent = getDate;
todayDayName.textContent = getDay;

showWeather();

// TASKS CARD
const addTaskBtn = document.querySelector(".tasks__add-btn");
const acceptEditWindowBtn = document.querySelector(".edit-btn__accept");
const closeEditWindowBtn = document.querySelector(".edit-btn__close");

addTaskBtn.addEventListener("click", addNewTask);
taskBox.addEventListener("click", actionClick);
acceptEditWindowBtn.addEventListener("click", changeTask);
closeEditWindowBtn.addEventListener("click", closeEditWindow);

// NOTES CARD
const addNoteBtn = document.querySelector(".form__accept-btn");
const editNoteCloseBtn = document.querySelector(".note-edit__btn--close");
const editNoteAcceptBtn = document.querySelector(".note-edit__btn--accept");

editNoteAcceptBtn.addEventListener("click", changeNote);
notesBox.addEventListener("click", actionBtns);
editNoteCloseBtn.addEventListener("click", closeEditNotePanel);
addNoteBtn.addEventListener("click", addNewNote);

// WALLET CARD
const addTrnasactionBtn = document.querySelector(".add-transaction-btn");
const closeNewTransactionBtn = document.querySelector(
  ".new-transactions__buttons--cancel"
);
const saveeNewTransactionBtn = document.querySelector(
  ".new-transactions__buttons--save"
);

addTrnasactionBtn.addEventListener("click", openNewTransactionWindow);
saveeNewTransactionBtn.addEventListener("click", addNewTransaction);
closeNewTransactionBtn.addEventListener("click", closeNewTransactionWindow);
