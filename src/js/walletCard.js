import { validationTekst } from "./validation";

const newTransactionWindow = document.querySelector(".wallet__new-transaction");
const newTransactionType = document.querySelector("#type");
const newTransactionTitleInput = document.querySelector("#name");
const newTransactionValueInput = document.querySelector("#value");
const expensesList = document.querySelector(".expenses__list");
const incomesList = document.querySelector(".incomes__list");
const walletBalanceValue = document.querySelector(".wallet__balance--value");

let newTransactionElement;

export const openNewTransactionWindow = () => {
  newTransactionWindow.style.display = "flex";
};

export const closeNewTransactionWindow = () => {
  newTransactionWindow.style.display = "none";
};

export const addNewTransaction = () => {
  if (
    newTransactionTitleInput.value !== "" &&
    newTransactionValueInput.value !== ""
  ) {
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
  } else {
    validationTekst("title or value");
  }
};

const createTransaction = () => {
  newTransactionElement = document.createElement("li");
  newTransactionElement.classList.add("expenses__list--item");
  newTransactionElement.innerHTML = newTransactionTitleInput.value;

  const newTransactionValue = document.createElement("span");
  newTransactionValue.classList.add("new-transaction__span");
  newTransactionValue.innerHTML = `${newTransactionValueInput.value} zł`;

  newTransactionElement.appendChild(newTransactionValue);
};
