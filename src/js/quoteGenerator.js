const quoteText = document.querySelector(".quotes__text");
const quoteAuthor = document.querySelector(".quotes__author");

export const changeQuoteBtn = document.querySelector(".quotes__change-btn");

const changeQuote = (data) => {
  const random = Math.floor(Math.random() * data.length);
  quoteText.innerHTML = data[random].text;
  quoteAuthor.innerHTML = data[random].author;
};

export const getQuote = async () => {
  try {
    const res = await fetch("https://type.fit/api/quotes");
    const json = await res.json();
    changeQuote(json);
  } catch (err) {
    console.error(err);
  }
};
