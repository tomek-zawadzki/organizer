const cardNotes = document.querySelector(".notes");
const cardWallet = document.querySelector(".wallet");
const cardCalendar = document.querySelector(".calendar");
const cardTasks = document.querySelector(".tasks");
const cards = document.querySelectorAll(".card");

export const changeCards = (e) => {
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
};
