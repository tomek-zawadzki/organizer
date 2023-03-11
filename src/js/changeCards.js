const cardNotes = document.querySelector(".notes");
const cardWallet = document.querySelector(".wallet");
const cardCalendar = document.querySelector(".calendar");
const cardTasks = document.querySelector(".tasks");
const cards = document.querySelectorAll(".card");

export const changeCards = (e) => {
  if (e.target.closest("li").classList.contains("item-tasks")) {
    setActiveCard(cardTasks);
  }
  if (e.target.closest("li").classList.contains("item-notes")) {
    setActiveCard(cardNotes);
  }
  if (e.target.closest("li").classList.contains("item-wallet")) {
    setActiveCard(cardWallet);
  }
  if (e.target.closest("li").classList.contains("item-calendar")) {
    setActiveCard(cardCalendar);
  }
};

const setActiveCard = (cardToSet) => {
  cards.forEach((card) => card.classList.remove("active-card"));
  cards.forEach((card) => card.classList.add("hidden"));
  cardToSet.classList.remove("hidden");
  cardToSet.classList.add("active-card");
};
